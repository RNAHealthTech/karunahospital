"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Heart,
  Microscope,
  Shield,
  Star,
  Target
} from "lucide-react";
import Link from "next/link";

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
            <h1 className="hero__title">{t("page.about.title")}</h1>
            <p className="hero__subtitle">{t("page.about.heroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Corporate Profile Section ── */}
      <section className="section" id="corporate-profile">
        <div className="section__inner">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header"
          >
            <h2 className="section__title">{t("page.about.title")}</h2>
            <p className="section__subtitle">{t("page.about.overview")}</p>
          </motion.div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed text-neutral-700 font-medium italic border-l-4 border-[var(--brand-primary)] pl-6 py-2 pb-5">
                &ldquo;Karuna reflects in our clear communication, making the patients feel at home.&rdquo;
              </p>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
                <p>{t("page.about.overview")}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
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
        <div className="section__inner director-section__inner flex flex-col md:flex-row items-center gap-10 md:gap-20 py-12 md:py-24">
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
              {t("page.about.director.title_main") || "Compassionate Care for"} <br />
              <span className="text-[var(--brand-primary)]">{t("page.about.director.title_sub") || "Modern Healthcare"}</span>
            </h2>

            <div className="prose prose-lg text-neutral-600 max-w-none space-y-6">
              <p className="text-xl font-medium text-neutral-700 leading-relaxed font-bold">
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
              {t("nav.contact")}
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
            <h2 className="section__title text-center mx-auto" style={{ textAlign: 'center' }}>{t("page.about.facilities.title")}</h2>
            <p className="section__subtitle text-center mx-auto">
              {t("page.about.facilities.intro")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
            {[
              { img: "/images/ot.png", title: t("page.about.facilities.1.title"), desc: t("page.about.facilities.1.desc") },
              { img: "/images/cardiology_lab.png", title: t("page.about.facilities.2.title"), desc: t("page.about.facilities.2.desc") },
              { img: "/images/nicu_facility.png", title: t("page.about.facilities.3.title"), desc: t("page.about.facilities.3.desc") },
              { img: "/images/lobby.png", title: t("page.about.facilities.4.title"), desc: t("page.about.facilities.4.desc") },
              { img: "/images/maternity_suite.png", title: t("page.about.facilities.5.title"), desc: t("page.about.facilities.5.desc") },
              { img: "/images/building.jpg", title: t("page.about.facilities.title"), desc: t("page.about.overview") }
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 lg:p-12">
                  <h4 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>{item.title}</h4>
                  <p className="text-white/80 text-base transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 leading-relaxed max-w-[280px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey & Why Choose Us ── */}
      <section className="section bg-[#fdfdfd] px-8 py-32 overflow-hidden border-y border-neutral-100">
        <div className="section__inner max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

            {/* Our Journey */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[var(--brand-primary)]" />
                <span className="text-[var(--brand-primary)] font-bold uppercase tracking-[0.2em] text-xs">
                  {t("page.about.journey.badge")}
                </span>
              </div>
              <h2 className="text-6xl font-black text-neutral-900 mb-20 tracking-tighter" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {t("page.about.journey.title")}
              </h2>

              <div className="space-y-4">
                {[
                  { key: "2011", icon: <Award className="w-5 h-5" />, year: "2011" },
                  { key: "nabh", icon: <Shield className="w-5 h-5" />, year: "2016" },
                  { key: "tech", icon: <Microscope className="w-5 h-5" />, year: "2020" },
                  { key: "today", icon: <Target className="w-5 h-5" />, year: "Today" }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-neutral-100 shadow-sm flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-[var(--brand-primary)] transition-all duration-300">
                        {step.icon}
                      </div>
                      {i !== 3 && <div className="w-[2px] flex-1 bg-gradient-to-b from-neutral-200 to-transparent my-2" />}
                    </div>
                    <div className="flex-1 pb-12">
                      <div className="inline-block px-3 py-1 rounded-lg bg-neutral-100 text-neutral-600 font-bold text-sm mb-4">
                        {step.year}
                      </div>
                      <div className="p-8 bg-white rounded-[2rem] border border-neutral-50 shadow-sm group-hover:shadow-xl group-hover:border-[var(--brand-primary-light)] transition-all duration-500">
                        <p className="text-neutral-700 font-bold text-xl leading-relaxed">
                          {t(`page.about.journey.${step.key}`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-rose-500" />
                <span className="text-rose-500 font-bold uppercase tracking-[0.2em] text-xs">
                  {t("page.about.choose.badge")}
                </span>
              </div>
              <h2 className="text-6xl font-black text-neutral-900 mb-20 tracking-tighter" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {t("page.about.choose.title")}
              </h2>

              <div className="grid grid-cols-1 gap-10">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group p-1 rounded-[2.5rem] bg-gradient-to-br from-neutral-100 to-transparent hover:from-[var(--brand-primary)] hover:to-[var(--brand-accent)] transition-all duration-500"
                  >
                    <div className="bg-white p-10 rounded-[2.4rem] flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                      <div className="w-20 h-20 rounded-[1.5rem] bg-neutral-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-primary-light)] group-hover:scale-110 transition-all duration-500">
                        <Heart size={36} />
                      </div>
                      <div>
                        <h4 className="font-black text-neutral-900 text-2xl mb-3 tracking-tight" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                          {t(`page.about.choose.${idx}.title`)}
                        </h4>
                        <p className="text-neutral-500 leading-[1.8] font-medium text-lg">
                          {t(`page.about.choose.${idx}.desc`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section bg-white" id="values">
        <div className="section__inner py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section__header mb-16"
          >
            <h2 className="section__title">{t("page.about.values.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto px-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-neutral-50 px-8 py-12 rounded-[3.5rem] border border-neutral-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-white shadow-sm text-[var(--brand-primary)] rounded-3xl mb-8 mx-auto flex items-center justify-center transition-all group-hover:bg-[var(--brand-primary)] group-hover:text-white">
                  <Star size={36} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4" style={{ fontFamily: '"DM Sans", sans-serif' }}>{t(`page.about.values.${i}.title`)}</h3>
                <p className="text-neutral-500 leading-relaxed font-medium">{t(`page.about.values.${i}.desc`)}</p>
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
              { title: t("page.about.facilities.3.title"), desc: t("page.about.facilities.3.desc") },
              { title: t("page.about.facilities.2.title"), desc: t("page.about.facilities.2.desc") },
              { title: t("page.about.facilities.4.title"), desc: t("page.about.facilities.4.desc") },
              { title: t("page.about.facilities.1.title"), desc: t("page.about.facilities.1.desc") }
            ].map((service, index) => (
              <div key={index} className="group px-6 md:px-10 py-10 md:py-16 bg-neutral-50 rounded-[2.5rem] md:rounded-[3.5rem] border border-neutral-200 hover:bg-white hover:shadow-2xl transition-all duration-500 min-h-[350px] md:min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-sm text-neutral-400 flex items-center justify-center mb-8 md:mb-12 transition-all group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--brand-primary)]/20">
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
            <h2 className="section__title">{t("page.about.vision.title")} & {t("page.about.mission.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto px-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group px-8 md:px-12 lg:px-20 py-12 md:py-24 bg-white rounded-[3rem] md:rounded-[5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center text-center"
            >
              <div className="w-28 h-28 rounded-[2.5rem] bg-blue-50 text-blue-600 flex items-center justify-center mb-10 md:mb-16 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-sm">
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
              className="group px-8 md:px-12 lg:px-20 py-12 md:py-24 bg-white rounded-[3rem] md:rounded-[5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center text-center"
            >
              <div className="w-28 h-28 rounded-[2.5rem] bg-rose-50 text-rose-600 flex items-center justify-center mb-10 md:mb-16 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-sm">
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
            {t("nav.contact")}
            <ArrowRight size={32} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
