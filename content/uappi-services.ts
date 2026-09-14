import type { ServicePage } from "./services";

export const uappiServices: ServicePage[] = [
  {
    slug: "implantacao-uappi",
    title: "Implantação Uappi",
    shortTitle: "Implantação Uappi",
    keyword: "implantação Uappi",
    icon: "rocket",
    image: "/images/code-v2.jpg",
    description:
      "Subimos sua loja na Uappi com vitrine, catálogo, checkout e CMS prontos para o time vender e publicar sem fila de desenvolvimento.",
    answer:
      "A implantação na Uappi que a eFcinco entrega é feita para operação do dia a dia: sortimento cadastrado com regra, páginas que o marketing altera sozinho e checkout estável no mobile. Não replicamos um projeto VTEX com outro nome — desenhamos a loja no modelo da Uappi, do discovery ao go-live.",
    problem:
      "Muita loja na Uappi vai ao ar com cadastro solto, vitrine lenta e CMS que ninguém usa. O time volta a pedir desenvolvimento para cada banner, filtro ou landing.",
    solution:
      "Montamos a operação Uappi com taxonomia clara, templates de vitrine e PDP, checkout validado e CMS utilizável. SEO técnico e GEO entram no padrão de entrega: URLs, metadados, schema.org e páginas com resposta direta para Google e IAs.",
    deliverables: [
      "Conta Uappi, usuários e permissões do time",
      "Arquitetura de vitrine, PDP e listagens na Uappi",
      "Catálogo, categorias, atributos e regras de preço",
      "Checkout, meios de pagamento e opções de entrega",
      "CMS para home, institucionais e landings de campanha",
      "GTM, pixels e eventos básicos de conversão",
      "Go-live com checklist de cadastro, pedido e medição",
    ],
    process: [
      {
        title: "Operação",
        description: "Mapeamos sortimento, canais, prazos e quem vai operar o CMS.",
      },
      {
        title: "Vitrine Uappi",
        description: "Definimos templates, navegação e o que o marketing publica sozinho.",
      },
      {
        title: "Cadastro e checkout",
        description: "Configuramos catálogo, frete, pagamento e testes de pedido real.",
      },
      {
        title: "Go-live",
        description: "Homologamos, viramos a loja e acompanhamos as primeiras vendas.",
      },
    ],
    results: [
      "Loja Uappi no ar com operação documentada",
      "Marketing publicando campanha sem abrir chamado técnico",
      "Base pronta para medição, SEO e GEO",
    ],
    forWho: [
      "Marcas que escolhem a Uappi para lançar o e-commerce",
      "Operações que precisam de go-live rápido com CMS utilizável",
      "Times comerciais que não querem depender de sprint para cada página",
    ],
    notFor: [
      "Quem espera Store Framework, workspaces VTEX IO ou apps IO",
      "Projetos sem sortimento mínimo nem responsável de catálogo",
    ],
    faqs: [
      {
        question: "Quanto tempo leva uma implantação Uappi?",
        answer:
          "Lojas com sortimento definido e poucas integrações podem ir ao ar em poucas semanas. Catálogo grande, ERP ou regras de preço complexas pedem fases: vitrine e checkout primeiro, depois o restante.",
      },
      {
        question: "A Uappi substitui a VTEX neste projeto?",
        answer:
          "Não. São plataformas diferentes. Na Uappi trabalhamos o admin, a vitrine e o checkout da própria Uappi — sem carregar jargão de IO, Legacy ou Master Data.",
      },
      {
        question: "A implantação inclui SEO e GEO?",
        answer:
          "Sim. URLs, metadados, headings, performance, schema.org e blocos de resposta clara entram no padrão para o Google indexar e para IAs citarem a loja.",
      },
    ],
  },
  {
    slug: "migracao-uappi",
    title: "Migração Uappi",
    shortTitle: "Migração Uappi",
    keyword: "migração Uappi",
    icon: "refresh",
    image: "/images/devops-v2.jpg",
    description:
      "Trazemos sua loja de outra plataforma para a Uappi com redirects, catálogo validado e cutover controlado — sem apagar SEO e GEO.",
    answer:
      "Na migração para a Uappi, a eFcinco trata a virada como operação, não como “subir o tema e torcer”. Inventariamos URLs da origem, reconstruímos jornadas na Uappi, preservamos sinais de SEO e GEO e só viramos quando pedido, estoque e rastreio fecham.",
    problem:
      "Trocar de plataforma sem mapa de URLs e paridade de checkout derruba orgânico, quebra campanhas e gera pedido fantasma no primeiro fim de semana.",
    solution:
      "Planejamos a entrada na Uappi com inventário, paridade de vitrine/checkout, redirects 301, schema.org e janela de cutover com rollback. SEO e GEO andam junto com a engenharia, não depois.",
    deliverables: [
      "Inventário de URLs da plataforma de origem",
      "Plano de redirects 301 para a Uappi",
      "Paridade de home, listagem, PDP e checkout",
      "Migração e conferência de catálogo e conteúdos",
      "Preservação de metadados, estrutura SEO e GEO",
      "Testes de pedido, frete, pagamento e integração",
      "Cutover assistido e monitoramento da primeira semana",
    ],
    process: [
      {
        title: "Origem",
        description: "Levantamos o que a loja atual não pode perder no dia D.",
      },
      {
        title: "Paridade Uappi",
        description: "Reconstruímos fluxos e páginas com critério de aceite na Uappi.",
      },
      {
        title: "SEO, GEO e redirects",
        description: "Mantemos indexação, autoridade e páginas citáveis após a virada.",
      },
      {
        title: "Cutover",
        description: "Viramos DNS, pedidos e medição com plano de rollback.",
      },
    ],
    results: [
      "Continuidade de tráfego orgânico na Uappi",
      "Menos incidente de pedido e estoque no pós-virada",
      "Loja operando no admin Uappi, não em paliativo da origem",
    ],
    forWho: [
      "Lojas saindo de VTEX, Magento, Tray, WooCommerce ou similar",
      "Operações que já decidiram pela Uappi e precisam de cutover seguro",
      "Times que não podem perder SEO, GEO nem estabilidade de pedido",
    ],
    notFor: [
      "Quem quer “subir e ver o que acontece” sem inventário de URLs",
      "Migração sem acesso à plataforma de origem e aos dados de pedido",
    ],
    faqs: [
      {
        question: "É possível migrar para a Uappi sem perder SEO e GEO?",
        answer:
          "Dá para preservar a maior parte do orgânico e da citabilidade com inventário, 301 corretos, paridade de conteúdo e schema.org. Não vendemos ranking automático; eliminamos as quedas técnicas mais comuns.",
      },
      {
        question: "Vocês migram de VTEX para Uappi?",
        answer:
          "Sim. Mapeamos catálogo, jornadas e integrações da VTEX e reconstruímos na Uappi, sem copiar workspaces ou apps IO que não existem nesse destino.",
      },
    ],
  },
  {
    slug: "manutencao-uappi",
    title: "Manutenção e Evolução Uappi",
    shortTitle: "Manutenção & Evolução",
    keyword: "manutenção Uappi",
    icon: "wrench",
    image: "/images/devops-v2.jpg",
    description:
      "Sprints na Uappi para campanha, bug, performance e CMS: a loja continua vendendo enquanto o backlog anda.",
    answer:
      "Na Uappi, a eFcinco assume o ritmo da operação: landing da Black Friday, correção de vitrine, ajuste de cadastro e evolução de checkout. Priorizamos o que trava venda esta semana — não um roadmap genérico de outra plataforma.",
    problem:
      "Campanha chega e o CMS trava, o filtro quebra no mobile ou cada banner vira chamado. A loja congela entre uma demanda e outra.",
    solution:
      "Capacidade contínua no stack Uappi: estabilidade primeiro, depois velocidade de campanha. SEO técnico e GEO entram quando a mudança afeta URL, conteúdo ou dados estruturados.",
    deliverables: [
      "Correção de bugs de vitrine, cadastro e checkout Uappi",
      "Landings e peças de campanha no CMS",
      "Melhorias de usabilidade e conversão",
      "Ajustes de performance de listagem e PDP",
      "Evolução de regras de preço, frete e promoção",
      "Sprints com backlog priorizado pela operação",
    ],
    process: [
      {
        title: "Fila",
        description: "Recebemos o pedido e classificamos por impacto em venda.",
      },
      {
        title: "Prioridade",
        description: "Alinhamos receita, risco e o que o CMS já resolve sozinho.",
      },
      {
        title: "Entrega",
        description: "Implementamos na Uappi em ciclo curto, com homologação.",
      },
      {
        title: "Resultado",
        description: "Medimos a campanha ou o incidente e ajustamos o próximo sprint.",
      },
    ],
    results: [
      "Marketing menos bloqueado no CMS Uappi",
      "Menos incidente em data comercial",
      "Loja evoluindo sem replataformar",
    ],
    forWho: [
      "Lojas já na Uappi que precisam de squad de evolução",
      "Operações com calendário de campanha apertado",
      "Times sem desenvolvedor interno da plataforma",
    ],
    notFor: [
      "Quem precisa só de hospedagem, sem mudança na loja",
    ],
    faqs: [
      {
        question: "Atendem demanda pontual ou só retainer?",
        answer:
          "Os dois. Ajuste isolado ou sprints mensais, conforme o volume de campanha e a maturidade do admin Uappi.",
      },
      {
        question: "Dá para evoluir SEO e GEO nessa manutenção?",
        answer:
          "Sim. Corrigimos indexação, metadados, performance e blocos citáveis junto com as demandas de campanha, quando isso entra na prioridade do sprint.",
      },
    ],
  },
  {
    slug: "seo-uappi",
    title: "SEO e GEO para Uappi",
    shortTitle: "SEO e GEO Uappi",
    keyword: "SEO e GEO para Uappi",
    icon: "search",
    image: "/images/analytics-v2.jpg",
    description:
      "SEO e GEO na Uappi: indexação da vitrine, filtros, Core Web Vitals, schema.org e conteúdo que o Google e as IAs conseguem citar.",
    answer:
      "Na Uappi, SEO e GEO não são um pacote de title/description no painel. A eFcinco corrige o que o Google realmente rastreia na vitrine — listagens, PDP, facetas — e estrutura respostas, FAQs e entidades para ChatGPT, Perplexity e AI Overviews.",
    problem:
      "Lojas Uappi sofrem com URL de filtro indexada, conteúdo duplicado de categoria, LCP alto na grade de produtos e zero dado estruturado. O Google limita o orgânico e as IAs não acham resposta citável da marca.",
    solution:
      "Auditoria no HTML e no crawl da Uappi, correções priorizadas e GEO: páginas com resposta no topo, FAQ visível e schema.org de produto e organização.",
    deliverables: [
      "Auditoria técnica de SEO e GEO na Uappi",
      "Canonicals, metadados e política de filtros",
      "Core Web Vitals da vitrine e da PDP",
      "Schema.org / JSON-LD de produto e breadcrumb",
      "Arquitetura de categorias e conteúdos institucionais",
      "Estratégia de GEO (Generative Engine Optimization)",
      "Páginas de autoridade e FAQs citáveis por IAs",
    ],
    process: [
      {
        title: "Crawl Uappi",
        description: "Diagnosticamos código, filtros, conteúdo duplicado e prontidão para GEO.",
      },
      {
        title: "Quick wins",
        description: "Corrigimos indexação, canonical e metadados de maior impacto.",
      },
      {
        title: "Vitrine",
        description: "Ajustamos templates, schema e performance das listagens.",
      },
      {
        title: "GEO e conteúdo",
        description: "Publicamos respostas claras, FAQs e monitoramento contínuo.",
      },
    ],
    results: [
      "Vitrine rastreável, sem explosão de URL de filtro",
      "PDP mais rápida e elegível a rich results",
      "Maior chance de citação em respostas de IA",
    ],
    forWho: [
      "Lojas Uappi com orgânico estagnado",
      "Times que produzem conteúdo sem base técnica na vitrine",
      "Operações que querem aparecer no Google e em IAs",
    ],
    notFor: [
      "Quem busca só link building, sem mexer em template ou filtro",
    ],
    faqs: [
      {
        question: "SEO e GEO na Uappi é igual ao de um site institucional?",
        answer:
          "Os princípios são os mesmos; a implementação não. Listagem, faceta, PDP e performance da grade de produtos na Uappi definem o que o Google enxerga.",
      },
      {
        question: "O que é GEO neste serviço?",
        answer:
          "GEO (Generative Engine Optimization) aumenta a chance de a loja ser citada em ChatGPT, Perplexity, Gemini e AI Overviews — com resposta direta, FAQ, schema.org e páginas de autoridade, além do SEO clássico.",
      },
    ],
  },
  {
    slug: "ux-conversao",
    title: "UX e Conversão para E-commerce Uappi",
    shortTitle: "UX & Conversão",
    keyword: "UX e-commerce Uappi",
    icon: "mouse",
    image: "/images/mobile-v2.jpg",
    description:
      "CRO na Uappi: PDP, filtros, frete e checkout no mobile — hipóteses viram mudança na vitrine, não só slide.",
    answer:
      "Estudamos a jornada real na Uappi: busca, filtro, PDP e checkout no celular. Redesenhamos hierarquia, prova social e microcopy para reduzir atrito onde a Uappi já opera — sem importar um layout de outra plataforma.",
    problem:
      "Vitrine cheia de banner e PDP pobre, frete só no fim e checkout que pede dado demais. O tráfego existe; a conversão não.",
    solution:
      "Heurística, analytics e implementação na Uappi. Cada hipótese vira ajuste de template ou CMS, com SEO e GEO preservados quando a mudança toca URL ou conteúdo.",
    deliverables: [
      "Diagnóstico de jornada na Uappi (home, listagem, PDP, checkout)",
      "Backlog de CRO priorizado por impacto",
      "Ajustes de PDP, filtro e prova social",
      "Melhorias mobile-first no checkout Uappi",
      "Implementação na vitrine com validação",
      "Acompanhamento de taxa de conversão e funil",
    ],
    process: [
      {
        title: "Ver a loja",
        description: "Analytics, sessão real e atrito no mobile Uappi.",
      },
      {
        title: "Hipótese",
        description: "Priorizamos o que mexe em conversão nesta semana.",
      },
      {
        title: "Vitrine",
        description: "Aplicamos na Uappi sem quebrar cadastro nem CMS.",
      },
      {
        title: "Aprender",
        description: "Medimos e iteramos no próximo ciclo.",
      },
    ],
    results: [
      "Menos abandono entre PDP e pagamento",
      "Listagem e PDP mais fáceis de decidir",
      "Experiência alinhada ao público que já compra na Uappi",
    ],
    forWho: [
      "Lojas Uappi com tráfego e conversão baixa",
      "Marcas que vão redesenhar vitrine com meta de receita",
      "Times de produto que querem evidência, não feeling",
    ],
    notFor: [
      "Pedido de “deixar moderno” sem métrica de negócio",
    ],
    faqs: [
      {
        question: "UX, SEO e GEO andam juntos na Uappi?",
        answer:
          "Sim. Página clara e rápida ajuda o shopper, o Google e as IAs. Não trocamos conversão por URL feia nem o contrário.",
      },
    ],
  },
  {
    slug: "consultoria-uappi",
    title: "Consultoria Uappi",
    shortTitle: "Consultoria Uappi",
    keyword: "consultoria Uappi",
    icon: "lightbulb",
    image: "/images/ux-v2.jpg",
    description:
      "Mão na massa no admin Uappi: catálogo, promoção, CMS, GTM e rotina do time — menos erro silencioso no dia a dia.",
    answer:
      "A consultoria eFcinco para Uappi treina e configura o que o time usa toda semana: cadastro, categoria, promoção, página no CMS e pixels. O objetivo é autonomia no admin Uappi, não um playbook copiado de outra plataforma.",
    problem:
      "Promoção que não dispara, produto sumido da vitrine, pixel pela metade. O prejuízo não aparece no layout; aparece no pedido e na mídia.",
    solution:
      "Sessões práticas no admin Uappi, correção junto com o time e documentação curta do que não pode errar de novo.",
    deliverables: [
      "Taxonomia e padrão de cadastro na Uappi",
      "Promoções, cupons e políticas comerciais",
      "Rotina de CMS e páginas de campanha",
      "GTM, GA4 e pixels (Meta e outros)",
      "Checklist de publicação e qualidade de vitrine",
      "Playbook objetivo para o time interno",
    ],
    process: [
      {
        title: "Rotina",
        description: "Vemos como o time cadastra, publica e dispara campanha hoje.",
      },
      {
        title: "Gargalo",
        description: "Escolhemos o que gera erro ou atraso nesta semana.",
      },
      {
        title: "Junto",
        description: "Configuramos no admin Uappi com quem opera a loja.",
      },
      {
        title: "Autonomia",
        description: "Documentamos o mínimo para o time seguir sem chamado.",
      },
    ],
    results: [
      "Menos cadastro errado e promoção fantasma",
      "Tracking mais confiável para mídia",
      "Time interno operando a Uappi com segurança",
    ],
    forWho: [
      "Times novos na Uappi",
      "Operações que cresceram e perderam padrão de cadastro",
      "Empresas que querem governança sem projeto de replataforma",
    ],
    notFor: [
      "Demanda só de mídia paga, sem acesso ao admin da loja",
    ],
    faqs: [
      {
        question: "Consultoria substitui implantação na Uappi?",
        answer:
          "Não. Consultoria acelera quem já tem loja. Implantação e desenvolvimento constroem vitrine, checkout e integrações.",
      },
    ],
  },
  {
    slug: "integracoes-uappi",
    title: "Integrações Uappi",
    shortTitle: "Integrações & Apps",
    keyword: "integrações Uappi",
    icon: "plug",
    image: "/images/iugis-beneficios-transparent.webp",
    description:
      "ERP, OMS, pagamento, logística e WhatsApp (Iugis) conectados à Uappi com contrato, log e falha tratada.",
    answer:
      "Conectamos a operação Uappi ao que já roda a empresa: ERP, estoque, expedição e Iugis. Integração aqui é payload, fila e conciliação de pedido — não app IO da VTEX.",
    problem:
      "Planilha no meio, estoque mentindo e pedido que some entre a Uappi e o ERP. Em pico, isso vira ruptura e atraso.",
    solution:
      "Desenhamos o fluxo de pedido, preço e estoque, com tratamento de erro e observabilidade, para a Uappi escalar sem operação paralela.",
    deliverables: [
      "Integração de catálogo, estoque e pedido com ERP/OMS",
      "APIs e webhooks da Uappi",
      "Conexão com gateways e operadores logísticos",
      "Iugis no WhatsApp (carrinho, rastreio, atendimento)",
      "Logs, retentativa e alerta de falha",
      "Homologação com pedido de ponta a ponta",
    ],
    process: [
      {
        title: "Fluxo",
        description: "Pedido, estoque, preço e atendimento como realmente acontecem.",
      },
      {
        title: "Contrato",
        description: "Payloads, SLA e o que é aceite na Uappi e no ERP.",
      },
      {
        title: "Build",
        description: "Ambientes, testes e conciliação antes do pico.",
      },
      {
        title: "Operação",
        description: "Monitoramos falha e evoluimos o conector.",
      },
    ],
    results: [
      "Menos retrabalho manual entre Uappi e ERP",
      "Pedido confiável até a expedição",
      "Base pronta para data comercial",
    ],
    forWho: [
      "Operações Uappi com ERP ou OMS no caminho crítico",
      "Lojas que querem WhatsApp (Iugis) ligado ao pedido real",
      "Times cansados de planilha de estoque",
    ],
    notFor: [
      "Integração sem acesso técnico aos sistemas de origem",
    ],
    faqs: [
      {
        question: "Dá para ligar WhatsApp na Uappi?",
        answer:
          "Sim. Via Iugis conectamos catálogo, recuperação de carrinho, rastreio e atendimento ao pedido da Uappi.",
      },
    ],
  },
  {
    slug: "google-analytics-gtm-performance-uappi",
    title: "Google Analytics, GTM e Performance Uappi",
    shortTitle: "GTM, Analytics & Performance",
    keyword: "GTM GA4 Search Console Merchant Center Uappi",
    icon: "trending",
    image: "/images/analytics-v2.jpg",
    description:
      "GTM, GA4, Search Console, Merchant Center e Core Web Vitals na vitrine Uappi — mídia e produto olhando o mesmo pedido.",
    answer:
      "Estruturamos a camada de dados da Uappi: eventos de e-commerce, conversão, feed e sinais de performance da grade de produtos. Marketing, catálogo e tecnologia passam a discutir o mesmo funil.",
    problem:
      "Pixel duplicado, evento de compra que não fecha com o admin Uappi e vitrine lenta que o PageSpeed aponta e ninguém prioriza.",
    solution:
      "Auditoria de tags na Uappi, plano de eventos e diagnóstico de LCP/CLS/INP da listagem e da PDP — com Search Console e feed no mesmo pacote.",
    deliverables: [
      "Plano de mensuração do funil Uappi",
      "GTM e GA4 alinhados ao checkout da Uappi",
      "Eventos de produto, carrinho, checkout e compra",
      "Search Console, sitemap e monitoramento de indexação",
      "Diagnóstico de feed para Merchant Center",
      "PageSpeed e Core Web Vitals da vitrine Uappi",
      "Documentação de eventos para o time de mídia",
    ],
    process: [
      {
        title: "Auditoria",
        description: "Tags, eventos, indexação e performance da Uappi.",
      },
      {
        title: "Plano",
        description: "O que medir para decidir mídia, vitrine e catálogo.",
      },
      {
        title: "Implementação",
        description: "Corrigimos dataLayer, propriedades e gargalos técnicos.",
      },
      {
        title: "Rotina",
        description: "Acompanhamos cobertura dos dados e prioridades de CWV.",
      },
    ],
    results: [
      "Mídia otimizando com evento de compra confiável",
      "Visibilidade de indexação e feed na Uappi",
      "Roteiro claro de performance da vitrine",
    ],
    forWho: [
      "Lojas Uappi com GA4 incompleto ou divergente do admin",
      "Times que precisam de Search Console e Merchant Center em ordem",
      "Operações que sentem a vitrine lenta e não sabem por onde começar",
    ],
    notFor: [
      "Gestão de mídia paga sem acesso à vitrine e ao GTM",
    ],
    faqs: [
      {
        question: "Vocês configuram GTM e GA4 na Uappi?",
        answer:
          "Sim. Auditamos o que está no ar, definimos os eventos do checkout Uappi e implementamos ou corrigimos com o time responsável.",
      },
      {
        question: "Core Web Vitals entram neste serviço?",
        answer:
          "Sim. Diagnosticamos LCP, CLS e INP da vitrine Uappi e priorizamos o que combina ganho de experiência com viabilidade no template.",
      },
    ],
  },
];

export function getUappiServiceBySlug(slug: string) {
  return uappiServices.find((service) => service.slug === slug);
}
