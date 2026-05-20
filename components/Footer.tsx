export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: "Pages",
      links: [
        { label: "Projects", href: "#projects" },
        { label: "About Us", href: "#about" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: "hello@onebuildlabs.com", href: "mailto:hello@onebuildlabs.com" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "X / Twitter", href: "#" },
      ],
    },
  ];

  return (
    <footer
      className="bg-[#f4f4f7] border-t border-[#e0e0ea]"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-[#e0e0ea]">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
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
              <span
                className="text-[10px] tracking-[0.22em] font-semibold text-[#16162a] uppercase"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                One Build Labs
              </span>
            </div>
            <p
              className="text-[12px] text-[#8a8aa8] leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Premium web design for companies that want to stand out.
            </p>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading} className="space-y-5">
              <p
                className="text-[9px] tracking-[0.22em] font-semibold text-[#16162a] uppercase"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] text-[#8a8aa8] hover:text-[#16162a] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[11px] text-[#8a8aa8]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {year} One Build Labs. All rights reserved.
          </p>
          <p
            className="text-[11px] text-[#8a8aa8]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Built with D1 Vibe Coding
          </p>
        </div>
      </div>
    </footer>
  );
}
