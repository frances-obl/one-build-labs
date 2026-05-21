"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CIRCLE_SIZE = 80; /* px — must match the w/h below */

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    body: "We hop on a quick call to understand your business, goals, and vibe. No fluff.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    body: "We craft a custom mockup and iterate until you're completely in love with it.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    body: "We build it fast, clean, responsive, and optimised for search engines.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    body: "We deploy your site, run QA checks, and hand you the keys. You're live.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      style={{
        background: "#f4f4f7",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          style={{ textAlign: "center", marginBottom: "clamp(52px, 7vw, 96px)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.28em",
              color: "#8a8aa8",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Our Process
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 700,
              color: "#1a2040",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "18px",
            }}
          >
            From idea to launch in four steps.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            A streamlined process that keeps things simple, fast, and transparent from start to finish.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(16px, 3vw, 40px)",
          }}
        >
          {/*
           * Connecting line: runs horizontally dead-center through the icon circles.
           * top = CIRCLE_SIZE / 2 so it bisects the 80px circles.
           * left/right trimmed to the center of the first/last circle (1/8 of grid width each).
           */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: `${CIRCLE_SIZE / 2}px`,
              left: "calc(12.5%)",
              right: "calc(12.5%)",
              height: "1px",
              background: "#d8d8e4",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.12 + i * 0.1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: `${CIRCLE_SIZE}px`,
                    height: `${CIRCLE_SIZE}px`,
                    borderRadius: "50%",
                    border: "1px solid #e0e0ea",
                    background: "#f0f0f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    style={{ width: 22, height: 22, color: "#1a2040" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Step number */}
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    color: "#8a8aa8",
                    marginBottom: "8px",
                  }}
                >
                  {step.number}
                </p>

                {/* Step title */}
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 600,
                    color: "#1a2040",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>

                {/* Step body */}
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "12px",
                    color: "#6b7280",
                    lineHeight: 1.75,
                    maxWidth: "180px",
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
