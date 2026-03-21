# Workspace Context

- This repo is the public marketing site for My Rents, a rental property management app for landlords, owners, managers, and small portfolio operators.
- Treat `src/content/siteContent.ts` as the primary source of truth for landing-page copy, product claims, pricing language, FAQs, and legal page content.
- The public app is Android-first and linked through Google Play. Do not claim that iOS is available; the site currently states that the iOS version is under development.
- Do not invent features, integrations, pricing amounts, or business claims. If a capability is not supported by the current site content or code, flag the gap instead of asserting it.
- Keep core marketing claims aligned across English and Spanish when updating shared landing-page messaging.
- SEO discovery files live in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and the legal entry HTML files. Keep them consistent with the published routes.
- This project uses Vue 3 + TypeScript + Vite with component `.vue` files that reference sibling `.html` and `.scss` files.
