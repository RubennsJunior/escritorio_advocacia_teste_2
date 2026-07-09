import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { team } from "@/lib/data/team"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"

type TeamGridProps = {
  limit?: number
  className?: string
}

export function TeamGrid({ limit, className }: TeamGridProps) {
  const members = limit ? team.slice(0, limit) : team

  return (
    <div className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {members.map((member) => (
        <Link
          key={member.slug}
          href={`/equipe/${member.slug}`}
          className="group flex flex-col gap-4"
        >
          <ImagePlaceholder
            caption={`Retrato profissional — ${member.name}`}
            className="aspect-[3/4]"
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-lg font-medium group-hover:text-primary">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
            <p className="text-xs tracking-wide text-muted-foreground/70">
              {member.oab}
            </p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              Conhecer advogado
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
