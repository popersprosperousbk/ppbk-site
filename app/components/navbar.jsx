"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-blue-900 hover:opacity-80 font-medium tracking-wide"
            >
              {item.label}
            </Link>
          ))}

          {/* Email CTA (uses new address) */}
          <a
            href="mailto:info@ppbkga.com"
            className="rounded-xl px-4 py-2 font-semibold text-white"
            style={{ background: "linear-gradient(90deg,#0a2a5e,#0a2a5e)" }} // blue button
            aria-label="Email PPBK"
          >
            Email Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Open main menu</span>
          {/* simple hamburger */}
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="block h-0.5 w-6 bg-black"></span>
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-blue-900 font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:info@ppbkga.com"
              className="block py-2 font-semibold text-blue-900"
              onClick={() => setOpen(false)}
            >
              Email Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
