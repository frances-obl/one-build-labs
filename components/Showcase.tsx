"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─────────────────────────────────────────────
   Project data
───────────────────────────────────────────── */
const projects = [
  {
    name: "The Joyful Gifts",
    tag: "E-Commerce",
    description: "A warm, inviting gift shop experience built to maximize browsing and conversion.",
    url: "joyfulgifts.com",
    desktop: <JoyfulGiftsDesktop />,
    mobile: <JoyfulGiftsMobile />,
  },
  {
    name: "Newport Exotics",
    tag: "Business Website",
    description: "Sleek, high-end automotive showcase built to match the luxury of the brand.",
    url: "newportexotics.com",
    desktop: <NewportExoticsDesktop />,
    mobile: <NewportExoticsMobile />,
  },
  {
    name: "Marea Restaurant",
    tag: "Business Website",
    description: "A coastal dining experience with online reservations, a menu showcase, and elegant photography.",
    url: "marearestaurant.com",
    desktop: <MareaDesktop />,
    mobile: <MareaMobile />,
  },
  {
    name: "Lumina Spa",
    tag: "Landing Page",
    description: "Soft, editorial wellness branding with booking integration and a calming visual identity.",
    url: "luminaspa.co",
    desktop: <LuminaDesktop />,
    mobile: <LuminaMobile />,
  },
  {
    name: "Apex Legal Group",
    tag: "Business Website",
    description: "A commanding, trust-first law firm site built to convert visitors into consultations.",
    url: "apexlegalgroup.com",
    desktop: <ApexDesktop />,
    mobile: <ApexMobile />,
  },
  {
    name: "Crestwood Realty",
    tag: "Business Website",
    description: "Clean, aspirational real estate presence with property listings and a lead capture system.",
    url: "crestwoodrealty.com",
    desktop: <CrestwoodDesktop />,
    mobile: <CrestwoodMobile />,
  },
];

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { open } = useContactModal();

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  /* Arrow nav */
  const scroll = useCallback((dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth + 28
      : 460;
    track.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  }, []);

  /* Drag to scroll */
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.pageX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = e.pageX - dragStartX.current;
    trackRef.current.scrollLeft = dragStartScroll.current - delta;
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

      {/* ── Carousel wrapper ── */}
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
          /* hide webkit scrollbar */
          className="showcase-track"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.08 }}
              style={{ flexShrink: 0, width: "clamp(300px, 36vw, 460px)" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── View all button ── */}
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
   Project card
───────────────────────────────────────────── */
function ProjectCard({
  project,
}: {
  project: {
    name: string;
    tag: string;
    description: string;
    url: string;
    desktop: React.ReactNode;
    mobile: React.ReactNode;
  };
}) {
  return (
    <div>
      {/* Mockup group */}
      <div style={{ position: "relative", paddingBottom: "52px" }}>
        {/* Desktop frame */}
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.10)",
            boxShadow: "0 4px 28px rgba(0,0,0,0.09)",
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
              <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "8px", color: "#8a8aa8" }}>
                {project.url}
              </span>
            </div>
          </div>
          {/* Website content */}
          <div style={{ aspectRatio: "16 / 9", overflow: "hidden", position: "relative" }}>
            {project.desktop}
          </div>
        </div>

        {/* Phone mockup */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "20px",
            width: "clamp(60px, 7vw, 88px)",
            border: "2px solid #2a2a3a",
            borderRadius: "14px",
            overflow: "hidden",
            background: "#1a1a2a",
            boxShadow: "0 10px 36px rgba(0,0,0,0.24)",
            aspectRatio: "9 / 18",
          }}
        >
          <div style={{ background: "#1a1a2a", height: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "22px", height: "3px", background: "#333", borderRadius: "2px" }} />
          </div>
          <div style={{ overflow: "hidden", height: "calc(100% - 17px)" }}>
            {project.mobile}
          </div>
          <div style={{ background: "#1a1a2a", height: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "18px", height: "2px", background: "#444", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      {/* Info */}
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

/* ══════════════════════════════════════════════
   WEBSITE PREVIEWS
══════════════════════════════════════════════ */

/* ── The Joyful Gifts ── */
function JoyfulGiftsDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fdf8f5", display: "flex" }}>
      <div style={{ flex: "0 0 52%", padding: "clamp(10px,3%,28px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px" }}>
        <p style={{ fontFamily: "serif", fontSize: "clamp(5px,0.55vw,7px)", color: "#c86b7a", letterSpacing: "0.15em", textTransform: "uppercase" }}>The Joyful Gifts</p>
        <p style={{ fontFamily: "serif", fontSize: "clamp(9px,1.15vw,16px)", color: "#2d1010", lineHeight: 1.25, fontWeight: 600 }}>
          Bouquets That Bring <em style={{ fontWeight: 400 }}>Joy</em><br />to Every Moment
        </p>
        <p style={{ fontFamily: "sans-serif", fontSize: "clamp(4px,0.45vw,6px)", color: "#bbb", lineHeight: 1.5 }}>A warm, inviting gift shop experience<br />designed to delight every customer.</p>
        <div style={{ marginTop: "6px" }}>
          <div style={{ display: "inline-block", background: "#c86b7a", color: "white", fontSize: "clamp(4px,0.38vw,5.5px)", padding: "4px 10px", borderRadius: "2px", letterSpacing: "0.1em" }}>SHOP NOW</div>
        </div>
      </div>
      <div style={{ flex: "0 0 48%", background: "linear-gradient(145deg, #e8c4c8 0%, #c06080 30%, #7a2040 65%, #3d1020 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "15%", width: "35%", height: "30%", background: "rgba(255,200,200,0.3)", borderRadius: "50% 10% 50% 10%", transform: "rotate(-20deg)" }} />
        <div style={{ position: "absolute", top: "25%", left: "30%", width: "40%", height: "35%", background: "rgba(255,180,190,0.25)", borderRadius: "10% 50% 10% 50%", transform: "rotate(15deg)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "30%", height: "25%", background: "rgba(200,100,120,0.3)", borderRadius: "50%" }} />
      </div>
    </div>
  );
}
function JoyfulGiftsMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fdf8f5", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "white", borderBottom: "1px solid #f0e8e8", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "5px", color: "#c86b7a", fontWeight: 700 }}>JG</span>
        <div style={{ display: "flex", gap: "3px" }}>
          {[0,1,2].map(k => <span key={k} style={{ width: "3px", height: "3px", background: "#ddd", borderRadius: "1px", display: "inline-block" }} />)}
        </div>
      </div>
      <div style={{ background: "linear-gradient(145deg,#e8c4c8,#9a4060)", height: "38%" }} />
      <div style={{ padding: "5px", flex: 1 }}>
        <p style={{ fontFamily: "serif", fontSize: "5.5px", color: "#2d1010", fontWeight: 700, marginBottom: "2px" }}>Bouquets That Bring Joy</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "3.5px", color: "#bbb", marginBottom: "5px" }}>Warm, inviting gift experience.</p>
        <div style={{ background: "#c86b7a", color: "white", fontSize: "3.5px", padding: "2px 5px", display: "inline-block" }}>SHOP</div>
      </div>
    </div>
  );
}

