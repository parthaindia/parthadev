# PHASE 1 — Project Setup ✅

> Status: **DONE** · Everything here is already done in this repo.

## What we did

1. **Scaffolded React + Vite**
   ```bash
   npm create vite@latest parthadev -- --template react
   npm install
   ```
2. **Project structure**
   ```
   parthadev/
   ├── index.html          # page shell + SEO meta + Poppins font
   ├── src/
   │   ├── config.jsx      # ⭐ ALL editable content lives here
   │   ├── App.jsx         # section order
   │   ├── index.css       # design system (colors, spacing, components)
   │   └── components/     # one file per section
   │       ├── Navbar.jsx      # sticky nav + mobile hamburger
   │       ├── Hero.jsx        # headline + batch badge + CTAs
   │       ├── Stats.jsx       # quick numbers strip
   │       ├── Instructor.jsx  # mentor card
   │       ├── Curriculum.jsx  # tabbed DE + Cloud tracks, phase cards
   │       ├── Why.jsx         # "why join us" grid
   │       ├── Projects.jsx    # project portfolio grid
   │       ├── Roadmap.jsx     # zero → placed visual path
   │       ├── Testimonials.jsx
   │       ├── FAQ.jsx         # accordion
   │       ├── Contact.jsx     # WhatsApp CTA section
   │       └── Footer.jsx
   └── docs/               # these phase files
   ```
3. **Chosen stack:** React 19 + Vite 8 — fast, modern, deploys free on Vercel/Netlify.

## Commands you'll reuse

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server (http://localhost:5173) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code quality |

## Next → [PHASE 2](PHASE-2-content-branding.md)
