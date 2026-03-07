# Stratex Consulting Clone

This project recreates the reference consulting landing page in Vue with routed legal pages, responsive behavior, and CI-friendly tooling.

## Stack

- Vue 3 with Composition API and external SFC template/style blocks
- TypeScript in strict project mode via `vue-tsc`
- Vue Router for home, terms of service, and privacy policy routes
- Vite for local development and production builds
- SCSS with global design tokens and shared breakpoint/mixin utilities
- Vitest and Vue Test Utils for unit tests
- ESLint flat config plus Prettier for code quality and formatting
- GitHub Actions for CI and GitHub Pages deployment

## Patterns Used

- Section-based page composition with isolated reusable components
- External `.html` and `.scss` files referenced from each `.vue` component via SFC `src` imports
- Centralized content model in `src/content/siteContent.ts`
- Global CSS custom properties for colors, spacing, radii, typography, motion, and layout sizing
- Lightweight scroll-reveal directive and responsive carousel state handled with Vue composables
- Router hash navigation with smooth scrolling for section links

## Project Structure

```text
src/
  components/
    layout/
    sections/
    shared/
  composables/
  content/
  directives/
  router/
  styles/
  views/
```

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Create a production build:

   ```bash
   npm run build
   ```

4. Preview the built site locally:

   ```bash
   npm run preview
   ```

## Quality Commands

- Format all supported files:

  ```bash
  npm run format
  ```

- Check formatting without changing files:

  ```bash
  npm run format:check
  ```

- Run lint checks:

  ```bash
  npm run lint
  ```

- Apply automatic lint fixes where available:

  ```bash
  npm run lint:fix
  ```

- Run unit tests once for CI/local verification:

  ```bash
  npm run test:ci
  ```

- Run Vitest in watch mode:

  ```bash
  npm run test:unit
  ```

## Deployment

- CI runs `format:check`, `lint`, `test:ci`, and `build` on pull requests and pushes to `main`.
- GitHub Pages deploys automatically from `main` using `.github/workflows/deploy-gh-pages.yml`.
- This repository is configured as a user-site style Pages deployment, so Vite uses `base: '/'`.

## Notes

- The reference site images were approximated with `https://placehold.co` assets.
- Legal pages intentionally keep the same visual language with simplified content and reduced effects.
