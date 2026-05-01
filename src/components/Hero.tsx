"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { data } from "@/app/data";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = data.roles[roleIndex];

    if (!deleting && charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex > current.length) {
      const timeout = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 30);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setCharIndex(0);
      setRoleIndex((r) => (r + 1) % data.roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", paddingTop: "80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
            }}
          >
            // hello, world
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            {data.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span style={{ color: "var(--text-muted)" }}>
              {data.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--text-secondary)",
              marginBottom: "28px",
              minHeight: "28px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>&gt; </span>
            <span style={{ color: "var(--accent)" }}>{displayed}</span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.1em",
                background: "var(--accent)",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>

          {/* Summary */}
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              maxWidth: "520px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {data.summary}
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                background: "var(--accent)",
                color: "#0d0d0d",
                padding: "10px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.04em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              view projects
            </a>
            <a
              href={data.cv}
              download
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                background: "transparent",
                color: "var(--accent)",
                padding: "10px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                border: "0.5px solid var(--accent-border)",
                letterSpacing: "0.04em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--accent-dim)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              download cv
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                background: "transparent",
                color: "var(--text-muted)",
                padding: "10px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                border: "0.5px solid var(--border-subtle)",
                letterSpacing: "0.04em",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--text-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            >
              github
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                background: "transparent",
                color: "var(--text-muted)",
                padding: "10px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                border: "0.5px solid var(--border-subtle)",
                letterSpacing: "0.04em",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--text-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            >
              linkedin
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "56px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "3+", label: "years building" },
              { value: "IEEE", label: "published researcher" },
              { value: "3", label: "production apps" },
              { value: "7.5", label: "IELTS score" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "22px",
                    color: "var(--accent)",
                    fontWeight: 500,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
