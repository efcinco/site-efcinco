import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { iugisServices } from "@/content/iugis-services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Automações Iugis para E-commerce",
  description: "Automatize status de pedido e recuperação de carrinho pelo WhatsApp com a Iugis.",
  path: "/automacoes-iugis",
});

export default function IugisPage() {
  return (
    <>
      <section className="store-section overflow-hidden bg-luxury-black text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_.85fr]">
          <div>
            <Image src="/brand/iugis-logo.png" alt="Iugis" width={160} height={49} className="h-auto w-36" priority />
            <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[.08em] text-gold">Automações para e-commerce</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[.92] tracking-[-.02em] sm:text-7xl">Venda e atenda no WhatsApp sem deixar oportunidades escaparem.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">A Iugis conecta sua operação às conversas que mais impactam receita e experiência: carrinho abandonado e pós-compra.</p>
          </div>
          <div className="relative mx-auto min-h-[28rem] w-full max-w-xl overflow-hidden">
            <Image src="/images/iugis-supervisor-ias.webp" alt="Supervisor de IAs da Iugis conectando dados, atendimento e automações de e-commerce" fill priority className="object-contain" sizes="(max-width: 1024px) 90vw, 46vw" />
          </div>
        </div>
      </section>
      <section className="store-section bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="grid gap-12">
            {iugisServices.map((service, index) => (
              <article key={service.slug} className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-2">
                <div className={`relative min-h-80 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={service.image} alt={service.title} fill className={service.slug === "integracoes-ecommerce" ? "object-contain" : "object-cover"} sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">Automação Iugis</p>
                  <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-.02em] text-luxury-black">{service.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-warm-gray">{service.description}</p>
                  <ul className="mt-7 grid gap-3 text-sm text-warm-gray">
                    {service.deliverables.slice(0, 3).map((item) => <li key={item} className="flex gap-2"><Check size={17} className="shrink-0 text-[#006db1]" />{item}</li>)}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/automacoes-iugis/${service.slug}`} title={`Ver automação: ${service.shortTitle}`} className="inline-flex items-center rounded-full bg-[#006db1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005a93]">Ver automação <ArrowRight size={16} className="ml-1.5" /></Link>
                    <Link href="/contato" title="Solicitar proposta" className="inline-flex items-center rounded-full border border-luxury-black px-5 py-3 text-sm font-bold text-luxury-black transition hover:bg-soft-beige">Solicitar proposta</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
