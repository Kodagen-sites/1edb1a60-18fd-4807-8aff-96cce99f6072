import TextReveal from "@/components/motion/TextReveal";
import FadeUp from "@/components/motion/FadeUp";
import MotionField from "@/components/sections/MotionField";
import { siteConfig } from "@/lib/site-config";

/** T7 type statement over a particle-field motion background (the page breather). */
export default function Statement() {
  const { statement } = siteConfig;
  return (
    <section className="relative overflow-hidden bg-bg-accent">
      <MotionField />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(5,9,21,0.2), rgba(5,9,21,0.78) 78%)",
        }}
      />
      <div className="shell relative flex min-h-[58vh] flex-col items-center justify-center py-24 text-center">
        <FadeUp>
          <p className="eyebrow">{statement.eyebrow}</p>
        </FadeUp>
        <TextReveal
          as="h2"
          className="mt-7 max-w-[20ch] font-display text-[clamp(32px,5.4vw,68px)] font-light leading-[1.08] tracking-[-0.02em] text-white text-balance"
        >
          {statement.text}
        </TextReveal>
      </div>
    </section>
  );
}
