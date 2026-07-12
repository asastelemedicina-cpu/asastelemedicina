import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  Brain,
  Heart,
  ShieldCheck,
  Check,
  FileText,
  Share2,
  Facebook,
  Linkedin,
  Calendar,
  Home,
  Zap,
  Users,
  Smile,
} from "lucide-react";

import asasLogo from "@/assets/asas-logo.jpeg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/5545920018284";

const CANONICAL =
  "https://www.asastelemedicina.com.br/psiquiatria-online";

const PUBLISHED = "2026-07-03";
const UPDATED = "2026-07-03";

const TITLE =
  "Psiquiatra Online: Quando Procurar, Como Funciona a Consulta Psiquiátrica Online";

const DESCRIPTION =
  "Entenda quando procurar um profissional na área de psiquiatria, como funciona a consulta online na área de psiquiatria, quando ela é indicada, quais medicamentos podem ser prescritos e quando buscar ajuda.";

const faqs = [
  {
    q: "Quando devo procurar um profissional na área de psiquiatria?",
    a: "Sempre que sintomas emocionais ou comportamentais começarem a prejudicar seu trabalho, estudos, relacionamentos, sono ou qualidade de vida.",
  },
  {
    q: "Como funciona uma consulta online na área de psiquiatria?",
    a: "A consulta é realizada por vídeo, em ambiente seguro, permitindo avaliação clínica, diagnóstico, orientação e acompanhamento, assim como em uma consulta presencial.",
  },
  {
    q: "Médico na área de psiquiatria pode dar atestado online?",
    a: "Sim. Quando houver indicação clínica, o médico pode emitir atestado médico digital assinado eletronicamente conforme a legislação vigente.",
  },
  {
    q: "Médico na área de psiquiatria pode receitar medicamentos online?",
    a: "Sim. Receitas digitais podem ser emitidas conforme a legislação brasileira e o tipo de medicamento prescrito.",
  },
  {
    q: "Receitas de medicamentos controlados podem ser emitidas online?",
    a: "Dependendo da categoria do medicamento e da regulamentação vigente, o psiquiatra pode emitir receitas digitais para medicamentos sujeitos a controle especial.",
  },
  {
    q: "Quanto dura uma consulta com médico na área de psiquiatria?",
    a: "A primeira consulta normalmente dura entre 40 e 60 minutos, retornos costumam ser mais curtos.",
  },
  {
    q: "Médico na área de psiquiatria faz terapia?",
    a: "O foco principal do psiquiatra é o diagnóstico médico e o tratamento dos transtornos mentais. Em muitos casos, o tratamento é realizado em conjunto com psicólogos.",
  },
  {
    q: "A consulta online tem a mesma validade da presencial?",
    a: "Sim. A telemedicina é regulamentada no Brasil e possui a mesma validade jurídica para consultas, receitas e documentos emitidos dentro das normas vigentes.",
  },
  {
    q: "Preciso de encaminhamento?",
    a: "Não. O paciente pode agendar diretamente sua consulta.",
  },
  {
    q: "Posso fazer a consulta pelo celular?",
    a: "Sim. Basta possuir internet, câmera e microfone.",
  },
  {
    q: "Médico online na área de psiquiatria é seguro?",
    a: "Sim. A consulta ocorre em plataforma segura, preservando o sigilo médico e a confidencialidade das informações.",
  },
  {
    q: "Quem pode consultar com um médico online na área de psiquiatria?",
    a: "Adultos, idosos e adolescentes acompanhados de responsável, quando indicado.",
  },
];

const toc = [
  { id: "oquefaz", label: "O que faz um médico na área de psiquiatria" },
  { id: "quando", label: "Quando procurar um médico na área de psiquiatria" },
  { id: "ansiedade", label: "Ansiedade" },
  { id: "depressao", label: "Depressão" },
  { id: "panico", label: "Síndrome do Pânico" },
  { id: "burnout", label: "Burnout" },
  { id: "tdah", label: "TDAH" },
  { id: "insonia", label: "Insônia" },
  { id: "consulta", label: "Como funciona a consulta online" },
  { id: "primeira", label: "Primeira consulta" },
  { id: "psicologo", label: "Psiquiatra ou Psicólogo" },
  { id: "receitas", label: "Receitas e medicamentos" },
  { id: "controlados", label: "Medicamentos controlados" },
  { id: "atestado", label: "Atestado médico online" },
  { id: "documentos", label: "Documentos emitidos na consulta" },
  { id: "vantagens", label: "Vantagens da consulta online" },
  { id: "preparo", label: "Como se preparar para a consulta" },
  { id: "asas", label: "Por que escolher a ASAS" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "conclusao", label: "Conclusão" },
];

