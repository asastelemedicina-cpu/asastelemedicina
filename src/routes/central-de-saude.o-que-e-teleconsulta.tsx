import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  Zap,
  Home,
  Wallet,
  ShieldCheck,
  Repeat,
  Check,
  FileText,
  Stethoscope,
  Share2,
  Facebook,
  Linkedin,
  Calendar,
} from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/5545920018284";
const CANONICAL = "https://www.asastelemedicina.com.br/central-de-saude/o-que-e-teleconsulta";
const PUBLISHED = "2026-06-10";
const UPDATED = "2026-07-01";

const TITLE = "O que é Teleconsulta? Como Funciona a Consulta Médica Online";
const DESCRIPTION =
  "Entenda o que é teleconsulta, como funciona a consulta médica online, quando ela é indicada, suas vantagens e quais documentos podem ser emitidos.";

const faqs: { q: string; a: string }[] = [
  {
    q: "A teleconsulta vale como consulta normal?",
    a: "Sim. A teleconsulta é regulamentada pelo Conselho Federal de Medicina (Resolução CFM 2.314/2022) e possui a mesma validade legal e clínica de uma consulta presencial, incluindo documentos emitidos com assinatura digital.",
  },
  {
    q: "O médico pode dar atestado por teleconsulta?",
    a: "Sim. Após a avaliação clínica, o médico pode emitir atestado médico assinado digitalmente com certificado ICP-Brasil, com a mesma validade jurídica de um atestado presencial. A empresa é obrigada a aceitar.",
  },
  {
    q: "Posso receber receita digital por teleconsulta?",
    a: "Sim. Receitas simples, especiais e de controle especial podem ser emitidas digitalmente, com QR Code de validação e assinatura ICP-Brasil, sendo aceitas em farmácias de todo o Brasil.",
  },
  {
    q: "É permitido fazer consulta médica online no Brasil?",
    a: "Sim. A telemedicina está regulamentada em caráter definitivo pelo CFM desde 2022 e pela Lei 14.510/2022, sendo permitida para consulta, monitoramento, diagnóstico, orientação e emissão de documentos.",
  },
  {
    q: "Como funciona a primeira consulta por telemedicina?",
    a: "Você agenda pelo WhatsApp, recebe o link da sala virtual, entra pelo celular ou computador no horário marcado e conversa com o médico por vídeo. Ao final, recebe receitas, atestados e orientações pelo WhatsApp ou e-mail.",
  },
  {
    q: "Quanto tempo dura uma teleconsulta?",
    a: "Em média, entre 20 e 40 minutos, dependendo da especialidade e da complexidade do caso. Consultas de psiquiatria e primeiras avaliações costumam ser mais longas.",
  },
  {
    q: "Posso fazer a teleconsulta pelo celular?",
    a: "Sim. Basta ter câmera, microfone e conexão com a internet. Funciona em qualquer smartphone Android ou iPhone, sem precisar instalar aplicativos complicados.",
  },
  {
    q: "A teleconsulta é segura? Meus dados ficam protegidos?",
    a: "Sim. Utilizamos plataformas com criptografia ponta a ponta e seguimos a LGPD (Lei Geral de Proteção de Dados). Nada da consulta é gravado sem autorização e o sigilo médico é integralmente preservado.",
  },
  {
    q: "Posso mostrar exames durante a consulta?",
    a: "Sim. Você pode enviar seus exames por WhatsApp antes da consulta ou mostrar pela câmera durante o atendimento. O médico avalia e comenta os resultados em tempo real.",
  },
  {
    q: "Quem pode utilizar a teleconsulta?",
    a: "Qualquer pessoa, de qualquer idade. Adultos, idosos e crianças (com acompanhamento de um responsável) podem ser atendidos online, exceto em situações que exijam exame físico presencial ou urgência.",
  },
  {
    q: "Quanto custa uma teleconsulta na Asas Telemedicina?",
    a: "As consultas começam em R$ 120,00, com valores que variam conforme a especialidade. Você pode agendar e tirar dúvidas de valores diretamente pelo WhatsApp.",
  },
];

