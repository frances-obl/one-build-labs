"use client";
import { useContactModal } from "@/context/ContactModalContext";

const navigate = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#contact" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-montserrat)",
  fontSize: "13px",
  fontWeight: 400,
  color: "#6b7280",
  textDecoration: "none",
  transition: "color 0.2s",
  display: "block",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-montserrat)",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.22em",
  color: "#1a2040",
  textTransform: "uppercase",
  marginBottom: "20px",
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { open } = useContactModal();

  return (
    <footer
      style={{
        background: "#eceef4",
        width: "100%",
        aspectRatio: "3.65 / 1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 60px)",
          width: "100%",
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "start",
            paddingBottom: "clamp(20px, 2.5vw, 40px)",
            borderBottom: "1px solid #d8dae4",
            marginBottom: "clamp(14px, 1.8vw, 28px)",
          }}
        >
          {/* Brand block */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(22px, 3.2vw, 52px)",
                fontWeight: 700,
                color: "#1a2040",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(6px, 0.8vw, 12px)",
              }}
            >
              ONE BUILD LABS
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.4,
              }}
            >
              Premium web design,
              <br />
              built for growth
            </p>
          </div>

          {/* Navigate column */}
          <div>
            <p style={headingStyle}>Navigate</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={linkStyle}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a2040"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <p style={headingStyle}>Connect</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <button
                  onClick={() => open()}
                  style={{
                    ...linkStyle,
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a2040"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a2040"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a2040"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                color: "#9ca3af",
              }}
            >
              &copy; {year} One Build Labs. All rights reserved.
            </p>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                color: "#9ca3af",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1a2040"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#9ca3af"; }}
            >
              Privacy Policy
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "11px",
              color: "#9ca3af",
            }}
          >
            Designed &amp; Built by Frances &amp; Jose
          </p>
        </div>
      </div>
    </footer>
  );
}