/* ── Newport Exotics ── */
function NewportExoticsDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#080810", position: "relative", overflow: "hidden" }}>
      <div style={{ background: "rgba(10,10,20,0.9)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4px,0.7%,7px) clamp(8px,2%,16px)", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "serif", fontSize: "clamp(5px,0.55vw,7px)", color: "white", letterSpacing: "0.12em", fontWeight: 700, flex: 1 }}>NEWPORT EXOTICS</span>
        {["INVENTORY","SERVICES","CONTACT"].map(item => (
          <span key={item} style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.32vw,4.5px)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>{item}</span>
        ))}
      </div>
      <div style={{ position: "relative", height: "calc(100% - 20px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "70%", background: "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(40,40,70,0.8) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)", width: "65%", height: "28%", background: "linear-gradient(135deg,#1a1a2e 0%,#252540 50%,#0d0d1a 100%)", borderRadius: "8px 8px 2px 2px", boxShadow: "0 0 40px rgba(80,80,140,0.3)" }} />
        <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
          <p style={{ fontFamily: "serif", fontSize: "clamp(10px,1.5vw,20px)", color: "white", letterSpacing: "0.18em", fontWeight: 700, lineHeight: 1.1 }}>NEWPORT<br />EXOTICS</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.38vw,5px)", color: "rgba(255,255,255,0.3)", letterSpacing: "0.3em", marginTop: "5px" }}>SLEEK. HIGH-END. UNFORGETTABLE.</p>
        </div>
      </div>
    </div>
  );
}
function NewportExoticsMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#080810", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#0d0d1a", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "5px", color: "white", letterSpacing: "0.1em", fontWeight: 700 }}>NE</span>
        <div style={{ display: "flex", gap: "2px" }}>
          {[0,1,2].map(k => <span key={k} style={{ width: "3px", height: "3px", background: "rgba(255,255,255,0.25)", borderRadius: "1px", display: "inline-block" }} />)}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "6px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 80%,rgba(40,40,80,0.6) 0%,transparent 70%)" }} />
        <p style={{ fontFamily: "serif", fontSize: "7px", color: "white", letterSpacing: "0.15em", fontWeight: 700, textAlign: "center", lineHeight: 1.2, position: "relative" }}>NEWPORT<br />EXOTICS</p>
      </div>
    </div>
  );
}

