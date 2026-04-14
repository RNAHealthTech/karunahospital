
// New Code

"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Newspaper,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

// "use client";

// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, Calendar, Newspaper } from "lucide-react";

// import { useLanguage } from "@/context/LanguageContext";

// export default function NewsPage() {
//   const { t } = useLanguage();

//   return (
//     <main className="news-page min-h-screen bg-neutral-50 pb-20">
//       {/* Premium Internal Hero */}
//       <section className="hero hero--internal relative overflow-hidden">
//         <div className="hero__bg-gradient" aria-hidden="true" />
//         <div className="hero__orb hero__orb--1" aria-hidden="true" />
//         <div className="hero__orb hero__orb--2" aria-hidden="true" />

//         <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
//           >
//             <Newspaper size={16} />
//             <span>Latest Updates</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="mb-6 max-w-3xl text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl"
//           >
//             {t("page.news.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
//           >
//             Stay up to date with the latest clinical breakthroughs, community
//             service initiatives, and hospital notifications from Karuna.
//           </motion.p>
//         </div>
//       </section>

//       {/* News Grid Section */}
//       <section className="section py-12 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//             {[
//               {
//                 title:
//                   "Karuna Hospital Successfully Completes 10,000 Surgeries",
//                 date: "October 12, 2024",
//                 desc: "A massive milestone for our clinical excellence team as we cross the 10,000 successful surgeries mark, ensuring quality healthcare reaches everyone.",
//                 img: "/images/lab.png",
//               },
//               {
//                 title: "Free Health Checkup Camp Organized in East Delhi",
//                 date: "September 28, 2024",
//                 desc: "Our outreach team successfully screened over 500 local residents during the weekend health camp focusing on cardiovascular and diabetic health.",
//                 img: "/images/doctor.png",
//               },
//               {
//                 title: "New Advanced ICU Wing Inaugurated",
//                 date: "September 15, 2024",
//                 desc: "We are expanding our critical care capabilities with a newly inaugurated 50-bed advanced ICU wing equipped with the latest life-support systems.",
//                 img: "/images/lab.png",
//               },
//             ].map((news, i) => (
//               <motion.article
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="group flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition duration-300 hover:border-[var(--brand-primary)] hover:shadow-md"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={news.img}
//                     alt={news.title}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-widest text-[var(--brand-primary)] uppercase shadow-sm backdrop-blur-sm">
//                       Hospital News
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-1 flex-col p-6">
//                   <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
//                     <Calendar
//                       size={14}
//                       className="text-[var(--brand-primary)]"
//                     />
//                     <span>{news.date}</span>
//                   </div>

//                   <h2 className="mb-3 text-xl leading-snug font-semibold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)]">
//                     {news.title}
//                   </h2>

//                   <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
//                     {news.desc}
//                   </p>

//                   <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
//                     <span className="text-xs font-medium text-gray-500">
//                       4 Min Read
//                     </span>
//                     <button className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-primary)] transition-all hover:gap-2">
//                       {t("page.news.readfull")} <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>

//           {/* Premium Pagination */}
//           <div className="mt-12 flex items-center justify-center gap-2">
//             <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-gray-500 transition duration-200 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
//               <ArrowLeft size={18} />
//             </button>
//             <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-primary)] font-medium text-white shadow-sm">
//               1
//             </button>
//             <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white font-medium text-gray-700 transition duration-200 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
//               2
//             </button>
//             <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-gray-500 transition duration-200 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
//               <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// New Code

