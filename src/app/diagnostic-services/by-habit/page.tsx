"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Activity, Shield, Droplet, Zap, Heart, Brain, Wind, FlaskConical, AlertCircle, ArrowRight, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const habits = [
  { id: "alcoholism", key: "nav.diag.habit.alcoholism", icon: <FlaskConical size={24} /> },
  { id: "anger", key: "nav.diag.habit.anger", icon: <Brain size={24} /> },
  { id: "heartburn", key: "nav.diag.habit.heartburn", icon: <Zap size={24} /> },
  { id: "junk-food", key: "nav.diag.habit.junk-food", icon: <Activity size={24} /> },
  { id: "low-iron", key: "nav.diag.habit.low-iron", icon: <Droplet size={24} /> },
  { id: "appetite", key: "nav.diag.habit.appetite", icon: <Activity size={24} /> },
  { id: "nutrition", key: "nav.diag.habit.nutrition", icon: <ClipboardCheck size={24} /> },
  { id: "sleeplessness", key: "nav.diag.habit.sleeplessness", icon: <Brain size={24} /> },
  { id: "smoking", key: "nav.diag.habit.smoking", icon: <Wind size={24} /> },
  { id: "stress", key: "nav.diag.habit.stress", icon: <Heart size={24} /> },
  { id: "tiredness", key: "nav.diag.habit.tiredness", icon: <Zap size={24} /> },
];

function HabitContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const activeCat = searchParams.get("cat");

  return (
    <main className="diagnostic-page bg-neutral-50 min-h-screen pb-20">
      {/* Premium Internal Hero */}
      <section className="hero hero--internal relative overflow-hidden">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        
        <div className="hero__inner">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero__badge"
          >
            <Zap size={14} />
            <span>Lifestyle Based Screening</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            {t("nav.diagnostic.habit")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle"
          >
            Find tests tailored to your lifestyle, habits, and specific health concerns.
            Personalized diagnostics for proactive wellness management.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section">
        <div className="section__inner">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
            {/* Standardized Sidebar Portal */}
            <aside className="hidden lg:block">
              <div className="bg-white rounded-xl border border-neutral-100 shadow-soft p-2 sticky top-28 overflow-hidden">
                <div className="px-6 py-4 border-b border-neutral-100 mb-2">
                  <h3 className="section__title !text-left !text-lg m-0">Select Habit</h3>
                </div>
                <div className="max-h-[60vh] overflow-y-auto px-2 pb-2 custom-scrollbar">
                  <nav className="spec-nav-list">
                    {habits.map((h) => (
                      <Link
                        key={h.id}
                        href={`/diagnostic-services/by-habit/${h.id}`}
                        className="spec-nav-item"
                      >
                        <div className="flex items-center gap-3">
                           {/* Icon with subtle BG */}
                           <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
                             {React.cloneElement(h.icon as React.ReactElement, { size: 14 })}
                           </div>
                           <span>{t(h.key)}</span>
                        </div>
                        <ArrowRight size={14} className="spec-nav-item__arrow" />
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content Portal */}
            <div className="main-content flex flex-col gap-10">
               <div className="section__header">
                  <h2 className="section__title !text-left !text-3xl">Comprehensive Habit Categories</h2>
                  <p className="text-neutral-500 max-w-xl">Browse by specific habits and clinical conditions to find the most relevant diagnostic tests.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                 {habits.map((h, index) => (
                    <motion.div
                      key={h.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index % 12) * 0.03 }}
                    >
                      <Link
                        href={`/diagnostic-services/by-habit/${h.id}`}
                        className="group flex flex-col bg-white p-8 rounded-xl border border-neutral-100 hover:border-[var(--brand-primary)] hover:shadow-xl transition-all duration-300 h-full"
                      >
                        <div className="w-14 h-14 rounded-xl bg-neutral-50 flex items-center justify-center text-[var(--brand-primary)] mb-6 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
                           {h.icon}
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[var(--brand-primary)] transition-colors mb-2">
                           {t(h.key)}
                        </h4>
                        <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors">
                           <span>Explore Tests</span>
                           <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ByHabitPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HabitContent />
    </Suspense>
  );
}
