import { createFileRoute, Link } from "@tanstack/react-router";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";
import { ASAS } from "@/lib/config";

import {
  ArrowLeft,
  MessageCircle,
  Clock,
  Heart,
  ShieldCheck,
  Check,
  Share2,
  Facebook,
  Linkedin,
  Calendar,
  Home,
  Zap,
  Users,
  Activity,
  Scale,
  Apple,
  Dumbbell,
  Stethoscope,
} from "lucide-react";

import asasLogo from "@/assets/asas-logo.jpeg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = ASAS.whatsapp;

const CANONICAL =
  "https://www.asastelemedicina.com.br/emagrecimento-saudavel";

const PUBLISHED = "2026-07-19";

const UPDATED = "2026-07-19";

const TITLE =
  "Emagrecimento Saudável: Como Funciona o Tratamento da Obesidade?";

const DESCRIPTION =
  "Entenda como funciona o tratamento da obesidade, quando medicamentos podem ser indicados, como a alimentação, atividade física e acompanhamento médico fazem parte do tratamento e esclareça as principais dúvidas sobre emagrecimento saudável.";


const faqs = [
  {
    q: "O que é obesidade?",
    a: "A obesidade é uma doença crônica caracterizada pelo excesso de gordura corporal que pode aumentar o risco de diversas doenças e reduzir a qualidade de vida.",
  },

  {
    q: "Como funciona o tratamento da obesidade?",
    a: "O tratamento é individualizado e pode envolver mudanças no estilo de vida, atividade física, alimentação, medicamentos e, em alguns casos, cirurgia bariátrica.",
  },

  {
    q: "Todo paciente precisa tomar remédio para emagrecer?",
    a: "Não. A indicação depende da avaliação médica, do grau de obesidade, das doenças associadas e dos objetivos do tratamento.",
  },

  {
    q: "Semaglutida emagrece?",
    a: "A semaglutida pode fazer parte do tratamento da obesidade quando houver indicação médica, sempre associada a mudanças no estilo de vida.",
  },

  {
    q: "Tirzepatida é melhor que semaglutida?",
    a: "Os dois medicamentos possuem características diferentes. A escolha depende da avaliação individual de cada paciente.",
  },

  {
    q: "Quanto peso é saudável perder por mês?",
    a: "A velocidade da perda de peso varia entre as pessoas. Em geral, o objetivo é emagrecer de forma gradual e sustentável.",
  },

  {
    q: "Obesidade tem cura?",
    a: "A obesidade é considerada uma doença crônica. Embora seja possível alcançar excelente controle, geralmente o acompanhamento precisa ser contínuo.",
  },

  {
    q: "A consulta pode ser realizada por telemedicina?",
    a: "Sim. A telemedicina permite avaliação, acompanhamento, solicitação de exames, prescrição de medicamentos quando indicados e orientação médica conforme a legislação vigente.",
  },

  {
    q: "Posso fazer acompanhamento mesmo morando em outra cidade?",
    a: "Sim. A consulta online facilita o acompanhamento de pacientes em diferentes regiões do Brasil.",
  },

  {
    q: "Como agendar uma consulta?",
    a: "O agendamento pode ser realizado diretamente pelo WhatsApp da ASAS Telemedicina."
  }
];



const toc = [

  {
    id: "oquee",
    label: "O que é obesidade?"
  },

  {
    id: "tratamento",
    label: "Como funciona o tratamento da obesidade?"
  },

  {
    id: "opcoes",
    label: "Quais são os tratamentos para obesidade?"
  },

  {
    id: "alimentacao",
    label: "Como a alimentação ajuda no tratamento?"
  },

  {
    id: "atividade",
    label: "A atividade física é obrigatória para emagrecer?"
  },

  {
    id: "semaglutida",
    label: "Como a semaglutida funciona para emagrecer?"
  },

  {
    id: "tirzepatida",
    label: "Como a tirzepatida funciona para emagrecer?"
  },

  {
    id: "retatrutida",
    label: "O que é a retatrutida?"
  },

  {
    id: "acompanhamento",
    label: "Por que o acompanhamento médico faz diferença?"
  },

  {
    id: "rapidamente",
    label: "Emagrecer muito rápido faz mal?"
  },

  {
    id: "sus",
    label: "Como funciona o tratamento pelo SUS?"
  },

  {
    id: "importacao",
    label: "Posso importar medicamentos para uso próprio?"
  },

  {
    id: "faq",
    label: "Perguntas frequentes"
  },

  {
    id: "conclusao",
    label: "Conclusão"
  }

];


