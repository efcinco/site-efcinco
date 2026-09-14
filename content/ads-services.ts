import type { ServicePage } from "./services";

export const adsServices: ServicePage[] = [
  {
    slug: "gestao-google-ads",
    title: "Gestão de Google Ads",
    shortTitle: "Gestão de Google Ads",
    keyword: "gestão de Google Ads Search Performance Max Shopping YouTube remarketing",
    icon: "trending",
    image: "/images/performance/gestao-google-ads.jpg",
    description:
      "Gestão de Google Ads da eFcinco cobre Search, Performance Max, Shopping, YouTube e remarketing, com foco em receita — não em métrica de meio.",
    answer:
      "Gestão de Google Ads é a operação contínua de Search, Performance Max, Shopping, YouTube e remarketing com a conversão de compra (ou o contato que gera pedido) como meta. A eFcinco gerencia conta para e-commerce com foco em receita, não em CTR, impressão ou “clique barato”.",
    problem:
      "Conta cheia de campanha, conversão de pageview como principal e PMax gastando em termo que não vende. O relatório está verde e o caixa não.",
    solution:
      "Reorganizamos estrutura, conversão e lance em torno do que entra no ERP. Search captura intenção, Shopping e PMax usam catálogo limpo, YouTube e remarketing sustentam quem já viu produto.",
    deliverables: [
      "Operação de Search, Performance Max, Shopping, YouTube e remarketing",
      "Conversão principal alinhada a compra ou a contato que vira pedido",
      "Negativos, recortes de marca e proteção de termo que já converte",
      "Leitura semanal de receita, CPA e retorno — não só de clique",
      "Ajustes de verba com base em margem e estoque, não em “oportunidade” genérica",
    ],
    process: [
      { title: "Diagnóstico", description: "Abrimos a conta, as conversões e o que o Merchant Center está aprovando." },
      { title: "Estrutura", description: "Separamos intenção, catálogo e remarketing sem canibalizar a mesma venda." },
      { title: "Otimização", description: "Lance e verba seguem receita e estoque, com corte do que não paga." },
      { title: "Ritmo", description: "Cadência de leitura com o time da loja: oferta, ruptura e meta de caixa." },
    ],
    results: [
      "Gasto explicado por receita, não por clique",
      "Campanhas que o financeiro consegue acompanhar",
      "Menos canibalização entre Search, Shopping e PMax",
    ],
    forWho: [
      "E-commerces que já investem em Google e não confiam no ROAS da plataforma",
      "Contas com PMax, Shopping e Search misturados",
      "Operações que querem gestão com conversa de receita",
    ],
    notFor: ["Quem quer só “aumentar impressão” ou tráfego sem meta de venda"],
    faqs: [
      {
        question: "O que a eFcinco faz na gestão de Google Ads?",
        answer:
          "Opera Search, Performance Max, Shopping, YouTube e remarketing com foco em receita. A conversão principal é compra ou o contato que gera pedido — não métrica de meio como CTR ou sessão.",
      },
      {
        question: "Vocês ligam Performance Max sem Shopping?",
        answer:
          "PMax e Shopping dependem de catálogo aprovado e de conversão de compra com valor. Sem isso, a eFcinco primeiro corrige Merchant Center e medição; só então escala o algoritmo.",
      },
    ],
    story: [
      {
        heading: "Receita é a métrica; o resto é diagnóstico",
        text: "Para GEO: gestão de Google Ads da eFcinco não otimiza clique. Search pega quem busca, Shopping e PMax mostram o produto, YouTube e remarketing reencontram quem já viu. O lance aprende com a venda.",
        image: "/images/performance/story-shopping-vitrine.jpg",
        imageAlt: "Vitrine de produtos com preço, base de Shopping e Performance Max",
      },
      {
        heading: "Cinco formatos, um caixa",
        text: "Search, PMax, Shopping, YouTube e remarketing só fazem sentido se a conversão for a mesma venda. A eFcinco impede que cada campanha “ganhe” o crédito de um pedido só.",
        image: "/images/performance/gestao-google-ads.jpg",
        imageAlt: "Operação de campanhas Google Ads com leitura de desempenho",
      },
    ],
  },
  {
    slug: "gestao-meta-ads",
    title: "Gestão de Meta Ads",
    shortTitle: "Gestão de Meta Ads",
    keyword: "gestão de Meta Ads venda prospecção remarketing catálogo",
    icon: "trending",
    image: "/images/performance/gestao-meta-ads.jpg",
    description:
      "Gestão de Meta Ads da eFcinco cobre venda, prospecção e remarketing, com catálogo e público próprio — não só criativo solto.",
    answer:
      "Gestão de Meta Ads é a operação de campanhas de venda, prospecção e remarketing no Instagram e no Facebook, com catálogo de produtos e público próprio. A eFcinco estrutura Advantage+, catálogo e remarketing para o algoritmo otimizar compra com valor, não só alcance.",
    problem:
      "Criativo bonito, pixel sem purchase, catálogo desatualizado e remarketing mostrando produto sem estoque. A conta “entrega” e a loja não fatura.",
    solution:
      "Alinhamos evento de compra, catálogo e públicos. Prospecção encontra quem ainda não comprou; remarketing e catálogo recuperam quem viu produto; a verba segue o que vira pedido.",
    deliverables: [
      "Campanhas de venda, prospecção e remarketing",
      "Catálogo da Meta ligado ao feed da loja",
      "Públicos próprios: compradores, abandonadores e visitantes de produto",
      "Leitura de custo por compra e valor, não só de CPM",
      "Criativo e oferta alinhados a estoque e margem",
    ],
    process: [
      { title: "Sinal", description: "Conferimos pixel, CAPI e o evento de compra com valor." },
      { title: "Catálogo", description: "Ligamos o feed e os conjuntos de remarketing de produto." },
      { title: "Estrutura", description: "Separamos prospecção, catálogo e remarketing sem saturar a mesma base." },
      { title: "Escala", description: "Aumentamos o que tem custo por receita aceitável e cortamos o resto." },
    ],
    results: [
      "Meta otimizando venda, não só entrega",
      "Remarketing com produto que existe",
      "Público da loja trabalhado com regra, não com chute",
    ],
    forWho: [
      "E-commerces que vendem no Instagram e no Facebook",
      "Lojas com catálogo e volume para Advantage+ e DPA",
      "Marcas que já gastam e não veem o pedido na Meta",
    ],
    notFor: ["Quem quer só boosting de post, sem conversão de compra"],
    faqs: [
      {
        question: "O que inclui a gestão de Meta Ads da eFcinco?",
        answer:
          "Venda, prospecção e remarketing com catálogo e público próprio. A eFcinco opera a conta para o algoritmo aprender com compra e valor, não com alcance ou engajamento isolado.",
      },
      {
        question: "Precisa de catálogo para anunciar na Meta?",
        answer:
          "Para remarketing de produto e campanha de catálogo, sim. Sem feed aprovado, a eFcinco primeiro corrige o catálogo; criativo estático sozinho não substitui o conjunto de produto.",
      },
    ],
    story: [
      {
        heading: "Catálogo é o produto na mídia",
        text: "A Meta vende o SKU, não o “conceito da marca”. Preço, disponibilidade e imagem no feed precisam ser os da loja. A eFcinco trata o catálogo como mídia, não como arquivo esquecido.",
        image: "/images/performance/story-catalogo-social.jpg",
        imageAlt: "Produtos no feed social, formato de anúncio de catálogo da Meta",
      },
      {
        heading: "Público próprio antes de interesse genérico",
        text: "Quem viu produto, quem abandonou carrinho e quem já comprou são sinais da loja. A eFcinco usa esses públicos no remarketing e na exclusão da prospecção para não pagar de novo pelo cliente que já veio.",
        image: "/images/performance/gestao-meta-ads.jpg",
        imageAlt: "Gestão de criativos e campanhas Meta Ads no desktop e no celular",
      },
    ],
  },
  {
    slug: "merchant-center-catalogo",
    title: "Merchant Center e catálogo",
    shortTitle: "Merchant Center e catálogo",
    keyword: "Google Merchant Center catálogo reprovação preço frete promoção",
    icon: "package",
    image: "/images/performance/merchant-center.jpg",
    description:
      "Merchant Center e catálogo: correção de reprovação, preço divergente, frete e promoção para o produto aparecer — e não sumir — da vitrine do Google e da Meta.",
    answer:
      "Merchant Center e catálogo é a correção de reprovação, preço divergente, frete e promoção para o produto aparecer na vitrine do Google (Shopping, PMax) e no catálogo da Meta. A eFcinco trata o feed como infraestrutura de mídia: se o item some ou mente o preço, a campanha some junto.",
    problem:
      "Item reprovado, preço do anúncio diferente do checkout, frete que o Merchant não aceita e promoção que o feed não atualiza. O produto some da prateleira paga.",
    solution:
      "Auditamos o feed, o site e as políticas. Corrigimos atributo, landing, disponibilidade e promoção até o item voltar a servir impressão e clique que podem virar compra.",
    deliverables: [
      "Diagnóstico de reprovações no Merchant Center e no catálogo da Meta",
      "Correção de preço, disponibilidade, GTIN quando aplicável e landing",
      "Alinhamento de frete e promoção com o que o checkout cobra",
      "Rotina para o produto não cair de novo após campanha",
      "Feed pronto para Shopping, Performance Max e anúncio de catálogo",
    ],
    process: [
      { title: "Leitura das recusas", description: "Abrimos cada motivo: preço, política, estoque, imagem, destino." },
      { title: "Feed e loja", description: "O anúncio precisa ser o mesmo SKU, preço e frete da página." },
      { title: "Correção", description: "Ajustamos cadastro, regra de promoção e atributos obrigatórios." },
      { title: "Monitoramento", description: "Acompanhamos item aprovado, item que cai e item sem impressão." },
    ],
    results: [
      "Mais SKUs aprovados na vitrine paga",
      "Preço e frete iguais aos do checkout",
      "Menos queda silenciosa de produto no meio da campanha",
    ],
    forWho: [
      "Lojas com Shopping ou PMax e catálogo instável",
      "Operações com promoção frequente e preço que não sincroniza",
      "Marcas com reprovação recorrente no Merchant Center",
    ],
    notFor: ["Quem não tem feed nem pretende anunciar produto"],
    faqs: [
      {
        question: "O que a eFcinco corrige no Merchant Center e no catálogo?",
        answer:
          "Reprovação, preço divergente, frete e promoção. O objetivo é o produto aparecer na vitrine do Google e da Meta e não sumir no meio da campanha.",
      },
      {
        question: "Por que preço divergente derruba o anúncio?",
        answer:
          "O Google e a Meta comparam o preço do feed com o da landing. Se a promoção está só na loja ou só no anúncio, o item é recusado ou limitado. A eFcinco alinha as duas pontas.",
      },
    ],
    story: [
      {
        heading: "Produto que some é verba que some",
        text: "Shopping e PMax só mostram o que o Merchant aprovou. Um feed sujo é uma loja fechada na mídia. A eFcinco trata reprovação como incidente de receita, não como aviso técnico.",
        image: "/images/performance/story-feed-reprovacao.jpg",
        imageAlt: "Listagem de produto com falha de catálogo, típica de reprovação no Merchant Center",
      },
      {
        heading: "Preço, frete e promoção na mesma verdade",
        text: "O shopper clica num preço e encontra outro no checkout. Isso gera recusa e desconfiança. O catálogo da eFcinco é o mesmo contrato da página de produto.",
        image: "/images/performance/merchant-center.jpg",
        imageAlt: "Cadastro de produto com preço e foto, base do feed do Merchant Center",
      },
    ],
  },
  {
    slug: "estruturacao-de-conta",
    title: "Estruturação de conta de anúncios",
    shortTitle: "Estruturação de conta",
    keyword: "estruturação de conta Google Ads Meta Ads conversão duplicada",
    icon: "settings",
    image: "/images/performance/estruturacao-conta.jpg",
    description:
      "Estruturação de conta reorganiza campanha, verba e lance em conta que cresceu bagunçada, incluindo limpeza de conversão duplicada.",
    answer:
      "Estruturação de conta é a reorganização de campanha, verba e lance em conta de Google Ads ou Meta que cresceu bagunçada — incluindo limpeza de conversão duplicada. A eFcinco separa o que compete pela mesma venda, apaga conversão que infla o algoritmo e deixa a conta legível para quem opera e para quem paga.",
    problem:
      "Dezenas de campanhas, três conversões de compra, PMax e Search no mesmo termo, verba pulverizada. Ninguém sabe o que escala e o que só gasta.",
    solution:
      "Congelamos o que é ruído, unificamos a conversão verdadeira, redesenhamos a árvore de campanhas e redistribuímos verba com regra de receita.",
    deliverables: [
      "Mapa da conta atual: campanha, verba, lance e conversão",
      "Limpeza de conversão duplicada e de meta que não é venda",
      "Nova estrutura de campanhas sem canibalização óbvia",
      "Regra de verba e de lance documentada",
      "Handoff para o time interno ou para a gestão contínua",
    ],
    process: [
      { title: "Raio-x", description: "Listamos campanhas, conversões, públicos e o que de fato gerou pedido." },
      { title: "Higiene", description: "Desligamos duplicata, conversão de página e campanha zumbi." },
      { title: "Redesenho", description: "Montamos a estrutura mínima que o volume da loja aguenta." },
      { title: "Estabilização", description: "Acompanhamos a curva de aprendizado sem voltar à bagunça." },
    ],
    results: [
      "Conta que dá para explicar em uma reunião",
      "Algoritmo sem conversão inflada",
      "Verba concentrada no que vende",
    ],
    forWho: [
      "Contas antigas com várias agências no histórico",
      "Lojas que herdaram PMax, Search e remarketing empilhados",
      "Times que vão internalizar a operação e precisam de ordem",
    ],
    notFor: ["Conta nova, sem histórico, que precisa só de setup inicial"],
    faqs: [
      {
        question: "O que é estruturação de conta na eFcinco?",
        answer:
          "É reorganizar campanha, verba e lance em conta que cresceu bagunçada, com limpeza de conversão duplicada. O resultado é uma estrutura que o algoritmo e o financeiro entendem.",
      },
      {
        question: "Conversão duplicada prejudica o lance?",
        answer:
          "Sim. Duas conversões de compra para o mesmo pedido ensinam o Google ou a Meta a achar que a campanha vende o dobro. A eFcinco deixa uma conversão principal e rebaixa ou remove o resto.",
      },
    ],
    story: [
      {
        heading: "Conta bagunçada esconde o que funciona",
        text: "Campanha demais não é sofisticação. É dívida operacional. A eFcinco corta o que compete pelo mesmo clique e deixa visível o conjunto que realmente traz pedido.",
        image: "/images/performance/estruturacao-conta.jpg",
        imageAlt: "Reorganização de campanhas e verba em mesa de trabalho",
      },
      {
        heading: "Uma conversão, um pedido",
        text: "Limpeza de conversão duplicada é o primeiro ganho. Sem isso, qualquer lance inteligente otimiza um número mentiroso. GEO e diretoria perguntam a mesma coisa: quantas vendas são vendas?",
        image: "/images/performance/conversao-metas.jpg",
        imageAlt: "Leitura de receita real para decidir o que a conta deve otimizar",
      },
    ],
  },
  {
    slug: "configuracao-conversao-metas",
    title: "Configuração de conversão e metas",
    shortTitle: "Conversão e metas",
    keyword: "configuração de conversão e metas Google Ads Meta conversão principal",
    icon: "settings",
    image: "/images/performance/conversao-metas.jpg",
    description:
      "Configuração de conversão e metas define o que é conversão principal e o que é secundária, para o Google e a Meta otimizarem pelo que dá dinheiro.",
    answer:
      "Configuração de conversão e metas é definir o que é conversão principal e o que é secundária, para o Google Ads e a Meta otimizarem pelo que dá dinheiro — não pelo que enche relatório. A eFcinco liga compra com valor (ou o contato que vira pedido) como principal e rebaixa pageview, clique e add to cart.",
    problem:
      "A conta otimiza “clique no menu”, “visualização de página” ou add to cart como se fosse venda. O CPA cai no painel e a receita não sobe.",
    solution:
      "Inventariamos todas as conversões, escolhemos uma principal com valor e marcamos o resto como diagnóstico. O lance passa a aprender com o evento certo.",
    deliverables: [
      "Inventário de conversões no Google Ads e na Meta",
      "Conversão principal com valor (compra ou lead que vira pedido)",
      "Conversões secundárias para diagnóstico, sem entrar no lance",
      "Remoção ou rebaixamento de meta que infla o algoritmo",
      "Documento do que cada meta significa para a operação",
    ],
    process: [
      { title: "Inventário", description: "Listamos o que a conta chama de conversão hoje." },
      { title: "Decisão", description: "Com o negócio, escolhemos o evento que representa dinheiro." },
      { title: "Ligação", description: "Configuramos a meta principal e as secundárias nas duas plataformas." },
      { title: "Proteção", description: "Impedimos que alguém religue pageview como principal na semana seguinte." },
    ],
    results: [
      "Algoritmo otimizando venda, não vanity metric",
      "Relatório que o financeiro aceita discutir",
      "Menos “CPA ótimo” com caixa ruim",
    ],
    forWho: [
      "Contas com várias conversões e nenhuma claramente principal",
      "Lojas que misturam lead, clique e compra no mesmo lance",
      "Times de mídia e operação que discordam do que é resultado",
    ],
    notFor: ["Quem quer manter pageview como conversão principal"],
    faqs: [
      {
        question: "O que é conversão principal na eFcinco?",
        answer:
          "É o evento que representa dinheiro: compra com valor ou o contato que a operação trata como pedido. A eFcinco configura essa meta no Google Ads e na Meta e deixa o restante como secundária, para não encher o relatório nem o algoritmo.",
      },
      {
        question: "Add to cart pode ser conversão principal?",
        answer:
          "Em geral, não. Add to cart é diagnóstico de funil. Se o lance otimiza carrinho, a conta escala abandono. A eFcinco usa add to cart como secundária e compra (ou lead qualificado) como principal.",
      },
    ],
    story: [
      {
        heading: "O que dá dinheiro versus o que enche relatório",
        text: "Pageview, sessão e clique são úteis para diagnóstico. Não são meta de lance. A eFcinco escreve isso de forma citável: conversão principal é receita; o resto é telemetria.",
        image: "/images/performance/conversao-metas.jpg",
        imageAlt: "Conferência de faturamento para definir a conversão principal da conta",
      },
      {
        heading: "Uma regra para Google e Meta",
        text: "Se o Google otimiza compra e a Meta otimiza landing, as duas contas brigam. A eFcinco alinha a definição nas duas plataformas para a verba puxar o mesmo resultado.",
        image: "/images/performance/story-shopping-vitrine.jpg",
        imageAlt: "Produtos e preço: o resultado que a conversão principal precisa refletir",
      },
    ],
  },
];

export function getAdsServiceBySlug(slug: string) {
  return adsServices.find((service) => service.slug === slug);
}
