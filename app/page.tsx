"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Calculator,
  LineChart,
  ShieldCheck,
  Clock,
  Mail,
  Phone,
  Banknote,
  Building2,
  FileSpreadsheet,
  ArrowRight,
  Facebook,
  Linkedin,
  Star,
} from "lucide-react";
import Image from "next/image";

// ---- Contact constants ----
const CONTACT_EMAIL = "info@ppbkga.com"; // ✅ updated
const CONTACT_PHONE_DISPLAY = "(678) 677-7210";
const CONTACT_PHONE_TEL = "+16786777210"; // tel: link format

// ---- Social links ----
const FACEBOOK_PAGE_URL = "https://www.facebook.com/<your-page-handle>"; // ← replace with real FB URL
const LINKEDIN_URL = "https://www.linkedin.com/"; // optional: replace with your LinkedIn

// ---- Public review links (optional placeholders) ----
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";
const FACEBOOK_REVIEW_URL = "https://www.facebook.com/YOUR_PAGE/reviews";

// Reusable royal-blue bubble class
const bubble =
  "inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-blue-700 text-white font-medium shadow hover:bg-blue-800 transition";

// Icon type helper
type IconComp = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

const features: { icon: IconComp; title: string; desc: string }[] = [
  {
    icon: Calculator as IconComp,
    title: "Full-Cycle Bookkeeping",
    desc: "Monthly close, AR/AP, reconciliations, financial statements, and tidy books you can trust.",
  },
  {
    icon: LineChart as IconComp,
    title: "CFO-Level Insights",
    desc: "Dashboards, KPIs, cash-flow, and budget vs. actuals so you can make sharp decisions fast.",
  },
  {
    icon: ShieldCheck as IconComp,
    title: "Cleanups & Catch-ups",
    desc: "Behind on months (or years)? We’ll repair chart of accounts and prepare audit-ready reports.",
  },
  {
    icon: Clock as IconComp,
    title: "Stress-Free Payroll",
    desc: "Accurate, on-time payroll with filings handled and year-end forms delivered.",
  },
];

const industries: { name: string; icon: IconComp }[] = [
  { name: "Gyms & Fitness", icon: Building2 as IconComp },
  { name: "E-commerce", icon: Banknote as IconComp },
  { name: "Contractors", icon: Building2 as IconComp },
  { name: "Professional Services", icon: FileSpreadsheet as IconComp },
];

