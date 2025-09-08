export const metadata = {
  title: "Legal | Poper's Prosperous Bookkeeping (PPBK)",
  description:
    "Legal information for Poper's Prosperous Bookkeeping, LLC including ownership, trademarks, and contact information.",
};

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Legal</h1>
      <p className="mt-2 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-6 text-slate-700 leading-relaxed">
        <p>
          Poper's Prosperous Bookkeeping, LLC (“PPBK”) operates this website. All content, logos,
          and brand elements are owned by PPBK unless otherwise noted.
        </p>

        <h2 className="text-xl font-semibold">Trademarks</h2>
        <p>
          “Poper's Prosperous Bookkeeping”, “PPBK”, and associated marks and logos are trademarks or
          service marks of PPBK. Unauthorized use is prohibited.
        </p>

        <h2 className="text-xl font-semibold">Website content</h2>
        <p>
          Content is provided for informational purposes only and should not be considered legal,
          tax, or accounting advice.
        </p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          For legal inquiries, email{" "}
          <a href="mailto:info@ppbkga.com" className="text-blue-700 underline">
            info@ppbkga.com
          </a>{" "}
          or call{" "}
          <a href="tel:+16786777210" className="text-blue-700 underline">
            (678) 677-7210
          </a>
          .
        </p>
      </section>

      <div className="mt-10">
        <a href="/" className="inline-block rounded-2xl bg-blue-700 text-white px-5 py-3">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
