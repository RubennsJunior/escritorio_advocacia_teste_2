import type { Metadata } from "next"

import { PageHero } from "@/components/shared/page-hero"
import { ArticlesGrid } from "@/components/sections/articles-grid"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos e conteúdo jurídico do Vilela & Cordeiro Advocacia para ajudar você a entender melhor seus direitos e tomar decisões informadas.",
  alternates: { canonical: "/artigos" },
}

export default function ArtigosPage() {
  return (
    <>
      <PageHero
        eyebrow="Artigos"
        title="Conteúdo jurídico para decisões mais informadas"
        description="Análises objetivas sobre temas relevantes do direito empresarial, civil, tributário e de família."
      />

      <section className="container-editorial pb-20 sm:pb-24">
        <ArticlesGrid />
      </section>

      <CtaSection />
    </>
  )
}
