// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Shield, Target, Users } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// "use client";

// import { motion } from "framer-motion";
// import { Award, CheckCircle, Heart, Target, Users } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";
// import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Heart } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="bg-neutral-50 min-h-screen overflow-hidden">

//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-32 lg:pt-40 lg:pb-40">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-white text-sm font-bold border border-white/20 uppercase tracking-widest"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
//           >
//             {t("page.about.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-medium"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="py-20 lg:py-32 bg-white relative z-20 -mt-8 rounded-t-[3rem]" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">{t("page.about.overview")}</h2>
//             <div className="flex flex-col gap-8">
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed font-medium">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 relative border-y border-neutral-100" id="director">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 sm:p-16 relative overflow-hidden"
//           >
//              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
//                <Award size={200} />
//              </div>

//              <h2 className="text-4xl font-extrabold text-neutral-900 mb-10 relative z-10">{t("director.title")}</h2>

//              <div className="relative pl-8 sm:pl-12 border-l-4 border-[#005a8d]">
//                <div className="text-2xl font-medium italic text-gray-700 leading-relaxed mb-8 relative z-10">
//                  <p className="mb-6">
//                    "As the name of the hospital suggests, Karuna Hospital was established to address the gap in the healthcare needs of people who truly need it."
//                  </p>
//                  <p className="mb-6 text-gray-600">
//                    {t("director.quote")}
//                  </p>
//                </div>
//                <footer className="mt-10 font-bold flex items-center gap-4 relative z-10">
//                  <div className="w-12 h-1 bg-[#005a8d] rounded-full" />
//                  <cite className="not-italic text-xl text-neutral-900">— {t("director.name")}</cite>
//                </footer>
//              </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="py-20 lg:py-32 bg-white" id="vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-neutral-900">{t("nav.about.vision")}</h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//           >
//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.vision.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.vision.desc")}</p>
//             </div>

//             <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
//               <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
//                  <Heart size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="text-3xl font-bold text-neutral-900 mb-6">{t("page.about.mission.title")}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">{t("page.about.mission.desc")}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="py-20 lg:py-32 bg-neutral-50 border-t border-neutral-100" id="values">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">{t("page.about.values.title")}</h2>
//             <p className="text-lg text-gray-500 font-medium">Core principles guiding our commitment to superior healthcare.</p>
//           </div>

//            <motion.div
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ duration: 0.7 }}
//              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//            >
//              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                <div key={i} className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
//                  <div className="bg-[#005a8d]/10 w-14 h-14 rounded-2xl text-[#005a8d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
//                    <CheckCircle size={24} strokeWidth={1.5} />
//                  </div>
//                  <p className="text-neutral-700 text-base leading-relaxed font-bold">
//                    {t(`page.about.values.${i}` as any)}
//                  </p>
//                </div>
//              ))}
//            </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section className="py-20 lg:py-32 bg-[#005a8d] relative overflow-hidden" id="accreditation">
//         <div className="absolute inset-0 opacity-10">
//            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
//                  </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//            </svg>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <div className="w-24 h-24 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-amber-400/30">
//              <Award size={40} />
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">{t("page.about.awards.title")}</h2>
//           <p className="text-sky-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="inline-flex items-center gap-3 bg-white text-[#005a8d] border border-white/20 rounded-full px-8 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
//             <CheckCircle size={22} className="text-emerald-500" />
//             {t("footer.nabh")}
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// New Code

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="hero hero--internal relative bg-gradient-to-br from-[var(--brand-primary-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-light)] pt-[calc(var(--header-height)+36px)] pb-32 lg:pb-40">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2 bg-gradient-to-r from-[var(--brand-accent)] to-transparent" />

