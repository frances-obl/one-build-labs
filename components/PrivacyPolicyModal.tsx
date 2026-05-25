"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const sections = [
  {
    number: "1",
    title: "Who We Are",
    body: `One Build Labs ("we", "us", "our") is a web design agency operated by Frances Li (Miami, USA). We can be reached at frances@onebuildlabs.com.`,
  },
  {
    number: "2",
    title: "Information We Collect",
    body: `When you submit a form on our website, we collect the information you provide — such as your name, email address, phone number, and project details. We do not collect any information passively beyond standard web analytics (see Section 5).`,
  },
  {
    number: "3",
    title: "How We Use Your Information",
    body: `We use the information you provide solely to respond to your inquiry and discuss potential or ongoing work. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    number: "4",
    title: "Legal Basis & Applicable Law",
    body: `United States (CCPA & State Laws): We do not sell personal information. California residents have the right to request disclosure of the categories of personal information collected, request deletion of their data, and opt out of any sale (we do not sell data). To exercise these rights, contact us at frances@onebuildlabs.com.`,
  },
  {
    number: "5",
    title: "Analytics",
    body: `We use Google Analytics to understand aggregate traffic patterns on our website. This service may set cookies and collect anonymized data about your visit. You can opt out via the Google Analytics Opt-out Browser Add-on.`,
  },
  {
    number: "6",
    title: "Form Submissions",
    body: `Contact forms on this site are processed by Formspree. Submissions are transmitted securely and stored on Formspree's servers. Please review Formspree's Privacy Policy for details on how they handle your data.`,
  },
  {
    number: "7",
    title: "Data Retention",
    body: `We retain contact form submissions only as long as necessary to respond to your inquiry or fulfill any ongoing engagement. You may request deletion of your data at any time by emailing us.`,
  },
  {
    number: "8",
    title: "Your Rights",
    body: `Regardless of your location, you have the right to access, correct, or request deletion of any personal information we hold about you. To exercise any of these rights, contact us at frances@onebuildlabs.com.`,
  },
  {
    number: "9",
    title: "Cookies",
    body: `This site uses cookies only for analytics (Google Analytics). No tracking or advertising cookies are used. You may disable cookies in your browser settings at any time.`,
  },
  {
    number: "10",
    title: "Changes to This Policy",
    body: `We may update this policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of our site after changes constitutes acceptance of the updated policy.`,
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10, 12, 28, 0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              zIndex: 200,
            }}
          />

          {/* Centering shell — flexbox so Framer Motion y-animation never conflicts with transform centering */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 201,
              pointerEvents: "none",
            }}
          >
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
            style={{
              width: "min(680px, 92vw)",
              maxHeight: "82vh",
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)",
              pointerEvents: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: "28px 32px 20px",
                borderBottom: "1px solid #eceef4",
                flexShrink: 0,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    color: "#8a8aa8",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Legal
                </p>
                <h2
                  id="privacy-title"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(26px, 4vw, 36px)",
                    fontWeight: 700,
                    color: "#1a2040",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Privacy Policy
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginTop: "6px",
                  }}
                >
                  Last updated: May 2026
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close privacy policy"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #e5e7eb",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#6b7280",
                  flexShrink: 0,
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1a2040";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#6b7280";
                }}
              >
                <X style={{ width: 14, height: 14 }} />
              </button>
            </div>

            {/* Scrollable body */}
            <div
              style={{
                overflowY: "auto",
                padding: "28px 32px 36px",
                flex: 1,
              }}
            >
              {sections.map((section) => (
                <div
                  key={section.number}
                  style={{ marginBottom: "24px" }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      color: "#1a2040",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#1a2040",
                        color: "white",
                        fontSize: "8px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {section.number}
                    </span>
                    {section.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      color: "#4b5563",
                      lineHeight: 1.75,
                      paddingLeft: "30px",
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Contact footer */}
              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "24px",
                  borderTop: "1px solid #eceef4",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "12px",
                    color: "#6b7280",
                    lineHeight: 1.65,
                  }}
                >
                  Questions about this policy? Email us at{" "}
                  <a
                    href="mailto:frances@onebuildlabs.com"
                    style={{
                      color: "#1a2040",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    frances@onebuildlabs.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
