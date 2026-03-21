---
name: seo-content-optimization
description: Use when improving website copy, titles, meta descriptions, FAQ content, internal linking, or Search Console driven SEO updates for My Rents. Grounds every change in real product capabilities, official Google Search guidance, and live Search Console or PageSpeed evidence when available.
argument-hint: '[target page, section, locale, or SEO goal]'
---

# SEO Content Optimization

Use this skill when the task involves improving My Rents content for organic discovery without inventing features or writing low-value SEO filler.

## First Principles

- Write for people first, then make the page easy for Google to understand.
- Treat `src/content/siteContent.ts` as the main product and messaging source of truth.
- Use only claims that are already supported by the repo, the app listing, or current product materials.
- Do not promise that a page will rank first. Aim to improve relevance, clarity, crawlability, and click appeal.
- Prefer official Google sources listed in [google-sources.md](./google-sources.md) before third-party SEO advice.

## Workflow

1. Ground the work in the repo.
   - Read the relevant content source files first.
   - For landing-page work, inspect `src/content/siteContent.ts`, `index.html`, and any relevant section templates.
   - For technical SEO work, also inspect `public/robots.txt`, `public/sitemap.xml`, and route-specific HTML entries.

2. Identify the actual page intent.
   - Define the audience, the main user problem, the page goal, and the evidence available in the product.
   - Use the template in [content-brief-template.md](./content-brief-template.md) to avoid writing generic copy.

3. Use the right Google evidence.
   - If Search Console is accessible in the browser session, follow [search-console-checklist.md](./search-console-checklist.md).
   - Prioritize Search Console queries, pages, indexing issues, and Core Web Vitals before guessing at opportunities.
   - If Search Console is not authenticated, say so briefly and continue with repo evidence plus official public Google docs.

4. Improve the copy and metadata together.
   - Keep the visible heading, `<title>`, meta description, and on-page promise aligned.
   - Make titles distinct and concise.
   - Make meta descriptions specific, readable, and page-specific.
   - Keep important keywords natural and close to real user intent.

5. Keep the content honest.
   - Do not add unsupported claims about automation, integrations, AI, accounting, legal compliance, availability, or support coverage.
   - Do not fabricate review counts, business size, customer numbers, app store ratings, or ranking guarantees.
   - Preserve pricing truthfulness: prices vary by country and the exact amount is shown inside the app.

6. Keep the writing human.
   - Prefer concrete operational language over jargon.
   - Avoid repeating the same phrase to hit an imagined keyword density.
   - Remove filler that exists only to make the page longer.
   - Make each section answer a real search or conversion question.

7. Keep localization aligned.
   - If a shared product claim changes, review both English and Spanish content.
   - Match the language of titles, descriptions, headings, and visible copy to the page locale.

8. Validate after editing.
   - Check diagnostics for edited files.
   - If visible page content changes, preview desktop and mobile.
   - If technical SEO changed, verify the live page where possible and use Lighthouse or PageSpeed-style checks when relevant.

## What Good Output Looks Like

- A short SEO brief grounded in the actual page and actual product facts.
- Clear content edits that improve search intent match and user understanding.
- Distinct title and description recommendations when needed.
- No invented features, no keyword stuffing, no bloated copy, no ranking promises.
- A short note about what evidence was used: repo, Search Console, PageSpeed, or Google docs.

## Useful Resources In This Skill

- [Google source list](./google-sources.md)
- [Content brief template](./content-brief-template.md)
- [Search Console checklist](./search-console-checklist.md)
