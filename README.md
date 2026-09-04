# Animesh Dhiman — Portfolio

A single-page portfolio built around a distinct visual identity (graphite +
emerald/teal signal accent, Newsreader/IBM Plex type system) — deliberately
different from ashwatthama.dev's warm ember palette and from other portfolios
built on the same base template, since this site is about you as a
researcher/engineer, not any one product.

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (scroll-reveal animations)
- lucide-react + two small hand-written inline SVGs for GitHub/LinkedIn
  (this version of lucide-react doesn't ship brand icons)
- `github-contributions-api.jogruber.de` for the live GitHub contribution
  heatmap (no auth/token required, client-side fetch)

## Getting started
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Content — sourced from GitHub + resumes

All project data in `src/data/content.ts` is pulled from your real,
public GitHub repos (github.com/animesh8787) and your two resumes
(general CV + JPMC-tailored). Notably:

- **Featured work** is your three live, deployed products: Ashwatthama
  (ashwatthama.dev), TalentRank (explainable resume screening, deployed on
  Vercel + Render), and ArthSetu (a 3-person hackathon team project — your
  role was Product & Governance Workflow Engineer).
- **Other builds**: the crack-detection research (Elsevier paper, resume-only,
  no public repo), Nexus OS (your own LeetCode/GitHub tracker, deployed on
  GitHub Pages), OPSBRAIN (ET AI Hackathon 2026 RAG platform, repo only, no
  live deploy), and the Solar Panel Efficiency Predictor (resume-only).
- **Experience** is your Research Intern role at Thapar (Jun–Jul 2024),
  pulled from both resumes.
- **Resume button(s)** in the hero link to both PDFs, copied into `public/`:
  `Animesh_Dhiman_Resume.pdf` (general) and `Animesh_Dhiman_Resume_JPMC.pdf`
  (JPMC-tailored).
- Every metric tag is copied from your resumes/READMEs verbatim (99.9% val
  accuracy, 97.7% mAP, 89.89% R², etc.) — nothing invented or rounded.

## Project structure
```
src/
  data/content.ts         all copy — projects, skills, stats, experience, contact info
  components/
    Hero.tsx               name, pitch, research-interest tags, node graph, resume CTAs
    Stats.tsx               four-number strip
    GitHubActivity.tsx      live GitHub contribution heatmap (year selector)
    Experience.tsx          research internship timeline
    FeaturedProjects.tsx    Ashwatthama + TalentRank + ArthSetu, full write-ups
    OtherProjects.tsx        compact cards for the remaining projects
    Skills.tsx               categorized skill chips
    About.tsx                narrative paragraph section
    Contact.tsx              email/GitHub/LinkedIn + footer
    Nav.tsx                  sticky nav, scroll-aware background
    BrandIcons.tsx           hand-written GitHub/LinkedIn SVGs
```

## Deploying
This is a static Vite build — deploy `dist/` to Vercel, Netlify, or GitHub
Pages. The live site is already at animeshdhiman.dev.
