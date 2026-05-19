import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import { StaggerChildren } from "@/components/motion/FadeUp";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig, asset } from "@/lib/site-config";

/** T6 — service card grid (CV4 Liquid Glass), staggered + tilt. */
export default function ServicesGrid({
  showHeader = true,
  background = "bg-bg",
}: {
  showHeader?: boolean;
  background?: string;
}) {
  const { services } = siteConfig;
  return (
    <section className={`section-pad ${background}`}>
      <div className="shell">
        {showHeader && (
          <div className="max-w-2xl">
            <FadeUp>
              <p className="eyebrow">Capabilities</p>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mt-5 font-display text-[clamp(30px,4.4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white"
            >
              One partner for the whole infrastructure stack.
            </TextReveal>
            <FadeUp delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Six connected capabilities — engaged together or on their own.
                Every one is designed, deployed and operated by Joevexm engineers.
              </p>
            </FadeUp>
          </div>
        )}

        <StaggerChildren
          staggerDelay={0.08}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeader ? "mt-12" : ""}`}
        >
          {services.map((s, i) => (
            <CardTiltLayer key={s.slug}>
              <ServiceCard
                service={{ slug: s.slug, name: s.name, description: s.description }}
                index={i}
                imageSrc={asset(s.imageSlot)}
              />
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
