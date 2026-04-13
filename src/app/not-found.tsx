"use client";

import Link from "next/link";
import { Home, PhoneCall, Stethoscope, AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Premium Hero Style Error Section */}
      <section className="hero hero--internal relative overflow-hidden flex items-center justify-center text-center py-32">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        
        <div className="hero__inner">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mx-auto mb-10"
          >
            <AlertCircle size={48} className="text-white" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title text-[8rem] opacity-20 mb-[-4rem]"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero__subtitle !mb-12"
          >
            Sorry, the page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Let us help you find what you need.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/" className="px-6 py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-50 transition duration-200 inline-flex items-center">
              <Home size={18} className="mr-2" /> Back to Home
            </Link>
            <Link href="/find-a-doctor" className="px-6 py-3 bg-white/5 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 backdrop-blur-sm transition duration-200 inline-flex items-center">
              <Stethoscope size={18} className="mr-2" /> Find a Doctor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="section bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm group hover:border-[var(--brand-primary)] hover:shadow-md transition duration-300">
               <h3 className="font-bold text-xl text-neutral-900 mb-4 flex items-center gap-3">
                 <PhoneCall size={20} className="text-[var(--brand-primary)]" /> Emergency Support
               </h3>
               <p className="text-neutral-600 mb-6">If you are facing a medical emergency, please contact us immediately.</p>
               <span className="text-2xl font-extrabold text-[var(--brand-primary)]">011-22112211</span>
            </div>
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm group hover:border-[var(--brand-primary)] hover:shadow-md transition duration-300">
               <h3 className="font-bold text-xl text-neutral-900 mb-4 flex items-center gap-3">
                 <ArrowLeft size={20} className="text-[var(--brand-primary)]" /> Popular Sections
               </h3>
               <div className="flex flex-wrap gap-2">
                 {['Specialities', 'Diagnostic Services', 'About Karuna', 'Contact'].map(link => (
                   <Link key={link} href={`/${link.toLowerCase().replace(' ', '-')}`} className="px-4 py-2 bg-white border border-neutral-100 rounded-lg text-sm font-bold text-neutral-500 hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-all">
                     {link}
                   </Link>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
