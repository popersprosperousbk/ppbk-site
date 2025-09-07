import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ppbkga.com"),
  title: "Poper's Prosperous Bookkeeping (PPBK) | QuickBooks Experts in Georgia",
  description:
    "Professional bookkeeping, cleanup, and QuickBooks reconciliation services for small businesses in Georgia. Save time, reduce stress, and grow with clarity.",
  keywords: [
    "bookkeeping Woodstock GA",
    "QuickBooks cleanup",
    "bookkeeper Georgia",
    "small business bookkeeping",
    "financial reconciliation",
  ],
  openGraph: {
    title: "Poper's Prosperous Bookkeeping (PPBK)",
    description:
      "Trusted bookkeeping and QuickBooks reconciliation for small businesses. Serving Woodstock, GA and beyond.",
    url: "https://www.ppbkga.com",
    siteName: "PPBK",
    // UPDATED: use the new stacked logo for social previews
    images: [{ url: "/ppbkh-logo.png", width: 512, height: 512, alt: "PPBK Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Poper's Prosperous Bookkeeping (PPBK)",
    description:
      "Professional bookkeeping and reconciliation services for small businesses.",
    // UPDATED: match Twitter card image to new logo
    images: ["/ppbkh-logo.png"],
  },
  // UPDATED: point icons at the new monogram/Touch icon
  icons: {
    icon: [
      { url: "/ppbk-favicon.ico" },
      { url: "/ppbk-favicon.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // UPDATED: set JSON-LD image to the new absolute logo URL
  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Poper's Prosperous Bookkeeping, LLC",
    url: "https://www.ppbkga.com",
    telephone: "+16786777210",
    image: "https://www.ppbkga.com/ppbkh-logo.png", // UPDATED
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "GA",
    },
    areaServed: "Georgia",
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
