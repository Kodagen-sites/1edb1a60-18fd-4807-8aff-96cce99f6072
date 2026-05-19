import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig, asset } from "@/lib/site-config";

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return { title: "Capability not found" };
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      url: siteConfig.seo.siteUrl,
    },
    areaServed: "Nigeria",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Capability"
        title={service.name}
        image={asset(service.imageSlot)}
        intro={service.description}
      />

      <section className="section-pad bg-bg-secondary">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <FadeUp>
              <p className="eyebrow">The outcome</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="mt-5 font-display text-[clamp(24px,3vw,38px)] font-light leading-[1.15] tracking-[-0.02em] text-white">
                {service.outcome}
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                Joevexm engineers {service.name.toLowerCase()} the way an
                operator would — designed against standards, documented,
                tested before launch and supported afterwards. You get
                infrastructure you can hand to an auditor and a team that
                stays accountable for it.
              </p>
            </FadeUp>
          </div>

          <div>
            <FadeUp>
              <p className="eyebrow">What it includes</p>
            </FadeUp>
            <ul className="mt-6 space-y-px overflow-hidden rounded-xl border border-white/10">
              {service.capabilities.map((cap, i) => (
                <FadeUp key={cap} delay={i * 0.06}>
                  <li className="flex items-center gap-4 bg-bg-tertiary px-5 py-4">
                    <span className="font-mono text-xs text-primary/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/80">{cap}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow">Related capabilities</p>
          </FadeUp>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.07}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-bg-tertiary p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="font-display text-lg font-light text-white">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-block font-mono text-xs text-white/45 transition-colors group-hover:text-primary">
                    View capability →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
