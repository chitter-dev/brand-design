# Spanwire brand

Shared by the app (`chitter-dev/chitter.dev`, at `frontend/brand/`) and the landing page (`chitter-dev/landing`, at `brand/`) as a git submodule.

- `theme.css`: colour tokens (light, and dark via `prefers-color-scheme`), radius, and the Tailwind v4 `@theme` mapping. Import it after `@import "tailwindcss";`.
- `Logo.tsx`: `Mark` and `Logo`. Needs `--signal` from `theme.css`.
- `assets/`: the mark (steel, and light for dark surfaces) and the app icon. Next.js wants icons inside `app/`, so consumers keep copies; re-copy when the mark changes.
- `design-system.md`: the design system.

Fonts can't be shared as files (`next/font` runs in each app). Both apps load Overpass 400/600/700/800 as `--font-sans-loaded` and Overpass Mono 400/600 as `--font-mono-loaded`.

Change the brand here, then in each consumer: `git submodule update --remote <path> && git commit -am "Update brand"`.
