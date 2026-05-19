import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import Marquee from "@/components/motion/Marquee";
import { siteConfig } from "@/lib/site-config";

/** TS1 — testimonial flow with a sector marquee strip. */
export default function Testimonials() {
  const { testimonials } = siteConfig;
  const sectors = [
    "Banking", "Telecommunications", "Government", "Financial services",
    "Energy", "Logistics", "Insurance", "Public sector",
  ];

  return (
    <section className="section-pad bg-bg-tertiary">
      <div className="shell">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="eyebrow">{testimonials.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-5 font-display text-[clamp(28px,3.8vw,46px)] font-light leading-[1.07] tracking-[-0.02em] text-white"
          >
            {testimonials.heading}
          </TextReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <FadeUp key={t.author} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-bg-secondary p-7">
                <div className="font-display text-4xl leading-none text-primary/50">&ldquo;</div>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-white/78">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <div className="font-display text-base text-white">{t.author}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="mt-14 border-y border-white/10 py-6">
        <Marquee speed={38} className="font-display text-2xl font-light text-white/30 md:text-3xl">
          {sectors.map((s) => (
            <span key={s} className="mx-8 inline-flex items-center gap-8">
              {s}
              <span className="text-primary/40">/</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
