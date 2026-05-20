"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    body: "We hop on a quick call to understand your business, goals, and vision. No fluff.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    body: "We craft a custom mockup and iterate until you're completely in love with it.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    body: "We build it fast, clean, responsive, and optimised for search engines.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    body: "We deploy your site, run QA checks, and hand you the keys. You're live.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-28 md:py-36 bg-[#f4f4f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-20 space-y-4"
        >
          <p
            className="text-[10px] tracking-[0.28em] text-[#8a8aa8] uppercase"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our Process
          </p>
          <h2
            className="text-[clamp(2.4rem,5vw,4rem)] font-bold text-[#16162a] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From idea to launch in four steps.
          </h2>
          <p
            className="text-[13px] text-[#8a8aa8] max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            A streamlined process that keeps things simple, fast, and transparent from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-[#e0e0ea]" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 + 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6 w-14 h-14 rounded-full border border-[#e0e0ea] bg-white flex items-center justify-center shadow-sm z-10">
                  <Icon className="w-5 h-5 text-[#16162a]" aria-hidden="true" />
                </div>

                <p
                  className="text-[10px] tracking-[0.2em] text-[#8a8aa8] uppercase mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {step.number}
                </p>

                <h3
                  className="text-2xl font-semibold text-[#16162a] mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[12px] text-[#8a8aa8] leading-relaxed max-w-[200px]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
