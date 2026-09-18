import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioCases } from "@/components/v3/PortfolioCases";
import { cases } from "@/content/cases";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cases VTEX e Iugis",
  description:
    "Cases da eFcinco em migração VTEX IO, evolução contínua e automações Iugis para e-commerce.",
  path: "/cases",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Cases", path: "/cases" },
];

export default function CasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="bg-ink px-5 py-14 text-white sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Cases</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-.03em] sm:text-6xl">Resultados de lojas que evoluem com a eFcinco.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">Implantações, migrações para VTEX IO, evolução contínua e automações Iugis em operações de moda, varejo, tecnologia e B2B.</p>
          </div>
          <Link href="/contato" title="Solicitar diagnóstico" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-hover">
            Solicitar diagnóstico <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <PortfolioCases cases={cases} />
    </>
  );
}
