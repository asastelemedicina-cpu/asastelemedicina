import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroDoctor from "@/assets/hero-doctor.jpg";
import asasLogo from "@/assets/asas-logo.jpeg";

import Article from "./central-de-saude.o-que-e-teleconsulta";

import {
  Brain,
  Stethoscope,
  Users,
  Flower2,
  Baby,
  Scale,
  FileText,
  ShieldCheck,
  Clock,
  MessageCircle,
  Check,
  Globe,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
head: () => ({
meta: [
{ title: "Clínica Popular Asas Telemedicina — Teleconsulta a partir de R$ 120" },
{
name: "description",
content:
"Teleconsulta médica com psiquiatria, clínica geral, ginecologia, pediatria, emagrecimento e mais. Atestados, afastamentos, laudos e relatórios médicos. A partir de R$ 120.",
},
{ property: "og:title", content: "Clínica Popular Asas Telemedicina — Cuidado médico online" },
{
property: "og:description",
content:
"Consultas médicas online. Atestados, laudos e relatórios. A partir de R$ 120.",
},
],
links: [
{
rel: "canonical",
href: "https://www.asastelemedicina.com.br/",
},
  {
    rel: "shortcut icon",
    href: "/favicon.ico",
  },
],
}),
component: Index,
}); 


const WHATSAPP_URL = "https://wa.me/5545920018284";

const specialties = [
  { icon: Brain, title: "Psiquiatria", desc: "Acompanhamento para ansiedade, depressão, insônia e saúde mental." },
  { icon: Stethoscope, title: "Clínica Geral", desc: "Avaliação clínica, sintomas agudos e cuidados gerais de saúde." },
  { icon: Users, title: "Medicina de Família", desc: "Cuidado contínuo e integral para você e toda a sua família." },
  { icon: Flower2, title: "Ginecologia", desc: "Saúde da mulher, ciclos, contracepção e orientações especializadas." },
  { icon: Baby, title: "Pediatria", desc: "Acompanhamento e orientações para a saúde de crianças e bebês." },
  { icon: Scale, title: "Emagrecimento", desc: "Plano personalizado com acompanhamento médico e suporte clínico." },
];

const documents = [
  { icon: FileText, label: "Atestado médico" },
  { icon: FileText, label: "Afastamento" },
  { icon: FileText, label: "Relatórios médicos" },
  { icon: FileText, label: "Laudos" },
];

const faqs = [
  {
    q: "O que é teleconsulta?",
    a: "É uma consulta médica realizada totalmente por vídeo chamada, com a mesma validade de uma consulta presencial. Você conversa com o médico em tempo real, do conforto da sua casa.",
  },
  {
    q: "A teleconsulta é segura e legalizada?",
    a: "Sim. A telemedicina é regulamentada pelo Conselho Federal de Medicina (CFM) e todos os nossos profissionais possuem registro ativo, garantindo sigilo e segurança no atendimento.",
  },
  {
    q: "Quais documentos posso receber?",
    a: "Quando indicado pelo médico, emitimos atestados, afastamentos, relatórios médicos, laudos e receitas digitais, todos com validade legal e enviados por e-mail ou WhatsApp.",
  },
  {
    q: "Como faço para agendar?",
    a: "Basta enviar uma mensagem no nosso WhatsApp. Nossa equipe te orienta sobre a área de saúde desejada, horários disponíveis e forma de pagamento.",
  },
  {
    q: "Quanto custa a consulta com um médico?",
    a: "As consultas médicas começam a partir de R$ 120,00. O valor pode variar conforme a área de cuidado e especialidade — a equipe informa todos os detalhes no WhatsApp antes do agendamento.",
  },
  {
    q: "Do que eu preciso para a consulta?",
    a: "Apenas um celular, tablet ou computador com câmera, microfone e conexão com a internet. Você recebe o link de acesso no horário marcado.",
  },
  {
    q: "A receita digital é aceita em farmácias?",
    a: "Sim. A receita é assinada digitalmente com certificado válido e aceita em farmácias de todo o Brasil.",
  },
];

