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
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "PPBK Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Poper's Prosperous Bookkeeping (PPBK)",
    description:
      "Professional bookkeeping and reconciliation services for small businesses.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Poper's Prosperous Bookkeeping, LLC",
    url: "https://www.ppbkga.com",
    telephone: "+16786777210",
    image: "https://www.ppbkga.com/logo.png",
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
