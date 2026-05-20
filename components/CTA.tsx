"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { open } = useContactModal();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        /* 3.65 : 1 ultra-wide banner — min-height keeps it usable on small screens */
        aspectRatio: "3.65 / 1",
        minHeight: "240px",
        maxHeight: "520px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Building photo — positioned to show sky left, architecture right */}
      <Image
        src="/hero-building.png"
        alt=""
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center 25%",
        }}
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Very light overlay — nearly washes the photo to pale blue-white */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(240, 242, 248, 0.80)",
        }}
      />

      {/* Content — centred in the banner */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 40px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.75rem, 3.6vw, 3.2rem)",
              fontWeight: 700,
              color: "#1a2040",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            Ready to level up your online presence?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(11px, 1.05vw, 14px)",
              fontWeight: 400,
              color: "#4b5563",
              lineHeight: 1.7,
              marginBottom: "28px",
              maxWidth: "640px",
              margin: "0 auto 28px",
            }}
          >
            Let&apos;s chat about your project. Most sites are live within a week.
            No agencies, no overhead, just two people who care.
          </p>

          <button
            onClick={() => open()}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(9px, 0.75vw, 11px)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#1a2040",
              background: "transparent",
              border: "1.5px solid #1a2040",
              padding: "12px 32px",
              borderRadius: 0,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
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
