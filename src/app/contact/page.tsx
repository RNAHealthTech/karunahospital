"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const whatsappNumber = "919557863199";
  const prefillMessage = encodeURIComponent(
    "Hello, I would like to inquire about..."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefillMessage}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const form = e.currentTarget;
      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  };

  return (
    <>
      <section className="hero hero--internal">
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        <div className="hero__inner">
          <h1 className="hero__title">
            {t("page.contact.hero.title")}
          </h1>
          <p className="hero__subtitle">
            {t("page.contact.hero.subtitle")}
          </p>
        </div>
      </section>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="contact-info-section">
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "var(--neutral-900)",
            }}
          >
            {t("page.contact.getInTouch")}
          </h2>

          <p
            style={{
              color: "var(--neutral-600)",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            {t("page.contact.getInTouch.desc")}
          </p>

          <div style={{ display: "grid", gap: "1rem" }}>
            {/* Location */}
            <div className="spec-card" style={{ padding: "1.2rem" }}>
              <h4 style={{ fontWeight: 600 }}>📍 {t("page.contact.card.location")}</h4>
              <p style={{ color: "var(--neutral-600)", fontSize: "0.9rem" }}>
                {t("page.contact.card.address")}
              </p>
            </div>

            {/* Call */}
            <div className="spec-card" style={{ padding: "1.2rem" }}>
              <h4 style={{ fontWeight: 600 }}>📞 {t("page.contact.card.call")}</h4>
              <p style={{ color: "var(--neutral-600)", fontSize: "0.9rem" }}>
                +91 9557863199
              </p>
            </div>

            {/* Email */}
            <div className="spec-card" style={{ padding: "1.2rem" }}>
              <h4 style={{ fontWeight: 600 }}>✉️ {t("page.contact.card.email")}</h4>
              <p style={{ color: "var(--neutral-600)", fontSize: "0.9rem" }}>
                karunahospital.dg@gmail.com
              </p>
            </div>

            {/* Emergency */}
            <div
              className="spec-card"
              style={{
                padding: "1.2rem",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              <h4 style={{ fontWeight: 600, color: "#e11d48" }}>🚨 {t("page.contact.card.emergency")}</h4>
              <p style={{ color: "var(--neutral-700)", fontSize: "0.9rem" }}>
                {t("page.contact.card.emergency.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE  ================= */}
        <div
          className="spec-card"
          style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}
        >
          {/* Status Message */}
          {submitStatus !== "idle" && (
            <div
              className="mb-6 flex items-center gap-3 rounded-xl p-4"
              style={{
                background:
                  submitStatus === "success"
                    ? "var(--brand-primary-light)"
                    : "rgba(239, 68, 68, 0.1)",
                border: `1px solid ${submitStatus === "success" ? "var(--brand-primary)" : "rgba(239, 68, 68, 0.3)"}`,
                color:
                  submitStatus === "success"
                    ? "var(--brand-primary-dark)"
                    : "var(--brand-accent-dark)",
              }}
            >
              {submitStatus === "success" ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                </svg>
              )}
              <span className="text-sm font-medium">
                {submitStatus === "success"
                  ? t("page.contact.form.sent")
                  : "✗ Error. Please try again."}
              </span>
            </div>
          )}

          {/* Form Header */}
          <div
            style={{
              marginBottom: "2rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid var(--neutral-200)",
            }}
          >
            <h3
              className="section__title"
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            >
              {t("page.contact.form.title")}
            </h3>
            <p
              style={{
                color: "var(--neutral-600)",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              {t("page.contact.form.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontWeight: 600,
                  color: "var(--neutral-800)",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {t("page.contact.form.name.label")} <span style={{ color: "var(--brand-accent)" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t("page.contact.form.name.label")}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  border: "1.5px solid var(--border)",
                  borderRadius: "12px",
                  background: "white",
                  fontSize: "0.95rem",
                  color: "var(--neutral-800)",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(11, 111, 164, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontWeight: 600,
                  color: "var(--neutral-800)",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {t("page.contact.form.email.label")}{" "}
                <span style={{ color: "var(--brand-accent)" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="email@example.com"
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  border: "1.5px solid var(--border)",
                  borderRadius: "12px",
                  background: "white",
                  fontSize: "0.95rem",
                  color: "var(--neutral-800)",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(11, 111, 164, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Phone Field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  fontWeight: 600,
                  color: "var(--neutral-800)",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {t("page.contact.form.phone.label")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  border: "1.5px solid var(--border)",
                  borderRadius: "12px",
                  background: "white",
                  fontSize: "0.95rem",
                  color: "var(--neutral-800)",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(11, 111, 164, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Subject Field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  fontWeight: 600,
                  color: "var(--neutral-800)",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {t("page.contact.form.subject.label")} <span style={{ color: "var(--brand-accent)" }}>*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  border: "1.5px solid var(--border)",
                  borderRadius: "12px",
                  background: "white",
                  fontSize: "0.95rem",
                  color: "var(--neutral-800)",
                  transition: "all 0.2s ease",
                  outline: "none",
                  cursor: "pointer",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1rem",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(11, 111, 164, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <option value="" disabled hidden>
                  {t("page.contact.form.subject.label")}
                </option>
                <option value="appointment">{t("page.contact.form.subject.appointment")}</option>
                <option value="inquiry">{t("page.contact.form.subject.inquiry")}</option>
                <option value="feedback">{t("page.contact.form.subject.feedback")}</option>
                <option value="emergency">{t("page.contact.form.subject.emergency")}</option>
                <option value="other">{t("page.contact.form.subject.other")}</option>
              </select>
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontWeight: 600,
                  color: "var(--neutral-800)",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {t("page.contact.form.message.label")} <span style={{ color: "var(--brand-accent)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="How can we help you today?"
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  border: "1.5px solid var(--border)",
                  borderRadius: "12px",
                  background: "white",
                  fontSize: "0.95rem",
                  color: "var(--neutral-800)",
                  transition: "all 0.2s ease",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: "1.6",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(11, 111, 164, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Privacy Notice */}
            <div
              style={{
                marginBottom: "1.75rem",
                padding: "1rem",
                background: "var(--brand-primary-light)",
                borderRadius: "12px",
                borderLeft: "4px solid var(--brand-primary)",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--neutral-700)",
                  margin: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-primary)"
                  strokeWidth="2.5"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>
                  {t("page.contact.form.privacy")}{" "}
                  <a
                    href="/privacy"
                    style={{
                      color: "var(--brand-primary)",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {t("page.contact.form.privacy.link")}
                  </a>
                  .
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="btn btn--primary"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "1rem",
                fontSize: "1rem",
                fontWeight: 600,
                opacity: isSubmitting || submitStatus === "success" ? 0.8 : 1,
                cursor:
                  isSubmitting || submitStatus === "success"
                    ? "not-allowed"
                    : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ marginRight: "0.5rem" }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeDasharray="56"
                      strokeDashoffset="56"
                      opacity="0.3"
                    />
                    <path
                      d="M21 12a9 9 0 11-6.22-8.55"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {t("page.contact.form.sending")}
                </>
              ) : submitStatus === "success" ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ marginRight: "0.5rem" }}
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t("page.contact.form.sent")}
                </>
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  {t("page.contact.form.send.btn")}
                </>
              )}
            </button>

            {/* WhatsApp Alternative */}
            <div style={{ margin: "1.5rem 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  color: "var(--neutral-500)",
                  fontSize: "0.9rem",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "var(--neutral-200)",
                  }}
                />
                <span>{t("page.contact.form.or")}</span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "var(--neutral-200)",
                  }}
                />
              </div>
            </div>

            {/* ✅ WhatsApp Button - Works on Mobile + Desktop */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                width: "100%",
                padding: "1rem",
                background: "#25D366",
                color: "white",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.2s ease",
                border: "2px solid #128C7E",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#128C7E";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(37, 211, 102, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("page.contact.form.whatsapp")}
            </a>

            {/* Emergency Notice */}
            <p
              style={{
                textAlign: "center",
                fontSize: "0.85rem",
                color: "var(--neutral-600)",
                marginTop: "1.5rem",
                lineHeight: "1.5",
              }}
            >
              {t("page.contact.form.emergency.notice")}{" "}
              <a
                href="tel:+919557863199"
                style={{
                  color: "var(--brand-accent)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                +91 9557863199
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
