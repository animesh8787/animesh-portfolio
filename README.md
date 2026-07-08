# Animesh Dhiman — Portfolio

A single-page portfolio built around a distinct visual identity (graphite +
signal-blue + sage, Newsreader/IBM Plex type system) — deliberately different
from ashwatthama.dev's warm ember palette, since this site is about you as a
researcher/engineer, not the Ashwatthama product.

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (scroll-reveal animations)
- lucide-react + two small hand-written inline SVGs for GitHub/LinkedIn
  (this version of lucide-react doesn't ship brand icons)

## Getting started
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before you deploy — fill these in

`src/data/content.ts` has two placeholders you should replace:
```ts
export const contact = {
  ...
  linkedin: "#", // <- paste your real LinkedIn URL
  github: "#",   // <- paste your real GitHub URL
};
```
Both currently link nowhere (`#`). Everything else — email, phone, location,
project descriptions, skills, stats — was pulled directly from your resumes.

## Content decisions worth knowing about

- **Which resume "won."** You have three resumes (ML/AI Safety-focused,
  Java/Spring backend-focused, and a general ML/data pipelines one). The
  hero and About section lead with the AI Safety framing — Elsevier paper,
  research interests, Ashwatthama's local-first angle — since it's the most
  distinctive story for the audience a portfolio like this attracts
  (research-adjacent recruiters, Anthropic Fellows-style programs). The
  Java/Spring backend work (DevRelease Tracker) is still featured as a
  secondary project, not buried, since it's real evidence of backend range.
- **Duplicate project resolved.** Two resumes each contain a "Resume
  Ranking/Screening System" project (one Python/FastAPI, one Java/Spring —
  likely the same underlying project rebuilt twice). The site features the
  Python/FastAPI version once, with a line noting it was also rebuilt in
  Java/Spring, rather than listing near-duplicate cards.
- **Every metric tag is copied from your resumes verbatim** (99.9% val
  accuracy, 97.7% mAP, 89.89% R², etc.) — nothing was invented or rounded.

## Project structure
```
src/
  data/content.ts         all copy — projects, skills, stats, contact info
  components/
    Hero.tsx               name, pitch, research-interest tags, node graph
    Stats.tsx               four-number strip
    FeaturedProjects.tsx    Ashwatthama + crack detection, full write-ups
    OtherProjects.tsx        compact cards for the remaining 3 projects
    Skills.tsx               categorized skill chips
    About.tsx                narrative paragraph section
    Contact.tsx              email/GitHub/LinkedIn + footer
    Nav.tsx                  sticky nav, scroll-aware background
    BrandIcons.tsx           hand-written GitHub/LinkedIn SVGs
```

## Deploying
This is a static Vite build — deploy `dist/` to Vercel, Netlify, or GitHub
Pages. If you bought a personal domain, point it here; if you want it under
`ashwatthama.dev/portfolio` instead, this build's `base` in `vite.config.ts`
would need to change from `/` to `/portfolio/` — say the word and I'll adjust it.
