/* ========================================================================
   TELECONSULTA ONLINE
======================================================================== */

import { createFileRoute, Link } from "@tanstack/react-router";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { ASAS } from "@/lib/config";

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
  Laptop,
  HeartPulse,
  ClipboardCheck,
  Users,
} from "lucide-react";

import asasLogo from "@/assets/asas-logo.jpeg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/5545920018284";

const CANONICAL =
  "https://www.asastelemedicina.com.br/central-de-saude/o-que-e-teleconsulta";

const PUBLISHED = "2026-06-10";
const UPDATED = "2026-07-01";

const TITLE =
  "O que é Teleconsulta? Como Funciona a Consulta Médica Online";

const DESCRIPTION =
  "Entenda o que é teleconsulta, como funciona uma consulta médica online, quando ela é indicada, quais documentos podem ser emitidos e quando é necessário procurar atendimento presencial.";

const faqs = [
  {
    q: "A teleconsulta possui a mesma validade de uma consulta presencial?",
    a: "Sim. A teleconsulta é regulamentada pelo Conselho Federal de Medicina e possui a mesma validade jurídica da consulta presencial quando realizada conforme a legislação vigente.",
  },
  {
    q: "Posso receber receita médica durante a teleconsulta?",
    a: "Sim. Quando houver indicação clínica, o médico poderá emitir receitas digitais conforme a legislação aplicável.",
  },
  {
    q: "O médico pode emitir atestado online?",
    a: "Sim. Havendo indicação médica, o atestado pode ser emitido digitalmente com assinatura válida.",
  },
  {
    q: "Posso mostrar exames durante a consulta?",
    a: "Sim. Exames laboratoriais, radiografias, tomografias, ressonâncias e outros documentos podem ser compartilhados durante o atendimento.",
  },
  {
    q: "A primeira consulta pode ser realizada online?",
    a: "Na maioria das situações sim. O próprio médico definirá caso exista necessidade de avaliação presencial.",
  },
  {
    q: "Quanto tempo dura uma teleconsulta?",
    a: "O tempo varia conforme a complexidade do atendimento, sendo geralmente entre 20 e 40 minutos.",
  },
  {
    q: "Posso fazer pelo celular?",
    a: "Sim. Basta possuir conexão com internet, câmera e microfone.",
  },
  {
    q: "É seguro?",
    a: "Sim. A consulta ocorre em ambiente protegido, respeitando o sigilo médico e a Lei Geral de Proteção de Dados (LGPD).",
  },
  {
    q: "Quem pode utilizar teleconsulta?",
    a: "Adultos, idosos e crianças acompanhadas de responsável, sempre conforme avaliação médica.",
  },
  {
    q: "Quando preciso procurar atendimento presencial?",
    a: "Situações de urgência, emergência ou casos que necessitem exame físico completo devem ser avaliados presencialmente.",
  },
  {
    q: "A teleconsulta substitui todas as consultas?",
    a: "Não. Em alguns casos o médico indicará consulta presencial ou encaminhamento para serviço de urgência.",
  },
  {
    q: "Quais documentos podem ser emitidos?",
    a: "Receitas, atestados, solicitações de exames, relatórios e encaminhamentos, sempre quando houver indicação clínica.",
  },
];

const toc = [
  {
    id: "conceito",
    label: "O que é teleconsulta",
  },
  {
    id: "funcionamento",
    label: "Como funciona",
  },
  {
    id: "indicacoes",
    label: "Quando é indicada",
  },
  {
    id: "quem",
    label: "Quem pode utilizar",
  },
  {
    id: "doencas",
    label: "Doenças tratadas",
  },
  {
    id: "documentos",
    label: "Receitas, atestados e exames",
  },
  {
    id: "vantagens",
    label: "Vantagens",
  },
  {
    id: "seguranca",
    label: "Segurança",
  },
  {
    id: "comparativo",
    label: "Teleconsulta x Presencial",
  },
  {
    id: "presencial",
    label: "Quando procurar atendimento presencial",
  },
  {
    id: "preparo",
    label: "Como se preparar",
  },
  {
    id: "faq",
    label: "Perguntas frequentes",
  },
  {
    id: "conclusao",
    label: "Conclusão",
  },
];

export const Route = createFileRoute(
  "/central-de-saude/o-que-e-teleconsulta"
)({
  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESCRIPTION,
      },
      {
        name: "keywords",
        content:
          "teleconsulta, consulta online, médico online, telemedicina, consulta médica online, receita digital, atestado online",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESCRIPTION,
      },
      {
        property: "og:url",
        content: CANONICAL,
      },
      {
        property: "article:published_time",
        content: PUBLISHED,
      },
      {
        property: "article:modified_time",
        content: UPDATED,
      },
      {
        property: "og:site_name",
        content: "Asas Telemedicina",
      },
      {
        property: "og:locale",
        content: "pt_BR",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: TITLE,
      },
      {
        name: "twitter:description",
        content: DESCRIPTION,
      },
    ],

    links: [
      {
        rel: "canonical",
        href: CANONICAL,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          url: CANONICAL,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          inLanguage: "pt-BR",
          articleSection: "Telemedicina",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": CANONICAL,
          },
          author: {
            "@type": "Organization",
            name: "Asas Telemedicina",
          },
          publisher: {
            "@type": "Organization",
            name: "Asas Telemedicina",
          },
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
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
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
              name: "Artigos de Saúde",
              item:
                "https://www.asastelemedicina.com.br/central-de-saude",
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
    ],
  }),

  component: TeleconsultaOnline,
});

