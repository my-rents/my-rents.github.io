---
description: 'Project overview and guardrails for the merged My Rents public site and tenant portal.'
applyTo: '**'
---

# My Rents Public Site Project

This repository serves two public-facing experiences from one Vite project.

## Routes

- `/` serves the main My Rents marketing website built with Vue 3 and TypeScript.
- `/portal` serves the tenant portal built with React and TypeScript.

Do not change this split unless the user explicitly asks for an architectural change.

## Stack split

- The website lives under `src/` and uses Vue 3, Vue Router, and shared site content from `src/content/siteContent.ts`.
- The portal lives under `portal/src/` and uses React Router with a `/portal` basename.
- Static portal assets are published under `public/portal/`.

## Routing and hosting rules

- Keep deep links working for both the website and the portal.
- `portal/index.html` is a separate Vite entry for the React portal.
- `public/404.html` contains GitHub Pages fallback logic and must keep `/portal/*` routes working.
- If you change route handling, verify both `/` and `/portal/<leaseId>` locally before finishing.

## Localization rules

- The website locale source of truth is `src/content/siteContent.ts`.
- Supported website locales are: `en`, `es`, `de`, `fr`, `it`, and `pt`.
- Browser-language detection should be used only when there is no saved locale.
- The footer language control is the public locale switcher for the website.
- Keep legal-page body fallback behavior explicit if a locale reuses English legal content.

## Safety rules

- The website at `/` should not lose existing marketing functionality when portal changes are made.
- The portal at `/portal` should not lose existing tenant-login or lease-view behavior when website changes are made.
- Avoid coupling portal-only Firebase logic into the Vue website unless the change truly belongs to shared public infrastructure.

## Verification expectations

After relevant changes, prefer verifying all of the following:

- website home page at `/`
- legal pages from the website router
- locale switching and locale persistence
- portal entry at `/portal`
- direct portal deep links such as `/portal/<leaseId>`
- production build output
