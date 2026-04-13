// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Clock, ShieldCheck, MessageSquare, FileText, HeartPulse, ArrowRight } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// const PATIENT_DATA: Record<string, any> = {
//   "rights": { icon: ShieldCheck, titleKey: "nav.patient.rights", color: "spec-blue" },
//   "feedback": { icon: MessageSquare, titleKey: "nav.patient.feedback", color: "spec-orange" },
//   "insurance": { icon: FileText, titleKey: "nav.patient.insurance", color: "spec-teal" },
//   "visiting-hours": { icon: Clock, titleKey: "nav.patient.visiting", color: "spec-purple" }
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex items-center justify-center min-h-[60vh]">
//         <div className="section__inner text-center">
//           <h1 className="section__title">{t("page.error.title")}</h1>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page bg-neutral-50 min-h-screen">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Providing transparent, accessible, and comprehensive information to
//             empower our patients throughout their healthcare journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section bg-white py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
//              <div className="flex flex-col gap-10">
//                 <div className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft relative overflow-hidden group">
//                    <div className="flex items-center gap-3 mb-8">
//                      <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                      <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Information Portal</span>
//                    </div>

//                    <div className="flex items-center gap-4 mb-8">
//                       <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm border border-neutral-100">
//                          <Icon size={32} />
//                       </div>
//                       <h2 className="text-3xl font-semibold text-neutral-900 m-0">
//                         {t(data.titleKey)}
//                       </h2>
//                    </div>

//                    <div className="prose prose-neutral max-w-none">
//                      <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-medium">
//                        {slug === "rights" && t("page.patient.rights.desc")}
//                        {slug === "feedback" && t("page.patient.feedback.desc")}
//                        {slug === "insurance" && t("page.patient.insurance.desc")}
//                        {slug === "visiting-hours" && t("page.patient.visiting.desc")}
//                      </p>
//                      <div className="h-px bg-neutral-200 w-full my-8"></div>
//                      <p className="text-neutral-500 leading-relaxed">
//                        At Karuna Hospital, we are dedicated to maintaining the highest standards of medical ethics and patient transparency.
//                        This information is intended to help you navigate our services with confidence and clarity.
//                        If you have any further questions, please do not hesitate to contact our patient relations desk.
//                      </p>
//                    </div>
//                 </div>

//                 {/* Additional Feature Box */}
//                 <div className="p-8 border border-neutral-100 rounded-2xl bg-white shadow-soft flex items-center gap-6">
//                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                       <Clock size={20} />
//                    </div>
//                    <div>
//                       <h4 className="font-bold text-neutral-900">Need Assistance?</h4>
//                       <p className="text-neutral-500 text-sm">Our 24/7 helpdesk is available for all patient-related queries.</p>
//                    </div>
//                 </div>
//              </div>

//              {/* Sidebar Actions */}
//              <aside className="sticky top-28 flex flex-col gap-6">
//                 <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
//                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                    <h3 className="text-2xl font-bold mb-4 relative z-10">Patient Helpdesk</h3>
//                    <p className="text-white/70 text-sm mb-8 relative z-10">Reach out to our patient relations team for immediate support or documentation help.</p>
//                    <Link href="/contact" className="px-6 py-3 bg-white text-[var(--brand-primary-dark)] font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-200 block text-center mt-8 relative z-10 w-full">
//                      Contact Support
//                    </Link>
//                 </div>

//                 <div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-soft">
//                    <h4 className="font-bold text-neutral-900 mb-6">Related Links</h4>
//                    <nav className="flex flex-col gap-2">
//                      {Object.entries(PATIENT_DATA).filter(([key]) => key !== slug).map(([key, item]: [string, any]) => (
//                         <Link key={key} href={`/patient/${key}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group">
//                            <div className="flex items-center gap-3">
//                               <item.icon size={18} className="text-neutral-400 group-hover:text-[var(--brand-primary)] transition-colors" />
//                               <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">{t(item.titleKey)}</span>
//                            </div>
//                            <ArrowRight size={14} className="text-neutral-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all" />
//                         </Link>
//                      ))}
//                    </nav>
//                 </div>
//              </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

