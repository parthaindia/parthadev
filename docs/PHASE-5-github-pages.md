# PHASE 5 — GitHub Pages Hosting ✅

> Status: **DONE** — site deploys to GitHub Pages from this repo via GitHub Actions.

## What we did

1. **`vite.config.js`** — added `base: '/parthadev/'`
   GitHub Pages serves project sites under `/<repo-name>/`, so Vite must prefix all asset URLs with that path (otherwise you get a blank page).

2. **`.github/workflows/deploy.yml`** — a GitHub Actions workflow that:
   - runs on every push to `main` (or manual trigger from Actions tab)
   - runs `npm ci && npm run build`
   - uploads `dist/` and deploys it with `actions/deploy-pages@v4`

3. **Made the repo public** — GitHub Pages for private repos requires a paid (Pro) plan; public repos get it free. This is how the reference site berrytech is hosted too.

4. **Enabled Pages with "GitHub Actions" as the source**
   ```bash
   gh api repos/parthaindia/parthadev/pages -X POST -f build_type=workflow
   gh repo edit parthaindia/parthadev --visibility public --accept-visibility-change-consequences
   ```

## Live URL

**https://parthaindia.github.io/parthadev/**

## How deploys work now

```bash
git add -A && git commit -m "..." && git push
```
→ Actions tab shows "Deploy to GitHub Pages" running → site updates in ~1 minute.
Watch status: `gh run list --repo parthaindia/parthadev --limit 1`

## Renaming the repo later?

If you rename `parthadev` to anything else, also update `base` in `vite.config.js` to `/<new-name>/` — otherwise assets 404.
