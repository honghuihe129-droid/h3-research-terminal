param(
  [string]$TaskScript = (Join-Path $PSScriptRoot "update_and_deploy_cloudflare.ps1"),
  [string]$LogPath = (Join-Path (Split-Path -Parent $PSScriptRoot) "logs\H3DailyUpdate.log")
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

Write-LogLine "H3 scheduled update started"
Write-LogLine "Task script: $TaskScript"
Write-LogLine "Working directory: $root"

try {
  $previousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  & $TaskScript *>&1 | Tee-Object -FilePath $LogPath -Append
  $ErrorActionPreference = $previousErrorActionPreference
  $exitCode = $LASTEXITCODE
  if ($exitCode -ne 0) {
    throw "Task script exited with code $exitCode"
  }
  Write-LogLine "H3 scheduled update completed"
  exit 0
} catch {
  Write-LogLine "H3 scheduled update failed: $($_.Exception.Message)"
  exit 1
}
