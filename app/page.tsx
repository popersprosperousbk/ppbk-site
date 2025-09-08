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
