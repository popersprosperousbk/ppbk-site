"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check, Calculator, LineChart, ShieldCheck, Clock, Mail, Phone,
  Banknote, Building2, FileSpreadsheet, ArrowRight, Facebook, Linkedin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";

// ---- Contact constants ----
const CONTACT_EMAIL = "popersprosperousbk@gmail.com";
const CONTACT_PHONE_DISPLAY = "(678) 677-7210";
const CONTACT_PHONE_TEL = "+16786777210"; // tel: link format

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
];

const testimonials = [
  { quote: "PPBK transformed our books and gave us real-time visibility. Closing took hours instead of days.", author: "Jamie L.", role: "Owner, Strength Lab Gym" },
  { quote: "Their cleanup saved our tax season. The dashboards make decisions obvious.", author: "Ari M.", role: "CEO, Midtown Digital" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Responsive larger logo */}
            <img
              src="/logo.png"
              alt="PPBK"
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-2xl object-cover"
            />
            <div className="leading-tight">
              {/* Responsive company name */}
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Poper&apos;s Prosperous Bookkeeping
              </div>
              <div className="text-sm text-slate-500">PPBK</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#industries" className="hover:text-slate-600">Industries</a>
            <a href="#metrics" className="hover:text-slate-600">Results</a>
            <a href="#pricing" className="hover:text-slate-600">Pricing</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <Button className="rounded-2xl" asChild>
            <a href="#contact" className="flex items-center gap-2">Get a Quote <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-brand">Prosperous</span> books. <span className="text-brandblack">Confident</span> decisions.
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl">
                PPBK delivers precise bookkeeping, clean financials, and advisory that helps small businesses grow with clarity.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white font-medium shadow hover:bg-slate-800 transition"
                >
                  Contact Now <ArrowRight className="h-4 w-4" />
                </a>
                <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
              <div className="mt-6 text-sm text-slate-500">QuickBooks</div>
            </div>

            {/* Info card */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <div className="rounded-3xl border bg-white shadow-sm p-6">
                <p className="font-medium text-slate-700">Your books, audit-ready.</p>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                  <li>Monthly close and reconciliations handled for you</li>
                  <li>Clean chart of accounts and clear reporting</li>
                  <li>Seamless tools: QuickBooks</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brandblack">Results you can expect (approximate)</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Illustrative outcomes based on typical client engagements.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><h3 className="text-3xl font-bold text-brand">10+ hrs</h3><p>Weekly time saved</p></div>
            <div><h3 className="text-3xl font-bold text-brand">3× ROI</h3><p>Average return on fees</p></div>
            <div><h3 className="text-3xl font-bold text-brand">100%</h3><p>Monthly reconciliations</p></div>
            <div><h3 className="text-3xl font-bold text-brand">$5k+</h3><p>Annual savings on errors</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brandblack">Services</h2>
          <p className="text-slate-600 mt-2">Everything you need from day-to-day bookkeeping to strategic finance guidance.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="rounded-2xl hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center">
                    <f.icon className="h-5 w-5" />
                  </div>
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
          <h2 className="text-3xl font-bold text-brandblack">Who we serve</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((it, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 flex items-center gap-3">
                <it.icon className="h-5 w-5" />
                <span className="font-medium">{it.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brandblack">Simple pricing</h2>
          <p className="text-slate-600 mt-2">Transparent monthly plans. Cancel anytime.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Card key={i} className={`rounded-2xl ${p.featured ? "border-slate-900 shadow-lg" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{p.name}</span>
                    <span className="text-2xl font-extrabold">{p.price}</span>
                  </CardTitle>
                  <CardDescription>{p.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm"><Check className="h-4 w-4 mt-0.5" /> {b}</li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 rounded-2xl" variant={p.featured ? "default" : "outline"}>Choose {p.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + CONTACT */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-brandblack">Let’s tidy your books</h2>
            <p className="text-slate-600 mt-2 max-w-xl">Tell us about your business and we’ll propose the right plan within 24 hours.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:underline">
                <Mail className="h-5 w-5" />
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-center gap-3 hover:underline">
                <Phone className="h-5 w-5" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-6 flex gap-3 text-slate-500">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Request a quote</CardTitle>
              <CardDescription>We’ll reply within one business day.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/xkgvnnww"
                method="POST"
                className="grid grid-cols-1 gap-4"
              >
                <input className="border rounded-xl p-3" name="name" placeholder="Full name" required />
                <input className="border rounded-xl p-3" name="email" placeholder="Email" type="email" required />
                <input className="border rounded-xl p-3" name="company" placeholder="Company (optional)" />
                <textarea className="border rounded-xl p-3 min-h-[120px]" name="message" placeholder="What do you need help with?" />
                <input type="hidden" name="_subject" value="New inquiry from PPBK website" />
                <input type="hidden" name="_next" value="https://www.ppbkga.com/thanks" />
                <Button className="rounded-2xl" type="submit">Send</Button>
                <p className="text-xs text-slate-500">By sending this form you agree to our friendly privacy policy.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brandblack">What clients say</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6">
                  <p className="text-lg">“{t.quote}”</p>
                  <p className="mt-4 text-sm text-slate-600">— {t.author}, {t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Poper&apos;s Prosperous Bookkeeping, LLC</div>
          <div className="flex gap-6">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
