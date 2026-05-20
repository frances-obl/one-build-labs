"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "PRICING", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight >= docHeight - 200;
      setVisible(scrollY > 80 && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "14px 20px",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s ease, opacity 0.35s ease",
      }}
    >
      {/* Pill wrapper */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          background: "white",
          borderRadius: "9999px",
          padding: "10px 16px 10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <svg
            width="36"
            height="34"
            viewBox="0 0 200 185"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Top-to-bottom gradient: light sky blue → deep navy */}
              <linearGradient id="nb-body" x1="100" y1="58" x2="100" y2="172" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#82bff0" />
                <stop offset="100%" stopColor="#132d7a" />
              </linearGradient>
              {/* Wing gradient: dark navy at tips, mid-blue toward center */}
              <linearGradient id="nb-wing" x1="0" y1="90" x2="200" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#132d7a" />
                <stop offset="35%"  stopColor="#4a88cc" />
                <stop offset="65%"  stopColor="#4a88cc" />
                <stop offset="100%" stopColor="#132d7a" />
              </linearGradient>
              {/* Star gradient: pale blue at top → mid blue at bottom */}
              <linearGradient id="nb-star" x1="100" y1="48" x2="100" y2="122" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#c8e4f8" />
                <stop offset="50%"  stopColor="#70b2e8" />
                <stop offset="100%" stopColor="#3a6ec0" />
              </linearGradient>
            </defs>

            {/* Outer diamond outline — light silver-blue ghost */}
            <polygon
              points="100,6 192,90 100,174 8,90"
              fill="rgba(180,210,235,0.18)"
              stroke="#bdd4e8"
              strokeWidth="1.4"
            />

            {/* Left double-chevron wing */}
            <polygon
              points="8,90 50,60 63,72 34,90 63,108 50,120"
              fill="url(#nb-wing)"
            />

            {/* Right double-chevron wing (mirror) */}
            <polygon
              points="192,90 150,60 137,72 166,90 137,108 150,120"
              fill="url(#nb-wing)"
            />

            {/* Center body — connects wings, bottom diamond */}
            <polygon
              points="100,58 137,72 166,90 137,108 100,172 63,108 34,90 63,72"
              fill="url(#nb-body)"
            />

            {/* 4-pointed star (elongated, slim) */}
            <path
              d="M100,48 L104,74 L118,90 L104,106 L100,132 L96,106 L82,90 L96,74 Z"
              fill="url(#nb-star)"
            />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#1a2040",
              lineHeight: 1.2,
            }}
          >
            ONE BUILD LABS
          </span>
        </a>

        {/* Desktop nav links with separators */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              style={{ display: "flex", alignItems: "center" }}
            >
              {i > 0 && (
                <span
                  style={{
                    display: "inline-block",
                    width: "1px",
                    height: "14px",
                    background: "#d1d5db",
                    margin: "0 24px",
                  }}
                />
              )}
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "11.5px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#1a2040",
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.7")
                }
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            alignItems: "center",
            justifyContent: "center",
            background: "#1a2040",
            color: "white",
            fontFamily: "var(--font-montserrat)",
            fontSize: "11.5px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "10px 24px",
            borderRadius: "9999px",
            textDecoration: "none",
            transition: "background 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#2d3560")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#1a2040")
          }
        >
          LET&apos;S TALK
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{
            padding: "8px",
            color: "#1a2040",
            background: "none",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X style={{ width: 20, height: 20 }} />
          ) : (
            <Menu style={{ width: 20, height: 20 }} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            maxWidth: "1280px",
            margin: "8px auto 0",
            background: "white",
            borderRadius: "20px",
            padding: "20px 24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11.5px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#1a2040",
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1a2040",
              color: "white",
              fontFamily: "var(--font-montserrat)",
              fontSize: "11.5px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "10px 24px",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            LET&apos;S TALK
          </a>
        </div>
      )}
    </header>
  );
}
