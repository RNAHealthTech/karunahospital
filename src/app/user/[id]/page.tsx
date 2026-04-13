"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { User, ShieldCheck, Activity, PhoneCall, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function UserProfilePage() {
  const params = useParams();

  return (
    <main className="bg-neutral-50 min-h-screen pb-20">
      {/* Premium Hero */}
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
            <ShieldCheck size={14} />
            <span>Secure Patient Portal</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            Digital Health Dashboard
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero__subtitle"
          >
            Welcome back. We are currently upgrading our patient management system 
            to provide you with a unified digital healthcare experience.
          </motion.p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="section bg-white py-12 sm:py-16 lg:py-20 relative z-10 -mt-10 rounded-t-[2rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                 <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-10 md:p-14 text-center lg:text-left h-full">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[var(--brand-primary)] mb-8 shadow-sm border border-neutral-100 mx-auto lg:mx-0">
                       <User size={32} />
                    </div>
                    <h2 className="text-3xl font-semibold text-neutral-900 mb-4">Patient Profile: {params.id}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                      The Karuna Patient Portal is undergoing a major security and feature upgrade. Soon you will be able to book appointments, view diagnostic reports, and consult with doctors online.
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <Link href="/contact" className="px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-medium hover:scale-105 transition duration-200">
                         Book an Appointment
                      </Link>
                      <Link href="/" className="px-6 py-3 bg-white text-neutral-700 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-50 transition duration-200 inline-flex items-center">
                         <ArrowLeft size={18} className="mr-2" /> Back to Home
                      </Link>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col gap-6">
                 <div className="bg-[var(--brand-primary-dark)] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
                    <h3 className="font-bold text-xl mb-4">Need Help?</h3>
                    <p className="text-white/70 text-sm mb-8 leading-relaxed">
                       If you are looking for your recent reports or want to schedule an urgent visit, please contact our help desk.
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <PhoneCall size={18} />
                       </div>
                       <span className="font-bold text-lg">011-22112211</span>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-bold text-sm hover:gap-3 transition-all mt-4">
                       Contact Support <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
           </div>

           {/* Features Grid Preview */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Virtual Consultation', icon: <Activity />, desc: 'Expert advice from the comfort of your home.' },
                { title: 'Digital Reports', icon: <ShieldCheck />, desc: 'Access your diagnostic results instantly.' },
                { title: 'Health Timeline', icon: <Activity />, desc: 'Track your medical history in one place.' }
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-white border border-neutral-100 rounded-xl shadow-sm group hover:border-[var(--brand-primary)] hover:shadow-md transition duration-300">
                   <div className="w-12 h-12 rounded-lg bg-neutral-50 text-[var(--brand-primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition duration-300">
                      {feature.icon}
                   </div>
                   <h4 className="font-semibold text-neutral-900 mb-2">{feature.title}</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
