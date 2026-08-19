param(
  [string]$OutputDir = (Join-Path $PSScriptRoot "..\dist")
)

$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$site = Join-Path $root "site"
$dist = Join-Path $root "dist"

if (Test-Path $dist) {
  Remove-Item -LiteralPath $dist -Recurse -Force
}

New-Item -ItemType Directory -Force -Path $dist | Out-Null
Copy-Item -LiteralPath (Join-Path $site "index.html") -Destination $dist
Copy-Item -LiteralPath (Join-Path $site "styles.css") -Destination $dist
Copy-Item -LiteralPath (Join-Path $site "app.js") -Destination $dist
Copy-Item -LiteralPath (Join-Path $site "data") -Destination $dist -Recurse

Copy-Item -LiteralPath (Join-Path $site "index.html") -Destination (Join-Path $dist "404.html")

Write-Output "Built public static site: $dist"
