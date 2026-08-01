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
- Source editing is normal Git work and can be done by Claude, Codex, or a local developer. It does not require a ChatGPT shell or the OpenAI Sites builder.
- Run `npm run build` with Node 22.13+ when available. If the environment has no Node runtime, open a draft PR, disclose that the build was not run locally, and wait for the GitHub Actions build to pass before review or merge (`.github/workflows/ci.yml`).
- **Publishing is a separate OpenAI Sites step and needs the owner's approval.** A GitHub merge does NOT update the live site.
- An assistant without OpenAI Sites access should complete the validated Git/PR work and hand only the publishing step to an assistant with Sites access.
- The support address is `support@shrpware.com`.
