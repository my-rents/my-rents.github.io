# Official Google Performance Sources

Use these sources before relying on third-party advice.

## PageSpeed Insights

- About PageSpeed Insights:
  - `https://developers.google.com/speed/docs/insights/v5/about`
- Use this to distinguish field data from lab data, understand the 75th percentile thresholds, and interpret Mobile versus Desktop differences correctly.

## Largest Contentful Paint

- Optimize LCP:
  - `https://web.dev/articles/optimize-lcp`
- Key guidance:
  - Prioritize real-user data when available.
  - Make the LCP resource discoverable early.
  - Do not lazy-load the LCP image.
  - Use `fetchpriority="high"` carefully for the true LCP image.
  - Reduce render-blocking CSS and JS if they delay the LCP element.

## Cumulative Layout Shift

- Optimize CLS:
  - `https://web.dev/articles/optimize-cls`
- Key guidance:
  - Set explicit `width` and `height` on images, or reserve space with `aspect-ratio`.
  - Distinguish load CLS from post-load CLS.
  - Reserve space for late-loading content.
  - Avoid layout-affecting animations and unexpected DOM insertions.
  - Treat web fonts as a CLS source when fallback and final font metrics differ.

## Fonts

- Best practices for fonts:
  - `https://web.dev/articles/font-best-practices`
- Key guidance:
  - Preconnect to font origins when third-party fonts are required.
  - Prefer efficient delivery such as WOFF2.
  - Choose `font-display` deliberately.
  - Reduce fallback mismatch to limit CLS.
  - Consider whether self-hosting or reducing font usage is a better tradeoff.

## How to use these sources in this repo

- For render-blocking font and stylesheet findings, inspect `index.html` first.
- For image-dimension and section-level CLS findings, inspect the section files in `src/components/sections/` and the shared brand component.
- For cache or delivery findings, verify whether the issue is controlled by source code, asset generation, hosting, or both.
