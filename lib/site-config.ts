/**
 * Generation manifest (commit ALL axes — Phase Gate verifies completeness):
 *   archetype: G (premium tier — T2 scroll-scrub ScrollCanvas hero)
 *   style: S1                color_variant: cyan-primary
 *   voice_family: V6         card_variant: CV4        cta_variant: CTA4
 *   header_variant: command-bar    footer_variant: FT1
 *   hero_overlay: HO2        hero_text: H3            hero_entrance: E2
 *   scene_variant: S1.V1     motion_variant: forward-dolly
 *   booking_pattern: n/a     hero_treatment: scrubbed-frames
 *   glass_material: hud-overlay     motion_vocabulary: ease-cinematic
 *   background_treatment: particle-field
 *   card_material_variant: image-reveal-mask
 *   motion_bg_pattern: particle-field   motion_bg_density: subtle
 *   narrative_shape: building-tour      camera_vocabulary: forward-dolly
 *   composition_pattern: diagonal-leading-line   subject_position: mid
 *   lighting_temperature: blue-hour     industry_video_tone: architecture-contemplative
 *   bookingVariant: (n/a)    cartVariant: (n/a)      industry: professional
 *   auth_strategy: none      customer_management_enabled: false
 *   subscribers_enabled: false
 *   buildMode: landing       assetMode: live-generate
 *
 * Archetype pick reason: Joevexm is a multi-service B2B digital-infrastructure
 * provider — Structured Hybrid (G) at premium tier with a cinematic scroll-
 * scrubbed data-centre hero fits the "scroll-driven story" experience request.
 */

import assetManifest from "@/content/asset-manifest.json";
import framesManifest from "@/content/frames-manifest.json";

const images = assetManifest.images as Record<string, string>;
const videos = assetManifest.videos as Record<string, string>;

/** Resolve an image slot → CDN URL from the asset manifest, else local dev path. */
export function asset(slot: string): string {
  return images[slot] || `/${slot}.jpg`;
}

export const frames = {
  count: framesManifest.frameCount as number,
  dir: framesManifest.frameDir as string,
  fps: framesManifest.fps as number,
  /** ScrollCanvas pattern — accepts {nnnn} 4-digit token. */
  urlTemplate: `${framesManifest.frameDir}/frame-{nnnn}.jpg`,
};

export const heroVideoUrl: string = videos["scene-1"] || "";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  outcome: string;
  capabilities: string[];
  imageSlot: string;
};

