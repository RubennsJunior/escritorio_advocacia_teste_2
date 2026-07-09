import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { siteConfig, buildWhatsappUrl } from "@/lib/constants"
import { PageHero } from "@/components/shared/page-hero"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { ContactForm } from "@/components/forms/contact-form"
import { WhatsappCtaLabel } from "@/components/shared/whatsapp-cta-label"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Vilela & Cordeiro Advocacia. Agende uma consulta por telefone, WhatsApp ou pelo formulário do site.",
  alternates: { canonical: "/contato" },
}

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso"
        description="Preencha o formulário abaixo ou fale diretamente pelos canais ao lado. Retornamos em até um dia útil."
      />

      <section className="container-editorial grid gap-12 pb-20 sm:pb-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
              <span className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district}, {siteConfig.address.city} -{" "}
                {siteConfig.address.state}, {siteConfig.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-gold" />
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-gold" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-gold" />
              <span className="text-sm text-muted-foreground">
                {siteConfig.officeHours}
              </span>
            </li>
          </ul>

          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <WhatsappCtaLabel />
          </a>

          <ImagePlaceholder
            caption="Mapa ou foto da fachada — localização do escritório"
            className="aspect-[4/3]"
          />
        </div>

        <ContactForm />
      </section>
    </>
  )
}
