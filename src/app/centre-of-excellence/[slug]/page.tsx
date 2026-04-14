"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  Baby,
  CheckCircle,
  Heart,
  Microscope,
  PhoneCall,
  Pill,
  Shield,
  Stethoscope,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { COE_CONTENT } from "@/data/coe-content";

const COE_DATA: Record<string, any> = {
  "laparoscopic-general-surgery": {
    icon: Microscope,
    titleKey: "nav.coe.laparoscopic",
    color: "spec-blue",
    image: "/images/coe/laparoscopic.png",
  },
  maternity: {
    icon: Baby, 
    titleKey: "nav.coe.maternity", 
    color: "spec-rose",
    image: "/images/coe/maternity.png",
  },
  "pediatrics-neonatology": {
    icon: Heart,
    titleKey: "nav.coe.pediatrics",
    color: "spec-purple",
    image: "/images/coe/pediatrics.png",
  },
  "interventional-radiology": {
    icon: Activity,
    titleKey: "nav.coe.interventional",
    color: "spec-teal",
  },
  "internal-medicine": {
    icon: Stethoscope,
    titleKey: "nav.spec.medicine",
    color: "spec-blue",
  },
  gastroenterology: {
    icon: Activity,
    titleKey: "nav.spec.gastro",
    color: "spec-orange",
    image: "/images/coe/gastroenterology.png",
  },
  nephrology: {
    icon: Shield,
    titleKey: "nav.coe.nephrology",
    color: "spec-teal",
  },
  "urology-andrology": {
    icon: Pill,
    titleKey: "nav.coe.urology",
    color: "spec-blue",
    image: "/images/coe/urology.png",
  },
};

export default function COEPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const data = COE_DATA[slug as string];

  if (!data) {
    return (
      <div className="section flex min-h-[60vh] items-center justify-center">
        <div className="section__inner text-center">
          <h1 className="section__title">{t("page.error.title")}</h1>
          <p className="section__subtitle mt-4 mb-8">
            {t("page.coe.notfound")}
          </p>
          <Link href="/" className="btn btn--primary mx-auto">
            <ArrowLeft size={16} className="mr-2" /> {t("page.back_home")}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;
  const cardColorClass = `spec-card--${data.color}`;

  return (
    <main className="coe-page min-h-screen bg-neutral-50">
      {/* ========== HERO SECTION ========== */}
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero__content"
          >
            <div className="hero__badge">
              <Activity size={14} />
              <span>{t("page.coe.badge")}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero__title"
            >
              {t(data.titleKey)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero__subtitle"
            >
              Specialized medical excellence driven by cutting-edge technology
              and compassionate clinical experts at Karuna Hospital.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========== CONTENT SECTION ========== */}
      <section className="section">
        <div className="section__inner">
          <div className="section__header">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-[var(--brand-primary)]"></div>
              <span className="text-sm font-semibold tracking-wider text-[var(--brand-primary)] uppercase">
                Overview
              </span>
            </div>
            <h2 className="section__title">
              {t("page.coe.welcome")} {t(data.titleKey)}
            </h2>
            <p className="section__subtitle">{t("page.coe.desc")}</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* LEFT: Text Content */}
            <div className="space-y-8">
              {COE_CONTENT[slug as string] ? (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                  {COE_CONTENT[slug as string]}
                </div>
              ) : (
                /* Feature Cards Grid */
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Expert Card */}
                  <div className={`spec-card ${cardColorClass}`}>
                    <div className="spec-card__icon-wrap">
                      <Shield size={24} />
                    </div>
                    <h3 className="spec-card__title">{t("page.coe.expert")}</h3>
                    <p className="spec-card__desc">{t("page.coe.expert.desc")}</p>
                  </div>

                  {/* Advanced Tech Card */}
                  <div className={`spec-card ${cardColorClass}`}>
                    <div className="spec-card__icon-wrap">
                      <CheckCircle size={24} />
                    </div>
                    <h3 className="spec-card__title">{t("page.coe.advanced")}</h3>
                    <p className="spec-card__desc">
                      {t("page.coe.advanced.desc")}
                    </p>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/contact" className="btn btn--primary">
                  <PhoneCall size={18} className="mr-2" />
                  Contact This Department
                </Link>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg lg:aspect-auto lg:h-[500px]">
                <img
                  src={data.image || "/images/lab.png"}
                  alt={t(data.titleKey)}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating Quote Card */}
                <div className="absolute right-6 bottom-6 left-6">
                  <div className="hero__card hero__card--main">
                    <div className="hero__card-icon">
                      <Icon size={28} />
                    </div>
                    <div>
                      <span className="hero__card-num">{t(data.titleKey)}</span>
                      <span className="hero__card-label">
                        Center of Excellence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA SECTION ========== */}
      <section
        className="section"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="section__inner">
          <div className="cta-section">
            <div className="cta-section__bg" aria-hidden="true"></div>
            <div className="cta-section__inner">
              <h3 className="cta-section__title">{t("page.cta.healing")}</h3>
              <p className="cta-section__subtitle">
                {t("page.cta.healing.desc")}
              </p>
              <Link href="/contact" className="cta-section__btn">
                <PhoneCall size={20} /> {t("nav.bookAppointment")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
