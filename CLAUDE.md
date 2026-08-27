# CLAUDE.md — inner-marker

a personal vite playground — a starter shell kept deliberately bare, so an
experiment can be dropped in and thrown away. no product, no backend, no users.

`src/pages/Lab.tsx` is the scratch route, at `/lab`. it exists to be overwritten.

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
index.html               sets the dark class before react mounts
src/main.tsx             router + root render — the real entry
src/App.tsx              the shell: header, nav, theme toggle, <Outlet />
src/pages/Home.tsx       what is wired and where to start
src/pages/Lab.tsx        the scratch route — empty on purpose
src/components/          ThemeToggle, plus ui/ for shadcn (only button.tsx so far)
src/helpers/cn.ts        clsx + tailwind-merge
src/theme/tailwind.css
```

## gotchas

- **dark mode is set in two places and they must agree.** the inline script in
  `index.html` puts the `dark` class on `<html>` before react mounts, reading
  `localStorage.theme` and falling back to the os preference. `ThemeToggle` writes
  that same key. the script exists so the first paint is not the wrong theme.
- **`@/` resolves through `tsconfigPaths: true`**, vite 8's built-in. there is no
  `resolve.alias` block to edit; new paths go in `tsconfig.app.json`.
- **shadcn's `utils` alias points at `@/helpers/cn`**, not the default `@/lib/utils`
  (see `components.json`). generated components import from there.
- **`--font-mono` names Space Mono, which is not installed.** only
  `@fontsource-variable/inter` is a dependency, so mono text renders in the system
  monospace. add the font, or leave it — but do not read the token as proof.
