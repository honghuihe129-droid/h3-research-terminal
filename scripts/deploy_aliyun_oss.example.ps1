param(
  [Parameter(Mandatory=$true)][string]$Bucket,
  [Parameter(Mandatory=$true)][string]$Endpoint,
  [string]$DistDir = (Join-Path $PSScriptRoot "..\dist")
)

$ErrorActionPreference = "Stop"

$ossutil = Get-Command ossutil -ErrorAction SilentlyContinue
if (-not $ossutil) {
  $ossutil = Get-Command ossutil64 -ErrorAction SilentlyContinue
}
if (-not $ossutil) {
  throw "ossutil or ossutil64 is required. Configure Aliyun AccessKey before running."
}

& $ossutil.Source cp -r $DistDir "oss://$Bucket/" --endpoint $Endpoint --update
& $ossutil.Source website "oss://$Bucket" --index-document index.html --error-document 404.html --endpoint $Endpoint

Write-Output "Uploaded H^3 to Aliyun OSS bucket: $Bucket"
