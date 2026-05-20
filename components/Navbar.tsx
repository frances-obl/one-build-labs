"use client";
import { useState } from "react";
import { useScrollNav } from "@/hooks/useScrollNav";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const scrolled = useScrollNav();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5">
      <div
        className="max-w-7xl mx-auto rounded-2xl transition-all duration-400"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled
            ? "0 1px 24px 0 rgba(22,22,42,0.08), 0 0 0 1px rgba(224,224,234,0.7)"
            : "0 0 0 1px rgba(224,224,234,0.5)",
        }}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="12" y="1" width="4" height="26" fill="#16162a" />
              <rect x="1" y="12" width="26" height="4" fill="#16162a" />
              <rect x="8.5" y="4.5" width="3" height="3" fill="#16162a" opacity="0.25" />
              <rect x="16.5" y="20.5" width="3" height="3" fill="#16162a" opacity="0.25" />
            </svg>
            <div className="flex flex-col leading-none">
              <span
                className="text-[10px] tracking-[0.22em] font-semibold text-[#16162a] uppercase"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                One Build Labs
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] tracking-[0.18em] font-semibold text-[#16162a] uppercase opacity-60 hover:opacity-100 transition-opacity duration-200"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#16162a] text-white text-[10px] tracking-[0.18em] font-semibold uppercase rounded-xl hover:bg-[#2a2a45] transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#16162a] hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#16162a]/30 rounded-lg cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#e0e0ea] px-6 py-5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[10px] tracking-[0.18em] font-semibold text-[#16162a] uppercase opacity-60 hover:opacity-100 transition-opacity duration-200 py-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center px-6 py-2.5 bg-[#16162a] text-white text-[10px] tracking-[0.18em] font-semibold uppercase rounded-xl hover:bg-[#2a2a45] transition-all duration-200 mt-2 cursor-pointer"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
