
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Shield, Target, Users } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="spec-detail-page min-h-screen bg-neutral-50">
      {/* ── Hero Section ── */}
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />

        <div className="hero__inner">
          <div className="hero__content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero__badge"
            >
              <Users size={14} />
              <span>{t("nav.about")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero__title"
            >
              {t("page.about.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero__subtitle"
            >
              {t("page.about.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero__actions"
            >
              <Link href="/contact" className="btn btn--primary">
                {t("Contact Us")}
                <ArrowRight size={16} />
              </Link>
              {/* Removed common.learnMore button */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Corporate Profile Section ── */}
      <section className="section" id="corporate-profile">
        <div className="section__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header"
          >
            <h2 className="section__title">{t("page.about.corporate.title")}</h2>
            <p className="section__subtitle">{t("page.about.overview")}</p>
          </motion.div>

          {/* Removed 2-column grid & right side image/years. Centered content for better balance. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl space-y-6"
          >
            <p className="text-lg leading-relaxed text-neutral-700">
              {t("page.about.p1")}
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              {t("page.about.p2")}
            </p>
            {/* Removed feature1 & feature2 badges */}
          </motion.div>
        </div>
      </section>

      {/* ── Director's Message ── */}
      <section className="director-section" id="director">
        <div className="section__inner director-section__inner flex flex-col md:flex-row items-center gap-12">
          {/* Added flex col/row and gap-12 to ensure layout behaves correctly if classes like director-badge/director-content aren't doing it */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full md:w-[400px]"
          >
            <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-xl">
              <img src="/images/director.jpeg" alt="Dr. Rajeev Gupta" className="w-full h-auto block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">{t("page.about.chairman.label")}</h2>
            <p className="mb-8 text-[var(--brand-primary)] font-semibold uppercase tracking-wider text-sm">
              {t("page.about.director.title")}
            </p>

            <div className="prose prose-lg text-neutral-600 max-w-none">
              <p>
                {t("page.about.chairman.p1")}
              </p>
              <p>
                {t("page.about.chairman.p2")}
              </p>
              <p>
                {t("page.about.chairman.p3")}
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-neutral-900">{t("page.about.chairman.name")}</h4>
              <p className="text-neutral-500">{t("page.about.chairman.desig")}</p>
            </div>

            <Link
              href="/contact"
              id="director-readmore-btn"
              className="btn btn--primary mt-4"
            >
              {t("Get In Touch")}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Management Team ── */}
      <section className="section bg-neutral-50" id="management">
        <div className="section__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header"
          >
            <h2 className="section__title">{t("page.about.management.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm text-center"
              >
                <div className="w-20 h-20 bg-neutral-100 rounded-full mx-auto mb-6 flex items-center justify-center text-neutral-400">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{t("Board Member")} {i}</h3>
                <p className="text-sm text-[var(--brand-primary)] font-bold uppercase tracking-wider mb-4">{t("page.about.mgmt.title")}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{t("page.about.mgmt.desc")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 24x7 Services ── */}
      <section className="section bg-white" id="services-247">
        <div className="section__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header"
          >
            <h2 className="section__title">{t("page.about.services247.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mt-12">
            {[
              { title: t("page.about.service.emergency"), desc: t("page.about.service.emergency.desc") },
              { title: t("page.about.service.lab"), desc: t("page.about.service.lab.desc") },
              { title: t("page.about.service.pharmacy"), desc: t("page.about.service.pharmacy.desc") },
              { title: t("page.about.service.ambulance"), desc: t("page.about.service.ambulance.desc") }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary-light)] text-[var(--brand-primary)] flex items-center justify-center mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission Cards ── */}
      <section className="section" id="vision">
        <div className="section__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header"
          >
            <h2 className="section__title">{t("nav.about.vision")}</h2>
            {/* Removed page.about.visionSubtitle */}
          </motion.div>

          <div className="spec-grid">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="spec-card spec-card--spec-blue"
            >
              <div className="spec-card__icon-wrap">
                <Target size={28} />
              </div>
              <h3 className="spec-card__title">
                {t("page.about.vision.title")}
              </h3>
              <p className="spec-card__desc">{t("page.about.vision.desc")}</p>
              {/* Removed common.learnMore link */}
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="spec-card spec-card--spec-green"
            >
              <div className="spec-card__icon-wrap">
                <Heart size={28} />
              </div>
              <h3 className="spec-card__title">
                {t("page.about.mission.title")}
              </h3>
              <p className="spec-card__desc">{t("page.about.mission.desc")}</p>
              {/* Removed common.learnMore link */}
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="spec-card spec-card--spec-purple"
            >
              <div className="spec-card__icon-wrap">
                <Shield size={28} />
              </div>
              <h3 className="spec-card__title">
                {t("page.about.values.title")}
              </h3>
              <p className="spec-card__desc">
                {t("page.about.values.long")}
              </p>
              {/* Removed common.learnMore link */}
            </motion.div>

            {/* Quality Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="spec-card spec-card--spec-orange"
            >
              <div className="spec-card__icon-wrap">
                <Award size={28} />
              </div>
              <h3 className="spec-card__title">
                {t("page.about.mission.heading")}
              </h3>
              <p className="spec-card__desc">
                {t("page.about.mission.long")}
              </p>
              {/* Removed common.learnMore link */}
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── Why Choose Us ── */}
      {/* <section className="why-section">
        <div className="why-section__bg" />
        <div className="section__inner why-section__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header"
          >
            <h2 className="section__title section__title--light">
              {t("page.about.why.title")}
            </h2>
            <p
              className="section__subtitle"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {t("page.about.why.subtitle")}
            </p>
          </motion.div>

          <div className="why-grid">
            {[
              {
                icon: Stethoscope,
                title: t("page.about.why.expertise"),
                desc: t("page.about.why.expertiseDesc"),
              },
              {
                icon: Clock,
                title: t("page.about.why.availability"),
                desc: t("page.about.why.availabilityDesc"),
              },
              {
                icon: MapPin,
                title: t("page.about.why.location"),
                desc: t("page.about.why.locationDesc"),
              },
              {
                icon: Award,
                title: t("page.about.why.accreditation"),
                desc: t("page.about.why.accreditationDesc"),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="why-card"
              >
                <div className="why-card__icon">
                  <item.icon size={28} />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Accreditations CTA ── */}
      <section className="cta-section" id="accreditation">
        <div className="cta-section__bg" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-section__inner"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm">
            <Award size={32} className="text-amber-300" />
          </div>
          <h2 className="cta-section__title">{t("page.about.awards.title")}</h2>
          <p className="cta-section__subtitle">{t("page.about.awards.desc")}</p>
          <Link href="/contact" className="cta-section__btn">
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
