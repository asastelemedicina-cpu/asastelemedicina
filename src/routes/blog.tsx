import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";
import { posts } from "@/lib/blog-posts";

const WHATSAPP_URL = "https://wa.me/5545920018284";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Clínica Popular Asas Telemedicina" },
      {
        name: "description",
        content:
          "Artigos e informações sobre telemedicina, saúde mental, emagrecimento, documentos médicos e cuidados com a saúde.",
      },
      { property: "og:title", content: "Blog — Clínica Popular Asas Telemedicina" },
      {
        property: "og:description",
        content:
          "Conteúdos para esclarecer dúvidas e informar sobre teleconsulta e cuidados de saúde.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
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
              Clínica Popular <span className="text-lilac">Asas Telemedicina</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao início
          </Link>
        </div>
      </header>

      <section className="border-b border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-lilac">Blog</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Informação que <em className="not-italic text-azure-deep">cuida</em> de você.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Artigos escritos para esclarecer dúvidas sobre telemedicina, saúde mental,
            documentos médicos, emagrecimento e cuidados no dia a dia.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-lilac">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-azure-deep transition group-hover:gap-3"
              >
                Ler artigo <ArrowRight className="h-4 w-4" />
              </Link>
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
            Nossa equipe está pronta para responder no WhatsApp e ajudar você a agendar
            sua consulta.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-background"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}