// const PATIENT_DATA: Record<string, any> = {
//   rights: {
//     icon: ShieldCheck,
//     titleKey: "nav.patient.rights",
//     color: "spec-blue",
//     descKey: "page.patient.rights.desc",
//   },
//   feedback: {
//     icon: MessageSquare,
//     titleKey: "nav.patient.feedback",
//     color: "spec-orange",
//     descKey: "page.patient.feedback.desc",
//   },
//   insurance: {
//     icon: FileText,
//     titleKey: "nav.patient.insurance",
//     color: "spec-teal",
//     descKey: "page.patient.insurance.desc",
//   },
//   "visiting-hours": {
//     icon: Clock,
//     titleKey: "nav.patient.visiting",
//     color: "spec-purple",
//     descKey: "page.patient.visiting.desc",
//   },
// };

// export default function PatientInfoPage() {
//   const { slug } = useParams();
//   const { t } = useLanguage();

//   const data = PATIENT_DATA[slug as string];

//   if (!data) {
//     return (
//       <div className="section flex min-h-[60vh] items-center justify-center">
//         <div className="section__inner text-center">
//           <h1 className="section__title text-center">
//             {t("page.error.title")}
//           </h1>
//           <p className="mx-auto mt-4 max-w-md text-center text-neutral-600">
//             {t("page.error.description")}
//           </p>
//           <Link href="/" className="btn btn--primary mx-auto mt-8">
//             <ArrowLeft size={16} /> {t("page.back_home")}
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const Icon = data.icon;

//   return (
//     <main className="patient-info-page min-h-screen bg-[var(--background)]">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="hero__inner">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <HeartPulse size={14} />
//             <span>{t("page.patient.badge")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="hero__title"
//           >
//             {t(data.titleKey)}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             {t("page.patient.hero.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="section">
//         <div className="section__inner">
//           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-10">
//             {/* Main Content */}
//             <div className="flex flex-col gap-8">
//               {/* Info Card - Matches .spec-card styling */}
//               <motion.article
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className={`spec-card spec-card--${data.color} hover:shadow-lg`}
//               >
//                 {/* Top accent bar */}
//                 <div
//                   className={`absolute top-0 right-0 left-0 h-1 rounded-t-[18px] bg-[var(--brand-primary)] opacity-100 transition-opacity`}
//                 />

//                 <div className="mb-6 flex items-start gap-4">
//                   <div
//                     className={`spec-card__icon-wrap bg-[var(--brand-primary-light)] text-[var(--brand-primary)]`}
//                   >
//                     <Icon size={28} />
//                   </div>
//                   <h2 className="spec-card__title m-0 text-2xl font-bold">
//                     {t(data.titleKey)}
//                   </h2>
//                 </div>

//                 <div className="prose prose-neutral max-w-none text-left">
//                   <p className="spec-card__desc mb-6 text-base leading-relaxed text-neutral-700">
//                     {data.descKey
//                       ? t(data.descKey)
//                       : t("page.patient.default.desc")}
//                   </p>

//                   <div className="my-6 h-px w-full bg-[var(--border)]" />

//                   <p className="text-sm leading-relaxed text-neutral-600">
//                     {t("page.patient.footer.text")}
//                   </p>
//                 </div>

//                 {/* Action Link */}
//                 <Link href="/contact" className="spec-card__link mt-auto">
//                   {t("page.patient.contact.link")}
//                   <ArrowRight size={14} />
//                 </Link>
//               </motion.article>

//               {/* Quick Help Box - Styled like why-card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.1 }}
//                 className="why-card border-[var(--border)] bg-[var(--neutral-50)]"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="why-card__icon mb-0 bg-[var(--brand-primary-light)] text-[var(--brand-primary)]">
//                     <Clock size={24} />
//                   </div>
//                   <div>
//                     <h4 className="why-card__title mb-2 text-lg">
//                       {t("page.patient.help.title")}
//                     </h4>
//                     <p className="why-card__desc text-sm">
//                       {t("page.patient.help.desc")}
//                     </p>
//                     <div className="mt-4 flex flex-wrap gap-3">
//                       <a
//                         href="tel:+91-XXXX-XXXX-XX"
//                         className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
//                       >
//                         <Phone size={14} /> {t("page.patient.help.phone")}
//                       </a>
//                       <a
//                         href="mailto:help@karunahospital.com"
//                         className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
//                       >
//                         <Mail size={14} /> {t("page.patient.help.email")}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Sidebar - Sticky with proper spacing */}
//             <aside className="sticky top-[calc(var(--header-height)+52px)] flex flex-col gap-6">
//               {/* Patient Helpdesk Card */}
//               <motion.div
//                 initial={{ opacity: 0, x: 24 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="spec-card border-none bg-[var(--brand-primary-dark)] text-white"
//               >
//                 <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)]" />
//                 <div className="relative z-10">
//                   <h3 className="spec-card__title mb-3 text-xl text-white">
//                     {t("page.patient.sidebar.helpdesk.title")}
//                   </h3>
//                   <p className="spec-card__desc mb-6 text-sm text-white/80">
//                     {t("page.patient.sidebar.helpdesk.desc")}
//                   </p>

