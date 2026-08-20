# H3 Research Terminal

H3 is a public market research operating system. It turns market heat into an inspectable chain of evidence, financial transmission, valuation health, and next validation.

It is not a direct stock recommendation page.

## Public URLs

- Cloudflare Pages: https://h3-research-terminal.pages.dev
- Netlify fallback: https://h3-research-terminal.netlify.app
- GitHub repository: https://github.com/honghuihe129-droid/h3-research-terminal
- GitHub Pages mirror: https://honghuihe129-droid.github.io/h3-research-terminal

## Local Workflow

```powershell
npm.cmd run check
npm.cmd run build
```

The source site lives in `site/`. The generated static output lives in `dist/` and should not be edited by hand.

## Data

Canonical data file:

```text
site/data/market-data.json
```

The dashboard is designed around:

```text
market move -> real demand -> financial transmission -> valuation/trend check -> next validation
```

Daily update target: 15:30 Beijing time.

## Deployment

Cloudflare Pages is the current primary host. See `DEPLOYMENT.md` for deployment and mirror details.
