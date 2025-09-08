export const metadata = {
  title: "Terms of Service | Poper's Prosperous Bookkeeping (PPBK)",
  description:
    "Read the terms that govern your use of PPBK’s website and bookkeeping services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-6 text-slate-700 leading-relaxed">
        <h2 className="text-xl font-semibold">1. Acceptance of terms</h2>
        <p>
          By accessing or using this website and/or engaging PPBK for services, you agree to these
          Terms. If you do not agree, please do not use the site or services.
        </p>

        <h2 className="text-xl font-semibold">2. Services</h2>
        <p>
          Scope, fees, and deliverables will be defined in our proposal or engagement letter. You
          agree to provide timely and accurate information needed to perform the services.
        </p>

        <h2 className="text-xl font-semibold">3. Payment</h2>
        <p>
          Fees are due as stated in the invoice or engagement. Late payments may incur fees. We may
          suspend work for non-payment.
        </p>

        <h2 className="text-xl font-semibold">4. Confidentiality</h2>
        <p>
          We maintain confidentiality of your non-public information except as authorized by you or
          required by law.
        </p>

        <h2 className="text-xl font-semibold">5. Disclaimers</h2>
        <p>
          Our services are provided “as is” without warranties. We are not responsible for indirect
          or consequential damages to the extent permitted by law.
        </p>

        <h2 className="text-xl font-semibold">6. Governing law</h2>
        <p>These Terms are governed by the laws of the State of Georgia, USA.</p>

        <h2 className="text-xl font-semibold">7. Contact</h2>
        <p>
          For questions, contact{" "}
          <a href="mailto:info@ppbkga.com" className="text-blue-700 underline">
            popersprosperousbk@gmail.com
          </a>{" "}
          or{" "}
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
