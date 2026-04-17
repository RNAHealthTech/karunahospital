"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  HeartPulse,
  HelpCircle,
  Info,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Users
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const PATIENT_DATA: Record<string, any> = {
  "appointment": { icon: Calendar, titleKey: "nav.patient.appointment", descKey: "page.patient.appointment.desc", color: "blue" },
  "forms": { icon: FileText, titleKey: "nav.patient.forms", descKey: "page.patient.forms.desc", color: "teal" },
  "insurance": { icon: ShieldCheck, titleKey: "nav.patient.insurance", descKey: "page.patient.insurance.desc", color: "blue" },
  "faq": { icon: HelpCircle, titleKey: "nav.patient.faq", descKey: "page.patient.faq.desc", color: "orange" },
  "stories": { icon: Users, titleKey: "nav.patient.stories", descKey: "page.patient.stories.desc", color: "purple" },
  "library": { icon: BookOpen, titleKey: "nav.patient.library", descKey: "page.patient.library.desc", color: "teal" },
  "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", descKey: "page.patient.visiting.desc", color: "orange" },
  "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", descKey: "page.patient.feedback.desc", color: "blue" },
  "rights": { icon: Info, titleKey: "nav.patient.rights", descKey: "page.patient.rights.desc", color: "teal" }
};

export default function PatientInfoPage() {
  const { slug } = useParams();
  const { t } = useLanguage();

  const data = PATIENT_DATA[slug as string];

  if (!data) {
    return (
      <div className="section flex min-h-[60vh] items-center justify-center">
        <div className="section__inner text-center">
          <h1 className="section__title text-center">
            {t("page.error.title")}
          </h1>
          <Link href="/" className="btn btn--primary mx-auto mt-8">
            <ArrowLeft size={16} /> {t("page.back_home")}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <main className="patient-info-page min-h-screen bg-[var(--background)]">
      {/* Premium Internal Hero */}
      <section className="hero hero--internal relative overflow-hidden">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero__badge"
          >
            <HeartPulse size={14} />
            <span>{t("page.patient.badge")}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            {t(data.titleKey)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle"
          >
            {t("page.patient.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="section__inner">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-10">
            {/* Main Content */}
            <div className="flex flex-col gap-8">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`spec-card hover:shadow-lg relative overflow-hidden`}
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className={`spec-card__icon-wrap bg-[var(--brand-primary-light)] text-[var(--brand-primary)]`}>
                    <Icon size={28} />
                  </div>
                  <h2 className="spec-card__title m-0 text-2xl font-bold">
                    {t(data.titleKey)}
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none text-left">
                  <p className="spec-card__desc mb-6 text-base leading-relaxed text-neutral-700">
                    {t(data.descKey)}
                  </p>

                  {slug === "appointment" && (
                    <div className="mt-8">
                      <Link href="/appointment" className="btn btn--primary">
                        {t("page.patient.appointment.title")}
                      </Link>
                    </div>
                  )}

                  {slug === "forms" && (
                    <div className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                      <h4 className="font-bold mb-4">{t("page.patient.forms.title")}</h4>
                      <p className="text-sm text-neutral-600 mb-6 font-medium">Download the essential forms to expedite your check-in process.</p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-[var(--brand-primary)] font-semibold cursor-pointer hover:underline">
                          <FileText size={16} /> New Patient Registration Form
                        </li>
                        <li className="flex items-center gap-3 text-sm text-[var(--brand-primary)] font-semibold cursor-pointer hover:underline">
                          <FileText size={16} /> Medical History Disclosure
                        </li>
                        <li className="flex items-center gap-3 text-sm text-[var(--brand-primary)] font-semibold cursor-pointer hover:underline">
                          <FileText size={16} /> Privacy Policy Consent
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="my-6 h-px w-full bg-[var(--border)]" />
                  <p className="text-sm leading-relaxed text-neutral-500 italic">
                    At Karuna Hospital, we are committed to maintaining the highest standards of medical ethics and patient transparency.
                    This information is intended to help you navigate our services with confidence and clarity.
                  </p>
                </div>
              </motion.article>

              {/* Assistance Box */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="why-card border-[var(--border)] bg-[var(--neutral-50)]"
              >
                <div className="flex items-start gap-4">
                  <div className="why-card__icon mb-0 bg-[var(--brand-primary-light)] text-[var(--brand-primary)]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="why-card__title mb-2 text-lg">
                      {t("page.patient.help.title")}
                    </h4>
                    <p className="why-card__desc text-sm">
                      {t("page.patient.help.desc")}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a href="tel:+919873754555" className="flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)]">
                        <Phone size={16} /> +91 9873754555
                      </a>
                      <a href="mailto:info@karunahospital.in" className="flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)]">
                        <Mail size={16} /> info@karunahospital.in
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="sticky top-[calc(var(--header-height)+52px)] flex flex-col gap-6">
              <div className="spec-card border-none bg-[var(--brand-primary-dark)] text-white relative overflow-hidden p-8">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Patient Helpdesk</h3>
                  <p className="text-sm text-white/80 mb-6">Reach out to our patient relations team for immediate support or documentation help.</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={18} className="text-[var(--brand-gold)]" />
                      <span>Reception: <strong>011-40793535</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={18} className="text-[var(--brand-gold)]" />
                      <span>Dilshad Colony, Delhi</span>
                    </div>
                  </div>

                  <Link href="/contact" className="btn bg-white text-[var(--brand-primary-dark)] w-full justify-center font-bold">
                    Contact Now
                  </Link>
                </div>
              </div>

              <div className="spec-card p-6">
                <h4 className="font-bold mb-4">Related Resources</h4>
                <nav className="flex flex-col gap-1">
                  {Object.entries(PATIENT_DATA)
                    .filter(([key]) => key !== slug)
                    .map(([key, item]: [string, any]) => (
                      <Link
                        key={key}
                        href={`/patient/${key}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={16} className="text-neutral-400 group-hover:text-[var(--brand-primary)]" />
                          <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
                        </div>
                        <ArrowRight size={14} className="text-neutral-300 group-hover:translate-x-1" />
                      </Link>
                    ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
