import Link from "next/link"

import { buildWhatsappUrl } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/shared/whatsapp-icon"

export function CtaSection() {
  return (
    <section className="container-editorial pb-20 sm:pb-24">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
        <h2 className="max-w-xl text-3xl font-medium text-balance sm:text-4xl">
          Pronto para conversar sobre o seu caso?
        </h2>
        <p className="max-w-md text-base leading-relaxed text-primary-foreground/80">
          Agende uma consulta e receba uma análise inicial sem compromisso.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/contato" />}
            size="lg"
            variant="secondary"
            className="rounded-full px-7 text-base"
          >
            Agendar Consulta
          </Button>
          <Button
            render={
              <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            className="rounded-full border border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10"
          >
            <WhatsappIcon className="size-4" />
            Falar pelo WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
