"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-white/12 bg-bg-tertiary px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-primary/60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-bg-tertiary p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/15 font-mono text-primary">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-light text-white">
          Request received.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Thank you — a Joevexm engineer will be in touch within one business
          day to scope your infrastructure review.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-bg-secondary p-7 md:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            Full name
          </span>
          <input name="name" required className={fieldClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            Company
          </span>
          <input name="company" className={fieldClass} placeholder="Organisation" />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            Work email
          </span>
          <input
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            Phone
          </span>
          <input name="phone" className={fieldClass} placeholder="+234 …" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
          What would you like reviewed?
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your networks, sites or systems…"
        />
      </label>

      {status === "error" && (
        <p className="mt-4 text-sm text-accent">
          Something went wrong. Please email hello@joevexm.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-gradient-to-br from-primary to-[#67e8f9] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[#050915] transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request infrastructure review"}
      </button>
    </form>
  );
}
