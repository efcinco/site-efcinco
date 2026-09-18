import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cases } from "@/content/cases";
import { siteConfig } from "@/lib/seo/site";

export function HeroV3() {
  const years = new Date().getFullYear() - siteConfig.foundingYear;
  const stats = [
    { value: `${years}+ anos`, label: "em e-commerce" },
    { value: "50+ lojas", label: "atendidas" },
    { value: `${cases.length} cases`, label: "publicados" },
  ];

  return (
    <section className="store-hero">
      <Image
        src="/images/collab-v2.jpg"
        alt="Especialistas revisando a operação de uma loja virtual no notebook"
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="store-hero-image"
        decoding="async"
      />
      <div className="store-hero-overlay" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-[1440px] items-end px-5 pb-24 pt-14 sm:px-10 sm:py-20">
        <div className="max-w-2xl text-white">
          <p className="eyebrow">Agência VTEX · Uappi · Wake</p>
          <h1 className="mt-5 font-display text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-[-.03em] sm:text-6xl lg:text-7xl">
            Sua loja VTEX mais rápida, estável e pronta para vender.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Implantação, migração, evolução contínua e automações Iugis para operações que precisam crescer com segurança.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contato" title="Solicitar diagnóstico" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-hover">
              Solicitar diagnóstico <ArrowRight size={17} />
            </Link>
            <Link href="/#vitrine-servicos" title="Ver serviços" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              Ver serviços
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="whitespace-nowrap font-display text-lg font-bold sm:text-2xl">{stat.value}</dd>
                <dd className="mt-0.5 whitespace-nowrap text-xs text-white/65 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
