export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  content: string[]
  coverImage: string
  publishedAt: string
  readingTime: string
  author: string
}

export const articles: Article[] = [
  {
    slug: "como-funciona-a-due-diligence-imobiliaria",
    title: "Como funciona a due diligence em operações imobiliárias",
    category: "Direito Imobiliário",
    excerpt:
      "Entenda por que a análise documental prévia é a etapa mais importante — e mais negligenciada — de uma compra de imóvel segura.",
    coverImage: "/images/articles/due-diligence-imobiliaria.jpg",
    publishedAt: "2026-05-12",
    readingTime: "6 min de leitura",
    author: "Rafael Cordeiro",
    content: [
      "A due diligence imobiliária é o processo de verificação documental e jurídica de um imóvel antes da formalização de uma compra, venda ou incorporação. Seu objetivo é identificar riscos ocultos — ônus, restrições, disputas judiciais ou irregularidades registrais — antes que se tornem problema do comprador.",
      "Na prática, isso envolve a análise de certidões do imóvel e dos vendedores, histórico de titularidade nos últimos vinte anos, verificação de ações judiciais e execuções fiscais, além da regularidade urbanística e ambiental do bem.",
      "Negligenciar essa etapa é uma das causas mais comuns de litígio imobiliário. Um processo de due diligence bem conduzido não elimina todos os riscos, mas permite que o comprador tome uma decisão informada — e negocie condições compatíveis com o risco identificado.",
      "Nosso escritório estrutura relatórios de due diligence sob medida para cada operação, com recomendações objetivas sobre como mitigar cada risco encontrado.",
    ],
  },
  {
    slug: "planejamento-sucessorio-por-que-comecar-cedo",
    title: "Planejamento sucessório: por que começar antes é sempre melhor",
    category: "Direito de Família",
    excerpt:
      "Um planejamento sucessório bem estruturado evita conflitos entre herdeiros e reduz custos com inventário. Veja por que vale a pena antecipar essa conversa.",
    coverImage: "/images/articles/planejamento-sucessorio.jpg",
    publishedAt: "2026-04-03",
    readingTime: "5 min de leitura",
    author: "Beatriz Nogueira",
    content: [
      "Planejamento sucessório é o conjunto de estratégias jurídicas utilizadas para organizar, em vida, a transmissão de um patrimônio aos herdeiros. Envolve instrumentos como testamento, doação com reserva de usufruto, holding patrimonial e seguro de vida, entre outros.",
      "Muitas famílias adiam essa conversa por associá-la à ideia de morte, mas o planejamento sucessório é, antes de tudo, uma ferramenta de proteção familiar em vida — reduz a burocracia do inventário, antecipa a resolução de conflitos e pode gerar economia tributária relevante.",
      "Cada estrutura de planejamento deve ser desenhada de acordo com a composição familiar, o tipo de patrimônio e os objetivos de cada família. Não existe modelo único.",
      "Recomendamos revisitar o planejamento sucessório a cada mudança relevante na vida familiar ou patrimonial — casamento, nascimento, aquisição de novos bens ou mudança de regime de bens.",
    ],
  },
  {
    slug: "principais-mudancas-na-reforma-tributaria-para-empresas",
    title: "O que a reforma tributária muda para pequenas e médias empresas",
    category: "Direito Tributário",
    excerpt:
      "Um panorama objetivo sobre os principais impactos da reforma tributária na rotina fiscal de empresas de menor porte.",
    coverImage: "/images/articles/reforma-tributaria-empresas.jpg",
    publishedAt: "2026-02-18",
    readingTime: "7 min de leitura",
    author: "Isabel Vilela",
    content: [
      "A reforma tributária introduz um novo modelo de tributação sobre o consumo, substituindo gradualmente tributos como PIS, Cofins, ICMS e ISS por um sistema de IVA dual — a CBS e o IBS.",
      "Para pequenas e médias empresas, a transição exige atenção redobrada à apuração de créditos tributários, adequação de sistemas de emissão fiscal e revisão de contratos que preveem repasse de tributos.",
      "O período de transição, que se estende por alguns anos, conviverá com as regras antigas e as novas simultaneamente — o que aumenta a complexidade operacional no curto prazo, mesmo que o objetivo final seja simplificação.",
      "Recomendamos que empresas iniciem desde já um diagnóstico de impacto tributário, avaliando cadeia de fornecedores, estrutura de preços e enquadramento em regimes especiais.",
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}
