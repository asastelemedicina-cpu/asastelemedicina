import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";

import { Article } from "./central-de-saude.o-que-e-teleconsulta";
import { ArticlePsiquiatria } from "./central-de-saude.psiquiatra-online";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5545920018284";

const posts = [
  {
    slug: "o-que-e-teleconsulta",
    category: "Telemedicina",
    readTime: "10 min",
    title: "O que é Teleconsulta? Como funciona a consulta médica online",
    excerpt:
      "Entenda como funciona uma teleconsulta, quando ela é indicada, quais documentos podem ser emitidos e quais são suas vantagens.",
    published: true,
  },
  {
    slug: "psiquiatria",
    category: "Psiquiatria",
    readTime: "12 min",
    title: "Psiquiatria Online",
    excerpt:
      "Quando procurar um psiquiatra? Como funciona uma consulta online? Em quais situações ela é indicada?",
    published: false,
  },
  {
    slug: "receita-medica-digital",
    category: "Documentos Médicos",
    readTime: "Em breve",
    title: "Receita Médica Digital",
    excerpt:
      "Como funciona a receita digital, quais medicamentos podem ser prescritos e como validar sua autenticidade.",
    published: false,
  },
  {
    slug: "atestado-medico-online",
    category: "Documentos Médicos",
    readTime: "Em breve",
    title: "Atestado Médico Online",
    excerpt:
      "O atestado emitido por teleconsulta possui validade jurídica? Descubra como funciona.",
    published: false,
  },
];

export const Route = createFileRoute("/central-de-saude")({
  head: () => ({
    meta: [
      {
        title: "Artigos de Saúde | Clínica Popular Asas Telemedicina",
      },
      {
        name: "description",
        content:
          "Conteúdos médicos e artigos confiáveis sobre teleconsulta, psiquiatria, clínica geral, pediatria, ginecologia, emagrecimento, cannabis medicinal e documentos médicos.",
      },
      {
        name: "keywords",
        content:
          "teleconsulta, telemedicina, psiquiatria online, clínico geral online, ginecologista online, pediatra online, receita médica digital, atestado médico online, emagrecimento, cannabis medicinal, clínica popular, consultas baratas, laudo médico, laudo online, médico online, médico em são paulo, médico rio de janeiro,Ansiedade, Depressão, Burnout, TDAH, Insônia, TOC, Transtorno Bipolar, Primeira consulta com psiquiatra, Psiquiatra, Receita de medicamentos controlados",
          
      },
      {
        property: "og:title",
        content: "Artigos de Saúde | Asas Telemedicina",
      },
      {
        property: "og:description",
        content:
          "Artigos médicos escritos para esclarecer dúvidas sobre saúde e telemedicina.",
      },
    ],
  }),
  component: CentralDeSaude,
});

function CentralDeSaude() {
  
  /*const [showArticle, setShowArticle] = useState(false);

  if (showArticle) {
    return <Article onBack={() => setShowArticle(false)} />;
  }*/

const [currentArticle, setCurrentArticle] = useState<
  "o-que-e-teleconsulta" | "psiquiatria" | null
>(null);

if (currentArticle === "o-que-e-teleconsulta") {
  return (
    <Article
      onBack={() => setCurrentArticle(null)}
    />
  );
}

if (currentArticle === "psiquiatria") {
  return (
    <ArticlePsiquiatria
      onBack={() => setCurrentArticle(null)}
    />
  );
}


  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={asasLogo}
              alt="Asas Telemedicina"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
            />

            <span className="font-display text-lg font-semibold tracking-tight">
              Clínica Popular{" "}
              <span className="text-lilac">Asas Telemedicina</span>
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <section className="border-b border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-lilac">
            Artigos de Saúde
          </p>

          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Informação médica{" "}
            <em className="not-italic text-azure-deep">confiável</em>.
          </h1>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Conteúdos produzidos por médicos para esclarecer dúvidas sobre
            teleconsulta, saúde mental, documentos médicos, emagrecimento,
            pediatria, ginecologia, clínica geral e muito mais.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          {posts.map((post) => (
      
            <article
              key={post.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-lilac">{post.category}</span>

                <span>•</span>

                <span>{post.readTime}</span>
              </div>

              <h2 className="mt-4 font-display text-2xl md:text-3xl">
                {post.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-6">
                {post.published ? (
                <button
                  type="button"
                  //onClick={() => setShowArticle(true)}
                  onClick={() => setCurrentArticle(post.slug as any)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-azure-deep transition group-hover:gap-3"
                >
                  Ler artigo
                  <ArrowRight className="h-4 w-4" />
                </button>

                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    Em breve
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-foreground py-16 text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Ficou com alguma dúvida?
          </h2>

          <p className="max-w-xl text-background/70">
            Nossa equipe está pronta para responder suas dúvidas e ajudar
            você a agendar sua consulta online.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-background"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}




              
