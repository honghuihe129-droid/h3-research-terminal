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
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$($resolvedScript.Path)`""
$trigger = New-ScheduledTaskTrigger -Daily -At "15:30"
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries
Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Description "Update and publish H^3 market research data at Beijing market close." -Force | Out-Null
Write-Output "Installed scheduled task: $TaskName ($Provider)"
