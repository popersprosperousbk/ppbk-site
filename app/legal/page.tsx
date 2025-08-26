export const metadata = {
  title: "Legal | PPBK",
  description: "Legal information for Poper's Prosperous Bookkeeping (PPBK): Privacy Policy and Terms of Service.",
};

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-slate-800">
      <h1 className="text-3xl font-bold">Legal</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mt-6">
        Find our key legal documents below. For questions, email{" "}
        <a className="text-blue-700 underline" href="mailto:popersprosperousbk@gmail.com">
          popersprosperousbk@gmail.com
        </a>{" "}
        or call{" "}
        <a className="text-blue-700 underline" href="tel:+16786777210">
          (678) 677-7210
        </a>.
      </p>

      <ul className="mt-8 space-y-4">
        <li>
          <a href="/privacy" className="text-blue-700 underline font-medium">
            Privacy Policy
          </a>
          <p className="text-slate-600 text-sm">
            How we collect, use, and protect your information.
          </p>
        </li>
        <li className="pt-2">
          <a href="/terms" className="text-blue-700 underline font-medium">
            Terms of Service
          </a>
          <p className="text-slate-600 text-sm">
            The conditions governing your use of our services and website.
          </p>
        </li>
      </ul>

      <div className="mt-10">
        <a href="/" className="text-blue-700 hover:underline">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
