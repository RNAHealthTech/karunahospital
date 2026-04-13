"use client";

import Link from "next/link";
import Image from "next/image";
import { KarunaLogo } from "./logo";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about" },
    { key: "nav.specialities", href: "/specialities" },
    { key: "nav.findDoctor", href: "/find-a-doctor" },
    { key: "nav.news", href: "/news" },
    { key: "nav.career", href: "/career" },
    { key: "nav.contact", href: "/contact" },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer__top">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="footer__grid"
        >
          {/* Brand */}
          <div className="footer__brand">
            <div className="mb-6">
              <KarunaLogo />
            </div>
            <p className="footer__desc">{t("footer.tagline")}</p>
            <p className="footer__address">
              <MapPin size={14} className="footer__icon-inline" aria-hidden="true" />
              {t("footer.address")}
            </p>
            <div className="footer__socials" aria-label="Social media links">
              <a href="#" className="footer__social-btn" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="footer__social-btn" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" className="footer__social-btn" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="footer__social-btn" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">{t("footer.quicklinks")}</h3>
            <ul className="footer__links" role="list">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="footer__link">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div className="footer__col">
            <h3 className="footer__col-title">{t("nav.specialities")}</h3>
            <ul className="footer__links" role="list">
              {[
                ["nav.spec.medicine", "/specialities/internal-medicine"],
                ["nav.spec.obst", "/specialities/obstetrics-gynaecology"],
                ["nav.spec.surgery", "/specialities/surgery"],
                ["nav.spec.ortho", "/specialities/orthopaedics"],
                ["nav.spec.cardiology", "/specialities/cardiology"],
                ["nav.spec.neuro", "/specialities/neurology"],
              ].map(([key, href]) => (
                <li key={key}>
                  <Link href={href} className="footer__link">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">{t("footer.contact")}</h3>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <Phone size={15} className="footer__contact-icon" aria-hidden="true" />
                <div>
                  <a href="tel:+918588831732" className="footer__contact-link">8588831732</a>
                  <a href="tel:+919873754555" className="footer__contact-link">9873754555</a>
                  <a href="tel:01140793535" className="footer__contact-link">011-40793535</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <Mail size={15} className="footer__contact-icon" aria-hidden="true" />
                <a href="mailto:admin.karunahospital@gmail.com" className="footer__contact-link">
                  admin.karunahospital@gmail.com
                </a>
              </div>
            </div>
            <Link href="/contact" className="footer__cta-btn" id="footer-book-btn">
              {t("cta.button")}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>{t("footer.rights")}</p>
        <p className="footer__made-with">
          Made with <Heart size={12} className="footer__heart" aria-hidden="true" /> for better healthcare
        </p>
      </div>
    </footer>
  );
}
