import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { getServiceBySlug, services } from "@/content/services";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: service.shortTitle, path: `/servicos/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: service.title,
            description: service.description,
            path: `/servicos/${service.slug}`,
          }),
          faqJsonLd(service.faqs),
        ]}
      />

      <PageHero
        eyebrow="Serviço VTEX"
        title={service.title}
        description={service.answer}
        image={service.image}
        imageAlt={service.title}
        breadcrumbs={crumbs}
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-navy">O problema</h2>
            <p className="mt-4 leading-relaxed text-slate">{service.problem}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl tracking-tight text-navy">A solução eFcinco</h2>
            <p className="mt-4 leading-relaxed text-slate">{service.solution}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-navy">Entregáveis</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-base text-graphite">
                <Icon icon={Check} size={18} className="mt-0.5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="atmosphere py-16">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-navy">Processo</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="border-t-2 border-brand pt-5">
                <p className="text-xs font-semibold text-brand">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="border-l-2 border-brand pl-6">
            <h2 className="font-display text-2xl text-navy">Para quem é</h2>
            <ul className="mt-5 space-y-3 text-slate">
              {service.forWho.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="border-l-2 border-navy/15 pl-6">
            <h2 className="font-display text-2xl text-navy">Não é para</h2>
            <ul className="mt-5 space-y-3 text-slate">
              {service.notFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-16">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-navy">Resultados esperados</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {service.results.map((item) => (
              <li key={item} className="border-t border-navy/10 pt-4 text-graphite">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-slate">
            Veja também nossos{" "}
            <Link href="/cases" className="font-semibold text-brand hover:underline">
              cases
            </Link>{" "}
            e a plataforma{" "}
            <Link href="/iugis" className="font-semibold text-brand hover:underline">
              Iugis
            </Link>
            .
          </p>
        </Container>
      </section>

      <Faq items={service.faqs} />
      <CtaBand
        title={`Vamos falar sobre ${service.keyword}?`}
        description="Agende um diagnóstico com a eFcinco e receba um caminho claro de próximo passo."
      />
    </>
  );
}
