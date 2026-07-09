import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { articles as allArticles, type Article } from "@/lib/data/articles"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Badge } from "@/components/ui/badge"

type ArticlesGridProps = {
  limit?: number
  className?: string
  articles?: Article[]
}

export function ArticlesGrid({
  limit,
  className,
  articles: articlesOverride,
}: ArticlesGridProps) {
  const source = articlesOverride ?? allArticles
  const items = limit ? source.slice(0, limit) : source

  return (
    <div className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((article) => (
        <article key={article.slug} className="flex flex-col gap-5">
          <Link href={`/artigos/${article.slug}`} tabIndex={-1}>
            <ImagePlaceholder
              caption={`Imagem de capa — ${article.category}`}
              className="aspect-[16/10]"
            />
          </Link>
          <div className="flex flex-col gap-3">
            <Badge
              variant="secondary"
              className="w-fit rounded-full border-none bg-accent text-xs font-medium text-accent-foreground"
            >
              {article.category}
            </Badge>
            <h3 className="font-heading text-xl leading-snug font-medium">
              <Link
                href={`/artigos/${article.slug}`}
                className="transition-colors hover:text-primary"
              >
                {article.title}
              </Link>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
            <Link
              href={`/artigos/${article.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
            >
              Continuar lendo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
