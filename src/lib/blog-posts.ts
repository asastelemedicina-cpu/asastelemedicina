export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "blog.o-que-e-teleconsulta",
    title: "O que é teleconsulta e como ela funciona?",
    excerpt:
      "Entenda como funciona a consulta médica por vídeo, sua segurança e validade legal no Brasil.",
    category: "Telemedicina",
    readTime: "4 min de leitura",
    date: "2026-06-10",
    content: [
      "A teleconsulta é o atendimento médico realizado à distância, por meio de uma vídeo chamada entre paciente e médico. Ela é regulamentada pelo Conselho Federal de Medicina (CFM) e possui a mesma validade de uma consulta presencial.",
      "Durante a consulta, o médico avalia sintomas, orienta o tratamento e, quando necessário, emite receitas, atestados e pedidos de exames — todos com assinatura digital válida em todo o Brasil.",
      "Para participar, você precisa apenas de um celular, tablet ou computador com câmera, microfone e conexão com a internet. O link da sala virtual é enviado pelo WhatsApp minutos antes do horário marcado.",
    ],
  },
  {
    slug: "atestado-medico-online",
    title: "Atestado médico online tem validade?",
    excerpt:
      "Descubra como funcionam os atestados emitidos por teleconsulta e por que eles têm o mesmo peso do atestado tradicional.",
    category: "Documentos",
    readTime: "3 min de leitura",
    date: "2026-06-14",
    content: [
      "Sim. O atestado emitido em teleconsulta possui a mesma validade de um atestado presencial, desde que assinado digitalmente com certificado ICP-Brasil pelo médico responsável.",
      "A empresa é obrigada a aceitar o documento assinado digitalmente, conforme a legislação brasileira. Você recebe o PDF pelo WhatsApp e/ou e-mail poucos minutos após a consulta.",
      "Se houver dúvida por parte do RH da sua empresa, o próprio arquivo permite validação digital em portais oficiais que confirmam a autenticidade da assinatura.",
    ],
  },
  {
    slug: "quando-procurar-psiquiatra",
    title: "Quando procurar um psiquiatra?",
    excerpt:
      "Ansiedade, insônia, tristeza persistente: sinais de que é hora de buscar acompanhamento profissional.",
    category: "Saúde mental",
    readTime: "5 min de leitura",
    date: "2026-06-18",
    content: [
      "Buscar um psiquiatra não é sinal de fraqueza — é um passo de cuidado com você. Sintomas como ansiedade constante, insônia, falta de energia, alterações de humor e pensamentos negativos frequentes merecem atenção.",
      "Na teleconsulta em psiquiatria, o médico faz uma avaliação completa do seu momento, escuta sua história e propõe um plano de cuidado individualizado, que pode incluir orientações, acompanhamento e, quando necessário, medicação.",
      "O sigilo é total. A consulta é feita em uma sala virtual segura, no conforto da sua casa — o que ajuda muitas pessoas a se sentirem mais à vontade para falar sobre o que sentem.",
    ],
  },
  {
    slug: "emagrecimento-com-acompanhamento-medico",
    title: "Emagrecimento com acompanhamento médico",
    excerpt:
      "Por que perder peso com suporte de um médico é mais seguro, sustentável e eficiente.",
    category: "Emagrecimento",
    readTime: "4 min de leitura",
    date: "2026-06-22",
    content: [
      "Emagrecer de forma saudável envolve muito mais do que dieta. Um médico avalia seu histórico, exames, rotina e possíveis causas clínicas para o ganho de peso — como alterações hormonais, tireoide e resistência à insulina.",
      "Com acompanhamento, o plano é individual: alimentação, atividade física, mudanças de rotina e, quando indicado, medicações seguras e aprovadas para auxiliar o processo.",
      "A teleconsulta facilita o acompanhamento contínuo, com retornos frequentes para ajustar o plano conforme sua evolução — sem precisar sair de casa.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
