// "use client";

// import React from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import { diagnosticData } from "@/data/diagnostic-data";
// import { Activity, Shield, Droplet, Zap, Heart, Brain, Wind, FlaskConical, AlertCircle, Phone, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function HabitDetailPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const { language, t } = useLanguage();

//   const data = diagnosticData[slug];

//   if (!data) {
//     return (
//       <main className="diagnostic-detail">
//         <section className="detail-hero">
//           <div className="section__inner">
//             <Link href="/diagnostic-services/by-habit" className="back-link">
//               <ArrowLeft size={16} />
//               <span>Back to Habits</span>
//             </Link>
//             <h1 className="detail-title">{t(`nav.diag.habit.${slug}`)}</h1>
//           </div>
//         </section>

//         <section className="section">
//           <div className="section__inner">
//             <div className="empty-detail-state">
//               <div className="empty-icon">
//                 <AlertCircle size={48} />
//               </div>
//               <h2 className="empty-title">Detailed Information Coming Soon</h2>
//               <p className="empty-text">
//                 We are currently updating our database with detailed information for <strong>{t(`nav.diag.habit.${slug}`)}</strong>.
//                 In the meantime, you can contact our experts or book a consultation.
//               </p>
//               <div className="detail-cta-group">
//                 <Link href="/contact" className="btn btn--primary">
//                   Book a Consultation
//                 </Link>
//                 <Link href="/find-a-doctor" className="btn btn--outline">
//                   Find a Specialist
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <style jsx>{`
//           .detail-hero {
//             background: linear-gradient(135deg, var(--brand-primary-dark), var(--brand-primary));
//             padding: 4rem 0 3rem;
//             color: white;
//           }
//           .back-link {
//             display: flex;
//             align-items: center;
//             gap: 0.5rem;
//             color: rgba(255,255,255,0.8);
//             text-decoration: none;
//             font-size: 0.9rem;
//             margin-bottom: 2rem;
//             transition: color 0.2s;
//           }
//           .back-link:hover {
//             color: white;
//           }
//           .detail-title {
//             font-family: "Playfair Display", serif;
//             font-size: 3rem;
//           }
//           .empty-detail-state {
//             max-width: 600px;
//             margin: 0 auto;
//             text-align: center;
//             padding: 4rem 2rem;
//             background: var(--neutral-50);
//             border-radius: 24px;
//             border: 1px dashed var(--neutral-300);
//           }
//           .empty-icon {
//             color: var(--brand-primary);
//             margin-bottom: 1.5rem;
//           }
//           .empty-title {
//             font-family: "Playfair Display", serif;
//             font-size: 2rem;
//             margin-bottom: 1rem;
//             color: var(--brand-primary-dark);
//           }
//           .empty-text {
//             color: var(--neutral-600);
//             line-height: 1.7;
//             margin-bottom: 2rem;
//           }
//           .detail-cta-group {
//             display: flex;
//             gap: 1rem;
//             justify-content: center;
//           }
//         `}</style>
//       </main>
//     );
//   }

//   const content = data[language];

//   return (
//     <main className="diagnostic-detail bg-neutral-50 min-h-screen pb-20">
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
//             <Activity size={14} />
//             <span>Habit Assessment</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="hero__title"
//           >
//             {content.title}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             {content.description}
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-8"
//           >
//             <Link href="/diagnostic-services/by-habit" className="btn btn--white px-6 py-2 text-sm shadow-lg">
//               <ArrowLeft size={16} className="mr-2" /> {language === 'en' ? 'Back to Habits' : 'आदतों पर वापस जाएं'}
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="section bg-white pt-20">
//         <div className="section__inner">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

//             {/* Left Column: Clinical Info */}
//             <div className="flex flex-col gap-10">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft"
//               >
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                   <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Medical Impact</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-tight">Understanding the Risks</h2>
//                 <p className="text-neutral-700 text-lg leading-relaxed font-medium">
//                   {content.importance}
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft"
//               >
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="w-10 h-1 bg-[var(--brand-rose)] rounded-full"></div>
//                   <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-rose)]">Warning Signs</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-neutral-900 mb-8 leading-tight">Common Symptoms & Indicators</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {content.symptoms.map((s, i) => (
//                     <div key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-[var(--brand-primary)] transition-all">
//                       <CheckCircle2 size={20} className="text-[var(--brand-primary)] mt-0.5 shrink-0" />
//                       <span className="text-neutral-700 font-semibold text-sm leading-relaxed">{s}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right Column: Sidebar */}
//             <aside className="sticky top-28 flex flex-col gap-8">
//               <div className="bg-white border border-neutral-100 rounded-3xl p-10 shadow-soft">
//                 <div className="flex items-center gap-3 mb-8">
//                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[var(--brand-primary)] flex items-center justify-center">
//                       <Activity size={24} />
//                    </div>
//                    <h3 className="font-bold text-xl text-neutral-900">{language === 'en' ? 'Protocol' : 'प्रोटोकॉल'}</h3>
//                 </div>

