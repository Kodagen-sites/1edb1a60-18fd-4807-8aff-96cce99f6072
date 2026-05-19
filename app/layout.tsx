import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { siteConfig } from "@/lib/site-config";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.titleDefault,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: [
    "digital infrastructure Nigeria",
    "data centre Lagos",
    "enterprise networks Nigeria",
    "managed IT services",
    "cybersecurity Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.company.fullName,
    title: siteConfig.seo.titleDefault,
    description: siteConfig.seo.description,
    url: siteConfig.seo.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.titleDefault,
    description: siteConfig.seo.description,
  },
  alternates: { canonical: siteConfig.seo.siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#050915",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <Vignette color="#050915" />
        <FilmGrain />
      </body>
    </html>
  );
}
