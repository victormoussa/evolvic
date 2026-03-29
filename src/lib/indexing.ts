import type { Metadata } from "next";

/** When not `"true"`, crawlers should not index (pre-launch, previews, etc.). */
export function allowIndexing(): boolean {
  return process.env.ALLOW_INDEXING === "true";
}

/** Canonical site origin for sitemaps, OG URLs, and metadataBase. No trailing slash. */
export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://evolvic.com").replace(
    /\/$/,
    "",
  );
}

export function buildRobotsMetadata(): Metadata["robots"] {
  if (allowIndexing()) {
    return {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    };
  }
  return {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  };
}
