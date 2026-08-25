# AGENTS.md — inner-marker

a personal vite playground. a bare react sandbox for trying things out — no product,
no backend, no users. currently four static pages behind a router.

## stack

- **vite 8** + `@vitejs/plugin-react` with the **react compiler on**
  (`compiler: true` in `vite.config.ts`)
- **react 19**, **react router 8** — a data router, declared in `src/main.tsx`
- **tailwind 4** through `@tailwindcss/vite`; the theme lives in `src/theme/tailwind.css`
- **typescript 7** and **biome 2** — biome owns lint and format, `tsc --noEmit` is the
  type gate

exact versions and scripts live in `package.json`. read them there instead of trusting
a copy.

## layout

```
src/main.tsx          router + root render — the real entry
src/App.tsx           AppShell plus the Home / Work / Stack / About page components
src/Testing.tsx       scratch route at /test
src/components/ui/    shadcn — only button.tsx vendored so far
src/helpers/cn.ts     clsx + tailwind-merge
src/theme/tailwind.css
```

## gotchas

- **the page copy in `App.tsx` is placeholder fiction.** its `workItems` and
  `stackGroups` arrays name storybook, vitest, playwright, zustand, react query,
  figma and docker — none of them are installed. that data is set dressing, never a
  dependency list.
- **`@/` resolves through `tsconfigPaths: true`**, vite 8's built-in. there is no
  `resolve.alias` block to edit; new paths go in `tsconfig.app.json`.
- **shadcn's `utils` alias points at `@/helpers/cn`**, not the default `@/lib/utils`
  (see `components.json`). generated components import from there.
