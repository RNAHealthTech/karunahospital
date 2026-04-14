"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

import { Phone, Sparkles, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

const newsData = [
  {
    titleEn: "Karuna Hospital Launches New Interactive Patient Portal",
    titleHi: "करुणा अस्पताल ने नया इंटरैक्टिव पेशेंट पोर्टल लॉन्च किया",
    dateEn: "April 14, 2026",
    dateHi: "14 अप्रैल, 2026",
    categoryKey: "page.news.innovation",
    categoryGroup: "Innovation",
    readTimeEn: "3 min read",
    readTimeHi: "3 मिनट का पाठ",
    descEn: "We are thrilled to unveil our brand-new website and patient portal, designed to provide a smoother, more accessible digital experience for our patients and their families.",
    descHi: "हम अपनी बिल्कुल नई वेबसाइट और पेशेंट पोर्टल का अनावरण करते हुए रोमांचित हैं, जिसे हमारे रोगियों और उनके परिवारों के लिए एक सहज, अधिक सुलभ डिजिटल अनुभव प्रदान करने के लिए डिज़ाइन किया गया है।",
    img: "/images/lab.png",
  },
  {
    titleEn: "Real-time Appointment Booking Now Available Online",
    titleHi: "रियल-टाइम अपॉइंटमेंट बुकिंग अब ऑनलाइन उपलब्ध है",
    dateEn: "April 12, 2026",
    dateHi: "12 अप्रैल, 2026",
    categoryKey: "page.news.milestone",
    categoryGroup: "Milestone",
    readTimeEn: "2 min read",
    readTimeHi: "2 मिनट का पाठ",
    descEn: "Patients can now view doctor availability and book appointments instantly through our new digital scheduling system, available 24/7 on our website.",
    descHi: "मरीज अब हमारे नए डिजिटल शेड्यूलिंग सिस्टम के माध्यम से तुरंत डॉक्टरों की उपलब्धता देख सकते हैं और अपॉइंटमेंट बुक कर सकते हैं, जो हमारी वेबसाइट पर 24/7 उपलब्ध है।",
    img: "/images/doctor.png",
  },
  {
    titleEn: "Karuna Hospital Digital Transformation: New Online Resources",
    titleHi: "करुणा अस्पताल डिजिटल परिवर्तन: नए ऑनलाइन संसाधन",
    dateEn: "April 10, 2026",
    dateHi: "10 अप्रैल, 2026",
    categoryKey: "page.news.milestone",
    categoryGroup: "Milestone",
    readTimeEn: "4 min read",
    readTimeHi: "4 मिनट का पाठ",
    descEn: "In partnership with RNA HealthTech, we've launched comprehensive digital health resources, blogs, and department guides to help our patients stay informed and healthy.",
    descHi: "RNA HealthTech के साथ साझेदारी में, हमने अपने मरीजों को सूचित और स्वस्थ रहने में मदद करने के लिए व्यापक डिजिटल स्वास्थ्य संसाधन, ब्लॉग और विभाग गाइड लॉन्च किए हैं।",
    img: "/images/lab.png",
  },
  {
    titleEn: "Karuna Hospital Successfully Completes 10,000 Surgeries",
    titleHi: "करुणा अस्पताल ने सफलतापूर्वक 10,000 सर्जरी पूरी कीं",
    dateEn: "October 12, 2024",
    dateHi: "12 अक्टूबर, 2024",
    categoryKey: "page.news.milestone",
    categoryGroup: "Milestone",
    readTimeEn: "4 min read",
    readTimeHi: "4 मिनट का पाठ",
    descEn: "A massive milestone for our clinical excellence team as we cross the 10,000 successful surgeries mark, ensuring quality healthcare reaches everyone in the region.",
    descHi: "हमारी नैदानिक ​​उत्कृष्टता टीम के लिए एक बड़ी उपलब्धि जब हमने 10,000 सफल सर्जरी का आंकड़ा पार किया, जिससे क्षेत्र के सभी लोगों तक गुणवत्तापूर्ण स्वास्थ्य सेवा पहुंच सुनिश्चित हुई।",
    img: "/images/lab.png",
  },
  {
    titleEn: "Free Health Checkup Camp Organized in East Delhi",
    titleHi: "पूर्वी दिल्ली में मुफ्त स्वास्थ्य जांच शिविर का आयोजन",
    dateEn: "September 28, 2024",
    dateHi: "28 सितंबर, 2024",
    categoryKey: "page.news.community",
    categoryGroup: "Community",
    readTimeEn: "3 min read",
    readTimeHi: "3 मिनट का पाठ",
    descEn: "Our outreach team successfully screened over 500 local residents during the weekend health camp focusing on cardiovascular and diabetic health awareness.",
    descHi: "हमारी आउटरीच टीम ने कार्डियोवैस्कुलर और मधुमेह स्वास्थ्य जागरूकता पर केंद्रित सप्ताहांत स्वास्थ्य शिविर के दौरान 500 से अधिक स्थानीय निवासियों की सफलतापूर्वक जांच की।",
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

  const gridCards = newsData;

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
                    alt={useLanguage().language === 'en' ? news.titleEn : news.titleHi}
                    className="h-full w-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Category Badge */}
                  <span
                    className={`absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-2 text-[10px] font-bold tracking-wider uppercase shadow-md ${categoryStyles[news.categoryGroup]}`}
                  >
                    {t(news.categoryKey)}
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
                      <span className="whitespace-nowrap">{useLanguage().language === 'en' ? news.dateEn : news.dateHi}</span>
                    </span>
                    <span className="h-4 w-px flex-shrink-0 bg-neutral-200" />
                    <span className="flex items-center gap-2 text-neutral-500">
                      <Clock
                        size={13}
                        className="flex-shrink-0 text-[var(--brand-primary)]"
                      />
                      <span className="whitespace-nowrap">{useLanguage().language === 'en' ? news.readTimeEn : news.readTimeHi}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 px-2 text-center text-lg leading-snug font-bold text-neutral-900 transition-colors group-hover:text-[var(--brand-primary)]">
                    <span className="line-clamp-2 block min-h-[3rem]">
                      {useLanguage().language === 'en' ? news.titleEn : news.titleHi}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-1 px-3 text-center text-sm leading-relaxed text-neutral-500">
                    <span className="line-clamp-3 block">{useLanguage().language === 'en' ? news.descEn : news.descHi}</span>
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

          {/* Extra spacing below CTA section */}
          <div className="h-8" />

        </div>
      </section>
    </main>
  );
}