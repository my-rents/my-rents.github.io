# Search Console Checklist

Use this checklist when the browser session has access to Search Console.

## Property

- Open the My Rents property: https://search.google.com/u/2/search-console?resource_id=sc-domain%3Amyrents-app.com
- If the browser is redirected to the public Search Console landing page or a sign-in screen, report that Search Console data is not accessible in the current session and continue with repo plus public Google sources.

## Reports to inspect first

1. Performance
   - Find pages with impressions but weak CTR.
   - Find queries where My Rents is already visible and improve the matching page instead of guessing new topics.
   - Compare branded and non-branded queries.

2. Page indexing
   - Prioritize issues with source `Website`.
   - Ignore intentional exclusions unless they block an important canonical page.
   - Inspect example URLs before recommending fixes.

3. Core Web Vitals
   - Separate mobile and desktop.
   - Focus on the worst recurring issue groups first.
   - Use PageSpeed Insights or Lighthouse to investigate representative URLs.

4. Sitemaps
   - Confirm the sitemap fetch status is successful.
   - Compare discovered pages with the current public routes.

## URL inspection use cases

- Check whether a target page is indexed.
- Confirm the canonical URL.
- Test the live URL after important fixes.

## Reporting format

- Summarize the top 3 to 5 opportunities.
- Separate content opportunities from indexing or performance issues.
- Tie each recommendation to evidence from a report, URL inspection, or public Google guidance.
