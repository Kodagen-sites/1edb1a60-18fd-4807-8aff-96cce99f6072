import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import { siteConfig, asset } from "@/lib/site-config";

/** T5 — sector showcase mosaic. Real infrastructure imagery, not "work photos". */
export default function Showcase() {
  const { showcase } = siteConfig;
  return (
    <section className="section-pad bg-bg-tertiary">
      <div className="shell">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="eyebrow">{showcase.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-5 font-display text-[clamp(30px,4.4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white"
          >
            {showcase.heading}
          </TextReveal>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              {showcase.body}
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {showcase.items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={asset(item.imageSlot)}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-primary">
                    {String(i + 1).padStart(2, "0")} / Sector
                  </div>
                  <h3 className="mt-3 font-display text-xl font-light text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.copy}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