export const siteConfig = {
  headerVariant: "command-bar",

  company: {
    name: "Joevexm",
    fullName: "Joevexm Nig Ltd",
    legalName: "Joevexm Nigeria Limited",
    tagline: "Building Nigeria's digital backbone",
    description:
      "Joevexm Nig Ltd engineers and operates the digital infrastructure Nigerian enterprises run on — networks, data centres, cloud, security and the software that ties them together.",
  },

  contact: {
    email: "hello@joevexm.com",
    phone: "+234 700 563 8396",
    location: "Lagos, Nigeria",
    address: "Victoria Island, Lagos, Nigeria",
    serviceArea: "Operating Nigeria-wide",
    hours: "Monday – Friday, 08:00 – 18:00 WAT",
  },

  hero: {
    eyebrow: "Enterprise digital infrastructure",
    h1Lead: "Building Nigeria's",
    h1Accent: "digital backbone",
    subhead:
      "We design, deploy and operate the networks, data centres and platforms that keep Nigerian enterprises connected, secure and online.",
    primaryCta: { label: "Start an infrastructure review", href: "/contact" },
    secondaryCta: { label: "Explore capabilities", href: "/services" },
  },

  valueProp: {
    eyebrow: "Why Joevexm",
    heading: "Infrastructure that does not negotiate with downtime.",
    body:
      "Connectivity, compute and security are no longer back-office concerns — they are the operating system of the business. Joevexm builds that layer to international tier standards and stands behind it with measured uptime, local engineers and 24/7 operations.",
    imageSlot: "section-value",
    points: [
      {
        title: "Engineered, not improvised",
        body: "Every deployment is designed against tier standards, documented and tested before it carries production traffic.",
      },
      {
        title: "Local hands, global standards",
        body: "Nigerian engineers who reach your site fast, working to the same playbooks as the world's largest operators.",
      },
      {
        title: "Operated, not just installed",
        body: "We stay on the line — 24/7 monitoring, patching and incident response under a measured SLA.",
      },
      {
        title: "Built to be audited",
        body: "Security and compliance are designed in, so regulated industries can prove control, not just claim it.",
      },
    ],
  },

  services: [
    {
      slug: "network-infrastructure",
      name: "Network Infrastructure",
      short: "Enterprise connectivity engineered for uptime.",
      description:
        "Enterprise fibre, structured cabling and wide-area connectivity designed for businesses that cannot afford to drop a packet.",
      outcome:
        "A connectivity layer with measured throughput, redundant paths and documented failover — so the network is never the reason work stops.",
      capabilities: [
        "Enterprise fibre and last-mile connectivity",
        "Structured cabling and campus networks",
        "SD-WAN and multi-site interconnect",
        "Redundant routing and failover design",
        "Wireless and access network engineering",
      ],
      imageSlot: "service-network-infrastructure",
    },
    {
      slug: "data-centre-solutions",
      name: "Data Centre Solutions",
      short: "Colocation and managed infrastructure to tier standards.",
      description:
        "Colocation, hosting and managed infrastructure built and operated to international tier standards inside Nigeria.",
      outcome:
        "A home for critical systems with controlled power, cooling and access — and a team that proves it stays within spec.",
      capabilities: [
        "Colocation and rack space",
        "Managed servers and storage",
        "Power, cooling and environmental design",
        "Disaster recovery and backup sites",
        "Capacity planning and migration",
      ],
      imageSlot: "service-data-centre-solutions",
    },
    {
      slug: "cloud-managed-services",
      name: "Cloud & Managed Services",
      short: "Cloud migration and 24/7 managed operations.",
      description:
        "Cloud migration, hybrid architecture and round-the-clock managed operations for teams that would rather build than babysit infrastructure.",
      outcome:
        "Workloads in the right place — cloud, on-prem or hybrid — under one operations team accountable for uptime and cost.",
      capabilities: [
        "Cloud migration and modernisation",
        "Hybrid and multi-cloud architecture",
        "24/7 monitoring and managed operations",
        "Cost optimisation and FinOps",
        "Backup, recovery and resilience",
      ],
      imageSlot: "service-cloud-managed-services",
    },
    {
      slug: "cybersecurity",
      name: "Cybersecurity & Compliance",
      short: "Security architecture and threat monitoring.",
      description:
        "Threat monitoring, security architecture and regulatory compliance engineered for banks, telcos and regulated operators.",
      outcome:
        "A security posture you can demonstrate to a regulator — controls designed in, monitored continuously and evidenced.",
      capabilities: [
        "Security architecture and hardening",
        "24/7 threat monitoring and response",
        "Vulnerability assessment and penetration testing",
        "Identity and access management",
        "Regulatory compliance and audit readiness",
      ],
      imageSlot: "service-cybersecurity",
    },
    {
      slug: "software-engineering",
      name: "Software Engineering",
      short: "Custom enterprise platforms and integration.",
      description:
        "Custom enterprise platforms, systems integration and API engineering that connects the business to its infrastructure.",
      outcome:
        "Software that fits how the business actually works — integrated, maintainable and owned by you.",
      capabilities: [
        "Custom enterprise platforms",
        "Systems and legacy integration",
        "API design and engineering",
        "Workflow automation",
        "Maintenance and platform support",
      ],
      imageSlot: "service-software-engineering",
    },
    {
      slug: "ict-consulting",
      name: "ICT Consulting",
      short: "Transformation strategy and technology roadmaps.",
      description:
        "Digital transformation strategy, infrastructure audits and technology roadmaps written for boards and operators alike.",
      outcome:
        "A clear, costed path from where the technology is today to where the business needs it to be.",
      capabilities: [
        "Infrastructure and security audits",
        "Digital transformation strategy",
        "Technology roadmaps and budgeting",
        "Vendor evaluation and procurement",
        "Programme and project advisory",
      ],
      imageSlot: "service-ict-consulting",
    },
  ] as Service[],

  showcase: {
    eyebrow: "Where we operate",
    heading: "Infrastructure for the sectors that cannot go dark.",
    body:
      "From banking floors to telecom backbones to government operations centres, Joevexm builds and runs the infrastructure that regulated, high-stakes organisations depend on.",
    items: [
      {
        title: "Banking & financial services",
        copy: "Secure data halls, segregated networks and audit-ready controls for institutions that answer to a regulator.",
        imageSlot: "section-showcase-1",
      },
      {
        title: "Telecommunications",
        copy: "Fibre backbone, interconnect and managed transport for operators carrying the country's traffic.",
        imageSlot: "section-showcase-2",
      },
      {
        title: "Government & enterprise",
        copy: "Command and operations centres, resilient connectivity and managed services for large public and private operators.",
        imageSlot: "section-showcase-3",
      },
    ],
  },

  statement: {
    eyebrow: "The mandate",
    text: "When the network holds, the business is free to think about everything else. That is the only job.",
  },

  process: {
    eyebrow: "How we engage",
    heading: "A measured path from audit to operation.",
    steps: [
      {
        no: "01",
        title: "Audit",
        body: "We map the current estate — networks, sites, systems and risks — and benchmark it against where the business needs to be.",
      },
      {
        no: "02",
        title: "Design",
        body: "We engineer the target architecture against tier and security standards, costed and documented before a cable is run.",
      },
      {
        no: "03",
        title: "Deploy",
        body: "We build and migrate in controlled stages, testing each layer before it carries production traffic.",
      },
      {
        no: "04",
        title: "Operate",
        body: "We monitor, patch and respond 24/7 under a measured SLA — and review the estate with you as the business grows.",
      },
    ],
  },

  stats: {
    eyebrow: "Measured, not claimed",
    heading: "Numbers the operations team stands behind.",
    items: [
      { value: 99.95, suffix: "%", label: "Target service availability" },
      { value: 24, suffix: "/7", label: "Monitoring and incident response" },
      { value: 36, suffix: "+", label: "Nigerian states reachable" },
      { value: 15, suffix: " min", label: "Median critical-alert response" },
    ],
  },

  testimonials: {
    eyebrow: "Operator confidence",
    heading: "Trusted where downtime is not an option.",
    items: [
      {
        quote:
          "Joevexm rebuilt our branch connectivity and the difference showed in the first month — outages stopped being a standing agenda item.",
        author: "Head of IT",
        role: "Commercial bank, Lagos",
      },
      {
        quote:
          "They engineer like operators, not vendors. Everything was documented, tested and handed over so our own team could run it.",
        author: "Chief Technology Officer",
        role: "Telecommunications group",
      },
      {
        quote:
          "Our last security audit was the calmest we have had. The controls were already in place and evidenced.",
        author: "Chief Risk Officer",
        role: "Financial services operator",
      },
    ],
  },

  cta: {
    eyebrow: "Start here",
    heading: "Let's pressure-test your infrastructure.",
    body: "Book an infrastructure review with a Joevexm engineer. We will assess your networks, data and security posture and show you exactly where the risk and the opportunity sit.",
    primary: { label: "Request an infrastructure review", href: "/contact" },
    secondary: { label: "See our capabilities", href: "/services" },
    imageSlot: "section-cta",
  },

  pages: {
    services: {
      eyebrow: "Capabilities",
      title: "The infrastructure layer, engineered end to end.",
      intro:
        "Six connected capabilities — from the fibre in the ground to the software on top of it. Engaged together or on their own, every one is designed, deployed and operated by Joevexm.",
      imageSlot: "section-services",
    },
    about: {
      eyebrow: "About Joevexm",
      title: "Engineers building the layer Nigeria runs on.",
      intro:
        "Joevexm Nig Ltd is a Nigerian digital-infrastructure company. We exist to make world-class infrastructure ordinary for the enterprises that keep the economy moving.",
      imageSlot: "section-about",
      story: [
        "Joevexm began with a simple frustration: too many Nigerian enterprises were running mission-critical operations on infrastructure nobody had truly engineered. Networks grew by accident, security was bolted on, and downtime was treated as weather rather than a fault.",
        "We set out to change that — to bring the discipline of international-tier operators to businesses here, with local engineers who answer the phone and reach the site.",
        "Today Joevexm designs, deploys and operates digital infrastructure for banks, telecoms operators and large enterprises across Nigeria. The work is unglamorous on purpose: when we have done it well, nobody thinks about the infrastructure at all.",
      ],
      values: [
        { title: "Engineering discipline", body: "Designed, documented, tested. We do not improvise production infrastructure." },
        { title: "Accountable operations", body: "We stay on the line after handover — monitored, measured and answerable for uptime." },
        { title: "Built for trust", body: "Security and compliance are designed in, so regulated clients can prove control." },
        { title: "Nigeria-first", body: "Local engineers, local presence, world-class standards — no compromise on either." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to an infrastructure engineer.",
      intro:
        "Tell us what you are running and what worries you about it. We will line you up with an engineer, not a sales script.",
      imageSlot: "section-contact",
    },
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/joevexm",
    x: "https://x.com/joevexm",
    instagram: "https://www.instagram.com/joevexm",
    facebook: "https://www.facebook.com/joevexm",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],

  footer: {
    contactEmail: "hello@joevexm.com",
    address: "Victoria Island, Lagos, Nigeria",
    blurb: "Engineering and operating the digital infrastructure Nigerian enterprises run on.",
  },

  seo: {
    siteUrl: "https://joevexm.com",
    titleDefault: "Joevexm Nig Ltd — Building Nigeria's digital backbone",
    titleTemplate: "%s · Joevexm Nig Ltd",
    description:
      "Joevexm Nig Ltd designs, deploys and operates enterprise networks, data centres, cloud, cybersecurity and software for Nigerian businesses.",
    locale: "en_NG",
  },
} as const;

export type SiteConfig = typeof siteConfig;
