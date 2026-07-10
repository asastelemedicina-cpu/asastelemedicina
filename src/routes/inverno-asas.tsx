import { createFileRoute, Link } from "@tanstack/react-router";

import winterHero from "@/assets/winter-hero.webp";
import winterLogo from "@/assets/asas-logo-winter.webp";

import {
  Brain,
  Scale,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Snowflake,
  MessageCircle,
  Check,
  CalendarDays,
  ArrowRight,
  FileText,
  Activity,
  Moon,
  Dumbbell,
  Wind,
  ThermometerSnowflake,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/inverno-asas")({
  head: () => ({
    meta: [
      {
        title:
          "Iniciativa ❄️ Inverno ASAS – Estação do Cuidado | Teleconsulta, Psiquiatria, Emagrecimento e Renovação de Receitas",
      },
      {
        name: "description",
        content:
          "Conheça a Iniciativa ❄️ Inverno ASAS – Estação do Cuidado. Mais acesso à teleconsulta médica durante o inverno, com acompanhamento em saúde mental, emagrecimento saudável, renovação de receitas quando indicada e outras áreas médicas.",
      },
      {
        name: "keywords",
        content:
          "teleconsulta, telemedicina, psiquiatria online, ansiedade, depressão, saúde mental, emagrecimento saudável, obesidade, diabetes, hipertensão, renovação de receitas, consulta online, inverno asas, asas telemedicina",
      },
      {
        property: "og:title",
        content:
          "❄️ Iniciativa Inverno ASAS – Estação do Cuidado",
      },
      {
        property: "og:description",
        content:
          "Mais acesso à saúde durante todo o inverno. Conheça a iniciativa institucional da ASAS Telemedicina.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content:
          "https://www.asastelemedicina.com.br/og/inverno-asas.jpg",
      },
      {
        property: "og:url",
        content:
          "https://www.asastelemedicina.com.br/inverno-asas",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Iniciativa ❄️ Inverno ASAS – Estação do Cuidado",
      },
      {
        name: "twitter:description",
        content:
          "Mais acesso à saúde durante todo o inverno.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.asastelemedicina.com.br/inverno-asas",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
  }),

  component: InvernoAsas,
});

const WHATSAPP_URL =
  "https://wa.me/5545920018284";

const winterBenefits = [
  {
    icon: Brain,
    title: "Saúde mental",
    description:
      "Acompanhamento para ansiedade, depressão, insônia e outras condições psiquiátricas.",
  },

  {
    icon: Scale,
    title: "Emagrecimento saudável",
    description:
      "Programa de acompanhamento médico individualizado para obesidade e saúde metabólica.",
  },

  {
    icon: FileText,
    title: "Renovação de receitas",
    description:
      "Quando clinicamente indicada após avaliação médica.",
  },

  {
    icon: HeartPulse,
    title: "Acompanhamento médico",
    description:
      "Avaliação clínica, controle de doenças crônicas e promoção da saúde.",
  },
];

const accessConditions = [
  {
    title: "Teleconsulta médica",
    current: "R$ 59,50",
    regular: "R$ 119,00",
  },

  {
    title:
      "Teleconsulta para avaliação e renovação de receitas*",
    current: "R$ 39,95",
    regular: "R$ 79,90",
  },
];

const peopleCards = [
  {
    icon: Brain,
    title: "Saúde mental",

    items: [
      "Ansiedade",
      "Depressão",
      "Insônia",
      "Estresse",
      "Transtornos do humor",
      "Outras condições psiquiátricas",
    ],
  },

  {
    icon: Scale,
    title: "Emagrecimento saudável",

    items: [
      "Obesidade",
      "Ganho de peso",
      "Diabetes",
      "Hipertensão",
      "Saúde metabólica",
      "Acompanhamento médico",
    ],
  },

  {
    icon: Stethoscope,
    title: "Acompanhamento clínico",

    items: [
      "Consulta médica",
      "Avaliação de exames",
      "Ajuste de medicamentos",
      "Controle de doenças crônicas",
      "Renovação de receitas",
      "Promoção da saúde",
    ],
  },

  {
    icon: HeartPulse,
    title: "Qualidade de vida",

    items: [
      "Prevenção",
      "Orientação médica",
      "Hábitos saudáveis",
      "Cuidado contínuo",
    ],
  },
];

function InvernoAsas() {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "ASAS Telemedicina",
  url: "https://www.asastelemedicina.com.br/inverno-asas",
  image:
    "https://www.asastelemedicina.com.br/og/inverno-asas.jpg",
  description:
    "Iniciativa institucional para ampliar o acesso à teleconsulta médica durante o inverno.",
  slogan: "Tecnologia a serviço do cuidado. Transformando vidas.",
  telephone: "+55 45 92001-8284",
};

  
  return (
    <div className="min-h-screen bg-background text-foreground">


      
      <Header />



      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ================= HERO ================= */}

      <section
        id="top"
        className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
      >
        {/* Background de inverno integrado às cores da ASAS */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -top-40 -right-40 h-[540px] w-[540px] rounded-full bg-sky-100/60 blur-3xl" />

          <div className="absolute left-[-120px] top-60 h-[420px] w-[420px] rounded-full bg-lilac/10 blur-3xl" />

          <div className="absolute bottom-0 right-20 h-[280px] w-[280px] rounded-full bg-cyan-50 blur-3xl" />

        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* TEXTO */}


          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">

              <Snowflake className="h-3.5 w-3.5 text-sky-500" />

              Iniciativa ❄️ Inverno ASAS – Estação do Cuidado

            </span>

            <h1 className="mt-7 max-w-xl font-display text-5xl leading-[1.05] md:text-6xl">

              Mais acesso à{" "}

              <span className="text-lilac">

                saúde

              </span>

              {" "}durante todo o inverno.

            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">

              A Iniciativa <strong>❄️ Inverno ASAS – Estação do Cuidado</strong>
              foi criada para ampliar o acesso ao atendimento médico durante um
              período do ano em que diversas condições de saúde costumam exigir
              maior atenção, especialmente relacionadas à <strong>saúde
              mental</strong>, <strong>emagrecimento saudável</strong>,
              acompanhamento médico e renovação de receitas quando
              clinicamente indicada.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-azure-deep px-7 py-4 text-sm font-medium text-primary-foreground shadow-xl shadow-azure-deep/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground"
              >

                <MessageCircle className="h-4 w-4" />

                Agendar Teleconsulta

              </a>

              <a
                href="#porque"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium transition hover:bg-secondary"
              >

                Saiba mais

                <ArrowRight className="h-4 w-4" />

              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">

              <div className="flex items-center gap-2">

                <ShieldCheck className="h-4 w-4 text-lilac" />

                Atendimento médico online

              </div>

              <div className="flex items-center gap-2">

                <CalendarDays className="h-4 w-4 text-lilac" />

                21 de junho a 22 de setembro

              </div>

              <div className="flex items-center gap-2">

                <Check className="h-4 w-4 text-lilac" />

                Tecnologia a serviço do cuidado

              </div>

            </div>

          </div>

          {/* IMAGEM */}

          <div className="relative isolate">

            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-sky-100/70" />

            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-100/70 via-white/20 to-lilac/10" />

            <img
              src={winterHero}
              alt="Médica durante atendimento por teleconsulta na Iniciativa Inverno ASAS"
              className="relative z-20 aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-sky-200/40"
            />

            {/* Logo */}

            <div className="absolute -top-6 -right-6 hidden h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background p-3 shadow-2xl lg:flex">

              <img
                src={winterLogo}
                alt="Logo ASAS Inverno"
                className="h-full w-full object-contain"
              />

            </div>

            {/* Card principal */}

            <div className="absolute -bottom-8 -left-8 hidden w-80 rounded-3xl border border-border bg-background p-6 shadow-2xl xl:block">

              <div className="flex items-center gap-2 text-sky-600">

                <Snowflake className="h-4 w-4" />

                <span className="text-xs uppercase tracking-[0.18em]">

                  Condições de acesso durante a iniciativa

                </span>

              </div>

              <div className="mt-5">

                <p className="text-sm text-muted-foreground">

                  Teleconsulta médica

                </p>

                <div className="mt-2 flex items-end gap-3">

                  <span className="font-display text-5xl text-azure-deep">

                    R$ 59

                  </span>

                  <span className="pb-1 text-2xl text-azure-deep">

                    ,50

                  </span>

                </div>

                <p className="mt-2 text-sm text-muted-foreground">

                  Valor habitual:

                  <span className="ml-2 line-through">

                    R$ 119,00

                  </span>

                </p>

              </div>

              <div className="my-5 h-px bg-border" />

              <div className="space-y-3 text-sm">

                <div className="flex items-center gap-2">

                  <Check className="h-4 w-4 text-lilac" />

                  Atendimento médico online

                </div>

                <div className="flex items-center gap-2">

                  <Check className="h-4 w-4 text-lilac" />

                  Psiquiatria e saúde mental

                </div>

                <div className="flex items-center gap-2">

                  <Check className="h-4 w-4 text-lilac" />

                  Emagrecimento saudável

                </div>

                <div className="flex items-center gap-2">

                  <Check className="h-4 w-4 text-lilac" />

                  Renovação de receitas quando indicada

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONDIÇÕES DE ACESSO ================= */}

      <section className="border-t border-border bg-card/40 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">

              Condições de acesso durante a iniciativa

            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl">

              Mais acesso à saúde durante todo o inverno.

            </h2>

            <p className="mt-5 text-lg text-muted-foreground">

              Período da iniciativa: <strong>21 de junho a 22 de setembro.</strong>

            </p>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {accessConditions.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">

                    <Snowflake className="h-6 w-6 text-sky-600" />

                  </div>

                  <div>

                    <h3 className="font-display text-2xl">

                      {item.title}

                    </h3>

                    <p className="text-sm text-muted-foreground">

                      Condição válida durante a iniciativa.

                    </p>

                  </div>

                </div>

                <div className="mt-8">

                  <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">

                    Valor durante a iniciativa

                  </p>

                  <div className="mt-2 flex items-end gap-2">

                    <span className="font-display text-6xl leading-none text-azure-deep">

                      {item.current.split(",")[0]}

                    </span>

                    <span className="pb-1 text-2xl text-azure-deep">

                      ,{item.current.split(",")[1]}

                    </span>

                  </div>

                  <p className="mt-4 text-muted-foreground">

                    Valor habitual:

                    <span className="ml-2 line-through">

                      {item.regular}

                    </span>

                  </p>

                </div>

              </article>
            ))}

          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-sky-100 bg-background p-8 shadow-sm">

            <p className="text-sm leading-7 text-muted-foreground">

              <strong>*Observação:</strong> Quando a legislação exigir a emissão
              da receita física original para determinados medicamentos sujeitos
              a controle especial, poderá ser cobrada{" "}
              <strong>Taxa Administrativa de Envio</strong>, destinada aos
              procedimentos administrativos de emissão, preparação e envio da
              documentação.

            </p>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">

              <strong>
                Durante a Iniciativa ❄️ Inverno ASAS – Estação do Cuidado,
              </strong>{" "}
              a ASAS subsidia parte dos custos administrativos relacionados à
              emissão, preparação e envio da receita física. Em razão desse
              subsídio, a{" "}
              <strong>Taxa Administrativa de Envio</strong> passa a ser de{" "}
              <strong>R$ 34,95</strong> durante o período da iniciativa
              (valor habitual: <strong>R$ 69,90</strong>).

            </p>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">

              As condições acima fazem parte da{" "}
              <strong>
                Iniciativa ❄️ Inverno ASAS – Estação do Cuidado
              </strong>
              , criada para ampliar o acesso ao atendimento médico durante um
              período do ano em que diversas condições de saúde costumam exigir
              maior atenção.

            </p>

          </div>

        </div>

      </section>

      {/* ================= POR QUE A ASAS ESTÁ FAZENDO ISSO ================= */}

      <section
        id="porque"
        className="relative overflow-hidden py-24"
      >

        <div className="pointer-events-none absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-sky-100/50 blur-3xl" />

        <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-lilac/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-700">

              <Snowflake className="h-3.5 w-3.5" />

              Por que a ASAS está fazendo isso?

            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl">

              O inverno costuma exigir ainda mais atenção com a saúde.

            </h2>

          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-8 text-lg leading-9 text-muted-foreground">

            <p>

              O inverno é um período em que muitas pessoas enfrentam maior
              necessidade de cuidados com a saúde. Além do aumento das doenças
              respiratórias, essa estação pode favorecer o agravamento de
              diversos transtornos de saúde mental, dificultar o tratamento da
              obesidade e comprometer o controle de doenças crônicas.

            </p>

            <p>

              Na saúde mental, é comum observar maior procura por atendimento
              devido à ansiedade, depressão, insônia, estresse, transtornos do
              humor e outras condições psiquiátricas que podem impactar
              significativamente a qualidade de vida.

            </p>

            <p>

              O inverno também representa um desafio para quem busca um
              <strong> emagrecimento saudável</strong>. A redução da prática de
              atividade física, as mudanças na rotina e nos hábitos alimentares
              podem favorecer o ganho de peso, dificultar o tratamento da
              obesidade e comprometer o controle do diabetes, da hipertensão
              arterial e de outras doenças metabólicas.

            </p>

            <p>

              Por isso, esse também é um período importante para manter ou
              iniciar um programa de acompanhamento médico voltado ao
              emagrecimento saudável, com orientação individualizada e metas
              sustentáveis.

            </p>

            <p>

              Sabemos que muitas pessoas acabam adiando o cuidado justamente
              quando mais precisam.

            </p>

            <p className="font-medium text-foreground">

              Foi pensando nessa realidade que nasceu a{" "}
              <strong>
                Iniciativa ❄️ Inverno ASAS – Estação do Cuidado.
              </strong>

            </p>

          </div>

        </div>

      </section>

      {/* ================= QUEM PODE SE BENEFICIAR ================= */}

      <section className="border-y border-border bg-card/40 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-lilac/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-lilac">

              Quem pode se beneficiar?

            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl">

              A iniciativa foi criada para ampliar o acesso ao cuidado médico.

            </h2>

            <p className="mt-5 text-lg text-muted-foreground">

              Ela pode ser especialmente útil para pessoas que desejam iniciar
              ou manter acompanhamento médico durante o inverno.

            </p>

          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2">

                      {peopleCards.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lilac/40 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 transition group-hover:bg-sky-100">
                <Icon className="h-7 w-7 text-azure-deep" />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                {title}
              </h3>

              <ul className="mt-6 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-lilac" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

        </div>
        </div>
      </section>

      {/* ================= NOSSO MANIFESTO ================= */}

      <section className="relative overflow-hidden py-28">

        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sky-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-lilac/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">

              <HeartPulse className="h-3.5 w-3.5" />

              Nosso Manifesto

            </span>

            <h2 className="mt-6 font-display text-5xl">

              Cuidar das pessoas é o que nos move.

            </h2>

          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-8 text-center text-lg leading-9 text-muted-foreground">

            <p>

              Sabemos que, durante o inverno, muitas pessoas encontram mais
              obstáculos para iniciar um tratamento, manter o acompanhamento
              médico ou procurar ajuda no momento certo.

            </p>

            <p>

              Na <strong>ASAS Telemedicina</strong>, acreditamos que saúde de
              qualidade deve estar ao alcance de todos.

            </p>

            <p>

              Por isso, criamos a{" "}
              <strong>
                Iniciativa ❄️ Inverno ASAS – Estação do Cuidado.
              </strong>

            </p>

            <p>

              Mais do que oferecer condições de acesso diferenciadas para
              teleconsultas, queremos reduzir barreiras para que mais pessoas
              possam receber atendimento médico de qualidade quando realmente
              precisam.

            </p>

            <p>

              Esta iniciativa representa aquilo em que acreditamos desde o
              primeiro dia: tecnologia aproximando pessoas do cuidado,
              medicina exercida com ética, acolhimento, responsabilidade e
              compromisso com a democratização do acesso à saúde.

            </p>

            <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-lilac/5 p-8 shadow-sm">

              <p className="font-display text-2xl text-azure-deep">

                Tecnologia a serviço do cuidado.

              </p>

              <p className="mt-2 font-display text-xl text-lilac">

                Transformando vidas.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONDIÇÕES QUE MERECEM ATENÇÃO ================= */}

      <section className="border-t border-border bg-card/40 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-lilac/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-lilac">

              Saúde durante o inverno

            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl">

              Condições de saúde que merecem atenção durante o inverno

            </h2>

            <p className="mt-5 text-lg text-muted-foreground">

              Algumas condições tornam-se mais frequentes ou podem apresentar
              piora durante os meses mais frios do ano.

            </p>

          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-2">

            {/* Saúde Mental */}

            <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10">

                  <Brain className="h-7 w-7 text-lilac" />

                </div>

                <h3 className="font-display text-2xl">

                  🧠 Saúde mental

                </h3>

              </div>

              <ul className="mt-8 space-y-3">

                {[
                  "Ansiedade",
                  "Depressão",
                  "Insônia",
                  "Estresse e esgotamento emocional",
                  "Transtornos do humor",
                  "Necessidade de acompanhamento psiquiátrico",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-4 w-4 text-lilac" />
                    {item}
                  </li>
                ))}

              </ul>

            </article>

            {/* Obesidade */}

            <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                  <Scale className="h-7 w-7 text-azure-deep" />

                </div>

                <h3 className="font-display text-2xl">

                  ⚖️ Obesidade, ganho de peso e saúde metabólica

                </h3>

              </div>

              <ul className="mt-8 space-y-3">

                {[
                  "Ganho de peso",
                  "Obesidade",
                  "Maior dificuldade para emagrecer",
                  "Diabetes",
                  "Hipertensão arterial",
                  "Colesterol elevado",
                  "Sedentarismo",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-4 w-4 text-lilac" />
                    {item}
                  </li>
                ))}

              </ul>

            </article>

            {/* Doenças Respiratórias */}

            <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                  <Wind className="h-7 w-7 text-sky-600" />

                </div>

                <h3 className="font-display text-2xl">

                  🫁 Doenças respiratórias

                </h3>

              </div>

              <ul className="mt-8 space-y-3">

                {[
                  "Gripe",
                  "Resfriados",
                  "COVID-19",
                  "Sinusite",
                  "Rinite",
                  "Asma",
                  "Bronquite",
                  "Pneumonia",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-4 w-4 text-lilac" />
                    {item}
                  </li>
                ))}

              </ul>

            </article>

            {/* Outras Condições */}

            <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10">

                  <HeartPulse className="h-7 w-7 text-lilac" />

                </div>

                <h3 className="font-display text-2xl">

                  ❤️ Outras condições frequentes

                </h3>

              </div>

              <ul className="mt-8 space-y-3">

                {[
                  "Dores musculares e articulares",
                  "Dermatites",
                  "Pele e lábios ressecados",
                  "Deficiência de vitamina D em pessoas predispostas",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-4 w-4 text-lilac" />
                    {item}
                  </li>
                ))}

              </ul>

            </article>

          </div>

        </div>

      </section>

      {/* ================= POR QUE MANTER O ACOMPANHAMENTO ================= */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute -left-32 top-20 h-[340px] w-[340px] rounded-full bg-sky-100/50 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-lilac/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">

              <Activity className="h-3.5 w-3.5" />

              Acompanhamento Médico

            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl">

              🌱 Por que manter o acompanhamento durante o inverno?

            </h2>

            <p className="mt-6 text-lg text-muted-foreground">

              O inverno pode ser um período desafiador para manter hábitos
              saudáveis e dar continuidade aos tratamentos. Quando indicado pelo
              médico, o acompanhamento permite um cuidado mais seguro,
              individualizado e contínuo.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: HeartPulse,
                title: "Doenças crônicas",
                text: "Manter o controle do diabetes, hipertensão arterial e outras condições clínicas.",
              },

              {
                icon: Brain,
                title: "Saúde mental",
                text: "Acompanhar tratamentos para ansiedade, depressão, insônia e outros transtornos psiquiátricos.",
              },

              {
                icon: ShieldCheck,
                title: "Prevenção",
                text: "Reduzir o risco de recaídas, agravamentos e complicações evitáveis.",
              },

              {
                icon: Scale,
                title: "Emagrecimento saudável",
                text: "Conduzir o emagrecimento de forma segura, individualizada e baseada em evidências.",
              },

              {
                icon: FileText,
                title: "Medicamentos",
                text: "Ajustar medicamentos, quando necessário, e acompanhar sua resposta ao tratamento.",
              },

              {
                icon: Stethoscope,
                title: "Qualidade de vida",
                text: "Solicitar exames quando indicados e acompanhar sua evolução ao longo do tratamento.",
              },

            ].map(({ icon: Icon, title, text }) => (

              <article
                key={title}
                className="rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">

                  <Icon className="h-7 w-7 text-emerald-700" />

                </div>

                <h3 className="mt-6 font-display text-2xl">

                  {title}

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  {text}

                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= QUANDO O ACOMPANHAMENTO FAZ DIFERENÇA ================= */}

      <section className="border-y border-border bg-card/40 py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[2rem] border border-sky-100 bg-background p-10 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                <Stethoscope className="h-7 w-7 text-sky-700" />

              </div>

              <div>

                <h2 className="font-display text-3xl">

                  Quando o acompanhamento faz diferença

                </h2>

                <p className="mt-1 text-muted-foreground">

                  Nem todo paciente precisará retornar.

                </p>

              </div>

            </div>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>

                Quando houver indicação médica, o acompanhamento permite
                avaliar a evolução do tratamento, ajustar medicamentos quando
                necessário, solicitar exames, prevenir complicações e oferecer
                um cuidado contínuo e individualizado.

              </p>

              <p>

                Cada paciente possui uma realidade, objetivos e necessidades
                próprias. Por isso, a decisão sobre manter ou não o
                acompanhamento é sempre individualizada e baseada na avaliação
                médica.

              </p>

              <div className="rounded-2xl border border-lilac/20 bg-lilac/5 p-6">

                <p className="font-medium text-foreground">

                  A decisão sobre continuar o tratamento é sempre do paciente.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-lilac/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">

              Perguntas Frequentes

            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl">

              Dúvidas frequentes

            </h2>

            <p className="mt-5 text-lg text-muted-foreground">

              Reunimos algumas das dúvidas mais comuns sobre a
              <strong> Iniciativa ❄️ Inverno ASAS – Estação do Cuidado.</strong>

            </p>

          </div>

          <div className="mt-16 rounded-[2rem] border border-border bg-background p-4 shadow-sm">

            <Accordion
              type="single"
              collapsible
              className="w-full"
            >

              <AccordionItem value="faq-1">

                <AccordionTrigger>

                  O que é a Iniciativa ❄️ Inverno ASAS – Estação do Cuidado?

                </AccordionTrigger>

                <AccordionContent>

                  Trata-se de uma iniciativa institucional da ASAS
                  Telemedicina criada para ampliar o acesso ao atendimento
                  médico durante o inverno, período em que diversas condições
                  de saúde costumam exigir maior atenção.

                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="faq-2">

                <AccordionTrigger>

                  Até quando a iniciativa é válida?

                </AccordionTrigger>

                <AccordionContent>

                  As condições de acesso desta iniciativa são válidas entre
                  <strong> 21 de junho e 22 de setembro</strong>, período
                  correspondente ao inverno.

                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="faq-3">

                <AccordionTrigger>

                  A teleconsulta possui a mesma qualidade de uma consulta presencial?

                </AccordionTrigger>

                <AccordionContent>

                  A teleconsulta é regulamentada no Brasil e permite ao médico
                  realizar avaliação clínica, orientar tratamentos, solicitar
                  exames, emitir documentos e acompanhar pacientes quando
                  clinicamente apropriado.

                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="faq-4">

                <AccordionTrigger>

                  Posso renovar minha receita durante a consulta?

                </AccordionTrigger>

                <AccordionContent>

                  Quando houver indicação clínica após avaliação médica,
                  poderão ser renovadas receitas ou emitidas novas prescrições,
                  sempre de acordo com o julgamento profissional do médico.

                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="faq-5">

                <AccordionTrigger>

                  Como receberei minha receita médica?

                </AccordionTrigger>

                <AccordionContent>

                  A maior parte das prescrições pode ser emitida em formato
                  eletrônico, quando permitido pela legislação vigente.

                  <br />
                  <br />

                  Quando a legislação exigir a emissão da receita física
                  original para determinados medicamentos sujeitos a controle
                  especial, poderá ser cobrada
                  <strong> Taxa Administrativa de Envio</strong>, destinada aos
                  procedimentos administrativos de emissão, preparação e envio
                  da documentação.

                  <br />
                  <br />

                  Durante a
                  <strong> Iniciativa ❄️ Inverno ASAS – Estação do Cuidado</strong>,
                  a ASAS subsidia parte desses custos administrativos,
                  reduzindo a Taxa Administrativa de Envio para
                  <strong> R$ 34,95</strong> durante o período da iniciativa
                  (valor habitual: <strong>R$ 69,90</strong>).

                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="faq-6">

                <AccordionTrigger>

                  Sou obrigado a continuar meu tratamento na ASAS?

                </AccordionTrigger>

                <AccordionContent>

                  Não.

                  <br />
                  <br />

                  Caso haja indicação médica de acompanhamento, a equipe poderá
                  apresentar as opções de continuidade oferecidas pela ASAS.
                  Entretanto, a decisão é sempre do paciente, que possui total
                  liberdade para escolher onde dará seguimento ao seu cuidado.

                </AccordionContent>

              </AccordionItem>

              <AccordionItem value="faq-7">

                <AccordionTrigger>

                  Quem pode participar da iniciativa?

                </AccordionTrigger>

                <AccordionContent>

                  Qualquer pessoa que deseje atendimento médico nas áreas
                  disponíveis pela ASAS Telemedicina durante o período da
                  iniciativa, observadas as condições de acesso vigentes.

                </AccordionContent>

              </AccordionItem>

            </Accordion>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#EEF7FF] via-white to-[#F5F2FF] p-12 shadow-xl">

            <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">

              <div>

                <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">

                  <Snowflake className="h-3.5 w-3.5" />

                  Iniciativa ❄️ Inverno ASAS – Estação do Cuidado

                </span>

                <h2 className="mt-6 font-display text-5xl leading-tight">

                  Agende sua teleconsulta.

                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">

                  Nossa equipe está pronta para acolher você com ética,
                  responsabilidade, confidencialidade e cuidado humanizado.

                </p>

              </div>

              <div className="flex justify-center lg:justify-end">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-azure-deep px-8 py-5 text-base font-medium text-primary-foreground shadow-xl transition hover:-translate-y-1 hover:bg-foreground"
                >

                  <MessageCircle className="h-5 w-5" />

                  Falar pelo WhatsApp

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

              {/* ================= CTA FINAL ================= */}

      <section className="relative overflow-hidden border-t border-border py-28">

        <div className="absolute inset-0 bg-gradient-to-b from-background via-sky-50/40 to-background" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-100 shadow-lg">

              <Snowflake className="h-10 w-10 text-sky-700" />

            </div>

            <h2 className="mt-8 font-display text-5xl leading-tight">

              Cuidar das pessoas é o que nos move.

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">

              Esperamos que a
              <strong> Iniciativa ❄️ Inverno ASAS – Estação do Cuidado </strong>
              permita que mais pessoas iniciem ou mantenham seu acompanhamento
              médico justamente em um período do ano em que o cuidado costuma ser
              ainda mais necessário.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-azure-deep px-8 py-5 font-medium text-primary-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-foreground"
              >
                <MessageCircle className="h-5 w-5" />

                Agendar Teleconsulta

              </a>

              <Link
                to="/"
                className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-8 py-5 font-medium transition hover:bg-secondary"
              >
                Conhecer a ASAS

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>

            <div className="mt-14">

              <img
                src={winterLogo}
                alt="ASAS Telemedicina"
                className="mx-auto h-24 w-auto object-contain"
              />

              <p className="mt-8 font-display text-3xl text-azure-deep">

                Tecnologia a serviço do cuidado.

              </p>

              <p className="mt-2 text-xl text-lilac">

                Transformando vidas.

              </p>

            </div>

          </div>

        </div>

      </section>

{/* FOOTER */}
<footer className="border-t border-border bg-background py-10">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">

    <div className="flex items-center gap-3">
      <img
        src={winterLogo} // ou asasLogo, se preferir manter a identidade padrão
        alt="ASAS Telemedicina"
        className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
      />

      <div>
        <p className="font-display text-base text-foreground">
          Clínica Popular ASAS Telemedicina
        </p>

        <p className="text-xs">
          Tecnologia a serviço do cuidado. Transformando vidas.
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center gap-1 md:items-end">

      <Link
        to="/faca-parte"
        className="font-medium text-lilac hover:text-foreground"
      >
        Faça parte da equipe
      </Link>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground"
      >
        WhatsApp: (45) 92001-8284
      </a>

      <p className="text-xs">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>

    </div>

  </div>
</footer>

      {/* Floating WhatsApp */}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >

        <MessageCircle className="h-8 w-8" />

      </a>

    </div>

  );
}

        
        

            

            
            

          
