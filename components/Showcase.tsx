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
    image: "/showcase-posh-nail-full.png",
  },
  {
    name: "Brow Envy",
    tag: "Beauty Studio",
    description:
      "A clean, modern beauty studio site built around brow and lash services, with a warm visual identity and seamless booking flow.",
    image: "/showcase-brow-envy-full.png",
  },
  {
    name: "Brake World",
    tag: "Business Website",
    description:
      "A trust-first auto repair site built for a family-owned shop with over 30 years of service. Clean, credible, and conversion-ready.",
    image: "/showcase-brake-world-full.png",
  },
];

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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      /* Mobile: 72vw — one card centered per snap stop (single viewing point), glimpse of adjacent cards.
         Desktop: fills its grid column. */
      className="snap-center snap-always shrink-0 w-[72vw] md:w-auto flex flex-col"
    >
      {/* Screenshot frame */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/10",
          borderRadius: "6px",
          overflow: "hidden",
          border: "1.5px solid rgba(26, 32, 64, 0.12)",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
          position: "relative",
          background: "#fff",
          flexShrink: 0,
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 72vw, 33vw"
          style={{ objectFit: "fill" }}
        />
      </div>

      {/* Project info */}
      <div style={{ marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "4px",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(15px, 1.8vw, 22px)",
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
              padding: "2px 6px",
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
            fontSize: "11px",
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

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { open } = useContactModal();

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        background: "#edeef4",
      }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        style={{
          flexShrink: 0,
          textAlign: "center",
          paddingTop: "clamp(32px, 5vw, 48px)",
          paddingBottom: "clamp(16px, 2vw, 24px)",
          paddingInline: "24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#8a8aa8",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.7rem, 4.2vw, 3.4rem)",
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

      {/* ── Cards — shared snap carousel on mobile, 3-col grid on desktop ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          minHeight: 0,
        }}
      >
        {/* Mobile carousel: 72vw cards, one centered per snap stop — single viewing point */}
        <div
          className="md:hidden w-full flex snap-x snap-mandatory overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            /* (100vw - 72vw) / 2 = 14vw each side centers each snapped card */
            paddingInline: "14vw",
            gap: "16px",
            paddingBottom: "4px",
          }}
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

        {/* Desktop grid */}
        <div
          className="hidden md:block w-full"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingInline: "clamp(24px, 4vw, 40px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(20px, 3vw, 32px)",
              alignItems: "start",
            }}
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
        style={{
          flexShrink: 0,
          textAlign: "center",
          paddingTop: "clamp(20px, 3vw, 32px)",
          paddingBottom: "clamp(28px, 4vw, 40px)",
        }}
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
