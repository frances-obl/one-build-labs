"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia", "New Zealand",
  "Ireland", "South Africa", "Singapore", "United Arab Emirates",
  "Afghanistan", "Albania", "Algeria", "Argentina", "Austria", "Belgium",
  "Brazil", "Chile", "China", "Colombia", "Croatia", "Czech Republic",
  "Denmark", "Egypt", "Finland", "France", "Germany", "Ghana", "Greece",
  "Hungary", "India", "Indonesia", "Israel", "Italy", "Japan", "Jordan",
  "Kenya", "Kuwait", "Lebanon", "Malaysia", "Mexico", "Morocco", "Netherlands",
  "Nigeria", "Norway", "Pakistan", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Saudi Arabia", "Spain", "Sweden",
  "Switzerland", "Thailand", "Turkey", "Ukraine", "Vietnam",
];

const BUDGET_RANGES = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
  "Let's discuss",
];

const PROJECT_TYPES = [
  "Landing Page",
  "Business Website",
  "E-Commerce Store",
  "Portfolio",
  "SaaS / Web App",
  "Blog / Content Site",
  "Redesign",
  "Other",
];

const PLANS = ["Starter Site", "Business Pro", "Custom Web", "Not sure yet"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  plan: string;
  budget: string;
  projectType: string;
  message: string;
}

const EMPTY: FormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  plan: "",
  budget: "",
  projectType: "",
  message: "",
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function ContactModal({ isOpen, onClose, initialPlan }: Props) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Pre-fill plan when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, plan: initialPlan ?? "" }));
      setStatus("idle");
      setErrorMsg("");
    }
  }, [isOpen, initialPlan]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const inputBase: React.CSSProperties = {
    fontFamily: "var(--font-montserrat)",
    fontSize: "12px",
    color: "#16162a",
    background: "#f8f8fb",
    border: "1px solid #e0e0ea",
    borderRadius: "8px",
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelBase: React.CSSProperties = {
    fontFamily: "var(--font-montserrat)",
    fontSize: "10.5px",
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: "#6b7280",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(22,22,42,0.55)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "580px",
              maxHeight: "92vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 24px 80px rgba(22,22,42,0.18)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid #e0e0ea",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#6b7280",
                zIndex: 10,
              }}
            >
              <X style={{ width: 14, height: 14 }} />
            </button>

            <div style={{ padding: "32px 32px 28px" }}>
              {status === "success" ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  style={{ textAlign: "center", padding: "24px 0 16px" }}
                >
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#f0fdf4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <CheckCircle2 style={{ width: 28, height: 28, color: "#16a34a" }} />
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#16162a",
                    marginBottom: "10px",
                  }}>
                    Message Sent!
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "13px",
                    color: "#6b7280",
                    lineHeight: 1.65,
                    marginBottom: "28px",
                  }}>
                    Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      background: "#16162a",
                      color: "white",
                      border: "none",
                      borderRadius: "9999px",
                      padding: "12px 28px",
                      cursor: "pointer",
                    }}
                  >
                    CLOSE
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <>
                  <h2 style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#16162a",
                    marginBottom: "6px",
                    lineHeight: 1.1,
                    paddingRight: "40px",
                  }}>
                    Start Your Project
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "12px",
                    color: "#8a8aa8",
                    marginBottom: "28px",
                    lineHeight: 1.5,
                  }}>
                    Drop your details and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    {/* Row 1: Name + Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      <div>
                        <label style={labelBase}>Your Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={set("name")}
                          style={inputBase}
                        />
                      </div>
                      <div>
                        <label style={labelBase}>Email</label>
                        <input
                          required
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={set("email")}
                          style={inputBase}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Country */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      <div>
                        <label style={labelBase}>
                          Phone <span style={{ fontWeight: 400, color: "#aaa" }}>(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={set("phone")}
                          style={inputBase}
                        />
                      </div>
                      <div>
                        <label style={labelBase}>Country</label>
                        <select
                          value={form.country}
                          onChange={set("country")}
                          style={{ ...inputBase, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                        >
                          <option value="">Select country</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Interested In + Budget Range */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      <div>
                        <label style={labelBase}>Interested In</label>
                        <select
                          value={form.plan}
                          onChange={set("plan")}
                          style={{ ...inputBase, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                        >
                          <option value="">Select a plan</option>
                          {PLANS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={labelBase}>Budget Range</label>
                        <select
                          value={form.budget}
                          onChange={set("budget")}
                          style={{ ...inputBase, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                        >
                          <option value="">Select a range</option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Project Type (full width) */}
                    <div style={{ marginBottom: "14px" }}>
                      <label style={labelBase}>Project Type</label>
                      <select
                        value={form.projectType}
                        onChange={set("projectType")}
                        style={{ ...inputBase, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                      >
                        <option value="">Select a type</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: Message textarea */}
                    <div style={{ marginBottom: "24px" }}>
                      <label style={labelBase}>Tell Us More</label>
                      <textarea
                        placeholder="What are you looking to build?"
                        value={form.message}
                        onChange={set("message")}
                        rows={4}
                        style={{
                          ...inputBase,
                          resize: "vertical",
                          minHeight: "96px",
                          fontFamily: "var(--font-montserrat)",
                        }}
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <p style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "11px",
                        color: "#dc2626",
                        marginBottom: "14px",
                      }}>
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: status === "loading" ? "#2d3560" : "#16162a",
                        color: "white",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "14px 28px",
                        borderRadius: "9999px",
                        border: "none",
                        cursor: status === "loading" ? "not-allowed" : "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 style={{ width: 14, height: 14, animation: "spin 1s linear infinite" }} />
                          SENDING...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE
                          <ArrowRight style={{ width: 14, height: 14 }} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