export const Route = createFileRoute("/emagrecimento-saudavel")({
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
          "obesidade, tratamento da obesidade, emagrecimento saudável, semaglutida, tirzepatida, retatrutida, emagrecer com acompanhamento médico, consulta para emagrecimento, telemedicina, perda de peso",
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
        content: "ASAS Telemedicina",
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
          articleSection: "Emagrecimento",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": CANONICAL,
          },
          author: {
            "@type": "Organization",
            name: "ASAS Telemedicina",
          },
          publisher: {
            "@type": "Organization",
            name: "ASAS Telemedicina",
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
              name: "Central de Saúde",
              item: "https://www.asastelemedicina.com.br/central-de-saude",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Emagrecimento Saudável",
              item: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),

  component: EmagrecimentoSaudavel,
});

function EmagrecimentoSaudavel() {
  const shareText = encodeURIComponent(
    `${TITLE} • ASAS Telemedicina`
  );

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
                Central de Saúde
              </Link>

            </li>

            <li>›</li>

            <li className="text-foreground">
              Emagrecimento Saudável
            </li>

          </ol>

        </nav>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">

          <span className="text-lilac">
            Emagrecimento
          </span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">

            <Clock className="h-3 w-3" />

            12 min de leitura

          </span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">

            <Calendar className="h-3 w-3" />

            <time dateTime={PUBLISHED}>
              Publicado em 19 jul 2026
            </time>

          </span>

        </div>

        <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">

          Emagrecimento <em className="not-italic text-azure-deep">
            Saudável
          </em>: como funciona o tratamento da obesidade?

        </h1>

        <p className="mt-6 text-lg text-muted-foreground">

          Se você procura informações sobre <strong>como tratar a obesidade</strong>,
          quando medicamentos podem ser indicados, quais hábitos realmente ajudam
          no emagrecimento e como funciona o acompanhamento médico, este guia foi
          preparado para responder às principais dúvidas de forma simples,
          baseada em evidências científicas e na prática clínica.

        </p>

        <p className="mt-2 text-xs text-muted-foreground">

          Por <strong>ASAS Telemedicina</strong> • Atualizado em

          <time dateTime={UPDATED}>
            {" "}19 de julho de 2026
          </time>

        </p>

        <aside className="mt-10 rounded-2xl border border-border bg-card p-6">

          <p className="text-xs uppercase tracking-widest text-lilac">

            Neste artigo

          </p>

          <ol className="mt-4 space-y-3 text-sm">

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



                    <section id="oquee" className="scroll-mt-24">

            <div className="mb-6 flex items-center gap-3">

              <Scale className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                O que é obesidade?
              </h2>

            </div>

            <p>

              A <strong>obesidade</strong> é uma doença crônica caracterizada
              pelo acúmulo excessivo de gordura corporal em quantidade suficiente
              para aumentar o risco de problemas de saúde. Ela não representa
              apenas uma questão estética, mas uma condição médica reconhecida
              pela Organização Mundial da Saúde (OMS) e pelas principais
              sociedades científicas do mundo.

            </p>
<br />
            <p>

              O excesso de gordura corporal favorece alterações hormonais,
              inflamação crônica de baixo grau e resistência à insulina,
              aumentando significativamente o risco de doenças cardiovasculares,
              diabetes tipo 2, hipertensão arterial, apneia do sono,
              esteatose hepática (gordura no fígado), infertilidade,
              osteoartrose e alguns tipos de câncer.

            </p>
<br />
            <p>

              Embora o <strong>Índice de Massa Corporal (IMC)</strong> seja uma
              ferramenta amplamente utilizada para classificação da obesidade,
              ele não avalia sozinho a composição corporal nem a distribuição da
              gordura. Por isso, durante a consulta médica também podem ser
              avaliadas medidas como circunferência abdominal, histórico
              clínico, exames laboratoriais e presença de doenças associadas.

            </p>

            <div className="my-8 rounded-2xl border border-lilac/20 bg-lilac/5 p-6">

              <h3 className="font-semibold text-lg">
                Como é calculado o IMC?
              </h3>

              <p className="mt-3">

                O IMC é calculado dividindo o peso (em quilogramas)
                pela altura (em metros) elevada ao quadrado.

              </p>

              <div className="mt-4 rounded-xl bg-background p-4 text-center">

                <p className="font-mono text-2xl font-bold">

                  IMC = Peso ÷ Altura²

                </p>

              </div>

              <div className="mt-6 overflow-x-auto">

                <table className="w-full text-left text-sm">

                  <thead>

                    <tr className="border-b">

                      <th className="py-2">IMC</th>
                      <th className="py-2">Classificação</th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="border-b">
                      <td className="py-2">&lt; 18,5</td>
                      <td className="py-2">Baixo peso</td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-2">18,5–24,9</td>
                      <td className="py-2">Peso adequado</td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-2">25–29,9</td>
                      <td className="py-2">Sobrepeso</td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-2">30–34,9</td>
                      <td className="py-2">Obesidade Grau I</td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-2">35–39,9</td>
                      <td className="py-2">Obesidade Grau II</td>
                    </tr>

                    <tr>
                      <td className="py-2">≥ 40</td>
                      <td className="py-2">Obesidade Grau III</td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </section>

          <section id="tratamento" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Heart className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Como funciona o tratamento da obesidade?
              </h2>

            </div>

            <p>

              O tratamento da obesidade é individualizado. Isso significa que
              não existe uma estratégia única capaz de funcionar para todas as pessoas. Cada paciente possui características metabólicas,
              hormonais, emocionais e comportamentais próprias que precisam ser
              consideradas durante a avaliação médica.

            </p>
<br />
            <p>

              O objetivo do tratamento não é apenas reduzir o número mostrado
              pela balança, mas melhorar a saúde como um todo, reduzir o risco
              de complicações e promover uma perda de peso sustentável ao longo
              dos anos.

            </p>
<br />
            <p>

              Durante a consulta médica são avaliados diversos fatores, como:

            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl border p-5">

                <Users className="mb-3 h-7 w-7 text-lilac" />

                <h3 className="font-semibold">
                  Histórico clínico
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Doenças prévias, uso de medicamentos,
                  ganho de peso ao longo da vida,
                  histórico familiar e hábitos cotidianos.

                </p>

              </div>

              <div className="rounded-xl border p-5">

                <Activity className="mb-3 h-7 w-7 text-lilac" />

                <h3 className="font-semibold">
                  Exames laboratoriais
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Glicemia, colesterol, função hepática,
                  função tireoidiana e outros exames
                  quando houver indicação clínica.

                </p>

              </div>

              <div className="rounded-xl border p-5">

                <Apple className="mb-3 h-7 w-7 text-lilac" />

                <h3 className="font-semibold">
                  Alimentação
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Avaliação dos hábitos alimentares,
                  rotina de refeições e fatores que
                  favorecem o ganho de peso.

                </p>

              </div>

              <div className="rounded-xl border p-5">

                <Dumbbell className="mb-3 h-7 w-7 text-lilac" />

                <h3 className="font-semibold">
                  Atividade física
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Nível atual de atividade,
                  limitações físicas,
                  dores articulares e condicionamento.

                </p>

              </div>

            </div>

            <div className="mt-10 rounded-2xl bg-azure-deep p-8 text-white">

              <div className="flex items-start gap-4">

                <ShieldCheck className="mt-1 h-8 w-8 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold">

                    O objetivo não é apenas emagrecer.

                  </h3>

                  <p className="mt-4 leading-relaxed text-white/90">

                    O sucesso do tratamento é medido pela melhora da saúde,
                    controle das doenças associadas, preservação da massa
                    muscular, melhora da qualidade de vida e manutenção dos
                    resultados a longo prazo.

                  </p>

                </div>

              </div>

            </div>



                      </section>

          <section id="opcoes" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Zap className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Quais são os tratamentos para obesidade?
              </h2>

            </div>

            <p>

              Atualmente existem diversas estratégias para o tratamento da
              obesidade. A escolha depende da avaliação médica, da presença de
              doenças associadas, do IMC, dos hábitos de vida, dos objetivos do
              paciente e da resposta obtida durante o acompanhamento.

            </p>
<br />
            <p>

              Em muitos casos, diferentes abordagens são utilizadas de forma
              combinada para aumentar as chances de sucesso e reduzir o risco de
              recuperação do peso perdido.

            </p>

            <div className="mt-8 space-y-6">

              <div className="rounded-2xl border p-6">

                <div className="flex items-center gap-3">

                  <Apple className="h-7 w-7 text-lilac" />

                  <h3 className="text-xl font-semibold">
                    Alimentação individualizada
                  </h3>

                </div>

                <p className="mt-4">

                  Não existe uma dieta ideal para todas as pessoas. O plano
                  alimentar deve considerar rotina, preferências, condições de
                  saúde, medicamentos utilizados e possibilidade de manutenção
                  ao longo do tempo.

                </p>

              </div>

              <div className="rounded-2xl border p-6">

                <div className="flex items-center gap-3">

                  <Dumbbell className="h-7 w-7 text-lilac" />

                  <h3 className="text-xl font-semibold">
                    Exercício físico
                  </h3>

                </div>

                <p className="mt-4">

                  A atividade física contribui para aumentar o gasto energético,
                  preservar massa muscular, melhorar o condicionamento
                  cardiorrespiratório e reduzir o risco de diversas doenças
                  crônicas.

                </p>

              </div>

              <div className="rounded-2xl border p-6">

                <div className="flex items-center gap-3">

                  <Stethoscope className="h-7 w-7 text-lilac" />

                  <h3 className="text-xl font-semibold">
                    Medicamentos
                  </h3>

                </div>

                <p className="mt-4">

                  Alguns pacientes podem se beneficiar do uso de medicamentos
                  para auxiliar no tratamento da obesidade. A indicação depende
                  de critérios clínicos e deve sempre ser realizada após
                  avaliação médica.

                </p>

              </div>

              <div className="rounded-2xl border p-6">

                <div className="flex items-center gap-3">

                  <Heart className="h-7 w-7 text-lilac" />

                  <h3 className="text-xl font-semibold">
                    Mudança de comportamento
                  </h3>

                </div>

                <p className="mt-4">

                  Dormir melhor, reduzir o sedentarismo, controlar episódios de
                  compulsão alimentar e desenvolver hábitos sustentáveis fazem
                  parte do tratamento da obesidade.

                </p>

              </div>

              <div className="rounded-2xl border p-6">

                <div className="flex items-center gap-3">

                  <ShieldCheck className="h-7 w-7 text-lilac" />

                  <h3 className="text-xl font-semibold">
                    Cirurgia bariátrica
                  </h3>

                </div>

                <p className="mt-4">

                  Em pacientes selecionados, a cirurgia bariátrica pode ser uma
                  alternativa eficaz quando o tratamento clínico isolado não
                  proporciona os resultados esperados e existem critérios
                  técnicos para sua indicação.

                </p>

              </div>

            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-lilac to-azure-deep p-8 text-white">

              <h3 className="text-3xl font-display">

                O tratamento funciona melhor quando existe acompanhamento.

              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/90">

                O acompanhamento médico permite identificar dificuldades, ajustar estratégias,
  solicitar exames quando necessário e acompanhar sua evolução de forma segura.
  E o melhor: você pode fazer tudo isso sem sair de casa. Na ASAS Telemedicina,
  a consulta é realizada por videochamada, diretamente pelo celular, tablet ou
  computador, proporcionando praticidade, conforto e economia de tempo, onde
  você estiver.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-azure-deep transition hover:scale-[1.02]"
                >

                  <MessageCircle className="h-5 w-5" />

                  Agendar consulta

                </a>

                <Link
                  to="/o-que-e-teleconsulta"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >

                  Saiba como funciona uma teleconsulta

                </Link>

              </div>

            </div>

          </section>

          <section id="alimentacao" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Apple className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Como a alimentação ajuda no tratamento?
              </h2>

            </div>

            <p>

              A alimentação é um dos pilares do tratamento da obesidade.
              Entretanto, isso não significa fazer dietas extremamente
              restritivas ou eliminar completamente determinados alimentos.

            </p>
<br />
            <p>

              O objetivo é construir um padrão alimentar que seja equilibrado,
              nutritivo e possível de ser mantido por muitos anos. Dietas muito
              restritivas costumam produzir perda rápida de peso inicialmente,
              porém apresentam maior risco de abandono e recuperação do peso.

            </p>
<br />
            <p>

              Uma alimentação adequada normalmente prioriza alimentos in natura
              ou minimamente processados, proteínas de boa qualidade, fibras,
              frutas, verduras, legumes e hidratação adequada, reduzindo o
              consumo frequente de alimentos ultraprocessados e bebidas
              açucaradas.

            </p>

            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">

              <h3 className="text-xl font-semibold text-green-900">

                Uma alimentação saudável não precisa ser perfeita.

              </h3>

              <p className="mt-3 text-green-800">

                O tratamento da obesidade busca mudanças consistentes e
                sustentáveis. Pequenas melhorias mantidas ao longo do tempo
                costumam produzir resultados mais duradouros do que mudanças
                radicais por poucos dias.

              </p>

            </div>


                      </section>

          <section id="atividade" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Dumbbell className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                A atividade física é obrigatória para emagrecer?
              </h2>

            </div>

            <p>

              A atividade física é uma das ferramentas mais importantes no
              tratamento da obesidade, porém o emagrecimento não depende
              exclusivamente dela. Muitas pessoas conseguem perder peso antes
              mesmo de iniciar um programa regular de exercícios quando há
              mudanças consistentes na alimentação e no estilo de vida.

            </p>
<br />
            <p>

              Apesar disso, o exercício físico oferece benefícios que vão muito
              além da balança. Ele ajuda a preservar a massa muscular durante a
              perda de peso, melhora o condicionamento cardiorrespiratório,
              reduz a pressão arterial, melhora o controle da glicemia,
              favorece a saúde mental e diminui o risco de recuperação do peso
              perdido.

            </p>
<br />
            <p>

              O ideal é escolher uma atividade que seja compatível com sua
              rotina e que possa ser mantida ao longo do tempo. Caminhadas,
              musculação, bicicleta, natação, dança e outras modalidades podem
              fazer parte do tratamento quando respeitam as condições clínicas
              de cada paciente.

            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">

              <h3 className="text-xl font-semibold">

                Não existe exercício "milagroso".

              </h3>

              <p className="mt-3">

                O melhor exercício é aquele que você consegue praticar com
                regularidade. A consistência costuma produzir resultados muito
                mais importantes do que treinos extremamente intensos realizados
                apenas por alguns dias.

              </p>

            </div>

          </section>

          <section id="semaglutida" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Stethoscope className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Como a semaglutida funciona para emagrecer?
              </h2>

            </div>

            <p>

              A semaglutida pertence à classe dos agonistas do receptor do
              GLP-1, um hormônio produzido naturalmente pelo organismo que
              participa do controle do apetite e da glicemia.

            </p>
<br />
            <p>

              Esse medicamento pode aumentar a sensação de saciedade, reduzir a
              fome e retardar o esvaziamento do estômago, fazendo com que muitas
              pessoas consigam reduzir espontaneamente a quantidade de alimentos
              ingeridos ao longo do dia.

            </p>
<br />
            <p>

              Entretanto, a semaglutida não elimina a necessidade de mudanças
              no estilo de vida. Os melhores resultados costumam ocorrer quando
              o medicamento é associado à alimentação equilibrada, atividade
              física e acompanhamento médico regular.

            </p>

            <div className="my-8 rounded-2xl border border-lilac/20 bg-lilac/5 p-6">

              <h3 className="text-xl font-semibold">

                Quem pode utilizar?

              </h3>

              <p className="mt-4">

                A indicação depende da avaliação médica. São considerados fatores
                como IMC, presença de diabetes, hipertensão, apneia do sono,
                doenças cardiovasculares, tentativas anteriores de tratamento e
                possíveis contraindicações.

              </p>

            </div>

            <div className="my-8 rounded-2xl border border-amber-300 bg-amber-50 p-6">

              <h3 className="text-xl font-semibold text-amber-900">

                Atenção

              </h3>

              <p className="mt-3 text-amber-800">

                Nem toda pessoa com sobrepeso necessita de medicação. Da mesma
                forma, nem toda pessoa com obesidade utilizará o mesmo
                medicamento. A escolha deve ser individualizada e realizada por
                um médico.

              </p>

            </div>

            <div className="rounded-3xl bg-gradient-to-r from-azure-deep to-lilac p-8 text-white">

              <h3 className="font-display text-3xl">

                Quer saber qual tratamento pode ser indicado para o seu caso?

              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/90">

                Durante a consulta são avaliados seu histórico clínico,
                exames, peso, doenças associadas e objetivos para definir a
                estratégia terapêutica mais adequada.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-azure-deep transition hover:scale-[1.02]"
                >

                  <MessageCircle className="h-5 w-5" />

                  Agendar avaliação

                </a>

                <Link
                  to="/o-que-e-teleconsulta"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >

                  Conheça a teleconsulta

                </Link>

              </div>

            </div>


                      </section>

          <section id="tirzepatida" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Stethoscope className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Como a tirzepatida funciona para emagrecer?
              </h2>

            </div>

            <p>

              A tirzepatida é um medicamento utilizado no tratamento do diabetes
              tipo 2 e da obesidade em situações específicas. Seu mecanismo de
              ação combina a ativação dos receptores dos hormônios <strong>GIP</strong>
              e <strong>GLP-1</strong>, envolvidos no controle do apetite, da
              saciedade e do metabolismo da glicose.

            </p>
<br />
            <p>

              Essa ação pode reduzir significativamente a sensação de fome,
              aumentar a saciedade após as refeições e diminuir a ingestão
              calórica espontaneamente. Além disso, muitas pessoas apresentam
              melhora do controle glicêmico, fator importante principalmente
              para pacientes com diabetes ou resistência à insulina.

            </p>
<br />
            <p>

              Assim como ocorre com outros medicamentos para obesidade, a
              tirzepatida não substitui alimentação adequada nem atividade
              física. Ela faz parte de um tratamento mais amplo, conduzido por
              acompanhamento médico periódico.

            </p>

            <div className="my-8 rounded-2xl border border-border bg-card p-6">

              <h3 className="text-xl font-semibold">

                A tirzepatida é indicada para qualquer pessoa?

              </h3>

              <p className="mt-4">

                Não. A indicação depende de critérios clínicos definidos após
                consulta médica. Histórico de doenças, IMC, medicamentos em uso,
                exames laboratoriais e possíveis contraindicações precisam ser
                avaliados individualmente.

              </p>

            </div>

          </section>

          <section id="retatrutida" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Zap className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                O que é a retatrutida?
              </h2>

            </div>

            <p>

              A retatrutida é um medicamento ainda em processo de incorporação
              terapêutica em diversos países e tem despertado interesse devido
              aos resultados observados em estudos clínicos para tratamento da
              obesidade.

            </p>

            <p>

              Diferentemente da semaglutida e da tirzepatida, a retatrutida atua
              simultaneamente em três receptores hormonais relacionados ao
              metabolismo energético: <strong>GLP-1</strong>,
              <strong> GIP</strong> e <strong>glucagon</strong>.

            </p>

            <p>

              Essa combinação busca potencializar o controle do apetite,
              aumentar o gasto energético e favorecer perdas de peso
              significativas quando associada às mudanças no estilo de vida.

            </p>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

              <h3 className="text-xl font-semibold text-blue-900">

                Importante

              </h3>

              <p className="mt-3 text-blue-800">

                Como qualquer tecnologia em saúde, a disponibilidade da
                retatrutida depende das aprovações regulatórias vigentes e da
                avaliação médica individualizada e até a data do presente artigo, a substância ainda não foi aprovada para uso humano em nenhum país do mundo.

              </p>

            </div>

          </section>

          <section id="acompanhamento" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Heart className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Por que o acompanhamento médico faz diferença?
              </h2>

            </div>

            <p>

              Um dos principais motivos para recuperação do peso perdido é a
              interrupção precoce do acompanhamento. A obesidade é considerada
              uma doença crônica e, assim como ocorre com hipertensão ou
              diabetes, frequentemente necessita de acompanhamento contínuo.

            </p>
<br />
            <p>

              Durante as consultas é possível avaliar resultados, identificar
              dificuldades, ajustar metas, solicitar exames quando necessário e
              adaptar o tratamento conforme a evolução clínica.

            </p>
<br />
            <p>

              Em alguns momentos pode ser necessário intensificar mudanças no
              estilo de vida. Em outros, medicamentos podem ser iniciados,
              ajustados ou suspensos conforme a resposta do organismo.

            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl border p-5">

                <Check className="mb-3 h-6 w-6 text-lilac" />

                <h3 className="font-semibold">

                  Avaliação contínua

                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  O tratamento acompanha as mudanças do organismo ao longo do
                  tempo.

                </p>

              </div>

              <div className="rounded-xl border p-5">

                <Check className="mb-3 h-6 w-6 text-lilac" />

                <h3 className="font-semibold">

                  Ajustes individualizados

                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Estratégias podem ser modificadas conforme a evolução clínica.

                </p>

              </div>

              <div className="rounded-xl border p-5">

                <Check className="mb-3 h-6 w-6 text-lilac" />

                <h3 className="font-semibold">

                  Maior segurança

                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Monitoramento de efeitos adversos, exames e doenças
                  associadas.

                </p>

              </div>

              <div className="rounded-xl border p-5">

                <Check className="mb-3 h-6 w-6 text-lilac" />

                <h3 className="font-semibold">

                  Resultados sustentáveis

                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  O foco é manter a perda de peso e melhorar a saúde no longo
                  prazo.

                </p>

              </div>

            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-lilac via-azure-deep to-lilac p-8 text-white">

              <h3 className="font-display text-3xl">

                Cuidar da obesidade é investir na saúde futura.

              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/90">

                Quanto mais cedo o tratamento é iniciado, maiores são as chances
                de prevenir complicações, melhorar a qualidade de vida e reduzir
                o risco de doenças cardiovasculares, diabetes e outras condições
                relacionadas ao excesso de peso.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-azure-deep transition hover:scale-[1.02]"
                >

                  <MessageCircle className="h-5 w-5" />

                  Falar com a ASAS

                </a>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >

                  Conhecer a ASAS

                </Link>

              </div>

            </div>


                      </section>

          <section id="rapidamente" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Activity className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Emagrecer muito rápido faz mal?
              </h2>

            </div>

            <p>

              Em muitos casos, perder peso rapidamente pode aumentar o risco de
              perda de massa muscular, deficiência de vitaminas e minerais,
              desidratação, formação de cálculos na vesícula e maior dificuldade
              para manter os resultados obtidos.

            </p>
<br />
            <p>

              Entretanto, a velocidade da perda de peso varia conforme o
              tratamento adotado, as características individuais e as doenças
              associadas. Por isso, não existe um único número considerado ideal
              para todos os pacientes.

            </p>
<br />
            <p>

              O objetivo do tratamento é promover uma redução de peso segura,
              preservando a massa muscular, melhorando a saúde metabólica e
              favorecendo resultados sustentáveis ao longo do tempo.

            </p>

            <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-6">

              <h3 className="text-xl font-semibold text-amber-900">

                Cuidado com promessas de emagrecimento rápido.

              </h3>

              <p className="mt-3 text-amber-800">

                Dietas extremamente restritivas, medicamentos utilizados sem
                orientação médica e produtos sem comprovação científica podem
                colocar a saúde em risco e favorecer o chamado "efeito sanfona".

              </p>

            </div>

          </section>

          <section id="sus" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Home className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Como funciona o tratamento da obesidade pelo SUS?
              </h2>

            </div>

            <p>

              O Sistema Único de Saúde (SUS) oferece atendimento para pessoas
              com obesidade por meio da Atenção Primária, ambulatórios
              especializados e serviços hospitalares de referência, conforme a
              necessidade clínica de cada paciente.

            </p>
<br />
            <p>

              O tratamento geralmente começa na Unidade Básica de Saúde (UBS),
              onde podem ser realizadas avaliação clínica, orientação alimentar,
              incentivo à atividade física, solicitação de exames e
              encaminhamento para especialistas quando indicado.

            </p>
<br />
            <p>

              Em situações específicas, pacientes que preenchem critérios
              clínicos podem ser encaminhados para programas especializados,
              inclusive avaliação para cirurgia bariátrica.

            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">

              <h3 className="text-xl font-semibold">

                O SUS fornece medicamentos para emagrecimento?

              </h3>

              <p className="mt-4">

                A disponibilidade de medicamentos depende das políticas públicas
                vigentes, protocolos clínicos e programas existentes em cada
                período. A indicação terapêutica sempre deve ser realizada por
                um profissional habilitado.

              </p>

            </div>

          </section>

          <section id="importacao" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <ShieldCheck className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Posso importar medicamentos do exterior para uso próprio?
              </h2>

            </div>

            <p>

              Sim. A importação de medicamentos para uso próprio é permitida,
              desde que sejam observadas as normas sanitárias brasileiras. O
              procedimento é regulamentado pela Agência Nacional de Vigilância
              Sanitária (Anvisa) e, em regra, exige prescrição médica compatível
              com o tratamento indicado, além do cumprimento dos demais
              requisitos legais aplicáveis.

            </p>

            <br />

            <p>

              Um requisito essencial é a apresentação de receita médica emitida
              por profissional legalmente habilitado. Entretanto, uma dúvida
              bastante comum diz respeito aos prazos de <strong>90 dias</strong>
              e <strong>180 dias</strong>, que possuem significados distintos na
              legislação sanitária.

            </p>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">

              <h3 className="text-xl font-semibold text-blue-900">
                Qual a diferença entre os prazos de 90 e 180 dias?
              </h3>

              <p className="mt-4 text-blue-800">

                Embora muitas pessoas confundam esses prazos, eles tratam de
                situações diferentes previstas em normas da Anvisa.

              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-blue-800">

                <li>

                  <strong>Validade da receita médica:</strong> a
                  <strong> Instrução Normativa Anvisa nº 360/2025</strong>, em
                  seu <strong>art. 2º, § 1º</strong>, estabelece que a receita
                  médica é válida por <strong>90 (noventa) dias</strong>,
                  contados da data de sua emissão.

                </li>

                <li>

                  <strong>Período máximo de tratamento:</strong> a
                  <strong> RDC Anvisa nº 81/2008</strong>, em seu
                  <strong> Capítulo XXXVIII, item 4, alínea "b"</strong>, com
                  redação dada pela <strong>RDC Anvisa nº 28/2011</strong>,
                  prevê que, para medicamentos de uso contínuo, a prescrição
                  pode abranger tratamento de até
                  <strong> 180 (cento e oitenta) dias</strong>, limite máximo
                  aceito para a importação destinada ao uso próprio.

                </li>

              </ul>

              <div className="mt-5 rounded-xl bg-white/70 p-4 text-blue-900">

                <strong>Em resumo:</strong>

                <br />

                • <strong>90 dias</strong> = validade da receita médica.

                <br />

                • <strong>180 dias</strong> = período máximo de tratamento que
                pode constar na prescrição para fins de importação de
                medicamento para uso próprio.

              </div>

            </div>

            <br />

            <p>

              Além dos prazos previstos na regulamentação, a prescrição deve
              conter a identificação do paciente, do prescritor, o nome do
              medicamento, a posologia, o modo de uso e as demais informações
              necessárias para individualizar o tratamento. A quantidade
              importada deve ser compatível com a duração do tratamento
              prescrita pelo médico, observado o limite regulamentar de até
              180 dias para medicamentos de uso contínuo.

            </p>

            <br />

            <p>

              Antes de adquirir um medicamento no exterior, é importante
              verificar se sua importação é permitida nas condições vigentes,
              quais documentos são exigidos e quais restrições podem ser
              aplicáveis. Também devem ser observados aspectos relacionados ao
              transporte, conservação, autenticidade do produto e segurança do
              paciente. A aquisição por canais não autorizados ou sem a
              documentação adequada pode resultar na retenção ou devolução da
              mercadoria, além de representar riscos importantes à saúde.

            </p>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">

              <h3 className="text-xl font-semibold text-blue-900">

                Importante

              </h3>

              <p className="mt-3 text-blue-800">

                As regras sobre importação de medicamentos podem ser alteradas
                pela Anvisa a qualquer momento. Antes de realizar uma compra
                internacional, consulte sempre a regulamentação vigente e
                obtenha orientação do seu médico para verificar se o tratamento
                é indicado e se toda a documentação exigida está em conformidade
                com a legislação aplicável.

              </p>

            </div>

          </section>

          <section id="faq" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <MessageCircle className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">

                Perguntas frequentes

              </h2>

            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
            >

              {faqs.map((faq, index) => (

                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                >

                  <AccordionTrigger>

                    {faq.q}

                  </AccordionTrigger>

                  <AccordionContent>

                    <p className="leading-relaxed">

                      {faq.a}

                    </p>

                  </AccordionContent>

                </AccordionItem>

              ))}

            </Accordion>

          </section>



                    <section id="conclusao" className="scroll-mt-24 pt-14">

            <div className="mb-6 flex items-center gap-3">

              <Heart className="h-8 w-8 text-lilac" />

              <h2 className="font-display text-3xl">
                Conclusão
              </h2>

            </div>

            <p>

              A obesidade é uma doença crônica e multifatorial que merece
              tratamento baseado em evidências científicas. Não existe solução
              única ou fórmula capaz de funcionar para todas as pessoas.

            </p>

            <p>

              Alimentação equilibrada, atividade física, mudanças de hábitos,
              acompanhamento médico e, quando indicado, medicamentos podem fazer
              parte de uma estratégia personalizada para promover perda de peso
              sustentável e melhora da qualidade de vida.

            </p>

            <p>

              Quanto mais precoce for o início do tratamento, maiores são as
              chances de prevenir complicações relacionadas ao excesso de peso e
              alcançar resultados duradouros.

            </p>

          </section>

          <section className="mt-16">

            <div className="rounded-3xl bg-gradient-to-r from-lilac via-azure-deep to-lilac p-10 text-center text-white">

              <h2 className="font-display text-4xl">

                Agende sua consulta online

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">

                Na ASAS Telemedicina você recebe atendimento médico por
                teleconsulta, com avaliação individualizada, acompanhamento,
                solicitação de exames quando indicados e definição da melhor
                estratégia para o tratamento da obesidade conforme o seu caso.

              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-azure-deep transition hover:scale-[1.02]"
                >

                  <MessageCircle className="h-5 w-5" />

                  Agendar pelo WhatsApp

                </a>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                >

                  Conhecer a ASAS

                </Link>

              </div>

            </div>

          </section>

          <section className="mt-20">

            <h2 className="font-display text-3xl">

              Continue aprendendo

            </h2>

            <p className="mt-3 text-muted-foreground">

              Confira outros conteúdos da Central de Saúde da ASAS
              Telemedicina.

            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <Link
                to="/psiquiatra-online"
                className="group rounded-2xl border p-6 transition hover:border-lilac hover:shadow-lg"
              >

                <h3 className="text-xl font-semibold group-hover:text-lilac">

                  Psiquiatra Online

                </h3>

                <p className="mt-3 text-sm text-muted-foreground">

                  Saiba quando procurar atendimento em saúde mental,
                  como funciona a consulta e quais condições podem ser
                  acompanhadas por telemedicina.

                </p>

              </Link>

              <Link
                to="/telemedicina"
                className="group rounded-2xl border p-6 transition hover:border-lilac hover:shadow-lg"
              >

                <h3 className="text-xl font-semibold group-hover:text-lilac">

                  Como funciona a telemedicina?

                </h3>

                <p className="mt-3 text-sm text-muted-foreground">

                  Tire suas dúvidas sobre consultas online, receitas,
                  atestados, exames e segurança do atendimento médico
                  remoto.

                </p>

              </Link>

              <Link
                to="/central-de-saude"
                className="group rounded-2xl border p-6 transition hover:border-lilac hover:shadow-lg"
              >

                <h3 className="text-xl font-semibold group-hover:text-lilac">

                  Central de Saúde

                </h3>

                <p className="mt-3 text-sm text-muted-foreground">

                  Explore outros artigos produzidos pela equipe da ASAS
                  Telemedicina com informações confiáveis e linguagem
                  acessível.

                </p>

              </Link>

            </div>

          </section>

        </div>

      </article>

    
      <Footer />
      <FloatingWhatsapp />
    </div>

  );

}





