export const metadata = {
  title: "Thanks | Poper's Prosperous Bookkeeping (PPBK)",
  description:
    "Thanks for reaching out — we received your message and will reply within one business day.",
};

export default function ThanksPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="inline-block rounded-3xl border bg-white p-10 shadow-sm">
        <div className="text-3xl font-bold">Thanks! We got your message.</div>
        <p className="mt-3 text-slate-600">
          We’ll reply within one business day. If it’s urgent, call{" "}
          <a href="tel:+16786777210" className="text-blue-700 underline">
            (678) 677-7210
          </a>{" "}
          or email{" "}
          <a href="mailto:popersprosperousbk@gmail.com" className="text-blue-700 underline">
            popersprosperousbk@gmail.com
          </a>.
        </p>

        <div className="mt-8">
          <a href="/" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-blue-700 text-white">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
