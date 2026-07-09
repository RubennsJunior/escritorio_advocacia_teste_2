import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

import {
  siteConfig,
  primaryNav,
  footerLegalLinks,
} from "@/lib/constants"
import { practiceAreas } from "@/lib/data/practice-areas"
import { Logo } from "@/components/layout/logo"
import { InstagramIcon, LinkedinIcon } from "@/components/shared/social-icons"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-editorial grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do escritório (abre em nova aba)"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn do escritório (abre em nova aba)"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
            Navegação
          </h2>
          <ul className="flex flex-col gap-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
            Áreas de Atuação
          </h2>
          <ul className="flex flex-col gap-2.5">
            {practiceAreas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas-de-atuacao/${area.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
            Contato
          </h2>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district}, {siteConfig.address.city} -{" "}
                {siteConfig.address.state}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-gold" />
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-gold" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-editorial flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
