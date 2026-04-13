"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { KarunaLogo } from "./logo";
import { ChevronDown, Globe, Menu, X, Phone, Heart, Activity, Brain, Shield, User, FlaskConical, Stethoscope, Droplet, Zap, ClipboardCheck, ArrowRight, Wind, Eye, Smile } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.about",
    href: "/about",
    children: [
      { key: "nav.about.overview", href: "/about" },
      { key: "nav.about.director", href: "/about#director" },
      { key: "nav.about.vision", href: "/about#vision" },
      { key: "nav.about.accreditation", href: "/about#accreditation" },
    ],
  },
  {
    key: "nav.specialities",
    href: "/specialities",
    children: [
      { key: "nav.spec.cardiology", href: "/specialities/cardiology", icon: <Heart size={14} /> },
      { key: "nav.spec.ortho", href: "/specialities/orthopaedics", icon: <Activity size={14} /> },
      { key: "nav.spec.neuro", href: "/specialities/neurosciences", icon: <Brain size={14} /> },
      { key: "nav.spec.gastro", href: "/specialities/gastroenterology", icon: <Activity size={14} /> },
      { key: "nav.spec.obst", href: "/specialities/obstetrics-gynaecology", icon: <Heart size={14} /> },
      { key: "nav.spec.paediatrics", href: "/specialities/pediatrics", icon: <Activity size={14} /> },
      { key: "nav.spec.surgery", href: "/specialities/general-surgery", icon: <ClipboardCheck size={14} /> },
      { key: "nav.spec.urology", href: "/specialities/urology", icon: <Droplet size={14} /> },
      { key: "nav.spec.medicine", href: "/specialities/internal-medicine", icon: <Stethoscope size={14} /> },
      { key: "nav.spec.dentistry", href: "/specialities/dentistry", icon: <Smile size={14} /> },
      { key: "nav.spec.ophthalmology", href: "/specialities/ophthalmology", icon: <Eye size={14} /> },
      { key: "nav.spec.psychiatry", href: "/specialities/psychiatry", icon: <Activity size={14} /> },
      { key: "nav.spec.radiology", href: "/specialities/radiology", icon: <Activity size={14} /> },
      { key: "nav.spec.pathology", href: "/specialities/pathology", icon: <Activity size={14} /> },
    ],
  },
  {
    key: "nav.coe",
    href: "/centre-of-excellence",
    children: [
      { key: "nav.coe.laparoscopic", href: "/centre-of-excellence/laparoscopic-general-surgery", icon: <ClipboardCheck size={14} /> },
      { key: "nav.coe.maternity", href: "/centre-of-excellence/maternity", icon: <Heart size={14} /> },
      { key: "nav.coe.pediatrics", href: "/centre-of-excellence/pediatrics-neonatology", icon: <Activity size={14} /> },
      { key: "nav.coe.interventional", href: "/centre-of-excellence/interventional-radiology", icon: <Zap size={14} /> },
      { key: "nav.spec.medicine", href: "/centre-of-excellence/internal-medicine", icon: <Stethoscope size={14} /> },
      { key: "nav.spec.gastro", href: "/centre-of-excellence/gastroenterology", icon: <Activity size={14} /> },
      { key: "nav.coe.nephrology", href: "/centre-of-excellence/nephrology", icon: <Droplet size={14} /> },
      { key: "nav.coe.urology", href: "/centre-of-excellence/urology-andrology", icon: <Droplet size={14} /> },
    ],
  },
  { key: "nav.career", href: "/career" },
  {
    key: "nav.patient",
    href: "/patient",
    children: [
      { key: "nav.patient.rights", href: "/patient/rights", icon: <Shield size={14} /> },
      { key: "nav.patient.feedback", href: "/patient/feedback", icon: <ClipboardCheck size={14} /> },
      { key: "nav.patient.insurance", href: "/patient/insurance", icon: <Shield size={14} /> },
      { key: "nav.patient.visiting", href: "/patient/visiting-hours", icon: <Activity size={14} /> },
    ],
  },
  { key: "nav.news", href: "/news" },
  {
    key: "nav.diagnostic",
    href: "/diagnostic-services",
    children: [
      {
        key: "nav.diagnostic.risk",
        href: "/diagnostic-services/by-risk",
        children: [
          { key: "nav.diag.risk.acidity", href: "/diagnostic-services/by-risk/acidity", icon: <Zap size={14} /> },
          { key: "nav.diag.risk.allergy", href: "/diagnostic-services/by-risk/allergy", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.anaemia", href: "/diagnostic-services/by-risk/anaemia", icon: <Droplet size={14} /> },
          { key: "nav.diag.risk.arthritis", href: "/diagnostic-services/by-risk/arthritis", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.cancer", href: "/diagnostic-services/by-risk/cancer", icon: <Shield size={14} /> },
          { key: "nav.diag.risk.diabetes", href: "/diagnostic-services/by-risk/diabetes", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.digestion", href: "/diagnostic-services/by-risk/digestion", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.fever", href: "/diagnostic-services/by-risk/fever", icon: <Zap size={14} /> },
          { key: "nav.diag.risk.heart", href: "/diagnostic-services/by-risk/heart", icon: <Heart size={14} /> },
          { key: "nav.diag.risk.hepatitis", href: "/diagnostic-services/by-risk/hepatitis", icon: <Droplet size={14} /> },
          { key: "nav.diag.risk.hormones", href: "/diagnostic-services/by-risk/hormones", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.hypertension", href: "/diagnostic-services/by-risk/hypertension", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.immunity", href: "/diagnostic-services/by-risk/immunity", icon: <Shield size={14} /> },
          { key: "nav.diag.risk.infection", href: "/diagnostic-services/by-risk/infection", icon: <Zap size={14} /> },
          { key: "nav.diag.risk.jaundice", href: "/diagnostic-services/by-risk/jaundice", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.joints", href: "/diagnostic-services/by-risk/joints", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.kidney", href: "/diagnostic-services/by-risk/kidney", icon: <Droplet size={14} /> },
          { key: "nav.diag.risk.liver", href: "/diagnostic-services/by-risk/liver", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.obesity", href: "/diagnostic-services/by-risk/obesity", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.pregnancy", href: "/diagnostic-services/by-risk/pregnancy", icon: <Heart size={14} /> },
          { key: "nav.diag.risk.std", href: "/diagnostic-services/by-risk/std", icon: <Shield size={14} /> },
          { key: "nav.diag.risk.thyroid", href: "/diagnostic-services/by-risk/thyroid", icon: <Activity size={14} /> },
          { key: "nav.diag.risk.inflammation", href: "/diagnostic-services/by-risk/inflammation", icon: <Zap size={14} /> },
          { key: "nav.diag.risk.vitamins", href: "/diagnostic-services/by-risk/vitamins", icon: <FlaskConical size={14} /> },
        ],
      },
      {
        key: "nav.diagnostic.habit",
        href: "/diagnostic-services/by-habit",
        children: [
          { key: "nav.diag.habit.alcoholism", href: "/diagnostic-services/by-habit/alcoholism", icon: <FlaskConical size={14} /> },
          { key: "nav.diag.habit.anger", href: "/diagnostic-services/by-habit/anger", icon: <Brain size={14} /> },
          { key: "nav.diag.habit.heartburn", href: "/diagnostic-services/by-habit/heartburn", icon: <Zap size={14} /> },
          { key: "nav.diag.habit.junk-food", href: "/diagnostic-services/by-habit/junk-food", icon: <Activity size={14} /> },
          { key: "nav.diag.habit.low-iron", href: "/diagnostic-services/by-habit/low-iron", icon: <Droplet size={14} /> },
          { key: "nav.diag.habit.appetite", href: "/diagnostic-services/by-habit/appetite", icon: <Activity size={14} /> },
          { key: "nav.diag.habit.nutrition", href: "/diagnostic-services/by-habit/nutrition", icon: <ClipboardCheck size={14} /> },
          { key: "nav.diag.habit.sleeplessness", href: "/diagnostic-services/by-habit/sleeplessness", icon: <Brain size={14} /> },
          { key: "nav.diag.habit.smoking", href: "/diagnostic-services/by-habit/smoking", icon: <Wind size={14} /> },
          { key: "nav.diag.habit.stress", href: "/diagnostic-services/by-habit/stress", icon: <Heart size={14} /> },
          { key: "nav.diag.habit.tiredness", href: "/diagnostic-services/by-habit/tiredness", icon: <Zap size={14} /> },
        ],
      },
      {
        key: "nav.diagnostic.packages",
        href: "/diagnostic-services/packages",
        children: [
          { key: "nav.diag.pkg.silver", href: "/diagnostic-services/packages#silver", icon: <Shield size={14} /> },
          { key: "nav.diag.pkg.gold", href: "/diagnostic-services/packages#gold", icon: <Shield size={14} /> },
          { key: "nav.diag.pkg.platinum", href: "/diagnostic-services/packages#platinum", icon: <Shield size={14} /> },
          { key: "nav.diag.pkg.diamond", href: "/diagnostic-services/packages#diamond", icon: <Shield size={14} /> },
          { key: "nav.diag.pkg.senior", href: "/diagnostic-services/packages#senior", icon: <Shield size={14} /> },
          { key: "nav.diag.pkg.woman", href: "/diagnostic-services/packages#woman", icon: <Heart size={14} /> },
        ],
      },
    ],
  },
];

function DropdownMenu({
  items,
  isOpen,
  isMega = false,
  isRightAlign = false,
}: {
  items: any[];
  isOpen: boolean;
  isMega?: boolean;
  isRightAlign?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, x: (isRightAlign && !isMega) ? 0 : "-50%", scale: 0.98 }}
          animate={{ opacity: 1, y: 0, x: (isRightAlign && !isMega) ? 0 : "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -5, x: (isRightAlign && !isMega) ? 0 : "-50%", scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={`dropdown-menu dropdown-menu--open ${
            isMega ? "dropdown-menu--mega" : ""
          } ${isRightAlign && !isMega ? "dropdown-menu--right" : ""}`}
          role="menu"
        >
          {isMega ? (
            <div className="mega-menu-grid">
              {items.map((column) => (
                <div key={column.key} className="mega-menu-col">
                  <Link href={column.href} className="mega-menu-title">
                    {t(column.key)}
                  </Link>
                  <div className={`mega-menu-items ${column.children && column.children.length > 12 ? 'grid grid-cols-2 gap-x-8' : ''}`}>
                    {column.children?.map((child: any) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        className="mega-menu-item group/mega"
                      >
                        <span className="w-6 h-6 rounded bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover/mega:bg-[var(--brand-primary)] group-hover/mega:text-white transition-all">
                          {child.icon || <span className="text-[10px]">●</span>}
                        </span>
                        {t(child.key)}
                        <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-2 group-hover/mega:opacity-100 group-hover/mega:translate-x-0 transition-all text-[var(--brand-primary)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="dropdown-menu__list p-2">
              {items.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="dropdown-item group/drop"
                  role="menuitem"
                >
                  {item.icon && (
                    <span className="w-6 h-6 rounded bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover/drop:text-[var(--brand-primary)] transition-all">
                      {item.icon}
                    </span>
                  )}
                  {t(item.key)}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavItem({
  item,
  index = 0,
  total = 1,
}: {
  item: (typeof navigation)[number];
  index?: number;
  total?: number;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasGrandchildren = item.children?.some((child: any) => child.children);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!item.children) {
    return (
      <Link href={item.href} className="nav-link">
        {t(item.key)}
      </Link>
    );
  }
  return (
    <div
      ref={ref}
      className={`nav-item-wrapper overflow-visible ${hasGrandchildren ? "static" : "relative"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-link nav-link--dropdown"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        id={`nav-${item.key}`}
      >
        {t(item.key)}
        <ChevronDown
          size={14}
          className={`nav-chevron ${open ? "nav-chevron--open" : ""}`}
          aria-hidden="true"
        />
      </button>
      <DropdownMenu
        items={item.children}
        isOpen={open}
        isMega={hasGrandchildren}
        isRightAlign={index >= total - 3}
      />
    </div>
  );
}

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="topbar__inner">
          <div className="topbar__left">
            <Phone size={13} aria-hidden="true" />
            <span>{t("header.emergency")}</span>
          </div>
          <div className="topbar__right">
            <Link href="/find-a-doctor" className="topbar__link">
              {t("nav.findDoctor")}
            </Link>
            <span className="topbar__sep" aria-hidden="true">|</span>
            <Link href="/contact" className="topbar__link">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`} role="banner">
        <div className="site-header__inner">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="logo-link scale-90 origin-left" aria-label="Karuna Hospital Home">
              <KarunaLogo />
            </Link>
            <div className="h-10 w-px bg-neutral-200 hidden md:block" aria-hidden="true" />
            <div className="relative w-16 h-16 hidden md:block">
              <Image
                src="/nabh-logo.png"
                alt="NABH Accredited"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav" role="navigation" aria-label="Main navigation">
            {navigation.map((item, i) => (
              <NavItem key={item.key} item={item} index={i} total={navigation.length} />
            ))}
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            {/* Language Toggle */}
            <button
              className="lang-toggle"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              aria-label={`Switch to ${language === "en" ? "Hindi" : "English"}`}
              id="language-toggle-btn"
            >
              <Globe size={14} aria-hidden="true" />
              <span>{language === "en" ? "English" : "हिंदी"}</span>
            </button>

            {/* Book Appointment CTA */}
            <Link href="/contact" className="book-btn" id="book-appointment-btn">
              {t("nav.bookAppointment")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <div key={item.key} className="mobile-nav-item">
                {item.children ? (
                  <>
                    <button
                      className="mobile-nav-btn"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.key ? null : item.key
                        )
                      }
                      aria-expanded={mobileExpanded === item.key}
                    >
                      {t(item.key)}
                      <ChevronDown
                        size={14}
                        className={`nav-chevron ${mobileExpanded === item.key ? "nav-chevron--open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileExpanded === item.key && (
                      <div className="mobile-dropdown">
                        {item.children.map((child: any) => (
                          <div key={child.key} className="mobile-sub-nav">
                            <Link
                              href={child.href}
                              className="mobile-dropdown-item mobile-dropdown-item--parent flex items-center gap-3"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.icon && <span className="text-[var(--brand-primary)] opacity-70 scale-90">{child.icon}</span>}
                              {t(child.key)}
                            </Link>
                            {child.children && (
                              <div className="mobile-grand-children">
                                {child.children.map((grandChild: any) => (
                                  <Link
                                    key={grandChild.key}
                                    href={grandChild.href}
                                    className="mobile-dropdown-item mobile-dropdown-item--child flex items-center gap-3"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {grandChild.icon && <span className="text-neutral-400 scale-75">{grandChild.icon}</span>}
                                    {t(grandChild.key)}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mobile-book-btn"
              onClick={() => setMobileOpen(false)}
              id="mobile-book-btn"
            >
              {t("nav.bookAppointment")}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
