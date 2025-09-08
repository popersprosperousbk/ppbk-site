import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Poper's Prosperous Bookkeeping",
  description: "Professional bookkeeping services to help small businesses prosper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* 🔹 Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/PPBK-h-logo.png"
                alt="Poper’s Prosperous Bookkeeping"
                width={210}
                height={56}
                priority
              />
            </Link>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-blue-900 hover:opacity-80 font-medium tracking-wide">
                About
              </Link>
              <Link href="/services" className="text-blue-900 hover:opacity-80 font-medium tracking-wide">
                Services
              </Link>
              <Link href="/contact" className="text-blue-900 hover:opacity-80 font-medium tracking-wide">
                Contact
              </Link>

              {/* Email button */}
              <a
                href="mailto:info@ppbkga.com"
                className="rounded-xl px-4 py-2 font-semibold text-white"
                style={{ background: "linear-gradient(90deg,#0a2a5e,#0a2a5e)" }}
              >
                Email Us
              </a>
            </div>
          </nav>
        </header>

        {/* 🔹 Page content */}
        <main className="flex-grow">{children}</main>

        {/* 🔹 Footer */}
        <footer className="bg-blue-900 text-white px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Image
              src="/PPBK-h-logo.png"
              alt="Poper's Prosperous Bookkeeping"
              width={200}
              height={55}
            />
            <div className="text-center md:text-right mt-4 md:mt-0">
              <p>Poper’s Prosperous Bookkeeping</p>
              <p>
                Email:{" "}
                <a href="mailto:info@ppbkga.com" className="underline">
                  info@ppbkga.com
                </a>
              </p>
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