const newsData = [
  {
    title: "Karuna Hospital Successfully Completes 10,000 Surgeries",
    date: "October 12, 2024",
    category: "Milestone",
    readTime: "4 Min Read",
    desc: "A massive milestone for our clinical excellence team as we cross the 10,000 successful surgeries mark, ensuring quality healthcare reaches everyone in the region.",
    img: "/images/lab.png",
  },
  {
    title: "Free Health Checkup Camp Organized in East Delhi",
    date: "September 28, 2024",
    category: "Community",
    readTime: "3 Min Read",
    desc: "Our outreach team successfully screened over 500 local residents during the weekend health camp focusing on cardiovascular and diabetic health awareness.",
    img: "/images/doctor.png",
  },
  {
    title: "New Advanced ICU Wing Inaugurated",
    date: "September 15, 2024",
    category: "Expansion",
    readTime: "5 Min Read",
    desc: "We are expanding our critical care capabilities with a newly inaugurated 50-bed advanced ICU wing equipped with the latest life-support systems and monitoring technology.",
    img: "/images/lab.png",
  },
  {
    title: "Karuna Launches Telemedicine Services for Rural Patients",
    date: "August 30, 2024",
    category: "Innovation",
    readTime: "4 Min Read",
    desc: "Bridging the gap between urban healthcare and rural communities, Karuna Hospital launches a comprehensive telemedicine platform connecting patients with specialists from home.",
    img: "/images/doctor.png",
  },
  {
    title: "Annual Blood Donation Drive Collects Record Units",
    date: "August 10, 2024",
    category: "Community",
    readTime: "3 Min Read",
    desc: "This year's blood donation drive saw overwhelming participation with over 800 units collected, making it our most successful drive to date.",
    img: "/images/lab.png",
  },
  {
    title: "Karuna Hospital Receives National Healthcare Excellence Award",
    date: "July 22, 2024",
    category: "Award",
    readTime: "4 Min Read",
    desc: "Recognised for outstanding patient care, clinical innovation, and community outreach, Karuna Hospital proudly receives the National Healthcare Excellence Award 2024.",
    img: "/images/doctor.png",
  },
];

const categoryColors: { [key: string]: string } = {
  Milestone: "bg-blue-50 text-blue-700",
  Community: "bg-green-50 text-green-700",
  Expansion: "bg-purple-50 text-purple-700",
  Innovation: "bg-amber-50 text-amber-700",
  Award: "bg-rose-50 text-rose-700",
};

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <main className="news-page min-h-screen bg-neutral-50">
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__badge">
            <Newspaper size={13} />
            <span>{t("page.news.badge")}</span>
          </div>
          <h1 className="hero__title">
            {t("page.news.title") || "News & Announcements"}
          </h1>
          <p className="hero__subtitle">
            {t("page.news.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section__inner">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group mb-10 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-primary)] hover:shadow-md lg:flex"
          >
            <div className="relative h-64 overflow-hidden lg:h-auto lg:w-[42%] lg:flex-shrink-0">
              <img
                src={newsData[0].img}
                alt={newsData[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
              <span className="absolute top-4 left-4 rounded-full bg-[var(--brand-primary)] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                {t("page.news.featured")}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-center p-8">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={
                    "rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase " +
                    (categoryColors[newsData[0].category] ||
                      "bg-neutral-100 text-neutral-600")
                  }
                >
                  {t(`page.news.${newsData[0].category.toLowerCase()}`) || newsData[0].category}
                </span>
              </div>
              <h2 className="mb-4 text-2xl leading-snug font-bold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)] lg:text-3xl">
                {newsData[0].title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-600 lg:text-base">
                {newsData[0].desc}
              </p>
              <div className="flex items-center justify-between border-t border-neutral-100 pt-5">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Calendar
                      size={13}
                      className="text-[var(--brand-primary)]"
                    />
                    {newsData[0].date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Clock size={13} className="text-[var(--brand-primary)]" />
                    {newsData[0].readTime}
                  </span>
                </div>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] transition-all hover:gap-2.5">
                  {t("page.news.readfull")}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.article>

          {/* News Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsData.slice(1).map(function (news, i) {
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-primary)] hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className={
                        "absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase " +
                        (categoryColors[news.category] ||
                          "bg-white text-neutral-700")
                      }
                    >
                      {t(`page.news.${news.category.toLowerCase()}`) || news.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar
                          size={12}
                          className="text-[var(--brand-primary)]"
                        />
                        {news.date}
                      </span>
                      <span className="h-3 w-px bg-neutral-200" />
                      <span className="flex items-center gap-1.5">
                        <Clock
                          size={12}
                          className="text-[var(--brand-primary)]"
                        />
                        {news.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 line-clamp-2 text-base leading-snug font-bold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)]">
                      {news.title}
                    </h2>

                    <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-500">
                      {news.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-end border-t border-neutral-100 pt-4">
                      <button className="flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] transition-all hover:gap-2.5">
                        {t("page.news.readfull")}
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>


          {/* Pagination */}
          <div className="mt-14 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500 transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
              <ArrowLeft size={17} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-sm font-semibold text-white shadow-sm">
              1
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-700 transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-700 transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
              3
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500 transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
