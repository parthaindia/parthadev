# ParthaDev Community 🇮🇳

A Gen-Z training website for **Data Engineering + Cloud stack**, built for Indian students.

**Stack:** React 19 · Vite 8 · vanilla CSS · zero extra runtime deps

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Before you launch — open `src/config.jsx` and update

- [ ] `CONTACT.whatsappNumber` — your WhatsApp (digits only)
- [ ] `CONTACT.linkedin` / `CONTACT.youtube` — real profile URLs
- [ ] `BATCH.date` — new batch date
- [ ] `TESTIMONIALS` — real student reviews

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint |

## Docs (how this site was built, phase by phase)

- [PHASE 1 — Project Setup](docs/PHASE-1-setup-project.md)
- [PHASE 2 — Content + Branding](docs/PHASE-2-content-branding.md)
- [PHASE 3 — Verify Before Launch](docs/PHASE-3-verify-launch.md)
- [PHASE 4 — Git + Private GitHub Repo](docs/PHASE-4-git-push.md)

## Deploy

```bash
vercel --prod
```
(Full options in PHASE 3 docs.)
