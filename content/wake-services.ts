import type { ServicePage } from "./services";

export const wakeServices: ServicePage[] = [
  {
    slug: "implantacao-wake",
    title: "Implantação Wake",
    shortTitle: "Implantação Wake",
    keyword: "implantação Wake",
    icon: "rocket",
    image: "/images/code-v2.jpg",
    description:
      "Implantamos sua operação na Wake: storefront, catálogo, checkout e publicação de conteúdo com governança do discovery ao go-live.",
    answer:
      "A implantação Wake da eFcinco começa pela arquitetura da operação — canais, sortimento, preço e o que o storefront precisa renderizar com performance. Entregamos loja na Wake pronta para vender e medir, sem copiar o playbook de VTEX IO nem o da Uappi.",
    problem:
      "Projeto Wake sem contrato de storefront vira tema genérico, catálogo inconsistente e checkout que não aguenta campanha. O time de marketing herda uma loja que não consegue evoluir.",
    solution:
      "Desenhamos storefront, modelagem de catálogo e checkout na Wake com critério de performance. SEO técnico e GEO entram no go-live: URL, metadado, schema.org e páginas com resposta direta para Google e IAs.",
    deliverables: [
      "Arquitetura da operação Wake (canais, catálogo, publicação)",
      "Storefront, navegação e templates de PDP",
      "Modelagem de produtos, categorias e preço",
      "Checkout, pagamento e opções de entrega",
      "Publicação de home, institucionais e landings",
      "GTM, pixels e eventos essenciais de conversão",
      "Go-live com checklist de pedido, estoque e qualidade",
    ],
    process: [
      {
        title: "Contrato da loja",
        description: "Definimos o que a Wake precisa cobrir no dia 1: sortimento, canais e integrações.",
      },
      {
        title: "Storefront",
        description: "Arquitetamos vitrine, PDP e o que será publicado sem deploy.",
      },
      {
        title: "Catálogo e pedido",
        description: "Configuramos cadastro, checkout e testes de compra real.",
      },
      {
        title: "Go-live",
        description: "Homologamos performance, medição e virada com acompanhamento.",
      },
    ],
    results: [
      "Operação Wake no ar com storefront estável",
      "Catálogo e checkout prontos para campanha",
      "Base técnica para SEO, GEO e evolução",
    ],
    forWho: [
      "Marcas que escolheram a Wake como plataforma de commerce",
      "Operações que precisam de storefront performático desde o lançamento",
      "Times que querem publicação de conteúdo com governança",
    ],
    notFor: [
      "Quem espera workspaces VTEX IO, Store Framework ou admin Uappi",
      "Projetos sem definição de catálogo, canais ou responsável de operação",
    ],
    faqs: [
      {
        question: "Quanto tempo leva uma implantação Wake?",
        answer:
          "Depende de storefront, volume de SKU e integrações. Um recorte essencial (vitrine, catálogo, checkout) pode ir ao ar em semanas; ERP, B2B ou múltiplos canais pedem roadmap em fases.",
      },
      {
        question: "Wake, VTEX e Uappi usam o mesmo projeto?",
        answer:
          "Não. Cada plataforma tem storefront, admin e checkout próprios. Na Wake não usamos jargão de IO, Legacy ou CMS Uappi — o desenho é da operação Wake.",
      },
      {
        question: "A implantação inclui SEO e GEO?",
        answer:
          "Sim. URLs, metadados, headings, performance, schema.org e conteúdo com resposta clara fazem parte do go-live para indexação e citação em IAs.",
      },
    ],
  },
  {
    slug: "migracao-wake",
    title: "Migração Wake",
    shortTitle: "Migração Wake",
    keyword: "migração Wake",
    icon: "refresh",
    image: "/images/devops-v2.jpg",
    description:
      "Migração para a Wake com inventário de URLs, paridade de jornada, redirects 301 e cutover que preserva SEO e GEO.",
    answer:
      "Migrar para a Wake, na eFcinco, é reconstruir a operação no storefront e no checkout Wake — não “importar o tema”. Mapeamos a origem, preservamos sinais de SEO e GEO e só viramos quando pedido e medição fecham.",
    problem:
      "Cutover sem paridade de PDP e sem 301 destrói ranking, feed e campanha. O shopper cai em 404 no primeiro anúncio pago.",
    solution:
      "Tratamos a entrada na Wake como engenharia + SEO e GEO + operação: inventário, paridade, schema.org, testes de pedido e janela de virada com rollback.",
    deliverables: [
      "Inventário de URLs e conteúdos da origem",
      "Redirects 301 para o storefront Wake",
      "Paridade de jornadas críticas (busca, PDP, checkout)",
      "Migração conferida de catálogo e mídia",
      "Preservação de metadados, estrutura SEO e GEO",
      "Testes de pedido, estoque, frete e pixel",
      "Cutover assistido e monitoramento pós-virada",
    ],
    process: [
      {
        title: "Inventário",
        description: "O que a origem ranqueia, vende e integra hoje.",
      },
      {
        title: "Paridade Wake",
        description: "Reconstruímos fluxos no storefront e no checkout Wake.",
      },
      {
        title: "SEO, GEO e redirects",
        description: "Mantemos indexação, autoridade e citabilidade depois da virada.",
      },
      {
        title: "Cutover",
        description: "Viramos com rollback e olho em pedido e orgânico.",
      },
    ],
    results: [
      "Tráfego orgânico contínuo no domínio na Wake",
      "Menos 404 e incidente de pedido no pós-go-live",
      "Operação rodando no stack Wake, não em paliativo da origem",
    ],
    forWho: [
      "Lojas saindo de VTEX, Uappi, Magento, Tray ou legado próprio",
      "Operações que já escolheram a Wake e precisam de virada controlada",
      "Times que não podem perder SEO, GEO nem estabilidade de checkout",
    ],
    notFor: [
      "Migração sem acesso aos dados e URLs da plataforma atual",
      "Quem aceita “subir e corrigir no ar” sem plano de cutover",
    ],
    faqs: [
      {
        question: "É possível migrar para a Wake sem perder SEO e GEO?",
        answer:
          "Sim, na maior parte dos casos técnicos: inventário, 301, paridade de conteúdo e schema.org. Não garantimos posição no Google; removemos as causas clássicas de queda.",
      },
      {
        question: "Vocês migram de VTEX ou Uappi para Wake?",
        answer:
          "Sim. Extraímos catálogo, jornadas e integrações da origem e reconstruímos na Wake, sem tentar carregar workspaces, apps IO ou CMS Uappi para um stack que não é esse.",
      },
    ],
  },
  {
    slug: "manutencao-wake",
    title: "Manutenção e Evolução Wake",
    shortTitle: "Manutenção & Evolução",
    keyword: "manutenção Wake",
    icon: "wrench",
    image: "/images/devops-v2.jpg",
    description:
      "Evolução contínua na Wake: campanha, performance de storefront, correção de checkout e backlog que não trava a operação.",
    answer:
      "Na Wake, a eFcinco entra como capacidade de storefront e operação: landing, correção de vitrine, melhoria de PDP e evolução de checkout. O ritmo é o da campanha — não um backlog genérico copiado de outra plataforma.",
    problem:
      "Storefront envelhece, campanha pede página que ninguém publica e cada bug de checkout espera sprint longo. A Wake vira legado no primeiro ano.",
    solution:
      "Sprints curtos no stack Wake: estabilidade de pedido primeiro, depois velocidade de campanha. SEO técnico e GEO entram quando a mudança mexe em URL, conteúdo ou dados estruturados.",
    deliverables: [
      "Correção de bugs de storefront e checkout Wake",
      "Landings e conteúdos de campanha",
      "Melhorias de PDP, busca e navegação",
      "Otimização de performance do storefront",
      "Evolução de regras comerciais e publicação",
      "Backlog priorizado em sprints",
    ],
    process: [
      {
        title: "Intake",
        description: "Classificamos o pedido por impacto em venda e risco de checkout.",
      },
      {
        title: "Priorização",
        description: "Separamos o que é storefront, o que é cadastro e o que é campanha.",
      },
      {
        title: "Entrega",
        description: "Implementamos na Wake com homologação de pedido e performance.",
      },
      {
        title: "Medição",
        description: "Olhamos conversão, CWV e incidentes para o próximo ciclo.",
      },
    ],
    results: [
      "Campanha saindo no storefront sem fila eterna",
      "Menos incidente de checkout em data comercial",
      "Wake evoluindo sem replataformar",
    ],
    forWho: [
      "Lojas já na Wake que precisam de evolução contínua",
      "Operações com calendário agressivo de campanha",
      "Times sem squad interno do storefront Wake",
    ],
    notFor: [
      "Quem só precisa de hospedagem, sem mudança de loja",
    ],
    faqs: [
      {
        question: "O modelo é pontual ou retainer na Wake?",
        answer:
          "Os dois. Demanda isolada ou sprints recorrentes, conforme o volume de campanha e a maturidade do storefront.",
      },
      {
        question: "SEO e GEO entram na manutenção Wake?",
        answer:
          "Sim, quando a prioridade do sprint inclui indexação, metadados, performance ou conteúdo citável. Não deixamos isso só para um projeto separado se a mudança já está no ar.",
      },
    ],
  },
  {
    slug: "seo-wake",
    title: "SEO e GEO para Wake",
    shortTitle: "SEO e GEO Wake",
    keyword: "SEO e GEO para Wake",
    icon: "search",
    image: "/images/analytics-v2.jpg",
    description:
      "SEO e GEO no storefront Wake: crawl, performance, schema.org e conteúdo citável por Google, ChatGPT, Perplexity e AI Overviews.",
    answer:
      "SEO e GEO na Wake, para a eFcinco, é o que o storefront entrega ao crawler e às IAs: HTML limpo, PDP rápida, dados estruturados e páginas que respondem a pergunta de verdade. Não é só preencher campo de metadado no admin.",
    problem:
      "Storefront Wake com LCP alto, categoria duplicada e PDP sem schema some do orgânico. As IAs também não encontram entidade clara da marca para citar.",
    solution:
      "Auditoria de crawl e Core Web Vitals do storefront Wake, correções priorizadas e GEO: resposta no topo, FAQ, entidades e JSON-LD de produto.",
    deliverables: [
      "Auditoria técnica de SEO e GEO no storefront Wake",
      "Indexação, canonicals e metadados",
      "Core Web Vitals (LCP, CLS, INP) da vitrine e da PDP",
      "Schema.org / JSON-LD aplicável ao catálogo Wake",
      "Arquitetura de categorias e conteúdos de autoridade",
      "Estratégia de GEO (Generative Engine Optimization)",
      "FAQs e blocos de resposta para mecanismos generativos",
    ],
    process: [
      {
        title: "Auditoria Wake",
        description: "Crawl, templates, conteúdo duplicado e prontidão para GEO.",
      },
      {
        title: "Quick wins",
        description: "Indexação, canonical e metadados de maior impacto.",
      },
      {
        title: "Storefront",
        description: "Performance, schema e estrutura das páginas de produto.",
      },
      {
        title: "GEO e evolução",
        description: "Conteúdo citável, FAQs e monitoramento contínuo.",
      },
    ],
    results: [
      "Storefront rastreável e mais rápido",
      "PDP elegível a rich results",
      "Maior chance de citação em respostas de IA",
    ],
    forWho: [
      "Operações Wake com orgânico estagnado",
      "Times de conteúdo sem base técnica no storefront",
      "Marcas que querem ranquear no Google e aparecer em IAs",
    ],
    notFor: [
      "Quem quer só off-page, sem mexer em template ou performance",
    ],
    faqs: [
      {
        question: "SEO e GEO na Wake muda por causa do storefront?",
        answer:
          "Sim na implementação. Princípios de crawl e conteúdo valem; o que muda é como o storefront Wake renderiza listagem, PDP e dados de produto.",
      },
      {
        question: "O que é GEO neste serviço Wake?",
        answer:
          "GEO (Generative Engine Optimization) é otimizar para ChatGPT, Perplexity, Gemini e AI Overviews — resposta clara, FAQ, schema.org e autoridade — além do SEO clássico de posição no Google.",
      },
    ],
  },
  {
    slug: "ux-conversao",
    title: "UX e Conversão para E-commerce Wake",
    shortTitle: "UX & Conversão",
    keyword: "UX e-commerce Wake",
    icon: "mouse",
    image: "/images/mobile-v2.jpg",
    description:
      "CRO no storefront Wake: busca, PDP, frete e checkout no mobile, com implementação no stack — não só protótipo.",
    answer:
      "Analisamos como o shopper decide na Wake: busca, ficha de produto e checkout no celular. Ajustamos hierarquia, prova e velocidade de interação no storefront, medindo conversão de verdade.",
    problem:
      "Storefront bonito e PDP que não responde dúvida de tamanho, frete ou prazo. O abandono acontece antes do pagamento.",
    solution:
      "Pesquisa, heurística e implementação no storefront Wake. Quando a mudança toca URL ou conteúdo, SEO e GEO seguem no mesmo pacote.",
    deliverables: [
      "Diagnóstico de jornada no storefront Wake",
      "Backlog de CRO priorizado",
      "Redesign pontual de home, listagem e PDP",
      "Melhorias mobile no checkout Wake",
      "Implementação com cuidado de performance",
      "Acompanhamento de funil e conversão",
    ],
    process: [
      {
        title: "Observar",
        description: "Sessão, analytics e atrito no mobile Wake.",
      },
      {
        title: "Hipótese",
        description: "O que muda conversão com o menor risco de storefront.",
      },
      {
        title: "Implementar",
        description: "Aplicamos na Wake e validamos pedido e CWV.",
      },
      {
        title: "Aprender",
        description: "Medimos e abrimos o próximo ciclo.",
      },
    ],
    results: [
      "Menos abandono em PDP e checkout",
      "Ficha de produto mais decidível",
      "Experiência coerente com o público da operação Wake",
    ],
    forWho: [
      "Lojas Wake com tráfego e conversão baixa",
      "Marcas redesenhando storefront com meta de receita",
      "Times de produto que querem teste, não feeling",
    ],
    notFor: [
      "Pedido estético sem critério de conversão",
    ],
    faqs: [
      {
        question: "UX, SEO e GEO andam juntos na Wake?",
        answer:
          "Sim. Storefront rápido e claro ajuda o shopper, o Google e as IAs. Não sacrificamos crawl por animação nem o contrário.",
      },
    ],
  },
  {
    slug: "consultoria-wake",
    title: "Consultoria Wake",
    shortTitle: "Consultoria Wake",
    keyword: "consultoria Wake",
    icon: "lightbulb",
    image: "/images/ux-v2.jpg",
    description:
      "Consultoria da operação Wake: catálogo, publicação, promoção, GTM e rotina do time para reduzir erro silencioso.",
    answer:
      "A consultoria eFcinco para Wake é sessão prática na operação: como cadastrar, publicar, promover e medir sem depender de um chamado a cada banner. O playbook é da Wake, não um manual VTEX reescrito.",
    problem:
      "Catálogo sem padrão, promoção que não reflete na vitrine e pixel incompleto. A loja “funciona” até a campanha mostrar o furo.",
    solution:
      "Priorizamos o gargalo da semana, configuramos junto com o time e deixamos um roteiro curto do que não pode quebrar.",
    deliverables: [
      "Padrão de catálogo e taxonomia na Wake",
      "Rotina de publicação de vitrine e campanha",
      "Promoções e políticas comerciais",
      "GTM, GA4 e pixels",
      "Checklist de qualidade antes de publicar",
      "Playbook objetivo para o time interno",
    ],
    process: [
      {
        title: "Contexto",
        description: "Como a operação Wake roda hoje, do cadastro ao anúncio.",
      },
      {
        title: "Prioridade",
        description: "O que gera erro, atraso ou dado errado nesta semana.",
      },
      {
        title: "Hands-on",
        description: "Configuramos junto com quem opera a loja.",
      },
      {
        title: "Autonomia",
        description: "Documentamos o mínimo para o time seguir.",
      },
    ],
    results: [
      "Menos erro de cadastro e promoção",
      "Medição mais confiável",
      "Time interno mais seguro na Wake",
    ],
    forWho: [
      "Times novos na Wake",
      "Operações que cresceram sem governança de catálogo",
      "Empresas que querem ajuste de rotina, não um projeto enorme",
    ],
    notFor: [
      "Demanda exclusiva de mídia, sem acesso à operação da loja",
    ],
    faqs: [
      {
        question: "Consultoria substitui implantação Wake?",
        answer:
          "Não. Consultoria acelera quem já opera. Implantação e storefront cobrem construção e customização da loja.",
      },
    ],
  },
  {
    slug: "integracoes-wake",
    title: "Integrações Wake",
    shortTitle: "Integrações & Apps",
    keyword: "integrações Wake",
    icon: "plug",
    image: "/images/iugis-beneficios-transparent.webp",
    description:
      "ERP, OMS, pagamento, logística e Iugis ligados à Wake com contrato de integração, log e falha visível.",
    answer:
      "Conectamos a Wake ao ERP, à expedição e ao WhatsApp via Iugis. Integração aqui é fluxo de pedido e estoque no stack Wake — não app VTEX IO nem conector genérico sem observabilidade.",
    problem:
      "Pedido que some entre a Wake e o ERP, estoque atrasado e conciliação no Excel. Em pico, vira ruptura.",
    solution:
      "Mapeamos o fluxo real, fechamos contrato de payload e implementamos com retentativa, log e teste de ponta a ponta.",
    deliverables: [
      "Integração de catálogo, estoque e pedido (ERP/OMS)",
      "APIs e webhooks da operação Wake",
      "Pagamento, antifraude e logística",
      "Iugis para WhatsApp (carrinho, rastreio, atendimento)",
      "Monitoramento e tratamento de falha",
      "Homologação com pedido completo",
    ],
    process: [
      {
        title: "Mapa",
        description: "Pedido, estoque, preço e atendimento como acontecem hoje.",
      },
      {
        title: "Contrato",
        description: "Payloads, SLA e aceite entre Wake e os sistemas vizinhos.",
      },
      {
        title: "Build",
        description: "Ambientes, testes e conciliação antes da data comercial.",
      },
      {
        title: "Operação",
        description: "Alerta de falha e evolução do conector.",
      },
    ],
    results: [
      "Menos retrabalho entre Wake e ERP",
      "Pedido confiável até a entrega",
      "Base para Black Friday sem planilha de emergência",
    ],
    forWho: [
      "Operações Wake com ERP/OMS no caminho crítico",
      "Lojas que querem Iugis no pedido real",
      "Times que precisam de estoque e preço em tempo útil",
    ],
    notFor: [
      "Integração sem acesso técnico aos sistemas de origem",
    ],
    faqs: [
      {
        question: "WhatsApp integra com a Wake?",
        answer:
          "Sim. Via Iugis ligamos catálogo, recuperação de carrinho, rastreio e atendimento ao pedido da Wake.",
      },
    ],
  },
  {
    slug: "google-analytics-gtm-performance-wake",
    title: "Google Analytics, GTM e Performance Wake",
    shortTitle: "GTM, Analytics & Performance",
    keyword: "GTM GA4 Search Console Merchant Center Wake",
    icon: "trending",
    image: "/images/analytics-v2.jpg",
    description:
      "GTM, GA4, Search Console, Merchant Center e Core Web Vitals no storefront Wake — o mesmo funil para mídia e produto.",
    answer:
      "Organizamos a mensuração da Wake: eventos de e-commerce no storefront, conversão no checkout, feed e sinais de LCP/CLS/INP. Mídia e tecnologia param de discutir números diferentes.",
    problem:
      "Evento de compra que não bate com o pedido Wake, Search Console abandonado e storefront lento que ninguém prioriza.",
    solution:
      "Auditoria de dataLayer no storefront Wake, plano de eventos e diagnóstico de performance com Search Console e Merchant Center no mesmo escopo.",
    deliverables: [
      "Plano de mensuração do funil Wake",
      "GTM e GA4 alinhados ao checkout Wake",
      "Eventos de produto, carrinho, checkout e compra",
      "Search Console, sitemap e indexação",
      "Diagnóstico de feed para Merchant Center",
      "PageSpeed e Core Web Vitals do storefront",
      "Documentação de eventos para mídia e produto",
    ],
    process: [
      {
        title: "Diagnóstico",
        description: "Tags, eventos, indexação e CWV do storefront Wake.",
      },
      {
        title: "Plano de dados",
        description: "O que cada evento precisa responder de negócio.",
      },
      {
        title: "Implementação",
        description: "Corrigimos tags, propriedades e gargalos de performance.",
      },
      {
        title: "Monitoramento",
        description: "Cobertura dos dados e prioridade contínua de CWV.",
      },
    ],
    results: [
      "Compra no GA4 alinhada ao pedido Wake",
      "Visibilidade de indexação e feed",
      "Roteiro de performance do storefront",
    ],
    forWho: [
      "Operações Wake com mensuração incompleta",
      "Times que precisam de Search Console e Merchant Center em ordem",
      "Lojas com storefront lento e sem dono da correção",
    ],
    notFor: [
      "Gestão de mídia sem acesso ao GTM e ao storefront",
    ],
    faqs: [
      {
        question: "Vocês configuram GTM e GA4 na Wake?",
        answer:
          "Sim. Auditamos o storefront, definimos os eventos do checkout Wake e implementamos ou corrigimos com o time.",
      },
      {
        question: "PageSpeed faz parte da análise Wake?",
        answer:
          "Sim. Diagnosticamos LCP, CLS e INP e priorizamos o que dá ganho real no storefront, não só nota no relatório.",
      },
    ],
  },
];

export function getWakeServiceBySlug(slug: string) {
  return wakeServices.find((service) => service.slug === slug);
}