/* ── Marea Restaurant ── */
function MareaDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f8f6f0", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <div style={{ background: "white", borderBottom: "1px solid #ede8e0", padding: "clamp(4px,0.7%,8px) clamp(8px,2%,20px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "serif", fontSize: "clamp(6px,0.65vw,9px)", color: "#1a150e", letterSpacing: "0.12em", fontStyle: "italic" }}>Marea</span>
        <div style={{ display: "flex", gap: "clamp(6px,1.2vw,14px)" }}>
          {["MENU","RESERVATIONS","ABOUT"].map(item => (
            <span key={item} style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.32vw,4.5px)", color: "#8a7e6e", letterSpacing: "0.1em" }}>{item}</span>
          ))}
        </div>
        <div style={{ background: "#1a150e", color: "#f8f6f0", fontSize: "clamp(3px,0.3vw,4px)", padding: "3px 8px", letterSpacing: "0.1em", fontFamily: "sans-serif" }}>RESERVE</div>
      </div>
      {/* Hero */}
      <div style={{ flex: 1, display: "flex", position: "relative" }}>
        {/* Left text */}
        <div style={{ flex: "0 0 42%", padding: "clamp(8px,1.5%,18px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.32vw,4.5px)", color: "#b5a898", letterSpacing: "0.2em", textTransform: "uppercase" }}>Coastal Fine Dining</p>
          <p style={{ fontFamily: "serif", fontSize: "clamp(9px,1.1vw,15px)", color: "#1a150e", lineHeight: 1.2, fontStyle: "italic" }}>Where the sea<br />meets the table.</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3.5px,0.38vw,5px)", color: "#b5a898", lineHeight: 1.5 }}>Reserve your table for an unforgettable evening on the coast.</p>
          <div style={{ marginTop: "4px", display: "flex", gap: "5px" }}>
            <div style={{ background: "#1a150e", color: "white", fontSize: "clamp(3px,0.28vw,4px)", padding: "4px 8px", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>RESERVE A TABLE</div>
            <div style={{ border: "1px solid #1a150e", color: "#1a150e", fontSize: "clamp(3px,0.28vw,4px)", padding: "4px 8px", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>VIEW MENU</div>
          </div>
        </div>
        {/* Right image */}
        <div style={{ flex: 1, background: "linear-gradient(160deg, #c8b89a 0%, #8c6e50 30%, #4a3828 70%, #1a0e08 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20%", left: "10%", width: "80%", height: "60%", background: "rgba(200,180,150,0.15)", borderRadius: "4px" }} />
          <div style={{ position: "absolute", bottom: "10%", left: "15%", right: "15%", height: "2px", background: "rgba(255,255,255,0.1)" }} />
        </div>
      </div>
    </div>
  );
}
function MareaMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f8f6f0", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "white", borderBottom: "1px solid #ede8e0", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "5.5px", color: "#1a150e", fontStyle: "italic" }}>Marea</span>
        <div style={{ background: "#1a150e", color: "white", fontSize: "3px", padding: "2px 5px", fontFamily: "sans-serif" }}>RESERVE</div>
      </div>
      <div style={{ background: "linear-gradient(160deg,#c8b89a,#4a3828)", height: "40%" }} />
      <div style={{ padding: "5px", flex: 1 }}>
        <p style={{ fontFamily: "serif", fontSize: "5px", color: "#1a150e", fontStyle: "italic", marginBottom: "2px" }}>Where the sea meets the table.</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "3.5px", color: "#b5a898", marginBottom: "5px" }}>Coastal fine dining.</p>
        <div style={{ background: "#1a150e", color: "white", fontSize: "3px", padding: "2px 6px", display: "inline-block", letterSpacing: "0.08em" }}>MENU</div>
      </div>
    </div>
  );
}

