import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Large Logo */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="relative w-[420px] h-[200px] sm:w-[520px] sm:h-[260px]">
          <Image
            src="/PPBK-h-logo.png"
            alt="Poper's Prosperous Bookkeeping Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-900">
          <Link href="/services" className="hover:text-blue-800 transition">
            Services
          </Link>
          <Link href="/industries" className="hover:text-blue-800 transition">
            Industries
          </Link>
          <Link href="/results" className="hover:text-blue-800 transition">
            Results
          </Link>
          <Link href="/pricing" className="hover:text-blue-800 transition">
            Pricing
          </Link>
          <Link href="/reviews" className="hover:text-blue-800 transition">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-blue-800 transition">
            Contact
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to simplify your bookkeeping?
          </h2>
          <a
            href="mailto:info@ppbkga.com"
            className="inline-block rounded-xl bg-white text-blue-900 font-semibold px-8 py-3 hover:bg-gray-100 transition"
          >
            Get a Quote →
          </a>
        </div>
      </section>
    </main>
  );
}
