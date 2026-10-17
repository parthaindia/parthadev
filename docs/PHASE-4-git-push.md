# PHASE 4 — Git + Private GitHub Repo ✅

> Status: **DONE** — repo initialized, committed, pushed as **private**.

## What was run

```bash
# 1. Initialize git (repo root = parthadev/)
git init
git add -A
git commit -m "Initial launch: ParthaDev Community site"

# 2. Create the private repo on GitHub and push
gh repo create parthaindia/parthadev --private --source=. --push
```

`gh` CLI was already authenticated on this machine as **parthaindia** (if not, run `gh auth login` first).

## Repo settings

- Visibility: **public** (changed in PHASE 5 for free GitHub Pages hosting)
- Default branch: `main`
- URL: https://github.com/parthaindia/parthadev

## Day-to-day workflow (future edits)

```bash
git add -A
git commit -m "what you changed"
git push
```

Everything is covered by `.gitignore` (node_modules, dist, etc. are never committed).

## Optional next steps

- **🔥 GitHub Pages hosting** → see [PHASE 5](PHASE-5-github-pages.md) (done)

- **Web analytics** — Vercel has free built-in analytics; or add umami/GoatCounter
- **Custom domain** — e.g. `parthadev.in` via GitHub Pages custom domain or Vercel (~₹800/yr on GoDaddy/Namecheap)
- **SEO** — add an OG image to `public/` and OG meta tags in `index.html`
- **Form engine** — if you later want an enroll form (name/email/phone), Formspree free tier pairs well with this stack
