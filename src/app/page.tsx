
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  Baby,
  Bone,
  Clock,
  Heart,
  Microscope,
  PhoneCall,
  Pill,
  Shield,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const specialities = [
  {
    icon: Stethoscope,
    titleKey: "nav.spec.medicine",
    descKey: "spec.medicine.desc",
    color: "spec-blue",
  },
  {
    icon: Baby,
    titleKey: "nav.spec.obst",
    descKey: "spec.obst.desc",
    color: "spec-rose",
  },
  {
    icon: Activity,
    titleKey: "nav.spec.endo",
    descKey: "spec.endo.desc",
    color: "spec-green",
  },
  {
    icon: Shield,
    titleKey: "nav.spec.infectious",
    descKey: "spec.infectious.desc",
    color: "spec-orange",
  },
  {
    icon: Pill,
    titleKey: "nav.spec.surgery",
    descKey: "spec.surgery.desc",
    color: "spec-purple",
  },
  {
    icon: Bone,
    titleKey: "nav.spec.ortho",
    descKey: "spec.ortho.desc",
    color: "spec-teal",
  },
];

const stats = [
  { value: "13+", key: "stats.years", icon: Award },
  { value: "50+", key: "stats.doctors", icon: Users },
  { value: "1L+", key: "stats.patients", icon: Heart },
  { value: "15+", key: "stats.specialities", icon: Stethoscope },
];