export const Route = createFileRoute("/psiquiatria-online")({
  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESCRIPTION,
      },
      {
        name: "keywords",
        content:
          "psiquiatra online, consulta psiquiátrica online, psiquiatria online, ansiedade, depressão, burnout, TDAH, insônia, síndrome do pânico, médico online, receita médica digital, atestado médico online",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESCRIPTION,
      },
      {
        property: "og:url",
        content: CANONICAL,
      },
      {
        property: "article:published_time",
        content: PUBLISHED,
      },
      {
        property: "article:modified_time",
        content: UPDATED,
      },
      {
        property: "og:site_name",
        content: "Asas Telemedicina",
      },
      {
        property: "og:locale",
        content: "pt_BR",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: TITLE,
      },
      {
        name: "twitter:description",
        content: DESCRIPTION,
      },
    ],




        links: [
      {
        rel: "canonical",
        href: CANONICAL,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          url: CANONICAL,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          inLanguage: "pt-BR",
          articleSection: "Psiquiatria",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": CANONICAL,
          },
          author: {
            "@type": "Organization",
            name: "Asas Telemedicina",
          },
          publisher: {
            "@type": "Organization",
            name: "Asas Telemedicina",
          },
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: "https://www.asastelemedicina.com.br/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Artigos de Saúde",
              item: "https://www.asastelemedicina.com.br/central-de-saude",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Psiquiatria Online",
              item: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),

  component: PsiquiatriaOnline,
});

