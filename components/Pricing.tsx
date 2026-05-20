"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    label: "Starter Site",
    price: "$499",
    sub: "USD · one time",
    badge: null,
    savings: null,
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
    badge: "Most Popular",
    savings: "Save $650 — Launch Special",
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
    badge: null,
    savings: null,
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

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-16 md:py-20 bg-[#ececf2]"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-16 space-y-4"
        >
          <p
            className="text-[10px] tracking-[0.28em] text-[#8a8aa8] uppercase"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Pricing
          </p>
          <h2
            className="text-[clamp(2.4rem,5vw,4rem)] font-bold text-[#16162a] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Simple, transparent pricing.
          </h2>
          <p
            className="text-[13px] text-[#8a8aa8] max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            No hidden fees, no bloated packages. You get a professional website at a fair price, period.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                tier.featured
                  ? "bg-white border-2 border-[#16162a] shadow-xl scale-[1.02]"
                  : "bg-white border border-[#e0e0ea] hover:border-[#16162a]/40 hover:shadow-md"
              }`}
            >
              {/* Featured badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1.5 bg-[#16162a] text-white text-[9px] tracking-[0.2em] font-semibold uppercase rounded-full"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-7">
                <p
                  className="text-[9px] tracking-[0.22em] text-[#8a8aa8] uppercase mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {tier.label}
                </p>

                <div className="flex items-end gap-2 mb-1">
                  <span
                    className="text-5xl font-bold text-[#16162a] tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {tier.price}
                  </span>
                  {tier.originalPrice && (
                    <span
                      className="text-xl text-[#8a8aa8] line-through mb-1"
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
                  <div className="mt-3 inline-flex items-center px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
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
              <ul className="space-y-3.5 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#16162a] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span
                      className="text-[12px] text-[#555570] leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center py-3.5 text-[10px] tracking-[0.18em] font-semibold uppercase transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#16162a]/30 ${
                  tier.featured
                    ? "bg-[#16162a] text-white hover:bg-[#2a2a45]"
                    : "border border-[#16162a]/25 text-[#16162a] hover:border-[#16162a] hover:bg-[#16162a] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
