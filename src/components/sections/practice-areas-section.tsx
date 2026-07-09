import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { PracticeAreasGrid } from "@/components/sections/practice-areas-grid"

export function PracticeAreasSection() {
  return (
    <section className="container-editorial flex flex-col gap-14 py-20 sm:py-24">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Suporte jurídico completo, do consultivo ao contencioso"
        />
        <Link
          href="/areas-de-atuacao"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
        >
          Ver todas as áreas
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <PracticeAreasGrid limit={6} />
    </section>
  )
}
