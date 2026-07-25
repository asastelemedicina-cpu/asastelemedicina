import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import asasLogo from "@/assets/asas-logo.jpeg";
import { ASAS } from "@/lib/config";

export default function Header() {
  return (
    <header className="relative z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <a
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <img
            src={asasLogo}
            alt={ASAS.nome}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
          />

          <div>
            <p className="font-display text-lg font-semibold leading-none">
              Clínica Popular
            </p>

            <p className="font-display text-lg leading-none text-lilac">
              ASAS
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">

          <Link
            to="/quem-somos"
            className="transition hover:text-foreground"
          >
            Quem Somos
          </Link>

          <a
            href="/#especialidades"
            className="transition hover:text-foreground"
          >
            Especialidades
          </a>

          <a
            href="/#como-funciona"
            className="transition hover:text-foreground"
          >
            Como funciona
          </a>

          <a
            href="/#documentos"
            className="transition hover:text-foreground"
          >
            Documentos
          </a>

          <a
            href="/#faq"
            className="transition hover:text-foreground"
          >
            FAQ
          </a>

          <Link
            to="/faca-parte"
            className="transition hover:text-foreground"
          >
            Faça Parte
          </Link>

        </nav>

        <a
          href={ASAS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-deep hover:shadow-lg lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar pelo WhatsApp
        </a>

      </div>
    </header>
  );
}
