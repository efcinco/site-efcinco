"use client";

import { ProductCard } from "./ProductCard";
import { FilterTabs } from "./FilterTabs";
import { useState } from "react";
import { iugisServices } from "@/content/iugis-services";
import { services } from "@/content/services";
import { uappiServices } from "@/content/uappi-services";
import { wakeServices } from "@/content/wake-services";

const categories = [
  { id: "all", label: "Todos" },
  { id: "implantacao", label: "Implantação" },
  { id: "evolucao", label: "Evolução" },
  { id: "iugis", label: "Automação Iugis" },
];

const featuredUappiServices = uappiServices.filter((service) =>
  ["implantacao-uappi", "migracao-uappi", "seo-uappi"].includes(service.slug),
);

const featuredWakeServices = wakeServices.filter((service) =>
  ["implantacao-wake", "migracao-wake", "seo-wake"].includes(service.slug),
);

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = services.filter((service) => {
    if (activeTab === "all") return true;
    if (activeTab === "implantacao")
      return ["implantacao-vtex-io", "migracao-vtex-io"].includes(service.slug);
    if (activeTab === "evolucao")
      return ["manutencao-vtex", "seo-vtex", "ux-conversao", "google-analytics-gtm-performance-vtex"].includes(service.slug);
    if (activeTab === "iugis") return false;
    return false;
  });
  const visibleServices = activeTab === "iugis"
    ? iugisServices
    : activeTab === "all"
      ? [...filteredServices, ...featuredUappiServices, ...featuredWakeServices, ...iugisServices]
      : filteredServices;

  return (
    <section id="vitrine-servicos" className="store-section bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="store-section-heading">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">
              Vitrine de soluções
            </p>
            <h2 className="mt-3">Produtos técnicos para cada momento da sua loja.</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-warm-gray lg:block">
            Selecione a solução, veja o escopo e peça uma proposta orientada ao seu cenário.
          </p>
        </div>

        <div className="mb-10">
          <FilterTabs tabs={categories} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => {
            const isIugis = iugisServices.some((iugisService) => iugisService.slug === service.slug);
            const isUappi = featuredUappiServices.some((uappiService) => uappiService.slug === service.slug);
            const isWake = featuredWakeServices.some((wakeService) => wakeService.slug === service.slug);
            return (
              <ProductCard
                key={service.slug}
                service={service}
                delay={index * 80}
                category={isIugis ? "Automação Iugis" : isUappi ? "Serviço Uappi" : isWake ? "Serviço Wake" : undefined}
                badge={isIugis ? "Iugis" : isUappi ? "UAPPI EXPERT" : isWake ? "WAKE" : undefined}
                href={isIugis ? `/automacoes-iugis/${service.slug}` : isUappi ? `/servicos-uappi/${service.slug}` : isWake ? `/servicos-wake/${service.slug}` : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
