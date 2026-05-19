import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import StickyScrollSection from "@/components/motion/StickyScrollSection";
import { siteConfig } from "@/lib/site-config";

/** T15 — pinned split-scroll engagement process. */
export default function Process() {
  const { process } = siteConfig;

  const sticky = (
    <div>
      <p className="eyebrow">{process.eyebrow}</p>
      <TextReveal
        as="h2"
        className="mt-5 font-display text-[clamp(28px,3.8vw,46px)] font-light leading-[1.07] tracking-[-0.02em] text-white"
      >
        {process.heading}
      </TextReveal>
      <FadeUp delay={0.1}>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
          Every engagement runs the same disciplined arc — so you always know
          what happens next, and what you are paying for.
        </p>
      </FadeUp>
      <div className="mt-8 hairline-divider w-40" />
    </div>
  );

  const scrolling = (
    <div className="space-y-5">
      {process.steps.map((step) => (
        <FadeUp key={step.no}>
          <article className="rounded-2xl border border-white/10 bg-bg-tertiary p-7 transition-colors hover:border-primary/30">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-3xl font-light text-primary/80">
                {step.no}
              </span>
              <h3 className="font-display text-2xl font-light text-white">
                {step.title}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {step.body}
            </p>
          </article>
        </FadeUp>
      ))}
    </div>
  );

  return (
    <section className="section-pad bg-bg">
      <div className="shell">
        <StickyScrollSection sticky={sticky} scrolling={scrolling} stickyOffset="top-32" />
      </div>
    </section>
  );
}
