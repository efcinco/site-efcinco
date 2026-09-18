import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { ProposalCheckout } from "@/components/v3/ProposalCheckout";
import { JsonLd, breadcrumbJsonLd, contactPageJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com a eFcinco para diagnóstico VTEX, implantação, migração, manutenção ou ativação da plataforma Iugis.",
  path: "/contato",
});

export default function ProposalPage() {
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Proposta", path: "/contato" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(crumbs), contactPageJsonLd()]} />
      <div className="border-b border-mist bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-5 py-4 text-xs text-muted sm:px-10">
          <Link href="/" title="Início" className="transition hover:text-accent hover:underline">Início</Link><ChevronRight size={13} /><span className="text-ink">Sua proposta</span>
        </div>
      </div>
      <section className="store-section bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <ProposalCheckout />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <span>Prefere falar agora?</span>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" title="Conversar no WhatsApp" className="inline-flex items-center gap-2 font-bold text-ink underline underline-offset-4 transition hover:text-accent"><MessageCircle size={16} className="text-accent" /> Conversar no WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