//         <div className="sectionContainer relative z-10 px-8 text-center lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero__badge mx-auto"
//           >
//             <Users size={16} />
//             <span>{t("nav.about")}</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="hero__title mx-auto max-w-5xl pl-4 font-[DM_Sans] lg:pl-8"
//           >
//             {t("page.about.title")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="hero__subtitle mx-auto max-w-3xl pl-6 lg:pl-12"
//           >
//             {t("page.about.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Overview ── */}
//       <section className="section relative z-20 -mt-8" id="overview">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="sectionContainer px-8 lg:px-16"
//         >
//           <div className="section__header mx-auto max-w-5xl text-center">
//             <h2 className="section__title pl-8 text-center lg:pl-12">
//               {t("page.about.overview")}
//             </h2>
//             <div className="mt-12 flex flex-col gap-8 pl-8 lg:pl-16">
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p1")}
//               </p>
//               <p className="mx-auto max-w-4xl pl-4 text-center text-lg leading-relaxed font-medium text-neutral-600 sm:text-xl lg:pl-8">
//                 {t("page.about.p2")}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Director's Message ── */}
//       <section
//         className="director-section relative border-y border-neutral-100"
//         id="director"
//       >
//         <div className="sectionContainer px-8 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-section__inner mx-auto max-w-6xl"
//           >
//             <div className="director-badge mx-auto mb-12 pl-8 lg:mb-0 lg:pl-12">
//               <div className="director-avatar">
//                 <Award className="h-20 w-20" />
//                 <div className="director-avatar__ring" />
//               </div>
//             </div>

//             <div className="director-content mx-auto max-w-4xl pl-8 text-center lg:mx-0 lg:pl-16 lg:text-left">
//               <h2 className="section__title mb-12 pl-4 text-center lg:pl-8 lg:text-left">
//                 {t("director.title")}
//               </h2>

//               <div className="director-quote mx-auto max-w-3xl pl-6 lg:mx-0 lg:pl-12">
//                 <p className="mb-8 pl-4 text-center text-xl leading-relaxed lg:pl-8 lg:text-left">
//                   "As the name of the hospital suggests, Karuna Hospital was
//                   established to address the gap in the healthcare needs of
//                   people who truly need it."
//                 </p>
//                 <p className="mb-12 pl-4 text-center text-lg leading-relaxed text-neutral-600 lg:pl-8 lg:text-left">
//                   {t("director.quote")}
//                 </p>
//                 <footer className="flex items-center justify-center gap-6 pl-4 font-bold lg:justify-start lg:pl-8">
//                   <div className="h-1.5 w-16 flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
//                   <cite className="text-2xl text-[var(--brand-primary-dark)] not-italic">
//                     — {t("director.name")}
//                   </cite>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission ── */}
//       <section className="section bg-white" id="vision">
//         <div className="sectionContainer px-8 lg:px-16">
//           <div className="section__header mx-auto mb-24 max-w-4xl text-center">
//             <h2 className="section__title pl-8 lg:pl-16">
//               {t("nav.about.vision")}
//             </h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-6xl"
//           >
//             <div className="spec-card spec-card--spec-blue mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.vision.desc")}
//               </p>
//             </div>

