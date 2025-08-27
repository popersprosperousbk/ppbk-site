// app/robots.ts
import type { MetadataRoute } from "next";

// Ensure this route is treated as static at build time
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.ppbkga.com/sitemap.xml",
  };
}
