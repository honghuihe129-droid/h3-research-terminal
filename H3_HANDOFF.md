# H3 Code Handoff

Canonical detailed handoff:

```text
skills/h3-market-dashboard/references/handoff.md
```

Installed/portable skill source:

```text
skills/h3-market-dashboard/
```

Fast runbook:

```powershell
cd $PWD
node --check site\app.js
npm.cmd run build
node scripts\validate_market_data.js site\data\market-data.json
powershell.exe -ExecutionPolicy Bypass -File scripts\update_and_deploy_netlify.ps1
```

Production:

```text
https://h3-research-terminal.netlify.app
Netlify site id: 90aa337d-1b04-4f42-b860-8e294e6802a1
```

Core rule:

```text
Do not turn concepts into recommendations.
Turn market information into a verifiable research framework.
```

Use the skill reference for the full code map, data contract, UI patterns, deployment path, scheduled tasks, validation commands, and failure modes.
