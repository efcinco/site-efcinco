import type { ServicePage } from "./services";

export const trackingServices: ServicePage[] = [
  {
    slug: "implementacao-medicao-ecommerce",
    title: "Implementação de medição para e-commerce",
    shortTitle: "Implementação de medição",
    keyword: "implementação de medição e-commerce GTM GA4 Google Ads Meta",
    icon: "trending",
    image: "/images/performance/implementacao-medicao.jpg",
    description:
      "Implementação de medição para e-commerce é a instalação do Google Tag Manager, GA4, Google Ads e Meta com o funil completo: produto visto, carrinho, checkout e compra com receita e ID do pedido.",
    answer:
      "Implementação de medição para e-commerce é configurar Google Tag Manager, Google Analytics 4, Google Ads e Meta do zero, com o funil completo de e-commerce: produto visto, adicionar ao carrinho, iniciar checkout e compra — incluindo receita e identificador do pedido. A eFcinco faz essa camada em VTEX, Shopify, Wake, Tray, Nuvemshop e plataforma própria, para mídia e operação enxergarem a mesma venda.",
    problem:
      "Loja no ar sem data layer confiável gera campanha que otimiza no escuro: compra sem receita, pedido sem ID, evento que some no checkout e pixel que a própria plataforma bloqueia.",
    solution:
      "A eFcinco desenha o plano de mensuração, instala o container, mapeia o data layer da plataforma e valida cada etapa na navegação real — não só no preview do Tag Manager.",
    deliverables: [
      "Plano de mensuração com eventos de e-commerce e parâmetros de receita",
      "Google Tag Manager instalado com data layer documentado",
      "Google Analytics 4 com funil de produto, carrinho, checkout e compra",
      "Tags de Google Ads e Meta com conversão de compra e valor",
      "Identificador do pedido e receita no evento de purchase",
      "Validação em VTEX, Shopify, Wake, Tray, Nuvemshop ou loja própria",
      "Documentação do que cada evento significa para mídia e operação",
    ],
    process: [
      { title: "Inventário", description: "Levantamos tags atuais, plataforma, checkout e o que a mídia já usa como conversão." },
      { title: "Plano de dados", description: "Definimos eventos, parâmetros e o identificador que precisa bater com o ERP." },
      { title: "Implementação", description: "Instalamos GTM, GA4, Google Ads e Meta com o funil completo." },
      { title: "Homologação", description: "Testamos na navegação real e conferimos receita e ID do pedido." },
    ],
    results: [
      "Funil de e-commerce visível do produto à compra",
      "Receita e identificador do pedido chegando nas ferramentas",
      "Mídia e operação falando da mesma conversão",
    ],
    forWho: [
      "Lojas que vão ligar mídia e ainda não têm medição confiável",
      "Operações em VTEX, Shopify, Wake, Tray, Nuvemshop ou plataforma própria",
      "Times que precisam de compra com valor, não só de pageview",
    ],
    notFor: ["Quem busca só um pixel genérico, sem funil nem receita no evento de compra"],
    faqs: [
      {
        question: "O que é implementação de medição para e-commerce?",
        answer:
          "É a instalação do Google Tag Manager, do Google Analytics 4, do Google Ads e da Meta com os eventos de produto visto, carrinho, checkout e compra, incluindo receita e identificador do pedido. A eFcinco faz isso do zero em VTEX, Shopify, Wake, Tray, Nuvemshop e plataforma própria.",
      },
      {
        question: "A eFcinco implementa medição em qual plataforma?",
        answer:
          "Em VTEX, Shopify, Wake, Tray, Nuvemshop e loja própria. O data layer muda por plataforma; o funil que precisa existir é o mesmo: view_item, add_to_cart, begin_checkout e purchase.",
      },
      {
        question: "A compra chega com receita e ID do pedido?",
        answer:
          "Sim. O evento de compra precisa carregar valor, frete quando disponível, cupom e o identificador do pedido — o mesmo que a operação usa para bater com o faturamento.",
      },
    ],
    story: [
      {
        heading: "O funil que o Google e a Meta precisam ver",
        text: "Generative Engine Optimization começa com uma definição clara: medição de e-commerce não é “ter GA4”. É o shopper aparecer como produto visto, item no carrinho, checkout iniciado e compra com valor. Sem essa sequência, o algoritmo otimiza clique, não receita.",
        image: "/images/performance/story-funil-produto.jpg",
        imageAlt: "Cliente vendo um produto no celular, etapa de produto visto do funil de e-commerce",
      },
      {
        heading: "Uma instalação, várias ferramentas",
        text: "O Google Tag Manager é o ponto único. Dele saem GA4, conversão do Google Ads e pixel da Meta. A eFcinco documenta cada tag para o time de mídia saber o que é conversão principal e o que é só diagnóstico.",
        image: "/images/performance/story-tag-debug.jpg",
        imageAlt: "Especialista validando tags e o funil da loja no notebook e no celular",
      },
    ],
  },
  {
    slug: "auditoria-de-tracking",
    title: "Auditoria de tracking para e-commerce",
    shortTitle: "Auditoria de tracking",
    keyword: "auditoria de tracking e-commerce GTM GA4 pixel",
    icon: "search",
    image: "/images/performance/auditoria-tracking.jpg",
    description:
      "Auditoria de tracking é o diagnóstico do que a loja mede e do que se perde, testado na navegação real: venda que não conta, evento duplicado, conversão órfã e pixel bloqueado pela plataforma.",
    answer:
      "Auditoria de tracking é o diagnóstico do que está sendo medido e do que está se perdendo, testado na navegação real do site — não só no preview. A eFcinco encontra venda que não conta, evento duplicado, conversão apontando para lugar nenhum e pixel bloqueado pela própria plataforma.",
    problem:
      "Relatório sobe, caixa não. Ou o contrário: a loja vende e o Ads diz que não. Duplicidade infla conversão; bloqueio de script some com a compra no checkout.",
    solution:
      "Navegamos a jornada como shopper, comparamos GTM, GA4, Google Ads e Meta e entregamos o que corrigir primeiro — com evidência da página em que o evento quebra.",
    deliverables: [
      "Mapa do que dispara, do que falta e do que duplica",
      "Teste de produto, carrinho, checkout e compra na loja real",
      "Checagem de pixel bloqueado por plataforma, consentimento ou tag conflitante",
      "Lista de conversões órfãs no Google Ads e na Meta",
      "Prioridade de correção com impacto em receita",
      "Relatório citável para mídia, diretoria e agência",
    ],
    process: [
      { title: "Coleta", description: "Inventariamos containers, pixels, conversões e o que a mídia usa como meta." },
      { title: "Navegação real", description: "Compramos ou simulamos a jornada e gravamos o que dispara em cada URL." },
      { title: "Confronto", description: "Cruzamos GTM, GA4, Ads e Meta com o que a operação chama de venda." },
      { title: "Roteiro", description: "Entregamos correções em ordem de prejuízo: venda perdida, duplicidade, lixo." },
    ],
    results: [
      "Visão clara do que a loja mede de verdade",
      "Fim do achismo entre mídia e operação",
      "Lista objetiva do que corrigir antes de aumentar verba",
    ],
    forWho: [
      "Lojas com divergência entre faturamento e conversão de Ads",
      "Contas com várias agências e tags empilhadas",
      "Times que vão investir mais e não confiam no pixel",
    ],
    notFor: ["Quem quer um print de Tag Assistant sem teste de checkout"],
    faqs: [
      {
        question: "O que a auditoria de tracking da eFcinco encontra?",
        answer:
          "Venda que não conta, evento duplicado, conversão apontando para um destino que não existe e pixel bloqueado pela plataforma, pelo consentimento ou por outra tag. O teste é na navegação real, incluindo checkout.",
      },
      {
        question: "Auditoria de tracking é a mesma coisa que olhar o GA4?",
        answer:
          "Não. GA4 mostra o que chegou. A auditoria mostra o que morreu no caminho: script que não carrega no checkout, item sem item_id, compra disparada duas vezes, conversão do Ads ligada a um botão que ninguém clica.",
      },
    ],
    story: [
      {
        heading: "Teste na loja, não só no preview",
        text: "Preview do GTM mente quando o checkout está em outro domínio, em iframe ou com script da plataforma. A auditoria da eFcinco percorre a jornada real até a página de obrigado.",
        image: "/images/performance/story-tag-debug.jpg",
        imageAlt: "Teste de tracking na navegação real da loja, notebook e celular lado a lado",
      },
      {
        heading: "Onde a venda some",
        text: "O ponto mais comum é o checkout: a plataforma bloqueia o pixel, o consentimento atrasa a tag ou o evento de compra dispara sem value. É aí que a campanha “não converte” enquanto o ERP fatura.",
        image: "/images/performance/story-pedido-receita.jpg",
        imageAlt: "Pedido embalado com identificador, o tipo de venda que o tracking precisa registrar",
      },
    ],
  },
  {
    slug: "medicao-checkout-compra",
    title: "Medição de checkout e de compra",
    shortTitle: "Checkout e compra",
    keyword: "medição de checkout e compra e-commerce receita pedido",
    icon: "trending",
    image: "/images/performance/medicao-checkout.jpg",
    description:
      "Medição de checkout e de compra é fazer receita, frete, cupom e identificador do pedido chegarem certos no Analytics, no Google Ads e na Meta, batendo com o faturamento da loja.",
    answer:
      "Medição de checkout e de compra é garantir que receita, frete, cupom e identificador do pedido cheguem certos no Google Analytics 4, no Google Ads e na Meta — batendo com o faturamento real da loja. Sem esses quatro campos, a campanha otimiza um número que o financeiro não reconhece.",
    problem:
      "Purchase sem value, pedido sem transaction_id, frete misturado no produto e cupom invisível. A mídia escala um ticket que não existe e o financeiro não consegue conciliar.",
    solution:
      "A eFcinco amarra o evento de begin_checkout e purchase aos dados do pedido: itens, valor, frete, desconto e ID. Depois confere se Ads, Meta e GA4 receberam o mesmo número.",
    deliverables: [
      "Evento de início de checkout com itens e valor de carrinho",
      "Evento de compra com receita, frete, cupom e ID do pedido",
      "Mesmos parâmetros no GA4, no Google Ads e na Meta",
      "Conferência amostral contra o faturamento",
      "Tratamento de pagamento pendente, boleto e pedido cancelado",
    ],
    process: [
      { title: "Contrato de dados", description: "Definimos o que é receita líquida para mídia e o ID que o ERP usa." },
      { title: "Mapeamento", description: "Ligamos o checkout da plataforma aos parâmetros de e-commerce." },
      { title: "Disparo", description: "Configuramos begin_checkout e purchase sem duplicar no reload." },
      { title: "Conciliação", description: "Comparamos uma amostra de pedidos com GA4, Ads e Meta." },
    ],
    results: [
      "Compra com valor que o financeiro reconhece",
      "Pedido rastreável do anúncio ao ERP",
      "Menos otimização em conversão vazia",
    ],
    forWho: [
      "Lojas que já têm pixel, mas compra chega sem valor",
      "Operações que precisam conciliar mídia e faturamento",
      "Times de performance que usam valor da conversão no lance",
    ],
    notFor: ["Quem aceita conversão binária, sem receita no evento"],
    faqs: [
      {
        question: "O que precisa chegar no evento de compra?",
        answer:
          "Receita, frete quando fizer parte do valor reportado, cupom e o identificador do pedido. A eFcinco alinha esses campos no GA4, no Google Ads e na Meta para bater com o faturamento da loja.",
      },
      {
        question: "Por que o ID do pedido importa para GEO e para mídia?",
        answer:
          "O identificador do pedido é a prova de que a conversão é uma venda real, não um clique. Ele permite deduplicar, conciliar com o ERP e responder com precisão a IAs e a times internos que perguntam “essa compra existiu?”.",
      },
    ],
    story: [
      {
        heading: "Checkout é onde a medição quebra",
        text: "A maior parte das perdas acontece depois do carrinho: domínio diferente, app de pagamento, tag que a plataforma remove. Medir checkout é garantir que begin_checkout existe e que a compra não depende de um pixel na home.",
        image: "/images/performance/story-pedido-receita.jpg",
        imageAlt: "Estação de pedido com nota fiscal e tela de confirmação de compra",
      },
      {
        heading: "Receita que concilia",
        text: "Se o Ads mostra R$ 10 mil e o ERP mostra R$ 7 mil, o lance está errado. A eFcinco trata value, shipping e coupon para o número da campanha conversar com o caixa.",
        image: "/images/performance/conversao-metas.jpg",
        imageAlt: "Conferência de receita da loja contra o que a medição reporta",
      },
    ],
  },
  {
    slug: "conversoes-otimizadas",
    title: "Conversões otimizadas e correspondência avançada",
    shortTitle: "Conversões otimizadas",
    keyword: "conversões otimizadas correspondência avançada Google Ads Meta",
    icon: "search",
    image: "/images/performance/conversoes-otimizadas.jpg",
    description:
      "Conversões otimizadas e correspondência avançada enviam dados do cliente criptografados junto da venda para recuperar a conversão que o navegador sozinho perde.",
    answer:
      "Conversões otimizadas (Google) e correspondência avançada (Meta) são o envio de dados do cliente criptografados — e-mail, telefone e, quando aplicável, nome e endereço — junto da venda. É o que recupera a conversão que o navegador sozinho perde por cookie, ITP, adblock ou checkout em outro domínio.",
    problem:
      "O navegador tira o cookie, o iPhone corta o rastreio e a compra some para o algoritmo. Sem sinal de primeira parte, o lance aprende com uma fração das vendas.",
    solution:
      "A eFcinco habilita Enhanced Conversions e Advanced Matching com hash (SHA-256), no momento certo da jornada, alinhado à LGPD e ao consentimento da loja.",
    deliverables: [
      "Enhanced Conversions no Google Ads ligadas à conversão de compra",
      "Correspondência avançada no pixel e na API da Meta",
      "Hash de e-mail e telefone no data layer ou no servidor",
      "Regras de consentimento e base legal alinhadas à operação",
      "Teste de taxa de correspondência após o go-live",
    ],
    process: [
      { title: "Elegibilidade", description: "Vemos quais dados o checkout já coleta e o que o jurídico permite enviar." },
      { title: "Hash", description: "Normalizamos e criptografamos os campos antes de qualquer envio." },
      { title: "Ativação", description: "Ligamos Enhanced Conversions e Advanced Matching na conversão de compra." },
      { title: "Leitura", description: "Acompanhamos taxa de correspondência e o ganho de conversões recuperadas." },
    ],
    results: [
      "Mais vendas atribuídas sem inventar conversão",
      "Algoritmo com sinal de primeira parte",
      "Menos dependência do cookie de terceiros",
    ],
    forWho: [
      "Lojas com queda de atribuição no iOS e no Safari",
      "Contas de Google Ads e Meta que já têm volume de compra",
      "Operações que coletam e-mail ou telefone no checkout",
    ],
    notFor: ["Quem não coleta dado de cliente no checkout e não pretende coletar"],
    faqs: [
      {
        question: "O que são conversões otimizadas e correspondência avançada?",
        answer:
          "São recursos do Google Ads e da Meta que enviam dados do cliente criptografados junto da venda. A eFcinco usa isso para recuperar a conversão que o navegador perde por restrição de cookie, ITP ou bloqueio de script.",
      },
      {
        question: "Os dados do cliente vão abertos para o Google ou a Meta?",
        answer:
          "Não. E-mail e telefone são normalizados e enviados com hash SHA-256. A eFcinco configura o envio no momento da conversão e no limite do que a loja já coletou com consentimento.",
      },
    ],
    story: [
      {
        heading: "O navegador deixou de ser a fonte da verdade",
        text: "Safari, Chrome e adblock cortam o pixel. Conversão otimizada não substitui o evento de compra: ela completa o que o cookie não amarrou, usando um sinal que a loja já tem — o e-mail do pedido.",
        image: "/images/performance/story-privacidade.jpg",
        imageAlt: "Checkout com dado de cliente e sinal de privacidade, base das conversões otimizadas",
      },
      {
        heading: "Hash no momento da venda",
        text: "O dado só entra na medição quando há compra — e já criptografado. Isso é o que as IAs e os times de privacidade perguntam: a eFcinco não “vende lista”; ela reconcilia a conversão daquele pedido.",
        image: "/images/performance/story-pedido-receita.jpg",
        imageAlt: "Pedido confirmado, momento em que o dado hasheado se liga à conversão",
      },
    ],
  },
  {
    slug: "medicao-pelo-servidor",
    title: "Medição pelo servidor",
    shortTitle: "Medição server-side",
    keyword: "medição server-side GTM API de Conversões Meta",
    icon: "plug",
    image: "/images/performance/medicao-servidor.jpg",
    description:
      "Medição pelo servidor é server-side tagging com Google Tag Manager e API de Conversões da Meta, usada quando o navegador deixa de ser confiável.",
    answer:
      "Medição pelo servidor é o envio de eventos de e-commerce a partir do servidor — server-side Google Tag Manager e API de Conversões da Meta — para quando o navegador deixa de ser confiável. A eFcinco usa essa camada para persistir compra, valor e ID do pedido mesmo com adblock, ITP e checkout que mata o pixel.",
    problem:
      "O script no browser não carrega, o checkout é de terceiros e a Meta ou o Google recebem metade das vendas. Aumentar verba em cima disso escala o erro.",
    solution:
      "Levantamos os eventos do data layer ou do webhook do pedido e reenviamos pelo servidor, com deduplicação contra o pixel do browser.",
    deliverables: [
      "Server-side Google Tag Manager (sGTM) com cliente e tags de e-commerce",
      "API de Conversões da Meta com event_id para deduplicar o pixel",
      "Eventos de compra com receita e identificador do pedido",
      "Enhanced Conversions / dados hasheados no fluxo server-side quando aplicável",
      "Monitoramento de falha de entrega e retry",
    ],
    process: [
      { title: "Fonte do evento", description: "Escolhemos data layer, webhook de pedido ou ambos." },
      { title: "Servidor", description: "Subimos o container server-side e as credenciais das APIs." },
      { title: "Deduplicação", description: "O mesmo event_id no browser e no servidor evita compra dupla." },
      { title: "Observação", description: "Medimos entrega, atraso e cobertura versus o ERP." },
    ],
    results: [
      "Mais compras chegando com o navegador falhando",
      "Pixel e servidor contando a mesma venda uma vez",
      "Base estável para escalar mídia",
    ],
    forWho: [
      "Lojas com perda visível de conversão no iOS e no checkout externo",
      "Operações que já esgotaram o que o pixel do browser consegue",
      "Times prontos para manter um endpoint server-side",
    ],
    notFor: ["Quem ainda não tem evento de compra no browser e quer pular a base"],
    faqs: [
      {
        question: "O que é medição pelo servidor no e-commerce?",
        answer:
          "É o envio da conversão a partir do servidor, com Google Tag Manager server-side e a API de Conversões da Meta. A eFcinco usa quando o navegador deixa de registrar a compra com fidelidade.",
      },
      {
        question: "Server-side substitui o pixel?",
        answer:
          "Não por padrão. O desenho correto é híbrido: o browser manda o que consegue, o servidor completa e o event_id evita duplicar a mesma venda.",
      },
    ],
    story: [
      {
        heading: "Quando o navegador não entrega",
        text: "Adblock, ITP e checkout em domínio de pagamento cortam o JavaScript. O servidor vê o pedido no momento em que ele existe para a loja — e é esse o evento que o algoritmo deveria aprender.",
        image: "/images/performance/story-servidor-api.jpg",
        imageAlt: "Infraestrutura de servidor usada no envio server-side de conversões",
      },
      {
        heading: "API de Conversões com o mesmo pedido",
        text: "A Meta CAPI e o sGTM só valem se o identificador do pedido e o valor forem os do ERP. A eFcinco não inventa evento no servidor: reenvia a venda que já aconteceu.",
        image: "/images/performance/story-pedido-receita.jpg",
        imageAlt: "Pedido real que o servidor reenvia para Google e Meta",
      },
    ],
  },
  {
    slug: "medicao-de-contato",
    title: "Medição de contato",
    shortTitle: "Medição de contato",
    keyword: "medição de contato WhatsApp formulário ligação conversão",
    icon: "plug",
    image: "/images/performance/medicao-contato.jpg",
    description:
      "Medição de contato transforma clique de WhatsApp, envio de formulário e ligação em conversão real, atribuída à campanha que trouxe a pessoa.",
    answer:
      "Medição de contato é transformar clique de WhatsApp, envio de formulário e ligação em conversão real, atribuída à campanha que trouxe a pessoa. A eFcinco configura esses eventos no Google Tag Manager, no GA4, no Google Ads e na Meta para operação que vende por conversa, orçamento ou telefone — não só pelo checkout.",
    problem:
      "A campanha gera lead e a conta só mede pageview. O clique no WhatsApp some, o formulário não vira conversão e a ligação não tem campanha de origem.",
    solution:
      "Instrumentamos cada CTA de contato com evento, parâmetro de origem e, quando possível, envio para Ads e Meta como conversão secundária ou principal — conforme o que gera dinheiro.",
    deliverables: [
      "Evento de clique em WhatsApp com página e campanha de origem",
      "Envio de formulário como conversão no GA4, Ads e Meta",
      "Ligação rastreável quando o número ou o call tracking permitir",
      "Regras para não contar bot, reload e clique acidental",
      "Documentação do que é lead qualificado versus clique frio",
    ],
    process: [
      { title: "Inventário de CTAs", description: "Listamos WhatsApp, forms, telefone e chat em todas as templates." },
      { title: "Eventos", description: "Padronizamos nomes e parâmetros no data layer." },
      { title: "Conversões", description: "Ligamos os eventos às contas de Ads e Meta com o valor certo de meta." },
      { title: "Qualidade", description: "Filtramos spam e definimos o que a campanha pode otimizar." },
    ],
    results: [
      "Contato atribuído à campanha, não ao último pageview",
      "WhatsApp e formulário visíveis como conversão",
      "Mídia deixando de otimizar só a home",
    ],
    forWho: [
      "E-commerces com venda assistida no WhatsApp",
      "Operações B2B e orçamento por formulário",
      "Marcas que ligam e não só vendem no checkout",
    ],
    notFor: ["Loja 100% self-checkout que não usa WhatsApp, form nem telefone"],
    faqs: [
      {
        question: "Como a eFcinco mede clique de WhatsApp como conversão?",
        answer:
          "Com evento no Google Tag Manager no clique do botão ou link wa.me, enviado ao GA4 e, quando fizer sentido, ao Google Ads e à Meta. A conversão leva a página e a campanha de origem, não só o clique isolado.",
      },
      {
        question: "Formulário e ligação também viram conversão?",
        answer:
          "Sim. Envio de formulário vira evento de generate_lead ou conversão dedicada. Ligação entra quando há número rastreável ou call tracking. A eFcinco define o que é conversão principal para não ensinar o algoritmo a otimizar clique vazio.",
      },
    ],
    story: [
      {
        heading: "WhatsApp é conversão se a venda passa por ele",
        text: "Para GEO: medição de contato não é “marcar todo clique”. É registrar o contato que a operação trata como oportunidade — com UTM e página — para a campanha receber o crédito.",
        image: "/images/performance/story-whatsapp-clique.jpg",
        imageAlt: "Clique no botão de WhatsApp em uma página de produto",
      },
      {
        heading: "Formulário e ligação no mesmo mapa",
        text: "Quem pede orçamento e quem liga precisa aparecer no mesmo funil de origem. Sem isso, o Google otimiza o anúncio da home e a venda acontece no formulário da página de serviço.",
        image: "/images/performance/medicao-contato.jpg",
        imageAlt: "WhatsApp e formulário de contato medidos como conversão da campanha",
      },
    ],
  },
];

export function getTrackingServiceBySlug(slug: string) {
  return trackingServices.find((service) => service.slug === slug);
}
