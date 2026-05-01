"use client";

import { useState, useEffect } from "react";
import { data } from "@/app/data";

const links = ["about", "projects", "skills", "research", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = links.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });

      const current = offsets.filter((o) => o.top <= 120).at(-1);

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? "0.5px solid var(--border)"
          : "0.5px solid transparent",
        background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#about"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            fontSize: "15px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          {data.name.split(" ")[0].toLowerCase()}.dev
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "28px" }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: active === link ? "var(--accent)" : "var(--text-muted)",
                transition: "color 0.2s",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-secondary)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(13,13,13,0.98)",
            borderTop: "0.5px solid var(--border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color:
                  active === link
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              ./{link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
