"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionFaqProps = {
  faqs: FaqItem[];
};

export function AccordionFaq({ faqs }: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-soft-beige">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="accordion-item">
            <button
              onClick={() => toggleItem(index)}
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
            >
              <span className="text-left">{faq.question}</span>
              <Plus
                size={20}
                className="accordion-icon text-gold"
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-content-${index}`}
              className={`accordion-content ${isOpen ? "open" : "closed"}`}
              role="region"
            >
              <div className="pr-8 text-sm leading-relaxed text-warm-gray">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
