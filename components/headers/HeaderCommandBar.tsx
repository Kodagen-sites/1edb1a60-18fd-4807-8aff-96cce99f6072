"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

/**
 * HeaderCommandBar — variant id "command-bar".
 * A slim mono-styled command bar that docks at the top, gains a tinted
 * backdrop on scroll, and expands to a fullscreen overlay on mobile.
 */
export default function HeaderCommandBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-3 md:pt-4">
        <nav
          className="flex items-center justify-between rounded-full border px-3 py-2 transition-colors duration-300 md:px-4"
          style={{
            borderColor: scrolled ? "rgba(34,211,238,0.22)" : "rgba(255,255,255,0.08)",
            background: scrolled ? "rgba(5,9,21,0.82)" : "rgba(5,9,21,0.45)",
            backdropFilter: "blur(16px) saturate(150%)",
            WebkitBackdropFilter: "blur(16px) saturate(150%)",
          }}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 pl-1.5">
            <span
              className="grid h-7 w-7 place-items-center rounded-md font-mono text-[13px] font-bold text-[#050915]"
              style={{ background: "linear-gradient(135deg,#22d3ee,#ec4899)" }}
            >
              J
            </span>
            <span className="font-display text-[15px] font-medium tracking-tight text-white">
              {siteConfig.company.fullName}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors"
                style={{
                  color: isActive(item.href) ? "#22d3ee" : "rgba(255,255,255,0.62)",
                  background: isActive(item.href) ? "rgba(34,211,238,0.08)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-[#050915] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#22d3ee,#67e8f9)" }}
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/80 md:hidden"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {open ? "Close" : "Menu"}
            <span className="flex flex-col gap-[3px]">
              <span className="block h-px w-3.5 bg-current" />
              <span className="block h-px w-3.5 bg-current" />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{ background: "rgba(5,9,21,0.97)", backdropFilter: "blur(8px)" }}
        >
          <div className="grid-overlay flex flex-1 flex-col justify-center gap-2 px-7">
            {siteConfig.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-5 font-display text-3xl font-light text-white"
              >
                <span className="mr-4 font-mono text-xs text-primary">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-8 rounded-full px-6 py-4 text-center font-mono text-sm uppercase tracking-[0.14em] text-[#050915]"
              style={{ background: "linear-gradient(135deg,#22d3ee,#67e8f9)" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
