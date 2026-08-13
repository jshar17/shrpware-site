import assert from "node:assert/strict";
import { access } from "node:fs/promises";
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
  assert.match(html, /Get for Windows/);
  assert.match(html, /windows-searchable-transcripts\.webp/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("renders the current WavePlume release and valid purchase path", async () => {
  const response = await render("/apps/waveplume");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Download WavePlume free for Windows/);
  assert.match(html, /apps\.microsoft\.com\/detail\/9p6h8n3vjxbx/i);
  assert.match(html, /windows-record-private\.webp/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /apps\.apple\.com|submitted for review|Windows 10\/11 · Preview|OWNER\/REPO|Download free trial/i);
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
  ]);
});
