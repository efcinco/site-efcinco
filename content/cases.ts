export type CaseCategory = "migracao" | "implantacao" | "iugis" | "b2b";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  segment: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  categories: CaseCategory[];
  image: string;
  /** Wordmark claro ou com fundo preto — precisa de well escuro. */
  logoOnDark?: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const cases: CaseStudy[] = [
  {
    slug: "vtex-site-institucional",
    title: "Site institucional VTEX na aquisição da Loja Integrada",
    client: "VTEX",
    segment: "Tecnologia",
    image: "/images/cases/vtex.svg",
    categories: [],
    summary:
      "Desenvolvimento do site institucional da VTEX no contexto da aquisição da Loja Integrada.",
    challenge:
      "A VTEX precisava de um site institucional à altura da marca para comunicar a aquisição da Loja Integrada.",
    solution:
      "Desenvolvemos o site institucional da VTEX — estrutura, conteúdo e frontend — para o momento da compra da Loja Integrada.",
    results: [
      "Institucional no ar no timing da aquisição",
      "Projeto entregue para a própria VTEX",
      "Base para a comunicação da marca",
    ],
    stack: ["Site institucional", "Frontend", "CMS"],
  },
  {
    slug: "daikin-uappi-b2c-b2c2b",
    title: "Operação Uappi B2C e desenvolvimento B2C2B",
    client: "Daikin",
    segment: "Climatização",
    image: "/images/cases/daikin.png",
    categories: ["b2b"],
    summary:
      "Manutenção e evolução do B2C Uappi e desenvolvimento da operação B2C2B.",
    challenge:
      "A Daikin precisava evoluir o B2C sem interromper vendas e abrir um canal B2C2B na Uappi.",
    solution:
      "Assumimos a manutenção evolutiva do B2C e desenvolvemos o B2C2B na Uappi, alinhado ao modelo comercial da marca.",
    results: [
      "B2C Uappi em evolução contínua",
      "Canal B2C2B estruturado na plataforma",
      "Operação com menos atrito para o time interno",
    ],
    stack: ["Uappi", "B2C", "B2C2B"],
    testimonial: {
      quote:
        "Com a eFcinco cuidando da manutenção e evolução da nossa loja na Uappi, a operação fica bem mais leve. Quando precisamos de um ajuste ou de uma melhoria, o time resolve rápido e sem complicação. Dá pra trabalhar tranquilo sabendo que a loja está em boas mãos. Recomendo a eFcinco para quem busca um parceiro técnico de confiança.",
      author: "Sandro",
      role: "Daikin",
    },
  },
  {
    slug: "king-of-lenses-migracao-vtex-io-b2b-iugis",
    title: "Migração VTEX IO, B2B e chatbot Iugis com IA",
    client: "King of Lenses",
    segment: "Ótica",
    image: "/images/cases/king-of-lenses.webp",
    logoOnDark: true,
    categories: ["migracao", "b2b", "iugis"],
    summary:
      "Migração para VTEX IO, desenvolvimento B2B, manutenção evolutiva e integração do chatbot Iugis com IA.",
    challenge:
      "A operação precisava sair da base anterior, atender B2B e automatizar atendimento com IA.",
    solution:
      "Migramos para VTEX IO, desenvolvemos o B2B e integramos o chatbot Iugis com IA à jornada da loja.",
    results: [
      "Loja no VTEX IO",
      "Canal B2B em operação",
      "Atendimento com Iugis e IA",
    ],
    stack: ["VTEX IO", "B2B", "Iugis Chatbot", "IA"],
  },
  {
    slug: "bluebeach-migracao-vtex-io",
    title: "Migração para VTEX IO e evolução contínua",
    client: "Bluebeach",
    segment: "Moda praia",
    image: "/images/cases/bluebeach.webp",
    categories: ["migracao"],
    summary:
      "Migração para VTEX IO, com manutenção e evoluções contínuas da operação.",
    challenge:
      "A Bluebeach precisava modernizar a plataforma sem perder ritmo de campanha e operação.",
    solution:
      "Conduzimos a migração para VTEX IO e seguimos na manutenção evolutiva da loja.",
    results: [
      "Migração para VTEX IO",
      "Evolução contínua pós go-live",
      "Parceria de longo prazo na operação",
    ],
    stack: ["VTEX IO", "Migração", "Manutenção"],
    testimonial: {
      quote:
        "Somos clientes da eFcinco há mais de 7 anos, já passamos por vários estágios de migração, integração, otimização e contamos com uma forte parceria de consultoria e evolução. Agência séria e de confiança, equipe extremamente competente. Possuem compromisso em de fato agregar valor com suas soluções, estamos muito satisfeitos pela parceria.",
      author: "Marcel",
      role: "Bluebeach",
    },
  },
  {
    slug: "mixtou-vtex-io-iugis",
    title: "Evolução VTEX IO e Iugis no B2C e B2B",
    client: "Mixtou",
    segment: "Moda",
    image: "/images/cases/mixtou.png",
    logoOnDark: true,
    categories: ["iugis", "b2b"],
    summary:
      "Manutenção e evoluções em VTEX IO, com chatbot Iugis e IA no B2C e no B2B.",
    challenge:
      "A Mixtou precisava evoluir B2C e B2B e padronizar atendimento com IA nos dois canais.",
    solution:
      "Mantivemos e evoluímos a operação VTEX IO e integramos o chatbot Iugis com IA no B2C e no B2B.",
    results: [
      "Evolução contínua em VTEX IO",
      "Iugis no B2C e no B2B",
      "Atendimento com agentes de IA",
    ],
    stack: ["VTEX IO", "B2C", "B2B", "Iugis Chatbot", "IA"],
    testimonial: {
      quote:
        "O time da eFcinco demonstra excelente domínio técnico da plataforma VTEX IO, com habilidade e atenção aos detalhes em todas as etapas de desenvolvimento. Sua postura proativa e capacidade de apresentar ideias e soluções viáveis contribuem diretamente para o sucesso dos projetos e para a evolução contínua da nossa operação. Além do conhecimento técnico, destaca-se pelo comprometimento e parceria verdadeira no negócio, mostrando disposição constante para colaborar e aprimorar processos. Diante dos desafios e da complexidade que a plataforma VTEX exige, sua atuação traz segurança e tranquilidade à rotina de trabalho, facilitando a execução diária, mitigando problemas e antecipando oportunidades de melhoria, além de fortalecer o time com postura colaborativa, agilidade nas respostas e profundo entendimento das necessidades do negócio, tornando-se um recurso valioso e confiável.",
      author: "Vanessa",
      role: "Mixtou",
    },
  },
  {
    slug: "thule-implantacao-vtex",
    title: "Implantação, manutenção e evolução VTEX",
    client: "Thule",
    segment: "Outdoor",
    image: "/images/cases/thule.png",
    categories: ["implantacao"],
    summary:
      "Implantação da operação VTEX, seguida de manutenção e evolução contínua.",
    challenge:
      "A Thule precisava entrar na VTEX com base sólida e seguir evoluindo depois do go-live.",
    solution:
      "Implantamos a loja na VTEX e seguimos com manutenção e evoluções da operação.",
    results: [
      "Go-live da operação VTEX",
      "Manutenção contínua",
      "Evolução alinhada ao calendário da marca",
    ],
    stack: ["VTEX", "Implantação", "Manutenção"],
  },
  {
    slug: "danki-migracao-vtex-io",
    title: "Migração para VTEX IO e evolução da loja",
    client: "Danki",
    segment: "Tênis feminino",
    image: "/images/cases/danki.svg",
    categories: ["migracao"],
    summary:
      "Migração da Danki para VTEX IO, com manutenção e evoluções da operação de tênis feminino.",
    challenge:
      "A Danki precisava modernizar a loja para VTEX IO sem perder o ritmo de campanha de uma operação de moda.",
    solution:
      "Migramos para VTEX IO e mantivemos a operação em sprints de evolução.",
    results: [
      "Migração para VTEX IO",
      "Loja preparada para evoluir",
      "Manutenção contínua pós-cutover",
    ],
    stack: ["VTEX IO", "Migração", "Manutenção"],
  },
  {
    slug: "sportbras-manutencao-vtex-io",
    title: "Manutenção e evoluções em VTEX IO",
    client: "Sportbras",
    segment: "Esporte",
    image: "/images/cases/sportbras.svg",
    categories: [],
    summary:
      "Manutenção e evoluções contínuas da operação Sportbras em VTEX IO.",
    challenge:
      "A Sportbras precisava de um parceiro para evoluir a loja IO com estabilidade no dia a dia.",
    solution:
      "Assumimos a manutenção evolutiva em VTEX IO: correções, campanhas e melhorias de jornada.",
    results: [
      "Operação IO em evolução contínua",
      "Menos atrito para publicar campanhas",
      "Base estável para o time interno",
    ],
    stack: ["VTEX IO", "Manutenção", "UX"],
  },
  {
    slug: "casa-dos-macacos-b2b-vtex-io",
    title: "B2B em VTEX IO e evolução B2C + B2B",
    client: "A Casa dos Macacos",
    segment: "Ferramentas",
    image: "/images/cases/casa-dos-macacos.png",
    logoOnDark: true,
    categories: ["b2b"],
    summary:
      "Desenvolvimento do B2B em VTEX IO e manutenção evolutiva do B2C e do B2B.",
    challenge:
      "A marca precisava de um canal B2B na VTEX IO e continuar evoluindo o B2C em paralelo.",
    solution:
      "Desenvolvemos o B2B em VTEX IO e seguimos na manutenção e evolução dos dois canais.",
    results: [
      "B2B VTEX IO no ar",
      "B2C e B2B sob a mesma evolução",
      "Operação atacado e varejo na IO",
    ],
    stack: ["VTEX IO", "B2B", "B2C", "Manutenção"],
  },
  {
    slug: "narciso-enxovais-implantacao-vtex-io",
    title: "Implantação VTEX IO da Narciso Enxovais",
    client: "Narciso Enxovais",
    segment: "Casa e enxovais",
    image: "/images/cases/narciso-enxovais.webp",
    categories: ["implantacao"],
    summary:
      "Implantação completa da operação Narciso Enxovais em VTEX IO.",
    challenge:
      "A Narciso Enxovais precisava entrar na VTEX IO com catálogo, checkout e CMS prontos para o time operar.",
    solution:
      "Implantamos a loja em VTEX IO do discovery ao go-live, com base para o marketing operar no CMS.",
    results: [
      "Operação no ar em VTEX IO",
      "Catálogo e CMS prontos para o time",
      "Base para evolução pós go-live",
    ],
    stack: ["VTEX IO", "Implantação"],
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
