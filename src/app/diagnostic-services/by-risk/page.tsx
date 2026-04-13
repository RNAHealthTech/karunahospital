"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Activity, Shield, Droplet, Zap, Heart, Brain, Wind, FlaskConical, AlertCircle, Eye, Bug, Waves, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const risks = [
  { id: "acidity", key: "nav.diag.risk.acidity", icon: <Zap size={24} /> },
  { id: "allergy", key: "nav.diag.risk.allergy", icon: <Wind size={24} /> },
  { id: "anaemia", key: "nav.diag.risk.anaemia", icon: <Droplet size={24} /> },
  { id: "arthritis", key: "nav.diag.risk.arthritis", icon: <Activity size={24} /> },
  { id: "cancer", key: "nav.diag.risk.cancer", icon: <Shield size={24} /> },
  { id: "diabetes", key: "nav.diag.risk.diabetes", icon: <Droplet size={24} /> },
  { id: "digestion", key: "nav.diag.risk.digestion", icon: <Activity size={24} /> },
  { id: "fever", key: "nav.diag.risk.fever", icon: <Zap size={24} /> },
  { id: "heart", key: "nav.diag.risk.heart", icon: <Heart size={24} /> },
  { id: "hepatitis", key: "nav.diag.risk.hepatitis", icon: <FlaskConical size={24} /> },
  { id: "hormones", key: "nav.diag.risk.hormones", icon: <FlaskConical size={24} /> },
  { id: "hypertension", key: "nav.diag.risk.hypertension", icon: <Heart size={24} /> },
  { id: "immunity", key: "nav.diag.risk.immunity", icon: <Shield size={24} /> },
  { id: "infection", key: "nav.diag.risk.infection", icon: <Shield size={24} /> },
  { id: "jaundice", key: "nav.diag.risk.jaundice", icon: <FlaskConical size={24} /> },
  { id: "joints", key: "nav.diag.risk.joints", icon: <Activity size={24} /> },
  { id: "kidney", key: "nav.diag.risk.kidney", icon: <Droplet size={24} /> },
  { id: "liver", key: "nav.diag.risk.liver", icon: <FlaskConical size={24} /> },
  { id: "obesity", key: "nav.diag.risk.obesity", icon: <Activity size={24} /> },
  { id: "pregnancy", key: "nav.diag.risk.pregnancy", icon: <FlaskConical size={24} /> },
  { id: "std", key: "nav.diag.risk.std", icon: <Bug size={24} /> },
  { id: "thyroid", key: "nav.diag.risk.thyroid", icon: <Droplet size={24} /> },
  { id: "inflammation", key: "nav.diag.risk.inflammation", icon: <Waves size={24} /> },
  { id: "vitamins", key: "nav.diag.risk.vitamins", icon: <Activity size={24} /> },
];

function RiskContent() {
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
            <Shield size={14} />
            <span>Risk-Based Screening</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            {t("nav.diagnostic.risk")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle"
          >
            Proactive health screening based on specific medical risks and conditions.
            Modern diagnostics for better disease prevention and management.
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
                  <h3 className="section__title !text-left !text-lg m-0">Select Medical Risk</h3>
                </div>
                <div className="max-h-[60vh] overflow-y-auto px-2 pb-2 custom-scrollbar">
                  <nav className="spec-nav-list">
                    {risks.map((r) => (
                      <Link
                        key={r.id}
                        href={`/diagnostic-services/by-risk/${r.id}`}
                        className="spec-nav-item"
                      >
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
                             {React.cloneElement(r.icon as React.ReactElement, { size: 14 })}
                           </div>
                           <span>{t(r.key)}</span>
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
                  <h2 className="section__title !text-left !text-3xl">Comprehensive Risk Categories</h2>
                  <p className="text-neutral-500 max-w-xl">Browse by specific medical risks and conditions to find the most relevant diagnostic tests.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                 {risks.map((r, index) => (
                    <motion.div
                      key={r.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index % 12) * 0.03 }}
                    >
                      <Link
                        href={`/diagnostic-services/by-risk/${r.id}`}
                        className="group flex flex-col bg-white p-8 rounded-xl border border-neutral-100 hover:border-[var(--brand-primary)] hover:shadow-xl transition-all duration-300 h-full"
                      >
                        <div className="w-14 h-14 rounded-xl bg-neutral-50 flex items-center justify-center text-[var(--brand-primary)] mb-6 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
                           {r.icon}
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[var(--brand-primary)] transition-colors mb-2">
                           {t(r.key)}
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

export default function ByRiskPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RiskContent />
    </Suspense>
  );
}
