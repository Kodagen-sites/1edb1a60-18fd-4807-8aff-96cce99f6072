import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import ImageRevealMask from "@/components/motion/ImageRevealMask";
import { siteConfig, asset } from "@/lib/site-config";

/** T7 type statement + feature image. The page's single ImageRevealMask lives here. */
export default function ValueProp() {
  const { valueProp } = siteConfig;
  return (
    <section className="section-pad bg-bg-secondary">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <p className="eyebrow">{valueProp.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-5 font-display text-[clamp(30px,4.4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white"
          >
            {valueProp.heading}
          </TextReveal>
          <FadeUp delay={0.1}>
            <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-white/68">
              {valueProp.body}
            </p>
          </FadeUp>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2">
            {valueProp.points.map((p, i) => (
              <FadeUp key={p.title} delay={0.15 + i * 0.08} className="bg-bg-tertiary p-6">
                <div className="font-mono text-[11px] text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-lg font-light text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative">
            <ImageRevealMask
              src={asset(valueProp.imageSlot)}
              alt="Nigeria rendered as a connected digital network"
              aspectClass="aspect-[4/5]"
              direction="bottom"
              className="rounded-2xl border border-white/10"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
