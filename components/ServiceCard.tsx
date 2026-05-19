"use client";

import Link from "next/link";
import GlassCursorHighlight from "@/components/motion/GlassCursorHighlight";

/**
 * CV4 — Liquid Glass service card.
 * Frosted card with a gradient hairline border and cursor-tracked highlight.
 */
type Service = {
  slug: string;
  name: string;
  description: string;
};

type Props = {
  service: Service;
  index?: number;
  imageSrc?: string;
};

export default function ServiceCard({ service, index, imageSrc }: Props) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block h-full overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.12), 0 20px 60px -20px rgba(0,0,0,0.55)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1,
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.6), rgba(236,72,153,0.6), rgba(34,211,238,0.6))",
          WebkitMask:
            "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <GlassCursorHighlight accent="var(--color-primary, #22d3ee)" opacity={0.26} radius={320}>
        {imageSrc && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={imageSrc}
              alt={service.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-100"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg/70 to-transparent" />
          </div>
        )}

        <div className="relative p-6">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            {typeof index === "number" ? String(index + 1).padStart(2, "0") : "Service"}
          </div>
          <h3 className="mb-3 font-display text-xl font-light leading-tight text-white md:text-2xl">
            {service.name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-white/65">
            {service.description}
          </p>
          <div className="mt-5 font-mono text-xs text-white/45 transition-colors group-hover:text-primary">
            Explore capability →
          </div>
        </div>
      </GlassCursorHighlight>
    </Link>
  );
}
