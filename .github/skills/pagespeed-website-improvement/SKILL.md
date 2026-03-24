---
name: pagespeed-website-improvement
description: Use when auditing myrents-app.com or another public page with PageSpeed Insights, comparing mobile and desktop, opening failing audit cards, mapping issues to page sections or components, and creating a temporary plan-improvement.md for the fix plan.
argument-hint: '[url or route] [goal, category, or section]'
---

# PageSpeed Website Improvement

Use this skill when the task is to improve the My Rents website with evidence from PageSpeed Insights instead of guessing.

## Goals

- Push the four Lighthouse categories as close to 100 as practical without breaking the site.
- Focus on categories that are below 100.
- Compare both Mobile and Desktop before deciding what to fix first.
- Create a temporary root `plan-improvement.md` while investigating and remove it after the work is finished and verified.

## Default Scope

- If the user does not provide a URL, audit `https://myrents-app.com/`.
- Use `https://pagespeed.web.dev/` as the primary audit surface.
- For My Rents content changes, keep product claims aligned with `src/content/siteContent.ts`.
- Do not invent features, pricing, or platform availability while optimizing.

## Workflow

1. Establish the baseline in PageSpeed Insights.
   - Open `https://pagespeed.web.dev/`.
   - Analyze the target URL.
   - Inspect both the Mobile and Desktop tabs.
   - Record the four category scores for both tabs.
   - Choose the lower-scoring tab as the primary focus.
   - Do not assume Mobile is worse. On the current My Rents live run, Desktop can be worse because of CLS.

2. Only inspect categories that are below 100.
   - Skip categories already at 100 unless a shared fix will naturally affect them.
   - For each sub-100 category, open the relevant audit groups under `Insights` and `Diagnostics`.
   - If the UI shows red or amber issue cards, open them and read the expanded details carefully.
   - When an audit expands into a table, read the full table instead of summarizing from the heading alone.

3. Capture the details that matter.
   - Exact metric values and estimated savings.
   - Resource URLs.
   - DOM selectors and element descriptions.
   - Whether the issue appears to be caused by repo code, image assets, deployment headers, or third-party resources.
   - Whether the issue is shared across both tabs or isolated to one form factor.
   - If a `Show 3rd-party resources` control appears, keep it enabled long enough to identify external dependencies.

4. Convert audit output into section-level repo work.
   - Use [my-rents-section-map.md](./my-rents-section-map.md) to map selectors and resource URLs back to source files.
   - Work section by section instead of changing unrelated files in bulk.
   - If the audit points at generated `/assets/*` files, trace them back to their source component, asset import, or head configuration.
   - For head and font issues, inspect `index.html`, `src/main.ts`, and `src/styles/main.scss` before touching component code.

5. Create the temporary implementation plan.
   - Create `plan-improvement.md` in the workspace root using [plan-improvement-template.md](./plan-improvement-template.md).
   - Group entries by category, tab, and page section.
   - Label each action as one of: `repo fix`, `asset optimization`, `deployment config`, or `third-party limitation`.
   - Keep the plan concrete enough to implement directly.

6. Prioritize root causes.
   - Fix shared causes before section-specific polish.
   - Favor changes that help both tabs.
   - Prefer structural fixes over score-chasing hacks.
   - Separate code fixes from platform constraints when PageSpeed flags cache headers or third-party behavior.

7. Validate after implementation.
   - Run `npm run format:check`.
   - Run `npm run lint`.
   - Run `npm run test:ci`.
   - Run `npm run build`.
   - Preview the page on desktop and mobile if visible layout changes were made.
   - Re-run PageSpeed on both tabs and compare against the recorded baseline.
   - Remove `plan-improvement.md` after the work is complete and verified.

## Common My Rents Patterns To Check First

- Render-blocking requests from Google Fonts and the generated main stylesheet referenced by `index.html`.
- CLS caused by images without explicit dimensions in Hero, Impact, Team, and SiteBrand.
- Header or footer shifts amplified by font loading or delayed asset sizing.
- Large JPG screenshots or audience-card images that can often be resized, reformatted, or served more efficiently.
- Cache lifetime findings for hashed `/assets/*` files that may require deployment or hosting changes, not only Vue code changes.

## Decision Rules

- Do not spend time auditing 100-score categories in depth.
- Always compare Mobile and Desktop before choosing a primary target.
- If Desktop is worse because of CLS and Mobile is worse because of LCP, address the larger user-facing regression first and note cross-effects in the plan.
- If an audit points to a font or stylesheet URL, consult the official sources in [google-performance-sources.md](./google-performance-sources.md) before choosing a fix.
- If a finding cannot be solved in the repo alone, document the constraint clearly instead of pretending it is a simple code change.

## Good Output

- A baseline score summary for Mobile and Desktop.
- A focused list of only the categories below 100.
- Findings mapped to concrete sections, components, or deployment concerns.
- A temporary `plan-improvement.md` with ordered fixes and validation steps.
- Cleanup of the temporary plan file after the job is done.

## Included Resources

- [Official Google performance sources](./google-performance-sources.md)
- [My Rents section map](./my-rents-section-map.md)
- [Temporary plan template](./plan-improvement-template.md)