/* ── Lumina Spa ── */
function LuminaDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f5", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#f9f7f5", borderBottom: "1px solid #ede9e6", padding: "clamp(4px,0.7%,8px) clamp(8px,2%,20px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "serif", fontSize: "clamp(6px,0.6vw,8px)", color: "#3d2e28", letterSpacing: "0.18em", fontWeight: 400 }}>LUMINA</span>
        <div style={{ display: "flex", gap: "clamp(6px,1.2vw,14px)" }}>
          {["SERVICES","ABOUT","BOOK"].map(item => (
            <span key={item} style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.3vw,4px)", color: "#b0a090", letterSpacing: "0.12em" }}>{item}</span>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(8px,2%,20px)", gap: "6px" }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.3vw,4px)", color: "#c4a898", letterSpacing: "0.25em", textTransform: "uppercase" }}>Holistic Wellness</p>
          <p style={{ fontFamily: "serif", fontSize: "clamp(9px,1.1vw,15px)", color: "#3d2e28", lineHeight: 1.25, fontWeight: 400 }}>Restore your glow.<br />Reclaim your calm.</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3.5px,0.38vw,5px)", color: "#c4a898", lineHeight: 1.5 }}>Tailored spa treatments and wellness rituals<br />designed for the modern woman.</p>
          <div style={{ marginTop: "4px" }}>
            <div style={{ display: "inline-block", background: "#c4a898", color: "white", fontSize: "clamp(3px,0.28vw,4px)", padding: "5px 12px", letterSpacing: "0.15em", fontFamily: "sans-serif" }}>BOOK A SESSION</div>
          </div>
        </div>
        <div style={{ flex: 1, background: "linear-gradient(150deg,#e8d8d0 0%,#c4a898 40%,#8a6050 80%,#5a3830 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "15%", left: "10%", width: "70%", height: "60%", background: "rgba(255,240,230,0.1)", borderRadius: "50% 20%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(240,220,210,0.08)" }} />
        </div>
      </div>
    </div>
  );
}
function LuminaMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f9f7f5", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#f9f7f5", borderBottom: "1px solid #ede9e6", padding: "4px 6px", display: "flex", justifyContent: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "5px", color: "#3d2e28", letterSpacing: "0.18em" }}>LUMINA</span>
      </div>
      <div style={{ background: "linear-gradient(150deg,#e8d8d0,#8a6050)", height: "38%" }} />
      <div style={{ padding: "5px", flex: 1 }}>
        <p style={{ fontFamily: "serif", fontSize: "4.5px", color: "#3d2e28", marginBottom: "2px", lineHeight: 1.3 }}>Restore your glow. Reclaim your calm.</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "3.5px", color: "#c4a898", marginBottom: "5px" }}>Holistic wellness spa.</p>
        <div style={{ background: "#c4a898", color: "white", fontSize: "3px", padding: "2px 6px", display: "inline-block", letterSpacing: "0.1em" }}>BOOK NOW</div>
      </div>
    </div>
  );
}

