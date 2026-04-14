"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

import { Phone, Sparkles, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

const newsData = [
  {
    title: "Karuna Hospital Successfully Completes 10,000 Surgeries",
    date: "October 12, 2024",
    category: "Milestone",
    readTime: "4 min read",
    desc: "A massive milestone for our clinical excellence team as we cross the 10,000 successful surgeries mark, ensuring quality healthcare reaches everyone in the region.",
    img: "/images/lab.png",
  },
  {
    title: "Free Health Checkup Camp Organized in East Delhi",
    date: "September 28, 2024",
    category: "Community",
    readTime: "3 min read",
    desc: "Our outreach team successfully screened over 500 local residents during the weekend health camp focusing on cardiovascular and diabetic health awareness.",
    img: "/images/doctor.png",
  },
  {
    title: "New Advanced ICU Wing Inaugurated",
    date: "September 15, 2024",
    category: "Expansion",
    readTime: "5 min read",
    desc: "We are expanding our critical care capabilities with a newly inaugurated 50-bed advanced ICU wing equipped with the latest life-support systems and monitoring technology.",
    img: "/images/lab.png",
  },
  {
    title: "Karuna Launches Telemedicine Services for Rural Patients",
    date: "August 30, 2024",
    category: "Innovation",
    readTime: "4 min read",
    desc: "Bridging the gap between urban healthcare and rural communities, Karuna Hospital launches a comprehensive telemedicine platform connecting patients with specialists from home.",
    img: "/images/doctor.png",
  },
  {
    title: "Karuna Hospital Receives National Healthcare Excellence Award",
    date: "July 22, 2024",
    category: "Award",
    readTime: "4 min read",
    desc: "Recognised for outstanding patient care, clinical innovation, and community outreach, Karuna Hospital proudly receives the National Healthcare Excellence Award 2024.",
    img: "/images/doctor.png",
  },
];

const categoryStyles: Record<string, string> = {
  Milestone:
    "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200/50",
  Community:
    "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-emerald-200/50",
  Expansion:
    "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-purple-200/50",
  Innovation:
    "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-200/50",
  Award:
    "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-rose-200/50",
};

export default function NewsPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const gridCards = newsData.slice(1);

  const handleBookAppointment = () => {
    router.push("/contact");
  };

  const handleFindDoctor = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ── Hero Section ── */}
      <section className="hero hero--internal relative overflow-hidden">
        <div
          className="hero__bg-gradient absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]"
          aria-hidden="true"
        />
        <div
          className="hero__orb hero__orb--1 absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="hero__orb hero__orb--2 absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="hero__inner relative z-10 mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <Newspaper size={15} className="text-white" />
            <span className="text-sm font-semibold text-white">
              Latest Updates
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-black tracking-tight text-white lg:text-5xl xl:text-6xl"
          >
            {t("page.news.title") || "News"} &amp;{" "}
            <span className="text-white/90">Announcements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/85 lg:text-xl"
          >
            Stay up to date with the latest clinical breakthroughs, community
            service initiatives, and hospital announcements from Karuna
            Hospital.
          </motion.p>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="section py-16 lg:py-24">
        <div className="section__inner mx-auto max-w-7xl px-6">
          
          {/* News Grid */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            {gridCards.map((news, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg transition-shadow duration-400 hover:shadow-2xl"
              >
                {/* Top accent gradient */}
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Category Badge */}
                  <span
                    className={`absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-2 text-[10px] font-bold tracking-wider uppercase shadow-md ${categoryStyles[news.category]}`}
                  >
                    {news.category}
                  </span>
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col px-8 py-8 text-center">
                  {/* Meta Row */}
                  <div className="mb-5 flex items-center justify-center gap-5 text-[11px] font-medium">
                    <span className="flex items-center gap-2 text-neutral-500">
                      <Calendar
                        size={13}
                        className="flex-shrink-0 text-[var(--brand-primary)]"
                      />
                      <span className="whitespace-nowrap">{news.date}</span>
                    </span>
                    <span className="h-4 w-px flex-shrink-0 bg-neutral-200" />
                    <span className="flex items-center gap-2 text-neutral-500">
                      <Clock
                        size={13}
                        className="flex-shrink-0 text-[var(--brand-primary)]"
                      />
                      <span className="whitespace-nowrap">{news.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 px-2 text-center text-lg leading-snug font-bold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)]">
                    <span className="line-clamp-2 block min-h-[3rem]">
                      {news.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-1 px-3 text-center text-sm leading-relaxed text-neutral-500">
                    <span className="line-clamp-3 block">{news.desc}</span>
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-center border-t border-neutral-100 pt-6 pb-4">
                    <button className="group/btn inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)] transition-colors hover:text-[var(--brand-primary-dark)]">
                      {t("page.news.readfull") || "Read More"}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* Extra bottom space */}
                  <div className="h-4" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Extra spacing below grid */}
          <div className="h-12" />

          {/* ✅ ENHANCED CTA SECTION - GUARANTEED CENTER ALIGNMENT */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-xl text-center"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-accent)]/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--brand-primary)]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-[var(--brand-accent)]/10 to-transparent blur-3xl pointer-events-none" />
            
            {/* Content Wrapper - FORCES CENTER ALIGNMENT */}
            <div className="relative z-15 mx-auto max-w-8xl px-6 py-12 lg:px-8 lg:py-12 text-center">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10 px-5 py-2.5 mx-auto"
              >
                <Sparkles size={16} className="text-[var(--brand-primary)]" />
                <span className="text-sm font-semibold text-[var(--brand-primary)]">
                  Quick Access
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-black tracking-tight text-neutral-900 lg:text-3xl mx-auto"
              >
                Need Help?{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] bg-clip-text text-transparent">
                  We&apos;re Here for You
                </span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto mt-4 max-w-10xl text-base leading-relaxed text-neutral-600"
              >
                Connect with our care team to schedule your visit or find the right specialist for your needs.
              </motion.p>

              {/* Buttons Container - PERFECTLY CENTERED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row "
              >
                
                {/* Book Appointment Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookAppointment}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] px-8 py-4 text-white shadow-lg shadow-[var(--brand-primary)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand-primary)]/40 sm:w-auto max-w-sm"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full rounded-2xl" />
                  
                  <span className="relative  flex items-center justify-center gap-3 text-center">
                    <Phone size={18} className="flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-center">
                      <span className="block text-sm font-bold">Book Appointment</span>
                      {/* <span className="block text-xs text-white/85">Schedule your visit</span> */}
                    </span>
                  </span>
                  <ArrowRight size={15} className="relative flex-shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 hidden sm:block" />
                </motion.button>

                {/* Find a Doctor Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleFindDoctor}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-[var(--brand-primary)] bg-white px-8 py-4 text-[var(--brand-primary)] shadow-sm transition-all duration-300 hover:bg-[var(--brand-primary)] hover:text-white sm:w-auto max-w-sm"
                >
                  {/* Hover fill effect */}
                  <span className="absolute inset-0 scale-0 bg-[var(--brand-primary)] transition-transform duration-300 group-hover:scale-100 rounded-2xl" />
                  
                  <span className="relative flex items-center justify-center gap-3 text-center">
                    <UserPlus size={18} className="flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-center">
                      <span className="block text-sm font-bold">Find a Doctor</span>
                      {/* <span className="block text-xs text-neutral-500 group-hover:text-white/85">Browse specialists</span> */}
                    </span>
                  </span>
                  <ArrowRight size={15} className="relative flex-shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 hidden sm:block" />
                </motion.button>

              </motion.div>

              {/* Helper Text */}
              

            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-primary)]" />
          </motion.section>

          {/* Extra spacing below CTA section */}
          <div className="h-8" />

        </div>
      </section>
    </main>
  );
}