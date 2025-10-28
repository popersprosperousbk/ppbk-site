import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ppbkga.com"),
  title: "Poper's Prosperous Bookkeeping",
  description: "Professional bookkeeping services to help small businesses prosper",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Poper's Prosperous Bookkeeping",
    description: "Bookkeeping made simple — so your business can prosper.",
    url: "https://www.ppbkga.com",
    siteName: "Poper's Prosperous Bookkeeping",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PPBK Gold & Blue Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poper's Prosperous Bookkeeping",
    description: "Professional bookkeeping services to help small businesses prosper",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar (client component with mobile menu + anchors) */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white px-6 py-8 mt-12">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-[200px] h-[55px]">
              <Image
                src="/PPBK-h-logo.png"
                alt="Poper's Prosperous Bookkeeping"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center md:text-right">
              <p className="mb-1">Poper’s Prosperous Bookkeeping</p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:info@ppbkga.com" className="underline">
                  info@ppbkga.com
                </a>
              </p>
              <p className="opacity-90">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl mt-6 flex flex-wrap items-center justify-center gap-6 text-sm opacity-95">
            <Link className="hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:underline" href="/terms">
              Terms
            </Link>
            <Link className="hover:underline" href="/legal">
              Legal
            </Link>
            <Link className="hover:underline" href="/#contact">
              Contact
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

