"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check, Calculator, LineChart, ShieldCheck, Clock, Mail, Phone,
  Banknote, Building2, FileSpreadsheet, ArrowRight, Facebook, Linkedin, Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

// ---- Contact constants ----
const CONTACT_EMAIL = "popersprosperousbk@gmail.com";
const CONTACT_PHONE_DISPLAY = "(678) 677-7210";
const CONTACT_PHONE_TEL = "+16786777210"; // tel: link format

// ---- Review links (replace with your real ones) ----
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";
const FACEBOOK_REVIEW_URL = "https://www.facebook.com/YOUR_PAGE/reviews";

// Reusable royal-blue bubble class
const bubble =
  "inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-blue-700 text-white font-medium shadow hover:bg-blue-800 transition";

const features = [
  { icon: Calculator, title: "Full-Cycle Bookkeeping", desc: "Monthly close, AR/AP, reconciliations, financial statements, and tidy books you can trust." },
  { icon: LineChart, title: "CFO-Level Insights", desc: "Dashboards, KPIs, cash-flow, and budget vs. actuals so you can make sharp decisions fast." },
  { icon: ShieldCheck, title: "Cleanups & Catch-ups", desc: "Behind on months (or years)? We’ll repair chart of accounts and prepare audit-ready reports." },
  { icon: Clock, title: "Stress-Free Payroll", desc: "Accurate, on-time payroll with filings handled and year-end forms delivered." },
];

const industries = [
  { name: "Gyms & Fitness", icon: Building2 },
  { name: "E-commerce", icon: Banknote },
  { name: "Contractors", icon: Building2 },
  { name: "Professional Services", icon: FileSpreadsheet },
];

const plans = [
  { name: "Starter", price: "$399/mo", tagline: "Solo founders & side hustles", bullets: ["Up to 75 txns/mo", "Monthly P&L & Balance Sheet", "1 bank + 1 credit account", "Email support"] },
  { name: "Growth", price: "$799/mo", tagline: "Growing teams & multi-accounts", bullets: ["Up to 300 txns/mo", "Weekly reconciliations", "Up to 4 accounts", "Quarterly review call"], featured: true },
  { name: "CFO Suite", price: "Custom", tagline: "Advanced reporting & advisory", bullets: ["Unlimited txns", "Cash-flow & KPI dashboard", "Budgeting & forecasting", "Monthly strategy call"] },
  { name: "One Time Charge", price: "From $999", tagline: "Cleanup / Reconciliation", bullets: ["Historical cleanup", "Bank & credit reconciliations", "Chart of accounts repair", "Tax-ready financials"] },
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
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-0">
          {/* GIANT LOGO */}
          <img
            src="/logo.png"
            alt="PPBK Logo"
            className="h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56 rounded-2xl object-cover"
          />
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-4 text-[0.9rem]">
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#industries" className="hover:text-slate-700">Industries</a>
            <a href="#metrics" className="hover:text-slate-700">Results</a>
            <a href="#pricing" className="hover:text-slate-700">Pricing</a>
            <a href="#reviews" className="hover:text-slate-700">Reviews</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </nav>
          {/* CTA */}
          <a href="#contact" className={bubble}>
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                <span className="text-blue-700">Prosperous</span> books.{" "}
                <span className="text-slate-900">Confident</span> decisions.
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl">
                PPBK delivers precise bookkeeping, clean financials, and advisory that helps small businesses grow with clarity.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#contact" className={bubble}>Contact Now <ArrowRight className="h-4 w-4" /></a>
                <a href="#pricing" className={bubble}>View Pricing <ArrowRight className="h-4 w-4" /></a>
              </div>
              <div className="mt-6 text-sm text-blue-700 font-medium">QuickBooks</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Results you can expect (approximate)</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><h3 className="text-3xl font-extrabold text-blue-700">10+ hrs</h3><p>Weekly time saved</p></div>
            <div><h3 className="text-3xl font-extrabold text-blue-700">3× ROI</h3><p>Average return on fees</p></div>
            <div><h3 className="text-3xl font-extrabold text-blue-700">100%</h3><p>Monthly reconciliations</p></div>
            <div><h3 className="text-3xl font-extrabold text-blue-700">$5k+</h3><p>Annual savings on errors</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Services</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="rounded-2xl hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center"><f.icon className="h-5 w-5" /></div>
                  <CardTitle className="mt-3 text-lg">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Who we serve</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((it, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 flex items-center gap-3">
                <it.icon className="h-5 w-5 text-blue-700" />
                <span className="font-medium">{it.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Simple pricing</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Card key={i} className={`rounded-2xl ${p.featured ? "border-blue-700 shadow" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{p.name}</span>
                    <span className="text-2xl font-extrabold text-blue-700">{p.price}</span>
                  </CardTitle>
                  <CardDescription>{p.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 text-blue-700" /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" onClick={() => onChoosePlan(p.name)} className={`${bubble} w-full justify-center mt-6`}>
                    Choose {p.name}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Let’s tidy your books</h2>
            <div className="mt-6 space-y-3 text-slate-700">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:underline"><Mail className="h-5 w-5 text-blue-700" />{CONTACT_EMAIL}</a>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-center gap-3 hover:underline"><Phone className="h-5 w-5 text-blue-700" />{CONTACT_PHONE_DISPLAY}</a>
            </div>
            <div className="mt-6 flex gap-3 text-slate-500">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border hover:border-blue-700 hover:text-blue-700 transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border hover:border-blue-700 hover:text-blue-700 transition"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Request a quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/xkgvnnww" method="POST" className="grid grid-cols-1 gap-4">
                <select name="plan" className="border rounded-xl p-3" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                  <option value="">Select a plan…</option>
                  {plans.map((p) => (<option key={p.name} value={p.name}>{p.name}</option>))}
                </select>
                <input className="border rounded-xl p-3" name="name" placeholder="Full name" required />
                <input className="border rounded-xl p-3" name="email" placeholder="Email" type="email" required />
                <textarea className="border rounded-xl p-3 min-h-[120px]" name="message" placeholder="What do you need help with?" />
                <input type="hidden" name="_subject" value="New inquiry from PPBK website" />
                <input type="hidden" name="_next" value="https://www.ppbkga.com/thanks" />
                <button type="submit" className={bubble}>Send <ArrowRight className="h-4 w-4" /></button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Poper&apos;s Prosperous Bookkeeping</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-blue-700">Privacy</a>
            <a href="/terms" className="hover:text-blue-700">Terms</a>
            <a href="/legal" className="hover:text-blue-700">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
