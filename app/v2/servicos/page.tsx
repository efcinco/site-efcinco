import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { services } from "@/content/services";
import { getIcon } from "@/lib/icons";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Serviços — VTEX, Uappi e Automações",
  description:
    "Implantação VTEX e Uappi, migração, SEO técnico, UX de conversão e automações via Iugis. Serviços completos para e-commerce.",
  path: "/v2/servicos",
  canonicalPath: "/servicos",
});

const crumbs = [
  { name: "Início", path: "/v2" },
  { name: "Serviços", path: "/v2/servicos" },
];

export default function V2ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHeroV2
        eyebrow="Serviços"
        title="Serviços para e-commerce"
        description="Implantação VTEX e Uappi, migração, SEO técnico, UX de conversão e automações via Iugis."
        image="/images/v2/code.jpg"
        imageAlt="Desenvolvimento front-end para e-commerce"
        crumbs={crumbs}
      />
      <SectionV2>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.03}>
              <li>
                <Link
                  href={`/v2/servicos/${service.slug}`}
                  className="group flex gap-4 py-7"
                >
                  <Icon icon={getIcon(service.icon)} className="mt-1 text-brand" />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-ink group-hover:text-brand">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {service.description}
                    </p>
                  </div>
                  <Icon
                    icon={ArrowUpRight}
                    className="mt-1 text-ink/25 group-hover:text-brand"
                    size={18}
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </SectionV2>
    </>
  );
}
