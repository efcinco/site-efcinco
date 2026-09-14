import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/content/services";
import { getIcon } from "@/lib/icons";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Serviços VTEX",
  description:
    "Serviços eFcinco para lojistas VTEX: implantação, migração, manutenção, SEO técnico, UX, consultoria e integrações.",
  path: "/servicos",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
];

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Serviços"
        title="Serviços VTEX para lojistas"
        description="Implantação, migração, manutenção, SEO, UX, consultoria e integrações com profundidade técnica — e conexão com Iugis quando faz sentido."
        image="/images/code-v2.jpg"
        imageAlt="Desenvolvimento front-end e código para e-commerce VTEX"
        breadcrumbs={crumbs}
      />
      <section className="atmosphere py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group flex h-full overflow-hidden rounded-xl bg-white ring-1 ring-navy/8 transition hover:-translate-y-1 hover:ring-brand/40"
                >
                  <div className="relative hidden w-36 shrink-0 sm:block">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="image-zoom object-cover"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <Icon
                      icon={getIcon(service.icon)}
                      className="text-brand"
                      size={22}
                    />
                    <h2 className="mt-3 text-xl font-semibold text-navy transition group-hover:text-brand">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Ver serviço
                      <Icon icon={ArrowRight} size={16} className="text-brand" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
