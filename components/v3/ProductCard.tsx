"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { useState } from "react";
import { QuickViewModal } from "./QuickViewModal";
import type { ServicePage } from "@/content/services";

type ProductCardProps = {
  service: ServicePage;
  href?: string;
  category?: string;
  badge?: string;
};

export function ProductCard({ service, href, category = "Serviço VTEX", badge }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const isIntegration = service.slug.includes("integracoes");
  const productHref = href ?? `/servicos-vtex/${service.slug}`;
  const featured = service.slug === "implantacao-vtex-io";

  return (
    <>
      <article className="store-product-card group">
        <div className="store-product-media bg-mist">
          <Link href={productHref} aria-label={`Ver ${service.shortTitle}`} title={`Ver ${service.shortTitle}`} className="absolute inset-0">
            {service.image && (
              <Image
                src={service.image}
                alt=""
                fill
                className={`h-full w-full ${isIntegration ? "object-contain" : "object-cover"}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </Link>
          {(badge || featured) && (
            <span className={`pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-[.7rem] font-bold uppercase tracking-[.08em] shadow-sm ${featured ? "bg-brand text-white" : "bg-white text-ink"}`}>
              {featured ? "Mais procurado" : badge}
            </span>
          )}
          <button
            type="button"
            onClick={() => setQuickViewOpen(true)}
            className="absolute bottom-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink opacity-0 shadow-lg transition group-hover:opacity-100 focus:opacity-100"
            aria-label={`Prévia de ${service.shortTitle}`}
            title="Prévia rápida"
          >
            <Eye size={17} />
          </button>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[.7rem] font-bold uppercase tracking-[.12em] text-muted">{category}</p>
          <h3 className="mt-2 font-display text-xl font-bold text-ink transition-colors group-hover:text-brand sm:text-2xl">
            {service.shortTitle}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
            {service.description}
          </p>
          <Link
            href={productHref}
            title={`Ver detalhes: ${service.shortTitle}`}
            className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brand"
          >
            Ver detalhes
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>

      <QuickViewModal
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        service={service}
        href={href}
      />
    </>
  );
}
