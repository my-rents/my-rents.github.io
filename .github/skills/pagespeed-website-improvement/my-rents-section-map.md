# My Rents Section Map

Use this map to turn PageSpeed selectors, asset URLs, and audit labels into concrete repo targets.

## Shared entry points

- Head, fonts, and global resource loading:
  - `index.html`
- App bootstrap and global stylesheet entry:
  - `src/main.ts`
  - `src/styles/main.scss`
- Localized landing-page copy and image references:
  - `src/content/siteContent.ts`

## Section mappings

- Hero screenshot and above-the-fold visual:
  - `src/components/sections/HeroSection/HeroSection.html`
  - `src/components/sections/HeroSection/HeroSection.scss`
  - Common selector pattern from PSI: `div.hero-section__image-frame > img`

- Impact feature visual:
  - `src/components/sections/ImpactSection/ImpactSection.html`
  - `src/components/sections/ImpactSection/ImpactSection.scss`
  - Common selector pattern from PSI: `figure.impact-section__feature-frame > img`

- Team carousel cards and audience images:
  - `src/components/sections/TeamSection/TeamSection.html`
  - `src/components/sections/TeamSection/TeamSection.scss`
  - Common selector pattern from PSI: `div.team-section__media > img`

- Shared brand icon used in header and footer:
  - `src/components/shared/SiteBrand/SiteBrand.html`
  - `src/components/shared/SiteBrand/SiteBrand.scss`
  - Common selector pattern from PSI: `img.site-brand__icon`

- Header layout and navigation shifts:
  - `src/components/layout/SiteHeader/SiteHeader.html`
  - `src/components/layout/SiteHeader/SiteHeader.scss`
  - Common selector pattern from PSI: `nav.site-header__nav`

- Footer layout shifts:
  - `src/components/layout/SiteFooter/SiteFooter.html`
  - `src/components/layout/SiteFooter/SiteFooter.scss`
  - Common selector pattern from PSI: `footer.site-footer`

## Live patterns observed from the current PageSpeed run

- Missing explicit image dimensions were reported for:
  - Hero screenshot image
  - Impact feature image
  - Team card images
  - Shared site brand icons

- Render-blocking requests included:
  - Google Fonts stylesheet from `fonts.googleapis.com`
  - The generated main CSS file emitted from the app stylesheet pipeline

- Desktop CLS was dominated by footer movement in the latest live run, with font resources also listed as related contributors.

## Asset notes

- Built production assets appear under hashed `/assets/*` URLs in PageSpeed, but the source images live under `src/assets/`.
- When PSI lists a generated image URL, map it back through the component markup and the content data that imports it.
- If PageSpeed reports a cache-lifetime problem for hashed assets, verify whether the fix belongs in repo code, deployment configuration, or the hosting platform.
