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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Hero building photo — heavily washed out */}
      <Image
        src="/hero-building.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center center" }}
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Light overlay to wash it out to the pale blue-gray tone */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(236, 238, 244, 0.82)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "740px",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "#1a2040",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "22px",
            }}
          >
            Ready to level up your online presence?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "14px",
              fontWeight: 400,
              color: "#4b5563",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            Let&apos;s chat about your project. Most sites are live within a week.
            No agencies, no overhead, just two people who care.
          </p>

          <button
            onClick={() => open()}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#1a2040",
              background: "transparent",
              border: "1.5px solid #1a2040",
              padding: "14px 36px",
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
