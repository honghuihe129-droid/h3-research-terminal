param(
  [string]$RepoUrl = "https://github.com/honghuihe129-droid/h3-research-terminal.git",
  [string]$Branch = "gh-pages",
  [string]$TempPath = (Join-Path $env:TEMP "h3-gh-pages-mirror")
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$dist = Join-Path $root "dist"

Set-Location $root
$env:GIT_TERMINAL_PROMPT = "0"

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

$requiredFiles = @(
  (Join-Path $dist "index.html"),
  (Join-Path $dist "app.js"),
  (Join-Path $dist "styles.css"),
  (Join-Path $dist "data\market-data.json")
)

foreach ($file in $requiredFiles) {
  if (-not (Test-Path -LiteralPath $file)) {
    throw "GitHub Pages mirror requires built file: $file"
  }
}

$tempRoot = Resolve-Path $env:TEMP
if (Test-Path -LiteralPath $TempPath) {
  $resolvedTemp = Resolve-Path -LiteralPath $TempPath
  if (-not $resolvedTemp.Path.StartsWith($tempRoot.Path, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to remove unsafe mirror temp path: $($resolvedTemp.Path)"
  }
  Remove-Item -LiteralPath $resolvedTemp.Path -Recurse -Force
}

New-Item -ItemType Directory -Path $TempPath | Out-Null
Copy-Item -Path (Join-Path $dist "*") -Destination $TempPath -Recurse -Force

Set-Location $TempPath
Invoke-Checked { git init -b $Branch } "GitHub Pages mirror git init"
Invoke-Checked { git config user.name "Codex" } "GitHub Pages mirror git user.name"
Invoke-Checked { git config user.email "codex@openai.com" } "GitHub Pages mirror git user.email"
Invoke-Checked { git add . } "GitHub Pages mirror git add"
Invoke-Checked { git commit -m "Publish H3 static mirror" } "GitHub Pages mirror git commit"
Invoke-Checked { git remote add origin $RepoUrl } "GitHub Pages mirror git remote"
Invoke-Checked { git -c credential.interactive=false push -f origin $Branch } "GitHub Pages mirror push"
