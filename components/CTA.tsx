"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { open } = useContactModal();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background: "#16162a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Atmospheric background layers */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="space-y-8"
        >
          <p
            className="text-[10px] tracking-[0.28em] text-white/40 uppercase"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Ready to build?
          </p>

          <h2
            className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-[0.92] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A website that actually{" "}
            <span className="italic font-normal text-white/70">converts.</span>
          </h2>

          <p
            className="text-[14px] text-white/50 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Let's talk about your project. Most sites are live within a week. No agencies, no overhead, just two people who care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => open()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#16162a] text-[10px] tracking-[0.18em] font-semibold uppercase hover:bg-white/90 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-[10px] tracking-[0.18em] font-semibold uppercase hover:border-white/50 transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              See Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
