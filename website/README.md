# Sidestreet Technology — Website

Marketing site for Sidestreet Technology, a cloud-first, AI-integrated managed services provider based in Spartanburg, SC, serving businesses across Upstate South Carolina.

Built on Next.js 14 (App Router) with SCSS. Adapted from a purchased Saylo template, rebranded and re-written end to end.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & run production

```bash
npm run build
npm run start
```

## Project layout

- `app/` — route segments (App Router). The home page lives at `app/page.js`.
- `components/pages/home1/` — the home page sections (hero + sections 1–12).
- `components/layout/` — header, footer, nav menu, breadcrumb.
- `public/images/logo/` — brand logos:
  - `sidestreet-white.png` — white wordmark, for dark backgrounds (header, footer).
  - `sidestreet-dark.png` — dark wordmark, for light backgrounds (mobile menu, loading screen).
- `public/images/partner/` — partner wordmarks (Microsoft, Google, AWS, Anthropic, OpenAI, Backblaze, Apple, Lenovo).

## Before launch — still to do

- Replace placeholder contact details: phone `+1 (864) 775-0100` and address `Downtown Spartanburg, SC 29306`.
- Replace invented team members and testimonial names with real people, or remove those sections.
- Wire the contact and newsletter forms to a real backend / form handler (currently `action="#"`).
- Review secondary-page body copy (services, pricing, case studies, blog) and replace remaining generic filler.
- Add real case studies, blog posts, and team photos.
