"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easing } },
};

const fadeRight = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: easing, delay: 0.15 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f4f4f7] pt-28 pb-16">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#16162a 1px, transparent 1px), linear-gradient(to right, #16162a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left: text — spans 2 of 5 columns */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-8 z-10"
          >
            <p
              className="text-[10px] tracking-[0.28em] text-[#8a8aa8] uppercase"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Premium web designs built for growth
            </p>

            <h1
              className="text-[clamp(3.2rem,7vw,5.5rem)] font-bold text-[#16162a] leading-[0.88] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              One Build Labs
            </h1>

            <p
              className="text-[15px] text-[#8a8aa8] leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
            >
              Building fast, beautiful, high-converting websites for companies that want to stand out, not blend in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#16162a] text-[#16162a] text-[10px] tracking-[0.18em] font-semibold uppercase hover:bg-[#16162a] hover:text-white transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                View Our Work
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#16162a]/25 text-[#16162a]/60 text-[10px] tracking-[0.18em] font-semibold uppercase hover:border-[#16162a] hover:text-[#16162a] transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                See Pricing
              </a>
            </div>
          </motion.div>

          {/* Right: architectural image — spans 3 of 5 columns */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 relative h-[55vw] max-h-[780px] min-h-[380px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85"
              alt="Modern architectural building viewed from below"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Soft left fade so image blends into bg */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f4f4f7] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
