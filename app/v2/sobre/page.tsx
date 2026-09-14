import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { EyebrowV2, SectionV2 } from "@/components/v2/Section";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Sobre a eFcinco — VTEX, Uappi e Iugis",
  description:
    "eFcinco: especialistas em VTEX, Uappi e Iugis. Mais de 10 anos em e-commerce — implantação, SEO técnico, UX e automações.",
  path: "/v2/sobre",
  canonicalPath: "/sobre",
});

const crumbs = [
  { name: "Início", path: "/v2" },
  { name: "Sobre", path: "/v2/sobre" },
];

export default function V2SobrePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre a eFcinco",
            url: `${siteConfig.url}/v2/sobre`,
          },
        ]}
      />
      <PageHeroV2
        eyebrow="Sobre"
        title="Parceira técnica para VTEX, Uappi e Iugis"
        description="Mais de 10 anos em e-commerce: implantação, migração, SEO técnico, UX e automações."
        image="/images/v2/code.jpg"
        crumbs={crumbs}
      />
      <SectionV2>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight">Missão</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Ser referência técnica em e-commerce para operações que precisam de
              implantação (VTEX ou Uappi), migração, SEO técnico, UX e automações
              via Iugis — sem teatro de slides.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/v2/store.jpg"
              alt="Operação de loja virtual"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </Reveal>
        </div>
      </SectionV2>
      <SectionV2 className="bg-mist/40">
        <Reveal>
          <EyebrowV2>Plataformas</EyebrowV2>
          <h2 className="mt-3 font-display text-3xl tracking-tight">
            VTEX, Uappi e Iugis com o mesmo padrão de qualidade
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Construímos e evoluímos lojas tanto na VTEX IO/Legacy quanto na Uappi.
            Para automações, usamos Iugis: chatbot IA, recuperação de carrinho e integrações.
            Mesma engenharia, SEO e UX em todas as plataformas.
          </p>
          <Link
            href="/v2/contato"
            className="mt-8 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            Agendar conversa
          </Link>
        </Reveal>
      </SectionV2>
    </>
  );
}
