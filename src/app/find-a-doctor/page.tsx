

"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Award,
  Calendar,
  ChevronRight,
  MapPin,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { doctorsData } from "@/data/doctors-data";

type Doctor = (typeof doctorsData)[number];

function getAbout(dept: string): string {
  const map: { [key: string]: string } = {
    "Internal Medicine":
      "Specialises in comprehensive adult care, managing complex medical conditions with a holistic, patient-centred approach at Karuna Hospital.",
    "Obstetrics and Gynaecology":
      "Dedicated to women's health across all life stages — from routine gynaecological care to high-risk pregnancies and maternal wellness.",
    Endocrinologist:
      "Expert in hormonal disorders including diabetes, thyroid conditions, and metabolic diseases, providing evidence-based treatment.",
    Psychiatrist:
      "Provides compassionate mental health care, treating anxiety, depression, and complex psychiatric conditions with empathy and expertise.",
    Dermatologist:
      "Specialist in skin, hair, and nail conditions offering both medical dermatology and aesthetic skin care services.",
    "Infectious Diseases":
      "Focuses on precise diagnosis and management of infectious and tropical diseases in adults and children.",
    "Laparoscopic/General Surgeon":
      "Skilled in minimally invasive laparoscopic procedures ensuring faster recovery, less pain, and optimal surgical outcomes.",
    Radiologist:
      "Expert in medical imaging — X-ray, CT, MRI, and ultrasound — providing accurate diagnostic support for every department.",
    Pediatrician:
      "Dedicated to the health, growth, and development of infants, children, and adolescents with compassionate family-centred care.",
    "General Surgery":
      "Experienced in a broad spectrum of elective and emergency surgical procedures with a strong focus on patient safety.",
    "Gen Surgery":
      "Experienced in a broad spectrum of elective and emergency surgical procedures with a strong focus on patient safety.",
    CMO: "Oversees clinical governance, quality standards, and patient safety across all departments at Karuna Hospital.",
    "Orthopedic Surgeon":
      "Specialises in bones, joints, and musculoskeletal conditions including joint replacement, sports injuries, and fracture management.",
    "Orthopaedic Surgeon":
      "Specialises in bones, joints, and musculoskeletal conditions including joint replacement, sports injuries, and fracture management.",
    ENT: "Treats disorders of the ear, nose, and throat including sinus infections, hearing loss, and voice disorders.",
    "ENT Consultant":
      "Treats disorders of the ear, nose, and throat including sinus infections, hearing loss, and voice disorders.",
    Gastroenterology:
      "Expert in digestive health — diagnosing and managing conditions of the stomach, intestines, liver, and pancreas.",
    Neurologist:
      "Specialises in disorders of the brain, spinal cord, and peripheral nervous system including stroke, epilepsy, and migraines.",
    "Cancer Surgeon":
      "Performs precision oncological surgeries focused on complete tumour removal while preserving quality of life.",
    Gastrosurgeon:
      "Specialises in surgical management of digestive tract disorders and complex abdominal conditions.",
    Cardiologist:
      "Expert in heart health, managing cardiovascular diseases, arrhythmias, heart failure, and preventive cardiology.",
    "Gynecologist, Obstetrician":
      "Comprehensive care for women's reproductive health, pregnancy, high-risk obstetrics, and postpartum wellness.",
    Pathologist:
      "Provides accurate laboratory diagnostics and tissue analysis to guide precise treatment decisions across all departments.",
    Pediatric:
      "Dedicated to the health and development of newborns, infants, and children with gentle and evidence-based care.",
  };
  if (map[dept]) return map[dept];
  return `Experienced ${dept} specialist at Karuna Hospital, delivering expert medical care with over a decade of clinical excellence.`;
}

