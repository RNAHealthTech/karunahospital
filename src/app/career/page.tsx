// "use client";

// import Link from "next/link";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Briefcase,
//   Clock,
//   HandHeart,
//   Star,
//   Users
// } from "lucide-react";

// import { useLanguage } from "@/context/LanguageContext";

// export default function CareerPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-40 lg:pt-40 lg:pb-48">
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 right-0 -mt-96 -mr-96 h-[800px] w-[800px] rounded-full bg-white/5 blur-[140px]" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-md"
//           >
//             <Briefcase size={16} />
//             <span>Join Our Mission</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mx-auto mb-6 max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
//           >
//             {t("page.career.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-sky-100 sm:text-xl"
//           >
//             {t("page.career.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Culture & Why Section ── */}
//       <section className="relative z-20 -mt-8 rounded-t-[3rem] bg-white py-20 lg:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
//             <div>
//               <div className="mb-6 inline-flex items-center gap-3">
//                 <div className="h-1 w-10 rounded-full bg-[#005a8d]"></div>
//                 <span className="text-sm font-bold tracking-widest text-[#005a8d] uppercase">
//                   Work With Us
//                 </span>
//               </div>
//               <h2 className="mb-6 text-4xl leading-tight font-extrabold text-neutral-900">
//                 {t("page.career.why")}
//               </h2>
//               <p className="mb-10 text-lg leading-relaxed font-medium text-neutral-500">
//                 {t("page.career.why.desc")}
//               </p>

//               <div className="flex flex-col gap-6">
//                 <div className="flex items-start gap-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#005a8d]">
//                     <Star size={26} strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-xl font-bold text-neutral-900">
//                       {t("page.career.growth")}
//                     </h4>
//                     <p className="text-base leading-relaxed font-medium text-neutral-500">
//                       {t("page.career.growth.desc")}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
//                     <Users size={26} strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-xl font-bold text-neutral-900">
//                       {t("page.career.collab")}
//                     </h4>
//                     <p className="text-base leading-relaxed font-medium text-neutral-500">
//                       {t("page.career.collab.desc")}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-neutral-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
//               <img
//                 src="/images/doctor.png"
//                 alt="Karuna Team"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#005a8d]/80 via-transparent to-transparent"></div>
//               <div className="absolute right-10 bottom-10 left-10 rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
//                 <p className="text-xl leading-relaxed font-bold text-white italic">
//                   "A place where medical excellence meets compassionate care."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Open Positions List ── */}
//       <section className="border-t border-neutral-100 bg-neutral-50 py-20 lg:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto mb-16 max-w-3xl text-center">
//             <h2 className="mb-6 text-4xl font-extrabold text-neutral-900">
//               {t("page.career.openings")}
//             </h2>
//             <p className="text-lg leading-relaxed font-medium text-gray-500">
//               Join our team of specialists and support staff dedicated to
//               providing the best healthcare services.
//             </p>
//           </div>

//           <div className="flex flex-col gap-6">
//             {[
//               {
//                 title: "Senior Resident Physician",
//                 dept: "General Medicine",
//                 type: "Full Time",
//               },
//               {
//                 title: "Staff Nurse (ICU)",
//                 dept: "Critical Care",
//                 type: "Full Time",
//               },
//               { title: "OT Technician", dept: "Surgery", type: "Full Time" },
//             ].map((job, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 className="group flex flex-col justify-between gap-8 rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#005a8d]/30 hover:shadow-xl md:flex-row md:items-center"
//               >
//                 <div>
//                   <div className="mb-4 flex items-center gap-3">
//                     <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold tracking-widest text-[#005a8d] uppercase">
//                       {job.dept}
//                     </span>
//                   </div>
//                   <h4 className="mb-3 text-2xl font-bold text-neutral-900 transition-colors group-hover:text-[#005a8d]">
//                     {job.title}
//                   </h4>
//                   <p className="flex items-center gap-2 font-medium text-neutral-500">
//                     <Clock size={16} /> {job.type}
//                   </p>
//                 </div>
//                 <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#005a8d] px-8 py-4 font-bold whitespace-nowrap text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#00395c] hover:shadow-xl">
//                   {t("page.career.apply")} <ArrowRight size={18} />
//                 </button>
//               </motion.div>
//             ))}
//           </div>

//           {/* ── Cant find card ── */}
//           <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#005a8d] to-[#00395c] p-12 text-center text-white shadow-2xl sm:p-16">
//             <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-sky-400 opacity-10 blur-3xl"></div>

//             <div className="relative z-10 mx-auto max-w-2xl">
//               <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
//                 <HandHeart size={32} className="text-sky-300" />
//               </div>
//               <h4 className="mb-6 text-3xl font-bold text-white">
//                 {t("page.career.cantfind")}
//               </h4>
//               <p className="mb-10 text-lg leading-relaxed font-medium text-sky-100">
//                 {t("page.career.sendresume")}
//               </p>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-bold text-[#005a8d] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 {t("page.career.contacthr")} <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// New Code

