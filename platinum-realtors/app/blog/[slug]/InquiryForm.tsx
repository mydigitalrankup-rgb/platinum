"use client";

import { useState } from "react";

export default function InquiryForm({ sourcePostSlug }: { sourcePostSlug: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, sourcePostSlug }),
    });
    setStatus(res.ok ? "sent" : "idle");
  }

  if (status === "sent") {
    return <p style={{ color: "#f5f0e8", fontSize: 16 }}>Thanks — we&apos;ll get back to you shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        required
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        style={styles.input}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        style={styles.input}
      />
      <input
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        style={styles.input}
      />
      <textarea
        placeholder="What are you looking for?"
        rows={3}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        style={{ ...styles.input, resize: "vertical", fontFamily: "inherit" }}
      />
      <button type="submit" disabled={status === "sending"} style={styles.button}>
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 400,
  },
  input: {
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(201,48,44,0.4)",
    borderRadius: 8,
    padding: "10px 12px",
    color: "#f5f0e8",
    fontSize: 14,
    outline: "none",
  },
  button: {
    background: "linear-gradient(90deg, #7a0e0e, #c9302c)",
    color: "#f5f0e8",
    border: "none",
    borderRadius: 8,
    padding: "12px 16px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
  },
};