//                   <div className="mb-6 space-y-3">
//                     <div className="flex items-center gap-3 text-sm">
//                       <Phone size={16} className="text-[var(--brand-gold)]" />
//                       <span className="text-white/90">
//                         24/7 Emergency:{" "}
//                         <strong className="text-white">+91-XXXX-XXXX</strong>
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm">
//                       <MapPin size={16} className="text-[var(--brand-gold)]" />
//                       <span className="text-white/90">
//                         {t("page.patient.sidebar.location")}
//                       </span>
//                     </div>
//                   </div>

//                   <Link
//                     href="/contact"
//                     className="btn--primary w-full justify-center py-2.5 text-sm"
//                   >
//                     {t("page.patient.sidebar.contact.btn")}
//                   </Link>
//                 </div>
//               </motion.div>

//               {/* Related Links Card */}
//               <motion.div
//                 initial={{ opacity: 0, x: 24 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.4, delay: 0.1 }}
//                 className="spec-card"
//               >
//                 <h4 className="spec-card__title mb-4 text-lg">
//                   {t("page.patient.sidebar.related.title")}
//                 </h4>
//                 <nav className="flex flex-col gap-2">
//                   {Object.entries(PATIENT_DATA)
//                     .filter(([key]) => key !== slug)
//                     .map(([key, item]: [string, any]) => {
//                       const ItemIcon = item.icon;
//                       return (
//                         <Link
//                           key={key}
//                           href={`/patient/${key}`}
//                           className="dropdown-item group flex items-center justify-between"
//                         >
//                           <div className="flex items-center gap-3">
//                             <ItemIcon
//                               size={16}
//                               className="text-[var(--neutral-400)] transition-colors group-hover:text-[var(--brand-primary)]"
//                             />
//                             <span className="text-sm font-medium text-[var(--neutral-700)] transition-colors group-hover:text-[var(--brand-primary)]">
//                               {t(item.titleKey)}
//                             </span>
//                           </div>
//                           <ArrowRight
//                             size={14}
//                             className="text-[var(--neutral-300)] transition-all group-hover:translate-x-1 group-hover:text-[var(--brand-primary)]"
//                           />
//                         </Link>
//                       );
//                     })}
//                 </nav>
//               </motion.div>

//               {/* Download Resources Card */}
//               <motion.div
//                 initial={{ opacity: 0, x: 24 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.4, delay: 0.2 }}
//                 className="spec-card border-[var(--brand-primary)] bg-[var(--brand-primary-light)]"
//               >
//                 <h4 className="spec-card__title mb-3 text-[var(--brand-primary-dark)]">
//                   {t("page.patient.sidebar.resources.title")}
//                 </h4>
//                 <p className="spec-card__desc mb-4 text-sm text-[var(--neutral-700)]">
//                   {t("page.patient.sidebar.resources.desc")}
//                 </p>
//                 <Link
//                   href="/downloads"
//                   className="spec-card__link font-semibold text-[var(--brand-primary)]"
//                 >
//                   {t("page.patient.sidebar.resources.link")}
//                   <ArrowRight size={14} />
//                 </Link>
//               </motion.div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA Section */}
//       <section className="cta-section">
//         <div className="cta-section__bg" aria-hidden="true" />
//         <div className="cta-section__inner">
//           <motion.h2
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="cta-section__title"
//           >
//             {t("page.patient.cta.title")}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="cta-section__subtitle"
//           >
//             {t("page.patient.cta.subtitle")}
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <Link href="/appointment" className="cta-section__btn">
//               {t("page.patient.cta.btn")}
//               <ArrowRight size={18} />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

// Again New Code