function TeleconsultaOnline() {
  const shareText = encodeURIComponent(`${TITLE} • Asas Telemedicina`);
  const shareUrl = encodeURIComponent(CANONICAL);

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Header />

      <article className="mx-auto max-w-3xl px-6 py-12">

        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-xs text-muted-foreground"
        >

          <ol className="flex flex-wrap items-center gap-1">

            <li>
              <Link to="/">
                Início
              </Link>
            </li>

            <li>›</li>

            <li>
              <Link to="/central-de-saude">
                Artigos de Saúde
              </Link>
            </li>

            <li>›</li>

            <li className="text-foreground">
              O que é Teleconsulta
            </li>

          </ol>

        </nav>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">

          <span className="text-lilac">
            Telemedicina
          </span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            10 min de leitura
          </span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={PUBLISHED}>
              Publicado em 10 jun 2026
            </time>
          </span>

        </div>

        <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">

          O que é
          <em className="not-italic text-azure-deep">
            {" "}Teleconsulta
          </em>
          ? Como funciona a consulta médica online

        </h1>

        <p className="mt-6 text-lg text-muted-foreground">

          A <strong>teleconsulta</strong> revolucionou a forma como milhões de
          brasileiros acessam atendimento médico. Hoje é possível conversar com
          um médico por vídeo, receber orientações, receitas, atestados,
          solicitações de exames e acompanhamento de diversas doenças sem sair
          de casa, com segurança, praticidade e respaldo legal.

        </p>

        <p className="mt-2 text-xs text-muted-foreground">

          Por <strong>Asas Telemedicina</strong> • Atualizado em{" "}
          <time dateTime={UPDATED}>
            01 de julho de 2026
          </time>

        </p>

        <aside className="mt-10 rounded-2xl border border-border bg-card p-6">

          <p className="text-xs uppercase tracking-widest text-lilac">
            Neste artigo
          </p>

          <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-decimal pl-5 text-sm">

            {toc.map((item) => (

              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-azure-deep"
                >
                  {item.label}
                </a>
              </li>

            ))}

          </ol>

        </aside>

        <div className="mt-8 flex flex-wrap items-center gap-2">

          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">

            <Share2 className="h-4 w-4" />

            Compartilhar

          </span>

          <a
            href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1 hover:border-lilac"
          >
            WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1"
          >
            <Facebook className="h-4 w-4" />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1"
          >
            <Linkedin className="h-4 w-4" />
          </a>

        </div>

        <div className="prose-content mt-12 space-y-6 text-base leading-relaxed text-justify">

          
        <section id="conceito" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-6">
            O que é teleconsulta?
          </h2>

          <br />

          <p>
            A <strong>teleconsulta</strong> é uma consulta médica realizada à
            distância por meio de videoconferência entre médico e paciente.
            Trata-se de uma modalidade da telemedicina que permite avaliação
            clínica, orientação, acompanhamento, diagnóstico e emissão de
            documentos médicos quando houver indicação clínica.
          </p>

          <br />

          <p>
            Atualmente, a teleconsulta é regulamentada no Brasil e possui a
            mesma validade jurídica de uma consulta presencial quando realizada
            conforme as normas vigentes. O atendimento mantém os princípios da
            ética médica, do sigilo profissional e da autonomia do médico para
            indicar o tratamento mais adequado para cada paciente.
          </p>

          <br />

          <p>
            Durante a consulta, o médico conversa detalhadamente com o paciente,
            analisa sintomas, antecedentes, medicamentos em uso, exames e
            histórico de saúde, exatamente como acontece em um consultório.
            Sempre que necessário, poderá orientar atendimento presencial,
            solicitar exames ou encaminhar para outro especialista.
          </p>

          <div className="mt-6 rounded-xl border border-lilac/30 bg-lilac/5 p-5">

            <p className="text-sm">

              <strong>Importante:</strong> a teleconsulta não representa um
              atendimento simplificado. É uma consulta médica completa,
              realizada por vídeo, utilizando tecnologia segura e seguindo as
              mesmas normas éticas e legais aplicáveis às consultas presenciais.

            </p>

          </div>

        </section>



        <section id="funcionamento" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Como funciona uma teleconsulta?
          </h2>

          <br />

          <p>
            Todo o processo foi desenvolvido para ser simples e intuitivo,
            mesmo para quem nunca realizou uma consulta médica online.
          </p>

          <br />

          <p>
            Após o agendamento, o paciente recebe um link para acessar a sala
            virtual no horário marcado. O atendimento pode ser realizado pelo
            computador, tablet ou celular, desde que possuam câmera, microfone
            e conexão com a internet.
          </p>

          <div className="mt-6 space-y-4">

            {[
              {
                t: "1. Agendamento",
                d: "Escolha da especialidade, data e horário pelo WhatsApp."
              },
              {
                t: "2. Recebimento do link",
                d: "Nossa equipe envia o acesso para a sala virtual antes da consulta."
              },
              {
                t: "3. Consulta por vídeo",
                d: "O médico realiza entrevista clínica completa, semelhante ao atendimento presencial."
              },
              {
                t: "4. Avaliação médica",
                d: "São analisados sintomas, histórico, medicamentos, exames e demais informações relevantes."
              },
              {
                t: "5. Plano terapêutico",
                d: "Quando indicado, podem ser emitidas receitas, atestados, solicitações de exames e orientações."
              },
            ].map((item, index) => (

              <div
                key={item.t}
                className="rounded-xl border border-border bg-card p-5 flex gap-4"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-azure-deep text-white font-semibold flex-none">
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.t}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.d}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>



        <section id="indicacoes" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Quando a teleconsulta é indicada?
          </h2>

          <br />

          <p>
            A teleconsulta pode ser utilizada em uma grande variedade de
            situações clínicas. Em muitos casos, ela resolve completamente a
            necessidade do paciente sem que seja necessário deslocamento até um
            consultório.
          </p>

          <br />

          <p>
            Entre as principais indicações estão consultas iniciais,
            acompanhamentos, renovação de tratamentos, avaliação de sintomas,
            interpretação de exames e segunda opinião médica.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {[
              "Consulta clínica geral",
              "Avaliação de sintomas",
              "Acompanhamento de doenças crônicas",
              "Interpretação de exames",
              "Renovação de receitas",
              "Segunda opinião médica",
              "Solicitação de exames",
              "Retornos médicos",
              "Orientações preventivas",
              "Acompanhamento terapêutico",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-border bg-card p-4 flex gap-3"
              >

                <Check className="h-5 w-5 text-azure-deep flex-none" />

                <span className="text-sm">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">

            <div className="flex gap-4">

              <Laptop className="h-10 w-10 text-azure-deep flex-none" />

              <div>

                <h3 className="font-semibold text-lg">
                  Atendimento com praticidade
                </h3>

                <br />

                <p className="text-sm text-muted-foreground">
                  Sempre que o exame físico não for indispensável para tomada de
                  decisão clínica, a teleconsulta costuma representar uma opção
                  segura, confortável e eficiente para iniciar ou manter o
                  tratamento.
                </p>

              </div>

            </div>

          </div>

        </section>



        <section id="quem" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Quem pode utilizar a teleconsulta?
          </h2>

          <br />

          <p>
            A teleconsulta pode ser utilizada por pacientes de praticamente
            todas as idades, desde que exista indicação médica para essa
            modalidade de atendimento.
          </p>

          <br />

          <p>
            Crianças devem estar acompanhadas por um responsável durante a
            consulta. Já adultos e idosos podem realizar o atendimento de forma
            independente ou acompanhados, quando desejarem.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">

            {[
              "Adultos",
              "Idosos",
              "Crianças acompanhadas",
              "Gestantes",
              "Pacientes com doenças crônicas",
              "Pessoas com dificuldade de locomoção",
              "Moradores de cidades sem especialistas",
              "Pacientes em acompanhamento contínuo",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-border bg-card p-4 flex gap-3"
              >

                <Users className="h-5 w-5 text-azure-deep flex-none" />

                <span className="text-sm">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </section>


        <section id="doencas" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Quais doenças podem ser acompanhadas por teleconsulta?
          </h2>

          <br />

          <p>
            A teleconsulta permite o acompanhamento de diversas condições de
            saúde, principalmente quando não existe necessidade imediata de
            exame físico detalhado ou realização de procedimentos.
          </p>

          <br />

          <p>
            Em muitas situações, o médico consegue realizar uma avaliação
            completa, definir hipóteses diagnósticas, solicitar exames,
            prescrever medicamentos e acompanhar a evolução do tratamento de
            forma totalmente online.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {[
              "Hipertensão arterial",
              "Diabetes mellitus",
              "Dislipidemia",
              "Hipotireoidismo",
              "Ansiedade",
              "Depressão",
              "Insônia",
              "Rinite e sinusite",
              "Infecção urinária simples",
              "Dermatites",
              "Alergias",
              "Dor de garganta",
              "Resfriados",
              "Gripe",
              "Obesidade",
              "Tabagismo",
              "Menopausa",
              "Acompanhamento clínico",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-border bg-card p-4 flex gap-3"
              >

                <HeartPulse className="h-5 w-5 text-azure-deep flex-none" />

                <span className="text-sm">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-8 rounded-xl border border-lilac/30 bg-lilac/5 p-6">

            <p className="text-sm">

              <strong>Importante:</strong> cada caso é avaliado individualmente.
              Sempre que houver necessidade de exame físico, realização de
              procedimentos ou suspeita de situações graves, o médico orientará
              atendimento presencial.

            </p>

          </div>

        </section>



        <section id="documentos" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Quais documentos podem ser emitidos durante a teleconsulta?
          </h2>

          <br />

          <p>
            Após a avaliação médica, diversos documentos podem ser emitidos
            eletronicamente quando houver indicação clínica e previsão legal.
            Todos possuem assinatura digital conforme as normas vigentes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {[
              {
                titulo: "Receitas médicas",
                descricao:
                  "Prescrição de medicamentos conforme avaliação clínica."
              },
              {
                titulo: "Atestado médico",
                descricao:
                  "Quando houver justificativa clínica para afastamento."
              },
              {
                titulo: "Solicitação de exames",
                descricao:
                  "Laboratoriais ou de imagem quando necessários."
              },
              {
                titulo: "Relatórios médicos",
                descricao:
                  "Documentos destinados à continuidade do tratamento."
              },
              {
                titulo: "Encaminhamentos",
                descricao:
                  "Para especialistas ou outros serviços de saúde."
              },
              {
                titulo: "Plano terapêutico",
                descricao:
                  "Orientações individualizadas para acompanhamento."
              },
            ].map((item) => (

              <article
                key={item.titulo}
                className="rounded-xl border border-border bg-card p-5"
              >

                <div className="flex items-center gap-3 mb-3">

                  <FileText className="h-6 w-6 text-azure-deep" />

                  <h3 className="font-semibold">
                    {item.titulo}
                  </h3>

                </div>

                <p className="text-sm text-muted-foreground">
                  {item.descricao}
                </p>

              </article>

            ))}

          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6">

            <div className="flex gap-4">

              <ClipboardCheck className="h-10 w-10 text-azure-deep flex-none" />

              <div>

                <h3 className="font-semibold text-lg">
                  Emissão sempre depende da avaliação médica
                </h3>

                <br />

                <p className="text-sm text-muted-foreground">
                  Nenhum documento é emitido automaticamente. Receitas,
                  atestados, solicitações de exames e demais documentos são
                  fornecidos exclusivamente quando houver indicação clínica,
                  seguindo rigorosamente a legislação brasileira.
                </p>

              </div>

            </div>

          </div>

        </section>



        <div className="mt-12 rounded-2xl border border-border bg-foreground p-8 text-background">

          <div className="flex items-start gap-4">

            <MessageCircle className="h-10 w-10 flex-none" />

            <div>

              <h2 className="font-display text-2xl">
                Precisa conversar com um médico sem sair de casa?
              </h2>

              <br />

              <p className="text-background/80">

                Agende sua teleconsulta com a equipe da ASAS Telemedicina.
                Atendimento rápido, seguro e realizado por médicos habilitados,
                diretamente pelo celular ou computador.

              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background"
              >

                <MessageCircle className="h-4 w-4" />

                Agendar teleconsulta

              </a>

            </div>

          </div>

        </div>



        <section id="vantagens" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Quais são as vantagens da teleconsulta?
          </h2>

          <br />

          <p>
            A telemedicina trouxe mais facilidade para quem precisa de
            atendimento médico, reduzindo deslocamentos e ampliando o acesso à
            saúde sem abrir mão da qualidade assistencial.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <article className="rounded-2xl border border-border bg-card p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">
                <Home className="h-6 w-6 text-azure-deep" />
              </div>

              <h3 className="font-display text-xl">
                Atendimento onde você estiver
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Consulte-se no conforto de casa utilizando computador,
                smartphone ou tablet.
              </p>

            </article>

            <article className="rounded-2xl border border-border bg-card p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">
                <Clock className="h-6 w-6 text-azure-deep" />
              </div>

              <h3 className="font-display text-xl">
                Economia de tempo
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Evite trânsito, filas, deslocamentos e longos períodos de espera.
              </p>

            </article>

            <article className="rounded-2xl border border-border bg-card p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">
                <Wallet className="h-6 w-6 text-azure-deep" />
              </div>

              <h3 className="font-display text-xl">
                Mais economia
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Redução de gastos com transporte, estacionamento e tempo fora do
                trabalho.
              </p>

            </article>

            <article className="rounded-2xl border border-border bg-card p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">
                <Repeat className="h-6 w-6 text-azure-deep" />
              </div>

              <h3 className="font-display text-xl">
                Continuidade do tratamento
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Facilita retornos periódicos e acompanhamento de doenças
                crônicas.
              </p>

            </article>

          </div>

        </section>



        <section id="seguranca" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            A teleconsulta é segura?
          </h2>

          <br />

          <p>
            Sim. A teleconsulta é realizada em ambiente digital protegido e
            segue os mesmos princípios éticos da medicina presencial. O sigilo
            profissional, a privacidade do paciente e a confidencialidade das
            informações continuam sendo obrigatórios durante todo o atendimento.
          </p>

          <br />

          <p>
            As plataformas utilizadas contam com mecanismos de proteção de
            dados, transmissão criptografada e acesso restrito às pessoas
            envolvidas na consulta. Além disso, o tratamento das informações
            pessoais respeita a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <article className="rounded-xl border border-border bg-card p-5">

              <div className="flex items-center gap-3 mb-3">

                <ShieldCheck className="h-6 w-6 text-azure-deep" />

                <h3 className="font-semibold">
                  Sigilo médico
                </h3>

              </div>

              <p className="text-sm text-muted-foreground">
                Todas as informações compartilhadas durante a consulta são
                protegidas pelo sigilo profissional previsto no Código de Ética
                Médica.
              </p>

            </article>

            <article className="rounded-xl border border-border bg-card p-5">

              <div className="flex items-center gap-3 mb-3">

                <ShieldCheck className="h-6 w-6 text-azure-deep" />

                <h3 className="font-semibold">
                  Proteção de dados
                </h3>

              </div>

              <p className="text-sm text-muted-foreground">
                O atendimento respeita a LGPD e utiliza tecnologias destinadas à
                proteção das informações dos pacientes.
              </p>

            </article>

          </div>

        </section>



        <section id="comparativo" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Teleconsulta ou consulta presencial: qual a diferença?
          </h2>

          <br />

          <p>
            Ambas possuem importante papel na assistência médica. A principal
            diferença está na forma como o atendimento é realizado e nas
            situações em que cada modalidade oferece maior benefício.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border">

            <table className="w-full">

              <thead className="bg-card">

                <tr>

                  <th className="p-4 text-left">
                    Característica
                  </th>

                  <th className="p-4 text-left">
                    Teleconsulta
                  </th>

                  <th className="p-4 text-left">
                    Consulta Presencial
                  </th>

                </tr>

              </thead>

              <tbody>

                {[
                  [
                    "Deslocamento",
                    "Não necessário",
                    "Necessário",
                  ],
                  [
                    "Tempo de espera",
                    "Normalmente menor",
                    "Pode variar",
                  ],
                  [
                    "Receitas digitais",
                    "Sim",
                    "Sim",
                  ],
                  [
                    "Atestado médico",
                    "Quando indicado",
                    "Quando indicado",
                  ],
                  [
                    "Solicitação de exames",
                    "Sim",
                    "Sim",
                  ],
                  [
                    "Exame físico detalhado",
                    "Limitado",
                    "Completo",
                  ],
                  [
                    "Urgências",
                    "Não indicado",
                    "Indicado",
                  ],
                  [
                    "Acompanhamento",
                    "Excelente opção",
                    "Excelente opção",
                  ],
                ].map((item) => (

                  <tr
                    key={item[0]}
                    className="border-t border-border"
                  >

                    <td className="p-4 font-medium">
                      {item[0]}
                    </td>

                    <td className="p-4 text-muted-foreground">
                      {item[1]}
                    </td>

                    <td className="p-4 text-muted-foreground">
                      {item[2]}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>



        <section id="presencial" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Quando procurar atendimento presencial?
          </h2>

          <br />

          <p>
            Embora a teleconsulta seja extremamente útil, algumas situações
            exigem avaliação médica presencial imediata. Nesses casos, o exame
            físico completo ou a realização de procedimentos torna-se
            indispensável.
          </p>

          <br />

          <p>
            Sempre que identificar sinais de gravidade, o médico orientará o
            paciente a procurar um pronto atendimento, hospital ou serviço de
            emergência.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {[
              "Dor intensa no peito",
              "Falta importante de ar",
              "Perda de consciência",
              "Convulsões",
              "Suspeita de AVC",
              "Traumas graves",
              "Fraturas",
              "Hemorragias",
              "Queimaduras extensas",
              "Reações alérgicas graves",
              "Dor abdominal intensa",
              "Emergências obstétricas",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-border bg-card p-4 flex gap-3"
              >

                <Stethoscope className="h-5 w-5 text-azure-deep flex-none" />

                <span className="text-sm">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-8 rounded-xl border border-lilac/30 bg-lilac/5 p-6">

            <p className="text-sm">

              <strong>Importante:</strong> a teleconsulta não substitui os
              serviços de urgência e emergência. Em situações potencialmente
              graves, procure imediatamente atendimento presencial ou acione o
              serviço de emergência da sua região.

            </p>

          </div>

        </section>



        <section id="preparo" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-10">
            Como se preparar para uma teleconsulta?
          </h2>

          <br />

          <p>
            Pequenos cuidados ajudam a tornar o atendimento mais produtivo,
            permitindo que o médico obtenha todas as informações necessárias
            para uma avaliação adequada.
          </p>

          <div className="mt-6 space-y-4">

            {[
              "Escolha um ambiente silencioso e com boa iluminação.",
              "Teste previamente câmera, microfone e conexão com a internet.",
              "Tenha em mãos seus documentos e exames.",
              "Anote os sintomas e dúvidas antes da consulta.",
              "Separe a lista de medicamentos que utiliza atualmente.",
              "Entre na sala virtual alguns minutos antes do horário marcado.",
              "Caso seja criança, mantenha um responsável presente durante toda a consulta.",
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-xl border border-border bg-card p-5 flex gap-4"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-azure-deep text-white font-semibold flex-none">
                  {index + 1}
                </div>

                <p className="text-sm">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>


        <section id="faq" className="scroll-mt-24">

          <h2 className="font-display text-3xl mt-10">
            Perguntas frequentes sobre teleconsulta
          </h2>

          <br />

          <Accordion
            type="single"
            collapsible
            className="mt-8 w-full"
          >

            {faqs.map((faq, index) => (

              <AccordionItem
                key={index}
                value={`faq-${index}`}
              >

                <AccordionTrigger className="text-left">

                  {faq.q}

                </AccordionTrigger>

                <AccordionContent>

                  <p className="leading-7 text-muted-foreground">

                    {faq.a}

                  </p>

                </AccordionContent>

              </AccordionItem>

            ))}

          </Accordion>

        </section>



        <div className="mt-14 rounded-2xl border border-border bg-azure-deep p-8 text-white">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="font-display text-3xl">
                Agende sua consulta médica online
              </h2>

              <br />

              <p className="max-w-xl text-white/80 leading-7">

                Receba atendimento médico de onde estiver, com conforto,
                segurança e praticidade. Nossa equipe está preparada para
                orientar você e indicar o melhor cuidado para sua saúde.

              </p>

            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-foreground transition hover:scale-105"
            >

              <MessageCircle className="h-5 w-5" />

              Agendar pelo WhatsApp

            </a>

          </div>

        </div>



        <section id="conclusao" className="scroll-mt-24 text-justify">

          <h2 className="font-display text-3xl mt-12">
            Conclusão
          </h2>

          <br />

          <p>

            A teleconsulta tornou o acesso ao atendimento médico muito mais
            simples e acessível. Atualmente, é possível realizar consultas,
            acompanhar doenças crônicas, esclarecer dúvidas, receber receitas,
            atestados e solicitações de exames de forma segura e respaldada pela
            legislação brasileira.

          </p>

          <br />

          <p>

            Apesar das inúmeras vantagens, a consulta online não substitui todas
            as formas de atendimento médico. Sempre que houver necessidade de
            exame físico detalhado, realização de procedimentos ou suspeita de
            situações graves, o profissional indicará avaliação presencial.

          </p>

          <br />

          <p>

            Quando bem indicada, a teleconsulta representa uma ferramenta capaz
            de aproximar médicos e pacientes, reduzir barreiras de acesso à
            saúde e oferecer acompanhamento contínuo com conforto, praticidade e
            segurança.

          </p>

        </section>



        <div className="mt-14 rounded-2xl border border-lilac/30 bg-lilac/5 p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">

              <img
                src={asasLogo}
                alt="Asas Telemedicina"
                className="h-12 w-12 rounded-full object-cover"
              />

            </div>

            <div>

              <h3 className="font-display text-2xl">

                Clínica Popular Asas Telemedicina

              </h3>

              <br />

              <p className="text-muted-foreground leading-7">

                Atendimento médico online com segurança, ética, praticidade e
                profissionais habilitados. Consulte-se de qualquer lugar do
                Brasil utilizando apenas um computador, tablet ou celular com
                acesso à internet.

              </p>

            </div>

          </div>

        </div>



        <section className="mt-16 rounded-2xl border border-border bg-card p-8">

          <h2 className="font-display text-2xl">
            Fontes e regulamentação
          </h2>

          <br />

          <ul className="space-y-3 text-sm leading-7 text-muted-foreground">

            <li>
              • Lei nº 14.510/2022.
            </li>

            <li>
              • Resolução CFM nº 2.314/2022.
            </li>

            <li>
              • Código de Ética Médica.
            </li>

            <li>
              • Lei Geral de Proteção de Dados (LGPD).
            </li>

          </ul>

        </section>



        {/* ==========================================================
            CTA INTERMEDIÁRIO
        ========================================================== */}

        <section className="mt-16">

          <div className="rounded-3xl border border-border bg-gradient-to-br from-azure-deep to-lilac p-10 text-white">

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                Atendimento Médico Online
              </span>

              <h2 className="mt-5 font-display text-4xl leading-tight">
                Receba atendimento médico sem sair de casa.
              </h2>

              <p className="mt-6 text-white/85 leading-8">

                Nossa equipe realiza consultas online para diversas
                especialidades, permitindo atendimento rápido, seguro e com a
                mesma responsabilidade técnica da consulta presencial quando a
                telemedicina é indicada.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-foreground transition hover:scale-105"
                >

                  <MessageCircle className="h-5 w-5" />

                  Agendar Teleconsulta

                </a>

              </div>

            </div>

          </div>

        </section>



        {/* ==========================================================
            BENEFÍCIOS
        ========================================================== */}

        <section className="mt-20">

          <h2 className="font-display text-3xl">
            Por que tantas pessoas escolhem a teleconsulta?
          </h2>

          <br />

          <div className="grid gap-6 md:grid-cols-3">

            <article className="rounded-2xl border border-border bg-card p-7">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10">

                <Clock className="h-7 w-7 text-azure-deep" />

              </div>

              <h3 className="font-semibold text-lg">
                Atendimento mais rápido
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Evite filas, deslocamentos e longos períodos de espera para ser
                atendido.
              </p>

            </article>

            <article className="rounded-2xl border border-border bg-card p-7">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10">

                <Home className="h-7 w-7 text-azure-deep" />

              </div>

              <h3 className="font-semibold text-lg">
                Mais conforto
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Consulte-se de casa ou de qualquer lugar utilizando computador,
                celular ou tablet.
              </p>

            </article>

            <article className="rounded-2xl border border-border bg-card p-7">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10">

                <ShieldCheck className="h-7 w-7 text-azure-deep" />

              </div>

              <h3 className="font-semibold text-lg">
                Segurança
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                Atendimento realizado em ambiente seguro, preservando a
                confidencialidade das informações.
              </p>

            </article>

          </div>

        </section>



        {/* ==========================================================
            ESPECIALIDADES
        ========================================================== */}

        <section className="mt-20">

          <h2 className="font-display text-3xl">
            Especialidades disponíveis na teleconsulta
          </h2>

          <br />

          <p className="text-muted-foreground leading-7">

            A telemedicina permite atendimento em diversas áreas médicas. A
            disponibilidade pode variar conforme a agenda e a indicação clínica.

          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Clínica Médica",
              "Psiquiatria",
              "Medicina de Família",
              "Pediatria",
              "Ginecologia",
              "Dermatologia",
              "Endocrinologia",
              "Nutrologia",
              "Emagrecimento",
              "Saúde Mental",
              "Retornos Médicos",
              "Segunda Opinião",
            ].map((item) => (

              <article
                key={item}
                className="rounded-xl border border-border bg-card p-5 flex items-center gap-3"
              >

                <Check className="h-5 w-5 text-azure-deep flex-none" />

                <span>
                  {item}
                </span>

              </article>

            ))}

          </div>

        </section>



        {/* ==========================================================
            COMO É UMA CONSULTA
        ========================================================== */}

        <section className="mt-20">

          <div className="rounded-3xl border border-border bg-card p-10">

            <h2 className="font-display text-3xl">
              O que acontece durante uma teleconsulta?
            </h2>

            <br />

            <p className="leading-8 text-muted-foreground">

              Durante o atendimento, o médico realiza uma entrevista clínica
              detalhada semelhante à consulta presencial. Dependendo do motivo
              da consulta, poderão ser abordados:

            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {[
                "Histórico de saúde",
                "Doenças anteriores",
                "Medicamentos em uso",
                "Histórico familiar",
                "Sintomas atuais",
                "Hábitos de vida",
                "Exames anteriores",
                "Plano terapêutico",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-border p-4"
                >

                  <Check className="mt-1 h-5 w-5 text-azure-deep flex-none" />

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

          
          
        {/* ==========================================================
            PARA QUEM A TELECONSULTA É IDEAL
        ========================================================== */}

        <section className="mt-20">

          <h2 className="font-display text-3xl">
            Para quem a teleconsulta é uma excelente opção?
          </h2>

          <br />

          <p className="text-muted-foreground leading-8">

            Embora praticamente qualquer pessoa possa utilizar a telemedicina
            quando houver indicação médica, alguns grupos costumam se beneficiar
            ainda mais da praticidade proporcionada pelo atendimento online.

          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {[
              {
                titulo: "Quem mora longe de grandes centros",
                descricao:
                  "Facilita o acesso a médicos especialistas sem necessidade de viagens."
              },
              {
                titulo: "Pessoas com dificuldade de locomoção",
                descricao:
                  "Reduz deslocamentos e oferece maior conforto durante o tratamento."
              },
              {
                titulo: "Pacientes em acompanhamento",
                descricao:
                  "Permite retornos frequentes e acompanhamento contínuo da evolução clínica."
              },
              {
                titulo: "Rotina muito corrida",
                descricao:
                  "Ideal para quem possui pouco tempo disponível durante a semana."
              },
            ].map((item) => (

              <article
                key={item.titulo}
                className="rounded-2xl border border-border bg-card p-6"
              >

                <Users className="mb-5 h-10 w-10 text-azure-deep" />

                <h3 className="text-lg font-semibold">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {item.descricao}
                </p>

              </article>

            ))}

          </div>

        </section>



        {/* ==========================================================
            DIFERENCIAIS
        ========================================================== */}

        <section className="mt-20">

          <div className="rounded-3xl border border-border bg-card p-10">

            <h2 className="font-display text-3xl">
              Diferenciais da teleconsulta
            </h2>

            <br />

            <div className="grid gap-6 md:grid-cols-2">

              {[
                {
                  titulo: "Acesso facilitado",
                  texto:
                    "Atendimento médico utilizando apenas internet e um dispositivo com câmera."
                },
                {
                  titulo: "Maior comodidade",
                  texto:
                    "Sem necessidade de enfrentar trânsito, estacionamento ou salas de espera."
                },
                {
                  titulo: "Continuidade do cuidado",
                  texto:
                    "Retornos tornam-se mais simples, favorecendo o acompanhamento do tratamento."
                },
                {
                  titulo: "Documentação digital",
                  texto:
                    "Receitas, solicitações de exames e demais documentos podem ser enviados eletronicamente."
                },
              ].map((item) => (

                <div
                  key={item.titulo}
                  className="rounded-xl border border-border p-5"
                >

                  <h3 className="font-semibold">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-muted-foreground leading-7">
                    {item.texto}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>



        {/* ==========================================================
            PASSO A PASSO
        ========================================================== */}

        <section className="mt-20">

          <h2 className="font-display text-3xl">
            Passo a passo para realizar sua consulta
          </h2>

          <br />

          <div className="space-y-5">

            {[
              {
                numero: "01",
                titulo: "Entre em contato",
                texto:
                  "Converse com nossa equipe pelo WhatsApp e escolha a especialidade."
              },
              {
                numero: "02",
                titulo: "Escolha o horário",
                texto:
                  "Agende a consulta conforme sua disponibilidade."
              },
              {
                numero: "03",
                titulo: "Receba o link",
                texto:
                  "Você receberá o acesso para a sala virtual antes do atendimento."
              },
              {
                numero: "04",
                titulo: "Realize sua consulta",
                texto:
                  "Converse com o médico por vídeo em ambiente seguro."
              },
              {
                numero: "05",
                titulo: "Receba suas orientações",
                texto:
                  "Quando indicado, documentos médicos serão enviados digitalmente."
              },
            ].map((item) => (

              <article
                key={item.numero}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-azure-deep text-lg font-bold text-white flex-none">

                  {item.numero}

                </div>

                <div>

                  <h3 className="text-lg font-semibold">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 text-muted-foreground leading-7">
                    {item.texto}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>



        {/* ==========================================================
            DÚVIDAS COMUNS
        ========================================================== */}

        <section className="mt-20">

          <div className="rounded-3xl border border-lilac/20 bg-lilac/5 p-10">

            <h2 className="font-display text-3xl">
              Ainda está em dúvida?
            </h2>

            <br />

            <p className="leading-8 text-muted-foreground">

              Nossa equipe pode orientar você sobre agendamento, funcionamento
              da teleconsulta, documentação necessária e demais informações
              antes da realização do atendimento.

            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-azure-deep px-7 py-4 font-semibold text-white transition hover:scale-105"
            >

              <MessageCircle className="h-5 w-5" />

              Conversar pelo WhatsApp

            </a>

          </div>

        </section>


        {/* ==========================================================
            POR QUE ESCOLHER A ASAS
        ========================================================== */}

        <section className="mt-20">

          <h2 className="font-display text-3xl">
            Por que escolher a ASAS Telemedicina?
          </h2>

          <br />

          <p className="leading-8 text-muted-foreground">

            Nosso compromisso é oferecer atendimento médico acessível,
            humanizado e baseado nas melhores práticas da medicina, utilizando
            tecnologia para aproximar pacientes e profissionais de saúde.

          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              {
                titulo: "Atendimento humanizado",
                texto:
                  "Cada paciente é avaliado individualmente, respeitando sua história clínica e suas necessidades."
              },
              {
                titulo: "Equipe médica qualificada",
                texto:
                  "Profissionais habilitados e comprometidos com um atendimento ético e seguro."
              },
              {
                titulo: "Tecnologia segura",
                texto:
                  "Consultas realizadas em ambiente protegido e adequado à prática da telemedicina."
              },
              {
                titulo: "Facilidade de acesso",
                texto:
                  "Agendamento simples e atendimento de qualquer lugar do Brasil."
              },
            ].map((item) => (

              <article
                key={item.titulo}
                className="rounded-2xl border border-border bg-card p-6"
              >

                <Check className="mb-5 h-8 w-8 text-azure-deep" />

                <h3 className="text-lg font-semibold">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {item.texto}
                </p>

              </article>

            ))}

          </div>

        </section>



        {/* ==========================================================
            ESTATÍSTICAS
        ========================================================== */}

        <section className="mt-20">

          <div className="rounded-3xl border border-border bg-card p-10">

            <h2 className="font-display text-3xl text-center">
              A telemedicina está transformando o acesso à saúde
            </h2>

            <br />

            <div className="grid gap-6 md:grid-cols-4">

              <article className="text-center">

                <div className="font-display text-5xl text-azure-deep">
                  100%
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Atendimento personalizado
                </p>

              </article>

              <article className="text-center">

                <div className="font-display text-5xl text-azure-deep">
                  100%
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Consulta por vídeo
                </p>

              </article>

              <article className="text-center">

                <div className="font-display text-5xl text-azure-deep">
                  100%
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Documentos digitais quando indicados
                </p>

              </article>

              <article className="text-center">

                <div className="font-display text-5xl text-azure-deep">
                  Brasil
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Atendimento de qualquer lugar
                </p>

              </article>

            </div>

          </div>

        </section>



        {/* ==========================================================
            ARTIGOS RELACIONADOS
        ========================================================== */}

        <section className="mt-20">

          <h2 className="font-display text-3xl">
            Continue aprendendo
          </h2>

          <br />

          <div className="grid gap-6 md:grid-cols-3">

            <Link
              to="/psiquiatria-online"
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-lilac"
            >

              <h3 className="font-semibold group-hover:text-azure-deep">
                Psiquiatria Online
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Entenda quando procurar um médico na área de psiquiatria e como
                funciona a consulta online.
              </p>

            </Link>

            <Link
              to="/central-de-saude"
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-lilac"
            >

              <h3 className="font-semibold group-hover:text-azure-deep">
                Central de Saúde
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Acesse conteúdos produzidos por nossa equipe médica sobre
                prevenção, doenças e tratamentos.
              </p>

            </Link>

            <Link
              to="/"
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-lilac"
            >

              <h3 className="font-semibold group-hover:text-azure-deep">
                Especialidades Médicas
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Conheça todas as especialidades disponíveis na ASAS
                Telemedicina.
              </p>

            </Link>

          </div>

        </section>



        {/* ==========================================================
            CTA FINAL
        ========================================================== */}

        <section className="mt-24">

          <div className="rounded-3xl bg-gradient-to-r from-azure-deep to-lilac p-12 text-center text-white">

            <h2 className="font-display text-4xl">
              Cuide da sua saúde sem sair de casa.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">

              Agende sua consulta online com a ASAS Telemedicina e tenha acesso
              a atendimento médico de qualidade com praticidade, conforto e
              segurança.

            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-foreground transition hover:scale-105"
            >

              <MessageCircle className="h-6 w-6" />

              Quero agendar minha consulta

            </a>

          </div>

        </section>


        {/* ==========================================================
            NAVEGAÇÃO ENTRE ARTIGOS
        ========================================================== */}

        <section className="mt-24">

          <div className="grid gap-6 md:grid-cols-2">

            <Link
              to="/central-de-saude"
              className="group rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:-translate-y-1"
            >

              <div className="flex items-center gap-3 text-muted-foreground">

                <ArrowLeft className="h-5 w-5" />

                Voltar para a Central de Saúde

              </div>

              <h3 className="mt-5 font-display text-2xl group-hover:text-azure-deep">
                Veja todos os artigos
              </h3>

              <p className="mt-4 text-muted-foreground leading-7">
                Explore conteúdos sobre prevenção, doenças, tratamentos,
                qualidade de vida e telemedicina.
              </p>

            </Link>

            <Link
              to="/"
              className="group rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:-translate-y-1"
            >

              <div className="flex items-center gap-3 text-muted-foreground">

                <Home className="h-5 w-5" />

                Página inicial

              </div>

              <h3 className="mt-5 font-display text-2xl group-hover:text-azure-deep">
                Conheça a ASAS Telemedicina
              </h3>

              <p className="mt-4 text-muted-foreground leading-7">
                Atendimento médico online acessível, humanizado e disponível
                para pacientes em todo o Brasil.
              </p>

            </Link>

          </div>

        </section>



        {/* ==========================================================
            AVISO INSTITUCIONAL
        ========================================================== */}

        <section className="mt-20">

          <div className="rounded-3xl border border-border bg-card p-8">

            <h2 className="font-display text-2xl">
              Informação importante
            </h2>

            <br />

            <p className="leading-8 text-muted-foreground">

              O conteúdo desta página possui finalidade exclusivamente
              informativa e educativa. Nenhuma informação aqui apresentada
              substitui avaliação médica individualizada.

            </p>

            <br />

            <p className="leading-8 text-muted-foreground">

              A indicação de exames, medicamentos, afastamentos, emissão de
              documentos médicos ou encaminhamentos depende exclusivamente da
              avaliação realizada pelo profissional durante a consulta.

            </p>

            <br />

            <p className="leading-8 text-muted-foreground">

              Em situações de urgência ou emergência, procure imediatamente um
              serviço de atendimento presencial.

            </p>

          </div>

        </section>



      


        {/* ==========================================================
            CHAMADA FINAL
        ========================================================== */}

        <section className="mt-24">

          <div className="rounded-[32px] border border-lilac/20 bg-gradient-to-br from-white to-lilac/10 p-12">

            <div className="mx-auto max-w-3xl text-center">

              <span className="rounded-full bg-lilac/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lilac">

                Tecnologia que aproxima. Cuidado que transforma.

              </span>

              <h2 className="mt-8 font-display text-5xl leading-tight">

                Sua saúde merece atenção no momento em que você precisa.

              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-muted-foreground">

                Agende sua consulta médica online e receba atendimento
                humanizado, seguro e realizado por profissionais habilitados,
                diretamente do conforto da sua casa.

              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-azure-deep px-10 py-5 text-lg font-semibold text-white transition hover:scale-105"
              >

                <MessageCircle className="h-6 w-6" />

                Agendar agora

              </a>

            </div>

          </div>

        </section>

          
        </div>

      </article>

      <Footer />

    </div>

  );

}

export default TeleconsultaOnline;


          
          
          
          

          





          
