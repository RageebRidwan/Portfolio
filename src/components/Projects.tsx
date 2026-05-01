"use client";

import { motion } from "framer-motion";
import { data } from "@/app/data";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
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
          // projects
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 500,
            color: "var(--text-primary)",
          }}
        >
          Things I&apos;ve built
        </h2>
      </motion.div>

      {/* Project cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {data.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-border)";
              e.currentTarget.style.background = "var(--bg-card)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.background = "transparent";
            }}
            style={{
              border: "0.5px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "28px 32px",
              background: "transparent",
              transition: "border-color 0.3s, background 0.3s",
              cursor: "default",
            }}
          >
            {/* Card top row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "14px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    maxWidth: "600px",
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "8px" }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent)",
                      border: "0.5px solid var(--accent-border)",
                      padding: "5px 12px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                      transition: "background 0.2s",
                      background: "var(--accent-dim)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(0,229,160,0.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--accent-dim)")
                    }
                  >
                    live ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    border: "0.5px solid var(--border-subtle)",
                    padding: "5px 12px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
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
                  github ↗
                </a>
              </div>
            </div>

            {/* Highlights */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {project.highlights.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    paddingLeft: "16px",
                    position: "relative",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    →
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "0.5px solid var(--border)",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    background: "var(--bg-tag)",
                    border: "0.5px solid var(--border-subtle)",
                    padding: "3px 10px",
                    borderRadius: "3px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
