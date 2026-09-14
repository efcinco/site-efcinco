"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { useState } from "react";
import { Badge } from "./Badge";
import { Rating } from "./Rating";
import { QuickViewModal } from "./QuickViewModal";
import type { ServicePage } from "@/content/services";

type ProductCardProps = {
  service: ServicePage;
  delay?: number;
  href?: string;
  category?: string;
  badge?: string;
};

export function ProductCard({ service, delay = 0, href, category = "Solução sob medida", badge }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const isIntegration = service.slug.includes("integracoes");
  const productHref = href ?? `/servicos-vtex/${service.slug}`;

  return (
    <>
      <article
        className="store-product-card group"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="store-product-media">
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
          <div className="pointer-events-none absolute left-4 top-4">
            <Badge variant={service.slug === "implantacao-vtex-io" ? "gold" : "outline"}>
              {badge ?? (service.slug === "implantacao-vtex-io" ? "Mais procurado" : "VTEX Expert")}
            </Badge>
          </div>
          <button
            type="button"
            onClick={() => setQuickViewOpen(true)}
            className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-luxury-black opacity-0 shadow-lg transition group-hover:opacity-100 focus:opacity-100"
            aria-label={`Prévia de ${service.shortTitle}`}
          >
            <Eye size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-warm-gray">{category}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-luxury-black transition-colors group-hover:text-[#006db1]">
            {service.shortTitle}
          </h3>
          
          <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-gray line-clamp-3">
            {service.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-soft-beige pt-4">
            <div>
              <div className="font-mono text-sm text-warm-gray">A partir de</div>
              <div className="font-mono text-lg font-bold text-luxury-black">
                Sob consulta
              </div>
            </div>
            <div className="text-right">
              <Rating value={4.9} max={5} showValue={false} size={14} />
              <span className="mt-1 block text-xs text-warm-gray">Projetos avaliados</span>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="rounded-full border border-soft-beige bg-white px-4 py-3 text-sm font-semibold text-charcoal transition hover:border-[#006db1] hover:bg-[#006db1] hover:text-white"
            >
              <Eye size={16} className="mr-1.5 inline" />
              Ver rápido
            </button>
            <Link
              href={productHref}
              title={`Ver produto: ${service.shortTitle}`}
              className="ml-auto inline-flex flex-1 items-center justify-center rounded-full bg-[#006db1] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#005a93]"
            >
              Ver produto
              <ArrowRight size={14} className="ml-1 inline" />
            </Link>
          </div>
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
