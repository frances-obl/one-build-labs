"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ── FULL-BLEED BACKGROUND PHOTO ── */}
      <Image
        src="/hero-building.png"
        alt="Modern angular architecture building with white geometric facade"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center center",
        }}
        priority
        sizes="100vw"
      />

      {/* ── TEXT OVERLAY — sits over the sky portion on the left ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: "clamp(120px, 22vh, 220px)",
          paddingLeft: "80px",
          paddingRight: "60px",
          maxWidth: "620px",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "13px",
              fontWeight: 400,
              color: "#6b7280",
              letterSpacing: "0.01em",
              marginBottom: "18px",
              lineHeight: 1,
            }}
          >
            Premium web designs built for growth
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(52px, 5.5vw, 82px)",
              fontWeight: 700,
              color: "#1a2040",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              marginBottom: "22px",
            }}
          >
            ONE BUILD LABS
          </h1>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "15px",
              fontWeight: 400,
              color: "#4b5563",
              lineHeight: 1.75,
              maxWidth: "430px",
              marginBottom: "38px",
            }}
          >
            Building fast, beautiful, high-converting websites for companies
            that want to stand out, not blend in
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px" }}>
            <HeroBtn href="#projects">VIEW OUR WORK</HeroBtn>
            <HeroBtn href="#pricing">SEE PRICING</HeroBtn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1.5px solid #1a2040",
        color: "#1a2040",
        background: "transparent",
        fontSize: "11.5px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        padding: "13px 26px",
        fontFamily: "var(--font-montserrat)",
        cursor: "pointer",
        textDecoration: "none",
        transition: "background 0.2s, color 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "#1a2040";
        el.style.color = "white";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "transparent";
        el.style.color = "#1a2040";
      }}
    >
      {children}
    </a>
  );
}
