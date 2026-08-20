# H3 Deployment

H3 now keeps Netlify as the existing public site and adds Cloudflare Pages as the next primary host. GitHub Pages is configured as a backup mirror once the repository is pushed to GitHub.

## Current Hosts

- Netlify: `https://h3-research-terminal.netlify.app`
- Cloudflare Pages: `https://h3-research-terminal.pages.dev`
- GitHub repository: `https://github.com/honghuihe129-droid/h3-research-terminal`
- GitHub Pages mirror: `https://honghuihe129-droid.github.io/h3-research-terminal`

## Cloudflare Pages

The static output is `dist`, generated from `site`.

```powershell
npm.cmd run check
npm.cmd run build
$env:CLOUDFLARE_API_TOKEN = "<cloudflare-api-token>"
$env:CLOUDFLARE_ACCOUNT_ID = "<cloudflare-account-id>"
npm.cmd run deploy:cloudflare
```

For the daily production path, use:

```powershell
$env:CLOUDFLARE_API_TOKEN = "<cloudflare-api-token>"
$env:CLOUDFLARE_ACCOUNT_ID = "<cloudflare-account-id>"
npm.cmd run update:cloudflare
```

The Cloudflare API token needs permission to edit Cloudflare Pages for the target account. `CLOUDFLARE_ACCOUNT_ID` is recommended when the Cloudflare login has access to more than one account.

Current Cloudflare Pages project:

```text
Project: h3-research-terminal
Production URL: https://h3-research-terminal.pages.dev
Latest verified data: 2026-08-18T15:30:54+08:00
```

To make Cloudflare the daily 15:30 Beijing-time publish target, install the scheduled task after the token is available as a persistent machine/user environment variable:

```powershell
powershell.exe -ExecutionPolicy Bypass -File scripts\install_daily_update.ps1 -Provider Cloudflare
```

Netlify remains available:

```powershell
powershell.exe -ExecutionPolicy Bypass -File scripts\install_daily_update.ps1 -Provider Netlify
```

## GitHub Pages Mirror

The repository uses the `gh-pages` branch as the static mirror route. This keeps the backup simple and avoids requiring GitHub Actions Pages setup.

GitHub repository settings:

```text
Settings -> Pages -> Build and deployment
Source: Deploy from a branch
Branch: gh-pages / root
```

## Netlify

Keep `netlify.toml` and the existing Netlify project untouched while Cloudflare Pages is tested. Netlify can remain as a fallback URL even after Cloudflare becomes primary.
