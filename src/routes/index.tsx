import { createFileRoute } from "@tanstack/react-router";
import heroDoctor from "@/assets/hero-doctor.jpg";
import asasLogo from "@/assets/asas-logo.asset.json";
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
"Teleconsulta com psiquiatria, clínica geral, ginecologia, pediatria, emagrecimento e mais. Atestados, afastamentos, laudos e relatórios médicos. A partir de R$ 120.",
},
{ property: "og:title", content: "Clínica Popular Asas Telemedicina — Cuidado médico online" },
{
property: "og:description",
content:
"Consultas online com médicos especialistas. Atestados, laudos e relatórios. A partir de R$ 120.",
},
],
links: [
{
rel: "canonical",
href: "https://www.asastelemedicina.com.br/",
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
    a: "Basta enviar uma mensagem no nosso WhatsApp. Nossa equipe te orienta sobre a especialidade, horários disponíveis e forma de pagamento.",
  },
  {
    q: "Quanto custa a consulta?",
    a: "As consultas começam a partir de R$ 120,00. O valor pode variar conforme a especialidade — a equipe informa todos os detalhes no WhatsApp antes do agendamento.",
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={asasLogo.url}
              alt="Asas Telemedicina"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              Clínica Popular <span className="text-lilac">Asas Telemedicina</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#especialidades" className="hover:text-foreground">Especialidades</a>
            <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
            <a href="#documentos" className="hover:text-foreground">Documentos</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-azure-deep md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
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
              Atendimento por vídeo com profissionais de diversas especialidades. Consultas
              <span className="font-medium text-foreground"> a partir de R$ 120,00</span> — com
              atestados, laudos e relatórios médicos emitidos online.
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
                Ver especialidades
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
              <img src={asasLogo.url} alt="Logo Asas Telemedicina" className="h-full w-full object-contain" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Consultas a partir de</p>
              <p className="font-display text-3xl font-semibold text-azure-deep">R$ 120,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="especialidades" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">Especialidades</p>
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
              { n: "01", t: "Fale com a equipe no WhatsApp", d: "Envie uma mensagem para a nossa equipe, informe a especialidade desejada e o motivo do atendimento. Tiramos suas dúvidas e mostramos os horários disponíveis." },
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

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={asasLogo.url} alt="Asas Telemedicina" className="h-12 w-12 rounded-full object-cover ring-1 ring-border" />
            <div>
              <p className="font-display text-base text-foreground">Clínica Popular Asas Telemedicina</p>
              <p className="text-xs">A medicina que te dá liberdade</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 md:items-end">
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
