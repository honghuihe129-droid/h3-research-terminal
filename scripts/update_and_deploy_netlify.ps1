param(
  [string]$SiteId = "90aa337d-1b04-4f42-b860-8e294e6802a1"
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$patchPath = (Join-Path $scriptDir "netlify-dns-patch.cjs").Replace("\", "/")
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
  Invoke-Checked { & (Join-Path $scriptDir "update_market_data.ps1") -OutputPath $candidatePath } "Market data refresh"
  Invoke-Checked { node.exe "scripts\validate_market_data.js" "site\data\market-data.candidate.json" } "Candidate market data validation"
  Copy-Item -LiteralPath $candidatePath -Destination $dataPath -Force
} finally {
  if (Test-Path -LiteralPath $candidatePath) {
    Remove-Item -LiteralPath $candidatePath -Force
  }
}

Invoke-Checked { npm.cmd run build } "Static build"

$env:NODE_OPTIONS = "--require=$patchPath"
Invoke-Checked { npx.cmd netlify deploy --prod --dir=dist --site $SiteId } "Netlify deploy"
