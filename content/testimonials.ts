export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "marcel-bluebeach",
    author: "Marcel",
    company: "Bluebeach",
    quote:
      "Somos clientes da eFcinco há mais de 7 anos, já passamos por vários estágios de migração, integração, otimização e contamos com uma forte parceria de consultoria e evolução. Agência séria e de confiança, equipe extremamente competente. Possuem compromisso em de fato agregar valor com suas soluções, estamos muito satisfeitos pela parceria.",
  },
  {
    id: "vanessa-mixtou",
    author: "Vanessa",
    company: "Mixtou",
    quote:
      "O time da eFcinco demonstra excelente domínio técnico da plataforma VTEX IO, com habilidade e atenção aos detalhes em todas as etapas de desenvolvimento. Sua postura proativa e capacidade de apresentar ideias e soluções viáveis contribuem diretamente para o sucesso dos projetos e para a evolução contínua da nossa operação. Além do conhecimento técnico, destaca-se pelo comprometimento e parceria verdadeira no negócio, mostrando disposição constante para colaborar e aprimorar processos. Diante dos desafios e da complexidade que a plataforma VTEX exige, sua atuação traz segurança e tranquilidade à rotina de trabalho, facilitando a execução diária, mitigando problemas e antecipando oportunidades de melhoria, além de fortalecer o time com postura colaborativa, agilidade nas respostas e profundo entendimento das necessidades do negócio, tornando-se um recurso valioso e confiável.",
  },
  {
    id: "sandro-daikin",
    author: "Sandro",
    company: "Daikin",
    quote:
      "Com a eFcinco cuidando da manutenção e evolução da nossa loja na Uappi, a operação fica bem mais leve. Quando precisamos de um ajuste ou de uma melhoria, o time resolve rápido e sem complicação. Dá pra trabalhar tranquilo sabendo que a loja está em boas mãos. Recomendo a eFcinco para quem busca um parceiro técnico de confiança.",
  },
  {
    id: "jessica-mamo",
    author: "Jéssica",
    company: "Mamô",
    quote:
      "A parceria com a eFcinco tem sido fundamental para a evolução da nossa operação em VTEX. O atendimento ágil e a visão estratégica da equipe contribuem diretamente para o sucesso da nossa operação, trazendo mais segurança e eficiência à gestão do e-commerce.",
  },
];