//                 <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">{language === 'en' ? 'Recommended Tests' : 'अनुशंसित टेस्ट'}</h4>
//                 <div className="flex flex-wrap gap-2 mb-10">
//                   {content.recommendedTests.map((t, i) => (
//                     <span key={i} className="px-4 py-2 bg-neutral-50 rounded-lg text-xs font-bold text-neutral-600 border border-neutral-100">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <Link href="/contact" className="btn btn--primary w-full justify-center py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all">
//                   {language === 'en' ? 'Book Screening' : 'अभी बुकिंग करें'}
//                 </Link>
//               </div>

//               <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
//                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                  <div className="flex items-center gap-4 mb-6">
//                     <Phone size={20} className="text-white/70" />
//                     <div>
//                       <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50">Support</span>
//                       <span className="block font-bold text-lg">011-22112211</span>
//                     </div>
//                  </div>
//                  <div className="flex items-center gap-4">
//                     <Clock size={20} className="text-white/70" />
//                     <div>
//                       <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50">TAT</span>
//                       <span className="block font-bold text-lg">12 - 24 Hours</span>
//                     </div>
//                  </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* Associated Packages Section */}
//       {data.associatedPackages && data.associatedPackages.length > 0 && (
//         <section className="section bg-neutral-50 border-t border-neutral-200 mt-20">
//           <div className="section__inner">
//             <div className="flex items-end justify-between mb-16 px-4">
//                <div>
//                   <h2 className="section__title !text-left !text-4xl mb-4">
//                     {t("diag.detail.availablePackages")}
//                   </h2>
//                   <p className="text-neutral-500 max-w-xl">Curated health packages specifically designed for {content.title} screenings and assessments.</p>
//                </div>
//                <Link href="/diagnostic-services/packages" className="btn btn--ghost text-[var(--brand-primary)]">
//                   {t("diag.detail.viewPackage")} <ArrowRight size={16} className="ml-2" />
//                </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {data.associatedPackages.map((pkg, i) => (
//                 <motion.div
//                   key={pkg.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="group bg-white rounded-3xl p-8 border border-neutral-100 shadow-soft hover:shadow-2xl hover:border-[var(--brand-primary)] transition-all duration-300 relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 py-2 px-6 bg-[var(--brand-accent)] text-white text-[10px] font-bold uppercase tracking-[.2em] rounded-bl-3xl">
//                     {pkg.discount} {t("diag.detail.off")}
//                   </div>

//                   <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-[var(--brand-primary)] transition-colors mb-4 pt-4">{pkg.title}</h3>

//                   <div className="flex items-baseline gap-3 mb-6">
//                     <span className="text-3xl font-extrabold text-[var(--brand-primary)]">₹{pkg.price}/-</span>
//                     <span className="text-neutral-400 line-through text-sm">₹{pkg.oldPrice}</span>
//                   </div>

//                   <p className="text-neutral-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
//                     {pkg.description}
//                   </p>

//                   <Link href="/diagnostic-services/packages" className="btn btn--primary w-full justify-center py-4 rounded-xl group-hover:shadow-lg transition-all">
//                     View Full Details
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </main>
//   );
// }

// New Code

"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FlaskConical,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { diagnosticData } from "@/data/diagnostic-data";

// "use client";

// import React from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import { diagnosticData } from "@/data/diagnostic-data";
// import { Activity, Shield, Droplet, Zap, Heart, Brain, Wind, FlaskConical, AlertCircle, Phone, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function HabitDetailPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const { language, t } = useLanguage();

//   const data = diagnosticData[slug];

