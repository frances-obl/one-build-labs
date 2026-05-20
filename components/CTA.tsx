"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { open } = useContactModal();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        /* Exact 3.65 : 1 ultra-wide banner — scales with viewport width */
        width: "100%",
        aspectRatio: "3.65 / 1",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── BACKGROUND PHOTO ── */}
      <Image
        src="/hero-building.png"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          /*
           * Position the crop so the sky dominates the left ~65 %
           * and the white stepped facade appears on the right edge.
           * x = 62% pulls the image slightly right-of-centre;
           * y = 62% drops the crop into the lower half where the
           * building geometry begins to appear.
           */
          objectPosition: "62% 62%",
        }}
        aria-hidden="true"
      />

      {/*
       * ── LIGHT-WASH OVERLAY ──
       * Matches the pale blue-white tone in the reference.
       * Low enough opacity that the stepped facade stays visible.
       */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(232, 236, 245, 0.68)",
        }}
      />

      {/* ── TEXT CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          width: "100%",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
              fontWeight: 700,
              color: "#1a2040",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "clamp(10px, 1.2vw, 18px)",
              maxWidth: "700px",
            }}
          >
            Ready to level up your online presence?
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(10.5px, 0.95vw, 14px)",
              fontWeight: 400,
              color: "#5a6280",
              lineHeight: 1.75,
              marginBottom: "clamp(18px, 2vw, 32px)",
              maxWidth: "620px",
            }}
          >
            Let&apos;s chat about your project. Most sites are live within a week.
            No agencies, no overhead, just two people who care.
          </p>

          {/* CTA button — outlined rectangle, no border-radius */}
          <button
            onClick={() => open()}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(8.5px, 0.65vw, 11px)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#1a2040",
              background: "transparent",
              border: "1.5px solid #1a2040",
              padding: "clamp(9px, 0.85vw, 13px) clamp(20px, 2.2vw, 34px)",
              borderRadius: 0,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1a2040";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#1a2040";
            }}
          >
            START YOUR PROJECT
          </button>
        </motion.div>
      </div>
    </section>
  );
}
