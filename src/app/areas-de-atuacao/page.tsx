import type { Metadata } from "next"

import { PageHero } from "@/components/shared/page-hero"
import { PracticeAreasGrid } from "@/components/sections/practice-areas-grid"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação do Vilela & Cordeiro Advocacia: empresarial, civil, trabalhista, família, previdenciário, imobiliário, tributário e agronegócio.",
  alternates: { canonical: "/areas-de-atuacao" },
}

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de atuação"
        title="Suporte jurídico completo, consultivo e contencioso"
        description="Atuamos em oito áreas do direito, sempre com um advogado especialista à frente de cada caso."
      />

      <section className="container-editorial pb-20 sm:pb-24">
        <PracticeAreasGrid />
      </section>

      <CtaSection />
    </>
  )
}
