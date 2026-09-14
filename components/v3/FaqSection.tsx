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
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-gold">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-luxury-black">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-warm-gray">{description}</p>
          )}
        </div>

        <div className="mt-12">
          <AccordionFaq faqs={faqs} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-warm-gray">
            Não encontrou o que procurava?{" "}
            <a
              href="/contato"
              title="Fale conosco"
              className="font-semibold text-gold transition hover:text-[#005a93] hover:underline"
            >
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
