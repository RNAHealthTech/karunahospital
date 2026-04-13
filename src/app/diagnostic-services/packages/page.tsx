"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Check,
  Heart,
  PhoneCall,
  Shield,
  Thermometer,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const packages = [
  {
    id: "silver",
    key: "nav.diag.pkg.silver",
    price: 2499,
    oldPrice: 4999,
    discount: "50%",
    tests: 60,
    icon: <Activity size={24} />,
    color: "blue",
  },
  {
    id: "gold",
    key: "nav.diag.pkg.gold",
    price: 3999,
    oldPrice: 7999,
    discount: "50%",
    tests: 85,
    icon: <Shield size={24} />,
    color: "rose",
  },
  {
    id: "diamond",
    key: "nav.diag.pkg.diamond",
    price: 7999,
    oldPrice: 15999,
    discount: "50%",
    tests: 120,
    icon: <Activity size={24} />,
    color: "purple",
  },
  {
    id: "platinum",
    key: "nav.diag.pkg.platinum",
    price: 5999,
    oldPrice: 11999,
    discount: "50%",
    tests: 105,
    icon: <Activity size={24} />,
    color: "purple",
  },
  {
    id: "cardiac",
    key: "nav.diag.pkg.cardiac",
    price: 3499,
    oldPrice: 5999,
    discount: "40%",
    tests: 12,
    icon: <Heart size={24} />,
    color: "orange",
  },
  {
    id: "senior",
    key: "nav.diag.pkg.senior",
    price: 2999,
    oldPrice: 5499,
    discount: "45%",
    tests: 70,
    icon: <Thermometer size={24} />,
    color: "green",
  },
  {
    id: "woman",
    key: "nav.diag.pkg.woman",
    price: 3299,
    oldPrice: 6299,
    discount: "48%",
    tests: 75,
    icon: <Heart size={24} />,
    color: "teal",
  },
  {
    id: "influenza",
    key: "nav.diag.pkg.influenza",
    price: 4500,
    oldPrice: 6000,
    discount: "25%",
    tests: 5,
    icon: <Activity size={24} />,
    color: "blue",
  },
  {
    id: "mbg",
    key: "nav.diag.pkg.mbg",
    price: 4999,
    oldPrice: 8999,
    discount: "44%",
    tests: 95,
    icon: <Shield size={24} />,
    color: "teal",
  },
  {
    id: "anemia-profile",
    key: "nav.diag.pkg.anemia",
    price: 1999,
    oldPrice: 3500,
    discount: "42%",
    tests: 15,
    icon: <Heart size={24} />,
    color: "rose",
  },
  {
    id: "cancer-screening",
    key: "nav.diag.pkg.cancer",
    price: 5500,
    oldPrice: 9000,
    discount: "38%",
    tests: 12,
    icon: <Shield size={24} />,
    color: "rose",
  },
  {
    id: "health-screen-1",
    key: "nav.diag.pkg.health1",
    price: 1499,
    oldPrice: 2499,
    discount: "40%",
    tests: 45,
    icon: <Activity size={24} />,
    color: "blue",
  },
];

