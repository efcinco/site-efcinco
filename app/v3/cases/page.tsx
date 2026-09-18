import Link from "next/link";
import { PortfolioCases } from "@/components/v3/PortfolioCases";
import { cases } from "@/content/cases";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cases",
  description: "Resultados de migração VTEX, evolução de e-commerce e automações Iugis em formato de vitrine.",
  path: "/cases",
});

export default function CasesV3Page() {
  return (
    <>
      <section className="bg-luxury-black px-5 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold">Coleção de resultados</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[.95] tracking-[-.02em] sm:text-7xl">Cases que comprovam cada solução da vitrine.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">Projetos de VTEX IO, performance e automações que organizaram a operação para crescer.</p>
          <Link href="/#vitrine-servicos" title="Voltar para soluções" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-luxury-black transition hover:bg-cream">Voltar para soluções</Link>
        </div>
      </section>
      <PortfolioCases cases={cases} />
    </>
  );
}
