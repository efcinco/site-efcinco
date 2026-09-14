import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { ParallaxImage, ParallaxContainer } from "@/components/v2/ParallaxImage";
import { cases } from "@/content/cases";
import { homeFaqs } from "@/content/faq-home";
import { services } from "@/content/services";
import { getIcon } from "@/lib/icons";
import { JsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "@/components/v2/HeroSection";
import { ServicesSection } from "@/components/v2/ServicesSection";
import { PlatformsSection } from "@/components/v2/PlatformsSection";
import { CasesSection } from "@/components/v2/CasesSection";
import { FaqSection } from "@/components/v2/FaqSection";
import { CtaSection } from "@/components/v2/CtaSection";

export const metadata = buildMetadata({
  title: "eFcinco — Clean",
  description:
    "Especialistas em VTEX, Uappi e Iugis: implantação, migração, SEO técnico, UX de conversão e automações para e-commerce.",
  path: "/v2",
});

export default function V2HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HeroSection />
      <ServicesSection services={services} />
      <PlatformsSection />
      <CasesSection cases={cases} />
      <FaqSection faqs={homeFaqs} />
      <CtaSection />
    </>
  );
}
