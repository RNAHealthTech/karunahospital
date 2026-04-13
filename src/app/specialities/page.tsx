"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronRight, Stethoscope } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { specialitiesData } from "@/data/specialities-data";

export default function SpecialitiesPage() {
  const { language, t } = useLanguage();
  const specialities = Object.values(specialitiesData);

  return (
    <main className="specialities-page">
      {/* Hero Section */}

       <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        <div className="hero__inner">
         
          <h1 className="hero__title">
            {t("page.spec.list.title")}
          </h1>
          <p className="hero__subtitle">
             {t("page.spec.list.subtitle")}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section bg-white py-12 sm:py-16 lg:py-20">
        <div className="section__inner max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {specialities.map((spec, index) => {
              const Icon = spec.icon;
              const content = spec[language];
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  key={spec.id}
                  className="h-full"
                >
                  <Link
                    href={`/specialities/${spec.id}`}
                    className={`spec-card spec-card--spec-${spec.color} group block h-full rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-md`}
                  >
                    <div
                      className="spec-card__icon-wrap mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-50 transition-all duration-300 group-hover:bg-[var(--brand-primary)] group-hover:text-white"
                      aria-hidden="true"
                    >
                      <Icon size={28} />
                    </div>
                    <h3 className="spec-card__title mb-4 text-xl font-semibold transition-colors group-hover:text-[var(--brand-primary)]">
                      {content.title}
                    </h3>
                    <p className="spec-card__desc mb-6 line-clamp-3 leading-relaxed text-gray-600">
                      {content.description}
                    </p>
                    <div className="spec-card__link mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-primary)]">
                      <span>{t("page.spec.list.viewDetail")}</span>
                      <ChevronRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}
