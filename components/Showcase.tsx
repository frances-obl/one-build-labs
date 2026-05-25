"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const projects = [
  {
    name: "Posh Nail Lounge",
    tag: "Luxury Salon",
    description:
      "A high-end nail salon experience built to attract premium clientele and drive bookings with an elegant, editorial design.",
    image: "/showcase-posh-nail-full.jpg",
  },
  {
    name: "Brow Envy",
    tag: "Beauty Studio",
    description:
      "A clean, modern beauty studio site built around brow and lash services, with a warm visual identity and seamless booking flow.",
    image: "/showcase-brow-envy-full.jpg",
  },
  {
    name: "Brake World",
    tag: "Business Website",
    description:
      "A trust-first auto repair site built for a family-owned shop with over 30 years of service. Clean, credible, and conversion-ready.",
    image: "/showcase-brake-world-full.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   Single project card: laptop mockup + overlapping phone
───────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  delay,
  inView,
}: {
  project: (typeof projects)[number];
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
      /* Mobile: snap card, full-width. Desktop: auto fills grid column */
      className="snap-center shrink-0 w-[82vw] md:w-auto flex flex-col"
    >
      {/* Device group — relative so phone can overlap */}
      <div
        style={{
          position: "relative",
          /* Right + bottom padding give the phone room to sit outside the laptop */
          paddingRight: "clamp(52px, 7vw, 80px)",
          paddingBottom: "clamp(38px, 4.5vw, 56px)",
        }}
      >
        {/* ── Laptop ── */}
        <div style={{ position: "relative" }}>
          {/* Lid */}
          <div
            style={{
              width: "100%",
              background: "linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)",
              borderRadius: "10px 10px 0 0",
              padding: "10px 10px 7px",
              border: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "none",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Camera */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3a3a3c" }} />
            </div>
            {/* Screen — 16:10 */}
            <div
              style={{
                aspectRatio: "16/10",
                overflow: "hidden",
                borderRadius: "3px",
                background: "#000",
                position: "relative",
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 82vw, 33vw"
                style={{ objectFit: "fill" }}
              />
              {/* Glare */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          {/* Base */}
          <div
            style={{
              width: "104%",
              marginLeft: "-2%",
              height: "14px",
              background: "linear-gradient(to bottom, #3c3c3e 0%, #2a2a2c 100%)",
              borderRadius: "0 0 5px 5px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          />

          {/* Floor shadow */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              height: "28px",
              background: "rgba(0,0,0,0.10)",
              filter: "blur(18px)",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* ── Phone — absolute, overlaps bottom-right of laptop ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: "clamp(68px, 8vw, 96px)",
              background: "linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)",
              borderRadius: "22px",
              padding: "8px 6px",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow:
                "0 20px 56px rgba(0,0,0,0.42), 0 6px 18px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            {/* Dynamic Island */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>
              <div style={{ width: "44%", height: "13px", background: "#000", borderRadius: "8px" }} />
            </div>
            {/* Screen */}
            <div
              style={{
                aspectRatio: "9/19.5",
                overflow: "hidden",
                borderRadius: "14px",
                background: "#000",
                position: "relative",
              }}
            >
              <Image
                src={project.image}
                alt={`${project.name} mobile`}
                fill
                sizes="96px"
                style={{ objectFit: "cover", objectPosition: "top left" }}
              />
              {/* Glare */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 36%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            </div>
            {/* Home indicator */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
              <div style={{ width: "36%", height: "3px", background: "rgba(255,255,255,0.18)", borderRadius: "2px" }} />
            </div>
          </div>

          {/* Phone shadow */}
          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "75%",
              height: "20px",
              background: "rgba(0,0,0,0.16)",
              filter: "blur(12px)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Project info */}
      <div style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 700,
              color: "#1a2040",
              lineHeight: 1.1,
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "8px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#8a8aa8",
              background: "rgba(26,32,64,0.07)",
              padding: "3px 8px",
              borderRadius: "9999px",
              whiteSpace: "nowrap",
            }}
          >
            {project.tag}
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "11.5px",
            color: "#6b7280",
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────────── */
export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { open } = useContactModal();

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#edeef4",
      }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        className="shrink-0 text-center pt-10 md:pt-12 pb-4 md:pb-6 px-6"
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#8a8aa8",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.9rem, 4.2vw, 3.4rem)",
            fontWeight: 700,
            color: "#1a2040",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            marginBottom: "8px",
          }}
        >
          Websites we&apos;ve brought to life.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "12px",
            color: "#6b7280",
            lineHeight: 1.6,
          }}
        >
          Real projects, real clients, real results.
        </p>
      </motion.div>

      {/* ── Projects ── */}
      <div className="flex-1 min-h-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          {/*
            Mobile:  horizontal snap carousel (one card per viewport)
            Desktop: 3-column grid, all visible at once
          */}
          <div
            className="flex snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-3 md:overflow-x-visible md:snap-none gap-6 md:gap-8 items-start"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                delay={i * 0.12}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <motion.div
        className="shrink-0 text-center pb-8 md:pb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <button
          onClick={() => open()}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10.5px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#1a2040",
            background: "transparent",
            border: "1.5px solid #1a2040",
            padding: "13px 36px",
            borderRadius: 0,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#1a2040";
            (e.currentTarget as HTMLElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#1a2040";
          }}
        >
          START YOUR PROJECT
        </button>
      </motion.div>
    </section>
  );
}
