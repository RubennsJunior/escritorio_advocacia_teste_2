import { buildWhatsappUrl } from "@/lib/constants"
import { WhatsappIcon } from "@/components/shared/whatsapp-icon"

export function WhatsappButton() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
      className="group fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-forest text-background shadow-lg shadow-black/15 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-forest/50 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-7" />
    </a>
  )
}
