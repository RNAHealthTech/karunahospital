"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Calendar, 
  FileText, 
  CreditCard, 
  MessageCircle, 
  Users, 
  BookOpen, 
  Clock, 
  ThumbsUp,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function PatientResourcesPage() {
  const { t } = useLanguage();

  const resources = [
    {
      title: t("page.patient.appointment.title"),
      desc: t("page.patient.appointment.desc"),
      cta: t("page.patient.cta.book"),
      icon: <Calendar className="w-8 h-8" />,
      link: "/find-a-doctor",
      color: "blue"
    },
    {
      title: t("page.patient.forms.title"),
      desc: t("page.patient.forms.desc"),
      cta: t("page.patient.cta.forms"),
      icon: <FileText className="w-8 h-8" />,
      link: "/patient/forms",
      color: "emerald"
    },
    {
      title: t("page.patient.insurance.title"),
      desc: t("page.patient.insurance.desc"),
      cta: t("page.patient.cta.insurance"),
      icon: <CreditCard className="w-8 h-8" />,
      link: "/patient/insurance",
      color: "purple"
    },
    {
      title: t("page.patient.faq.title"),
      desc: t("page.patient.faq.desc"),
      cta: t("page.patient.cta.faqs"),
      icon: <MessageCircle className="w-8 h-8" />,
      link: "/patient/faq",
      color: "amber"
    },
    {
      title: t("page.patient.stories.title"),
      desc: t("page.patient.stories.desc"),
      cta: t("page.patient.cta.stories"),
      icon: <Users className="w-8 h-8" />,
      link: "/patient/stories",
      color: "rose"
    },
    {
      title: t("page.patient.library.title"),
      desc: t("page.patient.library.desc"),
      cta: t("page.patient.cta.library"),
      icon: <BookOpen className="w-8 h-8" />,
      link: "/patient/library",
      color: "indigo"
    },
    {
      title: t("page.patient.visiting.title"),
      desc: t("page.patient.visiting.desc"),
      cta: t("page.patient.cta.visiting"),
      icon: <Clock className="w-8 h-8" />,
      link: "/patient/visiting-hours",
      color: "teal"
    },
    {
      title: t("page.patient.feedback.title"),
      desc: t("page.patient.feedback.desc"),
      cta: t("page.patient.cta.feedback"),
      icon: <ThumbsUp className="w-8 h-8" />,
      link: "/patient/feedback",
      color: "orange"
    }
  ];

  return (
    <div className="spec-detail-page">
      {/* ── Hero Section ── */}
      <section className="hero hero--internal">
        <div className="hero__inner">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero__content"
          >
            <span className="hero__badge">{t("page.patient.badge")}</span>
            <h1 className="hero__title">{t("page.patient.hero.title")}</h1>
            <p className="hero__subtitle">{t("page.patient.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section className="section bg-white py-24">
        <div className="section__inner max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#fdfdfd] p-10 rounded-[2.5rem] border border-neutral-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:border-[var(--brand-primary-light)] overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-neutral-50 text-neutral-400 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:scale-110 group-hover:rotate-6`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-neutral-900 mb-4 tracking-tight" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed font-medium mb-10 flex-1">
                  {item.desc}
                </p>

                <Link 
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-bold transition-all hover:gap-4 group-hover:underline"
                >
                  {item.cta}
                  <ArrowRight size={20} />
                </Link>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neutral-50 to-transparent -mr-16 -mt-16 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Help Section ── */}
      <section className="section bg-neutral-50 py-24 border-t border-neutral-100">
        <div className="section__inner max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-neutral-50"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              {t("page.patient.help.title")}
            </h2>
            <p className="text-xl text-neutral-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("page.patient.help.desc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-10 py-5 bg-[var(--brand-primary)] text-white rounded-full font-bold shadow-lg shadow-[var(--brand-primary)]/20 hover:scale-105 transition-all">
                {t("nav.contact")}
              </Link>
              <a href="tel:+919873754555" className="px-10 py-5 bg-white text-neutral-900 border border-neutral-200 rounded-full font-bold hover:bg-neutral-50 transition-all">
                +91 9873754555
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
