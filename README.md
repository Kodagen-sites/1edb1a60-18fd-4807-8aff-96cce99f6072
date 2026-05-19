# Joevexm Nig Ltd — cinematic site

Enterprise digital-infrastructure landing site for **Joevexm Nig Ltd**
("Building Nigeria's digital backbone"). Next.js 16 App Router · React 19 ·
Tailwind · Framer Motion · GSAP.

## Run

```bash
npm install
npm run build      # next build --debug-prerender
npm run start      # serves the production build
npm run dev        # local dev
```

## Generation fingerprint

| Axis | Value |
|---|---|
| Archetype | G — Structured Hybrid (premium tier, T2 scroll-scrub hero) |
| Style | S1 — Neon Control Room · cyan-primary |
| Voice family | V6 (technical) |
| Header / Footer | command-bar / FT1 classic 5-column |
| Service card | CV4 — Liquid Glass |
| Hero | HO2 left-split · H3 gradient text · ScrollCanvas frame-scrub |
| CTA | CTA4 — magnetic buttons |
| Motion bg | particle-field (the Statement breather) |
| Build mode | landing (public site only — no admin) |
| Asset mode | live-generate |

## Cinematic hero

A scroll-scrubbed data-centre corridor. The pipeline produced:

- Nano Banana keyframes → Veo 8s clip → ffmpeg stitch → 96 extracted frames
- Frames + section/service imagery hosted on Supabase Storage (CDN)
- `content/frames-manifest.json` → `frameUrlTemplate` consumed by `ScrollCanvas`
- `content/asset-manifest.json` → image/video slot → CDN URL map

`lib/site-config.ts` is the single source of truth for copy, services and
asset slots — re-theme or re-copy from that one file.

## Pages

`/` home · `/services` · `/services/[slug]` (6 capabilities) · `/about` ·
`/contact` (working form → `/api/contact`) · `/privacy` · `/terms` ·
`robots.txt` · `sitemap.xml`.
