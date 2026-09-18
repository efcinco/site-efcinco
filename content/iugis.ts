export const iugisPlans = [
  {
    id: "chatbot",
    name: "Iugis Chatbot",
    priceLabel: "A partir de R$ 269/mês",
    price: "269",
    popular: false,
    description:
      "Para empresas que querem atendimento inteligente e marketing sem complexidade de gestão.",
    features: [
      "Agentes de IA especializados",
      "Supervisor de IA (orquestrador)",
      "Marketing em massa (disparos)",
      "Formulários nativos no WhatsApp (Flows)",
      "Pesquisa de satisfação pós-atendimento",
      "Base de conhecimento (docs/tabelas)",
      "Servidor MCP e webhooks",
      "Chatbot no-code ilimitado",
    ],
    cta: "Selecionar Chatbot",
    href: "/contato?produto=iugis-chatbot",
  },
  {
    id: "automacoes",
    name: "Iugis Automações",
    priceLabel: "A partir de R$ 399/mês",
    price: "399",
    popular: true,
    description:
      "Infraestrutura completa de vendas: tudo do Chatbot mais o módulo de varejo conectado ao e-commerce.",
    features: [
      "Tudo do plano Chatbot",
      "Recuperação de carrinho",
      "Rastreio automático (tracking)",
      "Integração nativa (VTEX, Shopify, Tray)",
      "Leitura de catálogo de produtos",
      "Identificação de Pix/boleto pendente",
    ],
    cta: "Selecionar Automações",
    href: "/contato?produto=iugis-automacoes",
  },
  {
    id: "sob-medida",
    name: "Sob Medida",
    priceLabel: "Sob consulta",
    price: "0",
    popular: false,
    description:
      "Para operações que exigem gestão total, CRM avançado e regras de negócio únicas.",
    features: [
      "Tudo da plataforma",
      "CRM avançado (Kanban/funis)",
      "Desenvolvimento de fluxos custom",
      "Integração com ERP legado",
      "Consultoria de engenharia",
      "Dashboards personalizados",
      "SLA e suporte prioritário",
    ],
    cta: "Falar com consultor",
    href: "/contato?produto=iugis-sob-medida",
  },
];

export const iugisPlanFaqs = [
  {
    question: "Qual plano é ideal para começar com a Iugis?",
    answer:
      "Na maior parte dos casos, recomendamos começar pelo Iugis Chatbot. Ele já entrega agentes de IA, supervisor, Flows e disparos em massa para validar ganho de atendimento e marketing sem alterar a estrutura do e-commerce.",
  },
  {
    question: "Quando faz sentido migrar para o Iugis Automações?",
    answer:
      "Quando o chatbot já performa e você quer conectar o fluxo de vendas: recuperação de carrinho, rastreio automático e leitura de catálogo. É o passo natural para tornar o WhatsApp um canal previsível de receita.",
  },
  {
    question: "O plano Sob Medida é só para grandes empresas?",
    answer:
      "Não. É para operações com regras mais complexas: múltiplas equipes, ERP legado, CRM avançado e relatórios executivos. Há cases de médio porte nesse modelo.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim. É comum evoluir de Chatbot para Automações e depois para Sob Medida, sem perder histórico nem automações já configuradas.",
  },
  {
    question: "Como funciona a implantação e o suporte?",
    answer:
      "Definimos objetivos, conectamos canais (WhatsApp, e-commerce e integrações) e configuramos fluxos principais. Depois há suporte contínuo e acompanhamento de resultados.",
  },
  {
    question: "O que são WhatsApp Flows?",
    answer:
      "São formulários interativos da Meta dentro do WhatsApp — ideais para qualificar leads e coletar dados sem enviar o cliente para um site externo. A Iugis estrutura a implantação com o time.",
  },
];

export const iugisBenefits = [
  {
    title: "Pare de deixar dinheiro na mesa",
    description:
      "Monitore carrinhos abandonados e recupere vendas com mensagens personalizadas no momento certo.",
  },
  {
    title: "Reduza o suporte drasticamente",
    description:
      "Antecipe perguntas e notifique status de pedidos. Menos tickets repetitivos, mais satisfação.",
  },
  {
    title: "Transforme catálogo em conversa",
    description:
      "Chatbots treinados com seu mix de produtos atuam como vendedor no WhatsApp e outros canais.",
  },
];
