import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poper's Prosperous Bookkeeping (PPBK)",
  description: "Prosperous books. Confident decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