//   if (!data) {
//     return (
//       <main className="diagnostic-detail">
//         <section className="detail-hero">
//           <div className="section__inner">
//             <Link href="/diagnostic-services/by-habit" className="back-link">
//               <ArrowLeft size={16} />
//               <span>Back to Habits</span>
//             </Link>
//             <h1 className="detail-title">{t(`nav.diag.habit.${slug}`)}</h1>
//           </div>
//         </section>

//         <section className="section">
//           <div className="section__inner">
//             <div className="empty-detail-state">
//               <div className="empty-icon">
//                 <AlertCircle size={48} />
//               </div>
//               <h2 className="empty-title">Detailed Information Coming Soon</h2>
//               <p className="empty-text">
//                 We are currently updating our database with detailed information for <strong>{t(`nav.diag.habit.${slug}`)}</strong>.
//                 In the meantime, you can contact our experts or book a consultation.
//               </p>
//               <div className="detail-cta-group">
//                 <Link href="/contact" className="btn btn--primary">
//                   Book a Consultation
//                 </Link>
//                 <Link href="/find-a-doctor" className="btn btn--outline">
//                   Find a Specialist
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <style jsx>{`
//           .detail-hero {
//             background: linear-gradient(135deg, var(--brand-primary-dark), var(--brand-primary));
//             padding: 4rem 0 3rem;
//             color: white;
//           }
//           .back-link {
//             display: flex;
//             align-items: center;
//             gap: 0.5rem;
//             color: rgba(255,255,255,0.8);
//             text-decoration: none;
//             font-size: 0.9rem;
//             margin-bottom: 2rem;
//             transition: color 0.2s;
//           }
//           .back-link:hover {
//             color: white;
//           }
//           .detail-title {
//             font-family: "Playfair Display", serif;
//             font-size: 3rem;
//           }
//           .empty-detail-state {
//             max-width: 600px;
//             margin: 0 auto;
//             text-align: center;
//             padding: 4rem 2rem;
//             background: var(--neutral-50);
//             border-radius: 24px;
//             border: 1px dashed var(--neutral-300);
//           }
//           .empty-icon {
//             color: var(--brand-primary);
//             margin-bottom: 1.5rem;
//           }
//           .empty-title {
//             font-family: "Playfair Display", serif;
//             font-size: 2rem;
//             margin-bottom: 1rem;
//             color: var(--brand-primary-dark);
//           }
//           .empty-text {
//             color: var(--neutral-600);
//             line-height: 1.7;
//             margin-bottom: 2rem;
//           }
//           .detail-cta-group {
//             display: flex;
//             gap: 1rem;
//             justify-content: center;
//           }
//         `}</style>
//       </main>
//     );
//   }

//   const content = data[language];

//   return (
//     <main className="diagnostic-detail bg-neutral-50 min-h-screen pb-20">
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
//             <Activity size={14} />
//             <span>Habit Assessment</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="hero__title"
//           >
//             {content.title}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             {content.description}
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-8"
//           >
//             <Link href="/diagnostic-services/by-habit" className="btn btn--white px-6 py-2 text-sm shadow-lg">
//               <ArrowLeft size={16} className="mr-2" /> {language === 'en' ? 'Back to Habits' : 'आदतों पर वापस जाएं'}
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="section bg-white pt-20">
//         <div className="section__inner">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

//             {/* Left Column: Clinical Info */}
//             <div className="flex flex-col gap-10">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-neutral-50 rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft"
//               >
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="w-10 h-1 bg-[var(--brand-primary)] rounded-full"></div>
//                   <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">Medical Impact</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-tight">Understanding the Risks</h2>
//                 <p className="text-neutral-700 text-lg leading-relaxed font-medium">
//                   {content.importance}
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-2xl p-10 md:p-14 border border-neutral-100 shadow-soft"
//               >
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="w-10 h-1 bg-[var(--brand-rose)] rounded-full"></div>
//                   <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-rose)]">Warning Signs</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-neutral-900 mb-8 leading-tight">Common Symptoms & Indicators</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {content.symptoms.map((s, i) => (
//                     <div key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-[var(--brand-primary)] transition-all">
//                       <CheckCircle2 size={20} className="text-[var(--brand-primary)] mt-0.5 shrink-0" />
//                       <span className="text-neutral-700 font-semibold text-sm leading-relaxed">{s}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right Column: Sidebar */}
//             <aside className="sticky top-28 flex flex-col gap-8">
//               <div className="bg-white border border-neutral-100 rounded-3xl p-10 shadow-soft">
//                 <div className="flex items-center gap-3 mb-8">
//                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[var(--brand-primary)] flex items-center justify-center">
//                       <Activity size={24} />
//                    </div>
//                    <h3 className="font-bold text-xl text-neutral-900">{language === 'en' ? 'Protocol' : 'प्रोटोकॉल'}</h3>
//                 </div>

