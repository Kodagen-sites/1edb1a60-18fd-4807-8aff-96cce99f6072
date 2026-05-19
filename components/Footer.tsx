import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/social-icons";

/** FT1 — Classic 5-column footer, tuned to the S1 Neon Control Room theme. */
export default function Footer() {
  const year = new Date().getFullYear();
  const { company, contact, services, footer, legal, nav } = siteConfig;

  return (
    <footer className="relative border-t border-white/10 bg-bg-secondary">
      <div className="grid-overlay">
        <div className="shell grid gap-12 py-16 md:grid-cols-5 md:py-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 place-items-center rounded-md font-mono text-sm font-bold text-[#050915]"
                style={{ background: "linear-gradient(135deg,#22d3ee,#ec4899)" }}
              >
                J
              </span>
              <span className="font-display text-lg text-white">
                {company.fullName}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {footer.blurb}
            </p>
            <SocialLinks
              socials={siteConfig.socials}
              className="mt-7 text-white"
              iconClassName="h-[18px] w-[18px]"
            />
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow">Capabilities</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="eyebrow">Company</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-primary">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                  {contact.phone}
                </a>
              </li>
              <li>{contact.address}</li>
              <li className="text-white/40">{contact.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="shell flex flex-col gap-3 border-t border-white/10 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
            {contact.location} · {contact.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