function PsiquiatriaOnline() {
  const shareText = encodeURIComponent(`${TITLE} • Asas Telemedicina`);
  const shareUrl = encodeURIComponent(CANONICAL);

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
            to="/central-de-saude"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Artigos de Saúde
          </Link>

        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12">

        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-xs text-muted-foreground"
        >

          <ol className="flex flex-wrap items-center gap-1">

            <li>
              <Link to="/">
                Início
              </Link>
            </li>

            <li>›</li>

            <li>
              <Link to="/central-de-saude">
                Artigos de Saúde
              </Link>
            </li>

            <li>›</li>

            <li className="text-foreground">
              Psiquiatria Online
            </li>

          </ol>

        </nav>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">

          <span className="text-lilac">
            Psiquiatria
          </span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            9 min de leitura
          </span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={PUBLISHED}>
              Publicado em 03 jul 2026
            </time>
          </span>

        </div>

        <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">

          Psiquiatra <em className="not-italic text-azure-deep">Online</em>:
          quando procurar, como funciona a consulta psiquiátrica online e
          quando ela é indicada

        </h1>

        <p className="mt-6 text-lg text-muted-foreground">

          A consulta na área de <strong>psiquiatria online</strong> tornou o
          acesso ao tratamento em saúde mental mais simples, rápido e seguro.
          Neste guia você entenderá quando procurar ajuda, como funciona uma
          <strong> consulta psiquiátrica online</strong>, quais sintomas merecem
          atenção e em quais situações a telemedicina é indicada.

        </p>

        <p className="mt-2 text-xs text-muted-foreground">

          Por <strong>Asas Telemedicina</strong> • Atualizado em{" "}
          <time dateTime={UPDATED}>
            03 de julho de 2026
          </time>

        </p>

        <aside className="mt-10 rounded-2xl border border-border bg-card p-6">

          <p className="text-xs uppercase tracking-widest text-lilac">
            Neste artigo
          </p>

          <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-decimal pl-5 text-sm">

            {toc.map((item) => (

              <li key={item.id}>

                <a
                  href={`#${item.id}`}
                  className="hover:text-azure-deep"
                >
                  {item.label}
                </a>

              </li>

            ))}

          </ol>

        </aside>

        <div className="mt-8 flex flex-wrap items-center gap-2">

          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Share2 className="h-4 w-4" />
            Compartilhar
          </span>

          <a
            href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1 hover:border-lilac"
          >
            WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1"
          >
            <Facebook className="h-4 w-4" />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1"
          >
            <Linkedin className="h-4 w-4" />
          </a>

        </div>

        <div className="prose-content mt-12 space-y-6 text-base leading-relaxed text-justify">


          <section id="oquefaz" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-6">
              O que faz um médico na área de psiquiatria?
            </h2>

            <br />

            <p>
              O <strong>médico na área de psiquiatria</strong> é um médico que
              atua no diagnóstico, tratamento, prevenção e acompanhamento dos
              transtornos mentais. Diferentemente de outras áreas da saúde, a
              psiquiatria avalia não apenas sintomas emocionais, mas também
              alterações do comportamento, do pensamento, da memória, do sono,
              da concentração e do humor.
            </p>

            <br />

            <p>
              Muitas pessoas acreditam que somente indivíduos com doenças
              psiquiátricas graves precisam procurar um psiquiatra. Na prática,
              isso não é verdade. Sintomas comuns, como ansiedade persistente,
              tristeza prolongada, dificuldade para dormir, crises de pânico,
              irritabilidade excessiva ou dificuldade de concentração podem
              indicar que uma avaliação médica especializada seja necessária.
            </p>

            <br />

            <p>
              Atualmente, realizar uma consulta online com um{" "}
              <strong>médico na área de psiquiatria</strong> é uma forma prática
              e segura de iniciar esse acompanhamento, permitindo acesso rápido
              ao especialista sem necessidade de deslocamento.
            </p>

            <div className="mt-6 rounded-xl border border-lilac/30 bg-lilac/5 p-5">

              <p className="text-sm">

                <strong>Importante:</strong> procurar ajuda psicológica ou
                psiquiátrica não significa fraqueza. Assim como qualquer outra
                doença, os transtornos mentais possuem tratamento e quanto mais
                cedo ele começa, maiores costumam ser as chances de recuperação.

              </p>

            </div>

          </section>

          <section id="quando" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-10">
              Quando procurar um médico na área de psiquiatria?
            </h2>

            <br />

            <p>
              Saber <strong>quando procurar um médico na área de psiquiatria</strong>
              é uma das dúvidas mais frequentes entre pacientes. Não existe um
              momento exato ou uma regra única. O principal sinal é quando
              alterações emocionais passam a interferir na qualidade de vida, no
              trabalho, nos estudos, nos relacionamentos ou nas atividades do
              dia a dia.
            </p>

            <br />

            <p>
              Algumas pessoas convivem durante meses ou até anos com sintomas
              acreditando que eles fazem parte da personalidade ou que irão
              desaparecer espontaneamente. Entretanto, muitos transtornos
              mentais possuem tratamento eficaz, principalmente quando
              diagnosticados precocemente.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {[
                "Ansiedade intensa ou constante",
                "Tristeza persistente",
                "Crises de pânico",
                "Insônia frequente",
                "Mudanças importantes de humor",
                "Burnout e esgotamento emocional",
                "Falta de concentração",
                "Perda do interesse pelas atividades",
                "Pensamentos negativos recorrentes",
                "Prejuízo no trabalho ou estudos",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-border bg-card p-4 flex gap-3"
                >

                  <Check className="h-5 w-5 text-azure-deep flex-none" />

                  <span className="text-sm">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">

              <div className="flex gap-4">

                <Brain className="h-10 w-10 text-azure-deep flex-none" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Não espere os sintomas piorarem
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Muitas pessoas procuram atendimento apenas quando a situação
                    já está bastante difícil. Quanto mais cedo ocorrer a
                    avaliação, maiores costumam ser as possibilidades de
                    controlar os sintomas, evitar agravamentos e recuperar a
                    qualidade de vida.
                  </p>

                </div>

              </div>

            </div>

          </section>

          <section id="ansiedade" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-10">
              Ansiedade: quando procurar um médico na área de psiquiatria?
            </h2>

            <br />

            <p>
              A ansiedade faz parte da vida e todos nós a sentimos em alguns
              momentos. Entretanto, quando ela se torna intensa, frequente ou
              começa a limitar as atividades diárias, pode ser sinal de um
              transtorno de ansiedade.
            </p>

            <br />

            <p>
              Quem pesquisa no Google se <strong>"ansiedade precisa de
              psiquiatra"</strong> geralmente deseja entender quando o problema
              deixou de ser apenas preocupação comum. Se os sintomas persistem,
              provocam sofrimento ou impedem uma rotina normal, vale a pena
              realizar uma avaliação especializada.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2">

              <li>Preocupação constante.</li>

              <li>Palpitações.</li>

              <li>Falta de ar.</li>

              <li>Tensão muscular.</li>

              <li>Dificuldade para relaxar.</li>

              <li>Medo intenso sem motivo aparente.</li>

            </ul>

            <p className="mt-5 text-sm text-muted-foreground">
              Em breve teremos um artigo completo explicando ansiedade, seus
              sintomas e tratamentos.
            </p>

          </section>

          <section id="depressao" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-10">
              Depressão: quando procurar ajuda?
            </h2>

            <br />

            <p>
              A depressão vai muito além da tristeza. Trata-se de um transtorno
              que pode afetar pensamentos, emoções, disposição física, memória,
              sono, alimentação e até sintomas corporais.
            </p>

            <br />

            <p>
              Quem procura saber se <strong>"depressão precisa de
              psiquiatra"</strong> deve observar principalmente a duração e a
              intensidade dos sintomas. Quando eles permanecem por semanas e
              prejudicam a rotina, é importante procurar avaliação médica.
            </p>

            <div className="mt-5 rounded-xl border border-border bg-card p-5">

              <h3 className="font-semibold">
                Alguns sinais comuns incluem:
              </h3>

              <ul className="mt-3 list-disc pl-5 space-y-2">

                <li>Tristeza persistente.</li>

                <li>Perda do interesse pelas atividades.</li>

                <li>Cansaço constante.</li>

                <li>Alterações do sono.</li>

                <li>Mudanças no apetite.</li>

                <li>Dificuldade para sentir prazer.</li>

                <li>Sentimentos de culpa ou inutilidade.</li>

              </ul>

            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Também publicaremos um conteúdo completo sobre depressão,
              diagnóstico e tratamento.
            </p>

          </section>

          <div className="mt-12 rounded-2xl border border-border bg-foreground p-8 text-background">

            <div className="flex items-start gap-4">

              <MessageCircle className="h-10 w-10 flex-none" />

              <div>

                <h2 className="font-display text-2xl">
                  Está em dúvida se precisa de um médico na área de psiquiatria?
                </h2>

                <p className="mt-3 text-background/80">
                  Converse com nossa equipe. O agendamento é simples, rápido e
                  você pode realizar sua consulta online com um médico na área
                  de psiquiatria sem sair de casa.
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background"
                >

                  <MessageCircle className="h-4 w-4" />

                  Agendar consulta pelo WhatsApp

                </a>

              </div>

            </div>

          </div>


          <section id="panico" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-10">
              Síndrome do Pânico
            </h2>

            <br />

            <p>
              A síndrome do pânico é caracterizada por crises súbitas de medo
              intenso acompanhadas de sintomas físicos importantes, como falta
              de ar, palpitações, suor excessivo, tremores, sensação de perda
              de controle e medo de morrer. Embora assustadoras, essas crises
              possuem tratamento e quanto mais cedo forem reconhecidas, melhores
              costumam ser os resultados.
            </p>

            <br />

            <p>
              Muitas pessoas procuram um <strong>psiquiatra online urgente</strong>
              após a primeira crise. Embora toda dor intensa deva ser avaliada,
              quando as causas clínicas são descartadas, o acompanhamento
              psiquiátrico torna-se fundamental para evitar novas crises e
              recuperar a qualidade de vida.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Em breve publicaremos um artigo completo sobre Síndrome do Pânico.
            </p>

          </section>

          <section id="burnout" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-10">
              Burnout e esgotamento emocional
            </h2>

            <br />

            <p>
              O Burnout está relacionado ao estresse crônico, principalmente
              associado ao trabalho. Sensação constante de exaustão,
              irritabilidade, perda de produtividade, dificuldade para se
              concentrar e falta de motivação são alguns dos sintomas mais
              frequentes.
            </p>

            <br />

            <p>
              Muitas vezes o Burnout é confundido com ansiedade ou depressão.
              A avaliação médica é importante para diferenciar essas condições e
              definir o tratamento mais adequado.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Em breve você encontrará um guia completo sobre Burnout em nossa
              Central de Saúde.
            </p>

          </section>

          <section id="tdah" className="scroll-mt-24 text-justify">

            <h2 className="font-display text-3xl mt-10">
              TDAH em adultos
            </h2>

            <br />

            <p>
              O Transtorno do Déficit de Atenção e Hiperatividade não ocorre
              apenas durante a infância. Muitos adultos convivem durante anos
              com dificuldades de concentração, procrastinação, impulsividade,
              desorganização e sensação constante de baixo rendimento sem saber
              que esses sintomas podem estar relacionados ao TDAH.
            </p>

            <br />

            <p>
              O diagnóstico é exclusivamente clínico e deve ser realizado por um
              médico após uma avaliação cuidadosa da história do paciente,
              sintomas atuais e impacto na vida cotidiana.
            </p>

            <br />

            <p className="mt-4 text-sm text-muted-foreground">
              Também teremos um artigo específico explicando como é feito o
              diagnóstico e tratamento do TDAH em adultos.
            </p>

          </section>

          <section id="insonia" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Insônia
            </h2>

            <br />

            <p>
              Dormir mal ocasionalmente é comum. Entretanto, quando a dificuldade
              para iniciar ou manter o sono torna-se frequente, prejudicando o
              desempenho durante o dia, pode existir um transtorno do sono ou
              outro problema de saúde mental associado.
            </p>

            <br />

            <p>
              Ansiedade, depressão, estresse crônico e diversos outros
              transtornos podem provocar insônia. Uma consulta psiquiátrica
              permite identificar a causa e definir a melhor estratégia de
              tratamento.
            </p>

          </section>

          <section id="consulta" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Como funciona uma consulta online com um médico na área de psiquiatria?
            </h2>

            <br />

            <p>
              A <strong>consulta psiquiátrica online</strong> ocorre por
              videoconferência em ambiente seguro e segue os mesmos princípios
              éticos e técnicos de uma consulta presencial. Durante o
              atendimento, o médico realiza uma entrevista detalhada, avalia os
              sintomas, investiga o histórico clínico e elabora um plano
              terapêutico individualizado.
            </p>

            <div className="mt-6 space-y-4">

              {[
                {
                  t: "1. Agendamento",
                  d: "Você escolhe o melhor horário diretamente pelo WhatsApp.",
                },
                {
                  t: "2. Recebimento do link",
                  d: "Nossa equipe envia o acesso para a sala virtual antes da consulta.",
                },
                {
                  t: "3. Atendimento médico",
                  d: "O médico conversa detalhadamente sobre sintomas, rotina, histórico e objetivos do tratamento.",
                },
                {
                  t: "4. Plano terapêutico",
                  d: "Quando indicado, são prescritos medicamentos, exames, psicoterapia ou outras abordagens.",
                },
                {
                  t: "5. Acompanhamento",
                  d: "O tratamento é acompanhado por consultas de retorno para avaliar a evolução.",
                },
              ].map((item, index) => (

                <div
                  key={item.t}
                  className="rounded-xl border border-border bg-card p-5 flex gap-4"
                >

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-azure-deep text-white font-semibold flex-none">
                    {index + 1}
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.t}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1">
                      {item.d}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </section>



                    <section id="primeira" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Como é a primeira consulta com um médico na área de psiquiatria?
            </h2>

            <br />

            <p>
              Uma das dúvidas mais pesquisadas é sobre a
              <strong> primeira consulta com médico na área de psiquiatria</strong>.
              Muitas pessoas imaginam que sairão da consulta obrigatoriamente
              com uma receita, mas isso nem sempre acontece.
            </p>

            <br />

            <p>
              O principal objetivo da primeira consulta é compreender a história
              do paciente de forma ampla. O médico busca entender quando os
              sintomas começaram, como evoluíram, quais tratamentos já foram
              realizados, quais medicamentos são utilizados atualmente e como
              essas alterações impactam a vida pessoal, familiar e profissional.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">

              {[
                "Histórico médico",
                "Histórico familiar",
                "Rotina diária",
                "Qualidade do sono",
                "Alimentação",
                "Uso de medicamentos",
                "Uso de álcool ou outras substâncias",
                "Objetivos do tratamento",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-border bg-card p-4 flex gap-3"
                >

                  <Check className="h-5 w-5 text-azure-deep flex-none" />

                  <span className="text-sm">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-2xl border border-lilac/30 bg-lilac/5 p-6">

              <div className="flex gap-4">

                <Users className="h-10 w-10 text-azure-deep flex-none" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Atendimento humanizado
                  </h3>

                  <br />

                  <p className="mt-2 text-sm text-muted-foreground">
                    A consulta é um espaço de acolhimento, escuta e respeito.
                    Não existe julgamento. O objetivo é compreender sua história
                    e construir, junto com você, um plano terapêutico adequado à
                    sua realidade.
                  </p>

                </div>

              </div>

            </div>

          </section>

          <section id="receitas" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              O médico na área de psiquiatria pode receitar medicamentos online?
            </h2>

            <br />

            <p>
              Sim. Uma das principais dúvidas de quem busca um
              <strong> psiquiatra online</strong> é se existe possibilidade de
              receber receitas médicas durante uma consulta realizada por
              telemedicina.
            </p>

            <br />

            <p>
              Após avaliação clínica individualizada, o médico pode emitir
              receitas digitais conforme a legislação brasileira. Essas receitas
              possuem assinatura eletrônica e mecanismos de validação que
              garantem sua autenticidade.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-border bg-card p-5">

                <div className="flex items-center gap-3 mb-3">

                  <FileText className="h-6 w-6 text-azure-deep" />

                  <h3 className="font-semibold">
                    Receita médica digital
                  </h3>

                </div>

                <p className="text-sm text-muted-foreground">
                  Medicamentos de uso comum podem ser prescritos digitalmente,
                  permitindo maior praticidade ao paciente.
                </p>

              </div>

              <div className="rounded-xl border border-border bg-card p-5">

                <div className="flex items-center gap-3 mb-3">

                  <ShieldCheck className="h-6 w-6 text-azure-deep" />

                  <h3 className="font-semibold">
                    Segurança jurídica
                  </h3>

                </div>

                <p className="text-sm text-muted-foreground">
                  Os documentos são emitidos conforme as normas aplicáveis,
                  preservando autenticidade, rastreabilidade e validade.
                </p>

              </div>

            </div>

          </section>

          <section id="controlados" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Médico na área de psiquiatria receita medicamento controlado online?
            </h2>

            <br />

            <p>
              Sim. Dependendo do medicamento e da regulamentação vigente,
              o <strong>médico na área de psiquiatria pode receitar medicamentos
              controlados online</strong>, utilizando sistemas eletrônicos
              autorizados e assinaturas digitais válidas.
            </p>

            <br />

            <p>
              A emissão sempre depende da avaliação médica. Nenhuma receita é
              fornecida automaticamente ou apenas mediante solicitação do
              paciente. A prescrição ocorre somente quando existe indicação
              clínica.
            </p>

            <div className="mt-6 rounded-xl border border-lilac/30 bg-lilac/5 p-5">

              <p className="text-sm">

                <strong>Importante:</strong> alguns medicamentos possuem regras
                específicas de prescrição e dispensação. O médico sempre seguirá
                rigorosamente a legislação vigente e avaliará individualmente a
                necessidade de cada paciente.

              </p>

            </div>

          </section>

          <section id="atestado" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Médico na área de psiquiatria pode dar atestado online?
            </h2>

            <br />

            <p>
              Sim. Sempre que houver indicação clínica, o
              <strong> médico na área de psiquiatria pode emitir atestado
              médico online</strong>.
            </p>

            <br />

            <p>
              O documento é emitido eletronicamente e possui assinatura digital,
              podendo ser apresentado ao empregador, instituição de ensino ou
              demais órgãos, conforme as regras aplicáveis.
            </p>

            <br />

            <p>
              Vale lembrar que o atestado não é um benefício automático da
              consulta. Sua emissão depende exclusivamente da avaliação médica e
              da necessidade clínica identificada durante o atendimento.
            </p>

          </section>

          <section id="documentos" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Quais documentos podem ser emitidos durante a consulta?
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {[
                {
                  t: "Receitas médicas",
                  d: "Conforme indicação clínica e legislação vigente.",
                },
                {
                  t: "Atestado médico",
                  d: "Quando houver justificativa clínica.",
                },
                {
                  t: "Solicitação de exames",
                  d: "Laboratoriais ou de imagem quando necessários.",
                },
                {
                  t: "Relatórios médicos",
                  d: "Para continuidade do tratamento ou outras finalidades permitidas.",
                },
                {
                  t: "Encaminhamentos",
                  d: "Para psicoterapia ou outros especialistas.",
                },
                {
                  t: "Plano terapêutico",
                  d: "Orientações individualizadas para acompanhamento.",
                },
              ].map((item) => (

                <div
                  key={item.t}
                  className="rounded-xl border border-border bg-card p-5"
                >

                  <h3 className="font-semibold mb-2">
                    {item.t}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.d}
                  </p>

                </div>

              ))}

            </div>

          </section>

          <div className="mt-12 rounded-2xl border border-border bg-azure-deep p-8 text-white">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>

                <h2 className="font-display text-3xl">
                  Agende sua consulta online com um médico na área de psiquiatria
                </h2>

                <br />

                <p className="mt-3 text-white/80 max-w-xl">
                  Atendimento humanizado, seguro e com toda a comodidade da
                  telemedicina. Nossa equipe está pronta para esclarecer suas
                  dúvidas e ajudar você a iniciar seu tratamento.
                </p>

              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-foreground transition hover:scale-105"
              >

                <MessageCircle className="h-5 w-5" />

                Quero agendar minha consulta

              </a>

            </div>

          </div>


                    <section id="vantagens" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Quais são as vantagens da consulta online com um médico na área de
              psiquiatria?
            </h2>

            <br />

            <p>
              A telemedicina ampliou significativamente o acesso aos cuidados em
              saúde mental. Hoje é possível realizar consultas com conforto,
              segurança e privacidade, independentemente da cidade onde o
              paciente reside.
            </p>

            <br />

            <p>
              Para muitas pessoas, especialmente aquelas que apresentam
              ansiedade intensa, síndrome do pânico, depressão ou dificuldades
              de locomoção, a consulta online representa uma forma mais simples
              de iniciar o tratamento.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <article className="rounded-2xl border border-border bg-card p-6">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">

                  <Home className="h-6 w-6 text-azure-deep" />

                </div>

                <h3 className="font-display text-xl">
                  Atendimento sem sair de casa
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Consulte-se de qualquer lugar utilizando computador, tablet ou
                  celular com acesso à internet.
                </p>

              </article>

              <article className="rounded-2xl border border-border bg-card p-6">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">

                  <Clock className="h-6 w-6 text-azure-deep" />

                </div>

                <h3 className="font-display text-xl">
                  Economia de tempo
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Evite deslocamentos, trânsito, filas e tempo de espera para
                  iniciar seu atendimento.
                </p>

              </article>

              <article className="rounded-2xl border border-border bg-card p-6">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">

                  <ShieldCheck className="h-6 w-6 text-azure-deep" />

                </div>

                <h3 className="font-display text-xl">
                  Privacidade
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  A consulta acontece em ambiente seguro, preservando o sigilo
                  médico e a confidencialidade das informações.
                </p>

              </article>

              <article className="rounded-2xl border border-border bg-card p-6">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lilac/10">

                  <Heart className="h-6 w-6 text-azure-deep" />

                </div>

                <h3 className="font-display text-xl">
                  Continuidade do tratamento
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Facilita retornos periódicos e acompanhamento da evolução do
                  tratamento.
                </p>

              </article>

            </div>

          </section>

          <section id="preparo" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Como se preparar para a consulta?
            </h2>

            <br />

            <p>
              Pequenos cuidados ajudam a tornar sua consulta ainda mais
              proveitosa.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Escolha um ambiente silencioso e com privacidade.",
                "Teste sua conexão com a internet antes do horário marcado.",
                "Tenha documento de identificação em mãos.",
                "Anote dúvidas e sintomas que deseja conversar.",
                "Separe exames ou receitas antigas, caso existam.",
                "Entre na consulta alguns minutos antes do horário.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >

                  <Check className="h-5 w-5 text-azure-deep flex-none" />

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </section>

          <section id="asas" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Por que escolher a ASAS Telemedicina?
            </h2>

            <br />

            <p>
              Na ASAS Telemedicina acreditamos que tecnologia deve aproximar
              pessoas e facilitar o acesso à saúde. Nosso objetivo é oferecer um
              atendimento acolhedor, ético e acessível, sempre respeitando a
              individualidade de cada paciente.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-border bg-card p-6">

                <Brain className="h-8 w-8 text-azure-deep" />

                <h3 className="mt-4 font-display text-xl">
                  Atendimento Humanizado
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Cada paciente é atendido de forma individualizada, respeitando
                  sua história, necessidades e objetivos.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-card p-6">

                <Zap className="h-8 w-8 text-azure-deep" />

                <h3 className="mt-4 font-display text-xl">
                  Agilidade
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Agendamento simples, atendimento online e envio de documentos
                  médicos quando indicados.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-card p-6">

                <ShieldCheck className="h-8 w-8 text-azure-deep" />

                <h3 className="mt-4 font-display text-xl">
                  Segurança
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Plataforma segura e atendimento realizado conforme a legislação
                  vigente para telemedicina.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-card p-6">

                <Smile className="h-8 w-8 text-azure-deep" />

                <h3 className="mt-4 font-display text-xl">
                  Cuidado contínuo
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  Nosso compromisso vai além da consulta. Buscamos construir um
                  acompanhamento contínuo para promover qualidade de vida.
                </p>

              </div>

            </div>

          </section>

          <section id="faq" className="scroll-mt-24">

            <h2 className="font-display text-3xl mt-10">
              Perguntas Frequentes
            </h2>

            <br />

            <Accordion
              type="single"
              collapsible
              className="mt-8 w-full rounded-2xl border border-border bg-card p-4"
            >




                            {faqs.map((faq, index) => (

                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                >

                  <AccordionTrigger>
                    {faq.q}
                  </AccordionTrigger>

                  <AccordionContent>
                    {faq.a}
                  </AccordionContent>

                </AccordionItem>

              ))}

            </Accordion>

          </section>

          <section
            id="conclusao"
            className="scroll-mt-24"
          >

            <h2 className="font-display text-3xl mt-10">
              Conclusão
            </h2>

            <br />

            <p>
              Cuidar da saúde mental é tão importante quanto cuidar da saúde
              física. Ansiedade, depressão, transtornos do sono, Burnout,
              síndrome do pânico e diversas outras condições possuem tratamento,
              e quanto mais cedo ele é iniciado, maiores costumam ser as
              possibilidades de recuperação e melhora da qualidade de vida.
            </p>

            <br />

            <p>
              A consulta online tornou esse cuidado mais acessível, permitindo
              que pacientes de qualquer região tenham acesso a atendimento
              especializado com conforto, privacidade e segurança.
            </p>

          </section>

        </div>

      </article>

      <section className="border-t border-border bg-foreground py-24 text-background">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-xs uppercase tracking-[0.2em] text-lilac">
            Psiquiatria Online
          </p>

          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Vamos cuidar da sua saúde mental?
          </h2>

          <br />

          <p className="mx-auto max-w-3xl text-justify text-background/80 leading-8">
            Se você acredita que chegou o momento de conversar com um médico na
            área de psiquiatria, nossa equipe está pronta para ajudar. O
            atendimento é realizado por telemedicina, com conforto, privacidade
            e segurança.
          </p>

          <br />

          <p className="mx-auto max-w-3xl text-justify text-background/80 leading-8">
            Clique no botão abaixo para conversar com nossa equipe e agendar sua
            consulta.
          </p>

          <div className="mt-12">

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-lilac px-8 py-4 text-base font-semibold text-foreground transition hover:bg-background"
            >

              <MessageCircle className="h-5 w-5" />

              Agendar consulta pelo WhatsApp

            </a>

          </div>

        </div>

      </section>

      <footer className="border-t border-border bg-background py-10">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">

          <div className="flex items-center gap-3">

            <img
              src={asasLogo}
              alt="Asas Telemedicina"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
            />

            <div>

              <p className="font-display text-base text-foreground">
                Clínica Popular Asas Telemedicina
              </p>

              <p className="text-xs">
                A medicina que te dá liberdade.
              </p>

            </div>

          </div>

          <div className="flex flex-col items-center gap-2 text-sm md:items-end">

            <Link
              to="/central-de-saude"
              className="hover:text-foreground"
            >
              Artigos de Saúde
            </Link>

            <Link
              to="/faca-parte"
              className="hover:text-foreground"
            >
              Faça parte da equipe
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              WhatsApp: (45) 92001-8284
            </a>

            <p className="text-xs">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>

          </div>

        </div>

      </footer>

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




          






          
