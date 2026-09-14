import Image from "next/image";
import { Suspense } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import {
  JsonLd,
  breadcrumbJsonLd,
  contactPageJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com a eFcinco para diagnóstico VTEX, implantação, migração, manutenção ou ativação da plataforma Iugis.",
  path: "/contato",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Contato", path: "/contato" },
];

function LegacyContatoPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(crumbs), contactPageJsonLd()]} />
      <PageHero
        eyebrow="Contato"
        title="Agende um diagnóstico"
        description="Conte sobre sua loja VTEX ou sobre a operação que deseja automatizar com Iugis."
        image="/images/contact-v2.jpg"
        imageAlt="Atendimento e diagnóstico técnico para lojistas VTEX"
        breadcrumbs={crumbs}
      />
      <section className="atmosphere py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="relative mb-8 hidden aspect-[16/10] overflow-hidden rounded-xl lg:block">
                <Image
                  src="/images/checkout-v2.jpg"
                  alt="Checkout e jornada de compra em e-commerce"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-navy ring-1 ring-navy/8 transition hover:ring-brand/40"
                >
                  <Icon icon={Mail} className="text-brand" />
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-navy ring-1 ring-navy/8 transition hover:ring-brand/40"
                >
                  <Icon icon={MessageCircle} className="text-brand" />
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
            <Suspense
              fallback={
                <div className="rounded-2xl bg-white p-8 ring-1 ring-navy/8">
                  Carregando formulário…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}

export { default } from "../v3/contato/page";
