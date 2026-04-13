
// New Code

"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Shield,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { specialitiesData } from "@/data/specialities-data";

// New Code

export default function SpecialityPage() {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const spec = specialitiesData[slug as string];

  if (!spec) {
    notFound();
  }

  const content = spec[language];

  return (
    <main
      className="spec-detail-page"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ========== HERO (uses your exact hero--internal class) ========== */}
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__inner">
          <Link
            href="/specialities"
            className="mb-6 flex items-center gap-2 text-white/70 transition-opacity hover:text-white"
            style={{ textDecoration: "none" }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <ArrowLeft size={14} color="white" />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">
              {t("page.spec.list.back")}
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero__badge"
          >
            <Shield size={14} />
            <span>{t("page.spec.badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      {/* ========== MAIN CONTENT (uses your section classes) ========== */}
      <section className="section">
        <div className="section__inner">
          {/* Cover Image - Simple, working approach */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              height: "400px",
              marginBottom: "3rem",
              border: `1px solid var(--border)`,
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          >
            <img
              src={spec.image}
              alt={content.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem",
                background:
                  "linear-gradient(to top, rgba(15,23,42,0.9), transparent)",
              }}
            >
              <h2
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                {content.title}
              </h2>
            </div>
          </div>

          {/* Section Header */}
          <div
            className="section__header"
            style={{ textAlign: "left", marginBottom: "2.5rem" }}
          >
            <h2
              className="section__title"
              style={{ textAlign: "left", marginBottom: "0.5rem" }}
            >
              {t("page.spec.welcome")} {content.title}
            </h2>
            <div
              style={{
                width: "4rem",
                height: "3px",
                background: "var(--brand-primary)",
                borderRadius: "2px",
                marginBottom: "1rem",
              }}
            ></div>
          </div>

          {/* Description Text - Fixed alignment */}
          <p
            style={{
              fontSize: "1rem",
              color: "var(--neutral-600)",
              lineHeight: "1.7",
              textAlign: "left",
              marginBottom: "3rem",
              maxWidth: "700px",
            }}
          >
            {t("page.spec.desc")}
          </p>

          {/* ========== CARDS (using your EXACT .spec-card classes) ========== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            {/* Treatments Card */}
            <div className="spec-card spec-card--spec-blue">
              <div className="spec-card__icon-wrap">
                <Shield size={24} />
              </div>
              <h3 className="spec-card__title">{t("page.spec.treatments")}</h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  flex: 1,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {content.treatments.map((treatment: string, i: number) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      color: "var(--neutral-600)",
                    }}
                  >
                    <CheckCircle
                      size={14}
                      style={{
                        color: "var(--brand-primary)",
                        marginTop: "3px",
                        flexShrink: 0,
                      }}
                    />
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="spec-card__link">
                {t("Contact Us")} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Expertise Card */}
            <div className="spec-card spec-card--spec-rose">
              <div className="spec-card__icon-wrap">
                <CheckCircle size={24} />
              </div>
              <h3 className="spec-card__title">{t("page.spec.expert")}</h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  flex: 1,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {content.expertise.map((item: string, i: number) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      color: "var(--neutral-600)",
                    }}
                  >
                    <CheckCircle
                      size={14}
                      style={{
                        color: "var(--brand-accent)",
                        marginTop: "3px",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* <Link href="/doctors" className="spec-card__link">
                {t("Doctors")} <ArrowRight size={14} />
              </Link> */}
            </div>
          </div>

          {/* ========== CTA (using your exact cta-section class) ========== */}
          <div className="cta-section">
            <div className="cta-section__bg" aria-hidden="true"></div>
            <div className="cta-section__inner">
              <h3 className="cta-section__title">{t("page.cta.consult")}</h3>
              <p className="cta-section__subtitle">
                {t("page.cta.consult.desc")}
              </p>
              <Link href="/contact" className="cta-section__btn">
                {t("nav.bookAppointment")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SIDEBAR (simple, working version) ========== */}
      <section
        className="section"
        style={{ background: "var(--neutral-50)", paddingTop: "2rem" }}
      >
        <div className="section__inner">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {/* Specialities List */}
            <div
              style={{
                background: "var(--card)",
                borderRadius: "var(--radius)",
                padding: "1.5rem",
                border: `1px solid var(--border)`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "var(--neutral-900)",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `2px solid var(--brand-primary-light)`,
                }}
              >
                {t("page.spec.list.title")}
              </h3>
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {Object.values(specialitiesData).map((s: any) => (
                  <Link
                    key={s.id}
                    href={`/specialities/${s.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem 1rem",
                      fontSize: "0.9rem",
                      color:
                        s.id === slug
                          ? "var(--brand-primary)"
                          : "var(--neutral-600)",
                      background:
                        s.id === slug
                          ? "var(--brand-primary-light)"
                          : "transparent",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    <span style={{ fontWeight: s.id === slug ? 700 : 500 }}>
                      {s[language].title}
                    </span>
                    <ArrowRight
                      size={14}
                      style={{ opacity: s.id === slug ? 1 : 0.6 }}
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact CTA */}
            <div
              style={{
                background: "var(--brand-primary-dark)",
                borderRadius: "var(--radius)",
                padding: "1.5rem",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                  opacity: 0.9,
                }}
              >
                <Clock size={14} />
                <span>24/7 Available</span>
              </div>
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {t("page.cta.consult")}
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Expert medical team committed to diagnosing and treating your
                related conditions with care.
              </p>

              <a
                href="tel:011-22112211"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "white",
                  textDecoration: "none",
                  marginBottom: "1.5rem",
                  fontWeight: 600,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone size={18} />
                </div>
                <span>011-22112211</span>
              </a>

              <Link
                href="/contact"
                className="btn-primary"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {t("nav.bookAppointment")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
