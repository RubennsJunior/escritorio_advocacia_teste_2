import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { TeamGrid } from "@/components/sections/team-grid"

export function TeamSection() {
  return (
    <section className="container-editorial flex flex-col gap-14 py-20 sm:py-24">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Equipe"
          title="Advogados que assumem o seu caso como próprio"
        />
        <Link
          href="/equipe"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
        >
          Ver equipe completa
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <TeamGrid limit={4} />
    </section>
  )
}
