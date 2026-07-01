import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Article } from "./central-de-saude.o-que-e-teleconsulta";

import {
  ArrowLeft,
  Search,
  MessageCircle,
  BookOpen,
  Stethoscope,
  Brain,
  Baby,
  HeartPulse,
  Leaf,
  Scale,
} from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";

const WHATSAPP_URL = "https://wa.me/5545920018284";

export const Route = createFileRoute("/central-de-saude")({
  head: () => ({
    meta: [
      {
        title:
          "Central de Saúde | Asas Telemedicina | Teleconsulta, Psiquiatria e Bem-estar",
      },
      {
        name: "description",
        content:
          "Conteúdos médicos confiáveis sobre teleconsulta, psiquiatria, clínica geral, pediatria, ginecologia, emagrecimento, cannabis medicinal, receitas médicas digitais e muito mais.",
      },
      {
        name: "keywords",
        content:
          "teleconsulta, consulta médica online, médico online, psiquiatra online, psiquiatria online, clínico geral online, ginecologista online, pediatra online, medicina da família, emagrecimento, obesidade, cannabis medicinal, receita médica digital, atestado médico online, laudo médico, ansiedade, depressão, TDAH, insônia, saúde mental, Asas Telemedicina",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large",
      },
      {
        property: "og:title",
        content: "Central de Saúde | Artigos Médicos e Telemedicina | Asas Telemedicina",
      },
      {
        property: "og:description",
        content:
          "Artigos médicos sobre telemedicina, saúde mental, bem-estar e cuidados com a saúde.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.asastelemedicina.com.br/central-de-saude",
      },
      {
        property: "og:image",
        content: "https://www.asastelemedicina.com.br/og-image.jpg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        rel: "canonical",
        href: "https://www.asastelemedicina.com.br/central-de-saude",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Central de Saúde",
          description:
            "Conteúdos médicos da Asas Telemedicina.",
          url: "https://www.asastelemedicina.com.br/central-de-saude",
          publisher: {
            "@type": "MedicalClinic",
            name: "Asas Telemedicina",
            url: "https://www.asastelemedicina.com.br",
          },
        }),
      },
    ],
  }),
  component: CentralDeSaude,
});