//                 <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">{language === 'en' ? 'Recommended Tests' : 'अनुशंसित टेस्ट'}</h4>
//                 <div className="flex flex-wrap gap-2 mb-10">
//                   {content.recommendedTests.map((t, i) => (
//                     <span key={i} className="px-4 py-2 bg-neutral-50 rounded-lg text-xs font-bold text-neutral-600 border border-neutral-100">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <Link href="/contact" className="btn btn--primary w-full justify-center py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all">
//                   {language === 'en' ? 'Book Screening' : 'अभी बुकिंग करें'}
//                 </Link>
//               </div>

//               <div className="bg-[var(--brand-primary-dark)] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
//                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
//                  <div className="flex items-center gap-4 mb-6">
//                     <Phone size={20} className="text-white/70" />
//                     <div>
//                       <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50">Support</span>
//                       <span className="block font-bold text-lg">011-22112211</span>
//                     </div>
//                  </div>
//                  <div className="flex items-center gap-4">
//                     <Clock size={20} className="text-white/70" />
//                     <div>
//                       <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50">TAT</span>
//                       <span className="block font-bold text-lg">12 - 24 Hours</span>
//                     </div>
//                  </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* Associated Packages Section */}
//       {data.associatedPackages && data.associatedPackages.length > 0 && (
//         <section className="section bg-neutral-50 border-t border-neutral-200 mt-20">
//           <div className="section__inner">
//             <div className="flex items-end justify-between mb-16 px-4">
//                <div>
//                   <h2 className="section__title !text-left !text-4xl mb-4">
//                     {t("diag.detail.availablePackages")}
//                   </h2>
//                   <p className="text-neutral-500 max-w-xl">Curated health packages specifically designed for {content.title} screenings and assessments.</p>
//                </div>
//                <Link href="/diagnostic-services/packages" className="btn btn--ghost text-[var(--brand-primary)]">
//                   {t("diag.detail.viewPackage")} <ArrowRight size={16} className="ml-2" />
//                </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {data.associatedPackages.map((pkg, i) => (
//                 <motion.div
//                   key={pkg.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="group bg-white rounded-3xl p-8 border border-neutral-100 shadow-soft hover:shadow-2xl hover:border-[var(--brand-primary)] transition-all duration-300 relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 py-2 px-6 bg-[var(--brand-accent)] text-white text-[10px] font-bold uppercase tracking-[.2em] rounded-bl-3xl">
//                     {pkg.discount} {t("diag.detail.off")}
//                   </div>

//                   <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-[var(--brand-primary)] transition-colors mb-4 pt-4">{pkg.title}</h3>

//                   <div className="flex items-baseline gap-3 mb-6">
//                     <span className="text-3xl font-extrabold text-[var(--brand-primary)]">₹{pkg.price}/-</span>
//                     <span className="text-neutral-400 line-through text-sm">₹{pkg.oldPrice}</span>
//                   </div>

//                   <p className="text-neutral-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
//                     {pkg.description}
//                   </p>

//                   <Link href="/diagnostic-services/packages" className="btn btn--primary w-full justify-center py-4 rounded-xl group-hover:shadow-lg transition-all">
//                     View Full Details
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </main>
//   );
// }

// New Code

