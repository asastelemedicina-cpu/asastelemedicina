import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";
import { getPost, posts } from "@/lib/blog-posts";

const WHATSAPP_URL = "https://wa.me/5545920018284";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Blog Asas Telemedicina` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Artigo não encontrado</h1>
        <Link to="/blog" className="mt-4 inline-block text-azure-deep hover:underline">
          Voltar para o blog
        </Link>
      </div>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={asasLogo}
              alt="Asas Telemedicina"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
            />
            <span className="font-display text-base font-semibold">
              Asas Telemedicina
            </span>
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Blog
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-lilac">{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.content.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl">Quer agendar uma consulta?</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale com nossa equipe no WhatsApp e agende no melhor horário para você.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-azure-deep px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
          </a>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border bg-card/40 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">Leia também</p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-2xl border border-border bg-background p-6 transition hover:border-lilac"
                >
                  <p className="text-xs uppercase tracking-widest text-lilac">
                    {p.category}
                  </p>
                  <p className="mt-3 font-display text-xl">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}