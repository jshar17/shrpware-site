# ShrpWare website handoff

This is the operating guide for maintaining and publishing [shrpware.com](https://shrpware.com). It is written for a new maintainer or coding agent starting without prior conversation history.

## Quick facts

| Item | Value |
| --- | --- |
| Production site | `https://shrpware.com` |
| Hosting | Cloudflare Worker |
| Worker name | `shrpware-site` |
| Direct Worker URL | `https://shrpware-site.jsharpe2.workers.dev` |
| Framework | vinext, React 19, Vite |
| Runtime requirement | Node.js 22.13 or newer |
| Local URL | `http://localhost:3000` |
| Product/release configuration | `app/lib/site.ts` |
| Global styles | `app/globals.css` |
| Contract tests | `tests/site-contract.test.mjs` |
| CI and production deployment | `.github/workflows/` |
| Marketing material | `marketing/launch-kit.md` |

Production updates do **not** go through a Cloudflare Tunnel. The build is uploaded directly to the existing Worker with Wrangler. A tunnel may be useful for a temporary external preview, but it is not part of the production release path.

## Start here

From the repository root in PowerShell:

```powershell
node --version
npm ci
npm run dev
```

Open `http://localhost:3000`. Stop the server with `Ctrl+C`.

Before handing off or publishing any change:

```powershell
npm test
npm run lint
```

`npm test` builds the Worker and exercises every public route, the metadata endpoints, the first-party download/store redirects, and required assets. The generated deploy configuration is `dist/server/wrangler.json`.

This repository is public. Never commit secrets, private operations material, signing credentials, or customer data.

## Architecture and file map

### Pages

- `app/page.tsx` — homepage.
- `app/apps/waveplume/page.tsx` — WavePlume product page.
- `app/apps/deltatxt/page.tsx` — DeltaTxt product page.
- `app/apps/*/{support,privacy,changelog}/page.tsx` — product documentation pages.
- `app/use-cases/*/page.tsx` — search-oriented use-case pages.
- `app/compare/*/page.tsx` — product comparison pages.
- `app/press/page.tsx` — press kit.
- `app/layout.tsx` — shared site metadata and social image.
- `app/robots.ts` and `app/sitemap.ts` — search metadata.

### Shared behavior

- `app/components/SiteHeader.tsx` and `SiteFooter.tsx` — global navigation.
- `app/components/PageShell.tsx` — shared interior-page shell.
- `app/components/SeoLanding.tsx` — shared use-case/comparison layout.
- `app/components/SafeLink.tsx` — stable link implementation.
- `app/components/ScreenshotGallery.tsx` — product screenshot grid and lightbox.
- `app/go/[slug]/route.ts` — first-party 307 redirects to stores and downloads.
- `worker/index.ts` — vinext Worker entry point and image handling.
- `vite.config.ts` — vinext and Cloudflare build configuration.

### Assets

- `public/apps/waveplume/` and `public/apps/deltatxt/` — deployable product images.
- Full gallery images end in `.webp`; smaller grid previews end in `-thumb.webp`.
- `public/brand/shrpware-wordmark.svg` — wordmark.
- `public/og-v5.png` — current Open Graph and social sharing card.
- `marketing/store-submission/` — source/store submission images; these are not the website gallery.

## Important implementation constraints

### Links must remain native

Use `SafeLink` or a native `<a>`. Do not convert links to `next/link` without first proving navigation works in the production vinext build. The site previously rendered correct `href` values but intercepted clicks failed because the framework's RSC prefetch path crashed. `SafeLink` deliberately avoids that interception.

All public product destinations should use a first-party path such as `/go/deltatxt-store`. Add or change the external destination in `app/lib/site.ts`; do not scatter store or installer URLs through page components.

The Worker-level `/privacy.html` redirect is a separate compatibility route. App Store Connect has that URL on file for the live WavePlume app, so it must continue returning 301 to `/apps/waveplume/privacy`.

### Screenshot enlargement is intentionally limited

Only the screenshot sections on the two product pages use `ScreenshotGallery`. The gallery provides a restrained hover treatment, a click-to-open lightbox, previous/next controls, arrow-key navigation, Escape-to-close behavior, and focus restoration. Do not make every decorative or hero image enlargeable.

### Release gates protect unfinished destinations

`releaseStatus` in `app/lib/site.ts` blocks selected redirects until a release is actually ready. A blocked redirect returns 404. Keep a gate off while an installer or store listing is awaiting final approval; turn it on in the same reviewed release that makes the destination public.

## Common changes

### Edit site copy

Most copy lives directly in the corresponding `page.tsx`. Keep the language natural and direct. A small amount of personality is welcome; avoid stacking clever taglines or vague marketing phrases.

After changing shared navigation or labels, check both desktop and narrow/mobile layouts.

### Change a store or installer destination

1. Upload the final signed installer to the intended distribution location using a versioned filename.
2. Verify the local release package before linking it:

   ```powershell
   Get-AuthenticodeSignature -FilePath 'C:\path\to\Installer.exe' | Format-List Status,StatusMessage,SignerCertificate,TimeStamperCertificate
   Get-FileHash -Algorithm SHA256 -Path 'C:\path\to\Installer.exe'
   ```

3. Confirm `Status` is `Valid`, the signer is the intended publisher, and the file is timestamped.
4. Test installation, launch, trial behavior, uninstall, and upgrades on clean supported Windows systems.
5. Update the destination in `app/lib/site.ts`.
6. Update the expected filename or destination in `tests/site-contract.test.mjs`.
7. Set the corresponding release gate to `true` only when the public file or store listing is ready.
8. Run the full checks and verify the first-party `/go/...` redirect before deployment.

Current redirect slugs are:

- `waveplume-mac`
- `waveplume-windows`
- `waveplume-trial`
- `deltatxt-download`
- `deltatxt-store`

Treat `app/lib/site.ts` as authoritative for the current versions and destinations; this avoids a stale URL copied from documentation.

### Add or replace gallery screenshots

1. Put the display image and its optimized thumbnail in the appropriate `public/apps/<product>/gallery/` directory.
2. Update the `ScreenshotGallery` item list on the product page with useful `alt` text and a plain-language caption.
3. Keep source screenshots free of personal data, account details, API keys, private meeting content, and machine-specific paths.
4. Check image sharpness at full lightbox size and the crop at the grid size.
5. Test click, backdrop close, close button, Escape, and both arrow keys.

### Change the social preview

Replace the versioned image under `public/` and update both Open Graph and Twitter image references in `app/layout.tsx`. Use a new filename when replacing a cached card, then test the fully qualified production asset URL after deployment.

### Add a public route

1. Add the new App Router `page.tsx`.
2. Give it unique page metadata where appropriate.
3. Add it to `app/sitemap.ts` if it should be indexed.
4. Add its path to the public route list in `tests/site-contract.test.mjs`.
5. Add navigation only if the page belongs in the site's primary browsing flow.

## Validation checklist

Run the automated checks:

```powershell
npm test
npm run lint
```

Then use `npm run dev` for a visual pass:

- Homepage and both product pages render at desktop and mobile widths.
- Header, footer, product buttons, and inline links navigate on a normal click.
- WavePlume and DeltaTxt screenshot galleries open only from the product screenshot sections.
- Gallery controls, backdrop, Escape, and arrow keys work.
- Store and download buttons reach the expected first-party `/go/...` routes.
- `/privacy.html` redirects to `/apps/waveplume/privacy`.
- Copy is readable and not clipped or overflowing.
- No console errors appear during navigation or gallery use.

For release-link changes, check the redirect without downloading the entire installer:

```powershell
$response = Invoke-WebRequest -Uri 'http://localhost:3000/go/waveplume-trial' -MaximumRedirection 0 -SkipHttpErrorCheck
$response.StatusCode
$response.Headers.Location
```

Use the relevant slug. The expected result for an active destination is HTTP 307 with the intended `Location`, `Cache-Control: no-store`, and `Referrer-Policy: no-referrer`.

## Cloudflare deployment

### Normal release: merge to `main`

The normal production path is GitHub Actions:

1. Push a focused branch.
2. Open a pull request and wait for `.github/workflows/ci.yml` to pass.
3. Review the diff and release destinations.
4. Merge to `main` only when the change is approved for production.
5. `.github/workflows/deploy.yml` runs the checks and deploys `shrpware-site` using the `CLOUDFLARE_API_TOKEN` repository secret.
6. Record the workflow run and complete the production smoke test below.

There is no separate tunnel or Pages publish step. A push to a non-`main` branch is safe and does not deploy production.

### Manual recovery deployment

Use a manual deployment only when explicitly authorized, such as recovering from a broken GitHub Actions run. Publishing changes production. Confirm the account and Worker first:

```powershell
npx wrangler whoami
```

The authenticated account must own the existing `shrpware-site` Worker and its `shrpware.com` custom domain. Do not create a second Worker, Pages project, or production tunnel as a substitute.

Build and validate:

```powershell
npm test
npm run lint
```

Dry-run or deploy the generated Worker configuration:

```powershell
npm run deploy:dry-run
npm run deploy
```

Record the deployment/version ID printed by Wrangler. The custom domain is already attached in Cloudflare. Never edit DNS or mail records as part of a normal site release; the zone also carries the records for `support@shrpware.com`.

### Production smoke test

After deployment, verify both the custom domain and direct Worker URL:

```powershell
Invoke-WebRequest -Uri 'https://shrpware.com/' -Method Head
Invoke-WebRequest -Uri 'https://shrpware-site.jsharpe2.workers.dev/' -Method Head
```

Also visit the production site in a browser and repeat the relevant visual/link checks. For every release link changed in this deployment, inspect the 307 destination and then test one real download or store launch.

## Rollback

If production is broken, avoid stacking speculative fixes. List recent deployments:

```powershell
npx wrangler deployments list --config dist/server/wrangler.json --name shrpware-site
```

Choose the last known-good version ID and roll back:

```powershell
npx wrangler rollback <VERSION_ID> --config dist/server/wrangler.json --name shrpware-site --message 'Rollback: <reason>'
```

Wrangler asks for confirmation unless `--yes` is supplied. After rollback, repeat the production smoke test and record which version was restored. Then fix the source in a new reviewed commit so the repository again matches production.

## Troubleshooting

### A link has an `href` but clicking does nothing

Check whether `next/link` or another client-side router has been introduced. Return the link to `SafeLink` or a native `<a>`, rebuild, and test the built Worker. This is a known vinext integration failure mode for this project.

### A download/store button returns 404

Check the slug in the page, `outboundDestinations`, and the matching value in `releaseStatus`. A false gate intentionally returns 404. Do not bypass a false gate until the release is ready.

### The site looks stale after deployment

Confirm Wrangler deployed `dist/server/wrangler.json` produced by the latest build. Check the direct Worker URL as well as the custom domain, hard-refresh the browser, and verify versioned asset filenames such as the social card.

### Wrangler cannot find the Worker or account

Run `npx wrangler whoami`. Authenticate the Cloudflare account that owns `shrpware-site`; do not create a similarly named resource in a different account. If `dist/server/wrangler.json` is missing, run `npm run build` or `npm test` first.

If the GitHub deployment fails authentication, the owner must replace the repository's `CLOUDFLARE_API_TOKEN` with a token authorized to edit Workers. Do not print the token or put it in a file.

### Build output or local state appears in Git

Do not commit `dist/`, `.next/`, `.vinext/`, `.wrangler/`, `.env*`, or `node_modules/`. They are intentionally ignored. Never place Cloudflare credentials or installer-signing secrets in the repository.

## Git collaboration

Before starting, inspect the worktree and preserve unrelated changes:

```powershell
git status --short --branch
git remote -v
```

Use a focused branch and commit only the files for the change:

```powershell
git switch -c <short-change-name>
git add <exact-file-1> <exact-file-2>
git diff --cached
git commit -m '<clear summary>'
git push -u origin <short-change-name>
```

Open a pull request when the repository workflow supports it. In handoffs, include what changed, which checks passed, whether production was deployed, the Cloudflare deployment ID, and any release package hash. Never use a blanket stage command when unrelated work may be present.

Do not push directly to `main`: merging there deploys production. Push a branch and use a reviewed pull request.

## Release handoff template

Use this in a commit, pull request, or agent handoff:

```text
Change:
Files/routes affected:
Release destinations changed:
Installer signer and SHA-256 (if applicable):
Automated checks:
Manual browser checks:
Cloudflare deployment ID:
Production smoke test:
Rollback version:
Remaining work or risk:
```

## Marketing and launch work

`marketing/launch-kit.md` contains positioning, store copy, outreach templates, advertising tests, SEO topics, and the launch sequence. Keep product facts in marketing material aligned with the live product pages and current release configuration.
