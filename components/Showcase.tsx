"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─────────────────────────────────────────────
   Project data
───────────────────────────────────────────── */
const projects = [
  {
    name: "The Joyful Gifts",
    description:
      "A warm, inviting gift shop experience designed to maximize browsing and sales.",
    url: "joyfulgifts.com",
    desktop: <JoyfulGiftsDesktop />,
    mobile: <JoyfulGiftsMobile />,
  },
  {
    name: "Newport Exotics",
    description:
      "Sleek, high-end automotive showcase built to match the luxury of the brand.",
    url: "newportexotics.com",
    desktop: <NewportExoticsDesktop />,
    mobile: <NewportExoticsMobile />,
  },
];

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { open } = useContactModal();

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-[#edeef4]"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 40px",
      }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        style={{ textAlign: "center", marginBottom: "56px" }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#8a8aa8",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#16162a",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            marginBottom: "16px",
          }}
        >
          Websites we&apos;ve brought to life.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "13px",
            color: "#8a8aa8",
            lineHeight: 1.6,
          }}
        >
          Real projects, real clients, real results. Click through to see them live.
        </p>
      </motion.div>

      {/* ── Cards grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(24px, 3vw, 48px)",
          width: "100%",
          maxWidth: "1100px",
          marginBottom: "52px",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.12 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* ── View all button ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          onClick={() => open()}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10.5px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#16162a",
            background: "transparent",
            border: "1.5px solid #16162a",
            padding: "13px 36px",
            borderRadius: 0,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#16162a";
            el.style.color = "white";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.color = "#16162a";
          }}
        >
          VIEW ALL WORK
        </button>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Project card: desktop mockup + overlapping phone
───────────────────────────────────────────── */
function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    url: string;
    desktop: React.ReactNode;
    mobile: React.ReactNode;
  };
}) {
  return (
    <div>
      {/* Mockup group — desktop + overlapping phone */}
      <div style={{ position: "relative", paddingBottom: "56px" }}>
        {/* Desktop browser frame */}
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.10)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            background: "white",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: "#f0f0f4",
              borderBottom: "1px solid #e0e0ea",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <div
              style={{
                flex: 1,
                marginLeft: "8px",
                background: "white",
                borderRadius: "4px",
                padding: "3px 10px",
                border: "1px solid #e0e0ea",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "9px",
                  color: "#8a8aa8",
                }}
              >
                {project.url}
              </span>
            </div>
          </div>

          {/* Website preview content */}
          <div style={{ aspectRatio: "16 / 9", overflow: "hidden", position: "relative" }}>
            {project.desktop}
          </div>
        </div>

        {/* Phone mockup — overlaps bottom-right of desktop */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "clamp(12px, 2vw, 24px)",
            width: "clamp(64px, 6.5vw, 90px)",
            border: "2px solid #2a2a3a",
            borderRadius: "14px",
            overflow: "hidden",
            background: "#1a1a2a",
            boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
            aspectRatio: "9 / 18",
          }}
        >
          {/* Phone top bar */}
          <div
            style={{
              background: "#1a1a2a",
              height: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "24px", height: "3px", background: "#333", borderRadius: "2px" }} />
          </div>
          {/* Phone content */}
          <div style={{ flex: 1, overflow: "hidden", height: "calc(100% - 20px)" }}>
            {project.mobile}
          </div>
          {/* Home indicator */}
          <div
            style={{
              background: "#1a1a2a",
              height: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "20px", height: "2px", background: "#444", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div style={{ marginTop: "20px" }}>
        <h3
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 700,
            color: "#16162a",
            marginBottom: "8px",
            lineHeight: 1.1,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "12px",
            color: "#8a8aa8",
            lineHeight: 1.65,
            maxWidth: "360px",
          }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   The Joyful Gifts — desktop preview
───────────────────────────────────────────── */
function JoyfulGiftsDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fdf8f5", display: "flex" }}>
      {/* Left: text content */}
      <div
        style={{
          flex: "0 0 52%",
          padding: "clamp(10px, 3%, 28px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <p style={{ fontFamily: "serif", fontSize: "clamp(5px, 0.65vw, 8px)", color: "#c86b7a", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          The Joyful Gifts
        </p>
        <p style={{ fontFamily: "serif", fontSize: "clamp(8px, 1.1vw, 15px)", color: "#2d1010", lineHeight: 1.25, fontWeight: 600 }}>
          Bouquets That Bring <em style={{ fontWeight: 400 }}>Joy</em><br />to Every Moment
        </p>
        <p style={{ fontFamily: "sans-serif", fontSize: "clamp(4px, 0.5vw, 7px)", color: "#999", lineHeight: 1.5, marginTop: "2px" }}>
          A warm, inviting gift shop experience<br />designed to maximize browsing and sales.
        </p>
        <div style={{ marginTop: "8px" }}>
          <div style={{ display: "inline-block", background: "#c86b7a", color: "white", fontSize: "clamp(4px, 0.4vw, 6px)", padding: "4px 10px", borderRadius: "2px", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>
            SHOP NOW
          </div>
        </div>
      </div>
      {/* Right: floral image simulation */}
      <div
        style={{
          flex: "0 0 48%",
          background: "linear-gradient(145deg, #e8c4c8 0%, #c06080 30%, #7a2040 65%, #3d1020 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Petal shapes */}
        <div style={{ position: "absolute", top: "10%", left: "15%", width: "35%", height: "30%", background: "rgba(255,200,200,0.3)", borderRadius: "50% 10% 50% 10%", transform: "rotate(-20deg)" }} />
        <div style={{ position: "absolute", top: "25%", left: "30%", width: "40%", height: "35%", background: "rgba(255,180,190,0.25)", borderRadius: "10% 50% 10% 50%", transform: "rotate(15deg)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "30%", height: "25%", background: "rgba(200,100,120,0.3)", borderRadius: "50%", transform: "rotate(5deg)" }} />
        <div style={{ position: "absolute", top: "40%", left: "5%", width: "25%", height: "40%", background: "rgba(180,80,100,0.3)", borderRadius: "50% 20%", transform: "rotate(-10deg)" }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   The Joyful Gifts — mobile preview
───────────────────────────────────────────── */
function JoyfulGiftsMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fdf8f5", display: "flex", flexDirection: "column" }}>
      {/* Mobile nav */}
      <div style={{ background: "white", borderBottom: "1px solid #f0e8e8", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "5px", color: "#c86b7a", fontWeight: 700 }}>JG</span>
        <div style={{ display: "flex", gap: "3px" }}>
          <span style={{ width: "3px", height: "3px", background: "#ccc", borderRadius: "1px" }} />
          <span style={{ width: "3px", height: "3px", background: "#ccc", borderRadius: "1px" }} />
          <span style={{ width: "3px", height: "3px", background: "#ccc", borderRadius: "1px" }} />
        </div>
      </div>
      {/* Hero image */}
      <div style={{ background: "linear-gradient(145deg, #e8c4c8, #9a4060)", height: "40%", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(200,100,120,0.2)", borderRadius: "20%", margin: "10%" }} />
      </div>
      {/* Content */}
      <div style={{ padding: "5px", flex: 1 }}>
        <p style={{ fontFamily: "serif", fontSize: "5.5px", color: "#2d1010", fontWeight: 700, lineHeight: 1.2, marginBottom: "3px" }}>Bouquets That Bring Joy</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "4px", color: "#999", lineHeight: 1.4, marginBottom: "5px" }}>Warm, inviting gift shop experience.</p>
        <div style={{ background: "#c86b7a", color: "white", fontSize: "4px", padding: "2px 6px", display: "inline-block", borderRadius: "1px" }}>SHOP NOW</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Newport Exotics — desktop preview
───────────────────────────────────────────── */
function NewportExoticsDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#080810", position: "relative", overflow: "hidden" }}>
      {/* Navbar */}
      <div style={{ background: "rgba(10,10,20,0.9)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "clamp(4px, 0.8%, 8px) clamp(8px, 2%, 18px)", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "serif", fontSize: "clamp(5px, 0.6vw, 8px)", color: "white", letterSpacing: "0.12em", fontWeight: 700, flex: 1 }}>NEWPORT EXOTICS</span>
        {["INVENTORY", "SERVICES", "ABOUT", "CONTACT"].map(item => (
          <span key={item} style={{ fontFamily: "sans-serif", fontSize: "clamp(3px, 0.35vw, 5px)", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em" }}>{item}</span>
        ))}
      </div>
      {/* Hero content */}
      <div style={{ position: "relative", height: "calc(100% - 24px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Car body silhouette gradient */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "70%",
          background: "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(40,40,70,0.8) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "30%",
          background: "linear-gradient(135deg, #1a1a2e 0%, #252540 50%, #0d0d1a 100%)",
          borderRadius: "8px 8px 2px 2px",
          boxShadow: "0 0 40px rgba(80,80,140,0.3)",
        }} />
        {/* Text */}
        <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
          <p style={{ fontFamily: "serif", fontSize: "clamp(10px, 1.6vw, 22px)", color: "white", letterSpacing: "0.18em", fontWeight: 700, lineHeight: 1.1 }}>
            NEWPORT<br />EXOTICS
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px, 0.4vw, 6px)", color: "rgba(255,255,255,0.35)", letterSpacing: "0.3em", marginTop: "6px" }}>
            SLEEK. HIGH-END. UNFORGETTABLE.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Newport Exotics — mobile preview
───────────────────────────────────────────── */
function NewportExoticsMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#080810", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <div style={{ background: "#0d0d1a", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "5px", color: "white", letterSpacing: "0.1em", fontWeight: 700 }}>NE</span>
        <div style={{ display: "flex", gap: "2px" }}>
          <span style={{ width: "3px", height: "3px", background: "rgba(255,255,255,0.3)", borderRadius: "1px" }} />
          <span style={{ width: "3px", height: "3px", background: "rgba(255,255,255,0.3)", borderRadius: "1px" }} />
          <span style={{ width: "3px", height: "3px", background: "rgba(255,255,255,0.3)", borderRadius: "1px" }} />
        </div>
      </div>
      {/* Hero */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "6px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 80%, rgba(40,40,80,0.6) 0%, transparent 70%)" }} />
        <p style={{ fontFamily: "serif", fontSize: "7px", color: "white", letterSpacing: "0.15em", fontWeight: 700, textAlign: "center", lineHeight: 1.2, position: "relative" }}>NEWPORT<br />EXOTICS</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "3.5px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", marginTop: "4px", position: "relative" }}>24/7</p>
      </div>
    </div>
  );
}
