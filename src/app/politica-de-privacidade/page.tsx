import type { Metadata } from "next"

import { siteConfig } from "@/lib/constants"
import { PageHero } from "@/components/shared/page-hero"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade do ${siteConfig.name}, em conformidade com a Lei Geral de Proteção de Dados (LGPD).`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Política de Privacidade"
        description="Última atualização: julho de 2026."
      />

      <section className="container-editorial flex flex-col gap-8 pb-24 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-medium [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_li]:text-sm [&_li]:leading-relaxed [&_li]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-5">
        <div className="max-w-3xl space-y-4">
          <h2>1. Introdução</h2>
          <p>
            Esta Política de Privacidade descreve como o {siteConfig.name}{" "}
            (&quot;escritório&quot;, &quot;nós&quot;) coleta, utiliza e
            protege os dados pessoais de visitantes e clientes deste site,
            em conformidade com a Lei Geral de Proteção de Dados Pessoais
            (Lei nº 13.709/2018 — LGPD).
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>2. Dados coletados</h2>
          <p>Coletamos os seguintes dados quando você utiliza nosso formulário de contato:</p>
          <ul>
            <li>Nome completo</li>
            <li>Telefone</li>
            <li>E-mail</li>
            <li>Conteúdo da mensagem enviada</li>
          </ul>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>3. Finalidade do tratamento</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para responder à
            sua solicitação de contato, prestar informações sobre nossos
            serviços jurídicos e, quando aplicável, dar início a uma relação
            de atendimento advocatício.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>4. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos seus dados pessoais com terceiros para fins
            comerciais. Dados podem ser compartilhados apenas quando
            necessário para a prestação do serviço jurídico contratado ou por
            exigência legal.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>5. Seus direitos</h2>
          <p>
            Nos termos da LGPD, você pode solicitar a confirmação, o acesso,
            a correção ou a exclusão de seus dados pessoais, bem como a
            revogação do consentimento, entrando em contato pelo e-mail{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline underline-offset-2"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>6. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais razoáveis para
            proteger os dados pessoais tratados contra acessos não
            autorizados e situações de destruição, perda, alteração ou
            comunicação indevida.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>7. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta política, entre em contato pelo
            e-mail {siteConfig.email} ou pelo telefone {siteConfig.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  )
}
