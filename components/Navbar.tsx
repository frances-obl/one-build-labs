"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const navLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "PRICING", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openContact } = useContactModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
        /* Always visible — no transform or opacity changes */
      }}
    >
      {/* ── Pill wrapper ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          borderRadius: "9999px",
          padding: "10px 16px 10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          /*
           * Scroll-aware glassmorphism:
           *   At rest  → clean white pill, light shadow
           *   Scrolled → frosted-glass white, richer shadow + blur
           */
          background: scrolled
            ? "rgba(255, 255, 255, 0.82)"
            : "rgba(255, 255, 255, 1)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(20px) saturate(180%)"
            : "none",
          boxShadow: scrolled
            ? "0 4px 28px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)"
            : "0 2px 20px rgba(0,0,0,0.07)",
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
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
              <linearGradient id="nb-body" x1="100" y1="58" x2="100" y2="172" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#82bff0" />
                <stop offset="100%" stopColor="#132d7a" />
              </linearGradient>
              <linearGradient id="nb-wing" x1="0" y1="90" x2="200" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#132d7a" />
                <stop offset="35%"  stopColor="#4a88cc" />
                <stop offset="65%"  stopColor="#4a88cc" />
                <stop offset="100%" stopColor="#132d7a" />
              </linearGradient>
              <linearGradient id="nb-star" x1="100" y1="48" x2="100" y2="122" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#c8e4f8" />
                <stop offset="50%"  stopColor="#70b2e8" />
                <stop offset="100%" stopColor="#3a6ec0" />
              </linearGradient>
            </defs>
            <polygon
              points="100,6 192,90 100,174 8,90"
              fill="rgba(180,210,235,0.18)"
              stroke="#bdd4e8"
              strokeWidth="1.4"
            />
            <polygon
              points="8,90 50,60 63,72 34,90 63,108 50,120"
              fill="url(#nb-wing)"
            />
            <polygon
              points="192,90 150,60 137,72 166,90 137,108 150,120"
              fill="url(#nb-wing)"
            />
            <polygon
              points="100,58 137,72 166,90 137,108 100,172 63,108 34,90 63,72"
              fill="url(#nb-body)"
            />
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

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", gap: 0 }}
          className="hidden md:flex"
        >
          {navLinks.map((link, i) => (
            <div key={link.label} style={{ display: "flex", alignItems: "center" }}>
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

        {/* Desktop CTA */}
        <button
          onClick={() => openContact()}
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
            border: "none",
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
        </button>

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
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderRadius: "20px",
            padding: "20px 24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
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
          <button
            onClick={() => { setMobileOpen(false); openContact(); }}
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
              border: "none",
              cursor: "pointer",
            }}
          >
            LET&apos;S TALK
          </button>
        </div>
      )}
    </header>
  );
}
