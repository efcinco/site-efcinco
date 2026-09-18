import { Quote } from "lucide-react";
import { cases } from "@/content/cases";
import { testimonials } from "@/content/testimonials";
import { CaseLogo } from "./CaseLogo";

const EXCERPT_LIMIT = 240;

// Primeiras frases do depoimento, até ~240 caracteres, para o card não virar um bloco de texto.
function excerpt(text: string) {
  if (text.length <= EXCERPT_LIMIT) return { short: text, truncated: false };
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let short = "";
  for (const sentence of sentences) {
    if (short && (short + sentence).length > EXCERPT_LIMIT) break;
    short += sentence;
  }
  return { short: short.trim(), truncated: short.trim().length < text.length };
}

export function TestimonialWall() {
  return (
    <section className="store-section bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="store-section-heading">
          <div>
            <p className="eyebrow">Depoimentos</p>
            <h2 className="mt-3">Quem trabalha com a gente, recomenda.</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => {
            const caseStudy = cases.find((c) => c.client.toLowerCase() === item.company.toLowerCase());
            const { short, truncated } = excerpt(item.quote);
            return (
              <figure key={item.id} className="flex flex-col rounded-2xl border border-mist bg-white p-6 sm:p-8">
                <Quote size={28} className="text-brand" aria-hidden="true" />
                <blockquote className="mt-4 flex-1">
                  <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl">“{short}”</p>
                  {truncated && (
                    <details className="group mt-3">
                      <summary className="cursor-pointer list-none text-sm font-bold text-brand hover:underline">
                        <span className="group-open:hidden">Ler depoimento completo</span>
                        <span className="hidden group-open:inline">Recolher</span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">“{item.quote}”</p>
                    </details>
                  )}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-mist pt-5">
                  <div>
                    <p className="font-bold text-ink">{item.author}</p>
                    <p className="text-sm text-muted">{item.company}</p>
                  </div>
                  {caseStudy && (
                    <div className="group relative h-10 w-28 shrink-0">
                      <CaseLogo src={caseStudy.image} alt={`Logo ${caseStudy.client}`} onDark={caseStudy.logoOnDark} sizes="112px" tight mono />
                    </div>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