//             <div className="spec-card spec-card--spec-green mx-auto max-w-lg p-8 pl-12 text-center lg:p-12 lg:pl-20">
//               <div className="spec-card__icon-wrap mx-auto mb-6 h-20 w-20">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title pl-4 text-2xl lg:pl-8">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc mt-4 pl-4 text-lg leading-relaxed lg:pl-8">
//                 {t("page.about.mission.desc")}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Quality Values ── */}
//       <section className="section border-t border-neutral-100" id="values">
//         <div className="sectionContainer px-8 lg:px-20">
//           <div className="section__header mx-auto max-w-4xl text-center">
//             <h2 className="section__title pl-12 lg:pl-24">
//               {t("page.about.values.title")}
//             </h2>
//             <p className="section__subtitle mt-6 pl-8 text-xl lg:pl-16">
//               Core principles guiding our commitment to superior healthcare.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="spec-grid mx-auto max-w-7xl"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//               <div
//                 key={i}
//                 className="spec-card spec-card--spec-blue mx-auto h-auto max-w-md p-10 pl-16 text-center lg:p-14 lg:pl-24"
//               >
//                 <div className="spec-card__icon-wrap mx-auto mb-6 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
//                   <CheckCircle size={26} />
//                 </div>
//                 <p className="spec-card__title pl-6 text-xl leading-relaxed font-bold lg:pl-12">
//                   {t(`page.about.values.${i}` as any)}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Accreditations ── */}
//       <section
//         className="cta-section relative overflow-hidden"
//         id="accreditation"
//       >
//         <div className="cta-section__bg" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner px-12 text-center lg:px-24"
//         >
//           <div className="cta-section__icon mx-auto mb-12 h-28 w-28">
//             <Award size={48} />
//           </div>
//           <h2 className="cta-section__title mb-8 pl-8 text-4xl lg:pl-20 lg:text-5xl">
//             {t("page.about.awards.title")}
//           </h2>
//           <p className="cta-section__subtitle mx-auto mb-12 max-w-3xl pl-12 text-xl leading-relaxed lg:pl-24">
//             {t("page.about.awards.desc")}
//           </p>
//           <div className="btn--outline mx-auto inline-flex items-center gap-3 px-12 py-6 pl-8 text-xl shadow-2xl hover:scale-105 lg:pl-16">
//             <CheckCircle size={26} className="text-emerald-500" />
//             <span className="font-bold tracking-wide">{t("footer.nabh")}</span>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Again New Code

// app/about/page.tsx

// export default function AboutPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="spec-detail-page min-h-screen bg-neutral-50">
//       {/* ── Hero Section (using global CSS) ── */}
//       <section className="hero hero--internal">
//         <div className="hero__bg-gradient" />
//         <div className="hero__orb hero__orb--1" />
//         <div className="hero__orb hero__orb--2" />

//         <div className="hero__inner">
//           <div className="hero__content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="hero__badge"
//             >
//               <Users size={14} />
//               <span>{t("nav.about")}</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="hero__title"
//             >
//               {t("page.about.title")}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="hero__subtitle"
//             >
//               {t("page.about.subtitle")}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="hero__actions"
//             >
//               <Link href="#contact" className="btn btn--primary">
//                 {t("common.contact")}
//                 <ArrowRight size={16} />
//               </Link>
//               <Link href="#overview" className="btn btn--outline">
//                 {t("common.learnMore")}
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── Overview Section ── */}
//       <section className="section" id="overview">
//         <div className="section__inner">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="section__header"
//           >
//             <h2 className="section__title">{t("page.about.overview")}</h2>
//             <p className="section__subtitle">{t("page.about.overviewDesc")}</p>
//           </motion.div>

//           <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="space-y-6"
//             >
//               <p className="text-lg leading-relaxed text-neutral-700">
//                 {t("page.about.p1")}
//               </p>
//               <p className="text-lg leading-relaxed text-neutral-700">
//                 {t("page.about.p2")}
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <div className="flex items-center gap-2 text-neutral-700">
//                   <CheckCircle
//                     size={20}
//                     className="text-[var(--brand-primary)]"
//                   />
//                   <span className="font-medium">
//                     {t("page.about.feature1")}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-neutral-700">
//                   <CheckCircle
//                     size={20}
//                     className="text-[var(--brand-primary)]"
//                   />
//                   <span className="font-medium">
//                     {t("page.about.feature2")}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg">
//                 <img
//                   src="/images/hospital-exterior.jpg"
//                   alt="Karuna Hospital"
//                   className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//               <div className="absolute -right-4 -bottom-4 max-w-xs rounded-xl border border-[var(--border)] bg-white p-4 shadow-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary-light)]">
//                     <Award size={20} className="text-[var(--brand-primary)]" />
//                   </div>
//                   <div>
//                     <p className="font-bold text-[var(--neutral-900)]">
//                       {t("page.about.years")}
//                     </p>
//                     <p className="text-sm text-[var(--neutral-600)]">
//                       {t("page.about.yearsDesc")}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── Director's Message (using global CSS) ── */}
//       <section className="director-section" id="director">
//         <div className="section__inner director-section__inner">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-badge"
//           >
//             <div className="director-avatar">
//               <Users size={48} />
//             </div>
//             <div className="director-avatar__ring" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="director-content"
//           >
//             <h2 className="section__title mb-2">{t("director.title")}</h2>
//             <p className="mb-6 text-[var(--neutral-600)]">
//               {t("director.role")}
//             </p>

