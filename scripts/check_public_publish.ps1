param(
  [string]$PublicDataUrl = "https://h3-research-terminal.pages.dev/data/market-data.json",
  [string]$LocalDataPath = (Join-Path (Split-Path -Parent $PSScriptRoot) "site\data\market-data.json"),
  [string]$ProjectName = "h3-research-terminal",
  [string]$Branch = "main",
  [string]$AccountId = $env:CLOUDFLARE_ACCOUNT_ID,
  [bool]$Repair = $true,
  [string]$LogPath = (Join-Path (Split-Path -Parent $PSScriptRoot) "logs\H3PublishCheck.log")
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$logDir = Split-Path -Parent $LogPath
New-Item -ItemType Directory -Path $logDir -Force | Out-Null
Set-Location $root

function Write-LogLine {
  param([string]$Message)
  $line = "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss zzz") $Message"
  $line | Tee-Object -FilePath $LogPath -Append
}

function Read-JsonFile {
  param([string]$Path)
  $text = [System.IO.File]::ReadAllText((Resolve-Path $Path).Path, [System.Text.Encoding]::UTF8)
  $text | ConvertFrom-Json
}

function Get-PublicData {
  param([string]$Url)
  $separator = if ($Url.Contains("?")) { "&" } else { "?" }
  $cacheBustUrl = "$Url$separator" + "ts=$([DateTimeOffset]::Now.ToUnixTimeSeconds())"
  Invoke-RestMethod -Uri $cacheBustUrl -TimeoutSec 45
}

function Test-Published {
  param($LocalData, $PublicData)

  $localDate = [DateTimeOffset]::Parse([string]$LocalData.generatedAt)
  $publicDate = [DateTimeOffset]::Parse([string]$PublicData.generatedAt)
  [ordered]@{
    localGeneratedAt = [string]$LocalData.generatedAt
    publicGeneratedAt = [string]$PublicData.generatedAt
    isCurrent = $publicDate -ge $localDate
  }
}

Write-LogLine "H3 publish check started"
Write-LogLine "Public data URL: $PublicDataUrl"

try {
  & node.exe "scripts\validate_market_data.js" $LocalDataPath | Tee-Object -FilePath $LogPath -Append
  if ($LASTEXITCODE -ne 0) {
    throw "Local data validation failed with exit code $LASTEXITCODE"
  }

  $localData = Read-JsonFile $LocalDataPath
  $publicData = Get-PublicData $PublicDataUrl
  $status = Test-Published $localData $publicData

  Write-LogLine "Local generatedAt: $($status.localGeneratedAt)"
  Write-LogLine "Public generatedAt: $($status.publicGeneratedAt)"

  if ($status.isCurrent) {
    Write-LogLine "Public site is current"
    exit 0
  }

  Write-LogLine "Public site is stale"
  if (-not $Repair) {
    throw "Public site is stale and Repair is disabled"
  }

  Write-LogLine "Repair enabled; redeploying Cloudflare Pages"
  $previousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  & (Join-Path $PSScriptRoot "deploy_cloudflare_pages.ps1") -ProjectName $ProjectName -Branch $Branch -AccountId $AccountId *>&1 | Tee-Object -FilePath $LogPath -Append
  $ErrorActionPreference = $previousErrorActionPreference
  if ($LASTEXITCODE -ne 0) {
    throw "Cloudflare redeploy failed with exit code $LASTEXITCODE"
  }

  Start-Sleep -Seconds 10
  $recheckedPublicData = Get-PublicData $PublicDataUrl
  $recheckedStatus = Test-Published $localData $recheckedPublicData
  Write-LogLine "Rechecked public generatedAt: $($recheckedStatus.publicGeneratedAt)"

  if (-not $recheckedStatus.isCurrent) {
    throw "Cloudflare redeploy finished, but public data is still stale"
  }

  Write-LogLine "H3 publish check repaired the public site"
  exit 0
} catch {
  Write-LogLine "H3 publish check failed: $($_.Exception.Message)"
  exit 1
}
