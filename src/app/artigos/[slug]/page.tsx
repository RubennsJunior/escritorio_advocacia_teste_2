import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

import { articles, getArticleBySlug } from "@/lib/data/articles"
import { breadcrumbJsonLd } from "@/lib/breadcrumb"
import { siteConfig } from "@/lib/constants"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Badge } from "@/components/ui/badge"
import { ArticlesGrid } from "@/components/sections/articles-grid"
import { CtaSection } from "@/components/sections/cta-section"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/artigos/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const otherArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Artigos", path: "/artigos" },
    { name: article.title, path: `/artigos/${article.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      <Breadcrumbs items={crumbs} />

      <article className="container-editorial flex flex-col gap-10 pt-8 pb-20 sm:pt-10 sm:pb-24">
        <header className="flex max-w-3xl flex-col gap-5">
          <Badge
            variant="secondary"
            className="w-fit rounded-full border-none bg-accent text-xs font-medium text-accent-foreground"
          >
            {article.category}
          </Badge>
          <h1 className="text-3xl leading-[1.15] font-medium text-balance sm:text-4xl">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Por {article.author}</span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              <time dateTime={article.publishedAt}>{publishedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {article.readingTime}
            </span>
          </div>
        </header>

        <ImagePlaceholder
          caption={`Imagem de capa — ${article.category}`}
          className="aspect-[21/9]"
        />

        <div className="flex max-w-3xl flex-col gap-5">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/contato"
          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
        >
          Falar com um especialista sobre este tema
          <ArrowRight className="size-4" />
        </Link>
      </article>

      {otherArticles.length > 0 && (
        <section className="bg-secondary/40 py-16 sm:py-20">
          <div className="container-editorial flex flex-col gap-10">
            <h2 className="font-heading text-2xl font-medium">
              Continue lendo
            </h2>
            <ArticlesGrid articles={otherArticles} />
          </div>
        </section>
      )}

      <CtaSection />
    </>
  )
}
