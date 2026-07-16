import { MessageCircle } from "lucide-react";
import { ASAS } from "@/lib/config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={ASAS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        bg-azure-deep
        text-white

        shadow-xl
        shadow-azure-deep/30

        transition-all
        duration-300

        hover:scale-110
        hover:bg-lilac

        active:scale-95
      "
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
