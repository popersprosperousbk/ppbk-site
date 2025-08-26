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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Larger logo */}
            <img src="/logo.png" alt="PPBK" className="h-16 w-16 rounded-2xl object-cover" />
            <div className="leading-tight">
              {/* Company name stays slightly smaller than hero */}
              <div className="text-xl font-semibold">Poper&apos;s Prosperous Bookkeeping</div>
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
      {/* ... rest of the file stays exactly as in the last working version ... */}
    </div>
  );
}
