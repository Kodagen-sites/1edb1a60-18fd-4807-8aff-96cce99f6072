import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grid-overlay flex min-h-[80vh] items-center">
      <div className="shell text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 font-display text-[clamp(48px,9vw,120px)] font-light leading-none text-white">
          Off the map.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-white/60">
          That route does not exist. The infrastructure, thankfully, is more
          reliable than this link.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full px-7 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#050915]"
          style={{ background: "linear-gradient(135deg,#22d3ee,#67e8f9)" }}
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
