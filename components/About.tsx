"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Zap, Target } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Direct Communication",
    body: "You talk to us, the people actually building your site. No middleman, no miscommunication.",
  },
  {
    icon: Zap,
    title: "Speed That Matters",
    body: "Most projects launch within a week. We move fast without cutting corners.",
  },
  {
    icon: Target,
    title: "Built to Perform",
    body: "Fast load times, mobile-first, and SEO-ready out of the box. Every single time.",
  },
];

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easing, delay },
  },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-24 bg-[#f4f4f7]"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: story */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-7"
          >
            <p
              className="text-[10px] tracking-[0.28em] text-[#8a8aa8] uppercase"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Who We Are
            </p>

            <h2
              className="text-[clamp(2.8rem,5vw,4.2rem)] font-bold text-[#16162a] leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Two builders,{" "}
              <span className="italic font-normal">one mission.</span>
            </h2>

            <p
              className="text-[14px] text-[#8a8aa8] leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              We&apos;re not an agency with layers of overhead. We&apos;re two people who genuinely love building websites and we&apos;re really good at it.
            </p>

            {/* Signature */}
            <div className="pt-4 border-t border-[#e0e0ea]">
              <p
                className="text-3xl text-[#16162a] italic"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                Frances &amp; Jose
              </p>
              <p
                className="text-[9px] tracking-[0.25em] text-[#8a8aa8] uppercase mt-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Co-Founders &amp; Developers
              </p>
            </div>
          </motion.div>

          {/* Right: feature list */}
          <div className="space-y-0 divide-y divide-[#e0e0ea]">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp(i * 0.1 + 0.1)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-6 py-8 first:pt-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#e0e0ea] flex items-center justify-center bg-white">
                    <Icon className="w-4 h-4 text-[#16162a]" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    <h3
                      className="text-xl font-semibold text-[#16162a] tracking-tight"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-[13px] text-[#8a8aa8] leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
