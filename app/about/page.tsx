import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import Stats from "@/components/sections/Stats";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig, asset } from "@/lib/site-config";

const page = siteConfig.pages.about;

export const metadata: Metadata = {
  title: "About",
  description: page.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        image={asset(page.imageSlot)}
        intro={page.intro}
      />

      <section className="section-pad bg-bg-secondary">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <FadeUp>
              <p className="eyebrow">Our story</p>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mt-5 font-display text-[clamp(26px,3.2vw,40px)] font-light leading-[1.12] tracking-[-0.02em] text-white"
            >
              Infrastructure should be the thing nobody has to think about.
            </TextReveal>
          </div>
          <div className="space-y-6">
            {page.story.map((para, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-white/68">{para}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="shell">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="eyebrow">What we hold to</p>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mt-5 font-display text-[clamp(28px,3.8vw,46px)] font-light leading-[1.07] tracking-[-0.02em] text-white"
            >
              Four principles, applied to every engagement.
            </TextReveal>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2">
            {page.values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08} className="bg-bg-tertiary p-8">
                <div className="font-mono text-sm text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl font-light text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/62">
                  {v.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CtaBand />
    </>
  );
}
