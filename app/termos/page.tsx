import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Termos de Uso — eFcinco",
  description:
    "Termos de uso dos serviços da eFcinco: implantação VTEX IO, migração VTEX, SEO técnico, GEO e automações.",
  path: "/termos",
  noIndex: true,
});

export default function TermosPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-4xl font-bold text-ink">Termos de Uso</h1>
      <p className="mt-4 text-sm text-muted">Última atualização: Agosto de 2026</p>

      <div className="prose prose-muted mt-12 max-w-none">
        <h2 className="text-2xl font-semibold text-ink">1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e utilizar os serviços da eFcinco, você concorda com estes Termos de Uso e com nossa Política de Privacidade.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-ink">2. Serviços Oferecidos</h2>
        <p>
          A eFcinco oferece serviços especializados para e-commerce, incluindo:
        </p>
        <ul className="ml-6 mt-3 list-disc space-y-2">
          <li>Implantação VTEX IO e Store Framework</li>
          <li>Migração VTEX Legacy para VTEX IO</li>
          <li>SEO e GEO para plataforma VTEX</li>
          <li>UX de conversão e otimização de checkout</li>
          <li>Automações via Iugis e integrações customizadas</li>
          <li>Consultoria e desenvolvimento para Uappi quando aplicável</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-ink">3. Uso dos Serviços</h2>
        <p>
          Os serviços da eFcinco são fornecidos mediante contrato específico, que define escopo, prazo, investimento e entregáveis.
          O cliente concorda em fornecer as informações e acessos necessários para a execução dos serviços contratados.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-ink">4. Propriedade Intelectual</h2>
        <p>
          Todo código, documentação e material produzido pela eFcinco permanece de propriedade da eFcinco, salvo disposição contrária em contrato específico.
          O cliente recebe licença de uso do material entregue conforme definido contratualmente.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-ink">5. Limitação de Responsabilidade</h2>
        <p>
          A eFcinco não se responsabiliza por:
        </p>
        <ul className="ml-6 mt-3 list-disc space-y-2">
          <li>Indisponibilidade de serviços de terceiros (VTEX, Uappi, Iugis, etc.)</li>
          <li>Perdas de dados causadas por fatores externos ao controle da eFcinco</li>
          <li>Resultados comerciais decorrentes das implementações realizadas</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-ink">6. Alterações nos Termos</h2>
        <p>
          A eFcinco reserva-se o direito de modificar estes Termos de Uso a qualquer momento.
          As alterações entrarão em vigor imediatamente após publicação nesta página.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-ink">7. Contato</h2>
        <p>
          Para dúvidas sobre estes Termos de Uso, entre em contato através de{" "}
          <a href="mailto:contato@efcinco.com.br" className="text-brand hover:underline">
            contato@efcinco.com.br
          </a>.
        </p>
      </div>
    </section>
  );
}
