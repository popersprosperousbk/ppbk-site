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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Larger logo */}
            <img src="/logo.png" alt="PPBK" className="h-20 w-20 rounded-2xl object-cover" />
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

      {/* Metrics, Services, Industries, Pricing, Contact, Testimonials, Footer */}
      {/* ... same as last version (no changes) ... */}
    </div>
  );
}
