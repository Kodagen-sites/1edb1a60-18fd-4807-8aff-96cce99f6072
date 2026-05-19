import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import NumberCounter from "@/components/motion/NumberCounter";
import { siteConfig } from "@/lib/site-config";

/** T13 / ST1 — three-across counters with measured infrastructure metrics. */
export default function Stats() {
  const { stats } = siteConfig;
  return (
    <section className="section-pad bg-bg-secondary">
      <div className="shell">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="eyebrow">{stats.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-5 font-display text-[clamp(28px,3.8vw,46px)] font-light leading-[1.07] tracking-[-0.02em] text-white"
          >
            {stats.heading}
          </TextReveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.09} className="bg-bg-tertiary p-8">
              <div className="font-display text-[clamp(40px,5vw,64px)] font-light leading-none text-white">
                <NumberCounter
                  to={item.value}
                  decimals={item.value % 1 ? 2 : 0}
                  suffix={item.suffix}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {item.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
