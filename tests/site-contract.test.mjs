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

test("positions DeltaTxt as a native Mac and Windows text workbench", async () => {
  const product = await fetchPath("/apps/deltatxt", { headers: { accept: "text/html" } });
  const productHtml = await product.text();
  assert.match(productHtml, /Native on both platforms/);
  assert.match(productHtml, /Swift with AppKit/);
  assert.match(productHtml, /Swift \+ AppKit/);
  assert.match(productHtml, /C# \+ \.NET 8/);
  assert.match(productHtml, /Windows Forms, Scintilla/);
  assert.match(productHtml, /No Electron/);
  assert.match(productHtml, /Python tools on Windows/);
  assert.match(productHtml, /direct pdb commands/);
  assert.doesNotMatch(productHtml, /Call Stack|Debug Console/);
  // The Mac App Store edition cannot run scripts; the page must keep saying so
  // next to any IDE claim, or the listing and the site disagree.
  assert.match(productHtml, /Mac App Store edition focuses on editing/);
  assert.match(productHtml, /Find and replace precisely/);
  assert.match(productHtml, /Compare and merge with control/);
  assert.match(productHtml, /deltatxt-mac-store/);
  assert.match(productHtml, /deltatxt-store/);
  assert.match(productHtml, /Made like a Mac app/);
  assert.match(productHtml, /Built for Windows/);
  assert.match(productHtml, /hero-windows-debug\.webp/);
  for (const shot of ["code-editor", "diff-compare", "find-in-files", "three-way-merge", "folder-compare", "markdown-preview", "logs-large-files"]) {
    assert.match(productHtml, new RegExp(`mac-${shot}\\.webp`));
  }
  assert.doesNotMatch(productHtml, /mac-(edit-with-focus|compare-with-confidence|search-every-file|compare-folders)/);
  assert.match(productHtml, /windows-code-without-overhead\.webp/);
  assert.match(productHtml, /windows-search-workspace\.webp/);
  assert.match(productHtml, /use-cases\/python-ide-debugger/);
  assert.match(productHtml, /use-cases\/find-replace-text-files/);

  const home = await fetchPath("/", { headers: { accept: "text/html" } });
  const homeHtml = await home.text();
  assert.match(homeHtml, /built natively for Mac in Swift/i);
  assert.match(homeHtml, /Mac \+ Windows/i);
});

test("lists the 0.3.3 Mac release without run or debug claims", async () => {
  const product = await fetchPath("/apps/deltatxt", { headers: { accept: "text/html" } });
  assert.match(await product.text(), /New in 0\.3\.3: Markdown preview/);

  const changelog = await fetchPath("/apps/deltatxt/changelog", { headers: { accept: "text/html" } });
  const html = await changelog.text();
  const mac = html.slice(html.indexOf("DeltaTxt 0.3.3 for Mac"), html.indexOf("DeltaTxt 0.3.2"));
  assert.ok(mac.length > 0, "the 0.3.3 Mac entry precedes 0.3.2");
  assert.match(mac, /Mac App Store edition/);
  assert.match(mac, /Follow File: watch a growing log update in place/);
  assert.match(mac, /format or minify JSON, format XML/);
  // The Mac App Store edition runs no scripts, so its notes must never claim to.
  assert.doesNotMatch(mac, /\b(run|debug\w*|interpreter|console)\b/i);
});

test("describes DeltaTxt for search with per-edition structured data", async () => {
  const response = await fetchPath("/apps/deltatxt", { headers: { accept: "text/html" } });
  const html = await response.text();
  assert.match(html, /<title>DeltaTxt — Code editor, diff &amp; merge for Mac and Windows/);
  assert.match(html, /<link rel="canonical" href="https:\/\/shrpware\.com\/apps\/deltatxt"/);
  assert.match(html, /property="og:image" content="https:\/\/shrpware\.com\/apps\/deltatxt\/gallery\/mac-code-editor\.webp"/);

  const ld = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  const [mac, windows] = ld["@graph"];
  assert.equal(mac["@type"], "SoftwareApplication");
  assert.equal(mac.applicationCategory, "DeveloperApplication");
  assert.equal(mac.softwareVersion, "0.3.3");
  assert.equal(mac.offers.price, "0");
  assert.equal(mac.installUrl, "https://apps.apple.com/us/app/deltatxt/id6804090746");
  assert.equal(mac.downloadUrl, mac.installUrl);
  // The Mac App Store edition runs no scripts; keep IDE claims on the Windows node.
  assert.doesNotMatch(JSON.stringify(mac), /python|debug|interpreter|\brun\b/i);
  assert.match(windows.operatingSystem, /Windows/);
  assert.match(JSON.stringify(windows), /Python/);
});

test("renders the animated homepage with useful content before JavaScript", async () => {
  const response = await fetchPath("/", { headers: { accept: "text/html" } });
  const html = await response.text();
  assert.match(html, /Apps with/);
  assert.match(html, /an edge\./);
  assert.doesNotMatch(html, /Pause motion/);
  assert.match(html, /id="apps"/);
  assert.match(html, /id="standard"/);
  assert.match(html, /Explore WavePlume/);
  assert.match(html, /Explore DeltaTxt/);
  assert.match(html, /hero-windows-transcript-20260907.webp/);
  assert.match(html, /hero-windows-debug.webp/);
});

test("shows the current WavePlume Windows gallery and platform-specific features", async () => {
  const response = await fetchPath("/apps/waveplume", { headers: { accept: "text/html" } });
  const html = await response.text();
  assert.match(html, /Quick Note, Standard Meeting, or Archival Quality/);
  assert.match(html, /platform interfaces and individual tools differ/);
  assert.match(html, /go\/waveplume-mac/);
  assert.match(html, /go\/waveplume-windows/);
  for (const feature of ["record", "transcript", "library", "edit"]) {
    assert.match(html, new RegExp(`windows-${feature}-20260907\\.webp`));
  }
});

test("keeps WavePlume support and privacy aligned with current recording and handoff behavior", async () => {
  const support = await fetchPath("/apps/waveplume/support", { headers: { accept: "text/html" } });
  const supportHtml = await support.text();
  assert.match(supportHtml, /window you want to capture is open and not minimized/);
  assert.doesNotMatch(supportHtml, /records audio, not video/);
  assert.doesNotMatch(supportHtml, /Hugging Face-hosted Argmax model repository/);

  const privacy = await fetchPath("/apps/waveplume/privacy", { headers: { accept: "text/html" } });
  const privacyHtml = await privacy.text();
  assert.match(privacyHtml, /selected screens or windows/);
  assert.match(privacyHtml, /Whisper\.net’s model downloader/);
  assert.match(privacyHtml, /WavePlume does not paste or upload the transcript/);
  assert.match(privacyHtml, /TEMP%\\WavePlume\\handoff/);
  // The Mac App Store listing declares transcripts sent for online summaries
  // as collected, and App Review reads this page against that declaration.
  assert.match(privacyHtml, /Optional meeting summaries on Mac/);
  assert.match(privacyHtml, /Google Gemini, Groq/);
  assert.match(privacyHtml, /asks your permission before sending/);
  assert.match(privacyHtml, /Microsoft 365 Copilot, Claude, and ChatGPT are hand-offs/);
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
    ["/go/deltatxt-mac-store", /apps\.apple\.com\/us\/app\/deltatxt\/id6804090746/],
    ["/go/deltatxt-download", /DeltaTxt-0\.3\.2-setup\.exe/],
    ["/go/deltatxt-store", /apps\.microsoft\.com\/detail\/9P8VKC9NHPBV/],
  ];

  for (const [path, destination] of activeCases) {
    const response = await fetchPath(path);
    assert.equal(response.status, 307, path);
    assert.match(response.headers.get("location") ?? "", destination, path);
    assert.equal(response.headers.get("referrer-policy"), "no-referrer", path);
    assert.equal(response.headers.get("cache-control"), "no-store", path);
  }

  const deltaTxt = await fetchPath("/go/deltatxt-download");
  assert.equal(
    deltaTxt.headers.get("location"),
    "https://shrpware.com/downloads/deltatxt/DeltaTxt-0.3.2-setup.exe",
  );
});

