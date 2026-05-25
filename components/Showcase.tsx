"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    name: "Brake World",
    tag: "Business Website",
    description:
      "A trust-first auto repair site built for a family-owned shop with over 30 years of service. Clean, credible, and conversion-ready.",
    image: "/showcase-brake-world-full.jpg",
  },
  {
    name: "Brow Envy",
    tag: "Beauty Studio",
    description:
      "A clean, modern beauty studio site built around brow and lash services, with a warm visual identity and seamless booking flow.",
    image: "/showcase-brow-envy-full.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   MacBook mockup
───────────────────────────────────────────────────────────── */
function MacBookMockup({ currentIndex }: { currentIndex: number }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Lid */}
      <div
        style={{
          width: "clamp(340px, 40vw, 520px)",
          background: "linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)",
          borderRadius: "10px 10px 0 0",
          padding: "12px 12px 8px",
          border: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "none",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        {/* Camera dot */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "7px" }}>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#3a3a3c",
            }}
          />
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
          <AnimatePresence mode="wait">
            <motion.div
              key={`mac-${currentIndex}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.92, ease }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].name}
                fill
                sizes="(max-width: 1280px) 45vw, 520px"
                style={{ objectFit: "fill" }}
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Screen glare */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      {/* Base / keyboard strip */}
      <div
        style={{
          width: "104%",
          marginLeft: "-2%",
          height: "18px",
          background: "linear-gradient(to bottom, #3c3c3e 0%, #2c2c2e 100%)",
          borderRadius: "0 0 6px 6px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "8px",
            background: "rgba(0,0,0,0.2)",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Floor shadow */}
      <div
        style={{
          position: "absolute",
          bottom: "-28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "88%",
          height: "36px",
          background: "rgba(0,0,0,0.12)",
          filter: "blur(22px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Phone mockup
───────────────────────────────────────────────────────────── */
function PhoneMockup({
  currentIndex,
  widthStyle,
}: {
  currentIndex: number;
  widthStyle: string;
}) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: widthStyle,
          background: "linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)",
          borderRadius: "26px",
          padding: "9px 7px",
          boxShadow:
            "0 28px 70px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Dynamic Island */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "5px" }}>
          <div
            style={{
              width: "44%",
              height: "16px",
              background: "#000",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Screen — 9:19.5 */}
        <div
          style={{
            aspectRatio: "9/19.5",
            overflow: "hidden",
            borderRadius: "18px",
            background: "#000",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`phone-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.92, ease, delay: 0.08 }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={projects[currentIndex].image}
                alt={`${projects[currentIndex].name} mobile`}
                fill
                sizes="200px"
                style={{ objectFit: "cover", objectPosition: "top left" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Screen glare */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 38%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        </div>

        {/* Home indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
          <div
            style={{
              width: "36%",
              height: "3px",
              background: "rgba(255,255,255,0.18)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Floor shadow */}
      <div
        style={{
          position: "absolute",
          bottom: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "26px",
          background: "rgba(0,0,0,0.18)",
          filter: "blur(16px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────────── */
export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { open } = useContactModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!inView || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [inView, isPaused]);

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
        background:
          "radial-gradient(ellipse 80% 60% at 50% 38%, #ffffff 0%, #f2efeb 55%, #e8e3dc 100%)",
      }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        className="shrink-0 text-center pt-10 md:pt-14 pb-3 md:pb-5 px-6"
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

      {/* ── Device Stage ── */}
      <motion.div
        className="flex-1 min-h-0 flex items-center justify-center"
        style={{ position: "relative" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Studio spotlight glow behind devices */}
        <div
          style={{
            position: "absolute",
            width: "60%",
            height: "70%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.75) 0%, transparent 70%)",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(48px)",
            pointerEvents: "none",
          }}
        />

        {/* Desktop: MacBook + iPhone floating together */}
        <motion.div
          className="hidden md:flex items-end"
          animate={{
            y: [0, -10, -4, -10, 0],
            rotate: [0, 0.2, 0, -0.2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MacBookMockup currentIndex={currentIndex} />
          <div
            style={{
              marginLeft: "-30px",
              marginBottom: "24px",
              zIndex: 2,
              position: "relative",
            }}
          >
            <PhoneMockup
              currentIndex={currentIndex}
              widthStyle="clamp(88px, 9vw, 116px)"
            />
          </div>
        </motion.div>

        {/* Mobile: iPhone only, centered, larger */}
        <motion.div
          className="flex md:hidden"
          animate={{ y: [0, -10, -4, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PhoneMockup
            currentIndex={currentIndex}
            widthStyle="clamp(140px, 40vw, 200px)"
          />
        </motion.div>
      </motion.div>

      {/* ── Project Info ── */}
      <div className="shrink-0 text-center px-6 pb-3 md:pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "5px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(17px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "#1a2040",
                  lineHeight: 1.1,
                }}
              >
                {projects[currentIndex].name}
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
                {projects[currentIndex].tag}
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11.5px",
                color: "#6b7280",
                lineHeight: 1.6,
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              {projects[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "14px",
          }}
        >
          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => {
                setCurrentIndex(i);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 6000);
              }}
              aria-label={`View ${p.name}`}
              style={{
                width: i === currentIndex ? "22px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === currentIndex ? "#1a2040" : "#c4c4d4",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <motion.div
        className="shrink-0 text-center pb-8 md:pb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
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
