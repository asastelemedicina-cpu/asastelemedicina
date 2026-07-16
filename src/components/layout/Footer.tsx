import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";

import asasLogo from "@/assets/asas-logo.jpeg";
import { ASAS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 section-default pb-4">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <a
                href="/"
                hash="top"
                className="flex items-center gap-3 transition hover:opacity-90"
              >
              <img
                src={asasLogo}
                alt={ASAS.nome}
                className="h-14 w-14 rounded-full object-cover ring-1 ring-background/20"
              />

              <div>
                <h3 className="font-display text-lg font-semibold">
                  Clínica Popular
                </h3>

                <p className="font-display text-lilac">
                  ASAS Telemedicina
                </p>
              </div>
            </a>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-background/70">
              Tecnologia a serviço do cuidado.
              <br />
              Transformando vidas.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-display text-lg text-lilac">
              Navegação
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/quem-somos"
                className="transition hover:text-lilac"
              >
                Quem Somos
              </Link>

              <Link
                to="/central-de-saude"
                className="transition hover:text-lilac"
              >
                Artigos de Saúde
              </Link>

              <Link
                to="/faca-parte"
                className="transition hover:text-lilac"
              >
                Faça Parte
              </Link>

            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg text-lilac">
              Contato
            </h4>

            <div className="mt-5 flex flex-col gap-4 text-sm">

              <a
                href={ASAS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-lilac"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                {ASAS.telefone}
              </a>

              <a
                href={ASAS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-lilac"
              >
                <Instagram className="h-5 w-5 text-pink-500" />
                @asastelemedicina
              </a>

            </div>
          </div>

        </div>

        <div className="my-6 h-px bg-background/10" />

        <p className="text-center text-sm text-background/50">
          © {new Date().getFullYear()} {ASAS.nome}. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