const toc = [
  { id: "conceito", label: "O que é uma teleconsulta?" },
  { id: "como-funciona", label: "Como funciona a consulta online" },
  { id: "quem-pode", label: "Quem pode fazer teleconsulta" },
  { id: "quando-indicada", label: "Quando é indicada" },
  { id: "doencas", label: "Doenças tratadas por teleconsulta" },
  { id: "documentos", label: "Documentos que o médico pode emitir" },
  { id: "vantagens", label: "Vantagens da teleconsulta" },
  { id: "seguranca", label: "Teleconsulta é segura?" },
  { id: "comparativo", label: "Teleconsulta x consulta presencial" },
  { id: "presencial", label: "Quando é necessário ir presencialmente" },
  { id: "preparo", label: "Como se preparar" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "conclusao", label: "Conclusão" },
];

export const Route = createFileRoute("/central-de-saude/o-que-e-teleconsulta")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "teleconsulta, teleconsulta médica, consulta online, consulta médica online, telemedicina, médico online, consulta por vídeo, atendimento médico online",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "Asas Telemedicina" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "og:site_name", content: "Asas Telemedicina" },
      { property: "og:locale", content: "pt_BR" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
      { property: "article:author", content: "Asas Telemedicina" },
      { property: "article:section", content: "Telemedicina" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          inLanguage: "pt-BR",
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          author: {
            "@type": "Organization",
            name: "Asas Telemedicina",
            url: "https://www.asastelemedicina.com.br/",
          },
          publisher: {
            "@type": "Organization",
            name: "Clínica Popular Asas Telemedicina",
            url: "https://www.asastelemedicina.com.br/",
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
          articleSection: "Telemedicina",
          keywords: [
            "teleconsulta",
            "consulta médica online",
            "telemedicina",
            "médico online",
          ],
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
              name: "Central de Saude",
              item: "https://www.asastelemedicina.com.br/central-de-saude/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "O que é Teleconsulta",
              item: CANONICAL,
            },
          ],
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
 component: Article,
});

//type ArticleProps = {
//  onBack: () => void;
//};

