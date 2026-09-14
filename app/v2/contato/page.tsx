import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { JsonLd, breadcrumbJsonLd, contactPageJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Contato — Diagnóstico Gratuito",
  description:
    "Agende diagnóstico gratuito para VTEX, Uappi ou automações Iugis: implantação, migração, SEO técnico e UX.",
  path: "/v2/contato",
  canonicalPath: "/contato",
});

const crumbs = [
  { name: "Início", path: "/v2" },
  { name: "Contato", path: "/v2/contato" },
];

export default function V2ContatoPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(crumbs), contactPageJsonLd()]} />
      <PageHeroV2
        eyebrow="Contato"
        title="Agende um diagnóstico gratuito"
        description="Conte sobre seu projeto VTEX, Uappi ou automações Iugis. Retornamos com próximos passos claros."
        image="/images/v2/mobile.jpg"
        crumbs={crumbs}
      />
      <SectionV2>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-brand hover:underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-brand hover:underline"
            >
              WhatsApp
            </a>
            <p className="pt-4 text-slate">
              Atuamos com VTEX, Uappi e Iugis: implantação, migração, SEO
              técnico, UX de conversão e automações.
            </p>
          </div>
          <Suspense
            fallback={
              <div className="rounded-2xl bg-mist/50 p-8 text-sm text-slate">
                Carregando formulário…
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </SectionV2>
    </>
  );
}
