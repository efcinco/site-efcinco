"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { FilterTabs } from "./FilterTabs";
import { ProductCard } from "./ProductCard";
import { iugisServices } from "@/content/iugis-services";
import { services, type ServicePage } from "@/content/services";
import { uappiServices } from "@/content/uappi-services";
import { wakeServices } from "@/content/wake-services";

type Tab = {
  id: string;
  label: string;
  items: ServicePage[];
  basePath: string;
  category: string;
  badge?: string;
  allHref: string;
  allLabel: string;
};

const pick = (list: ServicePage[], slugs: string[]) =>
  slugs.map((slug) => list.find((service) => service.slug === slug)).filter(Boolean) as ServicePage[];

const tabs: Tab[] = [
  {
    id: "vtex",
    label: "VTEX",
    items: services,
    basePath: "/servicos-vtex",
    category: "Serviço VTEX",
    allHref: "/servicos-vtex",
    allLabel: "Ver todos os serviços VTEX",
  },
  {
    id: "uappi",
    label: "Uappi",
    items: uappiServices,
    basePath: "/servicos-uappi",
    category: "Serviço Uappi",
    badge: "Uappi",
    allHref: "/servicos-uappi",
    allLabel: "Ver todos os serviços Uappi",
  },
  {
    id: "wake",
    label: "Wake",
    items: wakeServices,
    basePath: "/servicos-wake",
    category: "Serviço Wake",
    badge: "Wake",
    allHref: "/servicos-wake",
    allLabel: "Ver todos os serviços Wake",
  },
  {
    id: "iugis",
    label: "Automação Iugis",
    items: iugisServices,
    basePath: "/automacoes-iugis",
    category: "Automação Iugis",
    badge: "Iugis",
    allHref: "/automacoes-iugis",
    allLabel: "Conhecer a Iugis",
  },
];

// Destaques da aba inicial: um serviço de cada frente, escolhidos para não repetir foto.
const highlights: { tab: string; slugs: string[] }[] = [
  { tab: "vtex", slugs: ["implantacao-vtex-io", "migracao-vtex-io", "seo-vtex"] },
  { tab: "uappi", slugs: ["ux-conversao"] },
  { tab: "wake", slugs: ["consultoria-wake"] },
  { tab: "iugis", slugs: ["recuperacao-carrinho-whatsapp"] },
];

const MAX_PER_TAB = 6;

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("destaques");
  const tab = tabs.find((item) => item.id === activeTab);

  const cards = tab
    ? tab.items.slice(0, MAX_PER_TAB).map((service) => ({ service, tab }))
    : highlights.flatMap(({ tab: tabId, slugs }) => {
        const source = tabs.find((item) => item.id === tabId)!;
        return pick(source.items, slugs).map((service) => ({ service, tab: source }));
      });

  return (
    <section id="vitrine-servicos" className="store-section bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="store-section-heading">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-3">Soluções para cada momento da sua loja.</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted lg:block">
            Escolha a plataforma, veja o escopo de cada serviço e peça uma proposta para o seu cenário.
          </p>
        </div>

        <div className="mb-10">
          <FilterTabs
            tabs={[{ id: "destaques", label: "Destaques" }, ...tabs.map(({ id, label }) => ({ id, label }))]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ service, tab: source }) => (
            <ProductCard
              key={`${source.id}-${service.slug}`}
              service={service}
              category={source.category}
              badge={source.badge}
              href={`${source.basePath}/${service.slug}`}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold">
          {(tab ? [tab] : tabs).map((item) => (
            <Link key={item.id} href={item.allHref} title={item.allLabel} className="inline-flex items-center gap-1.5 text-brand">
              {item.allLabel} <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
