import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { Faq } from "@/components/Faq";
import { getServiceBySlug, services } from "@/content/services";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/v2/servicos/${service.slug}`,
    canonicalPath: `/servicos/${service.slug}`,
  });
}

export default async function V2ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Início", path: "/v2" },
    { name: "Serviços", path: "/v2/servicos" },
    { name: service.shortTitle, path: `/v2/servicos/${service.slug}` },
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
      <PageHeroV2
        eyebrow="Serviço VTEX"
        title={service.title}
        description={service.answer}
        image={
          service.slug.includes("seo")
            ? "/images/v2/analytics.jpg"
            : service.slug.includes("ux")
              ? "/images/v2/mobile.jpg"
              : service.slug.includes("integr")
                ? "/images/v2/server.jpg"
                : "/images/v2/code.jpg"
        }
        imageAlt={service.title}
        crumbs={crumbs}
      />
      <SectionV2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-tight">O problema</h2>
            <p className="mt-3 leading-relaxed text-slate">{service.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tight">A solução</h2>
            <p className="mt-3 leading-relaxed text-slate">{service.solution}</p>
          </div>
        </div>
        <h2 className="mt-16 font-display text-2xl tracking-tight">Entregáveis</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink/80">
              <Icon icon={Check} size={16} className="mt-0.5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-slate">
          <Link href="/v2/contato" className="font-semibold text-brand hover:underline">
            Agendar diagnóstico
          </Link>{" "}
          ·{" "}
          <Link href={`/servicos/${service.slug}`} className="hover:underline">
            Ver na versão clássica
          </Link>
        </p>
      </SectionV2>
      <Faq items={service.faqs} />
    </>
  );
}
