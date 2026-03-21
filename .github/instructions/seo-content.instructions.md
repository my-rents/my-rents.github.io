---
name: seo-content-rules
description: 'Use when writing or editing My Rents landing-page copy, metadata, structured SEO copy, FAQ content, legal entry metadata, or discovery files such as sitemap and robots.'
applyTo: 'index.html, public/robots.txt, public/sitemap.xml, src/content/siteContent.ts, src/components/**/*.html, src/views/**/*.html, app/**/index.html, privacy-policy/index.html, terms-of-service/index.html, data-deletion/index.html, eula/index.html'
---

# My Rents SEO Content Rules

- Ground every content change in the current product facts from `src/content/siteContent.ts` and the existing legal pages.
- Never invent features, integrations, pricing amounts, availability, customer counts, or outcomes. If the repo does not support a claim, do not write it.
- The website markets an Android app. Keep the current truthful positioning that iOS is under development unless the codebase or product materials clearly change.
- Use people-first writing. Favor clarity, specificity, and usefulness over keyword repetition or generic SEO phrasing.
- Write naturally for landlords, owners, managers, and small portfolio operators. Avoid robotic phrasing, filler, and repetitive synonym stacking.
- Use keyword themes only where they genuinely match the page intent. Avoid keyword stuffing in headings, body copy, titles, descriptions, alt text, and anchor text.
- Keep titles and meta descriptions unique per page, concise, and aligned with the visible page content. The primary page language and the metadata language should match.
- If you update a core landing-page claim in English, review the Spanish equivalent and keep shared claims aligned unless the task is intentionally locale-specific.
- Preserve pricing accuracy: the exact PRO price is shown inside the app, varies by country, and the public page should not fabricate numbers.
- Preserve support accuracy: direct support, forum, Google Play, and contact references should stay consistent with the existing site content and URLs.
- When adding or editing SEO-facing copy, also review whether the surrounding title, description, heading hierarchy, alt text, internal links, sitemap entries, and robots directives still make sense together.
- Prefer official Google sources first for SEO decisions: Search Central docs, Search Console help, PageSpeed Insights, and the property data from Search Console when browser access is available.
