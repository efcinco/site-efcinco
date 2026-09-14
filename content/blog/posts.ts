export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  tags: string[];
  faq?: { question: string; answer: string }[];
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "checklist-migracao-vtex-legacy-para-io",
    title: "Migração VTEX Legacy para IO: checklist completo",
    description:
      "Checklist prático para migrar da VTEX Legacy (CMS) para VTEX IO sem perder SEO, estabilidade de checkout e operação no cutover.",
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
    author: "Equipe eFcinco",
    tags: ["VTEX IO", "Migração", "SEO"],
    howTo: {
      name: "Como migrar da VTEX Legacy para VTEX IO",
      description:
        "Passo a passo para planejar e executar uma migração segura para VTEX IO.",
      steps: [
        {
          name: "Inventariar URLs e templates",
          text: "Liste páginas indexadas, LPs e jornadas críticas antes de qualquer cutover.",
        },
        {
          name: "Definir paridade funcional",
          text: "Mapeie checkout, frete, promoções e integrações que não podem falhar.",
        },
        {
          name: "Preparar redirects 301",
          text: "Garanta continuidade de SEO com redirecionamentos validados.",
        },
        {
          name: "Homologar e executar cutover",
          text: "Teste em workspace, defina janela e plano de rollback.",
        },
      ],
    },
    faq: [
      {
        question: "Migração Legacy para IO apaga o SEO?",
        answer:
          "Não necessariamente. Com inventário, redirects e paridade de conteúdo, a maior parte do desempenho orgânico pode ser preservada.",
      },
    ],
    content: [
      "Migrar da VTEX Legacy (CMS) para VTEX IO é uma decisão de arquitetura e de negócio. O objetivo não é só “trocar o front”: é ganhar velocidade de evolução, performance e governança sem sacrificar receita no caminho.",
      "A eFcinco trata migração como projeto de engenharia com critérios de aceite claros. Abaixo está o checklist que usamos com lojistas para reduzir risco.",
      "## 1. Inventário antes de escrever código",
      "Exporte URLs indexadas, mapeie templates (home, categoria, produto, busca, institutional) e liste LPs que ainda geram tráfego. Sem inventário, redirects viram achismo.",
      "## 2. Paridade do que gera dinheiro",
      "Checkout, meios de pagamento, frete, cupons, regras B2B e integrações de estoque/pedido são o núcleo. Defina o que é obrigatório no dia D e o que pode ir em fases.",
      "## 3. SEO como trilha paralela",
      "Canonicals, titles, headings, dados estruturados e redirects 301 precisam de dono no projeto. Performance (LCP/CLS/INP) também entra no critério de go-live.",
      "## 4. Cutover com rollback",
      "Workspace de homologação, checklist de smoke test e janela de virada. Se algo crítico falhar, o time sabe voltar sem improvisar.",
      "Se você está avaliando migração, fale com a eFcinco para um diagnóstico objetivo do seu cenário.",
    ],
  },
  {
    slug: "seo-tecnico-store-framework-faststore",
    title: "SEO e GEO para VTEX e Uappi",
    description:
      "Guia de SEO e GEO (Generative Engine Optimization) para lojas VTEX e Uappi: indexação, metadados, dados estruturados, Core Web Vitals e conteúdo citável por IAs.",
    datePublished: "2026-03-18",
    dateModified: "2026-09-04",
    author: "Equipe eFcinco",
    tags: ["SEO", "GEO", "VTEX", "Uappi", "Performance"],
    content: [
      "SEO técnico em VTEX e Uappi não se resume a preencher title e description no painel. A qualidade das páginas entregues, a velocidade de carregamento e a política para filtros determinam se o Google consegue rastrear, entender e priorizar sua loja.",
      "## Metadados e páginas de categoria",
      "Titles, descriptions e headings precisam refletir a intenção de cada página: categoria, marca, produto ou conteúdo. Evite templates genéricos repetidos em milhares de SKUs. Um H1 claro e conteúdo útil ajudam compradores, buscadores e sistemas generativos.",
      "## Filtros, canonicals e indexação",
      "VTEX e Uappi podem gerar muitas combinações de filtros. Sem uma política de indexação, surgem URLs finas ou duplicadas. Defina quais páginas merecem indexar, quais recebem canonical e quais devem ficar fora do índice.",
      "## Core Web Vitals",
      "LCP alto em vitrine mobile é um dos vilões mais comuns nas duas plataformas. Imagens responsivas, prioridade para a mídia acima da dobra, menos JavaScript bloqueante e componentes leves fazem diferença mensurável.",
      "## Dados estruturados",
      "Product, BreadcrumbList, Organization e FAQPage, quando aplicáveis, aumentam a elegibilidade a rich results e ajudam mecanismos de IA a interpretar entidades com menos ambiguidade.",
      "## GEO: aparecer também nas IAs",
      "GEO (Generative Engine Optimization) complementa o SEO clássico. Além de ranquear no Google, a loja precisa ser compreendida e citada por ChatGPT, Perplexity, Gemini e AI Overviews. Isso exige resposta direta no início da página, FAQs visíveis, entidades claras e conteúdo de autoridade — não só metadados.",
      "A eFcinco combina auditoria, priorização e implementação para VTEX e Uappi — SEO e GEO que viram código e rotina operacional, não só slides.",
    ],
  },
  {
    slug: "recuperar-carrinho-abandonado-vtex-whatsapp",
    title: "Como recuperar carrinho abandonado na VTEX com WhatsApp",
    description:
      "Estratégia prática para recuperar carrinhos abandonados na VTEX usando WhatsApp, timing de mensagem e a plataforma Iugis.",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
    author: "Equipe eFcinco",
    tags: ["Iugis", "WhatsApp", "Conversão"],
    content: [
      "Carrinho abandonado não é só métrica de funil: é receita parada. Em operações VTEX, a recuperação via e-mail ajuda, mas o WhatsApp costuma ter taxa de leitura e resposta superiores quando a mensagem é útil e no tempo certo.",
      "## O que precisa existir na base",
      "Identificação do shopper, evento de abandono confiável, regras de opt-in e integração estável com o pedido/catálogo. Sem isso, automação vira spam.",
      "## Timing e oferta",
      "Primeira mensagem rápida com lembrete do produto; segunda com prova social ou frete; terceira só se houver incentivo real. Menos sequência genérica, mais contexto.",
      "## Papel da Iugis",
      "A Iugis Automações conecta o e-commerce (incluindo VTEX), lê catálogo e dispara fluxos de recuperação e rastreio. O time comercial deixa de depender de planilhas e follow-up manual.",
      "Se sua loja VTEX já tem tráfego e abandono alto, recuperação no WhatsApp costuma ser um dos quick wins de maior ROI.",
    ],
  },
  {
    slug: "core-web-vitals-lojas-vtex",
    title: "Core Web Vitals em lojas VTEX: o que priorizar",
    description:
      "Guia objetivo de Core Web Vitals para e-commerces VTEX: LCP, CLS e INP com ações práticas de frontend e conteúdo.",
    datePublished: "2026-04-15",
    dateModified: "2026-04-15",
    author: "Equipe eFcinco",
    tags: ["Performance", "VTEX", "CWV"],
    content: [
      "Core Web Vitals impactam experiência e, indiretamente, a competitividade orgânica. Em lojas VTEX, os gargalos mais comuns estão em imagens de vitrine, scripts de terceiros e componentes pesados acima da dobra.",
      "## LCP",
      "Priorize a imagem hero/LCP, use formatos modernos, dimensione corretamente e evite carrosséis pesados no primeiro viewport sem necessidade.",
      "## CLS",
      "Reserve espaço para banners, fontes e slots de mídia. CLS em PDP e home costuma vir de elementos que “empurram” o layout ao carregar.",
      "## INP",
      "Reduza JavaScript desnecessário em interação de filtro, mini-cart e busca. Responsividade percebida importa tanto quanto o score do Lighthouse.",
      "A eFcinco inclui performance no padrão de implantação e manutenção — não como fase cosmética depois do go-live.",
    ],
  },
  {
    slug: "manutencao-pontual-vs-squad-evolutivo-vtex",
    title: "Manutenção pontual vs squad evolutivo na VTEX",
    description:
      "Quando contratar demanda pontual e quando faz sentido um squad evolutivo para lojas VTEX em crescimento.",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    author: "Equipe eFcinco",
    tags: ["Manutenção", "VTEX", "Operação"],
    content: [
      "Nem toda loja precisa de um time full-time. Mas operações com campanhas semanais, backlog crescente e incidentes recorrentes sofrem quando tratam evolução só como “chamados avulsos”.",
      "## Manutenção pontual",
      "Ideal para correções, LPs isoladas ou ajustes com escopo fechado. Custo previsível por demanda, porém menos ritmo de aprendizado contínuo.",
      "## Squad evolutivo",
      "Ideal quando há roadmap, hipóteses de CRO e necessidade de velocidade. O valor está na priorização contínua e na redução de contexto perdido entre fornecedores.",
      "## Como escolher",
      "Se o marketing está bloqueado todo mês, se Black Friday vira crise ou se a dívida técnica cresce, squad tende a pagar mais do que o modelo avulso.",
      "A eFcinco opera nos dois modelos e ajuda a decidir com base no estágio da sua operação VTEX.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
