import { Link } from "@tanstack/react-router";
import {
  Instagram,
  MessageCircle,
} from "lucide-react";

import asasLogo from "@/assets/asas-logo.jpeg";

const WHATSAPP_URL = "https://wa.me/5545920018284";
const INSTAGRAM_URL = "https://www.instagram.com/asastelemedicina/";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-3">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={asasLogo}
              alt="ASAS Telemedicina"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-border"
            />

            <div>
              <h3 className="font-display text-lg font-semibold">
                Clínica Popular
              </h3>

              <p className="font-display text-lilac">
                ASAS Telemedicina
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Tecnologia a serviço do cuidado.
            <br />
            Transformando vidas.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="font-semibold">
            Navegação
          </h4>

          <div className="mt-4 flex flex-col gap-3 text-sm">

            <Link
              to="/quem-somos"
              className="hover:text-lilac transition"
            >
              Quem Somos
            </Link>

            <Link
              to="/central-de-saude"
              className="hover:text-lilac transition"
            >
              Artigos de Saúde
            </Link>

            <Link
              to="/faca-parte"
              className="hover:text-lilac transition"
            >
              Faça Parte
            </Link>

          </div>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-semibold">
            Contato
          </h4>

          <div className="mt-4 flex flex-col gap-4 text-sm">


            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-lilac"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
               WhatsApp: (45) 92001-8284
            </a>
           
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-lilac"
            >
              <Instagram className="h-5 w-5 text-pink-500" />
              @asastelemedicina
            </a>
             <p className="text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>

      </div>

      <div className="border-t border-border py-5">

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clínica Popular ASAS Telemedicina. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}

