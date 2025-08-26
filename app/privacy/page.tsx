export const metadata = {
  title: "Privacy Policy | PPBK",
  description:
    "How Poper's Prosperous Bookkeeping (PPBK) collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-slate-800">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mt-6">
        This Privacy Policy explains how <strong>Poper&apos;s Prosperous Bookkeeping, LLC</strong> (“PPBK”, “we”, “our”, or “us”) collects,
        uses, and protects your information when you use our website (ppbkga.com) and our services.
      </p>

      <h2 className="mt-10 text-xl font-semibold">1) Information We Collect</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        <li>Contact details (name, email, phone, company)</li>
        <li>Business information provided when requesting services</li>
        <li>Website/device data (via cookies/analytics if enabled)</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">2) How We Use Information</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        <li>Respond to inquiries and provide quotes</li>
        <li>Deliver bookkeeping and advisory services</li>
        <li>Improve website and customer experience</li>
        <li>Comply with legal/tax obligations</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">3) Sharing</h2>
      <p className="mt-4">
        We never sell your information. We may share data with trusted providers like Formspree (forms), Vercel (hosting), or QuickBooks if you hire us to work in your books.
      </p>

      <h2 className="mt-8 text-xl font-semibold">4) Data Retention & Security</h2>
      <p className="mt-4">
        We keep data only as long as needed and apply reasonable safeguards, but no method of transmission is 100% secure.
      </p>

      <h2 className="mt-8 text-xl font-semibold">5) Your Rights</h2>
      <p className="mt-4">
        You may request access, correction, or deletion of your personal data by contacting us.
      </p>

      <h2 className="mt-8 text-xl font-semibold">6) Contact</h2>
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
    </main>
  );
}
