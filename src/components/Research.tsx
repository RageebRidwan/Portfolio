"use client";

import { motion } from "framer-motion";
import { data } from "@/app/data";

export default function Research() {
  return (
    <section
      id="research"
      style={{
        padding: "100px 24px",
        borderTop: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "56px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              marginBottom: "10px",
            }}
          >
            // research
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            Published work
          </h2>
        </motion.div>

        {/* Main research card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            border: "0.5px solid var(--accent-border)",
            borderRadius: "12px",
            padding: "40px",
            background: "var(--accent-dim)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative corner */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* IEEE badge */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--accent)",
                background: "rgba(0,229,160,0.12)",
                border: "0.5px solid var(--accent-border)",
                padding: "4px 12px",
                borderRadius: "3px",
                letterSpacing: "0.08em",
              }}
            >
              IEEE Xplore — Published
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.5,
              marginBottom: "20px",
              maxWidth: "720px",
            }}
          >
            {data.research.title}
          </h3>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "3px",
                }}
              >
                INSTITUTION
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                {data.research.institution}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "3px",
                }}
              >
                PERIOD
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                {data.research.period}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "3px",
                }}
              >
                GRADE
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {data.research.grade}
              </p>
            </div>
          </div>

          {/* Summary */}
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              maxWidth: "680px",
              marginBottom: "28px",
            }}
          >
            {data.research.summary}
          </p>

          {/* Models used */}
          <div style={{ marginBottom: "32px" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              ARCHITECTURES COMPARED
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {data.research.models.map((model) => (
                <span
                  key={model}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    background: "var(--bg-tag)",
                    border: "0.5px solid var(--border-subtle)",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={data.research.publicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#0d0d0d",
              background: "var(--accent)",
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
            view on IEEE Xplore ↗
          </a>
        </motion.div>

        {/* Education strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: "24px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            // education
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {data.education.map((edu) => (
              <div
                key={edu.degree}
                style={{
                  background: "var(--bg-card)",
                  border: "0.5px solid var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                    lineHeight: 1.4,
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                  }}
                >
                  {edu.institution}
                </p>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent)",
                    }}
                  >
                    {edu.grade}
                  </span>
                  <span style={{ color: "var(--border-subtle)", fontSize: "10px" }}>
                    |
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
