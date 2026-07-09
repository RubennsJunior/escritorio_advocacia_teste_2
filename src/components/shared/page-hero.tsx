import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/shared/fade-in"

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("container-editorial pt-16 pb-14 sm:pt-20", className)}>
      <FadeIn className="flex max-w-2xl flex-col gap-5">
        <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          <span className="h-px w-8 bg-gold" aria-hidden />
          {eyebrow}
        </span>
        <h1 className="text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </FadeIn>
    </section>
  )
}
