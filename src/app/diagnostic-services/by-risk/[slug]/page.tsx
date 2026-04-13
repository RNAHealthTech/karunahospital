// "use client";

// import React from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import { diagnosticData } from "@/data/diagnostic-data";
// import { Activity, Shield, Droplet, Zap, Heart, Brain, Wind, FlaskConical, AlertCircle, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { motion } from "framer-motion";

// export default function RiskDetailPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const data = diagnosticData[slug as keyof typeof diagnosticData];
//   const { language, t } = useLanguage();

//   if (!data) {
//     notFound();
//   }

//   const content = data[language as "en" | "hi"];

//   // Default clinical image if specific one is missing in the data
//   const pageImage = content.image || "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200";

//   return (
//     <main className="diagnostic-detail-page bg-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[450px] overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={pageImage}
//             alt={content.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
//         </div>

//         <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3 text-white/80 mb-6"
//           >
//             <Link href="/diagnostic-services/by-risk" className="hover:text-white transition-colors">By Risk</Link>
//             <span>/</span>
//             <span className="text-white font-medium">{content.title}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight max-w-2xl"
//           >
//             {content.title}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-white/90 max-w-xl leading-relaxed font-medium"
//           >
//             {content.description}
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20">
//             {/* Main Content */}
//             <div className="space-y-16">
//               {/* Importance Section */}
//               <div className="group">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-12 h-12 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)]">
//                     <Activity size={24} />
//                   </div>
//                   <h2 className="text-3xl font-black text-neutral-900 tracking-tight">{language === 'en' ? 'Clinical Importance' : 'नैदानिक महत्व'}</h2>
//                 </div>
//                 <div className="bg-neutral-50 rounded-3xl p-10 border border-neutral-100 group-hover:border-[var(--brand-primary)]/30 transition-all duration-500 shadow-soft">
//                   <p className="text-neutral-700 text-lg leading-relaxed">
//                     {content.importance}
//                   </p>
//                 </div>
//               </div>

//               {/* Symptoms Section */}
//               <div>
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
//                     <AlertCircle size={24} />
//                   </div>
//                   <h2 className="text-3xl font-black text-neutral-900 tracking-tight">{language === 'en' ? 'Common Symptoms' : 'सामान्य लक्षण'}</h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {content.symptoms.map((symptom, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.05 }}
//                       className="flex items-center gap-4 p-5 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md hover:border-rose-100 transition-all group"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-150 transition-transform" />
//                       <span className="text-neutral-700 font-semibold">{symptom}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Recommended Tests */}
//               <div>
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
//                     <FlaskConical size={24} />
//                   </div>
//                   <h2 className="text-3xl font-black text-neutral-900 tracking-tight">{language === 'en' ? 'Recommended Tests' : 'अनुशंसित टेस्ट'}</h2>
//                 </div>
//                 <div className="bg-white border-2 border-dashed border-neutral-200 rounded-3xl p-10">
//                    <div className="flex flex-wrap gap-3">
//                      {content.recommendedTests.map((test, i) => (
//                        <span
//                          key={i}
//                          className="px-6 py-3 bg-neutral-100 text-neutral-700 font-bold rounded-xl border border-neutral-200 hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all cursor-default"
//                        >
//                          {test}
//                        </span>
//                      ))}
//                    </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sticky Sidebar */}
//             <aside className="relative">
//               <div className="sticky top-28 space-y-8">
//                 {/* Contact Card */}
//                 <div className="bg-[var(--brand-primary)] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
//                   <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform" />

//                   <h3 className="text-3xl font-black mb-6 leading-tight">{language === 'en' ? 'Need Expert Advice?' : 'विशेषज्ञ सलाह चाहिए?'}</h3>
//                   <p className="text-white/80 mb-10 text-lg leading-relaxed font-medium">
//                     {language === 'en' ? 'Our diagnostic experts are here to help you choose the right tests and explain your results.' : 'हमारे डायग्नोस्टिक विशेषज्ञ सही टेस्ट चुनने और आपके परिणामों को समझने में आपकी मदद करने के लिए यहां हैं।'}
//                   </p>

//                   <div className="space-y-6">
//                     <a href="tel:+919873754555" className="flex items-center gap-4 group/item">
//                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[var(--brand-primary)] transition-all">
//                         <Phone size={20} />
//                       </div>
//                       <div>
//                         <p className="text-xs text-white/60 font-bold uppercase tracking-widest">{language === 'en' ? 'Call Now' : 'अभी कॉल करें'}</p>
//                         <p className="text-xl font-bold font-display">+91 9873754555</p>
//                       </div>
//                     </a>

