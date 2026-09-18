import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePage } from "@/content/services";

export function CatalogListing({
  eyebrow,
  title,
  description,
  path,
  badge,
  services,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  badge: string;
  services: ServicePage[];
}) {
  return (
    <section className="store-section bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="store-section-heading">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{description}</p>
          </div>
          <Link href="/contato" title="Solicitar proposta" className="hidden rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-hover sm:block">Solicitar proposta</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`${path}/${service.slug}`} title={service.shortTitle} className="store-product-card group">
              <div className="store-product-media">
                <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-ink">{badge}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[.65rem] font-bold uppercase tracking-[.12em] text-muted">{service.keyword}</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">{service.shortTitle}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent">Ver serviço <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