test("serves the DeltaTxt installer as a first-party attachment", async () => {
  const originalFetch = globalThis.fetch;
  let upstreamRequest;

  globalThis.fetch = async (input, init) => {
    upstreamRequest = new Request(input, init);
    return new Response("installer bytes", {
      status: 206,
      headers: {
        "Accept-Ranges": "bytes",
        "Content-Range": "bytes 0-14/73175504",
        ETag: '"deltatxt-installer"',
      },
    });
  };

  try {
    const response = await fetchPath(
      "/downloads/deltatxt/DeltaTxt-0.3.2-setup.exe",
      { headers: { Range: "bytes=0-14" } },
    );

    assert.equal(response.status, 206);
    assert.equal(
      response.headers.get("content-disposition"),
      'attachment; filename="DeltaTxt-0.3.2-setup.exe"',
    );
    assert.equal(response.headers.get("content-type"), "application/vnd.microsoft.portable-executable");
    assert.equal(response.headers.get("content-range"), "bytes 0-14/73175504");
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(upstreamRequest.method, "GET");
    assert.equal(upstreamRequest.headers.get("range"), "bytes=0-14");
    assert.match(upstreamRequest.url, /^https:\/\/pub-[^.]+\.r2\.dev\/deltatxt\//);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("keeps required brand and product assets in the deployable tree", async () => {
  for (const path of [
    "../public/brand/shrpware-wordmark.svg",
    "../public/og-v5.png",
    "../public/apps/waveplume/hero-wave.webp",
    "../public/apps/waveplume/hero-windows-transcript-20260907.webp",
    ...["record", "transcript", "library", "edit"].flatMap((feature) => [
      `../public/apps/waveplume/gallery/windows-${feature}-20260907.webp`,
      `../public/apps/waveplume/gallery/windows-${feature}-20260907-thumb.webp`,
    ]),
    "../public/apps/deltatxt/hero-workbench.webp",
    "../public/apps/deltatxt/hero-windows-debug.webp",
    "../public/apps/deltatxt/icon-160.webp",
    ...["code-editor", "diff-compare", "find-in-files", "three-way-merge", "folder-compare", "markdown-preview", "logs-large-files"].flatMap((shot) => [
      `../public/apps/deltatxt/gallery/mac-${shot}.webp`,
      `../public/apps/deltatxt/gallery/mac-${shot}-thumb.webp`,
    ]),
    "../public/apps/deltatxt/gallery/windows-code-without-overhead.webp",
    "../public/apps/deltatxt/gallery/windows-code-without-overhead-thumb.webp",
    "../public/apps/deltatxt/gallery/windows-compare-clearly.webp",
    "../public/apps/deltatxt/gallery/windows-compare-clearly-thumb.webp",
    "../public/apps/deltatxt/gallery/windows-search-workspace.webp",
    "../public/apps/deltatxt/gallery/windows-search-workspace-thumb.webp",
  ]) {
    await access(new URL(path, import.meta.url));
  }
});
