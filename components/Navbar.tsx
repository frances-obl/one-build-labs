"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "PRICING", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "14px 20px",
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
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="15" cy="15" r="14" stroke="#1a2040" strokeWidth="1.4" />
            <line x1="15" y1="6" x2="15" y2="24" stroke="#1a2040" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="6" y1="15" x2="24" y2="15" stroke="#1a2040" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="9.5" y1="9.5" x2="20.5" y2="20.5" stroke="#1a2040" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="20.5" y1="9.5" x2="9.5" y2="20.5" stroke="#1a2040" strokeWidth="1.1" strokeLinecap="round" />
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
