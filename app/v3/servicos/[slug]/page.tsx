import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Check, ChevronRight, Heart, PackageCheck, ShieldCheck, Star, Truck } from "lucide-react";
import { PageBrandLogo } from "@/components/v3/PageBrandLogo";
import { Rating } from "@/components/v3/Rating";
import { FaqSection } from "@/components/v3/FaqSection";
import { AddToProposalButton } from "@/components/v3/AddToProposalButton";
import { ServiceBody } from "@/components/v3/ServiceBody";
import { getServiceBySlug, services } from "@/content/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/seo/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} | Loja eFcinco`,
    description: service.description,
    path: `/servicos-vtex/${service.slug}`,
    keywords: [service.keyword, service.shortTitle, service.title],
  });
}

export default async function StoreProductPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Soluções VTEX", path: "/#vitrine-servicos" },
    { name: service.shortTitle, path: `/servicos-vtex/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(crumbs), serviceJsonLd({ name: service.title, description: service.description, path: `/servicos-vtex/${service.slug}` }), faqJsonLd(service.faqs)]} />
      <div className="border-b border-soft-beige bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-5 py-4 text-xs text-warm-gray sm:px-10">
          <Link href="/" title="Início" className="transition hover:text-[#006db1] hover:underline">Início</Link><ChevronRight size={13} />
          <Link href="/#vitrine-servicos" title="Soluções VTEX" className="transition hover:text-[#006db1] hover:underline">Soluções VTEX</Link><ChevronRight size={13} />
          <span className="truncate text-luxury-black">{service.shortTitle}</span>
        </div>
      </div>

      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className={`relative aspect-[1.08/1] overflow-hidden ${service.slug.includes("integracoes") ? "bg-transparent" : "bg-soft-beige"}`}>
            <Image src={service.image} alt={service.title} fill priority className={service.slug.includes("integracoes") ? "object-contain" : "object-cover"} sizes="(max-width: 1024px) 100vw, 55vw" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.08em] text-luxury-black shadow-sm">eFcinco curated</span>
          </div>
          <div className="flex flex-col py-2">
            <PageBrandLogo brand="vtex" />
            <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">Serviço VTEX · {service.keyword}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[.95] tracking-[-.02em] text-luxury-black sm:text-6xl">{service.title}</h1>
            <div className="mt-5 flex items-center gap-3">
              <Rating value={4.9} showValue size={16} />
              <span className="text-sm text-warm-gray">• solução com diagnóstico personalizado</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-warm-gray">{service.answer}</p>
            <div className="mt-8 border-y border-soft-beige py-5">
              <div className="flex items-end justify-between">
                <div><p className="text-sm text-warm-gray">Investimento</p><p className="font-mono text-2xl font-bold text-luxury-black">Sob consulta</p></div>
                <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-soft-beige transition hover:bg-soft-beige" aria-label="Salvar solução"><Heart size={18} /></button>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <AddToProposalButton slug={service.slug} title={service.shortTitle} />
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" title="Tirar dúvidas pelo WhatsApp" className="rounded-lg border border-[#25D366] px-5 py-3.5 text-center text-base font-bold text-[#25D366] transition hover:bg-[#25D366]/5">Tirar dúvidas pelo WhatsApp</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-soft-beige pt-6 text-sm text-warm-gray">
              <ProductPerk icon={<ShieldCheck size={18} />} text="Escopo validado" />
              <ProductPerk icon={<PackageCheck size={18} />} text="Entrega assistida" />
              <ProductPerk icon={<Truck size={18} />} text="Go-live acompanhado" />
            </div>
          </div>
        </div>
      </section>

      <section className="store-section bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">O que está incluso</p><h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-.02em]">Uma solução pronta para sair da vitrine e gerar resultado.</h2></div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((item) => <li key={item} className="flex gap-3 bg-white p-5 text-[1.05rem] leading-relaxed text-warm-gray"><Check className="mt-0.5 shrink-0 text-gold-hover" size={18} /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>

      <ServiceBody service={service} />

      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-section-heading"><div><p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">Complete sua proposta</p><h2 className="mt-3">Quem leva este produto também olha.</h2></div><Link href="/#vitrine-servicos" title="Voltar à vitrine" className="text-sm font-bold underline underline-offset-4 transition hover:text-[#006db1]">Voltar à vitrine</Link></div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => <Link key={item.slug} href={`/servicos-vtex/${item.slug}`} title={item.shortTitle} className="group border border-soft-beige bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"><div className="relative aspect-[1.4] overflow-hidden bg-soft-beige"><Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" /></div><p className="mt-5 font-mono text-[.65rem] font-bold uppercase tracking-[.08em] text-warm-gray">Solução complementar</p><h3 className="mt-2 font-display text-2xl font-bold text-luxury-black">{item.shortTitle}</h3><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold-hover">Ver produto <ChevronRight size={15} /></span></Link>)}
          </div>
        </div>
      </section>
      <FaqSection faqs={service.faqs} title={`Dúvidas sobre ${service.shortTitle}`} />
    </>
  );
}

function ProductPerk({ icon, text }: { icon: ReactNode; text: string }) {
  return <div className="flex flex-col gap-2"><span className="text-gold-hover">{icon}</span><span>{text}</span></div>;
}