//             <div className="director-quote">
//               <p>
//                 "As the name of the hospital suggests, Karuna Hospital was
//                 established to address the gap in the healthcare needs of people
//                 who truly need it."
//               </p>
//               <p>{t("director.quote")}</p>
//               <footer className="director-quote__footer">
//                 — {t("director.name")}
//               </footer>
//             </div>

//             <Link
//               href="#contact"
//               id="director-readmore-btn"
//               className="btn btn--primary mt-4"
//             >
//               {t("common.getInTouch")}
//               <ArrowRight size={16} />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Vision & Mission Cards ── */}
//       <section className="section" id="vision">
//         <div className="section__inner">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="section__header"
//           >
//             <h2 className="section__title">{t("nav.about.vision")}</h2>
//             <p className="section__subtitle">
//               {t("page.about.visionSubtitle")}
//             </p>
//           </motion.div>

//           <div className="spec-grid">
//             {/* Vision Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="spec-card spec-card--spec-blue"
//             >
//               <div className="spec-card__icon-wrap">
//                 <Target size={28} />
//               </div>
//               <h3 className="spec-card__title">
//                 {t("page.about.vision.title")}
//               </h3>
//               <p className="spec-card__desc">{t("page.about.vision.desc")}</p>
//               <Link href="#" className="spec-card__link">
//                 {t("common.learnMore")}
//                 <ArrowRight size={14} />
//               </Link>
//             </motion.div>

//             {/* Mission Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="spec-card spec-card--spec-green"
//             >
//               <div className="spec-card__icon-wrap">
//                 <Heart size={28} />
//               </div>
//               <h3 className="spec-card__title">
//                 {t("page.about.mission.title")}
//               </h3>
//               <p className="spec-card__desc">{t("page.about.mission.desc")}</p>
//               <Link href="#" className="spec-card__link">
//                 {t("common.learnMore")}
//                 <ArrowRight size={14} />
//               </Link>
//             </motion.div>

//             {/* Values Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="spec-card spec-card--spec-purple"
//             >
//               <div className="spec-card__icon-wrap">
//                 <Shield size={28} />
//               </div>
//               <h3 className="spec-card__title">
//                 {t("page.about.values.title")}
//               </h3>
//               <p className="spec-card__desc">{t("page.about.values.desc")}</p>
//               <Link href="#" className="spec-card__link">
//                 {t("common.learnMore")}
//                 <ArrowRight size={14} />
//               </Link>
//             </motion.div>

//             {/* Quality Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="spec-card spec-card--spec-orange"
//             >
//               <div className="spec-card__icon-wrap">
//                 <Award size={28} />
//               </div>
//               <h3 className="spec-card__title">
//                 {t("page.about.quality.title")}
//               </h3>
//               <p className="spec-card__desc">{t("page.about.quality.desc")}</p>
//               <Link href="#" className="spec-card__link">
//                 {t("common.learnMore")}
//                 <ArrowRight size={14} />
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── Why Choose Us (using global CSS) ── */}
//       <section className="why-section">
//         <div className="why-section__bg" />
//         <div className="section__inner why-section__inner">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="section__header"
//           >
//             <h2 className="section__title section__title--light">
//               {t("page.about.why.title")}
//             </h2>
//             <p
//               className="section__subtitle"
//               style={{ color: "rgba(255,255,255,0.85)" }}
//             >
//               {t("page.about.why.subtitle")}
//             </p>
//           </motion.div>

