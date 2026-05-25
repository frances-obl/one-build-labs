"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const projects = [
  {
    name: "Brake World",
    tag: "Business Website",
    description:
      "A trust-first auto repair site built for a family-owned shop with over 30 years of service. Clean, credible, and conversion-ready.",
    url: "brakeworld-mockup.vercel.app",
    image: "/showcase-brake-world.jpeg",
  },
  {
    name: "Posh Nail Lounge",
    tag: "Luxury Salon",
    description:
      "A high-end nail salon experience built to attract premium clientele and drive bookings with an elegant, editorial design.",
    url: "posh-nail-lounge-sigma.vercel.app",
    image: "/showcase-posh-nail.webp",
  },
  {
    name: "Brow Envy",
    tag: "Beauty Studio",
    description:
      "A clean, modern beauty studio site built around brow and lash services, with a warm visual identity and seamless booking flow.",
    url: "brow-envy.vercel.app",
    image: "/showcase-brow-envy.png",
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { open } = useContactModal();

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const scroll = useCallback((dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth + 28
      : 460;
    track.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.pageX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = dragStartScroll.current - (e.pageX - dragStartX.current);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#edeef4]"
      style={{
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "72px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        style={{ textAlign: "center", marginBottom: "52px", padding: "0 40px" }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#8a8aa8",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#1a2040",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            marginBottom: "14px",
          }}
        >
          Websites we&apos;ve brought to life.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "13px",
            color: "#6b7280",
            lineHeight: 1.6,
          }}
        >
          Real projects, real clients, real results.
        </p>
      </motion.div>

      {/* ── Carousel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ width: "100%", position: "relative" }}
      >
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          style={{
            position: "absolute",
            left: "clamp(8px, 1.5vw, 24px)",
            top: "calc(50% - 72px)",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1.5px solid rgba(26,32,64,0.18)",
            background: "rgba(255,255,255,0.90)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#1a2040",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "white";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.14)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.90)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
          }}
        >
          <ChevronLeft style={{ width: 18, height: 18 }} />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          style={{
            position: "absolute",
            right: "clamp(8px, 1.5vw, 24px)",
            top: "calc(50% - 72px)",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1.5px solid rgba(26,32,64,0.18)",
            background: "rgba(255,255,255,0.90)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#1a2040",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "white";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.14)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.90)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
          }}
        >
          <ChevronRight style={{ width: 18, height: 18 }} />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="showcase-track"
          style={{
            display: "flex",
            gap: "28px",
            overflowX: "auto",
            overflowY: "visible",
            padding: "12px clamp(48px, 5vw, 80px) 20px",
            scrollbarWidth: "none",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.08 }}
              style={{ flexShrink: 0, width: "clamp(300px, 32vw, 460px)" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{ marginTop: "44px" }}
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

/* ─────────────────────────────────────────────
   Project card — desktop frame + floating phone
───────────────────────────────────────────── */
function ProjectCard({
  project,
}: {
  project: {
    name: string;
    tag: string;
    description: string;
    url: string;
    image: string;
  };
}) {
  return (
    <div>
      {/* Mockup group */}
      <div style={{ position: "relative", paddingBottom: "56px" }}>

        {/* Desktop browser frame */}
        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.09)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.09)",
            background: "white",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: "#f0f0f4",
              borderBottom: "1px solid #e0e0ea",
              padding: "7px 10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <div
              style={{
                flex: 1,
                marginLeft: "8px",
                background: "white",
                borderRadius: "4px",
                padding: "2px 8px",
                border: "1px solid #e0e0ea",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "8px",
                  color: "#8a8aa8",
                }}
              >
                {project.url}
              </span>
            </div>
          </div>

          {/* Hero screenshot — 16:9 */}
          <div style={{ aspectRatio: "16 / 9", overflow: "hidden", position: "relative" }}>
            <Image
              src={project.image}
              alt={`${project.name} desktop`}
              fill
              sizes="(max-width: 768px) 100vw, 460px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
        </div>

        {/* Floating phone mockup */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "16px",
            width: "clamp(64px, 7.5vw, 96px)",
            border: "2.5px solid #1e1e2e",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#0f0f1a",
            boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
            aspectRatio: "9 / 18",
          }}
        >
          {/* Top notch */}
          <div
            style={{
              background: "#0f0f1a",
              height: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ width: "22px", height: "3px", background: "#2a2a3a", borderRadius: "2px" }} />
          </div>

          {/* Mobile screenshot */}
          <div style={{ overflow: "hidden", height: "calc(100% - 17px)", position: "relative" }}>
            <Image
              src={project.image}
              alt={`${project.name} mobile`}
              fill
              sizes="96px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>

          {/* Bottom home bar */}
          <div
            style={{
              background: "#0f0f1a",
              height: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ width: "18px", height: "2px", background: "#2a2a3a", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      {/* Card info */}
      <div style={{ marginTop: "18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(17px, 2vw, 22px)",
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
              fontSize: "8.5px",
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
            fontSize: "12px",
            color: "#6b7280",
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
}