export default function HabitDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { language, t } = useLanguage();

  const data = diagnosticData[slug];

  // Empty state component
  const EmptyState = () => (
    <main className="diagnostic-detail spec-detail-page">
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__inner">
          <Link
            href="/diagnostic-services/by-habit"
            className="back-link mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            <span>
              {language === "en" ? "Back to Habits" : "आदतों पर वापस जाएं"}
            </span>
          </Link>
          <h1 className="hero__title text-left">
            {t(`nav.diag.habit.${slug}`)}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="empty-detail-state mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="empty-icon bg-brand-primary-light text-brand-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl">
              <AlertCircle size={40} />
            </div>
            <h2 className="section__title mb-4 text-center">
              {language === "en"
                ? "Detailed Information Coming Soon"
                : "विस्तृत जानकारी जल्द ही"}
            </h2>
            <p className="section__subtitle mx-auto mb-8 text-center">
              {language === "en"
                ? `We are currently updating our database with detailed information for `
                : "हम वर्तमान में अपने डेटाबेस को विस्तृत जानकारी के साथ अपडेट कर रहे हैं "}
              <strong className="text-brand-primary">
                {t(`nav.diag.habit.${slug}`)}
              </strong>
              {language === "en"
                ? `. In the meantime, you can contact our experts or book a consultation.`
                : "। इस बीच, आप हमारे विशेषज्ञों से संपर्क कर सकते हैं या परामर्श बुक कर सकते हैं।"}
            </p>
            <div className="detail-cta-group flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn--primary">
                {language === "en" ? "Book a Consultation" : "परामर्श बुक करें"}
              </Link>
              <Link href="/find-a-doctor" className="btn btn--secondary">
                {language === "en" ? "Find a Specialist" : "विशेषज्ञ खोजें"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  if (!data) {
    return <EmptyState />;
  }

  const content = data[language];

  return (
    <main className="diagnostic-detail spec-detail-page min-h-screen bg-neutral-50">
      {/* ========== PREMIUM HERO ========== */}
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
            <Activity size={14} />
            <span>
              {language === "en" ? "Habit Assessment" : "आदत मूल्यांकन"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title text-left"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle text-left"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/diagnostic-services/by-habit"
              className="btn btn--outline inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              {language === "en" ? "Back to Habits" : "आदतों पर वापस जाएं"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="section bg-white">
        <div className="section__inner">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left Column: Clinical Info */}
            <div className="flex flex-col gap-10">
              {/* Medical Impact Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="spec-card spec-card--spec-blue"
              >
                <div className="spec-card__icon-wrap mb-4">
                  <Shield size={24} />
                </div>
                <h2 className="spec-card__title">
                  {language === "en"
                    ? "Understanding the Medical Impact"
                    : "चिकित्सा प्रभाव को समझना"}
                </h2>
                <p className="spec-card__desc">{content.importance}</p>
                <div className="mt-4 border-t border-neutral-200 pt-4">
                  <span className="text-brand-primary inline-flex items-center gap-2 text-sm font-semibold">
                    <Stethoscope size={16} />
                    {language === "en"
                      ? "Expert Reviewed"
                      : "विशेषज्ञ द्वारा समीक्षित"}
                  </span>
                </div>
              </motion.div>

              {/* Warning Signs Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="spec-card spec-card--spec-rose"
              >
                <div className="spec-card__icon-wrap mb-4">
                  <AlertCircle size={24} />
                </div>
                <h2 className="spec-card__title">
                  {language === "en"
                    ? "Warning Signs & Symptoms"
                    : "चेतावनी संकेत और लक्षण"}
                </h2>
                <ul className="mt-2 space-y-3">
                  {content.symptoms.map((s: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brand-accent mt-0.5 flex-shrink-0"
                      />
                      <span className="text-neutral-700">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Prevention Tips Card */}
              {content.preventionTips && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="spec-card spec-card--spec-green"
                >
                  <div className="spec-card__icon-wrap mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="spec-card__title">
                    {language === "en"
                      ? "Prevention & Management"
                      : "रोकथाम और प्रबंधन"}
                  </h2>
                  <ul className="mt-2 space-y-3">
                    {content.preventionTips.map((tip: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 flex-shrink-0 text-green-600"
                        />
                        <span className="text-neutral-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="sticky top-24 flex flex-col gap-6">
              {/* Protocol Card */}
              <div className="spec-card spec-card--spec-teal">
                <div className="spec-card__icon-wrap mb-4">
                  <FlaskConical size={24} />
                </div>
                <h3 className="spec-card__title">
                  {language === "en"
                    ? "Recommended Protocol"
                    : "अनुशंसित प्रोटोकॉल"}
                </h3>

                <div className="mt-4">
                  <h4 className="mb-3 text-sm font-semibold text-neutral-600">
                    {language === "en" ? "Recommended Tests" : "अनुशंसित टेस्ट"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {content.recommendedTests.map((test: string, i: number) => (
                      <span
                        key={i}
                        className="hover:border-brand-primary rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors"
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn btn--primary mt-6 w-full justify-center"
                >
                  {language === "en"
                    ? "Book Screening Now"
                    : "अभी स्क्रीनिंग बुक करें"}
                </Link>
              </div>

              {/* Support Card */}
              <div
                className="spec-card"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-primary-dark), var(--brand-primary))",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-white/70 uppercase">
                      {language === "en" ? "24/7 Support" : "24/7 सहायता"}
                    </span>
                    <span className="block text-lg font-bold">
                      011-22112211
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-white/70 uppercase">
                      {language === "en" ? "Report TAT" : "रिपोर्ट समय"}
                    </span>
                    <span className="block text-lg font-bold">
                      12 - 24 Hours
                    </span>
                  </div>
                </div>

                <Link
                  href="tel:01122112211"
                  className="btn btn--outline mt-4 w-full justify-center"
                  style={{
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    background: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Phone size={16} className="mr-2" />
                  {language === "en" ? "Call Now" : "अभी कॉल करें"}
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h4 className="mb-4 flex items-center gap-2 font-semibold text-neutral-800">
                  <Users size={18} className="text-brand-primary" />
                  {language === "en" ? "Why Choose Us?" : "हमें क्यों चुनें?"}
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    {
                      icon: CheckCircle2,
                      text:
                        language === "en"
                          ? "NABL Accredited Labs"
                          : "NABL मान्यता प्राप्त लैब",
                    },
                    {
                      icon: CheckCircle2,
                      text:
                        language === "en"
                          ? "Expert Doctor Review"
                          : "विशेषज्ञ डॉक्टर समीक्षा",
                    },
                    {
                      icon: CheckCircle2,
                      text:
                        language === "en"
                          ? "Home Sample Collection"
                          : "घर पर सैंपल संग्रह",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-neutral-600"
                    >
                      <item.icon
                        size={16}
                        className="text-brand-primary mt-0.5 flex-shrink-0"
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== ASSOCIATED PACKAGES ========== */}
      {data.associatedPackages && data.associatedPackages.length > 0 && (
        <section className="section border-t border-neutral-200 bg-neutral-50">
          <div className="section__inner">
            <div className="section__header mb-12 text-left">
              <h2 className="section__title">
                {t("diag.detail.availablePackages")}
              </h2>
              <p className="section__subtitle">
                {language === "en"
                  ? "Curated health packages specifically designed for screenings and assessments."
                  : "स्क्रीनिंग और मूल्यांकन के लिए विशेष रूप से डिज़ाइन किए गए स्वास्थ्य पैकेज।"}
              </p>
            </div>

            <div className="spec-grid">
              {data.associatedPackages.map((pkg: any, i: number) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="spec-card spec-card--spec-blue group"
                >
                  {/* Discount Badge */}
                  <div className="bg-brand-accent absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold text-white">
                    {pkg.discount} {t("diag.detail.off")}
                  </div>

                  <h3 className="spec-card__title group-hover:text-brand-primary pt-2 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="my-3 flex items-baseline gap-2">
                    <span className="text-brand-primary text-2xl font-extrabold">
                      ₹{pkg.price}
                    </span>
                    <span className="text-sm text-neutral-400 line-through">
                      ₹{pkg.oldPrice}
                    </span>
                  </div>

                  <p className="spec-card__desc">{pkg.description}</p>

                  <Link
                    href="/diagnostic-services/packages"
                    className="spec-card__link mt-auto"
                  >
                    {language === "en" ? "View Details" : "विवरण देखें"}
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="section__footer mt-10">
              <Link
                href="/diagnostic-services/packages"
                className="btn btn--secondary inline-flex items-center gap-2"
              >
                {t("diag.detail.viewPackage")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== GLOBAL CSS FIXES ========== */}
      <style jsx global>{`
        /* Ensure consistent text alignment */
        .spec-detail-page .hero__title,
        .spec-detail-page .hero__subtitle,
        .spec-detail-page .section__title,
        .spec-detail-page .section__subtitle,
        .spec-detail-page .spec-card__title,
        .spec-detail-page .spec-card__desc {
          text-align: left !important;
        }

        /* Fix card image/display issues */
        .spec-detail-page img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: var(--radius);
        }

        /* Ensure cards have proper spacing */
        .spec-detail-page .spec-card {
          min-height: auto;
        }

        /* Back link styling */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .back-link:hover {
          color: white;
        }

        /* Empty state enhancements */
        .empty-detail-state {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
