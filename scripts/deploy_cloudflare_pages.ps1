param(
  [string]$ProjectName = "h3-research-terminal",
  [string]$Branch = "main",
  [string]$AccountId = $env:CLOUDFLARE_ACCOUNT_ID
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
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

Invoke-Checked { node.exe --check "site\app.js" } "JavaScript syntax check"
Invoke-Checked { node.exe "scripts\validate_market_data.js" "site\data\market-data.json" } "Market data validation"
Invoke-Checked { npm.cmd run build } "Static build"

if (-not $env:CLOUDFLARE_API_TOKEN) {
  throw "CLOUDFLARE_API_TOKEN is required for non-interactive Cloudflare Pages deploys."
}

if ($AccountId) {
  $env:CLOUDFLARE_ACCOUNT_ID = $AccountId
}

Invoke-Checked { npx.cmd wrangler pages deploy "dist" --project-name $ProjectName --branch $Branch } "Cloudflare Pages deploy"
