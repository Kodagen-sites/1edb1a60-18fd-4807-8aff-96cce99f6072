import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Showcase from "@/components/sections/Showcase";
import Statement from "@/components/sections/Statement";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.titleDefault },
  description: siteConfig.seo.description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.company.legalName,
  alternateName: siteConfig.company.name,
  description: siteConfig.company.description,
  url: siteConfig.seo.siteUrl,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  slogan: siteConfig.company.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
    streetAddress: siteConfig.contact.address,
  },
  areaServed: "Nigeria",
  sameAs: Object.values(siteConfig.socials),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ValueProp />
      <ServicesGrid />
      <Showcase />
      <Statement />
      <Process />
      <Stats />
      <Testimonials />
      <CtaBand />
    </>
  );
}
