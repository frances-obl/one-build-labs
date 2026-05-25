"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const tiers = [
  {
    label: "Starter Site",
    price: "$499",
    sub: "USD · one time",
    badge: null as string | null,
    savings: null as string | null,
    originalPrice: undefined as string | undefined,
    featured: false,
    cta: "Get Started",
    features: [
      "Custom responsive design",
      "Up to 5 pages",
      "Mobile-first approach",
      "Content from integration",
      "Basic SEO setup",
      "7-day delivery",
    ],
  },
  {
    label: "Business Pro",
    price: "$649",
    originalPrice: "$1,299",
    sub: "USD · one time",
    badge: "Most Popular" as string | null,
    savings: "Save $650 — Launch Special" as string | null,
    featured: true,
    cta: "Get Started",
    features: [
      "Everything in Starter",
      "Unlimited pages",
      "Custom animations and interactions",
      "Advanced SEO optimization",
      "Analytics integration",
      "3-day delivery",
    ],
  },
  {
    label: "Custom Web",
    price: "Custom",
    sub: "Quote based on your needs",
    badge: null as string | null,
    savings: null as string | null,
    originalPrice: undefined as string | undefined,
    featured: false,
    cta: "Contact Us",
    features: [
      "Everything in Business Pro",
      "E-commerce integration",
      "Custom functionality and features",
      "Third-party API integrations",
      "Database and CMS setup",
      "Unlimited revisions",
      "Priority support and maintenance",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { open } = useContactModal();

  return (
    <section
      id="pricing"
      ref={ref}
      className="bg-[#ececf2]"
      style={{
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Header (shrinks so cards get max space) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        className="text-center shrink-0 pt-10 md:pt-16 pb-6 md:pb-10 px-6 space-y-2 md:space-y-4"
      >
        <p
          className="text-[10px] tracking-[0.28em] text-[#8a8aa8] uppercase"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Pricing
        </p>
        <h2
          className="text-[clamp(2rem,5vw,4rem)] font-bold text-[#1a2040] leading-[0.95] tracking-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Simple, transparent pricing.
        </h2>
        <p
          className="text-[12px] md:text-[13px] text-[#8a8aa8] max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          No hidden fees, no bloated packages. You get a professional website at a fair price, period.
        </p>
      </motion.div>

      {/* ── Cards area — flex-1 so it fills remaining viewport ── */}
      <div className="flex-1 min-h-0 flex items-stretch px-0 md:px-6 pb-6 md:pb-10">
        {/*
          Mobile:  horizontal snap-carousel (one card = one viewport)
          Desktop: 3-column grid
        */}
        <div
          className="
            w-full
            flex snap-x snap-mandatory overflow-x-auto
            md:grid md:grid-cols-3 md:overflow-x-visible md:snap-none
            gap-4 md:gap-6
            px-5 md:px-0
            md:max-w-7xl md:mx-auto
            items-stretch
          "
          style={{ scrollbarWidth: "none" }}
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className={`
                snap-center shrink-0
                w-[82vw] md:w-auto
                relative rounded-2xl p-6 md:p-8
                flex flex-col
                transition-all duration-300
                ${tier.featured
                  ? "bg-white border-2 border-[#1a2040] shadow-xl md:scale-[1.02]"
                  : "bg-white border border-[#e0e0ea] hover:border-[#1a2040]/40 hover:shadow-md"
                }
              `}
            >
              {/* Most Popular badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1.5 bg-[#1a2040] text-white text-[9px] tracking-[0.2em] font-semibold uppercase rounded-full whitespace-nowrap"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Price block */}
              <div className="mb-5 md:mb-7">
                <p
                  className="text-[9px] tracking-[0.22em] text-[#8a8aa8] uppercase mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {tier.label}
                </p>

                <div className="flex items-end gap-2 mb-1">
                  <span
                    className="text-4xl md:text-5xl font-bold text-[#1a2040] tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {tier.price}
                  </span>
                  {tier.originalPrice && (
                    <span
                      className="text-lg md:text-xl text-[#8a8aa8] line-through mb-1"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {tier.originalPrice}
                    </span>
                  )}
                </div>

                <p
                  className="text-[11px] text-[#8a8aa8]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {tier.sub}
                </p>

                {tier.savings && (
                  <div className="mt-2 md:mt-3 inline-flex items-center px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
                    <span
                      className="text-[10px] text-emerald-700 font-medium"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {tier.savings}
                    </span>
                  </div>
                )}
              </div>

              {/* Feature list */}
              <ul className="space-y-2.5 md:space-y-3.5 flex-1 mb-6 md:mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#1a2040] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span
                      className="text-[12px] text-[#6b7280] leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => open(tier.label)}
                className={`w-full inline-flex items-center justify-center py-3.5 text-[10px] tracking-[0.18em] font-semibold uppercase transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a2040]/30 ${
                  tier.featured
                    ? "bg-[#1a2040] text-white hover:bg-[#2a2a45]"
                    : "border border-[#1a2040]/25 text-[#1a2040] hover:border-[#1a2040] hover:bg-[#1a2040] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {tier.cta}
              </button>

              <p
                className="text-center text-[10px] text-[#9ca3af] mt-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Recurring monthly payments. Cancel any time.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
