import type { Metadata } from "next"
import { Target, Eye, Gem } from "lucide-react"

import { PageHero } from "@/components/shared/page-hero"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { SectionHeading } from "@/components/shared/section-heading"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Sobre o escritório",
  description:
    "Conheça a história, o propósito e a metodologia do Vilela & Cordeiro Advocacia — atendimento personalizado e análise individual de cada caso.",
  alternates: { canonical: "/sobre" },
}

const pillars = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer segurança jurídica a pessoas e empresas por meio de uma advocacia técnica, transparente e acessível.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser reconhecido como um escritório de referência pela qualidade da entrega e pela proximidade com o cliente.",
  },
  {
    icon: Gem,
    title: "Valores",
    description:
      "Ética, transparência, comprometimento com o resultado e respeito à individualidade de cada caso.",
  },
]

const methodology = [
  {
    step: "01",
    title: "Escuta ativa",
    description:
      "Entendemos o contexto completo antes de qualquer recomendação — o problema raramente é só o que aparenta ser.",
  },
  {
    step: "02",
    title: "Diagnóstico técnico",
    description:
      "Avaliamos riscos, prazos e alternativas com profundidade, para que a decisão seja sempre informada.",
  },
  {
    step: "03",
    title: "Estratégia sob medida",
    description:
      "Nenhum caso é tratado como padrão. Cada estratégia é construída para o objetivo específico do cliente.",
  },
  {
    step: "04",
    title: "Acompanhamento contínuo",
    description:
      "Mantemos comunicação ativa durante todo o processo, com atualizações claras sobre cada andamento.",
  },
]

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Advocacia construída sobre confiança, técnica e proximidade"
        description="Desde 2009, ajudamos pessoas e empresas a tomar decisões jurídicas mais seguras — com um atendimento que nunca deixa de ser humano."
      />

      <section className="container-editorial grid gap-14 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="Nossa história" title="De onde viemos" />
          <p className="text-base leading-relaxed text-muted-foreground">
            O escritório nasceu do encontro entre Isabel Vilela e Rafael
            Cordeiro, dois advogados com trajetórias distintas — direito
            empresarial e direito civil e imobiliário — e um ponto em comum:
            a insatisfação com uma advocacia distante e impessoal.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ao longo dos anos, o escritório cresceu organicamente, sempre
            preservando o mesmo princípio fundador: nenhum cliente deveria se
            sentir apenas mais um número em um processo. Hoje, atuamos em
            oito áreas do direito, mantendo o mesmo padrão de proximidade do
            primeiro caso que conduzimos.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Nosso propósito permanece o mesmo: transformar problemas
            jurídicos complexos em decisões claras, com uma equipe que
            acompanha cada etapa ao lado do cliente.
          </p>
        </div>
        <ImagePlaceholder
          caption="Foto institucional — sócios fundadores em ambiente de trabalho, retrato editorial"
          className="aspect-[4/5]"
        />
      </section>

      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container-editorial flex flex-col gap-14">
          <SectionHeading
            eyebrow="Propósito"
            title="Missão, visão e valores"
            align="center"
            className="mx-auto"
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center"
              >
                <pillar.icon className="size-7 text-primary" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-medium">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial flex flex-col gap-14 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Metodologia"
          title="Como conduzimos cada caso, do início ao fim"
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {methodology.map((item) => (
            <div key={item.step} className="flex flex-col gap-3">
              <span className="font-heading text-3xl text-gold">
                {item.step}
              </span>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial grid gap-14 pb-20 sm:pb-24 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-medium">Compromisso</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Assumimos cada caso com a mesma responsabilidade que teríamos com
            um assunto próprio. Isso significa prazos respeitados, honestidade
            sobre riscos e chances reais de êxito, e disponibilidade para
            dúvidas ao longo de todo o processo.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-medium">Atendimento</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Cada cliente é atendido diretamente por um advogado responsável
            pelo caso — não por uma central de atendimento. Reuniões
            presenciais, por vídeo ou por telefone são agendadas conforme a
            preferência e a urgência de cada situação.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
