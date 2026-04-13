"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Newspaper, Share2 } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();

  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
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
            <Newspaper size={14} />
            <span>Clinical Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero__title"
          >
            {params.slug
              .toString()
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 font-semibold text-white/70"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Oct 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 size={16} />
              <span>Share Insights</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="section bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-12 text-center shadow-sm md:p-16">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-white shadow-sm">
              <Clock size={40} />
            </div>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900">
              Article Coming Soon
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">
              Our clinical experts are currently finalizing this research
              article on{" "}
              <strong className="text-[var(--brand-primary)]">
                {params.slug}
              </strong>
              . We are committed to providing evidence-based healthcare insights
              for our community.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/news"
                className="rounded-lg bg-[var(--brand-primary)] px-6 py-3 font-medium text-white transition duration-200 hover:scale-105"
              >
                Browse Hospital News
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-6 py-3 font-medium text-neutral-700 transition duration-200 hover:bg-neutral-50"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
