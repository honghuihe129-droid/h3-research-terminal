param(
  [string]$ProjectName = "h3-research-terminal",
  [string]$Branch = "main",
  [string]$AccountId = $env:CLOUDFLARE_ACCOUNT_ID
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$dataPath = Join-Path $root "site\data\market-data.json"
$candidatePath = Join-Path $root "site\data\market-data.candidate.json"

Set-Location $root

function Invoke-Checked {
  param(
    [Parameter(Mandatory = $true)]
    [ScriptBlock]$Command,
    [Parameter(Mandatory = $true)]
    [string]$Label
  )

  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "$Label failed with exit code $LASTEXITCODE"
  }
}

Copy-Item -LiteralPath $dataPath -Destination $candidatePath -Force
try {
  & (Join-Path $scriptDir "update_market_data.ps1") -OutputPath $candidatePath
  if ($LASTEXITCODE -ne 0) {
    throw "Market data refresh failed with exit code $LASTEXITCODE"
  }

  Invoke-Checked { node.exe "scripts\validate_market_data.js" "site\data\market-data.candidate.json" } "Candidate market data validation"
  Copy-Item -LiteralPath $candidatePath -Destination $dataPath -Force
} finally {
  if (Test-Path -LiteralPath $candidatePath) {
    Remove-Item -LiteralPath $candidatePath -Force
  }
}

& (Join-Path $scriptDir "deploy_cloudflare_pages.ps1") -ProjectName $ProjectName -Branch $Branch -AccountId $AccountId
