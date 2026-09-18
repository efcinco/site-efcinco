import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Check, ChevronRight, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { FaqSection } from "@/components/v3/FaqSection";
import { AddToProposalButton } from "@/components/v3/AddToProposalButton";
import { ServiceBody } from "@/components/v3/ServiceBody";
import type { ServicePage } from "@/content/services";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/seo/site";

export function CatalogProduct({
  service,
  catalogName,
  catalogPath,
  related,
  badge,
}: {
  service: ServicePage;
  catalogName: string;
  catalogPath: string;
  related: ServicePage[];
  badge: string;
}) {
  const crumbs = [
    { name: "Início", path: "/" },
    { name: catalogName, path: catalogPath },
    { name: service.shortTitle, path: `${catalogPath}/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(crumbs), serviceJsonLd({ name: service.title, description: service.description, path: `${catalogPath}/${service.slug}` }), faqJsonLd(service.faqs)]} />
      <div className="border-b border-mist bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-5 py-4 text-xs text-muted sm:px-10">
          <Link href="/" title="Início" className="transition hover:text-accent hover:underline">Início</Link><ChevronRight size={13} />
          <Link href={catalogPath} title={catalogName} className="transition hover:text-accent hover:underline">{catalogName}</Link><ChevronRight size={13} />
          <span className="truncate text-ink">{service.shortTitle}</span>
        </div>
      </div>
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="relative aspect-[1.08/1] overflow-hidden bg-mist">
            <Image src={service.image} alt={service.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.08em] text-ink shadow-sm">{badge}</span>
          </div>
          <div className="flex flex-col py-2">
            <p className="eyebrow">{catalogName} · {service.keyword}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[.95] tracking-[-.02em] text-ink sm:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{service.answer}</p>
            <p className="mt-6 flex items-start gap-2 border-y border-mist py-4 text-sm leading-relaxed text-muted"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-accent" />Escopo e investimento definidos a partir de um diagnóstico gratuito da sua operação.</p>
            <div className="mt-6 grid gap-3">
              <AddToProposalButton slug={service.slug} title={service.shortTitle} image={service.image} />
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" title="Tirar dúvidas pelo WhatsApp" className="rounded-lg border border-whatsapp px-5 py-3.5 text-center text-base font-bold text-whatsapp transition hover:bg-whatsapp/5">Tirar dúvidas pelo WhatsApp</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-mist pt-6 text-sm text-muted">
              <ProductPerk icon={<ShieldCheck size={18} />} text="Escopo validado" />
              <ProductPerk icon={<PackageCheck size={18} />} text="Entrega assistida" />
              <ProductPerk icon={<Truck size={18} />} text="Medição conferida" />
            </div>
          </div>
        </div>
      </section>
      <section className="store-section bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">O que está incluso</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-.02em]">Uma solução pronta para medir e gerar resultado.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl bg-white p-5 text-[1.05rem] leading-relaxed text-muted">
                <Check className="mt-0.5 shrink-0 text-accent" size={18} /><span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ServiceBody service={service} />
      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-section-heading">
            <div>
              <p className="eyebrow">Relacionados</p>
              <h2 className="mt-3">Quem leva este serviço também olha.</h2>
            </div>
            <Link href={catalogPath} title={`Voltar a ${catalogName}`} className="text-sm font-bold underline underline-offset-4 transition hover:text-accent">Voltar a {catalogName}</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`${catalogPath}/${item.slug}`} title={item.shortTitle} className="group rounded-2xl border border-mist bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[1.4] overflow-hidden rounded-xl bg-mist">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                </div>
                <p className="mt-5 text-[.65rem] font-bold uppercase tracking-[.12em] text-muted">Solução complementar</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">{item.shortTitle}</h3>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-accent">Ver serviço <ChevronRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection faqs={service.faqs} title={`Dúvidas sobre ${service.shortTitle}`} />
    </>
  );
}

function ProductPerk({ icon, text }: { icon: ReactNode; text: string }) {
  return <div className="flex flex-col gap-2"><span className="text-accent">{icon}</span><span>{text}</span></div>;
}
