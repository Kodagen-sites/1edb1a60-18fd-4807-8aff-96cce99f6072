import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig, asset } from "@/lib/site-config";

const page = siteConfig.pages.services;

export const metadata: Metadata = {
  title: "Capabilities",
  description: page.intro,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        image={asset(page.imageSlot)}
        intro={page.intro}
      />
      <ServicesGrid showHeader={false} background="bg-bg" />
      <Process />
      <CtaBand />
    </>
  );
}