//           <div className="why-grid">
//             {[
//               {
//                 icon: Stethoscope,
//                 title: t("page.about.why.expertise"),
//                 desc: t("page.about.why.expertiseDesc"),
//               },
//               {
//                 icon: Clock,
//                 title: t("page.about.why.availability"),
//                 desc: t("page.about.why.availabilityDesc"),
//               },
//               {
//                 icon: MapPin,
//                 title: t("page.about.why.location"),
//                 desc: t("page.about.why.locationDesc"),
//               },
//               {
//                 icon: Award,
//                 title: t("page.about.why.accreditation"),
//                 desc: t("page.about.why.accreditationDesc"),
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="why-card"
//               >
//                 <div className="why-card__icon">
//                   <item.icon size={28} />
//                 </div>
//                 <h3 className="why-card__title">{item.title}</h3>
//                 <p className="why-card__desc">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Accreditations CTA ── */}
//       <section className="cta-section" id="accreditation">
//         <div className="cta-section__bg" />
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="cta-section__inner"
//         >
//           <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm">
//             <Award size={32} className="text-amber-300" />
//           </div>
//           <h2 className="cta-section__title">{t("page.about.awards.title")}</h2>
//           <p className="cta-section__subtitle">{t("page.about.awards.desc")}</p>
//           <Link href="#contact" className="cta-section__btn">
//             {t("common.contactUs")}
//             <ArrowRight size={18} />
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

//  New Code

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
        <div className="section__inner director-section__inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="director-badge"
          >
            <div className="director-avatar">
              <Users size={48} />
            </div>
            <div className="director-avatar__ring" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="director-content"
          >
            <h2 className="section__title mb-2">{t("page.about.chairman.title")}</h2>
            <p className="mb-6 text-[var(--neutral-600)]">
              {t("director.role")}
            </p>

            <div className="director-quote">
              <p>
                "As the name of the hospital suggests, Karuna Hospital was
                established to address the gap in the healthcare needs of people
                who truly need it."
              </p>
              <p>{t("director.quote")}</p>
              <footer className="director-quote__footer">
                — {t("director.name")}
              </footer>
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
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Member {i}</h3>
                <p className="text-sm text-[var(--brand-primary)] font-bold uppercase tracking-wider mb-4">Board of Directors</p>
                <p className="text-neutral-600 text-sm leading-relaxed">Dedicated professional contributing to the growth and excellence of Karuna Hospital.</p>
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
              { title: "Emergency & Trauma", desc: "Round-the-clock emergency response with expert trauma teams." },
              { title: "Diagnostic Lab", desc: "24/7 high-end diagnostic testing and imaging services." },
              { title: "Pharmacy", desc: "Continuous access to quality healthcare medicines and supplies." },
              { title: "Ambulance", desc: "Immediate ambulance pick-up and transport available 24/7." }
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
                {t(
                  "At Karuna Hospital, excellence drives everything we do. We provide cutting-edge, affordable healthcare to all communities, build lasting doctor-patient partnerships, and nurture a supportive workplace where our staff can grow and excel. Backed by the finest healthcare team in the region, we deliver exceptional care with integrity and compassion."
                )}
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
                {t(" Polished Mission Statement")}
              </h3>
              <p className="spec-card__desc">
                {t(
                  "Karuna Hospital is committed to excellence in all we do. We strive to deliver state-of-the-art medical care to every segment of society at affordable prices, foster enduring doctor-patient relationships, and cultivate an environment where healthcare professionals and staff can continuously learn and thrive. Powered by an exceptional team, we are dedicated to setting the standard in compassionate, high-quality healthcare"
                )}
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
