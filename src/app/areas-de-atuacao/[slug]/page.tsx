import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { practiceAreas, getPracticeAreaBySlug } from "@/lib/data/practice-areas"
import { team } from "@/lib/data/team"
import { breadcrumbJsonLd } from "@/lib/breadcrumb"
import { siteConfig } from "@/lib/constants"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/cta-section"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return practiceAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getPracticeAreaBySlug(slug)
  if (!area) return {}

  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/areas-de-atuacao/${area.slug}` },
    openGraph: {
      title: `${area.title} | ${siteConfig.name}`,
      description: area.summary,
    },
  }
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const area = getPracticeAreaBySlug(slug)
  if (!area) notFound()

  const relatedLawyers = team.filter((member) => member.areas.includes(area.slug))
  const otherAreas = practiceAreas.filter((item) => item.slug !== area.slug).slice(0, 3)

  const jsonLd = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Áreas de Atuação", path: "/areas-de-atuacao" },
    { name: area.title, path: `/areas-de-atuacao/${area.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Áreas de Atuação", path: "/areas-de-atuacao" },
          { name: area.title, path: `/areas-de-atuacao/${area.slug}` },
        ]}
      />

      <section className="container-editorial grid gap-14 pt-8 pb-16 sm:pt-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="flex flex-col gap-6">
          <area.icon className="size-9 text-primary" strokeWidth={1.25} />
          <h1 className="text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
            {area.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {area.description}
          </p>
          <Button
            render={<Link href="/contato" />}
            size="lg"
            className="w-fit rounded-full px-7 text-base"
          >
            Agendar Consulta
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <ImagePlaceholder
          caption={`Foto institucional — atendimento em ${area.title.toLowerCase()}`}
          className="aspect-[4/3]"
        />
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="container-editorial flex flex-col gap-8">
          <h2 className="font-heading text-2xl font-medium">
            O que cuidamos nesta área
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {area.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest" />
                <span className="text-sm leading-relaxed text-foreground">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {relatedLawyers.length > 0 && (
        <section className="container-editorial flex flex-col gap-8 py-16 sm:py-20">
          <h2 className="font-heading text-2xl font-medium">
            Advogados responsáveis por esta área
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLawyers.map((lawyer) => (
              <Link
                key={lawyer.slug}
                href={`/equipe/${lawyer.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <ImagePlaceholder
                  caption={lawyer.name}
                  className="aspect-square w-16 shrink-0"
                />
                <div>
                  <p className="font-heading font-medium group-hover:text-primary">
                    {lawyer.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{lawyer.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container-editorial flex flex-col gap-8 pb-16 sm:pb-20">
        <h2 className="font-heading text-2xl font-medium">Outras áreas de atuação</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {otherAreas.map((item) => (
            <Link
              key={item.slug}
              href={`/areas-de-atuacao/${item.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="text-sm font-medium">{item.title}</span>
              <ArrowRight className="size-4 text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
