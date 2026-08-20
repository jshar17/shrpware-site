# ShrpWare website

The editable source for [shrpware.com](https://shrpware.com). It uses vinext and is deployed to the existing Cloudflare Worker named `shrpware-site`.

This repository is public. A reviewed merge to `main` deploys production through GitHub Actions.

## Agent and maintainer handoff

Read [`SITE-HANDOFF.md`](SITE-HANDOFF.md) before changing or publishing the site. It contains the architecture map, project-specific constraints, release procedure for signed installers, validation checklist, Cloudflare deployment and rollback commands, troubleshooting, and Git handoff format. Coding agents should also follow [`AGENTS.md`](AGENTS.md).

## Local development

Requirements: Node.js 22.13 or newer.

```powershell
npm install
npm run dev
```

The local preview runs at `http://localhost:3000`.

## Quality checks

```powershell
npm test
npm run lint
```

The build output includes `dist/server/wrangler.json`, which points Wrangler at the generated worker and static assets.

## Updating the WavePlume trial

Change `links.waveplume.trialDestination` in `app/lib/site.ts`, then set `releaseStatus.waveplumeTrialReady` to `true`. All trial buttons use the first-party `/go/waveplume-trial` redirect so Cloudflare request logs can count download intent without a marketing cookie. Set `releaseStatus.deltaStoreReady` to `true` only after Microsoft Store certification is public.

Before changing the link, test the signed installer on clean Windows 10 and Windows 11 systems.

## Cloudflare deployment

This site is a Worker deployment, not a Pages project or Cloudflare Tunnel. Build first:

```powershell
npm run build
```

For an explicitly authorized manual recovery deployment:

```powershell
npm run deploy
```

The normal release path is a pull request followed by a reviewed merge to `main`; `.github/workflows/deploy.yml` deploys automatically. The custom domain `shrpware.com` is already attached to the production Worker in Cloudflare.

## Marketing package

Product positioning, store copy, launch drafts, outreach templates, advertising tests, SEO topics, and the 30-day launch sequence are in `marketing/launch-kit.md`.
