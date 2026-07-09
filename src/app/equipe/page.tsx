import type { Metadata } from "next"

import { PageHero } from "@/components/shared/page-hero"
import { TeamGrid } from "@/components/sections/team-grid"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça os advogados do Vilela & Cordeiro Advocacia — especialistas dedicados a cada área do direito em que atuamos.",
  alternates: { canonical: "/equipe" },
}

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Equipe"
        title="Advogados que assumem o seu caso como próprio"
        description="Cada cliente é atendido diretamente por um advogado especialista — sem intermediários."
      />

      <section className="container-editorial pb-20 sm:pb-24">
        <TeamGrid />
      </section>

      <CtaSection />
    </>
  )
}
