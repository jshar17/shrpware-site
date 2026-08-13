import type { MetadataRoute } from "next";

const routes = [
  "",
  "/apps/waveplume",
  "/apps/waveplume/support",
  "/apps/waveplume/privacy",
  "/apps/deltatxt",
  "/apps/deltatxt/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://shrpware.com${path}`,
    lastModified: new Date("2026-08-12"),
    changeFrequency: path === "" ? "monthly" : "weekly",
    priority: path === "" ? 1 : path === "/apps/waveplume" || path === "/apps/deltatxt" ? 0.9 : 0.6,
  }));
}
