import type { MetadataRoute } from "next";

const routes = [
  "", "/apps/waveplume", "/apps/waveplume/support", "/apps/waveplume/privacy", "/apps/waveplume/changelog",
  "/apps/deltatxt", "/apps/deltatxt/support", "/apps/deltatxt/privacy", "/apps/deltatxt/changelog",
  "/use-cases/offline-meeting-transcription", "/use-cases/large-log-file-editor", "/use-cases/file-comparison-merge",
  "/compare/waveplume-vs-cloud-meeting-bots", "/compare/deltatxt-vs-heavyweight-editors", "/press",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://shrpware.com${route}`, lastModified: new Date("2026-08-19"), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route.split("/").length <= 3 ? 0.8 : 0.6 }));
}
