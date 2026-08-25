$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$dataPath = Join-Path $root "site\data\market-data.json"
$candidatePath = Join-Path $root "site\data\market-data.precheck.json"

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
  Invoke-Checked { & (Join-Path $scriptDir "update_market_data.ps1") -OutputPath $candidatePath } "Market data precheck refresh"
  Invoke-Checked { node.exe "scripts\validate_market_data.js" "site\data\market-data.precheck.json" } "Market data precheck validation"
  Remove-Item -LiteralPath $candidatePath -Force
  Write-Output "H3 precheck passed"
} catch {
  Write-Error "H3 precheck failed. Candidate data preserved at $candidatePath. $_"
  throw
}
