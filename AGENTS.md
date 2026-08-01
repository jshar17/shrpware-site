# Agent guide — shrpware-site

This is the **public** source for the shrpware.com website (OpenAI Sites; Vinext + Vite + Cloudflare Workers).

## Read this before editing

Before changing site content, styling, metadata, routes, images, or deploy configuration,
read the **private** operations runbook in `jshar17/shrpware-operations`:

- `docs/SHRPWARE_SITE_EDITING.md` — how to edit and publish the site. Start here.
- `docs/SHRPWARE_DOMAIN_RUNBOOK.md` — Cloudflare DNS and Apple iCloud+ email. Do not touch for content work.

Brand rules for this repo are in `CLAUDE.md` and `docs/APP-BRAND-HANDOFF.md`.

## Rules

- **This repo is public.** Never commit secrets, API tokens, `.env` files, or the private ops docs here.
- Content is in `app/page.tsx` and `app/apps/<app>/page.tsx` (plus `/privacy`, `/support`); images in `public/apps/<app>/`; brand SVGs in `public/brand/` (reuse, don't redraw).
- Run `npm run build` (Node 22.13+) before opening a PR. CI builds every PR (`.github/workflows/ci.yml`).
- **Publishing is a separate OpenAI Sites step and needs the owner's approval.** A GitHub merge does NOT update the live site.
- The support address is `support@shrpware.com`.
