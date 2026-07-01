import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  Zap,
  Home,
  Wallet,
  ShieldCheck,
  Repeat,
  Check,
  FileText,
  Stethoscope,
  Share2,
  Facebook,
  Linkedin,
  Calendar,
} from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/5545920018284";
const CANONICAL = "https://www.asastelemedicina.com.br/central-de-saude/o-que-e-teleconsulta";
const PUBLISHED = "2026-06-10";
const UPDATED = "2026-07-01";

const TITLE = "O que é Teleconsulta? Como Funciona a Consulta Médica Online";
const DESCRIPTION =
  "Entenda o que é teleconsulta, como funciona a consulta médica online, quando ela é indicada, suas vantagens e quais documentos podem ser emitidos.";

const faqs: { q: string; a: string }[] = [
  {
    q: "A teleconsulta vale como consulta normal?",
    a: "Sim. A teleconsulta é regulamentada pelo Conselho Federal de Medicina (Resolução CFM 2.314/2022) e possui a mesma validade legal e clínica de uma consulta presencial, incluindo documentos emitidos com assinatura digital.",
  },
  {
    q: "O médico pode dar atestado por teleconsulta?",
    a: "Sim. Após a avaliação clínica, o médico pode emitir atestado médico assinado digitalmente com certificado ICP-Brasil, com a mesma validade jurídica de um atestado presencial. A empresa é obrigada a aceitar.",
  },
  {
    q: "Posso receber receita digital por teleconsulta?",
    a: "Sim. Receitas simples, especiais e de controle especial podem ser emitidas digitalmente, com QR Code de validação e assinatura ICP-Brasil, sendo aceitas em farmácias de todo o Brasil.",
  },
  {
    q: "É permitido fazer consulta médica online no Brasil?",
    a: "Sim. A telemedicina está regulamentada em caráter definitivo pelo CFM desde 2022 e pela Lei 14.510/2022, sendo permitida para consulta, monitoramento, diagnóstico, orientação e emissão de documentos.",
  },
  {
    q: "Como funciona a primeira consulta por telemedicina?",
    a: "Você agenda pelo WhatsApp, recebe o link da sala virtual, entra pelo celular ou computador no horário marcado e conversa com o médico por vídeo. Ao final, recebe receitas, atestados e orientações pelo WhatsApp ou e-mail.",
  },
  {
    q: "Quanto tempo dura uma teleconsulta?",
    a: "Em média, entre 20 e 40 minutos, dependendo da especialidade e da complexidade do caso. Consultas de psiquiatria e primeiras avaliações costumam ser mais longas.",
  },
  {
    q: "Posso fazer a teleconsulta pelo celular?",
    a: "Sim. Basta ter câmera, microfone e conexão com a internet. Funciona em qualquer smartphone Android ou iPhone, sem precisar instalar aplicativos complicados.",
  },
  {
    q: "A teleconsulta é segura? Meus dados ficam protegidos?",
    a: "Sim. Utilizamos plataformas com criptografia ponta a ponta e seguimos a LGPD (Lei Geral de Proteção de Dados). Nada da consulta é gravado sem autorização e o sigilo médico é integralmente preservado.",
  },
  {
    q: "Posso mostrar exames durante a consulta?",
    a: "Sim. Você pode enviar seus exames por WhatsApp antes da consulta ou mostrar pela câmera durante o atendimento. O médico avalia e comenta os resultados em tempo real.",
  },
  {
    q: "Quem pode utilizar a teleconsulta?",
    a: "Qualquer pessoa, de qualquer idade. Adultos, idosos e crianças (com acompanhamento de um responsável) podem ser atendidos online, exceto em situações que exijam exame físico presencial ou urgência.",
  },
  {
    q: "Quanto custa uma teleconsulta na Asas Telemedicina?",
    a: "As consultas começam em R$ 120,00, com valores que variam conforme a especialidade. Você pode agendar e tirar dúvidas de valores diretamente pelo WhatsApp.",
  },
];

const toc = [
  { id: "conceito", label: "O que é uma teleconsulta?" },
  { id: "como-funciona", label: "Como funciona a consulta online" },
  { id: "quem-pode", label: "Quem pode fazer teleconsulta" },
  { id: "quando-indicada", label: "Quando é indicada" },
  { id: "doencas", label: "Doenças tratadas por teleconsulta" },
  { id: "documentos", label: "Documentos que o médico pode emitir" },
  { id: "vantagens", label: "Vantagens da teleconsulta" },
  { id: "seguranca", label: "Teleconsulta é segura?" },
  { id: "comparativo", label: "Teleconsulta x consulta presencial" },
  { id: "presencial", label: "Quando é necessário ir presencialmente" },
  { id: "preparo", label: "Como se preparar" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "conclusao", label: "Conclusão" },
];

export const Route = createFileRoute("/central-de-saude/o-que-e-teleconsulta")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "teleconsulta, teleconsulta médica, consulta online, consulta médica online, telemedicina, médico online, consulta por vídeo, atendimento médico online",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "Asas Telemedicina" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "og:site_name", content: "Asas Telemedicina" },
      { property: "og:locale", content: "pt_BR" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
      { property: "article:author", content: "Asas Telemedicina" },
      { property: "article:section", content: "Telemedicina" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          inLanguage: "pt-BR",
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          author: {
            "@type": "Organization",
            name: "Asas Telemedicina",
            url: "https://www.asastelemedicina.com.br/",
          },
          publisher: {
            "@type": "Organization",
            name: "Clínica Popular Asas Telemedicina",
            url: "https://www.asastelemedicina.com.br/",
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
          articleSection: "Telemedicina",
          keywords: [
            "teleconsulta",
            "consulta médica online",
            "telemedicina",
            "médico online",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: "https://www.asastelemedicina.com.br/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Central de Saude",
              item: "https://www.asastelemedicina.com.br/central-de-saude/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "O que é Teleconsulta",
              item: CANONICAL,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
 component : Article,
});

//export default function Article() {

//}