function CentralDeSaude() {
  const [mostrarArtigo, setMostrarArtigo] = useState(false);

    if (mostrarArtigo) {
      return <Article />;
    }
  
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}

      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="flex items-center gap-3">

            <img
              src={asasLogo}
              alt="Asas Telemedicina"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>

              <p className="font-display text-xl font-semibold">
                Asas Telemedicina
              </p>

              <p className="text-xs text-muted-foreground">
                Clínica Popular
              </p>

            </div>

          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm hover:text-lilac transition"
          >
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>

        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-card via-background to-card">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-lilac/10 px-4 py-2 text-sm text-lilac">

              <BookOpen size={18} />

              CENTRAL DE SAÚDE

            </div>

            <h1 className="mt-6 font-display text-6xl leading-tight">

              Informação médica

              <span className="text-lilac">
                {" "}confiável{" "}
              </span>

              para cuidar da sua saúde.

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">

              Conteúdos produzidos para esclarecer dúvidas sobre
              teleconsulta, saúde mental, emagrecimento,
              ginecologia, pediatria, clínica geral,
              medicina da família e cannabis medicinal.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-lilac px-8 py-4 font-semibold transition hover:scale-105"
              >
                <MessageCircle className="mr-2 inline h-5 w-5" />
                Agendar Consulta
              </a>

              <Link
                to="/central-de-saude/o-que-e-teleconsulta"
                className="rounded-full border border-border px-8 py-4 font-semibold hover:bg-card transition"
              >
                Ler artigo em destaque
              </Link>
               

            </div>

          </div>

        </div>

      </section>

      {/* BREADCRUMB */}

      <section className="border-b border-border">

        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-5 text-sm text-muted-foreground">

          <Link to="/">Início</Link>

          <span>/</span>

          <span className="font-medium text-foreground">
            Central de Saúde
          </span>

        </div>

      </section>

      {/* PESQUISA */}

      <section className="py-16">

        <div className="mx-auto max-w-4xl px-6">

          <div className="relative">

            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Pesquisar artigos..."
              className="h-16 w-full rounded-2xl border border-border bg-card pl-14 pr-6 text-lg outline-none transition focus:border-lilac"
            />

          </div>

        </div>

      </section>

      {/* CATEGORIAS */}

      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lilac">
                Especialidades
              </p>

              <h2 className="mt-3 font-display text-4xl">
                Explore nossos conteúdos
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Selecione uma área para encontrar conteúdos produzidos
                por médicos sobre prevenção, diagnóstico, tratamento,
                qualidade de vida e telemedicina.
              </p>

            </div>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {/* PSIQUIATRIA */}

            <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-lilac hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 text-lilac">
                <Brain size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                Psiquiatria
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Ansiedade, depressão, TDAH, insônia, síndrome do pânico,
                transtorno bipolar, burnout e outros temas relacionados
                à saúde mental.
              </p>

              <button className="mt-6 text-sm font-semibold text-lilac transition group-hover:translate-x-1">
                Ver conteúdos →
              </button>

            </div>

            {/* CLÍNICA GERAL */}

            <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-lilac hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 text-lilac">
                <Stethoscope size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                Clínica Geral
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Hipertensão, diabetes, infecções, dores, exames,
                check-up, prevenção e orientações gerais para adultos.
              </p>

              <button className="mt-6 text-sm font-semibold text-lilac transition group-hover:translate-x-1">
                Ver conteúdos →
              </button>

            </div>

            {/* PEDIATRIA */}

            <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-lilac hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 text-lilac">
                <Baby size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                Pediatria
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Desenvolvimento infantil, febre, vacinas,
                introdução alimentar, bronquiolite
                e cuidados com crianças.
              </p>

              <button className="mt-6 text-sm font-semibold text-lilac transition group-hover:translate-x-1">
                Ver conteúdos →
              </button>

            </div>

            {/* GINECOLOGIA */}

            <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-lilac hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 text-lilac">
                <HeartPulse size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                Ginecologia
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Menopausa, SOP, endometriose,
                anticoncepcionais, reposição hormonal
                e saúde da mulher.
              </p>

              <button className="mt-6 text-sm font-semibold text-lilac transition group-hover:translate-x-1">
                Ver conteúdos →
              </button>

            </div>

            {/* EMAGRECIMENTO */}

            <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-lilac hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 text-lilac">
                <Scale size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                Emagrecimento
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Obesidade, metabolismo, alimentação,
                atividade física, medicamentos e
                mudanças de hábitos.
              </p>

              <button className="mt-6 text-sm font-semibold text-lilac transition group-hover:translate-x-1">
                Ver conteúdos →
              </button>

            </div>

            {/* CANNABIS */}

            <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-lilac hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10 text-lilac">
                <Leaf size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl">
                Cannabis Medicinal
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Evidências científicas, indicações,
                legislação brasileira, segurança
                e acompanhamento médico.
              </p>

              <button className="mt-6 text-sm font-semibold text-lilac transition group-hover:translate-x-1">
                Ver conteúdos →
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ARTIGO EM DESTAQUE */}

      <section className="border-y border-border bg-card/40 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

          <div>

            <div className="inline-flex items-center rounded-full bg-lilac px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">

              ⭐ Artigo em Destaque

            </div>

            <h2 className="mt-8 font-display text-5xl leading-tight">

              O que é
              <span className="text-lilac"> Teleconsulta?</span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">

              Descubra como funciona uma consulta médica online,
              quando ela pode ser realizada, quais documentos possuem
              validade jurídica e quais são as vantagens da telemedicina
              para pacientes de todo o Brasil.

            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">

              <span>📖 12 min de leitura</span>

              <span>•</span>

              <span>Atualizado em 2026</span>

            </div>

            <div className="mt-10">

              <Link
                to="/central-de-saude/o-que-e-teleconsulta"
               className="inline-flex items-center rounded-full bg-lilac px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Ler artigo completo →
              </Link>
                  

            </div>

          </div>

          <div className="rounded-[40px] border border-border bg-gradient-to-br from-lilac/10 via-background to-background p-12">

            <h3 className="font-display text-3xl">

              Neste artigo você vai aprender

            </h3>

            <ul className="mt-8 space-y-5 text-muted-foreground">

              <li>✔ O que é teleconsulta.</li>

              <li>✔ Como funciona o atendimento médico online.</li>

              <li>✔ Quando a consulta virtual é indicada.</li>

              <li>✔ Como funciona a receita médica digital.</li>

              <li>✔ Quando o médico pode emitir atestado.</li>

              <li>✔ Segurança, sigilo e validade jurídica.</li>

              <li>✔ Benefícios da telemedicina.</li>

            </ul>

          </div>

        </div>

      </section>


            {/* ÚLTIMOS ARTIGOS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lilac">
                Conteúdos recentes
              </p>

              <h2 className="mt-3 font-display text-4xl">
                Últimos artigos publicados
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Conteúdos produzidos para responder às dúvidas mais
                frequentes dos pacientes e ajudar na tomada de decisões
                relacionadas à saúde.
              </p>

            </div>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* CARD 1 */}

            <article className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-2 hover:border-lilac hover:shadow-xl">

              <div className="h-56 bg-gradient-to-br from-lilac/20 via-background to-card" />

              <div className="p-8">

                <span className="rounded-full bg-lilac/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lilac">
                  Telemedicina
                </span>

                <h3 className="mt-5 font-display text-3xl leading-tight">

                  O que é Teleconsulta e como funciona?

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  Saiba como funciona uma consulta médica online,
                  quais documentos podem ser emitidos e por que a
                  telemedicina se tornou uma alternativa segura,
                  prática e regulamentada.

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-muted-foreground">

                    📖 12 min de leitura

                  </span>

                  <Link
                    to="/central-de-saude/o-que-e-teleconsulta"
                    className="font-semibold text-lilac transition group-hover:translate-x-1"
                  >
                   Ler artigo →
                  </Link>
                 

                </div>

              </div>

            </article>

            {/* CARD 2 */}

            <article className="rounded-3xl border border-dashed border-border bg-card/40 p-10">

              <div className="flex h-full flex-col justify-center">

                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest w-fit">
                  Em breve
                </span>

                <h3 className="mt-6 font-display text-3xl">

                  Psiquiatria Online

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  Quando procurar um psiquiatra?
                  Como funciona uma consulta online?
                  Em quais situações a teleconsulta é indicada?

                </p>

              </div>

            </article>

            {/* CARD 3 */}

            <article className="rounded-3xl border border-dashed border-border bg-card/40 p-10">

              <div className="flex h-full flex-col justify-center">

                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest w-fit">
                  Em breve
                </span>

                <h3 className="mt-6 font-display text-3xl">

                  Receita Médica Digital

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  Entenda como funciona a receita digital,
                  quais medicamentos podem ser prescritos
                  e como validar sua autenticidade.

                </p>

              </div>

            </article>

            {/* CARD 4 */}

            <article className="rounded-3xl border border-dashed border-border bg-card/40 p-10">

              <div className="flex h-full flex-col justify-center">

                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest w-fit">
                  Em breve
                </span>

                <h3 className="mt-6 font-display text-3xl">

                  Atestado Médico Online

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  O atestado emitido por teleconsulta possui
                  validade jurídica? Descubra como funciona
                  a assinatura digital do médico.

                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* ESPECIALIDADES */}

      <section className="border-y border-border bg-card/30 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-lilac">
            Atendimento Médico
          </p>

          <h2 className="mt-4 text-center font-display text-5xl">
            Como a Asas Telemedicina pode ajudar você?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-muted-foreground">

            Além de conteúdos educativos, oferecemos consultas
            médicas online em diversas especialidades, realizadas
            por profissionais habilitados, com atendimento humanizado,
            segurança e praticidade.

          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-2xl">🧠 Psiquiatria</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Ansiedade, depressão, TDAH, insônia,
                transtornos de humor e acompanhamento psiquiátrico.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-2xl">🩺 Clínica Geral</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Avaliação clínica, sintomas gerais,
                check-up, orientações e acompanhamento.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-2xl">👩 Ginecologia</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Saúde da mulher, menopausa,
                SOP, anticoncepção e reposição hormonal.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-2xl">⚖️ Emagrecimento</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Acompanhamento médico individualizado
                para perda de peso e melhora da qualidade de vida.
              </p>
            </div>

          </div>

        </div>

      </section>


            {/* CTA FINAL */}

      <section className="py-28">

        <div className="mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-lilac to-violet-700 p-12 text-white shadow-2xl">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                ASAS TELEMEDICINA
              </p>

              <h2 className="mt-6 font-display text-5xl leading-tight">

                Cuidar da sua saúde nunca foi tão simples.

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">

                Nossa equipe médica está preparada para atender você
                com segurança, rapidez e atendimento humanizado,
                diretamente pelo celular, tablet ou computador.

              </p>

              <div className="mt-14 grid gap-6 md:grid-cols-3">

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="font-display text-2xl">

                    👨‍⚕️ Médicos Qualificados

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/80">

                    Atendimento realizado por médicos regularmente
                    inscritos no CRM.

                  </p>

                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="font-display text-2xl">

                    📄 Documentos Digitais

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/80">

                    Quando clinicamente indicado,
                    emissão de receitas médicas,
                    atestados e solicitações de exames.

                  </p>

                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="font-display text-2xl">

                    💻 Atendimento Online

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/80">

                    Consultas online em diversas especialidades,
                    sem sair de casa.

                  </p>

                </div>

              </div>

              <div className="mt-14 flex flex-wrap justify-center gap-5">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-10 py-5 font-semibold text-lilac transition hover:scale-105"
                >
                  <MessageCircle className="mr-2 inline h-5 w-5" />

                  Agendar Consulta

                </a>

                <Link
                  to="/"
                  className="rounded-full border border-white/30 px-10 py-5 font-semibold transition hover:bg-white/10"
                >
                  Conhecer a Clínica
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="border-t border-border py-24">

        <div className="mx-auto max-w-5xl px-6">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-lilac">

            DÚVIDAS FREQUENTES

          </p>

          <h2 className="mt-4 text-center font-display text-5xl">

            Perguntas frequentes

          </h2>

          <div className="mt-16 space-y-8">

            <div className="rounded-3xl border border-border p-8">

              <h3 className="font-display text-2xl">

                A teleconsulta possui validade?

              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">

                Sim. A teleconsulta é regulamentada no Brasil e possui
                a mesma validade jurídica da consulta presencial,
                desde que realizada conforme a legislação vigente.

              </p>

            </div>

            <div className="rounded-3xl border border-border p-8">

              <h3 className="font-display text-2xl">

                Posso receber receita médica digital?

              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">

                Sim. Quando houver indicação clínica,
                o médico poderá emitir receita médica digital
                assinada eletronicamente.

              </p>

            </div>

            <div className="rounded-3xl border border-border p-8">

              <h3 className="font-display text-2xl">

                O atestado online possui validade?

              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">

                Sim. Quando clinicamente indicado,
                o atestado emitido durante a teleconsulta possui
                validade legal, desde que assinado digitalmente
                pelo médico responsável.

              </p>

            </div>

            <div className="rounded-3xl border border-border p-8">

              <h3 className="font-display text-2xl">

                Quais especialidades estão disponíveis?

              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">

                A Asas Telemedicina oferece atendimento em
                Psiquiatria, Clínica Geral, Pediatria,
                Ginecologia, Medicina da Família,
                Emagrecimento e Cannabis Medicinal,
                entre outras áreas.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* RODAPÉ */}

      <footer className="border-t border-border bg-card py-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">

          <div>

            <p className="font-display text-2xl">

              Central de Saúde

            </p>

            <p className="mt-2 text-sm text-muted-foreground">

              © 2026 Asas Telemedicina.
              Informação médica confiável para toda a família.

            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link to="/">Início</Link>

            <Link to="/central-de-saude/">
              Central de Saúde
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}










      
