import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { EyebrowV2, SectionV2 } from "@/components/v2/Section";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Automações e plataformas",
  description:
    "Automações para e-commerce VTEX: chatbot, recuperação de carrinho e rastreio. Também atuamos com Uappi.",
  path: "/v2/automacoes",
});

const crumbs = [
  { name: "Início", path: "/v2" },
  { name: "Automações", path: "/v2/automacoes" },
];

const modules = [
  {
    href: "/iugis/chatbot",
    title: "Chatbot IA",
    text: "Agentes de IA, supervisor e WhatsApp Flows para atendimento e marketing.",
  },
  {
    href: "/iugis/automacoes",
    title: "Automações Commerce",
    text: "Recuperação de carrinho, rastreio e catálogo conectados à VTEX.",
  },
  {
    href: "/iugis/planos",
    title: "Planos",
    text: "Chatbot, Automações e Sob Medida — escolha o nível certo.",
  },
];

export default function V2AutomacoesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHeroV2
        eyebrow="Automações"
        title="Automações Iugis para e-commerce"
        description="Chatbot IA, recuperação de carrinho, rastreio e WhatsApp — integrados a VTEX e Uappi."
        image="/images/v2/chat.jpg"
        imageAlt="Canais de mensagem e chatbot mobile"
        crumbs={crumbs}
      />
      <SectionV2>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {modules.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.04}>
              <li>
                <Link href={item.href} className="group flex items-start gap-4 py-7">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold group-hover:text-brand">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate">{item.text}</p>
                  </div>
                  <Icon icon={ArrowUpRight} className="text-ink/30 group-hover:text-brand" size={18} />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </SectionV2>
      <SectionV2 className="bg-mist/40">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <EyebrowV2>VTEX e Uappi</EyebrowV2>
          <h2 className="mt-3 font-display text-3xl tracking-tight">
            Integrações com VTEX e Uappi
          </h2>
          <p className="mt-4 leading-relaxed text-slate">
            As automações Iugis funcionam tanto com VTEX quanto com Uappi.
            Independente da plataforma, você tem acesso a chatbot IA, recuperação
            de carrinho, rastreio e todas as integrações WhatsApp.
          </p>
          <Link
            href="/v2/contato"
            className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            Falar sobre automações
          </Link>
        </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/v2/mobile.jpg"
              alt="Experiência mobile de loja virtual"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </SectionV2>
    </>
  );
}
