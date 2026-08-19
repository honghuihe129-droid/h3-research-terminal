param(
  [Parameter(Mandatory=$true)][string]$Bucket,
  [string]$DistDir = (Join-Path $PSScriptRoot "..\dist")
)

$ErrorActionPreference = "Stop"

$coscmd = Get-Command coscmd -ErrorAction SilentlyContinue
if (-not $coscmd) {
  throw "coscmd is required. Configure Tencent Cloud SecretId/SecretKey/Region before running."
}

& $coscmd.Source upload -r -s $DistDir / --ignore "./.DS_Store"

Write-Output "Uploaded H^3 to Tencent COS bucket: $Bucket"
