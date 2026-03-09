# Website Replication Plan

This file is the authoritative execution checklist for cloning the reference site into a Vue 3 project with production-quality tooling, responsive behavior parity, and deployment automation.

## Execution Status

- [x] Reference site reverse engineering completed on desktop and mobile.
- [x] Vue, Router, SCSS, ESLint, Prettier, Vitest, and GitHub Pages scaffolding completed.
- [x] Home page, terms of service page, and privacy policy page implemented.
- [x] Lint, format, tests, build, and browser verification completed successfully.

## Global Constraints

- [x] Preserve the visual structure, spacing rhythm, responsive breakpoints, scroll behavior, hover states, and click interactions of the reference site as closely as possible.
- [x] Use Vue 3 + TypeScript + Composition API + Vue Router + SCSS.
- [x] Keep styling tokenized through global CSS custom properties; avoid one-off hardcoded values in component styles unless promoted to reusable variables first.
- [x] Isolate UI into reusable components and keep route/page composition thin.
- [x] Use separate template/style concerns per component in a maintainable way, while staying idiomatic for Vue SFCs.
- [x] Ensure lint, format, unit tests, build, and GitHub Actions all pass cleanly.
- [x] Ensure the final result works on desktop and mobile, and verify behavior with browser inspection and console checks.

## Discovery And Reverse Engineering

- [x] Fetch the reference URL and recursively gather any useful linked assets/pages/doc hints needed to understand structure.
- [x] Manually inspect the reference site in the browser on desktop.
- [x] Manually inspect the reference site in the browser on mobile viewport(s).
- [x] Record page sections in render order.
- [x] Record navigation structure and footer links.
- [x] Record typography scale, spacing rhythm, container widths, section gaps, card proportions, border radii, shadows, and color usage.
- [x] Record interactive states: hover, active, focus, scroll-triggered animation, sticky/fixed behavior, carousel motion, gallery behavior, CTA actions, and any transitions.
- [x] Record breakpoint behavior for each major section/component.
- [x] Identify which effects are essential for parity and which can be simplified without violating the user request.

## Project Scaffolding

- [x] Inspect the current repository state so new scaffolding does not overwrite unrelated work.
- [x] Research current recommended setup for latest Vue 3 + Vite + TypeScript + Vue Router + Vitest + ESLint + Prettier + Sass.
- [x] Scaffold the project structure in the existing repository.
- [x] Configure package scripts for dev, build, preview, lint, format, test, and CI-safe execution.
- [x] Configure TypeScript in strict mode.
- [x] Configure ESLint for Vue 3, TypeScript, import hygiene, and CI-friendly failure behavior.
- [x] Configure Prettier and ignore files.
- [x] Configure Vitest + Vue Test Utils.
- [x] Configure Vite base/public path for GitHub Pages deployment.

## Information Architecture

- [x] Define route map: home, terms of service, privacy policy, and fallback handling if needed.
- [x] Define component tree for the home page.
- [x] Define shared layout pieces: app shell, header, footer, shared buttons, section wrappers, cards, media blocks.
- [x] Define reusable composables/helpers for viewport logic, reduced-motion behavior, and any scroll animation orchestration if needed.
- [x] Define asset strategy using `placehold.co` for approximate imagery.

## Design Token System

- [x] Create a global token file with semantic CSS custom properties for color, spacing, radius, shadow, typography, z-index, timing, and container sizes.
- [x] Create responsive token overrides where needed so breakpoints are centralized.
- [x] Create base/reset/global styles with accessible defaults.
- [x] Ensure every component consumes tokens instead of ad hoc literal values.

## UI Implementation

- [x] Build the app shell and route outlet.
- [x] Implement the header/navigation with responsive mobile behavior matching the reference.
- [x] Implement each home-page section in order, matching layout proportions and hierarchy.
- [x] Implement placeholder imagery with matching aspect ratios and crop behavior.
- [x] Implement cards, content blocks, metrics, testimonials, gallery/carousel, or any discovered interactive modules.
- [x] Implement footer structure and legal links.
- [x] Implement terms page with simplified static content that follows the main design language.
- [x] Implement privacy page with simplified static content that follows the main design language.

## Motion And Interaction Parity

- [x] Implement all hover states discovered during manual inspection.
- [x] Implement all click/tap states and navigation behavior.
- [x] Implement scroll-triggered reveals/parallax/sticky behavior only where actually present in the reference.
- [x] Implement carousel/gallery interactions if present, including desktop/mobile controls.
- [x] Implement focus-visible states and keyboard interaction for all interactive elements.
- [x] Respect reduced-motion preferences where practical without breaking parity.

## Quality And Testing

- [x] Add unit tests for critical rendering and routing behavior.
- [x] Add at least basic tests covering nav links and legal pages.
- [x] Run lint and fix all violations.
- [x] Run Prettier and ensure formatting is stable.
- [x] Run unit tests and fix failures.
- [x] Run production build and fix any asset/base-path issues.
- [x] Check edited files for analyzer/errors cleanliness.

## Deployment Automation

- [x] Research current best-practice GitHub Actions workflow for Vue/Vite deployment to GitHub Pages.
- [x] Add CI workflow for install, lint, format check, unit tests, and build on pushes/PRs.
- [x] Add deploy workflow that publishes the production build to GitHub Pages on merge/push to `main`.
- [x] Ensure workflow permissions and artifact/deploy steps match current GitHub Pages requirements.

## Documentation

- [x] Write README with stack, architecture, conventions, scripts, local setup, testing, linting, formatting, build, and deployment notes.
- [x] Document any assumptions made while approximating unavailable assets from the reference site.

## Final Browser Verification

- [x] Run the site locally.
- [x] Inspect the implemented site in Chrome DevTools MCP on desktop.
- [x] Inspect the implemented site in Chrome DevTools MCP on mobile.
- [x] Check console for errors/warnings and fix all relevant issues.
- [x] Validate that interactions, animations, galleries/carousels, and navigation work correctly.
- [x] Compare the implementation against the reference one more time and close any obvious parity gaps.

## Completion Gate

- [x] Confirm repository contains the complete working project.
- [x] Confirm all requested pages exist.
- [x] Confirm the site is responsive and interactionally faithful.
- [x] Confirm CI-facing checks pass locally.
- [x] Confirm there are no unresolved edited-file errors before handoff.