export default function PackagesPage() {
  const { t } = useLanguage();

  return (
    <main className="diagnostic-page min-h-screen bg-neutral-50">
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
            <Shield size={14} />
            <span>Premium Healthcare</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            {t("nav.diagnostic.packages")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle"
          >
            Comprehensive health checkup packages designed for you and your
            family. Regular screening helps in early detection and better
            management.
          </motion.p>
        </div>
      </section>

      {/* Packages Grid Section */}
      <section className="section">
        <div className="section__inner">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group h-full"
              >
                <div className="shadow-soft relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-primary)] hover:shadow-xl">
                  {/* Modern Discount Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className="rounded-full bg-[var(--brand-primary)] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm">
                      {pkg.discount} OFF
                    </span>
                  </div>

                  <div className="flex-1 p-8 pb-4">
                    <div className="mb-6 flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-50 text-[var(--brand-primary)] transition-colors group-hover:bg-[var(--brand-primary)] group-hover:text-white`}
                      >
                        {pkg.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl leading-tight font-bold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)]">
                          {t(pkg.key)}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Check size={14} className="text-green-500" />
                          <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase">
                            {pkg.tests} Tests Included
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 rounded-xl border border-neutral-100 bg-neutral-50/50 p-4">
                      <div className="mb-1 flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[var(--brand-accent)]">
                          ₹{pkg.price}
                        </span>
                        {pkg.oldPrice && (
                          <span className="text-sm text-neutral-400 line-through">
                            ₹{pkg.oldPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                        (Tension Free Screening)
                      </p>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                      Full body evaluation covering vital organs like heart,
                      kidneys, liver, and basic blood parameters for overall
                      wellness.
                    </p>
                  </div>

                  <div className="mt-auto p-8 pt-0">
                    <Link
                      href="/contact"
                      className="btn btn--primary group/btn w-full justify-center py-3 text-sm"
                    >
                      <span>View Full Details</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Info Section */}
      <section className="section border-t border-neutral-100 bg-white">
        <div className="section__inner">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="shadow-soft group relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-10 md:p-14">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-[var(--brand-primary)] opacity-5 blur-3xl transition-all group-hover:scale-110"></div>
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-1 w-10 rounded-full bg-[var(--brand-primary)]"></div>
                  <span className="text-sm font-bold tracking-widest text-[var(--brand-primary)] uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="section__title mb-8 !text-left !text-3xl">
                  Trust Your Health with the Experts
                </h2>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      icon: <Shield size={20} />,
                      text: "NABL Accredited Laboratory",
                    },
                    {
                      icon: <Activity size={20} />,
                      text: "Home Sample Collection Available",
                    },
                    {
                      icon: <Check size={20} />,
                      text: "Digital Reports within 24 Hours",
                    },
                    {
                      icon: <PhoneCall size={20} />,
                      text: "Free Doctor Consultation on Reports",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="group/item flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--brand-primary)] shadow-sm transition-transform group-hover/item:scale-110">
                        {feature.icon || <Check size={20} />}
                      </div>
                      <span className="font-semibold text-neutral-700">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn btn--primary mt-12 px-8 py-3"
                >
                  Book a Test Now
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/lab.png"
                  alt="Laboratory"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-10">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                    <h4 className="mb-2 text-2xl font-bold text-white">
                      Accuracy You Can Trust
                    </h4>
                    <p className="text-sm text-white/80 italic">
                      99.9% accurate results with state-of-the-art diagnostic
                      equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

//  New Code
// "use client";

// const packages = [
//   {
//     id: "silver",
//     key: "nav.diag.pkg.silver",
//     price: 2499,
//     oldPrice: 4999,
//     discount: "50%",
//     tests: 60,
//     icon: <Activity size={24} />,
//     color: "blue",
//     gradient: "from-blue-50 to-indigo-50",
//     border: "border-blue-200",
//     iconBg: "bg-blue-100 text-blue-600",
//     iconHover: "group-hover:bg-blue-600 group-hover:text-white",
//   },
//   {
//     id: "gold",
//     key: "nav.diag.pkg.gold",
//     price: 3999,
//     oldPrice: 7999,
//     discount: "50%",
//     tests: 85,
//     icon: <Shield size={24} />,
//     color: "rose",
//     gradient: "from-rose-50 to-pink-50",
//     border: "border-rose-200",
//     iconBg: "bg-rose-100 text-rose-600",
//     iconHover: "group-hover:bg-rose-600 group-hover:text-white",
//   },
//   {
//     id: "diamond",
//     key: "nav.diag.pkg.diamond",
//     price: 7999,
//     oldPrice: 15999,
//     discount: "50%",
//     tests: 120,
//     icon: <Activity size={24} />,
//     color: "purple",
//     gradient: "from-purple-50 to-violet-50",
//     border: "border-purple-200",
//     iconBg: "bg-purple-100 text-purple-600",
//     iconHover: "group-hover:bg-purple-600 group-hover:text-white",
//   },
//   {
//     id: "platinum",
//     key: "nav.diag.pkg.platinum",
//     price: 5999,
//     oldPrice: 11999,
//     discount: "50%",
//     tests: 105,
//     icon: <Activity size={24} />,
//     color: "purple",
//     gradient: "from-violet-50 to-fuchsia-50",
//     border: "border-violet-200",
//     iconBg: "bg-violet-100 text-violet-600",
//     iconHover: "group-hover:bg-violet-600 group-hover:text-white",
//   },
//   {
//     id: "cardiac",
//     key: "nav.diag.pkg.cardiac",
//     price: 3499,
//     oldPrice: 5999,
//     discount: "40%",
//     tests: 12,
//     icon: <Heart size={24} />,
//     color: "orange",
//     gradient: "from-orange-50 to-amber-50",
//     border: "border-orange-200",
//     iconBg: "bg-orange-100 text-orange-600",
//     iconHover: "group-hover:bg-orange-600 group-hover:text-white",
//   },
//   {
//     id: "senior",
//     key: "nav.diag.pkg.senior",
//     price: 2999,
//     oldPrice: 5499,
//     discount: "45%",
//     tests: 70,
//     icon: <Thermometer size={24} />,
//     color: "green",
//     gradient: "from-green-50 to-emerald-50",
//     border: "border-green-200",
//     iconBg: "bg-green-100 text-green-600",
//     iconHover: "group-hover:bg-green-600 group-hover:text-white",
//   },
//   {
//     id: "woman",
//     key: "nav.diag.pkg.woman",
//     price: 3299,
//     oldPrice: 6299,
//     discount: "48%",
//     tests: 75,
//     icon: <Heart size={24} />,
//     color: "teal",
//     gradient: "from-teal-50 to-cyan-50",
//     border: "border-teal-200",
//     iconBg: "bg-teal-100 text-teal-600",
//     iconHover: "group-hover:bg-teal-600 group-hover:text-white",
//   },
//   {
//     id: "influenza",
//     key: "nav.diag.pkg.influenza",
//     price: 4500,
//     oldPrice: 6000,
//     discount: "25%",
//     tests: 5,
//     icon: <Activity size={24} />,
//     color: "blue",
//     gradient: "from-sky-50 to-blue-50",
//     border: "border-sky-200",
//     iconBg: "bg-sky-100 text-sky-600",
//     iconHover: "group-hover:bg-sky-600 group-hover:text-white",
//   },
//   {
//     id: "mbg",
//     key: "nav.diag.pkg.mbg",
//     price: 4999,
//     oldPrice: 8999,
//     discount: "44%",
//     tests: 95,
//     icon: <Shield size={24} />,
//     color: "teal",
//     gradient: "from-cyan-50 to-teal-50",
//     border: "border-cyan-200",
//     iconBg: "bg-cyan-100 text-cyan-600",
//     iconHover: "group-hover:bg-cyan-600 group-hover:text-white",
//   },
//   {
//     id: "anemia-profile",
//     key: "nav.diag.pkg.anemia",
//     price: 1999,
//     oldPrice: 3500,
//     discount: "42%",
//     tests: 15,
//     icon: <Heart size={24} />,
//     color: "rose",
//     gradient: "from-pink-50 to-rose-50",
//     border: "border-pink-200",
//     iconBg: "bg-pink-100 text-pink-600",
//     iconHover: "group-hover:bg-pink-600 group-hover:text-white",
//   },
//   {
//     id: "cancer-screening",
//     key: "nav.diag.pkg.cancer",
//     price: 5500,
//     oldPrice: 9000,
//     discount: "38%",
//     tests: 12,
//     icon: <Shield size={24} />,
//     color: "rose",
//     gradient: "from-red-50 to-rose-50",
//     border: "border-red-200",
//     iconBg: "bg-red-100 text-red-600",
//     iconHover: "group-hover:bg-red-600 group-hover:text-white",
//   },
//   {
//     id: "health-screen-1",
//     key: "nav.diag.pkg.health1",
//     price: 1499,
//     oldPrice: 2499,
//     discount: "40%",
//     tests: 45,
//     icon: <Activity size={24} />,
//     color: "blue",
//     gradient: "from-indigo-50 to-blue-50",
//     border: "border-indigo-200",
//     iconBg: "bg-indigo-100 text-indigo-600",
//     iconHover: "group-hover:bg-indigo-600 group-hover:text-white",
//   },
// ];

// export default function PackagesPage() {
//   const { t } = useLanguage();

//   return (
//     <main className="diagnostic-page min-h-screen bg-neutral-50">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="hero__inner text-left">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hero__badge"
//           >
//             <Shield size={14} />
//             <span>Premium Healthcare</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="hero__title"
//           >
//             {t("nav.diagnostic.packages")}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hero__subtitle"
//           >
//             Comprehensive health checkup packages designed for you and your
//             family. Regular screening helps in early detection and better
//             management of your wellness journey.
//           </motion.p>

//           {/* Trust Badges */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="hero__trust mt-6 flex flex-wrap gap-4"
//           >
//             <div className="hero__trust-item flex items-center gap-2">
//               <Check size={16} className="text-green-400" />
//               <span>NABL Accredited</span>
//             </div>
//             <div className="hero__trust-item flex items-center gap-2">
//               <Check size={16} className="text-green-400" />
//               <span>Home Collection</span>
//             </div>
//             <div className="hero__trust-item flex items-center gap-2">
//               <Check size={16} className="text-green-400" />
//               <span>24hr Reports</span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <div className="stats-bar">
//         <div className="stats-bar__inner">
//           {[
//             {
//               value: "50K+",
//               label: "Happy Patients",
//               icon: <Heart size={24} />,
//             },
//             {
//               value: "120+",
//               label: "Tests Available",
//               icon: <Activity size={24} />,
//             },
//             {
//               value: "99.9%",
//               label: "Accuracy Rate",
//               icon: <Shield size={24} />,
//             },
//             { value: "24/7", label: "Support", icon: <PhoneCall size={24} /> },
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="stat-item"
//             >
//               <div className="stat-item__icon">{stat.icon}</div>
//               <div>
//                 <div className="stat-item__value">{stat.value}</div>
//                 <div className="stat-item__label">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Packages Grid Section */}
//       <section className="section">
//         <div className="section__inner">
//           {/* Section Header */}
//           <div className="section__header mb-12 text-left">
//             <div className="mb-4 flex items-center gap-3">
//               <div className="h-1 w-12 rounded-full bg-[var(--brand-primary)]"></div>
//               <span className="text-sm font-bold tracking-widest text-[var(--brand-primary)] uppercase">
//                 Choose Your Package
//               </span>
//             </div>
//             <h2 className="section__title">Health Checkup Packages</h2>
//             <p className="section__subtitle">
//               Select from our range of comprehensive diagnostic packages
//               tailored to your specific health needs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {packages.map((pkg, index) => (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05, duration: 0.5 }}
//                 className="group h-full"
//               >
//                 <div
//                   className={`spec-card spec-card--spec-${pkg.color} relative flex h-full flex-col overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${pkg.border}`}
//                 >
//                   {/* Premium Badge */}
//                   <div className="absolute top-4 right-4 z-10">
//                     <span
//                       className={`inline-flex items-center gap-1 rounded-full bg-[var(--brand-accent)] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm`}
//                     >
//                       <Sparkles size={10} />
//                       {pkg.discount} OFF
//                     </span>
//                   </div>

//                   {/* Popular Badge for select packages */}
//                   {["gold", "diamond", "platinum"].includes(pkg.id) && (
//                     <div className="absolute top-4 left-4 z-10">
//                       <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-gold)] px-2.5 py-0.5 text-[9px] font-bold text-white uppercase shadow-sm">
//                         <Star size={10} fill="currentColor" />
//                         Popular
//                       </span>
//                     </div>
//                   )}

//                   <div className="flex-1 p-6 pb-4">
//                     {/* Icon & Title */}
//                     <div className="mb-5 flex items-start gap-4">
//                       <div
//                         className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${pkg.iconBg} ${pkg.iconHover}`}
//                       >
//                         {pkg.icon}
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <h3 className="mb-1.5 truncate text-lg font-bold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)]">
//                           {t(pkg.key)}
//                         </h3>
//                         <div className="flex items-center gap-1.5">
//                           <Check
//                             size={12}
//                             className="flex-shrink-0 text-green-500"
//                           />
//                           <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
//                             {pkg.tests} Tests
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Price Card */}
//                     <div className="mb-5 rounded-xl border border-neutral-100 bg-gradient-to-r from-neutral-50 to-white p-4">
//                       <div className="flex flex-wrap items-baseline gap-2">
//                         <span className="text-2xl font-black text-[var(--brand-accent)]">
//                           ₹{pkg.price.toLocaleString()}
//                         </span>
//                         {pkg.oldPrice && (
//                           <span className="text-sm text-neutral-400 line-through">
//                             ₹{pkg.oldPrice.toLocaleString()}
//                           </span>
//                         )}
//                         <span className="ml-auto rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
//                           Save ₹{(pkg.oldPrice - pkg.price).toLocaleString()}
//                         </span>
//                       </div>
//                       <p className="mt-1 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
//                         Tension Free Screening
//                       </p>
//                     </div>

//                     {/* Description */}
//                     <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-neutral-600">
//                       Comprehensive evaluation covering vital organs, blood
//                       parameters, and wellness markers for proactive health
//                       management.
//                     </p>

//                     {/* Features List */}
//                     <ul className="mb-4 space-y-2">
//                       {[
//                         "Digital Report in 24hrs",
//                         "Free Doctor Consultation",
//                         "Home Sample Collection",
//                       ].map((feature, i) => (
//                         <li
//                           key={i}
//                           className="flex items-start gap-2 text-xs text-neutral-600"
//                         >
//                           <Check
//                             size={14}
//                             className="mt-0.5 flex-shrink-0 text-[var(--brand-primary)]"
//                           />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* CTA Button */}
//                   <div className="mt-auto p-6 pt-0">
//                     <Link
//                       href="/contact"
//                       className="btn btn--primary group/btn w-full justify-center py-3 text-sm font-semibold"
//                     >
//                       <span>View Details</span>
//                       <ArrowRight
//                         size={14}
//                         className="transition-transform group-hover/btn:translate-x-1"
//                       />
//                     </Link>
//                   </div>

//                   {/* Hover Glow Effect */}
//                   <div
//                     className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${pkg.gradient}`}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* View All CTA */}
//           <div className="section__footer mt-12">
//             <Link
//               href="/contact"
//               className="btn btn--secondary inline-flex items-center gap-2 px-8 py-3"
//             >
//               <Zap size={16} />
//               <span>Need a Custom Package? Contact Us</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Trust & Info Section */}
//       <section className="section border-t border-neutral-100 bg-white">
//         <div className="section__inner">
//           <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
//             {/* Why Choose Us Card */}
//             <div className="order-2 lg:order-1">
//               <div className="shadow-soft group relative overflow-hidden rounded-2xl border border-neutral-100 bg-gradient-to-br from-neutral-50 to-white p-8 md:p-10">
//                 {/* Decorative Elements */}
//                 <div className="absolute top-0 right-0 -mt-20 -mr-20 h-40 w-40 rounded-full bg-[var(--brand-primary)] opacity-5 blur-3xl transition-all group-hover:scale-125"></div>
//                 <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-32 w-32 rounded-full bg-[var(--brand-accent)] opacity-5 blur-3xl"></div>

//                 <div className="relative z-10">
//                   <div className="mb-6 flex items-center gap-3">
//                     <div className="h-1 w-10 rounded-full bg-[var(--brand-primary)]"></div>
//                     <span className="text-sm font-bold tracking-widest text-[var(--brand-primary)] uppercase">
//                       Why Choose Us
//                     </span>
//                   </div>

//                   <h2 className="section__title mb-6 !text-left !text-2xl md:!text-3xl">
//                     Trust Your Health with the Experts
//                   </h2>

//                   <div className="flex flex-col gap-5">
//                     {[
//                       {
//                         icon: <Shield size={20} />,
//                         text: "NABL Accredited Laboratory",
//                         desc: "Internationally recognized quality standards",
//                       },
//                       {
//                         icon: <Activity size={20} />,
//                         text: "Home Sample Collection",
//                         desc: "Free pickup from your doorstep",
//                       },
//                       {
//                         icon: <Check size={20} />,
//                         text: "Digital Reports in 24 Hours",
//                         desc: "Secure, accessible anytime via app",
//                       },
//                       {
//                         icon: <PhoneCall size={20} />,
//                         text: "Free Doctor Consultation",
//                         desc: "Expert interpretation of your reports",
//                       },
//                     ].map((feature, i) => (
//                       <motion.div
//                         key={i}
//                         className="group/item flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-neutral-50"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: i * 0.1 }}
//                       >
//                         <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-100 bg-white text-[var(--brand-primary)] shadow-sm transition-transform group-hover/item:scale-110 group-hover/item:bg-[var(--brand-primary)] group-hover/item:text-white">
//                           {feature.icon}
//                         </div>
//                         <div>
//                           <span className="block font-semibold text-neutral-800 transition-colors group-hover/item:text-[var(--brand-primary)]">
//                             {feature.text}
//                           </span>
//                           <span className="text-sm text-neutral-500">
//                             {feature.desc}
//                           </span>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <Link
//                     href="/contact"
//                     className="btn btn--primary mt-8 inline-flex items-center gap-2 px-8 py-3"
//                   >
//                     <span>Book a Test Now</span>
//                     <ArrowRight size={16} />
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="order-1 lg:order-2">
//               <div className="group relative h-[420px] overflow-hidden rounded-2xl shadow-2xl">
//                 {/* Main Image */}
//                 <img
//                   src="/images/lab.png"
//                   alt="State-of-the-art diagnostic laboratory"
//                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   loading="lazy"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

//                 {/* Floating Info Card */}
//                 <div className="absolute right-6 bottom-6 left-6">
//                   <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
//                     <div className="mb-3 flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white">
//                         <Shield size={18} />
//                       </div>
//                       <h4 className="text-lg font-bold text-white">
//                         Accuracy You Can Trust
//                       </h4>
//                     </div>
//                     <p className="text-sm leading-relaxed text-white/90">
//                       99.9% accurate results with state-of-the-art diagnostic
//                       equipment and certified pathologists.
//                     </p>

//                     {/* Stats Row */}
//                     <div className="mt-4 flex gap-4 border-t border-white/20 pt-4">
//                       <div>
//                         <div className="text-xl font-bold text-white">15+</div>
//                         <div className="text-xs text-white/70">
//                           Years Experience
//                         </div>
//                       </div>
//                       <div>
//                         <div className="text-xl font-bold text-white">50K+</div>
//                         <div className="text-xs text-white/70">
//                           Tests Completed
//                         </div>
//                       </div>
//                       <div>
//                         <div className="text-xl font-bold text-white">4.9★</div>
//                         <div className="text-xs text-white/70">
//                           Patient Rating
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Corner Badge */}
//                 <div className="absolute top-4 right-4">
//                   <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-lg">
//                     <div className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
//                     <span className="text-xs font-semibold text-neutral-800">
//                       Live Reports
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="cta-section">
//         <div className="cta-section__bg"></div>
//         <div className="cta-section__inner">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center gap-4"
//           >
//             <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
//               <Heart size={16} className="text-[var(--brand-gold)]" />
//               <span className="text-sm font-medium text-white">
//                 Your Health, Our Priority
//               </span>
//             </div>

//             <h2 className="cta-section__title">
//               Ready to Take Control of Your Health?
//             </h2>

//             <p className="cta-section__subtitle">
//               Book your diagnostic package today and receive expert guidance
//               every step of the way.
//             </p>

//             <Link href="/contact" className="cta-section__btn">
//               <span>Schedule Your Checkup</span>
//               <ArrowRight size={18} />
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }
