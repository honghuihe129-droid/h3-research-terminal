param(
  [string]$TaskName = "H3DailyUpdate",
  [ValidateSet("Cloudflare", "Netlify", "LocalOnly")]
  [string]$Provider = "Cloudflare",
  [string]$ScriptPath = ""
)

$ErrorActionPreference = "Stop"

if (-not $ScriptPath) {
  $ScriptPath = switch ($Provider) {
    "Cloudflare" { Join-Path $PSScriptRoot "update_and_deploy_cloudflare.ps1" }
    "Netlify" { Join-Path $PSScriptRoot "update_and_deploy_netlify.ps1" }
    "LocalOnly" { Join-Path $PSScriptRoot "update_market_data.ps1" }
  }
}

$resolvedScript = Resolve-Path $ScriptPath
$root = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $root "logs"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null
$logPath = Join-Path $logDir "$TaskName.log"
$wrapper = Resolve-Path (Join-Path $PSScriptRoot "run_scheduled_update.ps1")
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$($wrapper.Path)`" -TaskScript `"$($resolvedScript.Path)`" -LogPath `"$logPath`"" -WorkingDirectory $root
$trigger = New-ScheduledTaskTrigger -Daily -At "15:30"
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 10) -ExecutionTimeLimit (New-TimeSpan -Hours 1)
Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Description "Update and publish H^3 market research data at Beijing market close." -Force | Out-Null
Write-Output "Installed scheduled task: $TaskName ($Provider)"
Write-Output "Log file: $logPath"
