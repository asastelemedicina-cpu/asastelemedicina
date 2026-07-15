import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MessageCircle,
  HeartHandshake,
  Users,
} from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";
import heroDoctor from "@/assets/hero-doctor.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ASAS } from "@/lib/config";

export const Route = createFileRoute("/faca-parte")({
  head: () => ({
    meta: [
      {
        title: "Faça Parte da Equipe | ASAS Telemedicina",
      },
      {
        name: "description",
        content:
          "Faça parte da equipe da ASAS Telemedicina. Estamos ampliando nosso banco de profissionais parceiros e recebendo candidaturas de médicos, psicólogos, fisioterapeutas, nutricionistas, enfermeiros e outros profissionais habilitados para teleatendimento em todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "trabalhe conosco, carreiras, telemedicina, médico, psicólogo, fisioterapeuta, nutricionista, enfermeiro, fonoaudiólogo, terapeuta ocupacional, farmacêutico, educação física, atendimento online, vagas telemedicina, profissional da saúde, consulta online",
      },
      {
        property: "og:title",
        content: "Faça Parte da Equipe | ASAS Telemedicina",
      },
      {
        property: "og:description",
        content:
          "Estamos ampliando nossa equipe de profissionais da saúde para atuação em teleatendimento em todo o Brasil.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.asastelemedicina.com.br/faca-parte",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
  }),
  component: FacaParte,
});

const WHATSAPP_MESSAGE = encodeURIComponent(`Olá!

Gostaria de me candidatar para atuar na ASAS Telemedicina.

👤 Nome completo:

📋 Conselho profissional (CRM, CRP, CREFITO, COREN, CRN ou outro) e UF:

📚 Especialidade ou área de atuação:

🎓 Subespecialidade (se houver):

🏥 Cidade/Estado:

📱 Telefone:

📧 E-mail:

🕒 Disponibilidade para atendimentos:

🌐 Redes sociais profissionais (opcional)

Instagram:

LinkedIn:

Facebook:

X (Twitter):

📄 Currículo (anexarei após esta mensagem).

Fico à disposição para fornecer outras informações, caso necessário.`);

const WHATSAPP_URL = `https://wa.me/5545920018284?text=${WHATSAPP_MESSAGE}`;

function FacaParte() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      
      <Header />
      
      
      <section className="relative overflow-hidden border-b border-border section-default md:pt-12 md:pb-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-lilac-soft blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary blur-3xl opacity-60" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <HeartHandshake className="h-3.5 w-3.5 text-lilac" />
              Faça parte da equipe
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Faça parte da{" "}
              <span className="text-lilac">ASAS Telemedicina</span>.
            </h1>

            <br />

            <p className="max-w-xl text-justify text-lg text-muted-foreground leading-8">
              Acreditamos que a tecnologia pode aproximar profissionais e
              pacientes, tornando o acesso à saúde mais humano, ágil e
              acessível.
            </p>

            <br />

            <p className="max-w-xl text-justify text-lg text-muted-foreground leading-8">
              Estamos ampliando nossa equipe e buscamos profissionais
              comprometidos com a ética, a qualidade assistencial e o
              atendimento humanizado em todo o Brasil.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-azure-deep px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Quero fazer parte da equipe
              </a>

              <a
                href="#profissionais"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition hover:bg-secondary"
              >
                <Users className="h-4 w-4" />
                Quem pode participar?
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-lilac/20" />

            <img
              src={heroDoctor}
              alt="Profissional da saúde em teleconsulta"
              className="relative aspect-square w-full rounded-3xl object-cover shadow-2xl shadow-azure-deep/10"
            />

            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-card p-5 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Estamos formando uma
              </p>

              <p className="mt-1 font-display text-2xl text-azure-deep">
                Equipe Multiprofissional
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-default">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Por que atuar na ASAS?
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Cresça junto com uma plataforma{" "}
              <span className="text-azure-deep">em evolução.</span>
            </h2>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              A ASAS Telemedicina nasceu com o propósito de ampliar o acesso à
              saúde por meio da tecnologia, sempre valorizando o atendimento
              humanizado, a ética e o respeito aos pacientes.
            </p>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              Estamos formando uma equipe multiprofissional para oferecer
              atendimento remoto de excelência em todo o Brasil e buscamos
              profissionais comprometidos com qualidade, responsabilidade e
              acolhimento.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac-soft">
                <HeartHandshake className="h-7 w-7 text-azure-deep" />
              </div>

              <h3 className="font-display text-2xl">
                Atendimento Humanizado
              </h3>

              <p className="mt-4 text-justify text-muted-foreground leading-7">
                Valorizamos profissionais que enxergam cada paciente de forma
                individual, oferecendo um cuidado ético, responsável e acolhedor.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac-soft">
                <Users className="h-7 w-7 text-azure-deep" />
              </div>

              <h3 className="font-display text-2xl">
                Equipe Multiprofissional
              </h3>

              <p className="mt-4 text-justify text-muted-foreground leading-7">
                Trabalhe ao lado de profissionais de diferentes áreas da saúde,
                promovendo um cuidado integrado e colaborativo.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac-soft">
                <MessageCircle className="h-7 w-7 text-azure-deep" />
              </div>

              <h3 className="font-display text-2xl">
                Atendimento Online
              </h3>

              <p className="mt-4 text-justify text-muted-foreground leading-7">
                Realize atendimentos por teleconsulta com praticidade, segurança
                e flexibilidade para organizar sua agenda.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10">
              <div className="mb-5 text-4xl">📅</div>

              <h3 className="font-display text-2xl">
                Flexibilidade
              </h3>

              <p className="mt-4 text-justify text-muted-foreground leading-7">
                Defina sua disponibilidade conforme sua rotina e concilie seus
                atendimentos com outras atividades profissionais.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10">
              <div className="mb-5 text-4xl">Do Brasil para o Mundo</div>

              <h3 className="font-display text-2xl">
                Alcance Nacional e Internacional
              </h3>

              <p className="mt-4 text-justify text-muted-foreground leading-7">
                Ajude pacientes de diferentes regiões do Brasil e do Mundo sem necessidade
                de deslocamentos.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10">
              <div className="mb-5 text-4xl">📈</div>

              <h3 className="font-display text-2xl">
                Plataforma em Crescimento
              </h3>

              <p className="mt-4 text-justify text-muted-foreground leading-7">
                Faça parte de um projeto em constante evolução, construído para
                ampliar o acesso à saúde com qualidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="profissionais"
        className="border-t border-border bg-card/40 section-default"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Quem pode fazer parte?
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Estamos formando uma equipe{" "}
              <span className="text-azure-deep">multiprofissional.</span>
            </h2>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              Recebemos candidaturas de profissionais habilitados para atuação
              em teleatendimento, sempre respeitando a legislação vigente e as
              normas dos respectivos conselhos profissionais.
            </p>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              Caso sua profissão permita atendimento remoto e não esteja
              listada abaixo, também teremos satisfação em conhecer seu perfil.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Médicos (todas as especialidades)",
              "Psicólogos",
              "Nutricionistas",
              "Fisioterapeutas",
              "Fonoaudiólogos",
              "Terapeutas Ocupacionais",
              "Educadores Físicos",
              "Assistentes Sociais",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-background p-6 transition hover:border-lilac"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lilac/10 text-lilac">
                    ✓
                  </div>

                  <h3 className="font-display text-xl">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-default">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              O que buscamos?
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Mais do que currículos, buscamos{" "}
              <span className="text-azure-deep">boas pessoas.</span>
            </h2>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              A ASAS Telemedicina acredita que o atendimento de excelência
              depende não apenas do conhecimento técnico, mas também da empatia,
              ética e compromisso com cada paciente.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Registro profissional ativo",
              "Ética profissional",
              "Boa comunicação",
              "Atendimento humanizado",
              "Pontualidade",
              "Organização",
              "Facilidade com tecnologia",
              "Comprometimento",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lilac/10 text-xl text-lilac">
                  ✓
                </div>

                <p className="mt-5 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 section-default">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Como funciona?
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Processo simples,{" "}
              <span className="text-azure-deep">
                rápido e totalmente online.
              </span>
            </h2>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              Nosso objetivo é conhecer seu perfil profissional.
              Todo o processo inicial acontece pelo WhatsApp.
            </p>
          </div>

          <div className="mt-16 space-y-8">

            {[
              {
                numero: "01",
                titulo: "Envie sua apresentação",
                texto:
                  "Clique no botão 'Quero fazer parte da equipe'. Uma mensagem será aberta automaticamente no WhatsApp com os principais dados para preenchimento.",
              },
              {
                numero: "02",
                titulo: "Nossa equipe analisa seu perfil",
                texto:
                  "Analisaremos sua formação, área de atuação, disponibilidade e demais informações encaminhadas.",
              },
              {
                numero: "03",
                titulo: "Contato da equipe",
                texto:
                  "Caso seu perfil seja compatível com nossas necessidades atuais, entraremos em contato para solicitar documentos complementares e dar continuidade ao processo.",
              },
            ].map((item) => (
              <div
                key={item.numero}
                className="flex gap-6 rounded-3xl border border-border bg-background p-8"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lilac text-2xl font-bold text-white">
                  {item.numero}
                </div>

                <div>
                  <h3 className="font-display text-2xl">
                    {item.titulo}
                  </h3>

                  <br />

                  <p className="text-justify text-muted-foreground leading-8">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-14 rounded-3xl border border-lilac/30 bg-lilac/5 p-8">

            <h3 className="font-display text-3xl">
              Importante
            </h3>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              O envio das informações não representa contratação,
              credenciamento ou garantia de futura parceria com a ASAS
              Telemedicina.
            </p>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              Cada candidatura será analisada individualmente,
              conforme as necessidades da plataforma e o perfil
              profissional apresentado.
            </p>

          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 section-default">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr]">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Perguntas Frequentes
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Ainda ficou com{" "}
              <span className="text-azure-deep">alguma dúvida?</span>
            </h2>

            <br />

            <p className="text-justify text-muted-foreground leading-8">
              Reunimos as perguntas mais frequentes sobre o processo de
              candidatura. Caso ainda tenha dúvidas, nossa equipe estará à
              disposição pelo WhatsApp.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-azure-deep px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Conversar no WhatsApp
            </a>

          </div>

          <div className="rounded-2xl border border-border bg-background p-2 md:p-4">

            <Accordion type="single" collapsible className="w-full">

              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Existe vínculo empregatício?
                </AccordionTrigger>

                <AccordionContent>
                  Não necessariamente. Cada parceria é analisada individualmente,
                  conforme as necessidades da ASAS Telemedicina e a legislação
                  aplicável.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Preciso ter experiência com telemedicina?
                </AccordionTrigger>

                <AccordionContent>
                  Não obrigatoriamente. A experiência pode ser um diferencial,
                  porém candidatos sem atuação prévia também podem participar do
                  processo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Posso atuar de qualquer estado?
                </AccordionTrigger>

                <AccordionContent>
                  Sim. Desde que sua profissão e seu registro profissional
                  permitam atuação conforme a legislação vigente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Minha profissão não está listada.
                </AccordionTrigger>

                <AccordionContent>
                  Se sua profissão possuir regulamentação para teleatendimento,
                  teremos satisfação em conhecer seu perfil profissional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Como saberei se fui selecionado?
                </AccordionTrigger>

                <AccordionContent>
                  Caso seu perfil seja compatível com nossas necessidades,
                  entraremos em contato pelos meios informados em sua
                  apresentação.
                </AccordionContent>
              </AccordionItem>

            </Accordion>

          </div>

        </div>
      </section>

      <section className="border-t border-border bg-foreground section-default text-background">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-xs uppercase tracking-[0.2em] text-lilac">
            Faça parte da equipe
          </p>

          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Vamos conhecer o seu perfil?
          </h2>

          <br />

          <p className="mx-auto max-w-3xl text-justify text-background/80 leading-8">
            Estamos sempre em busca de profissionais comprometidos com a ética,
            a excelência técnica e o atendimento humanizado. Se você acredita
            que pode contribuir para a missão da ASAS Telemedicina, teremos
            satisfação em conhecer sua trajetória profissional.
          </p>

          <br />

          <p className="mx-auto max-w-3xl text-justify text-background/80 leading-8">
            Clique no botão abaixo. Uma mensagem será aberta automaticamente no
            WhatsApp com um modelo de apresentação. Basta preencher as
            informações, anexar seu currículo e enviar para nossa equipe.
          </p>

          <div className="mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-lilac px-8 py-4 text-base font-semibold text-foreground transition hover:bg-background"
            >
              <MessageCircle className="h-5 w-5" />
              Quero fazer parte da equipe
            </a>
          </div>

        </div>
      </section>

      <Footer />

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


      

      



      

      
