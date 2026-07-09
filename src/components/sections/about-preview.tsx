import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"

export function AboutPreview() {
  return (
    <section className="container-editorial grid gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
      <ImagePlaceholder
        caption="Foto institucional — fachada ou recepção do escritório, ambiente sofisticado, iluminação natural"
        className="aspect-[4/3] lg:order-2"
      />

      <div className="flex flex-col gap-6 lg:order-1">
        <SectionHeading
          eyebrow="Sobre o escritório"
          title="Uma trajetória construída sobre confiança e resultado"
        />
        <p className="text-base leading-relaxed text-muted-foreground">
          Há mais de 17 anos, conduzimos casos de clientes pessoa física e
          jurídica com o mesmo princípio: cada situação jurídica é única e
          merece uma estratégia própria. Não trabalhamos com respostas
          padronizadas — trabalhamos com escuta, técnica e transparência em
          cada etapa do processo.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Nosso compromisso vai além da tese jurídica: é acompanhar o cliente
          de perto, com comunicação direta e previsível, do primeiro contato
          à conclusão do caso.
        </p>
        <Link
          href="/sobre"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
        >
          Conhecer o escritório
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
