"use client";

import React from "react";
import Link from "next/link";
import { Activity, Shield, Zap, Microscope, ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function DiagnosticServicesHub() {
  const { t, language } = useLanguage();

  const categories = [
    {
      title: language === 'en' ? "Browse by Habit" : "आदत के अनुसार",
      desc: language === 'en' ? "Lifestyle-based screenings for smoking, stress, and routine patterns." : "धूम्रपान, तनाव और नियमित पैटर्न के लिए जीवनशैली-आधारित स्क्रीनिंग।",
      href: "/diagnostic-services/by-habit",
      icon: Activity,
      color: "blue",
      stats: "20+ Habit Checks"
    },
    {
      title: language === 'en' ? "Browse by Risk" : "जोखिम के अनुसार",
      desc: language === 'en' ? "Targeted diagnostics for specific clinical risks like Diabetes or Heart disease." : "मधुमेह या हृदय रोग जैसे विशिष्ट नैदानिक ​​जोखिमों के लिए लक्षित निदान।",
      href: "/diagnostic-services/by-risk",
      icon: Shield,
      color: "rose",
      stats: "30+ Risk Profiles"
    },
    {
      title: language === 'en' ? "Health Packages" : "स्वास्थ्य पैकेज",
      desc: language === 'en' ? "Comprehensive full-body checkups curated for all age groups and needs." : "सभी आयु समूहों और आवश्यकताओं के लिए क्यूरेट किया गया व्यापक फुल-बॉडी चेकअप।",
      href: "/diagnostic-services/packages",
      icon: Zap,
      color: "orange",
      stats: "15+ Bundled Plans"
    }
  ];

  return (
    <main className="bg-neutral-50 min-h-screen overflow-hidden">
      
      {/* ── Hero ── */}
      <section className="relative bg-[#005a8d] pt-32 pb-40 lg:pt-40 lg:pb-48">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-bold uppercase tracking-widest mb-8">
                <Microscope size={16} className="text-sky-300" />
                <span>{language === 'en' ? "State-of-the-Art Diagnostics" : "अत्याधुनिक डायग्नोस्टिक्स"}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Precision <span className="text-sky-300 italic font-medium">Diagnosis</span>,<br />
                Personalized Care.
              </h1>
              
              <p className="text-lg md:text-xl text-sky-100 max-w-xl leading-relaxed mb-10 font-medium">
                Karuna Hospital partners with leading laboratories to provide end-to-end clinical assessments. Choose the right path for your health screening below.
              </p>

              <div className="flex flex-wrap gap-6 bg-white/5 p-6 rounded-3xl border border-white/10">
                 <div className="flex items-center gap-3 text-white font-bold">
                   <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                     <CheckCircle2 size={16} className="text-emerald-400" />
                   </div>
                   <span>99.9% Accuracy</span>
                 </div>
                 <div className="flex items-center gap-3 text-white font-bold">
                   <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                     <CheckCircle2 size={16} className="text-emerald-400" />
                   </div>
                   <span>24/7 Processing</span>
                 </div>
                 <div className="flex items-center gap-3 text-white font-bold">
                   <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                     <CheckCircle2 size={16} className="text-emerald-400" />
                   </div>
                   <span>Digital Reports</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative lg:-mr-12"
            >
               <div className="w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden border-[12px] border-white/10 shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1579152313420-55c3f5903b60?auto=format&fit=crop&q=80&w=2000" alt="Diagnostic Lab" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005a8d]/60 via-transparent to-transparent"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Categories Hub ── */}
      <section className="relative z-20 -mt-20 lg:-mt-24 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
             const colorMap: Record<string, string> = {
                blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
                orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
             };
             
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
               >
                 <Link href={cat.href} className="group block h-full bg-white rounded-[3rem] p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,90,141,0.2)] transition-all duration-500 border border-neutral-100 hover:-translate-y-2 relative overflow-hidden">
                    
                    <span className="absolute -bottom-10 -right-10 text-[10rem] font-black text-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                      0{i+1}
                    </span>

                    <div className={`relative z-10 w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${colorMap[cat.color]}`}>
                       <cat.icon size={32} strokeWidth={1.5} />
                    </div>

                    <h2 className="relative z-10 text-3xl font-bold text-neutral-900 mb-4 group-hover:text-[#005a8d] transition-colors">
                      {cat.title}
                    </h2>
                    
                    <p className="relative z-10 text-gray-500 leading-relaxed mb-10 font-medium h-[4.5rem]">
                      {cat.desc}
                    </p>

                    <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
                       <span className="text-sm font-black uppercase tracking-widest text-[#005a8d]">
                         {cat.stats}
                       </span>
                       <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-[#005a8d] group-hover:text-white transition-all duration-300">
                         <ArrowRight size={20} />
                       </div>
                    </div>
                 </Link>
               </motion.div>
             );
          })}
        </div>
      </section>

      {/* ── Trust & Authority Block ── */}
      <section className="py-20 lg:py-32 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#002f4b] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                         <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
                <div>
                    <h2 className="text-4xl font-extrabold text-white mb-10 leading-tight">
                      Why our <span className="text-sky-300 italic font-medium">Clinical Assessments</span> stand out.
                    </h2>
                   <div className="space-y-8">
                      <div className="flex gap-6 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                         <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="text-sky-300" size={28} />
                         </div>
                         <div>
                             <h4 className="text-xl font-bold text-white mb-2">Global Standards</h4>
                             <p className="text-white/70 text-base leading-relaxed font-medium">Our clinical diagnostic protocols are aligned with NABH and ISO benchmarks for total safety.</p>
                         </div>
                      </div>
                      <div className="flex gap-6 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                         <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="text-sky-300" size={28} />
                         </div>
                         <div>
                             <h4 className="text-xl font-bold text-white mb-2">Expert Interpretation</h4>
                             <p className="text-white/70 text-base leading-relaxed font-medium">Every report is reviewed by specialized pathologists and MD physicians before release.</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-white p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-5xl font-black text-[#005a8d] mb-3 italic">12h</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">TAT for Routine</span>
                   </div>
                   <div className="bg-white p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-5xl font-black text-[#005a8d] mb-3 italic">3k+</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Tests Available</span>
                   </div>
                   <div className="bg-white p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-5xl font-black text-[#005a8d] mb-3 italic">24/7</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Lab Availability</span>
                   </div>
                   <div className="bg-white p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                      <Heart className="text-rose-500 mb-3" size={48} strokeWidth={1.5} />
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Patient First</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Search/Help CTA ── */}
      <section className="py-20 lg:py-24 bg-neutral-50 text-center px-4">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-extrabold text-neutral-900 mb-6">Need Assistance?</h2>
           <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
             Need help choosing the right test? Our expert clinical team is available for guidance.
           </p>
           <Link href="/contact" className="px-10 py-5 bg-[#005a8d] hover:bg-[#00395c] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 hover:-translate-y-1">
             Speak with a Specialist <ArrowRight size={20} />
           </Link>
        </div>
      </section>
    </main>
  );
}
