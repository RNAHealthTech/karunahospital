
"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FlaskConical,
  Phone,
  Shield,
  Stethoscope
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { diagnosticData } from "@/data/diagnostic-data";

export default function RiskDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = diagnosticData[slug as keyof typeof diagnosticData];
  const { language, t } = useLanguage();

  if (!data) {
    notFound();
  }

  const content = data[language as "en" | "hi"];
  const pageImage =
    content.image ||
    "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200";

  return (
    <main className="diagnostic-detail-page spec-detail-page min-h-screen bg-neutral-50">
      {/* ========== PREMIUM HERO (Aligned with Global CSS) ========== */}
      <section className="hero hero--internal relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={pageImage}
            alt={content.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary-dark)]/90 via-[var(--brand-primary)]/70 to-transparent" />
        </div>

        {/* Decorative Orbs */}
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__inner relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero__badge mb-4"
          >
            <Shield size={14} />
            <span>
              {language === "en" ? "Risk Assessment" : "जोखिम मूल्यांकन"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title text-left"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle text-left"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/diagnostic-services/by-risk"
              className="btn btn--outline inline-flex items-center gap-2"
            >
              <ArrowRight size={16} className="rotate-180" />
              {language === "en" ? "Back to Risks" : "जोखिमों पर वापस जाएं"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="section bg-white">
        <div className="section__inner">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left Column: Clinical Info */}
            <div className="flex flex-col gap-10">
              {/* Clinical Importance Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="spec-card spec-card--spec-blue"
              >
                <div className="spec-card__icon-wrap mb-4">
                  <Activity size={24} />
                </div>
                <h2 className="spec-card__title">
                  {language === "en" ? "Clinical Importance" : "नैदानिक महत्व"}
                </h2>
                <p className="spec-card__desc">{content.importance}</p>
                <div className="mt-4 border-t border-neutral-200 pt-4">
                  <span className="text-brand-primary inline-flex items-center gap-2 text-sm font-semibold">
                    <Stethoscope size={16} />
                    {language === "en"
                      ? "Expert Reviewed"
                      : "विशेषज्ञ द्वारा समीक्षित"}
                  </span>
                </div>
              </motion.div>

              {/* Symptoms Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="spec-card spec-card--spec-rose"
              >
                <div className="spec-card__icon-wrap mb-4">
                  <AlertCircle size={24} />
                </div>
                <h2 className="spec-card__title">
                  {language === "en"
                    ? "Common Symptoms & Indicators"
                    : "सामान्य लक्षण और संकेत"}
                </h2>
                <ul className="mt-2 space-y-3">
                  {content.symptoms.map((symptom: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brand-accent mt-0.5 flex-shrink-0"
                      />
                      <span className="text-neutral-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="sticky top-24 flex flex-col gap-6">
              {/* Protocol & Tests Card */}
              <div className="spec-card spec-card--spec-teal">
                <div className="spec-card__icon-wrap mb-4">
                  <FlaskConical size={24} />
                </div>
                <h3 className="spec-card__title">
                  {language === "en"
                    ? "Recommended Protocol"
                    : "अनुशंसित प्रोटोकॉल"}
                </h3>

                <div className="mt-4">
                  <h4 className="mb-3 text-sm font-semibold text-neutral-600">
                    {language === "en" ? "Recommended Tests" : "अनुशंसित टेस्ट"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {content.recommendedTests.map((test: string, i: number) => (
                      <span
                        key={i}
                        className="hover:border-brand-primary rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors"
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn btn--primary mt-6 w-full justify-center"
                >
                  {language === "en"
                    ? "Book Screening Now"
                    : "अभी स्क्रीनिंग बुक करें"}
                </Link>
              </div>

              {/* Support Card - Using Global Gradient */}
              <div
                className="spec-card"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-primary-dark), var(--brand-primary))",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-white/70 uppercase">
                      {language === "en" ? "24/7 Support" : "24/7 सहायता"}
                    </span>
                    <span className="block text-lg font-bold">
                      +91 9873754555
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-white/70 uppercase">
                      {language === "en" ? "Report TAT" : "रिपोर्ट समय"}
                    </span>
                    <span className="block text-lg font-bold">
                      12 - 24 Hours
                    </span>
                  </div>
                </div>

                {/* <Link
                  href="tel:+919873754555"
                  className="btn btn--outline mt-4 w-full justify-center"
                  style={{
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    background: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Phone size={16} className="mr-2" />
                  {language === "en" ? "Call Now" : "अभी कॉल करें"}
                </Link> */}
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h4 className="mb-4 flex items-center gap-2 font-semibold text-neutral-800">
                  <CheckCircle2 size={18} className="text-brand-primary" />
                  {language === "en"
                    ? "Why Trust Us?"
                    : "हम पर भरोसा क्यों करें?"}
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    {
                      icon: CheckCircle2,
                      text:
                        language === "en"
                          ? "NABL Accredited Labs"
                          : "NABL मान्यता प्राप्त लैब",
                    },
                    {
                      icon: CheckCircle2,
                      text:
                        language === "en" ? "99.9% Accuracy" : "99.9% सटीकता",
                    },
                    {
                      icon: CheckCircle2,
                      text:
                        language === "en"
                          ? "Home Sample Collection"
                          : "घर पर सैंपल संग्रह",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-neutral-600"
                    >
                      <item.icon
                        size={16}
                        className="text-brand-primary mt-0.5 flex-shrink-0"
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== ASSOCIATED PACKAGES ========== */}
      {data.associatedPackages && data.associatedPackages.length > 0 && (
        <section className="section border-t border-neutral-200 bg-neutral-50">
          <div className="section__inner">
            <div className="section__header mb-12 text-left">
              <h2 className="section__title">
                {t("diag.detail.availablePackages")}
              </h2>
              <p className="section__subtitle">
                {language === "en"
                  ? "Curated health packages specifically designed for risk assessments."
                  : "जोखिम मूल्यांकन के लिए विशेष रूप से डिज़ाइन किए गए स्वास्थ्य पैकेज।"}
              </p>
            </div>

            <div className="spec-grid">
              {data.associatedPackages.map((pkg: any, i: number) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="spec-card spec-card--spec-blue group relative"
                >
                  {/* Discount Badge */}
                  <div className="bg-brand-accent absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold text-white">
                    {pkg.discount} {t("diag.detail.off")}
                  </div>

                  <div className="spec-card__icon-wrap mb-4">
                    <Activity size={20} />
                  </div>

                  <h3 className="spec-card__title group-hover:text-brand-primary pt-2 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="my-3 flex items-baseline gap-2">
                    <span className="text-brand-primary text-2xl font-extrabold">
                      ₹{pkg.price}
                    </span>
                    <span className="text-sm text-neutral-400 line-through">
                      ₹{pkg.oldPrice}
                    </span>
                  </div>

                  <p className="spec-card__desc">{pkg.description}</p>

                  <Link
                    href="/diagnostic-services/packages"
                    className="spec-card__link mt-auto"
                  >
                    {language === "en" ? "View Details" : "विवरण देखें"}
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="section__footer mt-10">
              <Link
                href="/diagnostic-services/packages"
                className="btn btn--secondary inline-flex items-center gap-2"
              >
                {t("diag.detail.viewPackage")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== GLOBAL CSS FIXES ========== */}
      <style jsx global>{`
        /* 🔤 Text Alignment Fixes */
        .spec-detail-page .hero__title,
        .spec-detail-page .hero__subtitle,
        .spec-detail-page .section__title,
        .spec-detail-page .section__subtitle,
        .spec-detail-page .spec-card__title,
        .spec-detail-page .spec-card__desc {
          text-align: left !important;
        }

        /* 🖼️ Image Display Fixes */
        .spec-detail-page img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: var(--radius);
          object-fit: cover;
        }

        /* 🎴 Card Box Consistency */
        .spec-detail-page .spec-card {
          min-height: auto;
          display: flex;
          flex-direction: column;
        }
        .spec-detail-page .spec-card__desc,
        .spec-detail-page .spec-card ul {
          flex: 1;
        }

        /* 🎨 Color Variable Fallbacks */
        .text-brand-primary {
          color: var(--brand-primary) !important;
        }
        .bg-brand-primary-light {
          background: var(--brand-primary-light) !important;
        }
        .text-brand-accent {
          color: var(--brand-accent) !important;
        }

        /* ✨ Smooth Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .spec-detail-page .spec-card {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
