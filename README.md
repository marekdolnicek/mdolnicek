# Marek Dolníček — Astro + React Portfolio

This site presents Marek as a React-focused web developer who ships most pages statically with Astro and hydrates bespoke React islands for interactive moments (timeline, AI sandbox, opportunity form).

## Stack

- **Astro 5** with MDX content collections
- **React 18 islands** (`client:visible`) for interactive widgets
- **Tailwind CSS** for tokens + global theming
- **Vitest + Testing Library** for component tests, **Playwright** for smoke coverage

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:4321`.

## Scripts

- `pnpm dev` – start the Astro dev server.
- `pnpm build` – generate the static production build.
- `pnpm preview` – preview the production build locally.
- `pnpm lint` – run ESLint across Astro + React files.
- `pnpm format` – format with Prettier.
- `pnpm test` – run Vitest unit tests followed by Playwright smoke tests.
- `pnpm test:e2e` – run Playwright only.

## Content & data flow

- **Projects** live inside `src/content/projects/*` (MDX) and are typed via `src/content/config.ts`. Update or add MDX files to refresh the “Selected projects” grid.
- **Profile data** such as hero copy, skills, AI ideas, and contact links are centralized in `src/data/profile.ts` so both Astro templates and React islands share the same source of truth.
- **React islands** live in `src/components/react`. Each island is imported into `src/pages/index.astro` with `client:visible` to keep hydration scoped to relevant sections.

## Testing

- `src/components/react/*.test.tsx` cover the React islands with Vitest + Testing Library.
- `tests/home.spec.ts` ensures critical hero/project content renders via Playwright.

## Deployment

1. `pnpm build` to generate `dist/`.
2. Deploy the folder to any static host (Vercel, Netlify, Cloudflare Pages). A sitemap is generated automatically via `@astrojs/sitemap`.

## Future ideas

- Wire the opportunity form to a real inbox/API (currently mocked client-side).
- Add MDX-powered case studies or articles via additional content collections.
- Schedule Lighthouse CI to enforce the >90 performance/accessibility targets.
