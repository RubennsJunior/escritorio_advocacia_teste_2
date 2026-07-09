import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { practiceAreas } from "@/lib/data/practice-areas"
import { cn } from "@/lib/utils"

type PracticeAreasGridProps = {
  limit?: number
  className?: string
}

export function PracticeAreasGrid({ limit, className }: PracticeAreasGridProps) {
  const areas = limit ? practiceAreas.slice(0, limit) : practiceAreas

  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {areas.map((area) => (
        <Link
          key={area.slug}
          href={`/areas-de-atuacao/${area.slug}`}
          className="group flex flex-col gap-5 rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
        >
          <area.icon className="size-6 text-primary" strokeWidth={1.5} />
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium">{area.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {area.summary}
            </p>
          </div>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Saiba mais
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  )
}
