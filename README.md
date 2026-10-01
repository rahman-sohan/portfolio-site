# Md Sohanur Rahman — Portfolio

Single-page portfolio (dark, minimal). Built with Vite + React + TypeScript + Tailwind CSS v4.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build   # type-checks and outputs to dist/
pnpm preview # serve dist/ locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (skip the CV/design scratch files if you don't want them public: `Sohanur Rahman(Nodejs).pdf`, `Sohanur Rahman(Nodejs).md`, `DESIGN.md`, `Daily-Sheet-2026-10-01.xlsx`, `react-flash.md`).
2. Import the repo in Vercel — it auto-detects Vite. Build command `pnpm build`, output `dist`.
3. `vercel.json` already includes SPA rewrites.

## Edit content

All copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — profile, jobs, skills, education, social links.
