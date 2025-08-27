// app/sitemap.ts
import type { MetadataRoute } from "next";

// Ensure this route is treated as static at build time
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ppbkga.com";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/thanks`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