export default function FindADoctorPage() {
  const { t } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <div className="find-doctor-page bg-white">
      {/* Hero Section */}
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__badge">
            <Stethoscope size={13} />
            <span>Find Your Doctor</span>
          </div>
          <h1 className="hero__title">
            {/* {t("page.doctors.title") || "Our Expert Medical Team"} */}
           Our Expert Medical Team
          </h1>
          <p className="hero__subtitle">
            {/* {t("page.doctors.subtitle") ||
              "Meet the experienced specialists at Karuna Hospital. Trusted care across 20+ departments — find the right doctor for you."} */}
              Meet the experienced specialists at Karuna Hospital. Trusted care across 20+ departments — find the right doctor for you.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section min-h-[50vh] bg-neutral-50">
        <div className="section__inner">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctorsData.map((doctor, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--brand-primary)] hover:shadow-lg hover:shadow-blue-900/5"
              >
                {/* Card Image - Slightly taller for better proportions */}
                <div className="relative h-56 overflow-hidden bg-blue-50">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const next = (e.target as HTMLImageElement)
                          .nextElementSibling as HTMLElement;
                        if (next) next.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-blue-50 text-[var(--brand-primary)]"
                    style={{ display: doctor.image ? "none" : "flex" }}
                  >
                    <Stethoscope size={48} className="opacity-30" />
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-10 pb-4">
                    <span className="inline-block rounded bg-black/20 px-2 py-0.5 text-xs font-semibold tracking-wider text-white/90 uppercase backdrop-blur-sm">
                      {doctor.department}
                    </span>
                  </div>
                </div>

                {/* Card Content - Increased text sizes */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Name: Increased from 15px to 18px */}
                  <h3 className="mb-1.5 text-[18px] leading-tight font-bold text-neutral-900">
                    {doctor.name}
                  </h3>
                  <div className="mb-3 flex flex-col gap-1.5">
                    {/* Meta Info: Increased from 11px to 13px */}
                    <p className="flex items-center gap-2 text-[13px] font-medium text-neutral-600">
                      <Award
                        size={14}
                        className="shrink-0 text-[var(--brand-primary)]"
                      />
                      <span>{doctor.experience} years experience</span>
                    </p>
                    <p className="flex items-center gap-2 text-[13px] font-medium text-neutral-600">
                      <MapPin
                        size={14}
                        className="shrink-0 text-[var(--brand-primary)]"
                      />
                      <span>Karuna Hospital, Saharanpur</span>
                    </p>
                  </div>
                  {/* Button: Increased text size and padding */}
                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-[15px] font-bold text-[var(--brand-primary)] transition-all duration-200 hover:bg-[var(--brand-primary)] hover:text-white"
                  >
                    View Profile
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal - Fixed & Enlarged */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDoctor(null);
          }}
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header - Enlarged text and icons */}
            <div className="bg-gradient-to-br from-[#0C447C] to-[#185FA5] px-8 py-9">
              <div className="flex items-end gap-6">
                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl border-4 border-white/30 bg-blue-200 shadow-lg">
                  {selectedDoctor.image ? (
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="h-full w-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Stethoscope size={40} className="text-white/60" />
                    </div>
                  )}
                </div>
                <div className="flex-1 pb-1">
                  {/* Name: Increased to 2xl */}
                  <h2 className="text-2xl leading-tight font-bold text-white">
                    {selectedDoctor.name}
                  </h2>
                  {/* Dept: Increased to base (16px) */}
                  <p className="mt-2 text-base font-medium text-white/90">
                    {selectedDoctor.department}
                  </p>
                  {/* Location: Increased to sm */}
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-white/75">
                    <MapPin size={14} />
                    Karuna Hospital, Saharanpur
                  </p>
                </div>
              </div>
            </div>

            {/* Stats - Enlarged numbers */}
            <div className="grid grid-cols-3 gap-4 bg-neutral-50 px-8 py-6">
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
                <Award
                  size={18}
                  className="mx-auto mb-2 text-[var(--brand-primary)]"
                />
                <p className="text-xl font-bold text-neutral-900">
                  {selectedDoctor.experience}+
                </p>
                <p className="text-xs font-medium text-neutral-500">
                  Years Exp.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
                <Users
                  size={18}
                  className="mx-auto mb-2 text-[var(--brand-primary)]"
                />
                <p className="text-xl font-bold text-neutral-900">500+</p>
                <p className="text-xs font-medium text-neutral-500">Patients</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
                <Stethoscope
                  size={18}
                  className="mx-auto mb-2 text-[var(--brand-primary)]"
                />
                <p className="text-xl font-bold text-neutral-900">Expert</p>
                <p className="text-xs font-medium text-neutral-500">
                  Specialist
                </p>
              </div>
            </div>

            {/* Body - Enlarged description and buttons */}
            <div className="px-8 pb-8">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-[var(--brand-primary)]"></div>
                <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  About
                </p>
              </div>
              {/* About Text: Increased to 15px */}
              <p className="mb-8 text-[15px] leading-relaxed text-neutral-600">
                {getAbout(selectedDoctor.department)}
              </p>

              {/* Action Buttons: Enlarged and responsive */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-[var(--brand-primary)] px-6 py-3.5 text-[15px] font-bold text-white shadow-md shadow-blue-900/20 transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-lg"
                >
                  <Calendar size={16} />
                  Book Appointment
                </Link>
                <Link
                  href={selectedDoctor.profile}
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-xl border-2 border-neutral-200 bg-white px-6 py-3.5 text-[15px] font-bold text-neutral-700 transition hover:border-[var(--brand-primary)] hover:bg-neutral-50 hover:text-[var(--brand-primary)]"
                >
                  Full Profile
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
