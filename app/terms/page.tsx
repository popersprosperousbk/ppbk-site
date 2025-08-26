export const metadata = {
  title: "Terms of Service | PPBK",
  description: "Terms of Service for Poper's Prosperous Bookkeeping (PPBK).",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-slate-800">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mt-6">
        These Terms govern your use of{" "}
        <strong>Poper&apos;s Prosperous Bookkeeping, LLC</strong> (“PPBK”, “we”, “our”) services.
        By engaging us, you agree to these Terms.
      </p>

      <h2 className="mt-10 text-xl font-semibold">1) Services</h2>
      <p className="mt-4">
        We provide bookkeeping and advisory services as agreed in quotes or proposals.
      </p>

      <h2 className="mt-8 text-xl font-semibold">2) Payments</h2>
      <p className="mt-4">
        Invoices are due upon receipt unless otherwise stated. Overdue accounts may be paused.
      </p>

      <h2 className="mt-8 text-xl font-semibold">3) Client Responsibilities</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        <li>Provide accurate, timely info and access.</li>
        <li>Maintain lawful records and compliance.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">4) No Tax or Legal Advice</h2>
      <p className="mt-4">
        Our services do not include legal or tax filing unless explicitly agreed.
      </p>

      <h2 className="mt-8 text-xl font-semibold">5) Confidentiality</h2>
      <p className="mt-4">
        Both parties agree to maintain confidentiality of sensitive information.
      </p>

      <h2 className="mt-8 text-xl font-semibold">6) Termination</h2>
      <p className="mt-4">
        Either party may terminate with written notice. Fees earned remain payable.
      </p>

      <h2 className="mt-8 text-xl font-semibold">7) Limitation of Liability</h2>
      <p className="mt-4">
        PPBK is not liable for indirect or consequential damages. Liability is capped at fees paid
        in the prior 3 months.
      </p>

      <h2 className="mt-8 text-xl font-semibold">8) Governing Law</h2>
      <p className="mt-4">These Terms are governed by Georgia law.</p>

      <h2 className="mt-8 text-xl font-semibold">9) Contact</h2>
      <p className="mt-4">
        Email:{" "}
        <a href="mailto:popersprosperousbk@gmail.com" className="text-blue-700 underline">
          popersprosperousbk@gmail.com
        </a>
        <br />
        Phone:{" "}
        <a href="tel:+16786777210" className="text-blue-700 underline">
          (678) 677-7210
        </a>
      </p>

      <div className="mt-10">
        <a href="/" className="text-blue-700 hover:underline">
          ← Back to Home
        </a>
      </div>

      <p className="mt-10 text-xs text-slate-500">
        *This page is general information only and not legal advice. Please consult an attorney for a customized review.
      </p>
    </main>
  );
}