const whyUs = [
  {
    icon: Award,
    titleKey: "why.clinical.title",
    descKey: "why.clinical.desc",
  },
  {
    icon: Microscope,
    titleKey: "why.lab.title",
    descKey: "why.lab.desc",
  },
  {
    icon: Clock,
    titleKey: "why.emergency.title",
    descKey: "why.emergency.desc",
  },
  {
    icon: Pill,
    titleKey: "why.pharmacy.title",
    descKey: "why.pharmacy.desc",
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="hero min-h-[30vh] bg-gradient-to-b from-[rgba(11,111,164,0.6)] to-transparent"
        aria-labelledby="hero-heading"
      >
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        <div className="hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero__content"
          >
            <div className="hero__badge">
              <Star size={13} aria-hidden="true" />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 id="hero-heading" className="hero__title">
              {t("hero.tagline")}
            </h1>
            <p className="hero__subtitle">{t("hero.subtitle")}</p>

            {/* ✅ REMOVED: Specialities button. Only Book Appointment remains */}
            <div className="hero__actions">
              <Link
                href="/contact"
                className="btn btn--primary"
                id="hero-book-btn"
              >
                <PhoneCall size={16} aria-hidden="true" />
                {t("hero.cta.book")}
              </Link>
            </div>


          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero__visual"
            aria-hidden="true"
          >
            <div className="hero__image-container">
              <img
                src="/images/hero-medical.png"
                alt="Karuna Hospital Healthcare"
                className="hero__main-image"
              />
              <div className="hero__image-glow" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="stats-bar" aria-label="Hospital statistics">
        <div className="stats-bar__inner">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.key} className="stat-item">
                <Icon
                  size={24}
                  className="stat-item__icon"
                  aria-hidden="true"
                />
                <div>
                  <div className="stat-item__value">{s.value}</div>
                  <div className="stat-item__label">{t(s.key)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── About Hospital ───────────────────────────── */}
      <section className="section bg-white" aria-labelledby="about-heading">
        <div className="section__inner">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-neutral-100"
            >
              <Image
                src="/images/building.jpg"
                alt="Karuna Hospital Building"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[var(--brand-primary)]">
                <Heart size={16} />
                <span>{t("home.about.badge")}</span>
              </div>
              <h2 id="about-heading" className="mb-6 text-4xl font-extrabold text-neutral-900 md:text-5xl leading-tight">
                {t("home.about.welcome")} <span className="text-[var(--brand-primary)]">Karuna Hospital</span>
              </h2>
              <div className="prose prose-lg text-neutral-600 mb-8 max-w-none">
                <p className="font-medium text-xl text-neutral-700 leading-relaxed mb-4">
                  {t("home.about.p1.title")}
                </p>
                <p>
                  {t("home.about.p2.desc")}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-5 py-3 border border-neutral-100 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[var(--brand-primary)]">
                     <Shield size={20} />
                  </div>
                  <span className="font-bold text-neutral-900 text-sm">NABH Accredited</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-5 py-3 border border-neutral-100 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[var(--brand-primary)]">
                     <Clock size={20} />
                  </div>
                  <span className="font-bold text-neutral-900 text-sm">24/7 Emergency</span>
                </div>
              </div>

              <Link href="/about" className="btn btn--primary inline-flex gap-2">
                {t("home.about.discover")} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Specialities ─────────────────────────────────── */}
      <section className="section" aria-labelledby="specialities-heading">
        <div className="section__inner">
          <div className="section__header">
            <h2 id="specialities-heading" className="section__title">
              {t("services.title")}
            </h2>
            <p className="section__subtitle">{t("services.subtitle")}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="spec-grid"
          >
            {specialities.map((s, index) => {
              const Icon = s.icon;
              return (
                <motion.article
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  key={s.titleKey}
                  className={`spec-card spec-card--${s.color}`}
                >
                  <div className="spec-card__icon-wrap" aria-hidden="true">
                    <Icon size={28} />
                  </div>
                  <h3 className="spec-card__title">{t(s.titleKey)}</h3>
                  <p className="spec-card__desc">{t(s.descKey)}</p>
                  <Link href="/specialities" className="spec-card__link">
                    Learn More <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
          <div className="section__footer">
            <Link
              href="/specialities"
              className="btn btn--secondary"
              id="all-specialities-btn"
            >
              {t("services.viewmore")}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section bg-neutral-50"
        aria-labelledby="infra-heading"
      >
        <div className="section__inner">
          <div className="section__header">
            <h2 id="infra-heading" className="section__title">
              {t("home.infra.title")}
            </h2>
            <p className="section__subtitle">
              {t("home.infra.subtitle")}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="group relative h-[450px] overflow-hidden rounded-2xl shadow-2xl lg:col-span-2">
              <img
                src="/images/building.jpg"
                alt="Karuna Hospital Building"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10">
                <h3 className="mb-3 transform text-3xl font-bold text-white transition-transform group-hover:-translate-y-1">
                  {t("home.infra.facility.title")}
                </h3>
                <p className="max-w-[400px] rounded-lg border border-white/10 bg-black/30 p-4 text-base leading-relaxed text-white/95 backdrop-blur-md">
                  {t("home.infra.facility.desc")}
                </p>
              </div>
            </div>
            <div className="group relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/lobby.png"
                alt="Hospital Lobby"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10">
                <h3 className="mb-3 transform text-2xl font-bold text-white transition-transform group-hover:-translate-y-1">
                  {t("home.infra.lobby.title")}
                </h3>
                <p className="max-w-[280px] rounded-lg border border-white/10 bg-black/30 p-3 text-sm leading-relaxed text-white/90 backdrop-blur-sm">
                  {t("home.infra.lobby.desc")}
                </p>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-xl">
              <img
                src="/images/doctor.png"
                alt="Patient Care"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-10">
                <h3 className="mb-3 transform text-2xl font-bold text-white transition-transform group-hover:-translate-y-1">
                  {t("home.infra.care.title")}
                </h3>
                <p className="max-w-[280px] rounded-lg border border-white/10 bg-black/20 p-3 text-sm leading-relaxed text-white/90 backdrop-blur-sm">
                  {t("home.infra.care.desc")}
                </p>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-xl md:col-span-2 lg:col-span-1">
              <img
                src="/images/ot.png"
                alt="Operation Theater"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-10">
                <h3 className="mb-3 transform text-2xl font-bold text-white transition-transform group-hover:-translate-y-1">
                  {t("home.infra.ot.title")}
                </h3>
                <p className="max-w-[280px] rounded-lg border border-white/10 bg-black/20 p-3 text-sm leading-relaxed text-white/90 backdrop-blur-sm">
                  {t("home.infra.ot.desc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="why-section" aria-labelledby="why-heading">
        <div className="why-section__bg" aria-hidden="true" />
        <div className="section__inner why-section__inner">
          <div className="section__header">
            <h2
              id="why-heading"
              className="section__title section__title--light"
            >
              {t("why.title")}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="why-grid"
          >
            {whyUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  key={item.titleKey}
                  className="why-card"
                >
                  <div className="why-card__icon" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <h3 className="why-card__title">{t(item.titleKey)}</h3>
                  <p className="why-card__desc">{t(item.descKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Director's Message ───────────────────────────── */}
    <section className="director-section" aria-labelledby="director-heading">
  <div className="section__inner director-section__inner flex items-center gap-12">
    
    {/* LEFT SIDE IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="director-image relative w-[260px] h-[260px] shrink-0"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/director.jpeg"
          alt="Director"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional Ring Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 scale-110" />
    </motion.div>

    {/* RIGHT SIDE CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="director-content max-w-2xl"
    >
      <h2 id="director-heading" className="section__title">
        {t("director.title")}
      </h2>

      <blockquote className="director-quote space-y-4">
        <p>
          {t("home.director.p1")}
        </p>

        <p>&ldquo;{t("director.quote")}&rdquo;</p>

        <footer className="director-quote__footer">
          <cite>— {t("home.director.cite")}</cite>
        </footer>
      </blockquote>

      <Link
        href="/about#director"
        className="btn btn--primary inline-flex items-center gap-2 mt-6"
        id="director-readmore-btn"
      >
        {t("director.readmore")}
        <ArrowRight size={16} />
      </Link>
    </motion.div>

  </div>
</section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta-section__bg" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-section__inner"
        >
          <h2 id="cta-heading" className="cta-section__title">
            {t("cta.title")}
          </h2>
          <p className="cta-section__subtitle">{t("cta.subtitle")}</p>
          <Link href="/contact" className="cta-section__btn" id="cta-book-btn">
            <PhoneCall size={18} aria-hidden="true" />
            {t("cta.button")}
          </Link>
        </motion.div>
      </section>
    </div>

  );
}
