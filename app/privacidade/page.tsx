import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Política de privacidade da eFcinco: como tratamos dados pessoais coletados em formulários e comunicações.",
  path: "/privacidade",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Privacidade", path: "/privacidade" },
];

export default function PrivacidadePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="bg-paper py-16 sm:py-20">
        <Container className="prose-custom max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink">Política de Privacidade</h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Esta política descreve como a {siteConfig.name} trata dados
              pessoais coletados por meio do site {siteConfig.url}, formulários
              de contato e canais de atendimento.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink">Dados coletados</h2>
            <p>
              Podemos coletar nome, e-mail, empresa, telefone e informações
              fornecidas voluntariamente sobre sua operação de e-commerce, com
              a finalidade de responder solicitações comerciais e prestar
              serviços.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink">Uso das informações</h2>
            <p>
              Utilizamos os dados para contato comercial, elaboração de
              propostas, suporte e melhoria da experiência do site. Não
              vendemos dados pessoais.
            </p>
            <h2 className="font-display text-2xl font-bold text-ink">Contato do titular</h2>
            <p>
              Para solicitações relacionadas a dados pessoais, escreva para{" "}
              <a className="text-accent hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
