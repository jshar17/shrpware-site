import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the ShrpWare product homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /ShrpWare/);
  assert.match(html, /Apps with/);
  assert.match(html, /WavePlume/);
  assert.match(html, /Get for Mac/);
  assert.match(html, /Get for Windows/);
  assert.match(html, /windows-searchable-transcripts\.webp/);
  assert.match(html, /windows-compare-clearly\.webp/);
  assert.match(html, /FREEWARE/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("renders the current WavePlume release and valid purchase path", async () => {
  const response = await render("/apps/waveplume");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Get WavePlume for Mac or Windows/);
  assert.match(html, /Download free trial/);
  assert.match(html, /pub-6e5446faa8bf4deb83894211caf0c1a2\.r2\.dev\/waveplume\/WavePlume-Trial-1\.2\.5-Setup\.exe/i);
  assert.match(html, /apps\.microsoft\.com\/detail\/9p6h8n3vjxbx/i);
  assert.match(html, /apps\.apple\.com\/us\/app\/waveplume\/id6797359772/i);
  assert.match(html, /windows-record-private\.webp/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /\$14\.99/);
  assert.doesNotMatch(html, /submitted for review|Release in preparation|Windows 10\/11 · Preview|OWNER\/REPO/i);
  // WavePlume is $14.99 on both stores. Only the 14-day Windows trial is free,
  // and it is a direct download, not the Store listing.
  assert.doesNotMatch(html, /free for Windows|free from the Microsoft Store|available free/i);
});

test("states the same price on the support page as the product page", async () => {
  const response = await render("/apps/waveplume/support");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /\$14\.99/);
  assert.doesNotMatch(html, /free for Windows|free from the Microsoft Store|available free/i);
});

test("redirects the legacy privacy.html URL that App Store Connect has on file", async () => {
  const response = await render("/privacy.html");
  assert.equal(response.status, 301);
  assert.match(response.headers.get("location") ?? "", /\/apps\/waveplume\/privacy$/);
});

test("renders DeltaTxt as freeware without a dead download", async () => {
  const response = await render("/apps/deltatxt");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Freeware/i);
  assert.match(html, /free to download/i);
  // Same-origin on purpose — see the note on DOWNLOAD_URL. A regression to a
  // bare r2.dev link is invisible on an unfiltered network and fatal on a
  // filtered one, so assert the bucket host is gone rather than only that the
  // path is present.
  assert.match(html, /href="\/downloads\/DeltaTxt-0\.3\.1-setup\.exe"/i);
  assert.doesNotMatch(html, /r2\.dev/i);
  assert.match(html, /windows-compare-clearly\.webp/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /early development preview|href="[^"]*OWNER\/REPO/i);
});

test("serves installers from shrpware.com and refuses everything else", async () => {
  // This route exists because corporate filters block r2.dev as a file-sharing
  // domain, which puts the corporate build out of reach of the very networks it
  // is built for. Its allowlist is the security boundary — without it the route
  // proxies arbitrary keys out of the bucket — so unknown paths must 404.
  const unknown = await render("/downloads/not-a-release.exe");
  assert.equal(unknown.status, 404);

  const traversal = await render("/downloads/..%2F..%2Fsomething-else");
  assert.equal(traversal.status, 404);

  // Pinned so a version bump cannot update the page and orphan the download.
  const route = await readFile(new URL("app/downloads/[file]/route.ts", projectRoot), "utf8");
  assert.match(route, /DeltaTxt-0\.3\.1-setup-corporate\.exe/);
  assert.match(route, /DeltaTxt-0\.3\.1-setup\.exe/);
});

test("ships the SEO discovery routes and product artwork", async () => {
  await Promise.all([
    access(new URL("app/robots.ts", projectRoot)),
    access(new URL("app/sitemap.ts", projectRoot)),
    access(new URL("public/og.png", projectRoot)),
    access(new URL("public/apps/waveplume/hero-wave.webp", projectRoot)),
    access(new URL("public/apps/waveplume/gallery/windows-record-private.webp", projectRoot)),
    access(new URL("public/apps/waveplume/gallery/windows-searchable-transcripts.webp", projectRoot)),
    access(new URL("public/apps/waveplume/gallery/windows-your-folders.webp", projectRoot)),
    access(new URL("public/apps/deltatxt/hero-workbench.webp", projectRoot)),
    access(new URL("public/apps/deltatxt/gallery/windows-code-without-overhead.webp", projectRoot)),
    access(new URL("public/apps/deltatxt/gallery/windows-compare-clearly.webp", projectRoot)),
    access(new URL("public/apps/deltatxt/gallery/windows-search-workspace.webp", projectRoot)),
  ]);
});
