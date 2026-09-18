import Image from "next/image";
import type { ServicePage } from "@/content/services";

export function ServiceBody({ service }: { service: ServicePage }) {
  const isSeo = service.slug.includes("seo");
  const story = service.story ?? [];

  return (
    <>
      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <p className="eyebrow">
            Termo de posicionamento
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-.02em] text-ink sm:text-5xl">
            {service.keyword}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{service.description}</p>
          {isSeo ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="border border-mist bg-paper p-6">
                <p className="eyebrow text-[.65rem]">SEO</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">Search Engine Optimization</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
                  Indexação, canonicals, metadados, arquitetura de categorias e Core Web Vitals para a loja ranquear no Google e permanecer rastreável após campanhas e migrações.
                </p>
              </article>
              <article className="border border-mist bg-paper p-6">
                <p className="eyebrow text-[.65rem]">GEO</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">Generative Engine Optimization</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
                  Respostas claras, FAQs, schema.org e páginas de autoridade para a marca ser citada em ChatGPT, Perplexity, Gemini e AI Overviews — não só no resultado clássico.
                </p>
              </article>
            </div>
          ) : null}
        </div>
      </section>

      {story.map((block, index) => (
        <section key={block.heading} className={index % 2 === 0 ? "store-section bg-paper" : "store-section bg-white"}>
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-10 lg:grid-cols-2">
            <div className={`relative aspect-[16/10] overflow-hidden bg-mist ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={block.image} alt={block.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="eyebrow">Na prática</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-[-.02em] text-ink">{block.heading}</h3>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{block.text}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="store-section bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">O problema</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.02em] text-ink">O que trava o resultado.</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{service.problem}</p>
          </div>
          <div>
            <p className="eyebrow">A solução</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.02em] text-ink">Como a eFcinco resolve.</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <p className="eyebrow">Processo</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-.02em] text-ink">Do diagnóstico à evolução.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-t-2 border-brand pt-5">
                <p className="font-mono text-xs font-bold text-accent">0{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="store-section bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow">Resultados esperados</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.02em] text-ink">O que a operação passa a ter.</h2>
            <ul className="mt-6 grid gap-3">
              {service.results.map((item) => (
                <li key={item} className="border-t border-mist pt-3 text-[1.05rem] text-muted">{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Para quem é</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {service.forWho.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Não é para</h3>
              <ul className="mt-4 space-y-2 text-muted">
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
