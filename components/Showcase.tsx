"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Imperial Tailors",
    description:
      "Premium custom tailoring, refined brand presence built for trust.",
    tags: ["Web Design", "Responsive", "Branding"],
    bg: "linear-gradient(135deg, #1a0e06 0%, #3d1f08 50%, #2a1505 100%)",
    accent: "#c9a96e",
    headline: "IMPERIAL\nALTERATIONS",
    sub: "Premium custom tailoring",
    dark: true,
  },
  {
    name: "The Joyful Gifts",
    description:
      "A warm, inviting gift shop experience designed to maximize browsing and sales.",
    tags: ["E-Commerce", "UI/UX", "SEO"],
    bg: "linear-gradient(135deg, #fdf0f0 0%, #f9e4e8 50%, #fde8e8 100%)",
    accent: "#c86b7a",
    headline: "Bouquets That\nBring Joy",
    sub: "Warm gift shop experience",
    dark: false,
  },
  {
    name: "Newport Exotics",
    description:
      "Sleek, high-end automotive showcase built to match the luxury of the brand.",
    tags: ["Luxury Design", "Gallery", "Performance"],
    bg: "linear-gradient(135deg, #0a0a10 0%, #12121e 50%, #0d0d18 100%)",
    accent: "#9090b0",
    headline: "NEWPORT\nEXOTICS",
    sub: "Sleek. High-end. Unforgettable.",
    dark: true,
  },
  {
    name: "SPDY Junk Removal",
    description:
      "High-converting service page that drives calls and bookings for local junk removal.",
    tags: ["Lead Gen", "Responsive", "Local SEO"],
    bg: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1d4ed8 100%)",
    accent: "#93c5fd",
    headline: "Your junk.\nOur problem.",
    sub: "High-converting service page",
    dark: true,
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="projects" ref={ref} className="py-28 md:py-36 bg-[#ececf2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="space-y-4"
          >
            <p
              className="text-[10px] tracking-[0.28em] text-[#8a8aa8] uppercase"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-[clamp(2.4rem,5vw,4rem)] font-bold text-[#16162a] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Websites we've brought to life.
            </h2>
            <p
              className="text-[13px] text-[#8a8aa8]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Real projects, real clients, real results. Click through to see them live.
            </p>
          </motion.div>

          {/* Arrow controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3"
          >
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#16162a]/20 flex items-center justify-center hover:border-[#16162a] hover:bg-[#16162a] hover:text-white text-[#16162a] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#16162a]/30"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[#16162a]/20 flex items-center justify-center hover:border-[#16162a] hover:bg-[#16162a] hover:text-white text-[#16162a] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#16162a]/30"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Carousel — bleeds past container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 px-6 max-w-7xl mx-auto scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 + 0.1 }}
            className="flex-shrink-0 w-[320px] sm:w-[360px] group cursor-pointer"
          >
            {/* Browser frame */}
            <div className="rounded-xl overflow-hidden border border-[#d0d0da] shadow-sm bg-white mb-5">
              {/* Chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#f0f0f4] border-b border-[#e0e0ea]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-2 bg-white rounded-sm px-3 py-0.5">
                  <span
                    className="text-[9px] text-[#8a8aa8]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {p.name.toLowerCase().replace(/\s+/g, "")}.com
                  </span>
                </div>
              </div>

              {/* Mock website preview */}
              <div
                className="h-52 flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ background: p.bg }}
              >
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative text-center px-6">
                  <p
                    className="text-[11px] tracking-widest mb-3 opacity-60"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      color: p.accent,
                    }}
                  >
                    {p.sub}
                  </p>
                  <h3
                    className="whitespace-pre-line leading-tight text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: p.dark ? "#f8f8f4" : "#16162a",
                    }}
                  >
                    {p.headline}
                  </h3>
                </div>

                {/* External link hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card info */}
            <div className="space-y-2">
              <h4
                className="text-lg font-semibold text-[#16162a]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {p.name}
              </h4>
              <p
                className="text-[12px] text-[#8a8aa8] leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.1em] font-semibold uppercase px-2.5 py-1 border border-[#16162a]/15 text-[#16162a]/60 rounded-sm"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all */}
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#16162a]/25 text-[#16162a] text-[10px] tracking-[0.18em] font-semibold uppercase hover:bg-[#16162a] hover:text-white hover:border-[#16162a] transition-all duration-300 cursor-pointer"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          View All Work
        </a>
      </div>
    </section>
  );
}
