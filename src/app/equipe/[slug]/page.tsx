import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Mail } from "lucide-react"

import { team, getTeamMemberBySlug } from "@/lib/data/team"
import { getPracticeAreaBySlug } from "@/lib/data/practice-areas"
import { breadcrumbJsonLd } from "@/lib/breadcrumb"
import { siteConfig } from "@/lib/constants"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/cta-section"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return team.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) return {}

  return {
    title: member.name,
    description: member.bio,
    alternates: { canonical: `/equipe/${member.slug}` },
    openGraph: {
      title: `${member.name} | ${siteConfig.name}`,
      description: member.bio,
    },
  }
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) notFound()

  const areas = member.areas
    .map((areaSlug) => getPracticeAreaBySlug(areaSlug))
    .filter(Boolean)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    email: member.email,
    worksFor: { "@type": "LegalService", name: siteConfig.name },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Equipe", path: "/equipe" },
              { name: member.name, path: `/equipe/${member.slug}` },
            ])
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Equipe", path: "/equipe" },
          { name: member.name, path: `/equipe/${member.slug}` },
        ]}
      />

      <section className="container-editorial grid gap-14 pt-8 pb-20 sm:pt-10 sm:pb-24 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <ImagePlaceholder
          caption={`Retrato profissional — ${member.name}`}
          className="aspect-[3/4]"
        />

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-medium sm:text-4xl">{member.name}</h1>
            <p className="mt-2 text-base text-muted-foreground">{member.role}</p>
            <p className="mt-1 text-xs tracking-wide text-muted-foreground/70">
              {member.oab}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {member.fullBio}
          </p>

          {areas.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                Áreas de atuação
              </h2>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <Link
                    key={area!.slug}
                    href={`/areas-de-atuacao/${area!.slug}`}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {area!.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              render={<Link href="/contato" />}
              size="lg"
              className="rounded-full px-7 text-base"
            >
              Agendar Consulta
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href={`mailto:${member.email}`} />}
              variant="outline"
              size="lg"
              className="rounded-full px-7 text-base"
            >
              <Mail className="size-4" />
              {member.email}
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
