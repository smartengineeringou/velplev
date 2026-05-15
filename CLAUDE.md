# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (lockfile present). Install with `pnpm install`.

- `pnpm dev` — start Next.js dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — `eslint .` (no other test/check scripts are configured)

## Stack

- Next.js 16 App Router, React 19, TypeScript 5.7 (path alias `@/*` → repo root)
- Tailwind CSS v4 (CSS-first config in `app/globals.css` via `@theme inline`) — there is no `tailwind.config.*`
- shadcn/ui (`new-york` style, `neutral` base, lucide icons), components under `components/ui/`
- `@vercel/analytics` is a dep but not currently mounted in any layout

**`next.config.mjs` notes that matter:** `typescript.ignoreBuildErrors: true` (builds will not fail on TS errors — run `tsc --noEmit` manually if you need to catch them) and `images.unoptimized: true` (the Next/Image component is used everywhere but no optimization happens; OK to add new `<Image fill>` blocks without remote loader config).

## Architecture: trilingual site, two parallel patterns

This is a marketing site for VELPLEV (Latvian flexible-packaging manufacturer) served in **three locales**:

- `en` — mounted at the **root** (`/`, `/products`, `/contact`, …)
- `lv` — mounted at `/lv/*`
- `ru` — mounted at `/ru/*`

There is no i18n middleware. Locales are separate route trees that share rendering logic through a translations object. **The English root pages and the locale pages are wired differently — this is the single most important thing to understand before editing copy or structure.**

### English (root) — hardcoded copy

Files: `app/page.tsx`, `app/products/page.tsx`, `app/contact/page.tsx`, `app/custom-printing/page.tsx`, `app/manufacturing/page.tsx`.

Each page imports `components/Header.tsx`, `components/Footer.tsx`, `components/CtaBand.tsx` — these are the **English-only** versions with hardcoded strings and `/`-prefixed links.

### `lv` and `ru` — translation-driven

Files: `app/{lv,ru}/page.tsx`, `app/{lv,ru}/products/page.tsx`, etc.

Each locale page is a thin wrapper that delegates to a shared component in `components/pages/` (e.g. `HomePageContent.tsx`, `LocaleContactPage.tsx`, …), passing `locale` and `t={translations[locale]}` from `lib/translations.ts`.

These shared components render via the **`Locale*` chrome**: `components/LocaleHeader.tsx`, `LocaleFooter.tsx`, `LocaleCtaBand.tsx`. The locale variants compute a `prefix = locale === 'en' ? '' : '/' + locale` and prepend it to every internal link, so the same component works for any locale — including English if you ever migrate.

**Consequence:** when you change a section, you typically have to touch it in **two places**:

1. The hardcoded English version under `components/` and `app/<page>/page.tsx`
2. The shared component under `components/pages/` plus the `en` / `lv` / `ru` blocks inside `lib/translations.ts`

When adding **new** copy strings to locale pages, extend the `Translations`/`HomeTranslations`/etc. interfaces in `lib/translations.ts` and fill in all three of `translations.en`, `translations.lv`, `translations.ru`. `translations.en` exists in the file even though the English root pages don't currently consume it — keep it in sync so the locale components can fall through to English without breaking.

### OG images

`app/api/og/route.tsx` is an edge route that generates per-locale OG images via `next/og`. Each layout's `metadata.openGraph.images` points at `/api/og?locale={en|lv|ru}`. If you add a new locale, add a `copy[locale]` entry there too.

### Layouts

- `app/layout.tsx` sets the global `<html lang="en">`, loads Inter, and applies English metadata. It wraps **all** routes including `/lv` and `/ru`, so the html `lang` attribute is wrong for non-EN routes — this is a known limitation, don't rely on `lang` for locale detection.
- `app/lv/layout.tsx` and `app/ru/layout.tsx` only override `metadata` (title/description/OG); they return `<>{children}</>` with no extra DOM.

## Conventions

- Use the `@/` path alias for all internal imports (`@/components/...`, `@/lib/...`).
- shadcn aliases live in `components.json`: `components` → `@/components`, `ui` → `@/components/ui`, `utils` → `@/lib/utils`, `lib` → `@/lib`, `hooks` → `@/hooks`. Use `pnpm dlx shadcn@latest add <component>` to add primitives — it will respect these aliases.
- Brand colors are CSS variables in `app/globals.css` (`--brand-teal`, `--brand-teal-light`, `--brand-teal-dark`, `--brand-amber`, `--brand-graphite`, `--brand-gray-light`). Use the Tailwind utilities they back (`bg-primary`, `bg-brand-teal-light`, `text-brand-graphite`, etc.) rather than re-introducing literal hex values.
- `styles/globals.css` exists but is not imported anywhere — `app/globals.css` is the active stylesheet.
- All images live under `public/images/`. Because image optimization is off, prefer pre-sized assets.
