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
  mobile = false,
}: {
  project: (typeof projects)[number];
  delay: number;
  inView: boolean;
  mobile?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      style={{
        /* Mobile: exact viewport width card so nothing peeks */
        width: mobile ? "80vw" : "100%",
        flexShrink: mobile ? 0 : undefined,
        display: "flex",
        flexDirection: "column",
        scrollSnapAlign: mobile ? "center" : undefined,
      }}
    >
      {/* Screenshot frame */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/10",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1.5px solid rgba(26, 32, 64, 0.12)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          position: "relative",
          background: "#fff",
          flexShrink: 0,
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes={mobile ? "80vw" : "(max-width: 1024px) 33vw, 400px"}
          style={{ objectFit: "fill" }}
        />
      </div>

      {/* Project info — always fully visible */}
      <div style={{ marginTop: "14px", paddingBottom: "4px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "6px",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: mobile ? "18px" : "clamp(16px, 1.8vw, 22px)",
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

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { open } = useContactModal();

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        /* min-height so content is never clipped; svh excludes mobile browser chrome */
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

      {/* ── Mobile: horizontal snap carousel (one card centered per stop) ── */}
      <div
        className="md:hidden"
        style={{
          flexShrink: 0,
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          /* 10vw padding on each side centers the 80vw card */
          paddingInline: "10vw",
          gap: "16px",
          paddingBottom: "8px",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            delay={i * 0.12}
            inView={inView}
            mobile
          />
        ))}
      </div>

      {/* ── Desktop: 3-col grid, all visible ── */}
      <div
        className="hidden md:flex flex-1 items-center"
        style={{ minHeight: 0 }}
      >
        <div
          style={{
            width: "100%",
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
