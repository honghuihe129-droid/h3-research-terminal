$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$dataPath = Join-Path $root "site\data\market-data.json"
$candidatePath = Join-Path $root "site\data\market-data.precheck.json"

Set-Location $root

Copy-Item -LiteralPath $dataPath -Destination $candidatePath -Force
try {
  & (Join-Path $scriptDir "update_market_data.ps1") -OutputPath $candidatePath
  & node.exe "scripts\validate_market_data.js" "site\data\market-data.precheck.json"
  Remove-Item -LiteralPath $candidatePath -Force
  Write-Output "H3 precheck passed"
} catch {
  Write-Error "H3 precheck failed. Candidate data preserved at $candidatePath. $_"
  throw
}
