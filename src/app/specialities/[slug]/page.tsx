
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
  Quote,
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
            {content.subHeadline || content.description.substring(0, 160) + "..."}
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
            style={{ textAlign: "center", marginBottom: "3rem", display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h2
              className="section__title"
              style={{ textAlign: "center", marginBottom: "0.5rem" }}
            >
              {t("page.spec.welcome")} {content.title}
            </h2>
            <div
              style={{
                width: "4rem",
                height: "4px",
                background: "var(--brand-primary)",
                borderRadius: "2px",
                marginBottom: "1rem",
              }}
            ></div>
          </div>

          {/* Description Text - Balanced centering */}
          <div
            className="spec-page-desc"
            style={{
              fontSize: "1.1rem",
              color: "var(--neutral-700)",
              lineHeight: "1.8",
              textAlign: "left",
              marginBottom: "3rem",
              maxWidth: "900px",
              margin: '0 auto',
            }}
          >
            {content.introduction ? (
              <p style={{ marginBottom: "2rem", fontSize: "1.2rem", color: "var(--neutral-900)", fontWeight: 500 }}>
                {content.introduction}
              </p>
            ) : null}

            {content.description.split('\n').map((line, i) => {
              if (line.trim().startsWith('/images/')) {
                return (
                  <div key={i} style={{ margin: '2rem 0', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <img src={line.trim()} alt="Speciality Detail" style={{ width: '100%', display: 'block' }} />
                  </div>
                );
              }
              return (
                <p key={i} style={{ marginBottom: line.trim() === '' ? '0' : '1.5rem' }}>
                  {line}
                </p>
              );
            })}
          </div>

          {content.techIntroduction && (
            <div
              style={{
                background: "var(--neutral-50)",
                borderRadius: "var(--radius)",
                padding: "2.5rem",
                marginBottom: "4rem",
                border: "1px solid var(--border)",
                maxWidth: "900px",
                margin: "0 auto 4rem",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--brand-primary)" }}>
                Technology & Infrastructure
              </h3>
              <p style={{ color: "var(--neutral-600)", lineHeight: "1.7", fontSize: "1.05rem" }}>
                {content.techIntroduction}
              </p>
            </div>
          )}

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
              <h3 className="spec-card__title">Conditions We Treat</h3>
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
                      fontSize: "0.95rem",
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
            </div>

            {/* Expertise Card */}
            <div className="spec-card spec-card--spec-rose">
              <div className="spec-card__icon-wrap">
                <CheckCircle size={24} />
              </div>
              <h3 className="spec-card__title">Our Services & Expertise</h3>
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
                      fontSize: "0.95rem",
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
            </div>
          </div>

          {content.expertTeamMessage && (
             <div
             style={{
               background: "linear-gradient(to right, var(--brand-primary), var(--brand-primary-dark))",
               borderRadius: "var(--radius)",
               padding: "3.5rem 2rem",
               marginBottom: "4rem",
               color: "white",
               textAlign: "center",
             }}
           >
             <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
               Our Expert Team
             </h3>
             <p style={{ fontSize: "1.15rem", opacity: 0.9, marginBottom: "2rem", maxWidth: "750px", margin: "0 auto 2.5rem", lineHeight: "1.6" }}>
               {content.expertTeamMessage}
             </p>
             <Link href="/find-a-doctor" className="btn btn--secondary" style={{ background: "white", color: "var(--brand-primary)", padding: "1rem 2.5rem" }}>
                Meet Our Specialists <ArrowRight size={18} />
             </Link>
           </div>
          )}

          {content.testimonial && (
            <div style={{ marginBottom: "5rem" }}>
              <div className="section__header" style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h3 className="section__title" style={{ fontSize: "1.75rem" }}>Patient Success Story</h3>
              </div>
              <div
                className="relative bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-blue-50 flex flex-col justify-between max-w-4xl mx-auto transition-transform hover:-translate-y-1"
              >
                 <div className="absolute top-10 right-12 text-blue-50/50">
                    <Quote size={80} fill="currentColor" />
                  </div>
                <p style={{ position: 'relative', zIndex: 1, fontSize: "1.25rem", fontStyle: "italic", color: "var(--neutral-700)", lineHeight: "1.8", marginBottom: "2rem" }}>
                  "{content.testimonial.quote}"
                </p>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1.25rem', borderTop: '1px solid var(--neutral-100)', paddingTop: '2rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-primary-dark))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.5rem', flexShrink: 0 }}>
                    <span style={{ margin: 'auto' }}>{content.testimonial.author[0]}</span>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, margin: 0, fontSize: '1.2rem', color: 'var(--neutral-900)' }}>{content.testimonial.author}</h4>
                    {content.testimonial.age && (
                      <p style={{ color: 'var(--brand-primary)', fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>Verified Patient • Age: {content.testimonial.age}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

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
