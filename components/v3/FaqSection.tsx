"use client";

import { AccordionFaq } from "./AccordionFaq";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: FaqItem[];
  title?: string;
  description?: string;
};

export function FaqSection({
  faqs,
  title = "Perguntas frequentes",
  description,
}: FaqSectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted">{description}</p>
          )}
        </div>

        <div className="mt-12">
          <AccordionFaq faqs={faqs} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted">
            Não encontrou o que procurava?{" "}
            <a
              href="/contato"
              title="Fale conosco"
              className="font-semibold text-accent transition hover:text-brand-hover hover:underline"
            >
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
