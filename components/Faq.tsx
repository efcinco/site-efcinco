import { ChevronDown } from "lucide-react";
import { Icon } from "./ui/Icon";

type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({
  items,
  title = "Perguntas frequentes",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2 className="font-display text-3xl tracking-tight text-navy sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-2 text-lg font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <Icon
                    icon={ChevronDown}
                    className="mt-1 shrink-0 text-brand transition duration-300 group-open:rotate-180"
                    size={20}
                  />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
