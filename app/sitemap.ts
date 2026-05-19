import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl;
  const now = new Date();
  const staticRoutes = ["", "/services", "/about", "/contact", "/privacy", "/terms"];
  const serviceRoutes = siteConfig.services.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.5,
  }));
}