/* ── Apex Legal ── */
function ApexDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0c0f1a", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "rgba(12,15,26,0.97)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "clamp(4px,0.7%,8px) clamp(8px,2%,20px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "clamp(5px,0.5vw,7px)", height: "clamp(5px,0.5vw,7px)", background: "#c9a84c", borderRadius: "50%" }} />
          <span style={{ fontFamily: "serif", fontSize: "clamp(5px,0.55vw,7px)", color: "white", letterSpacing: "0.1em", fontWeight: 600 }}>APEX LEGAL</span>
        </div>
        <div style={{ display: "flex", gap: "clamp(6px,1.2vw,14px)" }}>
          {["PRACTICE AREAS","ATTORNEYS","RESULTS","CONTACT"].map(item => (
            <span key={item} style={{ fontFamily: "sans-serif", fontSize: "clamp(2.5px,0.28vw,4px)", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>{item}</span>
          ))}
        </div>
        <div style={{ background: "#c9a84c", color: "#0c0f1a", fontSize: "clamp(2.5px,0.28vw,4px)", padding: "3px 8px", letterSpacing: "0.1em", fontFamily: "sans-serif", fontWeight: 700 }}>FREE CONSULT</div>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "clamp(8px,2%,20px)", gap: "clamp(10px,2%,20px)" }}>
        <div style={{ flex: "0 0 50%", display: "flex", flexDirection: "column", gap: "6px" }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.3vw,4px)", color: "#c9a84c", letterSpacing: "0.25em", textTransform: "uppercase" }}>Trusted. Tenacious. Proven.</p>
          <p style={{ fontFamily: "serif", fontSize: "clamp(9px,1.1vw,15px)", color: "white", lineHeight: 1.2 }}>We fight for the outcome<br /><em style={{ color: "#c9a84c" }}>you deserve.</em></p>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3.5px,0.38vw,5px)", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>Premier litigation and advisory firm<br />serving clients nationwide since 1998.</p>
          <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
            <div style={{ background: "#c9a84c", color: "#0c0f1a", fontSize: "clamp(3px,0.28vw,4px)", padding: "4px 10px", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>SCHEDULE CONSULT</div>
            <div style={{ border: "1px solid rgba(255,255,255,0.15)", color: "white", fontSize: "clamp(3px,0.28vw,4px)", padding: "4px 10px", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>OUR TEAM</div>
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
            {[["98%","Win Rate"],["25+","Years"],["$2B+","Recovered"]].map(([val, label]) => (
              <div key={label}>
                <p style={{ fontFamily: "serif", fontSize: "clamp(7px,0.8vw,11px)", color: "#c9a84c", fontWeight: 700 }}>{val}</p>
                <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.3vw,4px)", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, background: "linear-gradient(135deg,#1a1f30 0%,#0c0f1a 100%)", borderRadius: "4px", height: "80%", position: "relative", border: "1px solid rgba(201,168,76,0.15)" }}>
          <div style={{ position: "absolute", top: "15%", left: "10%", right: "10%", height: "60%", background: "linear-gradient(180deg,rgba(201,168,76,0.08) 0%,transparent 100%)", borderRadius: "2px" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)", width: "40%", height: "2px", background: "rgba(201,168,76,0.3)" }} />
        </div>
      </div>
    </div>
  );
}
function ApexMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0c0f1a", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#0c0f1a", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <div style={{ width: "4px", height: "4px", background: "#c9a84c", borderRadius: "50%" }} />
          <span style={{ fontFamily: "serif", fontSize: "4.5px", color: "white", letterSpacing: "0.08em" }}>APEX</span>
        </div>
        <div style={{ background: "#c9a84c", color: "#0c0f1a", fontSize: "3px", padding: "2px 5px", fontWeight: 700 }}>CONSULT</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "6px", gap: "4px" }}>
        <p style={{ fontFamily: "sans-serif", fontSize: "3px", color: "#c9a84c", letterSpacing: "0.2em" }}>TRUSTED. TENACIOUS.</p>
        <p style={{ fontFamily: "serif", fontSize: "6px", color: "white", lineHeight: 1.2 }}>We fight for the outcome you deserve.</p>
        <div style={{ display: "flex", gap: "8px", marginTop: "3px" }}>
          {[["98%","Win Rate"],["25+","Years"]].map(([val, label]) => (
            <div key={label}>
              <p style={{ fontFamily: "serif", fontSize: "6px", color: "#c9a84c", fontWeight: 700 }}>{val}</p>
              <p style={{ fontFamily: "sans-serif", fontSize: "2.5px", color: "rgba(255,255,255,0.3)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Crestwood Realty ── */
function CrestwoodDesktop() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f5f5f2", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "white", borderBottom: "1px solid #e8e8e4", padding: "clamp(4px,0.7%,8px) clamp(8px,2%,20px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "serif", fontSize: "clamp(6px,0.6vw,8px)", color: "#1c1c18", letterSpacing: "0.08em" }}>CRESTWOOD<span style={{ color: "#7a8c60", marginLeft: "3px" }}>REALTY</span></span>
        <div style={{ display: "flex", gap: "clamp(6px,1.2vw,14px)" }}>
          {["BUY","SELL","RENT","AGENTS"].map(item => (
            <span key={item} style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.3vw,4px)", color: "#8a8a80", letterSpacing: "0.1em" }}>{item}</span>
          ))}
        </div>
        <div style={{ background: "#7a8c60", color: "white", fontSize: "clamp(3px,0.28vw,4px)", padding: "3px 8px", letterSpacing: "0.1em", fontFamily: "sans-serif" }}>LIST WITH US</div>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ flex: "0 0 45%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(8px,2%,20px)", gap: "5px" }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "clamp(3px,0.3vw,4px)", color: "#7a8c60", letterSpacing: "0.22em", textTransform: "uppercase" }}>Find Your Place</p>
          <p style={{ fontFamily: "serif", fontSize: "clamp(9px,1.1vw,15px)", color: "#1c1c18", lineHeight: 1.2 }}>Homes that feel<br />like home.</p>
          <div style={{ background: "#f0f0ec", borderRadius: "3px", padding: "5px 8px", display: "flex", gap: "5px", alignItems: "center", marginTop: "4px" }}>
            <div style={{ flex: 1, height: "6px", background: "white", borderRadius: "2px", border: "1px solid #e0e0d8" }} />
            <div style={{ background: "#7a8c60", color: "white", fontSize: "clamp(3px,0.28vw,4px)", padding: "3px 7px", borderRadius: "2px", fontFamily: "sans-serif" }}>SEARCH</div>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "3px" }}>
            {[["240+","Listings"],["12yr","Experience"],["98%","Satisfaction"]].map(([val, label]) => (
              <div key={label}>
                <p style={{ fontFamily: "serif", fontSize: "clamp(6px,0.7vw,10px)", color: "#7a8c60", fontWeight: 700 }}>{val}</p>
                <p style={{ fontFamily: "sans-serif", fontSize: "clamp(2.5px,0.28vw,3.5px)", color: "#aaa", letterSpacing: "0.06em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, background: "linear-gradient(160deg,#d8e0c8 0%,#a0b080 30%,#607040 70%,#304020 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20%", left: "15%", width: "70%", height: "50%", background: "rgba(255,255,255,0.08)", borderRadius: "3px" }} />
          <div style={{ position: "absolute", bottom: "12%", left: "20%", right: "20%", height: "1px", background: "rgba(255,255,255,0.15)" }} />
        </div>
      </div>
    </div>
  );
}
function CrestwoodMobile() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f5f5f2", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "white", borderBottom: "1px solid #e8e8e4", padding: "4px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: "4.5px", color: "#1c1c18", letterSpacing: "0.06em" }}>CRESTWOOD</span>
        <div style={{ background: "#7a8c60", color: "white", fontSize: "3px", padding: "2px 5px", fontFamily: "sans-serif" }}>SEARCH</div>
      </div>
      <div style={{ background: "linear-gradient(160deg,#d8e0c8,#607040)", height: "38%" }} />
      <div style={{ padding: "5px", flex: 1 }}>
        <p style={{ fontFamily: "serif", fontSize: "4.5px", color: "#1c1c18", marginBottom: "2px", lineHeight: 1.3 }}>Homes that feel like home.</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "3.5px", color: "#7a8c60", marginBottom: "4px" }}>240+ listings available.</p>
        <div style={{ background: "#7a8c60", color: "white", fontSize: "3px", padding: "2px 6px", display: "inline-block" }}>BROWSE</div>
      </div>
    </div>
  );
}
