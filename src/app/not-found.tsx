import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="container-editorial flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="font-heading text-6xl text-gold">404</span>
      <h1 className="max-w-md text-3xl font-medium text-balance">
        Esta página não foi encontrada
      </h1>
      <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
        O conteúdo que você procura pode ter sido movido ou não existe mais.
      </p>
      <Button
        render={<Link href="/" />}
        nativeButton={false}
        size="lg"
        className="rounded-full px-7"
      >
        Voltar ao início
      </Button>
    </section>
  )
}
