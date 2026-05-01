"use client";

import { motion } from "framer-motion";
import { data } from "@/app/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        borderTop: "0.5px solid var(--border)",
        position: "relative",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,160,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          transform: "translateY(-50%)",
        }}
      />

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
            // skills
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            What I work with
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {data.skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              style={{
                background: "var(--bg-card)",
                border: "0.5px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              {/* Category label */}
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
                {group.category}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                }}
              >
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-secondary)",
                      background: "var(--bg-tag)",
                      border: "0.5px solid var(--border-subtle)",
                      padding: "5px 12px",
                      borderRadius: "4px",
                      letterSpacing: "0.03em",
                      transition: "color 0.2s, border-color 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.borderColor = "var(--accent-border)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: "40px",
            border: "0.5px solid var(--border-subtle)",
            borderRadius: "10px",
            padding: "24px 32px",
            background: "var(--bg-card)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            // experience
          </p>

          {data.experience.map((job) => (
            <div
              key={job.company}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div style={{ flex: 1, minWidth: "240px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "6px",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    {job.role}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      border: "0.5px solid var(--accent-border)",
                      padding: "2px 8px",
                      borderRadius: "3px",
                    }}
                  >
                    {job.company}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                  }}
                >
                  {job.location}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {job.highlights.map((point, i) => (
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
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {job.period}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