//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
//                         <Clock size={20} />
//                       </div>
//                       <div>
//                         <p className="text-xs text-white/60 font-bold uppercase tracking-widest">{language === 'en' ? 'Available' : 'उपलब्धता'}</p>
//                         <p className="text-xl font-bold font-display">{language === 'en' ? '24/7 Support' : '24x7 सहायता'}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <Link href="/contact" className="btn bg-white text-[var(--brand-primary)] w-full justify-center mt-12 py-4 h-auto text-lg font-black rounded-2xl hover:bg-neutral-100 transition-colors">
//                     {language === 'en' ? 'Book a Home Visit' : 'होम विजिट बुक करें'}
//                   </Link>
//                 </div>

//                 {/* Accuracy Badge */}
//                 <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-soft flex items-center gap-6">
//                   <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
//                     <CheckCircle2 size={32} />
//                   </div>
//                   <div>
//                     <h4 className="font-black text-neutral-900 text-lg mb-1 leading-tight">{language === 'en' ? 'Accurate Results' : 'सटीक परिणाम'}</h4>
//                     <p className="text-neutral-500 text-sm font-medium">{language === 'en' ? '99.9% precision in clinical diagnostics.' : 'क्लिनिकल डायग्नोस्टिक्स में 99.9% शुद्धता।'}</p>
//                   </div>
//                 </div>
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
//                   <p className="text-neutral-500 max-w-xl">{language === 'en' ? `Curated health packages specifically designed for ${content.title} screenings and assessments.` : `${content.title} स्क्रीनिंग और मूल्यांकन के लिए विशेष रूप से डिज़ाइन किए गए स्वास्थ्य पैकेज।`}</p>
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
//                   <div className="flex justify-between items-start mb-8">
//                      <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
//                        <Activity size={24} />
//                      </div>
//                      <div className="bg-rose-50 text-rose-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
//                        {pkg.discount} {t("diag.detail.off")}
//                      </div>
//                   </div>

//                   <h3 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors leading-tight">
//                     {pkg.title}
//                   </h3>

//                   <div className="flex items-baseline gap-2 mb-8">
//                     <span className="text-3xl font-black text-neutral-900 italic">₹{pkg.price}</span>
//                     <span className="text-neutral-400 line-through text-sm font-bold">₹{pkg.oldPrice}</span>
//                   </div>

//                   <hr className="border-neutral-100 mb-8" />

//                   <Link href="/contact" className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 group-hover:text-[var(--brand-primary)] transition-all group-link">
//                     <span>{language === 'en' ? 'Book Test Now' : 'अभी टेस्ट बुक करें'}</span>
//                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
import { notFound } from "next/navigation";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FlaskConical,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { diagnosticData } from "@/data/diagnostic-data";

// "use client";

// import React from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import { diagnosticData } from "@/data/diagnostic-data";
// import { Activity, Shield, Droplet, Zap, Heart, Brain, Wind, FlaskConical, AlertCircle, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { motion } from "framer-motion";

// export default function RiskDetailPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const data = diagnosticData[slug as keyof typeof diagnosticData];
//   const { language, t } = useLanguage();

//   if (!data) {
//     notFound();
//   }

//   const content = data[language as "en" | "hi"];

//   // Default clinical image if specific one is missing in the data
//   const pageImage = content.image || "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200";

//   return (
//     <main className="diagnostic-detail-page bg-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[450px] overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={pageImage}
//             alt={content.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
//         </div>

//         <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3 text-white/80 mb-6"
//           >
//             <Link href="/diagnostic-services/by-risk" className="hover:text-white transition-colors">By Risk</Link>
//             <span>/</span>
//             <span className="text-white font-medium">{content.title}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight max-w-2xl"
//           >
//             {content.title}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-white/90 max-w-xl leading-relaxed font-medium"
//           >
//             {content.description}
//           </motion.p>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20">
//             {/* Main Content */}
//             <div className="space-y-16">
//               {/* Importance Section */}
//               <div className="group">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-12 h-12 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)]">
//                     <Activity size={24} />
//                   </div>
//                   <h2 className="text-3xl font-black text-neutral-900 tracking-tight">{language === 'en' ? 'Clinical Importance' : 'नैदानिक महत्व'}</h2>
//                 </div>
//                 <div className="bg-neutral-50 rounded-3xl p-10 border border-neutral-100 group-hover:border-[var(--brand-primary)]/30 transition-all duration-500 shadow-soft">
//                   <p className="text-neutral-700 text-lg leading-relaxed">
//                     {content.importance}
//                   </p>
//                 </div>
//               </div>