type Plan = {
  name: string;
  price: string;
  tagline: string;
  bullets: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$399/mo",
    tagline: "Solo founders & side hustles",
    bullets: [
      "Up to 75 txns/mo",
      "Monthly P&L & Balance Sheet",
      "1 bank + 1 credit account",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$799/mo",
    tagline: "Growing teams & multi-accounts",
    bullets: [
      "Up to 300 txns/mo",
      "Weekly reconciliations",
      "Up to 4 accounts",
      "Quarterly review call",
    ],
    featured: true,
  },
  {
    name: "CFO Suite",
    price: "Custom",
    tagline: "Advanced reporting & advisory",
    bullets: [
      "Unlimited txns",
      "Cash-flow & KPI dashboard",
      "Budgeting & forecasting",
      "Monthly strategy call",
    ],
  },
  {
    name: "One Time Charge",
    price: "From $999",
    tagline: "Cleanup / Reconciliation",
    bullets: [
      "Historical cleanup",
      "Bank & credit reconciliations",
      "Chart of accounts repair",
      "Tax-ready financials",
    ],
  },
];

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  // Preselect from ?plan=... in URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("plan");
      if (p) setSelectedPlan(p);
    }
  }, []);

  const onChoosePlan = (name: string) => {
    setSelectedPlan(name);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.set("plan", name);
      const nextUrl = `${window.location.pathname}?${params.toString()}#contact`;
      window.history.replaceState(null, "", nextUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* ✅ HERO with big centered logo (replaces old page-level header) */}
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

      {/* HERO TEXT */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                <span className="text-blue-700">Prosperous</span> books.{" "}
                <span className="text-slate-900">Confident</span> decisions.
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl">
                PPBK delivers precise bookkeeping, clean financials, and
                advisory that helps small businesses grow with clarity.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#contact" className={bubble}>
                  Contact Now <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#pricing" className={bubble}>
                  View Pricing <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 text-sm text-blue-700 font-medium">
                QuickBooks
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Results you can expect (approximate)
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">10+ hrs</h3>
            <p>Weekly time saved</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">3× ROI</h3>
            <p>Average return on fees</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">100%</h3>
            <p>Monthly reconciliations</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">$5k+</h3>
            <p>Annual savings on errors</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-slate-600 mt-2">
            Everything you need from day-to-day bookkeeping to strategic
            finance guidance.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border bg-white hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-lg font-semibold">{f.title}</div>
                    <div className="mt-1 text-slate-600">{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Who we serve</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((it, i) => {
              const Icon = it.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border bg-white p-6 flex items-center gap-3"
                >
                  <Icon className="h-5 w-5 text-blue-700" />
                  <span className="font-medium">{it.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Simple pricing</h2>
          <p className="text-slate-600 mt-2">
            Transparent monthly plans. Cancel anytime.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border bg-white ${
                  p.featured
                    ? "border-blue-700 shadow-[0_10px_30px_rgba(29,78,216,0.12)]"
                    : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-semibold">{p.name}</span>
                    <span className="text-2xl font-extrabold text-blue-700">
                      {p.price}
                    </span>
                  </div>
                  <div className="text-slate-600 mt-1">{p.tagline}</div>

                  <ul className="space-y-2 mt-4">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 text-blue-700" /> {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={() => onChoosePlan(p.name)}
                    className={`${bubble} w-full justify-center mt-6`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Leave a review</h2>
          <p className="text-slate-600 mt-2">
            Share your experience here, or post publicly on Google or Facebook.
          </p>

          {/* On-site review form (Formspree) */}
          <div className="mt-8 rounded-2xl border bg-white">
            <div className="p-6">
              <div className="text-xl font-semibold">Write a review</div>
              <div className="text-slate-600">We appreciate your feedback!</div>
            </div>
            <div className="p-6 pt-0">
              <form
                action="https://formspree.io/f/xkgvnnww"
                method="POST"
                className="grid grid-cols-1 gap-4"
              >
                {/* Identify submission type and redirect */}
                <input
                  type="hidden"
                  name="submissionType"
                  value="review"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New review submitted on PPBK website"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.ppbkga.com/thanks"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    className="border rounded-xl p-3"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <input
                    className="border rounded-xl p-3"
                    name="email"
                    placeholder="Email (not published)"
                    type="email"
                    required
                  />
                </div>

                {/* Star rating */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((n) => {
                      const filled = (hoverRating || rating) >= n;
                      return (
                        <button
                          type="button"
                          key={n}
                          onClick={() => setRating(n)}
                          onMouseEnter={() => setHoverRating(n)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1"
                          aria-label={`${n} star${n > 1 ? "s" : ""}`}
                        >
                          <Star
                            className={`h-7 w-7 ${
                              filled
                                ? "fill-blue-700 text-blue-700"
                                : "text-slate-300"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  {/* Submit rating value */}
                  <input type="hidden" name="rating" value={rating} />
                </div>

                <textarea
                  className="border rounded-xl p-3 min-h-[140px]"
                  name="review"
                  placeholder="What did we help you achieve? Any specific outcomes, time saved, or peace of mind to share?"
                  required
                />

                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    name="consentToPublish"
                    value="yes"
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  I’m happy for PPBK to display my review (name & company) on the
                  website.
                </label>

                <button type="submit" className={bubble}>
                  Submit Review <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* External review buttons */}
          <div className="pt-6 text-sm text-slate-500">
            Prefer leaving a public review?
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-blue-700 text-blue-700 font-medium hover:bg-blue-50 transition"
            >
              Review on Google
            </a>
            <a
              href={FACEBOOK_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-blue-700 text-blue-700 font-medium hover:bg-blue-50 transition"
            >
              Review on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Let’s tidy your books</h2>
            <p className="text-slate-600 mt-2 max-w-xl">
              Tell us about your business and we’ll propose the right plan within
              24 hours.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3 text-slate-700">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 hover:underline break-all"
              >
                <Mail className="h-5 w-5 text-blue-700" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-3 hover:underline"
              >
                <Phone className="h-5 w-5 text-blue-700" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3 text-slate-500">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full border hover:border-blue-700 hover:text-blue-700 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border hover:border-blue-700 hover:text-blue-700 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quote form */}
          <div className="rounded-2xl border bg-white">
            <div className="p-6">
              <div className="text-xl font-semibold">Request a quote</div>
              <div className="text-slate-600">We’ll reply within one business day.</div>
            </div>
            <div className="p-6 pt-0">
              <form
                action="https://formspree.io/f/xkgvnnww"
                method="POST"
                className="grid grid-cols-1 gap-4"
              >
                {/* Identify submission type and redirect */}
                <input type="hidden" name="submissionType" value="quote" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New inquiry from PPBK website"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.ppbkga.com/thanks"
                />

                <label className="text-sm font-medium text-slate-700">
                  Plan (optional)
                </label>
                <select
                  name="plan"
                  className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                >
                  <option value="">Select a plan…</option>
                  {plans.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>

                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="name"
                  placeholder="Full name"
                  required
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="company"
                  placeholder="Company (optional)"
                />
                <textarea
                  className="border rounded-xl p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="message"
                  placeholder="What do you need help with?"
                />

                <button type="submit" className={bubble}>
                  Send <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs text-slate-500">
                  By sending this form you agree to our friendly privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
