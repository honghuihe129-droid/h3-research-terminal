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

Copy-Item -LiteralPath $dataPath -Destination $candidatePath -Force
try {
  & (Join-Path $scriptDir "update_market_data.ps1") -OutputPath $candidatePath
  & node.exe "scripts\validate_market_data.js" "site\data\market-data.candidate.json"
  Copy-Item -LiteralPath $candidatePath -Destination $dataPath -Force
} finally {
  if (Test-Path -LiteralPath $candidatePath) {
    Remove-Item -LiteralPath $candidatePath -Force
  }
}

& npm.cmd run build

$env:NODE_OPTIONS = "--require=$patchPath"
& npx.cmd netlify deploy --prod --dir=dist --site $SiteId
