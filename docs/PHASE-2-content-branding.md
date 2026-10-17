# PHASE 2 — Content + Branding ✅

> Status: **DONE** · All content is data-driven from one file.

## Design language (Gen-Z + Indian)

- **Dark neon theme**: near-black background `#0a0a12` with lime `#c8ff3d` + purple `#a855f7` gradients
- **Hinglish copy**: "samajh mein aayega", "bina hesitation", "Here's the tea 🍵"
- **Emoji-forward headlines**, pill-shaped buttons, glow effects, rounded cards
- **Poppins font** (loaded in `index.html`)
- Fully responsive: hamburger menu below 860px, stacked cards on mobile

## Where to edit what — `src/config.jsx`

| What you want to change | Edit this key |
|---|---|
| Site name, tagline | `SITE` |
| **WhatsApp number** | `CONTACT.whatsappNumber` (digits only, with country code) |
| Pre-filled WhatsApp message | `CONTACT.whatsappMessage` |
| Email, LinkedIn, YouTube, GitHub links | `CONTACT` |
| Batch date/time/seats | `BATCH` |
| Hero stat numbers | `STATS` |
| "Why join" cards | `WHY` |
| Curriculum phases (both tracks) | `TRACKS` |
| Project cards | `PROJECTS` |
| Roadmap steps | `ROADMAP` |
| Student reviews ⚠️ | `TESTIMONIALS` |
| FAQs | `FAQS` |
| Nav menu items | `NAV_LINKS` |

## ⚠️ Replace before launch

1. **`TESTIMONIALS`** — currently contains generic review text. Replace with real student feedback.
2. **Student photos / your real photo** — instructor avatar is a "PD" circle now. Drop an image into `public/` and use it in `Instructor.jsx`.
3. **LinkedIn / YouTube URLs** in `CONTACT` are placeholders.
4. **Batch date** in `BATCH.date`.

## Next → [PHASE 3](PHASE-3-verify-launch.md)