const testimonials = [
  {
    name: "Mariana Silva",
    city: "Curitiba • PR",
    text: "Atendimento excelente. Consegui marcar a consulta no mesmo dia e fui muito bem atendida. Recomendo.",
  },
  {
    name: "Carlos M.",
    city: "São Paulo • SP",
    text: "Precisava de um atendimento rápido e tudo aconteceu de forma simples. Excelente experiência.",
  },
  {
    name: "Juliana Andrade",
    city: "Londrina • PR",
    text: "A médica foi extremamente atenciosa e esclareceu todas as minhas dúvidas. Excelente custo-benefício! ",
  },
  {
    name: "Fernando L.",
    city: "Campo Grande • MS",
    text: "Muito mais prático do que imaginei. Atendimento rápido e profissional.",
  },
  {
    name: "Patrícia Rodrigues",
    city: "Teresina • PI",
    text: "Recebi minha receita poucos minutos após a consulta. Tudo muito organizado.",
  },
  {
    name: "Lucas T.",
    city: "Florianópolis • SC",
    text: "Resolvi meu problema sem precisar sair de casa. Excelente atendimento.",
  },
  {
    name: "Beatriz Nogueira",
    city: "Joinville • SC",
    text: "Equipe muito educada e plataforma extremamente simples de utilizar.",
  },
  {
    name: "Ricardo P.",
    city: "Goiânia • GO",
    text: "Profissionais competentes e atendimento muito humanizado.",
  },
  {
    name: "Daniela Costa",
    city: "Belo Horizonte • MG",
    text: "Gostei muito da organização e da rapidez no atendimento.",
  },
  {
    name: "Renata F.",
    city: "Rio de Janeiro • RJ",
    text: "A consulta foi excelente. Voltarei sempre que precisar.",
  },
  {
    name: "Eduardo Henrique",
    city: "Porto Alegre • RS",
    text: "Atendimento seguro, cordial e muito eficiente.",
  },
  {
    name: "V.C.S.",
    city: "Vitória • ES",
    text: "Toda a experiência foi excelente, desde o agendamento até a consulta.",
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      {/*<header className="absolute top-0 left-0 right-0 z-20">*/}

      {/*
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={asasLogo}
              alt="Asas Telemedicina"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              Clínica Popular <span className="text-lilac">Asas Telemedicina</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/quem-somos" className="hover:text-foreground">Quem Somos</Link>
            <a href="#especialidades" className="hover:text-foreground">Cuidados Oferecidos</a>
            <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
            <a href="#documentos" className="hover:text-foreground">Documentos</a>           
            <Link to="/central-de-saude" className="hover:text-foreground">Artigos de Saúde</Link>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <Link to="/faca-parte" className="hover:text-foreground">Faça parte</Link>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-azure-deep md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
          </a>
        </div>
      </header>
      */}

  <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

    <a href="#top" className="flex items-center gap-3 transition hover:opacity-90">
      <img
        src={asasLogo}
        alt="Asas Telemedicina"
        className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
      />

      <div>
        <p className="font-display text-lg font-semibold leading-none">
          Clínica Popular
        </p>

        <p className="font-display text-lg leading-none text-lilac">
          Asas Telemedicina
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
        href="#especialidades"
        className="transition hover:text-foreground"
      >
        Especialidades
      </a>

      <a
        href="#como-funciona"
        className="transition hover:text-foreground"
      >
        Como funciona
      </a>

      <a
        href="#documentos"
        className="transition hover:text-foreground"
      >
        Documentos
      </a>

      <Link
        to="/central-de-saude"
        className="transition hover:text-foreground"
      >
        Artigos
      </Link>

      <a
        href="#faq"
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
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-deep hover:shadow-lg lg:inline-flex"
    >
      <MessageCircle className="h-4 w-4" />
      Agendar pelo WhatsApp
    </a>

  </div>
</header>

      {/* HERO */}
      {/*<section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lilac-soft blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-72 w-72 rounded-full bg-secondary blur-3xl opacity-60" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-lilac" />
              Teleconsulta 100% online
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Cuidado médico <em className="not-italic text-lilac">acessível</em>, no conforto da sua casa.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Atendimento por vídeo com profissionais de diversas especialidades e áreas de atuação. Consultas com médicos
              <span className="font-medium text-foreground"> a partir de R$ 120,00</span>. Possibilidade de emissão de atestados, laudos e relatórios médicos emitidos online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-azure-deep px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-azure-deep/20 transition hover:bg-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Ver Áreas de Atendimento
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-lilac" /> Médicos registrados</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-lilac" /> Atendimento ágil</div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-lilac" /> Documentos válidos</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-lilac/30" />
            <img
              src={heroDoctor}
              alt="Médica em teleconsulta"
              width={1536}
              height={1536}
              className="relative aspect-square w-full rounded-3xl object-cover shadow-2xl shadow-azure-deep/10"
            />
            <div className="absolute -top-5 -right-5 hidden h-24 w-24 items-center justify-center rounded-2xl border border-border bg-card p-2 shadow-xl md:flex">
              <img src={asasLogo} alt="Logo Asas Telemedicina" className="h-full w-full object-contain" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Consultas médicas a partir de</p>
              <p className="font-display text-3xl font-semibold text-azure-deep">R$ 120,00</p>
            </div>
          </div>
        </div>
      </section>*/}

{/* ======================= HERO ======================= */}

<section
  id="top"
  className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
>

  <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-lilac/15 blur-3xl" />

  <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-secondary/60 blur-3xl" />

  <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">

    {/* TEXTO */}

    <div>

      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">

        <span className="h-2 w-2 rounded-full bg-lilac" />

        Teleconsulta • Atendimento online

      </span>

      <h1 className="mt-7 max-w-xl font-display text-5xl leading-[1.05] md:text-6xl">

        Cuidado médico{" "}

        <span className="text-lilac">

          acessível

        </span>

        , no conforto da sua casa.

      </h1>

      <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">

        Consultas médicas online com profissionais qualificados em diversas áreas da saúde. Atendimento por vídeo com possibilidade de emissão de receitas digitais, atestados, laudos e relatórios médicos quando indicados.

      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-azure-deep px-7 py-4 text-sm font-medium text-primary-foreground shadow-xl shadow-azure-deep/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground"
        >

          <MessageCircle className="h-4 w-4" />

          Agendar pelo WhatsApp

        </a>

        <a
          href="#especialidades"
          className="inline-flex items-center rounded-full border border-border bg-card px-7 py-4 text-sm font-medium transition hover:bg-secondary"
        >

          Ver Especialidades

        </a>

      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-5 shadow-sm">

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">

          <div className="flex items-center gap-2">

            <Globe className="h-4 w-4 text-lilac" />

            Brasil e exterior

          </div>

          <div className="flex items-center gap-2">

            <ShieldCheck className="h-4 w-4 text-lilac" />

            CRM ativo

          </div>

          <div className="flex items-center gap-2">

            <FileText className="h-4 w-4 text-lilac" />

            Receitas digitais

          </div>

        </div>

      </div>

    </div>

    {/* FOTO */}

    <div className="relative isolate">

      <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-lilac/20" />

      <div className="absolute inset-0 z-10 rounded-[2rem] bg-gradient-to-r from-lilac/20 via-transparent to-transparent" />

      <img
        src={heroDoctor}
        alt="Médica realizando teleconsulta"
        className="relative z-20 aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-black/20"
      />

      {/* CARD SUPERIOR */}

      <div className="absolute -top-6 -right-6 z-30 hidden rounded-3xl border border-border bg-background p-5 shadow-2xl lg:block">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac/10">

            <Users className="h-7 w-7 text-lilac" />

          </div>

          <div>

            <p className="font-display text-3xl leading-none text-foreground">

              2.000+

            </p>

            <p className="mt-1 text-sm font-medium text-foreground">

              Pacientes atendidos

            </p>

            <div className="mt-2 flex items-center gap-1 text-yellow-400">

              ★★★★★

            </div>

          </div>

        </div>

      </div>

      {/* CARD INFERIOR */}

      <div className="absolute -bottom-7 -left-7 z-30 hidden w-72 rounded-3xl border border-border bg-background p-6 shadow-2xl lg:block">

        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

          Consultas

        </p>

        <p className="mt-2 text-sm text-muted-foreground">

          a partir de

        </p>

        <p className="mt-1 font-display text-5xl leading-none text-azure-deep">

          R$ 120

          <span className="text-2xl text-muted-foreground">

            ,00

          </span>

        </p>

        <div className="my-5 h-px bg-border" />

        <div className="space-y-3 text-sm">

          <div className="flex items-center gap-2">

            <Check className="h-4 w-4 text-lilac" />

            Atendimento por vídeo

          </div>

          <div className="flex items-center gap-2">

            <Check className="h-4 w-4 text-lilac" />

            Receita digital

          </div>

          <div className="flex items-center gap-2">

            <Check className="h-4 w-4 text-lilac" />

            Documentos médicos

          </div>

        </div>

      </div>

      {/* CARD SEGURANÇA */}

      <div className="absolute bottom+6 -right-12 z-30 hidden rounded-3xl border border-border bg-background p-5 shadow-2xl xl:block">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">

            <ShieldCheck className="h-6 w-6 text-green-600" />

          </div>

          <div>

            <p className="font-semibold text-foreground">

              Consulta segura

            </p>

            <p className="mt-2 max-w-[180px] text-sm leading-6 text-muted-foreground">

              Seus dados são protegidos durante toda a consulta.

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      



      {/* TRUST CARDS */}
{/* ===================== CONFIANÇA ===================== */}
<section className="py-16 bg-background">
  <div className="mx-auto max-w-6xl px-6">

    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full bg-lilac/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-lilac">
        Confiança
      </span>

      <h2 className="mt-5 font-display text-3xl md:text-4xl">
        Confiança construída
        <span className="text-azure-deep"> atendimento após atendimento.</span>
      </h2>

      <p className="mt-4 text-muted-foreground">
        Mais de <strong className="text-foreground">2.000 pacientes</strong> já confiaram
        na ASAS Telemedicina para cuidar da sua saúde.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* CARD 1 */}
      <div className="flex h-full flex-col rounded-3xl border border-background/10 bg-foreground p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lilac/20">
          <Users className="h-5 w-5 text-lilac" />
        </div>

        <p className="font-display text-4xl text-background">
          2.000+
        </p>

        <h3 className="mt-3 text-xl font-semibold text-background">
          Pacientes atendidos
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-background/70">
          Atendimento humanizado, seguro e acolhedor em cada consulta.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="flex h-full flex-col rounded-3xl border border-background/10 bg-foreground p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lilac/20">
          <ShieldCheck className="h-5 w-5 text-lilac" />
        </div>

        <p className="font-display text-4xl text-background">
          Médicos
        </p>

        <h3 className="mt-3 text-xl font-semibold text-background">
          Registrados
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-background/70">
          Profissionais com CRM ativo, ética e compromisso com sua saúde.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="flex h-full flex-col rounded-3xl border border-background/10 bg-foreground p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lilac/20">
          <FileText className="h-5 w-5 text-lilac" />
        </div>

        <p className="font-display text-4xl text-background">
          Documentos
        </p>

        <h3 className="mt-3 text-xl font-semibold text-background">
          Digitais
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-background/70">
          Receitas, atestados, laudos e relatórios quando indicados pelo médico.
        </p>

      </div>

      {/* CARD 4 */}
      <div className="flex h-full flex-col rounded-3xl border border-background/10 bg-foreground p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lilac/20">
          <Globe className="h-5 w-5 text-lilac" />
        </div>

        <p className="font-display text-4xl text-background">
          Atendimento
        </p>

        <h3 className="mt-3 text-xl font-semibold text-background">
          Brasil e Exterior
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-background/70">
          Consulte-se de onde estiver com praticidade, conforto e segurança.
        </p>

      </div>

    </div>

  </div>
</section>



      

      {/* SPECIALTIES */}
      <section id="especialidades" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">Cuidados Oferecidos</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Atendimentos feitos por <em className="not-italic text-azure-deep">teleconsulta</em>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Você é atendido por vídeo, com privacidade e tranquilidade — do seu celular ou computador,
              onde estiver.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-background p-7 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lilac-soft text-azure-deep transition group-hover:bg-lilac group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">Como funciona</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Simples, humano e<br /> sem sair de casa.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Todos os atendimentos da Clínica Popular Asas Telemedicina são realizados <strong className="text-foreground">100% por teleconsulta</strong>,
              por vídeo chamada segura. Você fala diretamente com o médico, recebe orientação e, quando necessário,
              seus documentos chegam por e-mail ou WhatsApp.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Como você será atendido</p>
              <p className="mt-2">
                A consulta acontece por <strong className="text-foreground">vídeo chamada</strong> em uma sala
                online segura. Você só precisa de um celular, tablet ou computador com câmera, microfone e
                internet — não é necessário instalar nenhum aplicativo. No horário marcado, basta clicar no link
                enviado pelo WhatsApp para entrar na sala e conversar diretamente com o médico, com total
                privacidade e sigilo.
              </p>
              <p className="mt-3 font-medium text-foreground">Como acessar seus documentos</p>
              <p className="mt-2">
                Quando o médico indicar, <strong className="text-foreground">atestados, afastamentos, laudos,
                relatórios e receitas</strong> são emitidos com assinatura digital válida em todo o Brasil e
                enviados, em poucos minutos após a consulta, em PDF pelo seu <strong className="text-foreground">
                WhatsApp</strong> e/ou <strong className="text-foreground">e-mail</strong>. Você pode imprimir,
                encaminhar para a empresa ou apresentar em farmácias normalmente.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-azure-deep"
            >
              <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
            </a>
          </div>
          <ol className="space-y-6">
            {[
              { n: "01", t: "Fale com a equipe no WhatsApp", d: "Envie uma mensagem para a nossa equipe, informe a especialidade, área de atuação e o motivo do atendimento. Tiramos suas dúvidas e mostramos os horários disponíveis." },
              { n: "02", t: "Agende e faça o pagamento", d: "Escolha o horário que melhor se encaixa na sua rotina e realize o pagamento online por Pix ou cartão. A confirmação é imediata." },
              { n: "03", t: "Receba o link da sala virtual", d: "Pouco antes da consulta, enviamos pelo WhatsApp o link de acesso à sala de vídeo, junto com orientações simples para entrar." },
              { n: "04", t: "Consulta por vídeo com o médico", d: "No horário marcado, você entra na sala pelo celular ou computador e conversa por vídeo com o médico, com sigilo e privacidade." },
              { n: "05", t: "Receba seus documentos", d: "Quando indicado, atestado, afastamento, relatório, laudo ou receita são assinados digitalmente e enviados em PDF pelo seu WhatsApp e e-mail." },
            ].map((s) => (
              <li key={s.n} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-3xl text-lilac">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>



  {/* ===================== DEPOIMENTOS ===================== */}

<section className="overflow-hidden py-20 bg-background">

<div className="mx-auto max-w-6xl px-6">

<div className="mx-auto max-w-3xl text-center">

<span className="inline-flex items-center rounded-full bg-lilac/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-lilac">
Depoimentos
</span>

<h2 className="mt-5 font-display text-3xl md:text-4xl">
O que nossos pacientes dizem
</h2>

<p className="mt-4 text-muted-foreground">
A confiança dos nossos pacientes é o que inspira o nosso cuidado todos os dias.
</p>

</div>

{/* PRIMEIRA LINHA */}

<div className="mt-14">

<div className="marquee-left gap-6">

{[...testimonials,...testimonials].map((item,index)=>(

<div
key={index}
className="w-[330px] flex-shrink-0 rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>

<div className="text-yellow-400 text-lg tracking-wider">

★★★★★

</div>

<p className="mt-5 text-sm leading-7 text-muted-foreground">

"{item.text}"

</p>

<div className="mt-6">

<p className="font-semibold">

{item.name}

</p>

<p className="text-sm text-muted-foreground">

{item.city}

</p>

</div>

</div>

))}

</div>

</div>
</div>

</section>

  

      {/* DOCUMENTS / PRICING */}
      <section id="documentos" className="bg-foreground py-24 text-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">Documentos médicos</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-background">
              Atestados, laudos e relatórios — emitidos online.
            </h2>
            <p className="mt-5 text-background/70">
              Quando indicado pelo médico, fornecemos toda a documentação necessária com validade legal.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map(({ label }) => (
                <li key={label} className="flex items-center gap-3 text-background/90">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lilac/20 text-lilac">
                    <Check className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-background/10 bg-background/5 p-10 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">Consultas</p>
            <p className="mt-4 font-display text-6xl text-background">
              R$ 120<span className="text-2xl text-background/60">,00</span>
            </p>
            <p className="mt-2 text-sm text-background/60">valor inicial por consulta</p>
            <div className="my-8 h-px bg-background/15" />
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-lilac" /> Atendimento por vídeo</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-lilac" /> Documentos médicos digitais</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-lilac" /> Receita quando indicado</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-lilac" /> Sigilo e segurança</li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lilac px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-background hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Agendar agora
            </a>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">FAQ</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Perguntas <em className="not-italic text-azure-deep">frequentes</em>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tudo o que você precisa saber sobre telemedicina e teleconsulta. Caso
              persista alguma dúvida, todas as informações também são passadas pela
              nossa equipe no WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-azure-deep px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-azure-deep/20 transition hover:bg-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Tirar dúvidas no WhatsApp
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-background p-2 md:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border px-4">
                  <AccordionTrigger className="font-display text-left text-lg hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* ARTIGOS DE SAÚDE */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-border bg-background p-10 text-center shadow-sm">
            <span className="inline-flex items-center rounded-full bg-lilac/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-lilac">
              Artigos de Saúde
            </span>
      
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Continue aprendendo sobre sua saúde
            </h2>
      
           {/*  <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Reunimos conteúdos médicos confiáveis sobre teleconsulta,
              saúde mental, clínica geral, ginecologia, pediatria,
              emagrecimento, documentos médicos e diversos outros temas
              para ajudar você a tomar decisões com mais segurança.
            </p> */}
      
            <Link
              to="/central-de-saude"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-azure-deep px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-foreground"
            >
              📚 Explorar Artigos de Saúde
            </Link>
          </div>
        </div>
      </section>

      
      <section className="border-t border-border bg-card/30 py-20">
  <div className="mx-auto max-w-5xl px-6">

    <div className="rounded-3xl border border-border bg-background p-10 text-center shadow-sm">

      <span className="inline-flex items-center rounded-full bg-lilac/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-lilac">
        Nossa Missão
      </span>

      <h2 className="mt-5 font-display text-3xl md:text-4xl">
        A saúde deve estar ao alcance de todos.
      </h2>

      <br />

      <p className="mx-auto max-w-3xl text-justify text-muted-foreground leading-8">
        A ASAS Telemedicina nasceu acreditando que o acesso à saúde de qualidade
        não deve ser um privilégio. Nossa missão é aproximar profissionais e
        pacientes por meio da tecnologia, contribuindo para a democratização do
        atendimento em saúde em todo o Brasil.
      </p>

      <br />

      <p className="mx-auto max-w-3xl text-justify text-muted-foreground leading-8">
        Buscamos promover um cuidado baseado na longitudinalidade, fortalecendo
        o acompanhamento contínuo dos pacientes, incentivando a prevenção, o
        diagnóstico precoce, a educação em saúde e a construção de vínculos de
        confiança entre profissionais e pessoas atendidas.
      </p>

      <br />

      {/* <p className="mx-auto max-w-3xl text-justify text-muted-foreground leading-8">
        Acreditamos que consultas e acompanhamentos com médicos,
        psicólogos, fisioterapeutas, nutricionistas e demais profissionais da
        saúde podem ser mais acessíveis sem abrir mão da ética, da qualidade
        técnica e do atendimento humanizado.
      </p>

      <br />  */}

      <p className="mx-auto max-w-3xl text-justify text-muted-foreground leading-8">
        Se você compartilha desses valores e deseja contribuir para ampliar o
        acesso à saúde, reduzir desigualdades e transformar positivamente a vida
        das pessoas, será uma satisfação conhecer sua trajetória profissional.
      </p>

      <Link
        to="/faca-parte"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
      >
        💜 Faça parte da equipe
      </Link>

    </div>

  </div>
</section>

      

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={asasLogo} alt="Asas Telemedicina" className="h-12 w-12 rounded-full object-cover ring-1 ring-border" />
            <div>
              <p className="font-display text-base text-foreground">Clínica Popular Asas Telemedicina</p>
              <p className="text-xs">A medicina que te dá liberdade</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 md:items-end">
              <Link
                to="/faca-parte"
                className="font-medium text-lilac hover:text-foreground"
              >
                Faça parte da equipe
              </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              WhatsApp: (45) 92001-8284
            </a>
            <p className="text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-azure-deep text-primary-foreground shadow-xl shadow-azure-deep/30 transition hover:scale-105 hover:bg-lilac"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
