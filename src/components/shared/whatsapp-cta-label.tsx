import { WhatsappIcon } from "@/components/shared/whatsapp-icon"

/**
 * Icon + label + "opens in new tab" a11y hint for the WhatsApp CTA, reused by
 * every button/link that opens wa.me (Hero, CtaSection, Contato page) so the
 * wording and screen-reader hint can't drift between them.
 */
export function WhatsappCtaLabel() {
  return (
    <>
      <WhatsappIcon className="size-4" />
      Falar pelo WhatsApp
      <span className="sr-only"> (abre em nova aba)</span>
    </>
  )
}
