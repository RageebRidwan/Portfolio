"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { data } from "@/app/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xnjwjnpr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-card)",
    border: "0.5px solid var(--border-subtle)",
    borderRadius: "6px",
    padding: "12px 16px",
    fontSize: "13px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px 60px",
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
            // contact
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            Get in touch
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "36px",
                maxWidth: "380px",
              }}
            >
              Open to full-time roles, remote opportunities, and freelance
              projects. Feel free to reach out — I usually respond within 24
              hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Email */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    marginBottom: "6px",
                  }}
                >
                  EMAIL
                </p>
                <a
                  href={`mailto:${data.email}`}
                  style={{
                    fontSize: "13px",
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {data.email}
                </a>
              </div>

              {/* Socials */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    marginBottom: "10px",
                  }}
                >
                  ELSEWHERE
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      border: "0.5px solid var(--border-subtle)",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.borderColor = "var(--accent-border)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }}
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      border: "0.5px solid var(--border-subtle)",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.borderColor = "var(--accent-border)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }}
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Name */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  NAME
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent-border)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent-border)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent-border)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  background:
                    status === "sent" ? "transparent" : "var(--accent)",
                  color:
                    status === "sent" ? "var(--accent)" : "#0d0d0d",
                  border:
                    status === "sent"
                      ? "0.5px solid var(--accent-border)"
                      : "none",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  cursor:
                    status === "sending" || status === "sent"
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  transition: "opacity 0.2s",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "idle" && "send message"}
                {status === "sending" && "sending..."}
                {status === "sent" && "message sent ✓"}
                {status === "error" && "try again"}
              </button>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#ff6b6b",
                  }}
                >
                  Something went wrong. Email me directly instead.
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: "80px",
            paddingTop: "24px",
            borderTop: "0.5px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            {data.name.split(" ")[0].toLowerCase()}.dev —{" "}
            {new Date().getFullYear()}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            built with Next.js & Tailwind
          </p>
        </motion.div>
      </div>
    </section>
  );
}
