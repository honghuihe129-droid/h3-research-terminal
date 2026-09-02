param(
  [string]$TaskName = "H3PublishCheck",
  [string]$At = "16:00",
  [string]$ScriptPath = (Join-Path $PSScriptRoot "check_public_publish.ps1")
)

$ErrorActionPreference = "Stop"

$resolvedScript = Resolve-Path $ScriptPath
$root = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $root "logs"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null
$logPath = Join-Path $logDir "$TaskName.log"

$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$($resolvedScript.Path)`" -LogPath `"$logPath`"" -WorkingDirectory $root
$trigger = New-ScheduledTaskTrigger -Daily -At $At
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 10) -ExecutionTimeLimit (New-TimeSpan -Minutes 45)

Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Description "Check that the H^3 Cloudflare Pages public site has published the latest validated market data." -Force | Out-Null

Write-Output "Installed scheduled task: $TaskName"
Write-Output "Daily time: $At"
Write-Output "Log file: $logPath"
