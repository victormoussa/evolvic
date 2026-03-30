import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/indexing";
import { getAllServiceSlugs } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing()) {
    return [];
  }

  const base = siteUrl();
  const now = new Date();

  const staticPaths = [
    "",
    "/about-us",
    "/contact",
    "/services",
    "/careers",
    "/blog",
    "/terms-and-conditions",
    "/privacy-policy",
  ];

  const serviceSlugs = getAllServiceSlugs();

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];

  return entries;
}
