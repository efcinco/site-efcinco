import Image from "next/image";
import type { ServicePage } from "@/content/services";

export function ServiceBody({ service }: { service: ServicePage }) {
  const isSeo = service.slug.includes("seo");
  const story = service.story ?? [];

  return (
    <>
      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">
            Termo de posicionamento
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-.05em] text-luxury-black sm:text-5xl">
            {service.keyword}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-warm-gray">{service.description}</p>
          {isSeo ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="border border-soft-beige bg-cream p-6">
                <p className="font-mono text-[.65rem] font-bold uppercase tracking-[.14em] text-gold-hover">SEO</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-luxury-black">Search Engine Optimization</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-warm-gray">
                  Indexação, canonicals, metadados, arquitetura de categorias e Core Web Vitals para a loja ranquear no Google e permanecer rastreável após campanhas e migrações.
                </p>
              </article>
              <article className="border border-soft-beige bg-cream p-6">
                <p className="font-mono text-[.65rem] font-bold uppercase tracking-[.14em] text-gold-hover">GEO</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-luxury-black">Generative Engine Optimization</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-warm-gray">
                  Respostas claras, FAQs, schema.org e páginas de autoridade para a marca ser citada em ChatGPT, Perplexity, Gemini e AI Overviews — não só no resultado clássico.
                </p>
              </article>
            </div>
          ) : null}
        </div>
      </section>

      {story.map((block, index) => (
        <section key={block.heading} className={index % 2 === 0 ? "store-section bg-cream" : "store-section bg-white"}>
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-10 lg:grid-cols-2">
            <div className={`relative aspect-[16/10] overflow-hidden bg-soft-beige ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={block.image} alt={block.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Na prática</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-[-.04em] text-luxury-black">{block.heading}</h3>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-warm-gray">{block.text}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="store-section bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">O problema</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.04em] text-luxury-black">O que trava o resultado.</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-warm-gray">{service.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">A solução</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.04em] text-luxury-black">Como a eFcinco resolve.</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-warm-gray">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Processo</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-.05em] text-luxury-black">Do diagnóstico à evolução.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-t-2 border-[#006db1] pt-5">
                <p className="font-mono text-xs font-bold text-[#006db1]">0{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-luxury-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="store-section bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Resultados esperados</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.04em] text-luxury-black">O que a operação passa a ter.</h2>
            <ul className="mt-6 grid gap-3">
              {service.results.map((item) => (
                <li key={item} className="border-t border-soft-beige pt-3 text-[1.05rem] text-warm-gray">{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-luxury-black">Para quem é</h3>
              <ul className="mt-4 space-y-2 text-warm-gray">
                {service.forWho.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-luxury-black">Não é para</h3>
              <ul className="mt-4 space-y-2 text-warm-gray">
                {service.notFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