export function Article() {
//  export function Article({ onBack }: ArticleProps) {
  const shareText = encodeURIComponent(`${TITLE} — Asas Telemedicina`);
  const shareUrl = encodeURIComponent(CANONICAL);

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
//          <Link
//            to="/central-de-saude"
//            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
//          >
//            <ArrowLeft className="h-4 w-4" /> Central de Saúde
//          </Link>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Central de Saúde
              </button>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-xs text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link to="/" className="hover:text-foreground">
                Início
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link to="/central-de-saude" className="hover:text-foreground">
                Central de Saúde
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground" aria-current="page">
              O que é Teleconsulta
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-lilac">Telemedicina</span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> 10 min de leitura
          </span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={PUBLISHED}>Publicado em 10 jun 2026</time>
          </span>
        </div>

        <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
          O que é <em className="not-italic text-azure-deep">Teleconsulta</em>?
          Como funciona a consulta médica online
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          A teleconsulta transformou o acesso à saúde no Brasil. Neste guia
          completo, escrito com base na regulamentação do Conselho Federal de
          Medicina, você entende o que é, como funciona, quando é indicada e
          quais documentos podem ser emitidos por um médico online.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Por <strong>Asas Telemedicina</strong> · Atualizado em{" "}
          <time dateTime={UPDATED}>1 de julho de 2026</time>
        </p>

        {/* Sumário */}
        <aside
          aria-label="Sumário do artigo"
          className="mt-10 rounded-2xl border border-border bg-card p-6"
        >
          <p className="text-xs uppercase tracking-widest text-lilac">
            Neste artigo
          </p>
          <ol className="mt-3 grid list-decimal grid-cols-1 gap-x-6 gap-y-1.5 pl-5 text-sm sm:grid-cols-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="text-foreground/90 hover:text-azure-deep"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        {/* Compartilhar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Share2 className="h-4 w-4" /> Compartilhar:
          </span>
          <a
            href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no WhatsApp"
            className="rounded-full border border-border px-3 py-1 hover:border-lilac hover:text-azure-deep"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no Facebook"
            className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 hover:border-lilac hover:text-azure-deep"
          >
            <Facebook className="h-3.5 w-3.5" /> Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no X"
            className="rounded-full border border-border px-3 py-1 hover:border-lilac hover:text-azure-deep"
          >
            X (Twitter)
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no LinkedIn"
            className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 hover:border-lilac hover:text-azure-deep"
          >
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
        </div>

        {/* Conteúdo */}
        <div className="prose-content mt-12 space-y-6 text-base leading-relaxed text-foreground/90">
          <section id="conceito" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-4">
              O que é uma teleconsulta?
            </h2>
            <p>
              <strong>Teleconsulta</strong> é o atendimento médico feito à
              distância, por meio de uma vídeo chamada entre paciente e médico.
              Também chamada de <em>consulta médica online</em> ou{" "}
              <em>consulta por vídeo</em>, ela é uma das modalidades da
              telemedicina — o uso da tecnologia para prestar cuidados de
              saúde.
            </p>
            <p>
              No Brasil, a prática é regulamentada em caráter definitivo pela{" "}
              <strong>Resolução CFM nº 2.314/2022</strong> e pela{" "}
              <strong>Lei nº 14.510/2022</strong>. Isso significa que a
              teleconsulta tem a <strong>mesma validade legal e clínica</strong>{" "}
              de uma consulta presencial, incluindo a emissão de receitas,
              atestados e pedidos de exames com assinatura digital.
            </p>
            <div className="rounded-xl border border-lilac/30 bg-lilac/5 p-5">
              <p className="text-sm">
                <strong>Em resumo:</strong> teleconsulta é uma consulta médica
                real, feita por vídeo, com o mesmo médico, o mesmo cuidado e os
                mesmos direitos de uma consulta presencial — só que sem
                deslocamento, sem sala de espera e no horário que cabe na sua
                rotina.
              </p>
            </div>
          </section>

          <section id="como-funciona" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Como funciona uma consulta médica online?
            </h2>
            <p>
              O processo é simples e pensado para quem nunca fez uma consulta
              pela internet. Veja o passo a passo:
            </p>
            <ol className="mt-3 space-y-3 pl-4">
              {[
                {
                  t: "Agendamento",
                  d: "Você fala com a nossa equipe pelo WhatsApp, escolhe a especialidade e o melhor horário para você.",
                },
                {
                  t: "Pagamento",
                  d: "Pagamento seguro via Pix, cartão ou link de cobrança. A consulta só é confirmada após o pagamento.",
                },
                {
                  t: "Link da sala virtual",
                  d: "Você recebe pelo WhatsApp o link exclusivo da sala virtual, com a hora do atendimento.",
                },
                {
                  t: "Consulta por vídeo",
                  d: "No horário marcado, entra pelo celular ou computador e conversa com o médico por vídeo, no tempo necessário.",
                },
                {
                  t: "Documentos e orientações",
                  d: "Receita digital, atestado, pedidos de exames e relatórios são enviados em PDF pelo WhatsApp ou e-mail.",
                },
              ].map((s, i) => (
                <li
                  key={s.t}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-azure-deep text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="quem-pode" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Quem pode fazer teleconsulta?
            </h2>
            <p>
              Praticamente qualquer pessoa pode ser atendida por telemedicina:
              adultos, idosos, gestantes e crianças (acompanhadas por um
              responsável). É uma opção especialmente valiosa para quem:
            </p>
            <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 sm:grid-cols-2">
              <li>Mora longe de grandes centros médicos</li>
              <li>Tem rotina de trabalho muito atarefada</li>
              <li>Possui dificuldade de locomoção</li>
              <li>Cuida de filhos pequenos ou familiares</li>
              <li>Precisa de acompanhamento contínuo</li>
              <li>Quer economizar tempo e deslocamento</li>
            </ul>
          </section>

          <section id="quando-indicada" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Quando a teleconsulta é indicada?
            </h2>
            <p>
              A teleconsulta é indicada para consultas de rotina, retornos,
              orientações, avaliação de sintomas leves a moderados e
              acompanhamento de doenças crônicas. Alguns exemplos comuns:
            </p>
            <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 sm:grid-cols-2">
              <li>Renovação de receitas médicas</li>
              <li>Emissão de atestado por sintomas gripais</li>
              <li>Ansiedade, insônia e sintomas depressivos</li>
              <li>Acompanhamento de hipertensão e diabetes</li>
              <li>Dúvidas ginecológicas e contracepção</li>
              <li>Puericultura (acompanhamento infantil)</li>
              <li>Emagrecimento e reeducação alimentar</li>
              <li>Análise de exames laboratoriais</li>
              <li>Segunda opinião médica</li>
              <li>Encaminhamentos e relatórios</li>
            </ul>
          </section>

          <section id="doencas" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Quais doenças podem ser tratadas por teleconsulta?
            </h2>
            <p>
              A lista é ampla. A telemedicina cobre bem quadros clínicos que
              não exigem exame físico presencial ou procedimentos. Alguns
              exemplos:
            </p>
            <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 sm:grid-cols-2">
              <li>Gripes, resfriados e infecções virais leves</li>
              <li>Dor de garganta e sinusite</li>
              <li>Cistite e infecção urinária não complicada</li>
              <li>Ansiedade generalizada</li>
              <li>Depressão leve e moderada</li>
              <li>Insônia</li>
              <li>Síndrome do pânico</li>
              <li>TDAH em adultos</li>
              <li>Hipertensão arterial</li>
              <li>Diabetes tipo 2</li>
              <li>Colesterol alto (dislipidemia)</li>
              <li>Hipotireoidismo</li>
              <li>Obesidade e sobrepeso</li>
              <li>TPM e alterações menstruais</li>
              <li>Menopausa</li>
              <li>Anticoncepção</li>
              <li>Dermatites e alergias leves</li>
              <li>Refluxo, gastrite e constipação</li>
              <li>Enxaqueca e cefaleias tensionais</li>
              <li>Tabagismo e transtorno por uso de álcool</li>
            </ul>
            <div className="mt-4 rounded-xl border border-border bg-card p-5 text-sm">
              <strong>Importante:</strong> a indicação do tratamento é sempre
              feita pelo médico, após avaliação individual do seu caso.
              Situações graves ou de emergência devem ser atendidas
              presencialmente.
            </div>
          </section>

          <section id="documentos" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Quais documentos o médico pode emitir por teleconsulta?
            </h2>
            <p>
              Todos os documentos médicos emitidos por teleconsulta são
              assinados digitalmente com <strong>certificado ICP-Brasil</strong>{" "}
              e possuem <strong>validade jurídica plena</strong> em todo o
              território nacional.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Receita médica digital",
                  d: "Simples, especiais e de controle especial, aceitas em qualquer farmácia do Brasil via QR Code.",
                },
                {
                  t: "Solicitação de exames",
                  d: "Pedidos de exames laboratoriais e de imagem para realizar em qualquer clínica ou laboratório.",
                },
                {
                  t: "Atestado médico",
                  d: "Justificativa de afastamento do trabalho, escola ou faculdade, com CID quando autorizado.",
                },
                {
                  t: "Relatórios médicos",
                  d: "Descrição detalhada do quadro clínico, tratamento e evolução para uso pessoal ou institucional.",
                },
                {
                  t: "Encaminhamentos",
                  d: "Direcionamento para especialistas, terapias ou procedimentos complementares.",
                },
                {
                  t: "Laudos médicos",
                  d: "Documentos técnicos para fins previdenciários, escolares ou processos internos.",
                },
              ].map((d) => (
                <div
                  key={d.t}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="mb-2 flex items-center gap-2 text-azure-deep">
                    <FileText className="h-5 w-5" />
                    <p className="font-semibold text-foreground">{d.t}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{d.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A emissão de qualquer documento depende da avaliação clínica do
              médico e da legislação vigente. Nenhum documento é entregue sem
              justificativa técnica.
            </p>
          </section>

          <section id="vantagens" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Quais são as vantagens da teleconsulta?
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Zap,
                  t: "Praticidade",
                  d: "Agendamento simples e atendimento sem burocracia, em poucos cliques.",
                },
                {
                  icon: Home,
                  t: "Conforto",
                  d: "Consulta no lugar onde você se sente melhor, sem sala de espera.",
                },
                {
                  icon: Wallet,
                  t: "Economia",
                  d: "Sem deslocamento, sem transporte, com valores acessíveis a partir de R$ 120.",
                },
                {
                  icon: Clock,
                  t: "Rapidez",
                  d: "Agenda com horários disponíveis no mesmo dia ou no dia seguinte.",
                },
                {
                  icon: ShieldCheck,
                  t: "Segurança",
                  d: "Plataforma criptografada, sigilo médico e proteção de dados (LGPD).",
                },
                {
                  icon: Repeat,
                  t: "Acompanhamento contínuo",
                  d: "Retornos frequentes para ajustar o tratamento no seu ritmo.",
                },
              ].map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lilac/15 text-azure-deep">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="seguranca" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Teleconsulta é segura?
            </h2>
            <p>
              Sim. A teleconsulta é tão segura quanto uma consulta presencial —
              e, em alguns aspectos, ainda mais protegida. O sigilo médico
              previsto no <strong>Código de Ética Médica</strong> se aplica
              integralmente ao atendimento online.
            </p>
            <p>
              As plataformas utilizadas empregam{" "}
              <strong>criptografia ponta a ponta</strong>, ou seja, apenas você
              e o médico têm acesso ao conteúdo da consulta. Nenhum vídeo é
              gravado sem consentimento expresso, e o tratamento dos seus
              dados segue as regras da <strong>LGPD</strong> (Lei Geral de
              Proteção de Dados).
            </p>
          </section>

          <section id="comparativo" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Qual a diferença entre teleconsulta e consulta presencial?
            </h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card text-left">
                  <tr>
                    <th className="p-3 font-semibold">Aspecto</th>
                    <th className="p-3 font-semibold text-azure-deep">
                      Teleconsulta
                    </th>
                    <th className="p-3 font-semibold">Presencial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Validade legal", "Total (CFM/Lei 14.510/22)", "Total"],
                    ["Deslocamento", "Não é necessário", "Necessário"],
                    ["Tempo de espera", "Praticamente nulo", "Comum ter atraso"],
                    ["Exame físico completo", "Limitado", "Sim"],
                    ["Receitas e atestados", "Digitais (ICP-Brasil)", "Impressos ou digitais"],
                    ["Custo médio", "A partir de R$ 120", "Geralmente mais alto"],
                    ["Sigilo médico", "Preservado (LGPD)", "Preservado"],
                    ["Acompanhamento", "Fácil retorno online", "Depende de agenda"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3 font-medium">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="presencial" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Quando é necessário atendimento presencial?
            </h2>
            <p>
              Apesar da amplitude da telemedicina, algumas situações exigem
              avaliação presencial. Nestes casos, o próprio médico orienta o
              paciente a buscar atendimento em consultório, pronto-socorro ou
              hospital:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Dor no peito, falta de ar intensa ou desmaios</li>
              <li>Sangramentos importantes</li>
              <li>Traumas, fraturas e ferimentos</li>
              <li>Quadros neurológicos agudos (AVC, convulsões)</li>
              <li>Emergências obstétricas</li>
              <li>Procedimentos, cirurgias e exame físico especializado</li>
              <li>Casos que exijam ausculta detalhada ou palpação</li>
            </ul>
          </section>

          <section id="preparo" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Como se preparar para uma teleconsulta?
            </h2>
            <p>
              Uma preparação simples faz toda a diferença para aproveitar
              melhor o tempo com o médico. Use esta checklist antes da
              consulta:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Escolha um ambiente calmo, iluminado e reservado",
                "Teste a câmera, o microfone e a conexão de internet",
                "Tenha seus exames e documentos por perto (em PDF ou foto)",
                "Anote os sintomas, quando começaram e o que melhora ou piora",
                "Liste os medicamentos que você usa (incluindo naturais)",
                "Prepare suas dúvidas para não esquecer nada",
                "Tenha em mãos um caderno ou o celular para anotações",
              ].map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
                >
                  <Check className="mt-0.5 h-5 w-5 flex-none text-azure-deep" />
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Especialidades / links internos */}
          <section className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Especialidades atendidas por teleconsulta
            </h2>
            <p>
              Na Clínica Popular Asas Telemedicina, você encontra as principais
              especialidades para cuidado online:
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {[
                { label: "Psiquiatria", hash: "especialidades" },
                { label: "Clínica Geral", hash: "especialidades" },
                { label: "Medicina de Família", hash: "especialidades" },
                { label: "Ginecologia", hash: "especialidades" },
                { label: "Pediatria", hash: "especialidades" },
                { label: "Emagrecimento", hash: "especialidades" },
              ].map((s) => (
                <Link
                  key={s.label}
                  to="/"
                  hash={s.hash}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 hover:border-lilac hover:text-azure-deep"
                >
                  <Stethoscope className="h-3.5 w-3.5" /> {s.label}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Veja também:{" "}
              <Link to="/" hash="documentos" className="text-azure-deep underline">
                Atestados e laudos médicos
              </Link>{" "}
              ·{" "}
              <Link to="/" hash="como-funciona" className="text-azure-deep underline">
                Como funciona a consulta
              </Link>{" "}
              ·{" "}
              <Link to="/central-de-saude" className="text-azure-deep underline">
                Mais artigos na Central de Saúde
              </Link>
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">
              Perguntas frequentes sobre teleconsulta
            </h2>
            <Accordion type="single" collapsible className="mt-4">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="conclusao" className="scroll-mt-24">
            <h2 className="font-display text-3xl mt-8">Conclusão</h2>
            <p>
              A teleconsulta chegou para democratizar o acesso à saúde: mais
              rápida, mais acessível e igualmente segura. Com regulamentação
              consolidada e tecnologia madura, hoje é possível receber um
              cuidado médico completo — incluindo receitas, atestados e
              relatórios — sem sair de casa.
            </p>
            <p>
              Cuidar da sua saúde é um ato de amor próprio. Se você precisa de
              uma consulta hoje mesmo, a nossa equipe está pronta para atender
              você com atenção, ética e humanidade.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-foreground p-8 text-background">
              <p className="font-display text-2xl md:text-3xl">
                Agende agora a sua teleconsulta
              </p>
              <p className="mt-2 text-sm text-background/70">
                Atendimento humano, rápido e seguro pelo WhatsApp. Consultas a
                partir de R$ 120,00.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3 text-sm font-medium text-foreground transition hover:bg-background"
              >
                <MessageCircle className="h-4 w-4" /> Agendar consulta no WhatsApp
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-azure-deep px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:bg-foreground"
      >
        <MessageCircle className="h-4 w-4" /> Agende sua consulta
      </a>
    </div>
  );
}
