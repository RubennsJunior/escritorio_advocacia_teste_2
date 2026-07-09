import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { ArticlesGrid } from "@/components/sections/articles-grid"

export function ArticlesSection() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-editorial flex flex-col gap-14">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Artigos"
            title="Conteúdo jurídico para decisões mais informadas"
          />
          <Link
            href="/artigos"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
          >
            Ver todos os artigos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ArticlesGrid limit={3} />
      </div>
    </section>
  )
}
