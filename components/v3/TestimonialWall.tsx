import { testimonials } from "@/content/testimonials";

export function TestimonialWall() {
  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div>
          <p className="font-mono text-[.65rem] font-semibold uppercase tracking-[.08em] text-warm-gray/70">
            Depoimentos
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-luxury-black sm:text-3xl">
            Seriedade que se prova na operação
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-xl bg-[var(--gold)] px-5 py-5 sm:px-6 sm:py-6"
            >
              <p className="text-sm text-warm-gray">
                <span className="font-medium text-luxury-black/80">{item.author}</span>
                <span className="mx-1.5 text-warm-gray/50">·</span>
                <span>{item.company}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                “{item.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
