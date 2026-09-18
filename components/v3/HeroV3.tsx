import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export function HeroV3() {
  return (
    <section className="store-hero">
      <Image
        src="/images/code-v2.jpg"
        alt="Time técnico trabalhando na implantação de uma loja VTEX"
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="store-hero-image"
        decoding="async"
      />
      <div className="store-hero-overlay" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-[1440px] items-end px-5 py-14 sm:px-10 sm:py-20">
        <div className="max-w-2xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-luxury-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[.08em] text-gold backdrop-blur">
            <CheckCircle size={14} /> Soluções VTEX para vender mais
          </div>
          <h1 className="font-display text-balance text-5xl font-bold leading-[.95] tracking-[-.02em] sm:text-7xl">
            Sua operação VTEX, em vitrine de alta performance.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Implantação, evolução e automações Iugis organizadas como uma coleção de soluções para sua loja crescer com segurança.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#vitrine-servicos" title="Explorar soluções" className="inline-flex items-center gap-2 rounded-full bg-[#006db1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#005a93]">
              Explorar soluções <ArrowRight size={17} />
            </Link>
            <Link href="/servicos-vtex/implantacao-vtex-io" title="Ver mais procurado" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              Ver mais procurado
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/85">
            <span className="flex items-center gap-2"><Star size={15} className="fill-gold text-gold" /> 4,9 em projetos entregues</span>
            <span>+15 anos de operação</span>
            <span>50+ lojas atendidas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
