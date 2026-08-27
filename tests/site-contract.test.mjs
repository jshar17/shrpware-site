import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function fetchPath(path, init) {
  return worker.fetch(new Request(`https://shrpware.com${path}`, init), env, ctx);
}

test("renders every public content route", async () => {
  const routes = [
    "/",
    "/apps/waveplume",
    "/apps/waveplume/support",
    "/apps/waveplume/privacy",
    "/apps/waveplume/changelog",
    "/apps/deltatxt",
    "/apps/deltatxt/support",
    "/apps/deltatxt/privacy",
    "/apps/deltatxt/changelog",
    "/use-cases/offline-meeting-transcription",
    "/use-cases/python-ide-debugger",
    "/use-cases/find-replace-text-files",
    "/use-cases/large-log-file-editor",
    "/use-cases/file-comparison-merge",
    "/compare/waveplume-vs-cloud-meeting-bots",
    "/compare/deltatxt-vs-heavyweight-editors",
    "/press",
  ];

  for (const route of routes) {
    const response = await fetchPath(route, { headers: { accept: "text/html" } });
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
    const html = await response.text();
    assert.match(html, /SHRPWARE|ShrpWare/, route);
  }
});

test("publishes search metadata routes", async () => {
  const robots = await fetchPath("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /sitemap\.xml/);

  const sitemap = await fetchPath("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /apps\/waveplume/);
  assert.match(xml, /apps\/deltatxt/);
  assert.match(xml, /offline-meeting-transcription/);
  assert.match(xml, /python-ide-debugger/);
  assert.match(xml, /find-replace-text-files/);
});

test("positions DeltaTxt around Python debugging, find and replace, and comparison", async () => {
  const product = await fetchPath("/apps/deltatxt", { headers: { accept: "text/html" } });
  const productHtml = await product.text();
  assert.match(productHtml, /Python IDE/);
  assert.match(productHtml, /Run and debug Python/);
  assert.match(productHtml, /Find and replace precisely/);
  assert.match(productHtml, /Compare text clearly/);
  assert.match(productHtml, /use-cases\/python-ide-debugger/);
  assert.match(productHtml, /use-cases\/find-replace-text-files/);

  const home = await fetchPath("/", { headers: { accept: "text/html" } });
  const homeHtml = await home.text();
  assert.match(homeHtml, /focused Python IDE/i);
  assert.match(homeHtml, /find and replace/i);
});

test("preserves the legacy WavePlume privacy URL used by App Store Connect", async () => {
  const response = await fetchPath("/privacy.html");
  assert.equal(response.status, 301);
  assert.match(response.headers.get("location") ?? "", /\/apps\/waveplume\/privacy$/);
});

test("canonicalizes the DeltaTxt shortcut, HTTP, and www hosts", async () => {
  const shortcut = await fetchPath("/deltatxt");
  assert.equal(shortcut.status, 308);
  assert.equal(shortcut.headers.get("location"), "https://shrpware.com/apps/deltatxt");

  const http = await worker.fetch(new Request("http://shrpware.com/apps/deltatxt"), env, ctx);
  assert.equal(http.status, 308);
  assert.equal(http.headers.get("location"), "https://shrpware.com/apps/deltatxt");

  const www = await worker.fetch(new Request("https://www.shrpware.com/apps/deltatxt"), env, ctx);
  assert.equal(www.status, 308);
  assert.equal(www.headers.get("location"), "https://shrpware.com/apps/deltatxt");
});

test("adds baseline security headers to site responses", async () => {
  const response = await fetchPath("/apps/deltatxt", { headers: { accept: "text/html" } });
  assert.equal(response.headers.get("strict-transport-security"), "max-age=31536000");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
});

test("uses first-party, no-referrer outbound redirects", async () => {
  const activeCases = [
    ["/go/waveplume-trial", /WavePlume-Trial-1\.2\.5-Setup\.exe/],
    ["/go/waveplume-mac", /apps\.apple\.com/],
    ["/go/waveplume-windows", /apps\.microsoft\.com/],
    ["/go/deltatxt-download", /DeltaTxt-0\.3\.1-setup\.exe/],
    ["/go/deltatxt-store", /apps\.microsoft\.com\/detail\/9P8VKC9NHPBV/],
  ];

  for (const [path, destination] of activeCases) {
    const response = await fetchPath(path);
    assert.equal(response.status, 307, path);
    assert.match(response.headers.get("location") ?? "", destination, path);
    assert.equal(response.headers.get("referrer-policy"), "no-referrer", path);
    assert.equal(response.headers.get("cache-control"), "no-store", path);
  }
});

test("keeps required brand and product assets in the deployable tree", async () => {
  for (const path of [
    "../public/brand/shrpware-wordmark.svg",
    "../public/og-v5.png",
    "../public/apps/waveplume/hero-wave.webp",
    "../public/apps/deltatxt/hero-workbench.webp",
    "../public/apps/deltatxt/icon-160.webp",
  ]) {
    await access(new URL(path, import.meta.url));
  }
});
