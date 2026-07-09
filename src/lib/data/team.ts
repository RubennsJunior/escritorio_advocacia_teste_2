export type TeamMember = {
  slug: string
  name: string
  role: string
  oab: string
  photo: string
  bio: string
  fullBio: string
  areas: string[]
  email: string
}

export const team: TeamMember[] = [
  {
    slug: "isabel-vilela",
    name: "Isabel Vilela",
    role: "Sócia Fundadora — Direito Empresarial",
    oab: "OAB/SP 000.000",
    photo: "/images/team/isabel-vilela.jpg",
    bio: "Mais de 18 anos assessorando empresas em operações societárias e governança corporativa.",
    fullBio:
      "Isabel fundou o escritório com o propósito de oferecer assessoria jurídica empresarial de alto nível com a proximidade de um atendimento personalizado. Atua há mais de 18 anos em operações societárias, contratos complexos e governança corporativa, com passagem por bancas de referência em São Paulo. Formada pela Faculdade de Direito da USP, com especialização em Direito Societário pela FGV.",
    areas: ["direito-empresarial", "direito-tributario"],
    email: "isabel.vilela@vilelacordeiro.adv.br",
  },
  {
    slug: "rafael-cordeiro",
    name: "Rafael Cordeiro",
    role: "Sócio Fundador — Direito Civil e Imobiliário",
    oab: "OAB/SP 000.000",
    photo: "/images/team/rafael-cordeiro.jpg",
    bio: "Especialista em contratos e operações imobiliárias, com atuação consultiva e contenciosa.",
    fullBio:
      "Rafael construiu sua carreira em torno da segurança jurídica de operações civis e imobiliárias, com atenção especial ao detalhe contratual. Já atuou em due diligences de grandes portfólios imobiliários e representa clientes em disputas cíveis de alta complexidade. Formado pela PUC-SP, com LL.M. em Direito Imobiliário.",
    areas: ["direito-civil", "direito-imobiliario"],
    email: "rafael.cordeiro@vilelacordeiro.adv.br",
  },
  {
    slug: "beatriz-nogueira",
    name: "Beatriz Nogueira",
    role: "Advogada Sênior — Direito de Família e Sucessões",
    oab: "OAB/SP 000.000",
    photo: "/images/team/beatriz-nogueira.jpg",
    bio: "Conduz questões familiares e sucessórias com discrição, técnica e foco em soluções consensuais.",
    fullBio:
      "Beatriz acredita que o Direito de Família exige, além de técnica, sensibilidade. Sua atuação prioriza mediação e soluções consensuais, reservando o contencioso para os casos em que o diálogo se esgota. Atua também em planejamento sucessório patrimonial para famílias empresárias. Formada pela Mackenzie, com especialização em Direito de Família pela EPD.",
    areas: ["direito-de-familia"],
    email: "beatriz.nogueira@vilelacordeiro.adv.br",
  },
  {
    slug: "thiago-almeida",
    name: "Thiago Almeida",
    role: "Advogado Sênior — Trabalhista e Previdenciário",
    oab: "OAB/SP 000.000",
    photo: "/images/team/thiago-almeida.jpg",
    bio: "Atua na defesa de empresas e trabalhadores, com forte viés preventivo e de compliance.",
    fullBio:
      "Thiago combina experiência em contencioso trabalhista com uma atuação consultiva voltada à prevenção de passivos. Auxilia empresas na revisão de políticas internas e representa segurados em processos previdenciários. Formado pela Universidade Presbiteriana Mackenzie.",
    areas: ["direito-trabalhista", "direito-previdenciario"],
    email: "thiago.almeida@vilelacordeiro.adv.br",
  },
]

export function getTeamMemberBySlug(slug: string) {
  return team.find((member) => member.slug === slug)
}