//               {/* Symptoms Section */}
//               <div>
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
//                     <AlertCircle size={24} />
//                   </div>
//                   <h2 className="text-3xl font-black text-neutral-900 tracking-tight">{language === 'en' ? 'Common Symptoms' : 'सामान्य लक्षण'}</h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {content.symptoms.map((symptom, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.05 }}
//                       className="flex items-center gap-4 p-5 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md hover:border-rose-100 transition-all group"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-150 transition-transform" />
//                       <span className="text-neutral-700 font-semibold">{symptom}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Recommended Tests */}
//               <div>
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
//                     <FlaskConical size={24} />
//                   </div>
//                   <h2 className="text-3xl font-black text-neutral-900 tracking-tight">{language === 'en' ? 'Recommended Tests' : 'अनुशंसित टेस्ट'}</h2>
//                 </div>
//                 <div className="bg-white border-2 border-dashed border-neutral-200 rounded-3xl p-10">
//                    <div className="flex flex-wrap gap-3">
//                      {content.recommendedTests.map((test, i) => (
//                        <span
//                          key={i}
//                          className="px-6 py-3 bg-neutral-100 text-neutral-700 font-bold rounded-xl border border-neutral-200 hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all cursor-default"
//                        >
//                          {test}
//                        </span>
//                      ))}
//                    </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sticky Sidebar */}
//             <aside className="relative">
//               <div className="sticky top-28 space-y-8">
//                 {/* Contact Card */}
//                 <div className="bg-[var(--brand-primary)] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
//                   <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform" />

//                   <h3 className="text-3xl font-black mb-6 leading-tight">{language === 'en' ? 'Need Expert Advice?' : 'विशेषज्ञ सलाह चाहिए?'}</h3>
//                   <p className="text-white/80 mb-10 text-lg leading-relaxed font-medium">
//                     {language === 'en' ? 'Our diagnostic experts are here to help you choose the right tests and explain your results.' : 'हमारे डायग्नोस्टिक विशेषज्ञ सही टेस्ट चुनने और आपके परिणामों को समझने में आपकी मदद करने के लिए यहां हैं।'}
//                   </p>

//                   <div className="space-y-6">
//                     <a href="tel:+919873754555" className="flex items-center gap-4 group/item">
//                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[var(--brand-primary)] transition-all">
//                         <Phone size={20} />
//                       </div>
//                       <div>
//                         <p className="text-xs text-white/60 font-bold uppercase tracking-widest">{language === 'en' ? 'Call Now' : 'अभी कॉल करें'}</p>
//                         <p className="text-xl font-bold font-display">+91 9873754555</p>
//                       </div>
//                     </a>

//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
//                         <Clock size={20} />
//                       </div>
//                       <div>
//                         <p className="text-xs text-white/60 font-bold uppercase tracking-widest">{language === 'en' ? 'Available' : 'उपलब्धता'}</p>
//                         <p className="text-xl font-bold font-display">{language === 'en' ? '24/7 Support' : '24x7 सहायता'}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <Link href="/contact" className="btn bg-white text-[var(--brand-primary)] w-full justify-center mt-12 py-4 h-auto text-lg font-black rounded-2xl hover:bg-neutral-100 transition-colors">
//                     {language === 'en' ? 'Book a Home Visit' : 'होम विजिट बुक करें'}
//                   </Link>
//                 </div>

//                 {/* Accuracy Badge */}
//                 <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-soft flex items-center gap-6">
//                   <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
//                     <CheckCircle2 size={32} />
//                   </div>
//                   <div>
//                     <h4 className="font-black text-neutral-900 text-lg mb-1 leading-tight">{language === 'en' ? 'Accurate Results' : 'सटीक परिणाम'}</h4>
//                     <p className="text-neutral-500 text-sm font-medium">{language === 'en' ? '99.9% precision in clinical diagnostics.' : 'क्लिनिकल डायग्नोस्टिक्स में 99.9% शुद्धता।'}</p>
//                   </div>
//                 </div>
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
//                   <p className="text-neutral-500 max-w-xl">{language === 'en' ? `Curated health packages specifically designed for ${content.title} screenings and assessments.` : `${content.title} स्क्रीनिंग और मूल्यांकन के लिए विशेष रूप से डिज़ाइन किए गए स्वास्थ्य पैकेज।`}</p>
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
//                   <div className="flex justify-between items-start mb-8">
//                      <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
//                        <Activity size={24} />
//                      </div>
//                      <div className="bg-rose-50 text-rose-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
//                        {pkg.discount} {t("diag.detail.off")}
//                      </div>
//                   </div>

//                   <h3 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors leading-tight">
//                     {pkg.title}
//                   </h3>

