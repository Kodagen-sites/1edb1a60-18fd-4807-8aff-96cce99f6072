"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollCanvas from "@/components/ScrollCanvas";
import ScrollHint from "@/components/motion/ScrollHint";
import { siteConfig, frames, heroVideoUrl, asset } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

function Overlay({ progress = 0 }: { progress?: number }) {
  const { hero } = siteConfig;
  const fade = progress > 0.62 ? Math.max(0, 1 - (progress - 0.62) / 0.3) : 1;

  return (
    <div
      className="flex h-full items-center"
      style={{ opacity: fade, transition: "opacity 0.2s linear" }}
    >
      <div className="shell">
        <div className="max-w-[40rem]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow"
          >
            <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/60" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(44px,8.2vw,104px)] font-light leading-[0.98] tracking-[-0.03em] text-white">
            {hero.h1Lead.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "0.7em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: "0.7em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-primary via-[#67e8f9] to-accent bg-clip-text text-transparent"
            >
              {hero.h1Accent}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
            className="mt-7 max-w-[34rem] text-base leading-relaxed text-white/72 md:text-lg"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            className="pointer-events-auto mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href={hero.primaryCta.href}
              className="rounded-full px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[#050915] transition-transform hover:scale-[1.04]"
              style={{ background: "linear-gradient(135deg,#22d3ee,#67e8f9)" }}
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/20 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-white/85 transition-colors hover:border-primary/60 hover:text-primary"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const hasFrames = frames.count > 0;

  if (hasFrames) {
    return (
      <ScrollCanvas
        frameCount={frames.count}
        pattern={frames.urlTemplate}
        padLength={4}
        scrollDistance={3.4}
        loadingLabel="Joevexm"
        loadingVariant="L4"
        onProgress={setProgress}
      >
        {/* gradient scrim so the left-split text stays legible over footage */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,9,21,0.92) 0%, rgba(5,9,21,0.55) 42%, rgba(5,9,21,0.08) 75%, transparent 100%)",
          }}
        />
        <Overlay progress={progress} />
        <div className="pointer-events-auto absolute inset-x-0 bottom-8">
          <div className="shell">
            <ScrollHint label="Scroll to enter" />
          </div>
        </div>
      </ScrollCanvas>
    );
  }

  // Fallback (frames not yet extracted) — static cinematic hero.
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg">
      {heroVideoUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={asset("section-cta")}
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      ) : (
        <img
          src={asset("section-cta")}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,9,21,0.94) 0%, rgba(5,9,21,0.58) 45%, rgba(5,9,21,0.15) 100%)",
        }}
      />
      <div className="relative w-full pb-16 pt-32">
        <Overlay />
      </div>
    </section>
  );
}
