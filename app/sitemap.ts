Set-Content -Path app\sitemap.ts -Value @"
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ppbkga.com";
  const last = new Date();
  return [
    { url: \`\${base}/\`, lastModified: last, changeFrequency: "monthly", priority: 1 },
    { url: \`\${base}/privacy\`, lastModified: last, changeFrequency: "yearly", priority: 0.3 },
    { url: \`\${base}/terms\`, lastModified: last, changeFrequency: "yearly", priority: 0.3 },
    { url: \`\${base}/legal\`, lastModified: last, changeFrequency: "yearly", priority: 0.2 },
    { url: \`\${base}/thanks\`, lastModified: last, changeFrequency: "yearly", priority: 0.2 },
  ];
}
"@
