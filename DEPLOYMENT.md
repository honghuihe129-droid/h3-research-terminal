# H3 Deployment

H3 now keeps Netlify as the existing public site and adds Cloudflare Pages as the next primary host. GitHub Pages is configured as a backup mirror once the repository is pushed to GitHub.

## Current Hosts

- Netlify: `https://h3-research-terminal.netlify.app`
- Cloudflare Pages: `https://h3-research-terminal.pages.dev`
- GitHub Pages mirror: enabled by `.github/workflows/pages.yml` after the repo is pushed and Pages is enabled for the repository

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

Push this repository to GitHub, then enable Pages with `GitHub Actions` as the source. The workflow builds the same `dist` artifact after checking `site/app.js` and `site/data/market-data.json`.

The mirror updates on pushes to `main` or `master`, and can also be triggered manually from the Actions tab.

## Netlify

Keep `netlify.toml` and the existing Netlify project untouched while Cloudflare Pages is tested. Netlify can remain as a fallback URL even after Cloudflare becomes primary.
