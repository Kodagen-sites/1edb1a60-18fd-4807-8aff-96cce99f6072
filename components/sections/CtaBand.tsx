import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig, asset } from "@/lib/site-config";

/** CTA4 — magnetic-button CTA on a parallax-image background, with contact strip. */
export default function CtaBand() {
  const { cta, contact } = siteConfig;
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${asset(cta.imageSlot)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,9,21,0.88), rgba(5,9,21,0.74))",
        }}
      />

      <div className="shell relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="eyebrow">{cta.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-6 font-display text-[clamp(34px,5.4vw,68px)] font-light leading-[1.04] tracking-[-0.025em] text-white text-balance"
          >
            {cta.heading}
          </TextReveal>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/72">
              {cta.body}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                as="a"
                href={cta.primary.href}
                className="rounded-full bg-gradient-to-br from-primary to-[#67e8f9] px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[#050915]"
              >
                {cta.primary.label}
              </MagneticButton>
              <MagneticButton
                as="a"
                href={cta.secondary.href}
                className="rounded-full border border-white/25 px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-white"
              >
                {cta.secondary.label}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
          {[
            { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
            { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
            { label: "Office", value: contact.location, href: "/contact" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="bg-bg-secondary/80 p-6 text-center transition-colors hover:bg-bg-tertiary"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary/80">
                {c.label}
              </div>
              <div className="mt-2 text-sm text-white/80">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
