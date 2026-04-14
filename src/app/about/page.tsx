"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Users,
  Target,
  ArrowRight,
  Shield,
  Stethoscope,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="spec-detail-page">
      {/* ── Hero Section ── */}
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />

        <div className="hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero__content"
          >
            <h1 className="hero__title">{t("nav.about")}</h1>
            <p className="hero__subtitle">{t("page.about.heroSubtitle")}</p>
          </motion.div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed text-neutral-700 font-medium italic border-l-4 border-[var(--brand-primary)] pl-6 py-2">
                "Karuna" reflects in our clear communication, making the patients feel at home, and the understanding with which we approach treatment.
              </p>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
                <p>{t("page.about.p1")}</p>
                <p>{t("page.about.p2")}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg" style={{ fontFamily: '"DM Sans", sans-serif' }}>NABH</h4>
                    <p className="text-sm text-neutral-500">Accredited</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg" style={{ fontFamily: '"DM Sans", sans-serif' }}>200+</h4>
                    <p className="text-sm text-neutral-500">Care Center</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src="/images/building.jpg" alt="Karuna Hospital Building" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--brand-primary-light)] rounded-full -z-0 blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Director's Message ── */}
      <section className="director-section" id="director" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="section__inner director-section__inner flex flex-col md:flex-row items-center gap-20 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full md:w-[450px]"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] rounded-[2.5rem] opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20" />
              <div className="relative rounded-[2rem] overflow-hidden border border-neutral-100 shadow-2xl">
                <img src="/images/director.jpeg" alt="Dr. Rajeev Gupta" className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] text-xs font-bold tracking-widest uppercase mb-6">
              {t("page.about.chairman.label")}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              Compassionate Care for <br />
              <span className="text-[var(--brand-primary)]">Modern Healthcare</span>
            </h2>

            <div className="prose prose-lg text-neutral-600 max-w-none space-y-6">
              <p className="text-xl font-medium text-neutral-700 italic">
                {t("page.about.chairman.p1")}
              </p>
              <p className="text-neutral-500 leading-relaxed">
                {t("page.about.chairman.p2")}
              </p>
              <p className="text-neutral-500 leading-relaxed">
                {t("page.about.chairman.p3")}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <h4 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: '"DM Sans", sans-serif' }}>{t("page.about.chairman.name")}</h4>
              <p className="text-lg text-[var(--brand-primary)] font-bold">{t("page.about.chairman.desig")}</p>
            </div>

            <Link
              href="/contact"
              className="btn btn--primary mt-12 px-10 py-5 rounded-2xl"
            >
              {t("Get In Touch")}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Infrastructure Gallery ── */}
      <section className="section bg-white" id="infrastructure">
        <div className="section__inner pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 px-6"
          >
            <h2 className="section__title text-center mx-auto" style={{ textAlign: 'center' }}>World-Class Infrastructure</h2>
            <p className="section__subtitle text-center mx-auto">
              Equipped with state-of-the-art medical technology and facilities for comprehensive patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
            {[
              { img: "/images/lobby.png", title: "Global Standard Lobby", desc: "A welcoming, spacious environment for patients and families." },
              { img: "/images/ot.png", title: "Modern Operation Theatres", desc: "Advanced modular OTs for complex surgical procedures." },
              { img: "/images/cardiology_lab.png", title: "Cardiology Lab", desc: "Equipped with the latest technology for heart health diagnosis." },
              { img: "/images/nicu_facility.png", title: "Neonatal ICU", desc: "Specialized care for newborn babies in a safe environment." },
              { img: "/images/maternity_suite.png", title: "Maternity Suites", desc: "Comfortable and safe facilities for expecting mothers." },
              { img: "/images/building.jpg", title: "Karuna Hospital Facility", desc: "A 100+ bedded multi-speciality hospital in Dilshad Colony." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[3rem] shadow-xl aspect-[4/3] border border-neutral-100"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-10 lg:p-12">
                  <h4 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>{item.title}</h4>
                  <p className="text-white/80 text-base transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 leading-relaxed max-w-[280px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Management Team ── */}
      <section className="section bg-neutral-50" id="management">
        <div className="section__inner py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header mb-16"
          >
            <h2 className="section__title">{t("page.about.management.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto px-8">
            {[
              { name: "Dr. Sandhya Gupta", role: "Medical Director", desc: "Leading clinical excellence and patient safety initiatives across all departments." },
              { name: "Dr. Rajeev Gupta", role: "Chairman", desc: "Visionary leader dedicated to providing accessible healthcare through love and care." },
              { name: "Board of Directors", role: "Management", desc: "Experienced professionals steering the hospital towards its mission of service." }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white px-10 py-16 rounded-[4rem] border border-neutral-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-3 text-center flex flex-col items-center justify-center min-h-[480px]"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10 text-[var(--brand-primary)] rounded-[2.5rem] mb-12 flex items-center justify-center transition-transform group-hover:rotate-6">
                  <Users size={56} />
                </div>
                <div className="max-w-[260px] mx-auto">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>{member.name}</h3>
                    <p className="text-sm text-[var(--brand-primary)] font-bold uppercase tracking-[0.25em] mb-10">{member.role}</p>
                    <p className="text-neutral-500 text-lg leading-relaxed font-medium">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 24x7 Services ── */}
      <section className="section bg-white" id="services-247">
        <div className="section__inner py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header mb-16"
          >
            <h2 className="section__title">{t("page.about.services247.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-8">
            {[
              { title: t("page.about.service.emergency"), desc: t("page.about.service.emergency.desc") },
              { title: t("page.about.service.lab"), desc: t("page.about.service.lab.desc") },
              { title: t("page.about.service.pharmacy"), desc: t("page.about.service.pharmacy.desc") },
              { title: t("page.about.service.ambulance"), desc: t("page.about.service.ambulance.desc") }
            ].map((service, index) => (
              <div key={index} className="group px-10 py-16 bg-neutral-50 rounded-[3.5rem] border border-neutral-200 hover:bg-white hover:shadow-2xl transition-all duration-500 min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-sm text-neutral-400 flex items-center justify-center mb-12 transition-all group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--brand-primary)]/20">
                  <Heart size={44} />
                </div>
                <div className="max-w-[200px]">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-8 leading-tight" style={{ fontFamily: '"DM Sans", sans-serif' }}>{service.title}</h3>
                    <p className="text-neutral-500 text-lg leading-relaxed font-medium">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission Cards ── */}
      <section className="section bg-neutral-50" id="vision">
        <div className="section__inner py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header mb-16"
          >
            <h2 className="section__title">{t("nav.about.vision")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto px-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group px-12 lg:px-20 py-24 bg-white rounded-[5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[550px] flex flex-col items-center justify-center text-center"
            >
              <div className="w-28 h-28 rounded-[2.5rem] bg-blue-50 text-blue-600 flex items-center justify-center mb-16 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-sm">
                <Target size={56} />
              </div>
              <div className="max-w-md">
                <h3 className="text-4xl font-bold text-neutral-900 mb-10" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {t("page.about.vision.title")}
                </h3>
                <p className="text-xl text-neutral-500 leading-[2] font-medium">{t("page.about.vision.desc")}</p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group px-12 lg:px-20 py-24 bg-white rounded-[5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[550px] flex flex-col items-center justify-center text-center"
            >
              <div className="w-28 h-28 rounded-[2.5rem] bg-rose-50 text-rose-600 flex items-center justify-center mb-16 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-sm">
                <Heart size={56} />
              </div>
              <div className="max-w-md">
                <h3 className="text-4xl font-bold text-neutral-900 mb-10" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {t("page.about.mission.title")}
                </h3>
                <p className="text-xl text-neutral-500 leading-[2] font-medium">{t("page.about.mission.desc")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Accreditations CTA ── */}
      <section className="cta-section" id="accreditation">
        <div className="cta-section__bg" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-section__inner flex flex-col items-center text-center py-24 px-8"
        >
          <div className="mb-14 flex h-28 w-28 items-center justify-center rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-md">
            <Award size={56} className="text-amber-300" />
          </div>
          <h2 className="text-5xl lg:text-8xl font-bold text-white mb-10 tracking-tighter uppercase" style={{ fontFamily: '"DM Sans", sans-serif' }}>{t("page.about.awards.title")}</h2>
          <p className="max-w-4xl text-2xl text-white/80 mb-20 font-medium leading-relaxed">{t("page.about.awards.desc")}</p>
          <Link href="/contact" className="px-20 py-10 bg-white text-neutral-900 rounded-[3.5rem] font-bold text-2xl shadow-2xl hover:bg-neutral-50 transition-all hover:scale-110 active:scale-95 flex items-center gap-5">
            Get in Touch
            <ArrowRight size={32} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