// CareerPage.tsx
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Clock,
  HandHeart,
  Heart,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import Link from "next/link";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Briefcase,
//   Clock,
//   HandHeart,
//   Star,
//   Users
// } from "lucide-react";

// import { useLanguage } from "@/context/LanguageContext";

// export default function CareerPage() {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen overflow-hidden bg-neutral-50">
//       {/* ── Hero ── */}
//       <section className="relative bg-[#005a8d] pt-32 pb-40 lg:pt-40 lg:pb-48">
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 right-0 -mt-96 -mr-96 h-[800px] w-[800px] rounded-full bg-white/5 blur-[140px]" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-md"
//           >
//             <Briefcase size={16} />
//             <span>Join Our Mission</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mx-auto mb-6 max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
//           >
//             {t("page.career.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-sky-100 sm:text-xl"
//           >
//             {t("page.career.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* ── Culture & Why Section ── */}
//       <section className="relative z-20 -mt-8 rounded-t-[3rem] bg-white py-20 lg:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
//             <div>
//               <div className="mb-6 inline-flex items-center gap-3">
//                 <div className="h-1 w-10 rounded-full bg-[#005a8d]"></div>
//                 <span className="text-sm font-bold tracking-widest text-[#005a8d] uppercase">
//                   Work With Us
//                 </span>
//               </div>
//               <h2 className="mb-6 text-4xl leading-tight font-extrabold text-neutral-900">
//                 {t("page.career.why")}
//               </h2>
//               <p className="mb-10 text-lg leading-relaxed font-medium text-neutral-500">
//                 {t("page.career.why.desc")}
//               </p>

//               <div className="flex flex-col gap-6">
//                 <div className="flex items-start gap-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#005a8d]">
//                     <Star size={26} strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-xl font-bold text-neutral-900">
//                       {t("page.career.growth")}
//                     </h4>
//                     <p className="text-base leading-relaxed font-medium text-neutral-500">
//                       {t("page.career.growth.desc")}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
//                     <Users size={26} strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-xl font-bold text-neutral-900">
//                       {t("page.career.collab")}
//                     </h4>
//                     <p className="text-base leading-relaxed font-medium text-neutral-500">
//                       {t("page.career.collab.desc")}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-neutral-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
//               <img
//                 src="/images/doctor.png"
//                 alt="Karuna Team"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#005a8d]/80 via-transparent to-transparent"></div>
//               <div className="absolute right-10 bottom-10 left-10 rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
//                 <p className="text-xl leading-relaxed font-bold text-white italic">
//                   "A place where medical excellence meets compassionate care."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Open Positions List ── */}
//       <section className="border-t border-neutral-100 bg-neutral-50 py-20 lg:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto mb-16 max-w-3xl text-center">
//             <h2 className="mb-6 text-4xl font-extrabold text-neutral-900">
//               {t("page.career.openings")}
//             </h2>
//             <p className="text-lg leading-relaxed font-medium text-gray-500">
//               Join our team of specialists and support staff dedicated to
//               providing the best healthcare services.
//             </p>
//           </div>

//           <div className="flex flex-col gap-6">
//             {[
//               {
//                 title: "Senior Resident Physician",
//                 dept: "General Medicine",
//                 type: "Full Time",
//               },
//               {
//                 title: "Staff Nurse (ICU)",
//                 dept: "Critical Care",
//                 type: "Full Time",
//               },
//               { title: "OT Technician", dept: "Surgery", type: "Full Time" },
//             ].map((job, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 className="group flex flex-col justify-between gap-8 rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#005a8d]/30 hover:shadow-xl md:flex-row md:items-center"
//               >
//                 <div>
//                   <div className="mb-4 flex items-center gap-3">
//                     <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold tracking-widest text-[#005a8d] uppercase">
//                       {job.dept}
//                     </span>
//                   </div>
//                   <h4 className="mb-3 text-2xl font-bold text-neutral-900 transition-colors group-hover:text-[#005a8d]">
//                     {job.title}
//                   </h4>
//                   <p className="flex items-center gap-2 font-medium text-neutral-500">
//                     <Clock size={16} /> {job.type}
//                   </p>
//                 </div>
//                 <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#005a8d] px-8 py-4 font-bold whitespace-nowrap text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#00395c] hover:shadow-xl">
//                   {t("page.career.apply")} <ArrowRight size={18} />
//                 </button>
//               </motion.div>
//             ))}
//           </div>

//           {/* ── Cant find card ── */}
//           <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#005a8d] to-[#00395c] p-12 text-center text-white shadow-2xl sm:p-16">
//             <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-sky-400 opacity-10 blur-3xl"></div>

//             <div className="relative z-10 mx-auto max-w-2xl">
//               <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
//                 <HandHeart size={32} className="text-sky-300" />
//               </div>
//               <h4 className="mb-6 text-3xl font-bold text-white">
//                 {t("page.career.cantfind")}
//               </h4>
//               <p className="mb-10 text-lg leading-relaxed font-medium text-sky-100">
//                 {t("page.career.sendresume")}
//               </p>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-bold text-[#005a8d] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 {t("page.career.contacthr")} <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// New Code

