# PHASE 3 — Verify Before Launch ✅

> Status: **DONE** — all checks pass in this repo.

## Checks performed

| Check | Command | Result |
|---|---|---|
| Production build | `npm run build` | ✅ 0 errors (dist ~205 kB raw, 74 kB gzip JS) |
| Code quality | `npm run lint` | ✅ 0 warnings, 0 errors |
| Served page test | `npm run preview` + `curl` | ✅ HTTP 200, page renders |
| Mobile layout | CSS breakpoints at 860px / 480px | ✅ hamburger menu + stacked cards |

## Manual QA checklist (do once in browser)

- [ ] Run `npm run dev`, open all sections by scrolling
- [ ] Click every **WhatsApp button** → opens chat with your number
- [ ] Open FAQ accordion, curriculum tabs (Data Engineering ⇄ Cloud)
- [ ] Shrink window to phone width → hamburger menu works
- [ ] Update the ⚠️ items from [PHASE 2](PHASE-2-content-branding.md)

## Deploy (recommended: Vercel)

```bash
npm i -g vercel
vercel          # from project root, follow prompts (defaults are fine)
vercel --prod   # publish
```
Vercel auto-detects Vite. Free tier is enough for this site.

**Alternative — Netlify:** drag-and-drop the `dist/` folder at app.netlify.com/drop. Done.

**Alternative — GitHub Pages:** possible, but for a Vite SPA you need the `base` path trick (`/repo-name/` in vite.config.js) and GitHub Pages on private repos requires a paid plan. Vercel is simpler.
