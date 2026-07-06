import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import asasLogo from "@/assets/asas-logo.jpeg";
import heroDoctor from "@/assets/hero-doctor.jpg";

const WHATSAPP_URL = "https://wa.me/5545920018284";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      {
        title:
          "Quem Somos | ASAS Telemedicina | Saúde acessível, Telemedicina e Atendimento Humanizado",
      },
      {
        name: "description",
        content:
          "Conheça a ASAS Telemedicina. Acreditamos que a tecnologia pode democratizar o acesso à saúde, aproximando pacientes e profissionais e incentivando um cuidado mais acessível, humano e contínuo.",
      },
      {
        name: "keywords",
        content:
          "quem somos, asas telemedicina, telemedicina, teleconsulta, saúde acessível, atendimento humanizado, missão, visão, valores, democratização da saúde, saúde digital, prevenção, acompanhamento contínuo, médicos online, psicólogos online, fisioterapia online",
      },
      {
        property: "og:title",
        content: "Quem Somos | ASAS Telemedicina",
      },
      {
        property: "og:description",
        content:
          "Conheça a missão, visão e valores da ASAS Telemedicina e descubra como acreditamos que a tecnologia pode aproximar pessoas e democratizar o acesso à saúde.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={asasLogo}
              alt="ASAS Telemedicina"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
            />

            <span className="font-display text-lg font-semibold tracking-tight">
              Clínica Popular{" "}
              <span className="text-lilac">ASAS Telemedicina</span>
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <section className="border-b border-border bg-card/40 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Quem Somos
            </p>

            <h1 className="mt-3 font-display text-5xl md:text-6xl">
              Cuidar das pessoas é o que nos move.
            </h1>

            <br />

            <p className="text-justify leading-8 text-muted-foreground">
              A ASAS Telemedicina acredita que a tecnologia deve aproximar
              pessoas, reduzir barreiras e tornar o acesso à saúde mais simples,
              humano e acessível.
            </p>

            <br />

            <p className="text-justify leading-8 text-muted-foreground">
              Nossa missão é utilizar a{" "}
              <Link
                to="/central-de-saude"
                className="font-medium text-lilac hover:underline"
              >
                telemedicina
              </Link>{" "}
              para aproximar pacientes e profissionais, contribuindo para
              ampliar o acesso à saúde e incentivar um cuidado mais acessível,
              humano e contínuo.
            </p>

            <div className="mt-10">
              <h2 className="font-display text-2xl md:text-3xl">
                Tecnologia que aproxima.
              </h2>

              <h2 className="font-display text-2xl text-lilac md:text-3xl">
                Cuidado que transforma.
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar Consulta
              </a>

              <Link
                to="/faca-parte"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition hover:border-lilac hover:text-lilac"
              >
                Faça parte da equipe
              </Link>
            </div>
          </div>

          <div>
            <img
              src={heroDoctor}
              alt="Equipe ASAS Telemedicina"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Nosso Propósito
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Prevenção, diagnóstico e tratamento:
              <br />
              um cuidado completo para todas as pessoas.
            </h2>
          </div>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            O acesso à saúde de qualidade ainda representa um desafio para
            milhões de brasileiros. Muitas pessoas deixam de realizar consultas,
            interrompem tratamentos ou não conseguem manter um acompanhamento
            contínuo por dificuldades financeiras, distância geográfica ou pela
            dificuldade de encontrar profissionais em determinadas regiões.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Em um país com dimensões continentais como o Brasil, essa realidade
            está presente no interior, nas periferias dos grandes centros
            urbanos, em comunidades afastadas e também entre brasileiros que
            vivem no exterior.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            A ASAS Telemedicina acredita que a{" "}
            <Link
              to="/central-de-saude"
              className="font-medium text-lilac hover:underline"
            >
              telemedicina
            </Link>{" "}
            pode reduzir essas barreiras, aproximando pacientes e profissionais
            e ampliando o acesso aos cuidados em saúde com ética, qualidade e
            valores acessíveis.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que <strong>a prevenção é tão importante quanto o diagnóstico</strong>.
            <br />
            Acreditamos que <strong>o diagnóstico é tão importante quanto o tratamento</strong>.
            <br />
            E acreditamos que <strong>o acompanhamento contínuo fortalece o cuidado,
            promove qualidade de vida e contribui para uma sociedade mais saudável.</strong>
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Nossa Missão
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Democratizar o acesso à saúde.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Saúde Acessível",
                text:
                  "Contribuir para ampliar o acesso à saúde utilizando a tecnologia para aproximar pacientes e profissionais.",
              },
              {
                title: "Humanização",
                text:
                  "Promover um atendimento centrado nas pessoas, respeitando suas necessidades e individualidades.",
              },
              {
                title: "Profissionais",
                text:
                  "Valorizar o conhecimento, a dedicação e a responsabilidade dos profissionais da saúde.",
              },
              {
                title: "Tecnologia",
                text:
                  "Utilizar a tecnologia como ferramenta para reduzir distâncias e ampliar oportunidades de cuidado.",
              },
              {
                title: "Prevenção",
                text:
                  "Incentivar uma cultura de prevenção, acompanhamento contínuo e promoção da saúde.",
              },
              {
                title: "Inclusão",
                text:
                  "Contribuir para que mais pessoas encontrem profissionais qualificados onde quer que estejam.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-8 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
              >
                <h3 className="font-display text-2xl">
                  {item.title}
                </h3>

                <br />

                <p className="text-justify leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Nossa Visão
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Construir uma saúde mais acessível e conectada.
            </h2>
          </div>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Ser referência nacional em saúde digital, contribuindo para aproximar
            profissionais e pacientes por meio da tecnologia.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Queremos colaborar para um futuro em que cada vez mais pessoas tenham
            acesso aos cuidados em saúde com qualidade, acolhimento, ética e
            respeito, independentemente da região onde vivem.
          </p>

        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Nossos Valores
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Os princípios que orientam cada decisão.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "❤️ Humanização",
              "⚖ Ética",
              "🤝 Respeito",
              "🌎 Inclusão",
              "🏥 Democratização do acesso à saúde",
              "👨‍⚕️ Valorização dos profissionais da saúde",
              "💻 Tecnologia a serviço das pessoas",
              "🔒 Privacidade e segurança",
              "👨‍👩‍👧‍👦 Longitudinalidade do cuidado",
              "📚 Educação em saúde",
              "❤️ Empatia",
              "🌱 Responsabilidade social",
            ].map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-border bg-background p-7 transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
              >
                <p className="font-display text-xl leading-relaxed">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Longitudinalidade do Cuidado
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Cuidar vai muito além de uma consulta.
            </h2>
          </div>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que cuidar da saúde significa acompanhar pessoas ao longo
            do tempo. Mais do que tratar doenças, acreditamos na importância da
            prevenção, do diagnóstico oportuno, da promoção da saúde e do
            acompanhamento contínuo.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            A{" "}
            <Link
              to="/central-de-saude"
              className="font-medium text-lilac hover:underline"
            >
              teleconsulta
            </Link>{" "}
            representa uma importante ferramenta para aproximar pacientes de seus
            profissionais de confiança, fortalecendo vínculos e facilitando a
            continuidade do cuidado.
          </p>

        </div>
      </section>
      

      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Atendimento Multiprofissional
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Cuidar é trabalhar em equipe.
            </h2>
          </div>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que uma assistência de qualidade é construída pela atuação
            integrada de diferentes profissionais da saúde. Cada área possui um
            papel essencial na prevenção, no diagnóstico, no tratamento e no
            acompanhamento contínuo das pessoas.
          </p>

          <br />

          {/*         <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Valorizamos médicos, psicólogos,
            fisioterapeutas, nutricionistas, enfermeiros, farmacêuticos,
            terapeutas ocupacionais, fonoaudiólogos, educadores físicos e demais
            profissionais habilitados, respeitando a importância e a autonomia de
            cada profissão.
          </p>

          <br />
*/}
          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Quando o cuidado acontece de forma integrada, o paciente é atendido
            de maneira mais completa, humanizada e centrada em suas necessidades.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Tecnologia com Propósito
            </p>

            <h2 className="mt-3 font-display text-4xl">
              A tecnologia deve aproximar pessoas.
            </h2>
          </div>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Na ASAS Telemedicina acreditamos que a tecnologia nunca substitui o
            cuidado humano. Ela existe para conectar pessoas, reduzir distâncias
            e ampliar as possibilidades de acesso aos cuidados em saúde.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Quando utilizada com responsabilidade, a{" "}
            <Link
              to="/central-de-saude"
              className="font-medium text-lilac hover:underline"
            >
              telemedicina
            </Link>{" "}
            contribui para aproximar pacientes e profissionais, permitindo que
            pessoas de diferentes regiões tenham acesso a cuidados de qualidade,
            independentemente da distância geográfica.
          </p>

        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Nosso Compromisso
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Compromissos que orientam nossa atuação.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {[
              "Atendimento humanizado",
              "Ética profissional",
              "Inclusão",
              "Transparência",
              "Segurança da informação",
              "Qualidade assistencial",
              "Valorização dos profissionais",
              "Promoção da saúde",
              "Acompanhamento contínuo",
              "Melhoria contínua",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-background p-6 text-center transition hover:border-lilac hover:shadow-lg hover:shadow-lilac/10"
              >
                <p className="font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lilac">
              Nosso Manifesto
            </p>

            <h2 className="mt-3 font-display text-4xl">
              Cuidar das pessoas é acreditar que toda vida merece atenção.
            </h2>
          </div>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que a tecnologia deve aproximar pessoas, nunca substituir
            o cuidado humano.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que prevenir é tão importante quanto diagnosticar.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que diagnosticar é tão importante quanto tratar.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que acompanhar continuamente é uma das formas mais
            eficazes de promover saúde, qualidade de vida e bem-estar.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que tornar o acesso à saúde mais acessível é uma forma
            concreta de promover dignidade, reduzir desigualdades e aproximar
            pessoas dos cuidados que merecem.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            Acreditamos que valorizar os profissionais da saúde significa
            reconhecer seu conhecimento, sua responsabilidade e sua dedicação ao
            cuidado das pessoas.
          </p>

          <br />

          <p className="mx-auto max-w-4xl text-justify leading-8 text-muted-foreground">
            E acreditamos que democratizar o acesso à saúde é uma das formas
            mais concretas de construir um Brasil mais saudável, mais justo e
            mais humano.
          </p>

        </div>
      </section>

      <section className="border-t border-border bg-foreground py-16 text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">

          <p className="text-xs uppercase tracking-[0.2em] text-background/70">
            Faça parte dessa transformação
          </p>

          <h2 className="font-display text-3xl md:text-4xl">
            Juntos podemos aproximar pessoas e ampliar o acesso à saúde.
          </h2>

          <p className="max-w-3xl text-justify text-background/70 leading-8">
            Queremos caminhar ao seu lado para contribuir com uma saúde cada vez mais acessível, humana e centrada nas pessoas.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-background"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar Consulta
            </a>

            <Link
              to="/faca-parte"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium text-background transition hover:bg-background hover:text-foreground"
            >
              Faça parte da equipe
            </Link>

          </div>

        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

          <div>
            <p className="font-display text-lg">
              Clínica Popular <span className="text-lilac">ASAS Telemedicina</span>
            </p>

            <p className="text-sm text-muted-foreground">
              Tecnologia que aproxima. Cuidado que transforma.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">

            <Link
              to="/faca-parte"
              className="font-medium text-lilac hover:text-foreground"
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

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}


      

      


      
