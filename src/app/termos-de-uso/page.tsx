import type { Metadata } from "next"

import { siteConfig } from "@/lib/constants"
import { PageHero } from "@/components/shared/page-hero"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso do site do ${siteConfig.name}.`,
  alternates: { canonical: "/termos-de-uso" },
  robots: { index: true, follow: true },
}

export default function TermosDeUsoPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Termos de Uso"
        description="Última atualização: julho de 2026."
      />

      <section className="container-editorial flex flex-col gap-8 pb-24 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-medium [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground">
        <div className="max-w-3xl space-y-4">
          <h2>1. Aceitação dos termos</h2>
          <p>
            Ao acessar este site, você concorda com os presentes Termos de
            Uso. Caso não concorde com algum ponto, recomendamos que não
            utilize o site.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>2. Finalidade do site</h2>
          <p>
            Este site tem finalidade institucional e informativa. O conteúdo
            publicado não constitui consultoria jurídica e não substitui uma
            análise individualizada do seu caso por um advogado.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>3. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo deste site — textos, identidade visual e
            elementos gráficos — é de propriedade do {siteConfig.name} e não
            pode ser reproduzido sem autorização prévia.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>4. Formulário de contato</h2>
          <p>
            Ao preencher o formulário de contato, você autoriza o
            recebimento de retorno por e-mail, telefone ou WhatsApp para
            tratar da sua solicitação, conforme nossa Política de
            Privacidade.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>5. Limitação de responsabilidade</h2>
          <p>
            Envidamos esforços para manter as informações deste site
            atualizadas e corretas, mas não garantimos a ausência de erros
            ou omissões. Nenhuma relação advogado-cliente é criada apenas
            pelo uso deste site.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2>6. Legislação aplicável</h2>
          <p>
            Estes termos são regidos pela legislação brasileira, sendo eleito
            o foro da comarca de {siteConfig.address.city}/{siteConfig.address.state}{" "}
            para dirimir eventuais controvérsias.
          </p>
        </div>
      </section>
    </>
  )
}
