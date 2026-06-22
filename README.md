# GaanaAI — Homepage (Next.js + TypeScript)

Editorial homepage for GaanaAI. Converted from the approved design to **Next.js (App Router) + TypeScript**.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- No external UI libraries — styling is plain CSS in `app/globals.css`

## Structure
- `app/layout.tsx` — root layout, fonts (DM Serif Display + Inter), metadata
- `app/globals.css` — all styles (design tokens at `:root`)
- `app/page.tsx` — the homepage. Currently renders the approved markup and runs
  the interactions (scroll reveal, video autoplay/pause in view, brand carousel
  arrows, mobile hamburger drawer, logo marquee) in a `useEffect`.
  Ready to be progressively broken into components.
- `public/videos/` — web-optimized MP4s (muted, H.264, faststart, ~28MB total)
- `public/logos`, `public/icons`, `public/assets`, `public/logo.svg`

## Notes
- All videos are muted/looping autoplay and already compressed for web.
- Placeholder copy/metrics in "Selected work" tiles use real demo numbers —
  swap with final data when available.
- Instagram cards in "See it live" can be real embeds or custom cards; current
  build uses custom cards/links. Real reel files can replace the stand-ins.

## Deploy
Standard Next.js app — deploys as-is to Vercel, Netlify, or Cloudflare Pages.
Cloudflare Pages / Netlify free tiers allow commercial use if avoiding Vercel Pro.
