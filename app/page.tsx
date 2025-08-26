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

// (rest of arrays unchanged)

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* enlarged logo */}
            <img src="/logo.png" alt="PPBK" className="h-12 w-12 rounded-2xl object-cover" />
            <div className="leading-tight">
              {/* slightly larger company name */}
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
      {/* ... keep rest identical as previous version ... */}
