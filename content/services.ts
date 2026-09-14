import type { IconName } from "@/lib/icons";

export type ServiceStoryBlock = {
  heading: string;
  text: string;
  image: string;
  imageAlt: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  keyword: string;
  description: string;
  answer: string;
  problem: string;
  solution: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  results: string[];
  forWho: string[];
  notFor: string[];
  faqs: { question: string; answer: string }[];
  icon: IconName;
  image: string;
  story?: ServiceStoryBlock[];
};

export const services: ServicePage[] = [
  {
    slug: "implantacao-vtex-io",
    title: "Implantação VTEX IO",
    shortTitle: "Implantação VTEX IO",
    keyword: "implantação VTEX IO",
    icon: "rocket",
    image: "/images/code-v2.jpg",
    description:
      "Implantação completa de e-commerce na VTEX IO: arquitetura, catálogo, checkout, CMS e go-live assistido com foco em performance e conversão.",
    answer:
      "A implantação VTEX IO da eFcinco estrutura sua loja virtual com arquitetura escalável, catálogo bem modelado, checkout estável e CMS pronto para o time de marketing operar. Do discovery ao go-live, entregamos uma operação preparada para vender, medir e evoluir sem retrabalho.",
    problem:
      "Lojas lançadas sem arquitetura clara sofrem com lentidão, cadastro inconsistente, checkout frágil e dependência excessiva de desenvolvimento para mudanças simples.",
    solution:
      "Desenhamos a operação VTEX IO com boas práticas da plataforma, priorizando SEO técnico e GEO, usabilidade mobile e autonomia do time comercial após o go-live.",
    deliverables: [
      "Setup de conta, workspaces e permissões",
      "Arquitetura Store Framework / componentes sob medida",
      "Modelagem de catálogo, categorias, specs e preços",
      "Checkout, pagamentos e frete essenciais",
      "CMS e landing pages operáveis pelo marketing",
      "GTM, pixels e eventos básicos de conversão",
      "Go-live assistido com checklist de qualidade",
    ],
    process: [
      {
        title: "Diagnóstico",
        description:
          "Entendemos negócio, sortimento, canais e integrações críticas.",
      },
      {
        title: "Arquitetura",
        description:
          "Definimos escopo, sitemap, componentes e roadmap de entrega.",
      },
      {
        title: "Implementação",
        description:
          "Desenvolvimento ágil com validação contínua de UX e performance.",
      },
      {
        title: "Go-live",
        description:
          "Homologação, cutover e acompanhamento pós-lançamento.",
      },
    ],
    results: [
      "Loja estável e preparada para campanhas",
      "Base técnica limpa para evolução contínua",
      "Menor dependência de hotfixes após o lançamento",
    ],
    forWho: [
      "Marcas que vão entrar na VTEX do zero",
      "Operações que precisam de go-live com governança",
      "Times que querem CMS e autonomia de marketing",
    ],
    notFor: [
      "Quem busca apenas um tema pronto sem customização",
      "Projetos sem definição mínima de catálogo e operação",
    ],
    faqs: [
      {
        question: "Quanto tempo leva uma implantação VTEX IO?",
        answer:
          "Depende do escopo, integrações e complexidade de layout. Projetos essenciais podem ir ao ar em poucas semanas; operações com ERP, regras B2B ou personalizações avançadas exigem roadmap maior e fases claras.",
      },
      {
        question: "Vocês trabalham com VTEX IO e Legacy?",
        answer:
          "Sim. A eFcinco atua nas duas versões da plataforma. Novas implantações priorizam VTEX IO; também apoiamos lojas Legacy e migrações estruturadas.",
      },
      {
        question: "A implantação inclui SEO e GEO?",
        answer:
          "Sim. URLs, metadados, heading hierarchy, performance, schema.org e estrutura de páginas com respostas claras fazem parte do padrão de entrega para indexação no Google e citação em mecanismos generativos.",
      },
    ],
  },
  {
    slug: "migracao-vtex-io",
    title: "Migração VTEX IO",
    shortTitle: "Migração VTEX IO",
    keyword: "migração VTEX IO",
    icon: "refresh",
    image: "/images/devops-v2.jpg",
    description:
      "Migração segura para VTEX IO com preservação de SEO e GEO, redirecionamentos, dados e operação estável no cutover.",
    answer:
      "A migração VTEX IO da eFcinco reduz risco operacional: mapeamos URLs, preservamos sinais de SEO e GEO, migramos catálogo e fluxos críticos e validamos o cutover para que a loja continue vendendo com estabilidade após a troca de plataforma ou versão.",
    problem:
      "Migrações mal planejadas geram perda de ranking, quebra de links, inconsistência de estoque/preço e queda brusca de conversão no pós-go-live.",
    solution:
      "Tratamos migração como projeto de engenharia + SEO e GEO + operação: inventário, paridade funcional, redirects 301, testes e janela de cutover controlada.",
    deliverables: [
      "Inventário de URLs e plano de redirects 301",
      "Paridade de templates e jornadas críticas",
      "Migração/validação de catálogo e conteúdos",
      "Preservação de metadados, estrutura SEO e GEO",
      "Testes de checkout, frete e integrações",
      "Cutover assistido e monitoramento pós-migração",
    ],
    process: [
      {
        title: "Discovery",
        description: "Mapeamos o que não pode falhar no dia D.",
      },
      {
        title: "Paridade",
        description: "Reconstruímos fluxos e templates com critérios de aceite.",
      },
      {
        title: "SEO, GEO e redirects",
        description: "Garantimos continuidade de indexação, autoridade e citabilidade.",
      },
      {
        title: "Cutover",
        description: "Executamos a virada com rollback planejado.",
      },
    ],
    results: [
      "Continuidade de tráfego orgânico",
      "Menos incidentes no pós-migração",
      "Base moderna para evoluir em VTEX IO",
    ],
    forWho: [
      "Lojas VTEX Legacy (CMS) migrando para IO",
      "Operações vindas de outras plataformas para VTEX",
      "Times que não podem perder SEO, GEO nem estabilidade",
    ],
    notFor: [
      "Quem quer “subir e ver o que acontece” sem plano de cutover",
      "Projetos sem inventário mínimo de URLs e integrações",
    ],
    faqs: [
      {
        question: "É possível migrar sem perder SEO e GEO?",
        answer:
          "É possível preservar a maior parte do desempenho orgânico e da citabilidade com inventário de URLs, redirects 301 corretos, paridade de conteúdo, schema.org e monitoramento pós-cutover. Não prometemos ranking automático, mas eliminamos as causas técnicas mais comuns de queda.",
      },
      {
        question: "Vocês migram de outras plataformas para VTEX?",
        answer:
          "Sim. Avaliamos catálogo, jornadas, checkout e integrações para desenhar a migração com o menor risco possível para a operação.",
      },
    ],
  },
  {
    slug: "manutencao-vtex",
    title: "Manutenção e Evolução VTEX",
    shortTitle: "Manutenção & Evolução",
    keyword: "manutenção VTEX",
    icon: "wrench",
    image: "/images/devops-v2.jpg",
    description:
      "Manutenção, reestruturação e evolução contínua de lojas VTEX IO e Legacy: landing pages, performance, bugs e novas funcionalidades.",
    answer:
      "A manutenção VTEX da eFcinco cobre desde ajustes pontuais até sprints evolutivos: landing pages, usabilidade, performance, correções e novas funcionalidades em VTEX IO ou Legacy, com priorização alinhada a conversão e operação.",
    problem:
      "Lojas param de evoluir quando o backlog cresce, a performance degrada e cada campanha depende de um ciclo longo de desenvolvimento.",
    solution:
      "Oferecemos capacidade técnica contínua com prioridades claras: estabilidade primeiro, depois velocidade de campanha e evolução de produto.",
    deliverables: [
      "Correção de bugs e suporte evolutivo",
      "Landing pages e campanhas sazonais",
      "Melhorias de usabilidade e conversão",
      "Otimização de tempo de carregamento",
      "Customizações em VTEX IO e Legacy",
      "Sprints com backlog priorizado",
    ],
    process: [
      {
        title: "Intake",
        description: "Recebemos demandas e classificamos por impacto.",
      },
      {
        title: "Priorização",
        description: "Alinhamos o que gera receita, risco ou aprendizado.",
      },
      {
        title: "Entrega",
        description: "Implementamos em ciclos curtos com validação.",
      },
      {
        title: "Medição",
        description: "Acompanhamos resultado e ajustamos o roadmap.",
      },
    ],
    results: [
      "Time de marketing menos bloqueado",
      "Menos incidentes em campanhas",
      "Evolução contínua sem reescrever a loja",
    ],
    forWho: [
      "Lojas que já estão na VTEX e precisam evoluir",
      "Operações com campanhas frequentes",
      "Times sem squad interno dedicado à plataforma",
    ],
    notFor: [
      "Quem precisa apenas de hospedagem sem desenvolvimento",
    ],
    faqs: [
      {
        question: "Vocês fazem só ajustes simples?",
        answer:
          "Sim, e também evoluções complexas. O modelo se adapta: demanda pontual ou retenção com sprints mensais, conforme a maturidade da operação.",
      },
      {
        question: "Atendem VTEX Legacy?",
        answer:
          "Sim. Mantemos e evoluimos lojas Legacy quando faz sentido, e orientamos migração para IO quando o custo de manter a versão antiga passa a travar o negócio.",
      },
    ],
  },
  {
    slug: "seo-vtex",
    title: "SEO e GEO para VTEX",
    shortTitle: "SEO e GEO VTEX",
    keyword: "SEO e GEO para VTEX",
    icon: "search",
    image: "/images/analytics-v2.jpg",
    description:
      "SEO e GEO (Generative Engine Optimization) para lojas VTEX: indexação, Core Web Vitals, dados estruturados e conteúdo citável por Google, ChatGPT, Perplexity e AI Overviews.",
    answer:
      "O SEO e o GEO para VTEX da eFcinco unem código e conteúdo: corrigimos indexação, metadados, performance e schema.org para ranquear no Google e estruturamos respostas claras, FAQs e entidades para sua loja ser citada em ChatGPT, Perplexity e AI Overviews.",
    problem:
      "Muitas lojas VTEX têm bom visual, mas sofrem com URLs ruins, conteúdo duplicado, LCP alto e ausência de structured data. Sem isso, o Google limita o crescimento orgânico e as IAs não encontram respostas citáveis sobre a marca.",
    solution:
      "Unimos auditoria técnica de SEO, plano de correções priorizado e GEO: páginas com resposta direta, FAQs visíveis, dados estruturados e conteúdo de autoridade para buscadores clássicos e mecanismos generativos.",
    deliverables: [
      "Auditoria técnica de SEO e GEO na VTEX",
      "Correção de indexação, canonicals e metadados",
      "Melhoria de Core Web Vitals (LCP, CLS, INP)",
      "Schema.org / JSON-LD aplicável ao e-commerce",
      "Arquitetura de categorias e conteúdos",
      "Estratégia de GEO (Generative Engine Optimization)",
      "Páginas de autoridade com respostas citáveis",
      "FAQs, entidades e conteúdo pronto para IAs",
    ],
    process: [
      {
        title: "Auditoria",
        description: "Diagnóstico de código, crawl, conteúdo e prontidão para GEO.",
      },
      {
        title: "Quick wins",
        description: "Correções de alto impacto em SEO técnico, GEO e indexação.",
      },
      {
        title: "Estrutura",
        description: "Ajustes de templates, schema, performance e entidades.",
      },
      {
        title: "GEO e evolução",
        description: "Conteúdo citável, FAQs e monitoramento contínuo.",
      },
    ],
    results: [
      "Melhor elegibilidade a rich results",
      "Páginas mais rápidas e rastreáveis",
      "Maior chance de citação em respostas de IA",
      "Base sólida para conteúdo orgânico e GEO",
    ],
    forWho: [
      "Lojas com tráfego orgânico estagnado",
      "Times que investem em conteúdo sem base técnica",
      "Operações que querem aparecer no Google e em IAs",
      "Operações preparando migração e querendo preservar SEO e GEO",
    ],
    notFor: [
      "Quem busca apenas link building sem correção técnica",
    ],
    faqs: [
      {
        question: "SEO e GEO em VTEX é diferente de outros sites?",
        answer:
          "Os princípios são os mesmos, mas a implementação muda: templates da plataforma, renderização, faceted navigation e performance de vitrine exigem conhecimento específico de VTEX IO/Legacy.",
      },
      {
        question: "O que é GEO e por que importa no e-commerce?",
        answer:
          "GEO (Generative Engine Optimization) é a otimização para mecanismos generativos de IA. Enquanto o SEO clássico disputa posição no Google, o GEO aumenta a chance de a loja ser citada em respostas de ChatGPT, Perplexity, Gemini e AI Overviews — com respostas claras, FAQs, schema.org e páginas de autoridade.",
      },
      {
        question: "Vocês trabalham SEO para IA (GEO)?",
        answer:
          "Sim. Estruturamos respostas claras, FAQs visíveis, dados estruturados e páginas de autoridade para aumentar a chance de citação em respostas de ChatGPT, Perplexity e AI Overviews.",
      },
    ],
  },
  {
    slug: "ux-conversao",
    title: "UX e Conversão para E-commerce VTEX",
    shortTitle: "UX & Conversão",
    keyword: "UX e-commerce VTEX",
    icon: "mouse",
    image: "/images/mobile-v2.jpg",
    description:
      "UX e CRO para lojas VTEX: jornada de compra, usabilidade mobile, hierarquia de informação e testes orientados a conversão.",
    answer:
      "A eFcinco analisa a jornada real do shopper na sua loja VTEX e redesigna fluxos, hierarquia e microinterações para reduzir atrito e aumentar conversão — especialmente em mobile, onde a maior parte das decisões acontece.",
    problem:
      "Layouts bonitos nem sempre convertem: menus confusos, PDP fraca, frete tarde demais e checkout com fricção derrubam a taxa de conversão.",
    solution:
      "Unimos pesquisa de usabilidade, heurísticas e implementação técnica na VTEX para transformar hipóteses em melhorias mensuráveis.",
    deliverables: [
      "Diagnóstico de jornada e heurísticas de UX",
      "Recomendações priorizadas de CRO",
      "Redesign de home, PLP, PDP e checkout",
      "Melhorias mobile-first",
      "Implementação na VTEX com validação",
      "Acompanhamento de métricas de conversão",
    ],
    process: [
      {
        title: "Observar",
        description: "Mapas de jornada, analytics e atritos.",
      },
      {
        title: "Hipótese",
        description: "Priorizamos mudanças com maior impacto.",
      },
      {
        title: "Implementar",
        description: "Executamos na VTEX com cuidado de performance.",
      },
      {
        title: "Aprender",
        description: "Medimos resultado e iteramos.",
      },
    ],
    results: [
      "Menos abandono em etapas críticas",
      "PDP e PLP mais claras",
      "Experiência coerente com o público-alvo",
    ],
    forWho: [
      "Lojas com tráfego e conversão baixa",
      "Marcas redesenhando layout com foco em resultado",
      "Times de produto que querem decisões baseadas em evidência",
    ],
    notFor: [
      "Pedidos de “só deixar mais moderno” sem critério de negócio",
    ],
    faqs: [
      {
        question: "UX, SEO e GEO andam juntos?",
        answer:
          "Sim. Páginas claras, rápidas e bem estruturadas ajudam humanos, o Google e mecanismos generativos. Trabalhamos os três lados para não otimizar um às custas do outro.",
      },
    ],
  },
  {
    slug: "consultoria-vtex",
    title: "Consultoria VTEX",
    shortTitle: "Consultoria VTEX",
    keyword: "consultoria VTEX",
    icon: "lightbulb",
    image: "/images/ux-v2.jpg",
    description:
      "Consultoria operacional VTEX: catálogo, categorias, promoções, Master Data, GTM, pixels e melhores práticas da plataforma.",
    answer:
      "A consultoria VTEX da eFcinco apoia o time interno a operar a plataforma com segurança: cadastro de produtos, categorias, filtros, promoções, Master Data, Tag Manager e pixels — reduzindo erro operacional e acelerando o dia a dia do e-commerce.",
    problem:
      "Erros de cadastro, promoções mal configuradas e tracking incompleto geram prejuízo silencioso: preço errado, campanha que não dispara e dados que não fecham.",
    solution:
      "Sessões práticas e documentação viva para o time operar VTEX com autonomia, com apoio da eFcinco nos pontos críticos.",
    deliverables: [
      "Orientação de catálogo e taxonomia",
      "Configuração de promoções e políticas",
      "Master Data e formulários",
      "GTM, GA4 e pixels (Meta e outros)",
      "Boas práticas de CMS e campanhas",
      "Playbooks para o time interno",
    ],
    process: [
      {
        title: "Contexto",
        description: "Entendemos operação atual e gargalos.",
      },
      {
        title: "Prioridades",
        description: "Definimos o que destravar primeiro.",
      },
      {
        title: "Hands-on",
        description: "Configuramos junto com o time ou sob demanda.",
      },
      {
        title: "Autonomia",
        description: "Documentamos para reduzir dependência externa.",
      },
    ],
    results: [
      "Menos erros de operação",
      "Tracking mais confiável",
      "Time interno mais autônomo na VTEX",
    ],
    forWho: [
      "Times de e-commerce em crescimento",
      "Operações novas na VTEX",
      "Empresas que querem governança sem projeto grande",
    ],
    notFor: [
      "Demandas exclusivas de mídia paga sem relação com a plataforma",
    ],
    faqs: [
      {
        question: "A consultoria substitui a implantação?",
        answer:
          "Não. Consultoria acelera operação e decisões. Implantação e desenvolvimento cobrem construção e customização da loja.",
      },
    ],
  },
  {
    slug: "integracoes-vtex",
    title: "Integrações e Apps VTEX",
    shortTitle: "Integrações & Apps",
    keyword: "integrações VTEX",
    icon: "plug",
    image: "/images/iugis-beneficios-transparent.webp",
    description:
      "Integrações VTEX com ERP, OMS, pagamentos, logística, APIs e apps em VTEX IO para operações conectadas e escaláveis.",
    answer:
      "A eFcinco conecta sua loja VTEX ao ecossistema que já faz o negócio rodar: ERP, OMS, pagamentos, logística e apps IO. Projetamos integrações estáveis, observáveis e alinhadas ao fluxo real de pedidos e estoque.",
    problem:
      "Integrações frágeis geram ruptura de estoque, atraso de pedido, conciliação manual e incidentes em datas de pico.",
    solution:
      "Desenhamos contratos de integração, tratamento de erro, logs e testes para a operação escalar sem depender de planilhas.",
    deliverables: [
      "Integrações com ERP e OMS",
      "APIs VTEX REST/GraphQL",
      "Apps e componentes em VTEX IO",
      "Webhooks e automações",
      "Conexão com Iugis (WhatsApp e recuperação)",
      "Monitoramento e tratamento de falhas",
    ],
    process: [
      {
        title: "Mapeamento",
        description: "Fluxos de pedido, estoque, preço e atendimento.",
      },
      {
        title: "Contrato",
        description: "Definimos payloads, SLAs e critérios de aceite.",
      },
      {
        title: "Build",
        description: "Implementamos com ambientes e testes.",
      },
      {
        title: "Operação",
        description: "Observabilidade e evolução contínua.",
      },
    ],
    results: [
      "Menos retrabalho manual",
      "Pedido mais confiável ponta a ponta",
      "Base pronta para Black Friday e picos",
    ],
    forWho: [
      "Operações com ERP/OMS legados ou modernos",
      "Lojas que precisam de apps IO sob medida",
      "Times que querem unir VTEX + Iugis",
    ],
    notFor: [
      "Integrações sem acesso técnico aos sistemas de origem",
    ],
    faqs: [
      {
        question: "Vocês integram WhatsApp com a VTEX?",
        answer:
          "Sim. Via Iugis conectamos catálogo, recuperação de carrinho, rastreio e atendimento ao ecossistema VTEX.",
      },
    ],
  },
  {
    slug: "google-analytics-gtm-performance-vtex",
    title: "Google Analytics, GTM e Performance VTEX",
    shortTitle: "GTM, Analytics & Performance",
    keyword: "GTM GA4 Google Search Console Merchant Center VTEX",
    icon: "trending",
    image: "/images/analytics-v2.jpg",
    description:
      "Configuração e auditoria de GTM, GA4, Google Search Console, Merchant Center e métricas de performance para lojas VTEX.",
    answer:
      "A eFcinco estrutura a camada de dados da sua loja VTEX para transformar navegação em decisão: eventos de e-commerce, conversões, feeds, indexação e sinais de Core Web Vitals organizados para marketing, produto e tecnologia enxergarem a mesma operação.",
    problem:
      "Sem eventos confiáveis, Search Console acompanhado e feeds bem configurados, mídia otimiza no escuro, o orgânico perde oportunidades e problemas de performance demoram a aparecer.",
    solution:
      "Unimos implementação técnica, governança de mensuração e diagnóstico de performance para que as ferramentas do Google reflitam a jornada real de compra.",
    deliverables: [
      "Plano de mensuração para e-commerce e jornada de compra",
      "Configuração ou auditoria de Google Tag Manager e GA4",
      "Eventos de produto, carrinho, checkout e compra",
      "Google Search Console, sitemap e monitoramento de indexação",
      "Diagnóstico de feed e requisitos para Google Merchant Center",
      "Auditoria PageSpeed Insights e Core Web Vitals",
      "Documentação de eventos e recomendações priorizadas",
    ],
    process: [
      {
        title: "Diagnóstico",
        description: "Auditamos tags, eventos, dados de produto, indexação e performance.",
      },
      {
        title: "Plano de dados",
        description: "Definimos o que medir e como cada evento sustenta uma decisão.",
      },
      {
        title: "Implementação",
        description: "Configuramos tags, validações, propriedades e ajustes técnicos necessários.",
      },
      {
        title: "Monitoramento",
        description: "Acompanhamos cobertura, qualidade dos dados e prioridades de evolução.",
      },
    ],
    results: [
      "Decisões de mídia e produto baseadas em dados mais confiáveis",
      "Maior visibilidade sobre indexação, feed e conversões",
      "Roteiro claro para evoluir PageSpeed e Core Web Vitals",
    ],
    forWho: [
      "Lojas VTEX com eventos incompletos ou dados divergentes",
      "Times que precisam estruturar GA4, GTM e Search Console",
      "Operações que querem preparar catálogo para Merchant Center",
    ],
    notFor: [
      "Quem busca apenas gestão de mídia paga sem acesso à operação técnica da loja",
    ],
    faqs: [
      {
        question: "Vocês configuram Google Tag Manager e GA4?",
        answer:
          "Sim. Avaliamos a implementação atual, definimos o plano de eventos e configuramos ou corrigimos a mensuração junto com o time responsável pela operação.",
      },
      {
        question: "O serviço inclui Google Merchant Center?",
        answer:
          "Avaliamos feed, atributos e requisitos técnicos do catálogo para identificar ajustes necessários. A ativação de campanhas e a gestão de mídia podem ser tratadas em escopo complementar.",
      },
      {
        question: "PageSpeed e Core Web Vitals fazem parte da análise?",
        answer:
          "Sim. Diagnosticamos LCP, CLS e INP e priorizamos correções que combinem ganho de experiência, viabilidade técnica e impacto no negócio.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