//                   <div className="flex items-baseline gap-2 mb-8">
//                     <span className="text-3xl font-black text-neutral-900 italic">₹{pkg.price}</span>
//                     <span className="text-neutral-400 line-through text-sm font-bold">₹{pkg.oldPrice}</span>
//                   </div>

//                   <hr className="border-neutral-100 mb-8" />

//                   <Link href="/contact" className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 group-hover:text-[var(--brand-primary)] transition-all group-link">
//                     <span>{language === 'en' ? 'Book Test Now' : 'अभी टेस्ट बुक करें'}</span>
//                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

export default function RiskDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = diagnosticData[slug as keyof typeof diagnosticData];
  const { language, t } = useLanguage();

  if (!data) {
    notFound();
  }

  const content = data[language as "en" | "hi"];
  const pageImage =
    content.image ||
    "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200";

  return (
    <main className="diagnostic-detail-page spec-detail-page min-h-screen bg-neutral-50">
      {/* ========== PREMIUM HERO (Aligned with Global CSS) ========== */}
      <section className="hero hero--internal relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={pageImage}
            alt={content.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary-dark)]/90 via-[var(--brand-primary)]/70 to-transparent" />
        </div>

        {/* Decorative Orbs */}
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__inner relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero__badge mb-4"
          >
            <Shield size={14} />
            <span>
              {language === "en" ? "Risk Assessment" : "जोखिम मूल्यांकन"}
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/diagnostic-services/by-risk"
              className="btn btn--outline inline-flex items-center gap-2"
            >
              <ArrowRight size={16} className="rotate-180" />
              {language === "en" ? "Back to Risks" : "जोखिमों पर वापस जाएं"}
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
              {/* Clinical Importance Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="spec-card spec-card--spec-blue"
              >
                <div className="spec-card__icon-wrap mb-4">
                  <Activity size={24} />
                </div>
                <h2 className="spec-card__title">
                  {language === "en" ? "Clinical Importance" : "नैदानिक महत्व"}
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

              {/* Symptoms Card */}
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
                    ? "Common Symptoms & Indicators"
                    : "सामान्य लक्षण और संकेत"}
                </h2>
                <ul className="mt-2 space-y-3">
                  {content.symptoms.map((symptom: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brand-accent mt-0.5 flex-shrink-0"
                      />
                      <span className="text-neutral-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Prevention Tips Card (if available) */}
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
                      ? "Risk Management Tips"
                      : "जोखिम प्रबंधन सुझाव"}
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
              {/* Protocol & Tests Card */}
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

              {/* Support Card - Using Global Gradient */}
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
                      +91 9873754555
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
                  href="tel:+919873754555"
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

              {/* Trust Badges */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h4 className="mb-4 flex items-center gap-2 font-semibold text-neutral-800">
                  <CheckCircle2 size={18} className="text-brand-primary" />
                  {language === "en"
                    ? "Why Trust Us?"
                    : "हम पर भरोसा क्यों करें?"}
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
                        language === "en" ? "99.9% Accuracy" : "99.9% सटीकता",
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
                  ? "Curated health packages specifically designed for risk assessments."
                  : "जोखिम मूल्यांकन के लिए विशेष रूप से डिज़ाइन किए गए स्वास्थ्य पैकेज।"}
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
                  className="spec-card spec-card--spec-blue group relative"
                >
                  {/* Discount Badge */}
                  <div className="bg-brand-accent absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold text-white">
                    {pkg.discount} {t("diag.detail.off")}
                  </div>

                  <div className="spec-card__icon-wrap mb-4">
                    <Activity size={20} />
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
        /* 🔤 Text Alignment Fixes */
        .spec-detail-page .hero__title,
        .spec-detail-page .hero__subtitle,
        .spec-detail-page .section__title,
        .spec-detail-page .section__subtitle,
        .spec-detail-page .spec-card__title,
        .spec-detail-page .spec-card__desc {
          text-align: left !important;
        }

        /* 🖼️ Image Display Fixes */
        .spec-detail-page img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: var(--radius);
          object-fit: cover;
        }

        /* 🎴 Card Box Consistency */
        .spec-detail-page .spec-card {
          min-height: auto;
          display: flex;
          flex-direction: column;
        }
        .spec-detail-page .spec-card__desc,
        .spec-detail-page .spec-card ul {
          flex: 1;
        }

        /* 🎨 Color Variable Fallbacks */
        .text-brand-primary {
          color: var(--brand-primary) !important;
        }
        .bg-brand-primary-light {
          background: var(--brand-primary-light) !important;
        }
        .text-brand-accent {
          color: var(--brand-accent) !important;
        }

        /* ✨ Smooth Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .spec-detail-page .spec-card {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
