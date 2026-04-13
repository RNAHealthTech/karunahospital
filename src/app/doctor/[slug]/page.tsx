"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import {
  ArrowLeft,
  Award,
  BookOpen,
  BriefcaseMedical,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { doctorsData } from "@/data/doctors-data";

export default function DoctorProfilePage() {
  const { slug } = useParams();
  const { t } = useLanguage();

  const doctor = doctorsData.find((d) => d.slug === slug);
  if (!doctor) notFound();

  return (
    <main>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="dp-hero">
        <div className="dp-hero__pattern" aria-hidden="true" />
        <div className="dp-hero__glow" aria-hidden="true" />

        <div className="dp-hero__inner">
          {/* Back link */}
          <Link href="/find-a-doctor" className="dp-hero__back">
            <ArrowLeft size={17} />
            {t("page.doctor.back")}
          </Link>

          <div className="dp-hero__layout">
            {/* Portrait */}
            <div className="dp-portrait">
              <div className="dp-portrait__frame">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="dp-portrait__img"
                  />
                ) : (
                  <div className="dp-portrait__fallback">
                    <Stethoscope size={72} />
                  </div>
                )}
              </div>
              <div className="dp-portrait__badge">
                <CheckCircle2 size={15} />
                Verified Expert
              </div>
            </div>

            {/* Info */}
            <div className="dp-info">
              <div className="dp-info__dept">
                <Stethoscope size={14} />
                {doctor.department}
              </div>

              <h1 className="dp-info__name">{doctor.name}</h1>

              <p className="dp-info__tagline">
                Senior {doctor.department} specialist at Karuna Hospital,
                Dilshad Garden, Delhi — dedicated to providing compassionate,
                evidence-based medical care.
              </p>

              {/* Stats */}
              <div className="dp-stats">
                <div className="dp-stat">
                  <div className="dp-stat__icon">
                    <BriefcaseMedical size={22} />
                  </div>
                  <div>
                    <span className="dp-stat__val">{doctor.experience}+</span>
                    <span className="dp-stat__lbl">
                      {t("page.doctor.years")} Exp
                    </span>
                  </div>
                </div>

                <div className="dp-stat">
                  <div className="dp-stat__icon">
                    <Users size={22} />
                  </div>
                  <div>
                    <span className="dp-stat__val">5,000+</span>
                    <span className="dp-stat__lbl">Patients</span>
                  </div>
                </div>

                <div className="dp-stat">
                  <div className="dp-stat__icon">
                    <Star size={22} />
                  </div>
                  <div>
                    <span className="dp-stat__val">4.9</span>
                    <span className="dp-stat__lbl">Rating</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="dp-cta">
                <Link href="/contact" className="dp-btn-primary">
                  <Calendar size={19} />
                  {t("page.doctor.book")}
                </Link>
                <a href="tel:+919873754555" className="dp-btn-ghost">
                  <Phone size={19} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BODY – MAIN + SIDEBAR
      ═══════════════════════════════════════════ */}
      <section className="dp-body">
        <div className="dp-body__inner">
          {/* Left — detail cards */}
          <div className="dp-main">
            {/* About */}
            <div className="dp-card">
              <div className="dp-card__head">
                <div className="dp-card__icon dp-card__icon--blue">
                  <Heart size={24} />
                </div>
                <h2 className="dp-card__title">About {doctor.name}</h2>
              </div>
              <p className="dp-card__text">
                {doctor.name} is a highly experienced {doctor.department}{" "}
                specialist practicing at Karuna Hospital, Dilshad Garden, Delhi.
                With over {doctor.experience} years of dedicated clinical
                practice, the doctor has earned a reputation for providing
                accurate diagnoses, evidence-based treatments, and compassionate
                patient care. Patients trust their expertise for both routine
                consultations and complex medical conditions.
              </p>
            </div>

            {/* Education */}
            {doctor.education && doctor.education.length > 0 && (
              <div className="dp-card">
                <div className="dp-card__head">
                  <div className="dp-card__icon dp-card__icon--orange">
                    <GraduationCap size={24} />
                  </div>
                  <h2 className="dp-card__title">
                    {t("page.doctor.education")}
                  </h2>
                </div>
                <div className="dp-list">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="dp-list-item">
                      <div className="dp-list-item__dot" />
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Areas of Interest */}
            {doctor.interests && doctor.interests.length > 0 && (
              <div className="dp-card">
                <div className="dp-card__head">
                  <div className="dp-card__icon dp-card__icon--rose">
                    <BookOpen size={24} />
                  </div>
                  <h2 className="dp-card__title">
                    {t("page.doctor.interests")}
                  </h2>
                </div>
                <div className="dp-tags">
                  {doctor.interests.map((interest, i) => (
                    <span key={i} className="dp-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Hospital Associations */}
            {doctor.hospitals && doctor.hospitals.length > 0 && (
              <div className="dp-card">
                <div className="dp-card__head">
                  <div className="dp-card__icon dp-card__icon--indigo">
                    <Building2 size={24} />
                  </div>
                  <h2 className="dp-card__title">
                    {t("page.doctor.associations")}
                  </h2>
                </div>
                <div className="dp-list">
                  {doctor.hospitals.map((hosp, i) => (
                    <div key={i} className="dp-list-item">
                      <Award className="dp-list-item__award" size={20} />
                      <span>{hosp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — sticky sidebar */}
          <aside className="dp-sidebar">
            {/* Contact card */}
            <div className="dp-sidebar-card">
              <h3 className="dp-sidebar-card__title">Book a Consultation</h3>
              <p className="dp-sidebar-card__sub">
                Get expert medical advice from {doctor.name}.
              </p>

              <div className="dp-sidebar-card__rows">
                <div className="dp-sidebar-card__row">
                  <div className="dp-sidebar-card__row-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="dp-sidebar-card__lbl">Phone</span>
                    <a
                      href="tel:+919873754555"
                      className="dp-sidebar-card__val"
                    >
                      9873754555
                    </a>
                  </div>
                </div>

                <div className="dp-sidebar-card__row">
                  <div className="dp-sidebar-card__row-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="dp-sidebar-card__lbl">Email</span>
                    <a
                      href="mailto:admin.karunahospital@gmail.com"
                      className="dp-sidebar-card__val"
                    >
                      admin@karunahospital.in
                    </a>
                  </div>
                </div>

                <div className="dp-sidebar-card__row">
                  <div className="dp-sidebar-card__row-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="dp-sidebar-card__lbl">Availability</span>
                    <span className="dp-sidebar-card__val">
                      Mon – Sat, 9 AM – 6 PM
                    </span>
                  </div>
                </div>

                <div className="dp-sidebar-card__row">
                  <div className="dp-sidebar-card__row-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="dp-sidebar-card__lbl">Location</span>
                    <span className="dp-sidebar-card__val">
                      Karuna Hospital, Dilshad Garden, Delhi
                    </span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="dp-sidebar-card__btn">
                <Calendar size={18} />
                {t("page.doctor.book")}
              </Link>
            </div>

            {/* Why Karuna card */}
            <div className="dp-sidebar-card dp-sidebar-card--dark">
              <div className="dp-dark-badge">
                <Award size={15} />
                Why Karuna Hospital?
              </div>
              <ul className="dp-dark-list">
                <li>
                  <CheckCircle2 size={17} className="dp-dark-list-icon" />
                  NABH Accredited &amp; Certified Hospital
                </li>
                <li>
                  <CheckCircle2 size={17} className="dp-dark-list-icon" />
                  24/7 Emergency &amp; Critical Care
                </li>
                <li>
                  <CheckCircle2 size={17} className="dp-dark-list-icon" />
                  50+ Experienced Specialists
                </li>
                <li>
                  <CheckCircle2 size={17} className="dp-dark-list-icon" />
                  Advanced Diagnostic Equipment
                </li>
                <li>
                  <CheckCircle2 size={17} className="dp-dark-list-icon" />
                  Affordable Care for Every Family
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="dp-cta-banner">
        <div className="dp-cta-banner__inner">
          <div className="dp-cta-banner__box">
            <div className="dp-cta-banner__copy">
              <h3>Need Expert Medical Advice?</h3>
              <p>
                Schedule your appointment with {doctor.name} today for
                personalised, world-class care.
              </p>
            </div>
            <div className="dp-cta-banner__actions">
              <Link href="/contact" className="dp-btn-primary">
                <Calendar size={19} />
                {t("page.doctor.book")}
              </Link>
              <a href="tel:+919873754555" className="dp-cta-phone">
                <Phone size={19} />
                9873754555
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
