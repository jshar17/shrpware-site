# Claude project instructions

This repository is the **public** source of truth for the ShrpWare company identity and
public product descriptions (the shrpware.com website, on OpenAI Sites).

## Read the private runbook first

Before changing site content, styling, metadata, routes, images, or deploy configuration,
read the **private** operations repo `jshar17/shrpware-operations`:

- `docs/SHRPWARE_SITE_EDITING.md` — how to edit and publish the site. Start here.
- `docs/SHRPWARE_DOMAIN_RUNBOOK.md` — Cloudflare DNS and Apple iCloud+ email; don't touch for content work.

This repo is public: **never commit secrets, tokens, `.env` files, or the private ops docs here.**
**Publishing is a separate OpenAI Sites step that needs the owner's approval** — a GitHub merge
does not update the live site.

## Claude can edit this repository directly

Editing the website source is ordinary Git repository work. It does **not** require a ChatGPT
shell, the OpenAI Sites builder, or another OpenAI-only editing tool. With filesystem and GitHub
access, Claude may:

1. Create a short-lived branch from `main`.
2. Edit content in `app/`, replace images in `public/apps/`, and adjust styles in
   `app/globals.css`.
3. Run `npm ci` and `npm run build` with Node.js 22.13 or newer.
4. Commit the narrow change, push the branch, and open a pull request.

If Node.js is unavailable in Claude's environment, that does not block source edits. Open a
**draft** pull request, state that the build was not run locally, and wait for the required
GitHub Actions `build` check. Do not mark the PR ready, merge it, or hand it off for publishing
until that check passes.

Only the final live-site publishing step is specific to OpenAI Sites. If Claude does not have
Sites access, stop after the validated pull request or merge and ask the owner to hand publishing
to an assistant that does. `.openai/hosting.json` and the unused `app/chatgpt-auth.ts` helper are
platform scaffolding; neither is required to edit the source.

## Brand and content rules

Before changing the website or carrying assets into WavePlume or DeltaTxt:

1. Read `brand/README.md` for identity rules.
2. Read `docs/APP-BRAND-HANDOFF.md` for app-integration guidance.
3. Reuse the SVG files under `public/brand/`; do not redraw the Angular S.
4. Keep the WavePlume and DeltaTxt icons as product identities. The Angular S
   represents the publisher, not an individual app.
5. Do not restore `SHRP#`, add Hurst/Texas copy, or invent pricing, downloads,
   release dates, platform support, or product capabilities.

For website work, preserve the current Vinext architecture and
`.openai/hosting.json`. Run `npm run build` before handing changes back. The
production site is hosted by OpenAI Sites, not GitHub Pages. When a local Node
runtime is unavailable, use the draft-PR and GitHub Actions fallback above.

When updating an app repository, copy only the needed brand assets and record
their source and date in that repository. Prefer a small About-screen or
publisher-credit integration over replacing established product artwork.
