# Grain Studio

Portfolio for [Grain Studio](https://wearegrainstudio.com) — Next.js 16 (App Router) statically exported to GitHub Pages.

## Stack

- **Next.js 16** App Router, `output: 'export'` (every page prerendered to HTML)
- **React 19**, Server Components by default; client code only in the project explorer, quick-view modal and contact form
- **Tailwind CSS 4**, configured in CSS (`src/app/globals.css`, no JS config)
- **TypeScript 6** (TS 7 drops the JS API Next.js and typescript-eslint rely on)
- `next/font` (DM Sans, DM Mono), `lucide-react`, EmailJS for the contact form

## Development

```sh
corepack enable   # once, provides pnpm from package.json
pnpm install
pnpm dev          # http://localhost:3000
```

| Script           | What it does                                 |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Image pipeline + dev server                  |
| `pnpm build`     | Image pipeline + static export to `out/`     |
| `pnpm start`     | Serve `out/` locally (what Pages will serve) |
| `pnpm images`    | Only regenerate image variants and manifest  |
| `pnpm lint`      | ESLint (next core-web-vitals + typescript)   |
| `pnpm typecheck` | `tsc --noEmit` (run `pnpm images` first)     |

Copy `.env.example` to `.env.local` and fill in the EmailJS keys to test the form.

## Structure

```
assets/images/<project>/   Image sources (not deployed)
public/img/                Generated AVIF variants (gitignored)
scripts/images.mjs         Image pipeline
src/app/                   Routes, metadata, sitemap/robots/manifest, icons
  work/[slug]/             Project pages + og.jpg route (built per project)
src/components/            Header, Footer, ProjectDetail, ProjectMedia…
  home/                    Home sections
src/lib/projects.ts        Portfolio content — single source of truth
src/lib/structured-data.ts JSON-LD
src/config/                Site constants, clients, EmailJS env
```

## Adding a project

1. Drop its images in `assets/images/<project>/`.
2. Add an entry to `src/lib/projects.ts` (slug, name, category, year, description, cover, gallery).

The build generates the AVIF variants, blur placeholders, `/work/<slug>/` page, its `og.jpg` and the sitemap entry.

## Images

GitHub Pages has no image optimizer, so `scripts/images.mjs` pre-generates AVIF variants at 640/828/1080/1920 px and a manifest with intrinsic sizes and blur placeholders. A custom `next/image` loader (`src/lib/image-loader.ts`) points `srcset` at them. Variants are cached by content hash: only new or changed sources are re-encoded (locally and in CI).

## Deployment

`.github/workflows/deploy.yml` builds on every PR and deploys `out/` to GitHub Pages on push to `main`. Required repository secrets:

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`
