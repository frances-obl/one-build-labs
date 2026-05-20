"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Zap, Target } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#f4f4f7",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(60px, 8vw, 120px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "clamp(48px, 8vw, 120px)",
          alignItems: "center",
        }}
      >
        {/* ── Left: story ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.28em",
              color: "#8a8aa8",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Who We Are
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              color: "#16162a",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Two builders,{" "}
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#8a9ac8",
              }}
            >
              one mission.
            </em>
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "13.5px",
              color: "#8a8aa8",
              lineHeight: 1.75,
              maxWidth: "340px",
              marginBottom: "40px",
            }}
          >
            We&apos;re not an agency with layers of overhead. We&apos;re two people who genuinely love building websites, and we&apos;re really good at it.
          </p>

          {/* Signature */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dancing)",
                fontSize: "clamp(28px, 3.5vw, 38px)",
                color: "#16162a",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              Frances &amp; Jose
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.24em",
                color: "#8a8aa8",
                textTransform: "uppercase",
              }}
            >
              Co-Founders &amp; Developers
            </p>
          </div>
        </motion.div>

        {/* ── Right: feature list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {/* Row 1: Direct Communication */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #d8d8e8",
                background: "#ededf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4px",
              }}
            >
              <MessageSquare style={{ width: 18, height: 18, color: "#16162a" }} aria-hidden="true" />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 700,
                  color: "#16162a",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                Direct Communication
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13px",
                  color: "#8a8aa8",
                  lineHeight: 1.7,
                }}
              >
                You talk to us, the people actually building your site.
                <br />
                No middleman, no miscommunication
              </p>
            </div>
          </motion.div>

          {/* Row 2: Speed That Matters */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #d8d8e8",
                background: "#ededf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4px",
              }}
            >
              <Zap style={{ width: 18, height: 18, color: "#16162a" }} aria-hidden="true" />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 700,
                  color: "#16162a",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                Speed That Matters
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13px",
                  color: "#8a8aa8",
                  lineHeight: 1.7,
                }}
              >
                Most projects launch within a week.
                <br />
                We move fast without cutting corners
              </p>
            </div>
          </motion.div>

          {/* Row 3: Built to Perform */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #d8d8e8",
                background: "#ededf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4px",
              }}
            >
              <Target style={{ width: 18, height: 18, color: "#16162a" }} aria-hidden="true" />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 700,
                  color: "#16162a",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                Built to Perform
              </h3>
              <ul
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13px",
                  color: "#8a8aa8",
                  lineHeight: 1.85,
                  paddingLeft: "16px",
                  margin: "0 0 6px 0",
                }}
              >
                <li>Fast load times</li>
                <li>Mobile-first</li>
                <li>
                  SEO-ready <em style={{ fontStyle: "italic" }}>out</em> of the box
                </li>
              </ul>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13px",
                  color: "#8a8aa8",
                  lineHeight: 1.7,
                }}
              >
                Every single time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
