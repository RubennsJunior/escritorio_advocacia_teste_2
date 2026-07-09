import {
  Users2,
  MessageSquareText,
  Compass,
  ShieldCheck,
  Fingerprint,
  RefreshCcw,
} from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"

const differentials = [
  {
    icon: Users2,
    title: "Equipe especializada",
    description:
      "Advogados dedicados a áreas específicas do direito, com profundidade técnica em cada tema tratado.",
  },
  {
    icon: Fingerprint,
    title: "Atendimento personalizado",
    description:
      "Cada cliente tem um ponto de contato direto — sem intermediários e sem respostas genéricas.",
  },
  {
    icon: MessageSquareText,
    title: "Comunicação transparente",
    description:
      "Explicamos cada decisão em linguagem clara, sem jargões desnecessários, para que você decida com segurança.",
  },
  {
    icon: Compass,
    title: "Estratégias jurídicas modernas",
    description:
      "Combinamos experiência prática com ferramentas atuais de gestão processual e análise de risco.",
  },
  {
    icon: ShieldCheck,
    title: "Ética profissional",
    description:
      "Atuação pautada pelos princípios da OAB, com integridade em cada etapa da relação com o cliente.",
  },
  {
    icon: RefreshCcw,
    title: "Acompanhamento contínuo",
    description:
      "Você recebe atualizações periódicas sobre o andamento do seu caso, sem precisar perguntar.",
  },
]

export function Differentials() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-editorial flex flex-col gap-14">
        <SectionHeading
          eyebrow="Nossos diferenciais"
          title="O que sustenta cada caso que conduzimos"
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <item.icon className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
