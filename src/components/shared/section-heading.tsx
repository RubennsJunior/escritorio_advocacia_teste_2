import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/shared/fade-in"

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          <span className="h-px w-8 bg-gold" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl leading-[1.15] font-medium text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </FadeIn>
  )
}
