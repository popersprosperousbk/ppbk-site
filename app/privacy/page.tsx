export const metadata = {
  title: "Privacy Policy | Poper's Prosperous Bookkeeping (PPBK)",
  description:
    "Learn how PPBK collects, uses, and protects your information. We value your privacy and keep your data secure.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-6 text-slate-700 leading-relaxed">
        <p>
          Poper’s Prosperous Bookkeeping, LLC (“PPBK”, “we”, “us”) is committed to protecting your
          privacy. This policy explains what information we collect, how we use it, and your choices.
        </p>

        <h2 className="text-xl font-semibold">Information we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact details (name, email, phone) you submit via forms</li>
          <li>Business information you provide to receive services or quotes</li>
          <li>Basic analytics (pages visited, device/browser) to improve the website</li>
        </ul>

        <h2 className="text-xl font-semibold">How we use information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to inquiries and provide quotes or services</li>
          <li>To operate, maintain, and improve our website and offerings</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold">Sharing</h2>
        <p>
          We do not sell your data. We may share with trusted processors (e.g., form handling,
          hosting, analytics) strictly to provide our services, bound by confidentiality and
          security obligations, or when required by law.
        </p>

        <h2 className="text-xl font-semibold">Security</h2>
        <p>
          We use reasonable technical and organizational safeguards to protect your information.
          However, no method of transmission or storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold">Your choices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You can request access, correction, or deletion of your data</li>
          <li>You can opt out of non-essential communications</li>
        </ul>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:popersprosperousbk@gmail.com" className="text-blue-700 underline">
            popersprosperousbk@gmail.com
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
