import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import ContactForm from "@/components/ContactForm";
import { siteConfig, asset } from "@/lib/site-config";

const page = siteConfig.pages.contact;

export const metadata: Metadata = {
  title: "Contact",
  description: page.intro,
};

export default function ContactPage() {
  const { contact } = siteConfig;
  const details = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Office", value: contact.address, href: undefined },
    { label: "Hours", value: contact.hours, href: undefined },
    { label: "Coverage", value: contact.serviceArea, href: undefined },
  ];

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        image={asset(page.imageSlot)}
        intro={page.intro}
      />

      <section className="section-pad bg-bg-secondary">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <FadeUp>
            <ContactForm />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <p className="eyebrow">Direct lines</p>
              <h2 className="mt-5 font-display text-[clamp(24px,3vw,36px)] font-light leading-[1.12] tracking-[-0.02em] text-white">
                Reach an engineer, not a queue.
              </h2>
              <ul className="mt-8 space-y-px overflow-hidden rounded-2xl border border-white/10">
                {details.map((d) => (
                  <li key={d.label} className="bg-bg-tertiary px-6 py-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary/80">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1.5 block text-sm text-white/85 transition-colors hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-1.5 text-sm text-white/85">{d.value}</div>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-white/55">
                Prefer to start with a document? Email us a brief and we will
                respond with an initial read before we even meet.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
