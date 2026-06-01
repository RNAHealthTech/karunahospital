"use client";

import { useState, useRef, FormEvent } from "react";
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
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerPage() {
  const { t } = useLanguage();

  // Animation variants for scroll-triggered effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "circOut" as const },
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
      title: "Consultant - General Medicine",
      department: "Internal Medicine",
      type: "Full Time",
      location: "Karuna Hospital",
    },
    {
      id: 2,
      title: "Senior Resident - Pediatrics",
      department: "Pediatrics & Neonatology",
      type: "Full Time",
      location: "Karuna Hospital",
    },
    {
      id: 3,
      title: "ICU Staff Nurse",
      department: "Critical Care",
      type: "Full Time",
      location: "ICU Ward",
    },
    {
      id: 4,
      title: "Gynecologist",
      department: "Maternity",
      type: "Full Time / Visiting",
      location: "Maternity Wing",
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: Star,
      iconBg: "bg-sky-100",
      iconColor: "text-[#0b6fa4]",
      title: t("page.career.progrowth"),
      description: t("page.career.progrowth.desc"),
    },
    {
      icon: Users,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: t("page.career.collab.env"),
      description: t("page.career.collab.env.desc"),
    },
    {
      icon: Award,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      title: t("page.career.excellence"),
      description: t("page.career.excellence.desc"),
    },
    {
      icon: Zap,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      title: t("page.career.tech"),
      description: t("page.career.tech.desc"),
    },
  ];

  // Form states and handlers
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setSubmitStatus("success");
      // Reset fields
      setFormData({ name: "", phone: "", coverLetter: "" });
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span>{t("page.career.badge")}</span>
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
                <span className="career-culture__label-text">{t("page.career.joinus")}</span>
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
                  <p className="flex items-center gap-2 text-sm sm:text-base">
                    <Heart size={18} className="text-rose-400 shrink-0" />
                    "{t("page.career.quote")}"
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
              {t("page.career.openings.p")}
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
              {jobs.map((job) => (
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
            <div className="career-cta__grid">
              {/* Left side: content */}
              <div className="career-cta__text-side">
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
                <p className="career-cta__desc" style={{ marginBottom: 0 }}>
                  {t("page.career.sendresume")}
                </p>
              </div>

              {/* Right side: form */}
              <div className="career-cta__form-side">
                {submitStatus === "success" && (
                  <div className="career-form__status career-form__status--success">
                    <CheckCircle size={18} className="shrink-0" />
                    <span>{t("page.career.form.success")}</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="career-form__status career-form__status--error">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{t("page.career.form.error")}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Name field */}
                  <div className="career-form__group">
                    <label htmlFor="career-form-name" className="career-form__label">
                      {t("page.career.form.name")} <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="career-form-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("page.career.form.name.placeholder")}
                      className="career-form__input"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="career-form__group">
                    <label htmlFor="career-form-phone" className="career-form__label">
                      {t("page.career.form.phone")} <span>*</span>
                    </label>
                    <input
                      type="tel"
                      id="career-form-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("page.career.form.phone.placeholder")}
                      className="career-form__input"
                    />
                  </div>

                  {/* Cover Letter field */}
                  <div className="career-form__group">
                    <label htmlFor="career-form-cover" className="career-form__label">
                      {t("page.career.form.cover")}
                    </label>
                    <textarea
                      id="career-form-cover"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder={t("page.career.form.cover.placeholder")}
                      className="career-form__textarea"
                    />
                  </div>

                  {/* Resume field */}
                  <div className="career-form__group">
                    <label className="career-form__label">
                      {t("page.career.form.resume")} <span>*</span>
                    </label>
                    <input
                      type="file"
                      id="career-form-resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="career-form__file-upload"
                    >
                      <Upload size={20} className="career-form__file-icon shrink-0" />
                      <span className="career-form__file-text truncate max-w-full">
                        {resumeFile ? resumeFile.name : t("page.career.form.resume.placeholder")}
                      </span>
                      {!resumeFile && (
                        <span className="career-form__file-hint">
                          (PDF, DOC, DOCX)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="career-form__submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
                          <path d="M21 12a9 9 0 11-6.22-8.55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <span>{t("page.career.form.submitting")}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("page.career.form.submit")}</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
