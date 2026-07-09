import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buildWhatsappUrl } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { WhatsappCtaLabel } from "@/components/shared/whatsapp-cta-label"
import { FadeIn } from "@/components/shared/fade-in"

const stats = [
  { value: "17+", label: "anos de atuação" },
  { value: "600+", label: "casos conduzidos" },
  { value: "8", label: "áreas do direito" },
]

export function Hero() {
  return (
    <section className="container-editorial grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-28">
      <FadeIn className="flex flex-col gap-8">
        <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          <span className="h-px w-8 bg-gold" aria-hidden />
          Advocacia consultiva e contenciosa
        </span>

        <h1 className="text-4xl leading-[1.1] font-medium text-balance sm:text-5xl lg:text-[3.25rem]">
          Orientação jurídica clara, para decisões que não podem esperar.
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
          Combinamos rigor técnico e proximidade para conduzir cada caso com
          estratégia própria — da consultoria preventiva à defesa em juízo.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/contato" />}
            nativeButton={false}
            size="lg"
            className="rounded-full px-7 text-base"
          >
            Agendar Consulta
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="rounded-full px-7 text-base"
          >
            <WhatsappCtaLabel />
          </Button>
        </div>

        <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-2xl font-medium text-primary">
                {stat.value}
              </dd>
              <span className="text-xs tracking-wide text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </dl>
      </FadeIn>

      <FadeIn delay={0.15}>
        <ImagePlaceholder
          caption="Foto institucional — sala de reuniões do escritório, luz natural, sócios em conversa com cliente"
          className="aspect-[4/5] lg:aspect-[3/4]"
        />
      </FadeIn>
    </section>
  )
}