const PATIENT_DATA: Record<string, any> = {
  rights: {
    icon: ShieldCheck,
    titleKey: "nav.patient.rights",
    color: "spec-blue",
    descKey: "page.patient.rights.desc",
  },
  feedback: {
    icon: MessageSquare,
    titleKey: "nav.patient.feedback",
    color: "spec-orange",
    descKey: "page.patient.feedback.desc",
  },
  insurance: {
    icon: FileText,
    titleKey: "nav.patient.insurance",
    color: "spec-teal",
    descKey: "page.patient.insurance.desc",
  },
  "visiting-hours": {
    icon: Clock,
    titleKey: "nav.patient.visiting",
    color: "spec-purple",
    descKey: "page.patient.visiting.desc",
  },
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
          <p className="mx-auto mt-4 max-w-md text-center text-neutral-600">
            {t("page.error.description")}
          </p>
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
            {/* {t("page.patient.hero.subtitle")} */}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="section__inner">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-10">
            {/* Main Content */}
            <div className="flex flex-col gap-8">
              {/* Info Card - Matches .spec-card styling */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`spec-card spec-card--${data.color} hover:shadow-lg`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 right-0 left-0 h-1 rounded-t-[18px] bg-[var(--brand-primary)] opacity-100 transition-opacity`}
                />

                <div className="mb-6 flex items-start gap-4">
                  <div
                    className={`spec-card__icon-wrap bg-[var(--brand-primary-light)] text-[var(--brand-primary)]`}
                  >
                    <Icon size={28} />
                  </div>
                  <h2 className="spec-card__title m-0 text-2xl font-bold">
                    {t(data.titleKey)}
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none text-left">
                  <p className="spec-card__desc mb-6 text-base leading-relaxed text-neutral-700">
                    {data.descKey
                      ? t(data.descKey)
                      : t("page.patient.default.desc")}
                  </p>

                  <div className="my-6 h-px w-full bg-[var(--border)]" />

                  <p className="text-sm leading-relaxed text-neutral-600">
                    {/* {t("page.patient.footer.text")} */}
                  </p>
                </div>

                {/* Action Link */}
                <Link href="/contact" className="spec-card__link mt-auto">
                  {t("Contact Us")}
                  <ArrowRight size={14} />
                </Link>
              </motion.article>

              {/* Quick Help Box - Styled like why-card */}
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
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="tel:+91-XXXX-XXXX-XX"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                      >
                        <Phone size={14} /> {t("Call us at +91-XXXX-XXXX-XX")}
                      </a>
                      <a
                        href="mailto:help@karunahospital.com"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                      >
                        <Mail size={14} /> {t("email@karunahospital.com")}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Sticky with proper spacing */}
            <aside className="sticky top-[calc(var(--header-height)+52px)] flex flex-col gap-6">
              {/* Patient Helpdesk Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="spec-card border-none bg-[var(--brand-primary-dark)] text-white"
              >
                <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)]" />
                <div className="relative z-10">
                  <h3 className="spec-card__title mb-3 text-xl text-white">
                    {t("Helpdesk")}
                  </h3>
                  <p className="spec-card__desc mb-6 text-sm text-white/80">
                    {/* {t("page.patient.sidebar.helpdesk.desc")} */}
                  </p>

                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-[var(--brand-gold)]" />
                      <span className="text-white/90">
                        24/7 Emergency:{" "}
                        <strong className="text-white">+91-XXXX-XXXX</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={16} className="text-[var(--brand-gold)]" />
                      <span className="text-white/90">{t("Location")}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="btn--primary w-full justify-center py-2.5 text-sm"
                  >
                    {t("Contact")}
                  </Link>
                </div>
              </motion.div>

              {/* Related Links Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="spec-card"
              >
                <h4 className="spec-card__title mb-4 text-lg">
                  {t("Patient Related")}
                </h4>
                <nav className="flex flex-col gap-2">
                  {Object.entries(PATIENT_DATA)
                    .filter(([key]) => key !== slug)
                    .map(([key, item]: [string, any]) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={key}
                          href={`/patient/${key}`}
                          className="dropdown-item group flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <ItemIcon
                              size={16}
                              className="text-[var(--neutral-400)] transition-colors group-hover:text-[var(--brand-primary)]"
                            />
                            <span className="text-sm font-medium text-[var(--neutral-700)] transition-colors group-hover:text-[var(--brand-primary)]">
                              {t(item.titleKey)}
                            </span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-[var(--neutral-300)] transition-all group-hover:translate-x-1 group-hover:text-[var(--brand-primary)]"
                          />
                        </Link>
                      );
                    })}
                </nav>
              </motion.div>

              {/* ✅ REMOVED: Download Resources Card section */}
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cta-section">
        <div className="cta-section__bg" aria-hidden="true" />
        <div className="cta-section__inner">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-section__title"
          >
            {t("Contact for Appointments or Inquiries")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="cta-section__subtitle"
          >
            {t(
              "Have questions or need assistance? Our team is here to help you navigate your healthcare journey with confidence and care."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/appointment" className="cta-section__btn">
              {t("Book an Appointment")}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