// CareerPage.tsx

export default function CareerPage() {
  const { t } = useLanguage();

  // Animation variants for scroll-triggered effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Job listings data
  const jobs = [
    {
      id: 1,
      title: "Senior Resident Physician",
      department: "General Medicine",
      type: "Full Time",
      location: "Main Campus",
    },
    {
      id: 2,
      title: "Staff Nurse (ICU)",
      department: "Critical Care",
      type: "Full Time",
      location: "Emergency Wing",
    },
    {
      id: 3,
      title: "OT Technician",
      department: "Surgery",
      type: "Full Time",
      location: "Operation Theatre",
    },
    {
      id: 4,
      title: "Medical Records Officer",
      department: "Administration",
      type: "Part Time",
      location: "Admin Block",
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: Star,
      iconBg: "bg-sky-100",
      iconColor: "text-[#0b6fa4]",
      title: t("page.career.growth"),
      description: t("page.career.growth.desc"),
    },
    {
      icon: Users,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: t("page.career.collab"),
      description: t("page.career.collab.desc"),
    },
    {
      icon: Award,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      title: t("page.career.recognition"),
      description: t("page.career.recognition.desc"),
    },
    {
      icon: Zap,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      title: t("page.career.innovation"),
      description: t("page.career.innovation.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* ── HERO SECTION ── */}
      <section className="career-hero">
        <div className="career-hero__bg-orb career-hero__orb-1" />
        <div className="career-hero__bg-orb career-hero__orb-2" />

        <motion.div
          className="career-hero__inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="career-hero__badge"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Briefcase size={16} className="mr-1" />
            <span>Join Our Mission</span>
          </motion.div>

          <motion.h1
            className="career-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("page.career.title")}
          </motion.h1>

          <motion.p
            className="career-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("page.career.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* ── CULTURE SECTION: Text LEFT, Image RIGHT ── */}
      <section className="career-culture">
        <div className="career-culture__inner">
          <div className="career-culture__grid">
            {/* LEFT: Text Content */}
            <motion.div
              className="career-culture__text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="career-culture__label">
                <span className="career-culture__label-dot"></span>
                <span className="career-culture__label-text">Work With Us</span>
              </div>

              <h2 className="career-culture__title">{t("page.career.why")}</h2>

              <p className="career-culture__desc">
                {t("page.career.why.desc")}
              </p>

              {/* Benefits Grid */}
              <motion.div
                className="career-benefits"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="career-benefit-card"
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div
                      className={`career-benefit__icon ${benefit.iconBg} ${benefit.iconColor}`}
                    >
                      <benefit.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="career-benefit__content">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Image with Glass Overlay */}
            <motion.div
              className="career-culture__image"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="career-culture__image-frame">
                <img
                  src="/images/doctor.png"
                  alt="Karuna Healthcare Team"
                  className="transition-transform duration-500"
                />
                <div className="career-culture__image-overlay" />
                <motion.div
                  className="career-culture__quote"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="flex items-center gap-2">
                    <Heart size={18} className="text-rose-400" />
                    "A place where medical excellence meets compassionate care."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS: Centered Cards ── */}
      <section className="career-openings">
        <div className="career-openings__inner">
          <motion.div
            className="career-openings__header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="career-openings__title">
              {t("page.career.openings")}
            </h2>
            <p className="career-openings__subtitle">
              Join our team of specialists and support staff dedicated to
              providing the best healthcare services.
            </p>
          </motion.div>

          {/* ✨ CENTERED JOB CARDS CONTAINER */}
          <div className="career-jobs-wrapper">
            <motion.div
              className="career-jobs-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="career-job-card"
                  variants={fadeInUp}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(11, 111, 164, 0.15)",
                    transition: { duration: 0.25 },
                  }}
                >
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="career-job-card__meta">
                      <span className="career-job-card__dept">
                        {job.department}
                      </span>
                      <span className="career-job-card__type">
                        <Clock size={14} className="mr-1" />
                        {job.type}
                      </span>
                    </div>
                    <h3 className="career-job-card__title">{job.title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-neutral-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0b6fa4]" />
                      {job.location}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    className="career-job-card__apply"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => console.log(`Apply for ${job.title}`)}
                  >
                    {t("page.career.apply")}
                    <ArrowRight size={18} />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA: Can't Find a Role? ── */}
      <section className="career-cta">
        <div className="career-cta__inner">
          <motion.div
            className="career-cta__box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="career-cta__content">
              <motion.div
                className="career-cta__icon"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HandHeart size={28} className="text-[#0b6fa4]" />
              </motion.div>

              <h4 className="career-cta__title">{t("page.career.cantfind")}</h4>
              <p className="career-cta__desc">{t("page.career.sendresume")}</p>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href="/contact" className="career-cta__btn">
                  {t("page.career.contacthr")}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
