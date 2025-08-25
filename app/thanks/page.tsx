// app/thanks/page.tsx
export default function ThanksPage() {
  return (
    <main className="min-h-[70vh] grid place-items-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-brandblack">Thanks! 🎉</h1>
        <p className="mt-3 text-slate-600">
          We’ve received your message and will get back to you within one business day.
        </p>

        <div className="mt-8 space-x-3">
          <a href="/" className="inline-block rounded-2xl border px-5 py-3 hover:bg-white">
            Go Home
          </a>
          <a href="#pricing" className="inline-block rounded-2xl border px-5 py-3 hover:bg-white">
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          If you need immediate help, email us at{" "}
          <a className="underline" href="mailto:popersprosperousbk@gmail.com">
            popersprosperousbk@gmail.com
          </a>{" "}
          or call <a className="underline" href="tel:+16786777210">(678) 677-7210</a>.
        </p>
      </div>
    </main>
  );
}