import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Scale,
  Users,
  Heart,
  ShieldCheck,
  Home,
  Landmark,
  Sprout,
} from "lucide-react"

export type PracticeArea = {
  slug: string
  title: string
  icon: LucideIcon
  summary: string
  description: string
  highlights: string[]
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    icon: Briefcase,
    summary:
      "Estruturação societária, contratos e governança para empresas em todas as fases de maturidade.",
    description:
      "Assessoramos empresas na constituição, reestruturação e operação do negócio, com foco em segurança jurídica e continuidade. Atuamos de forma preventiva, acompanhando decisões estratégicas antes que se tornem litígios.",
    highlights: [
      "Constituição e reestruturação societária",
      "Contratos comerciais e acordos de sócios",
      "Fusões, aquisições e due diligence",
      "Governança corporativa e compliance",
    ],
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    icon: Scale,
    summary:
      "Contratos, responsabilidade civil e obrigações, com atuação consultiva e contenciosa.",
    description:
      "Cuidamos de questões civis complexas — de contratos a indenizações — com análise técnica aprofundada e estratégia processual construída caso a caso.",
    highlights: [
      "Elaboração e revisão de contratos",
      "Responsabilidade civil e indenizações",
      "Ações possessórias e obrigacionais",
      "Recuperação de créditos",
    ],
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    icon: Users,
    summary:
      "Consultoria preventiva e defesa em ações trabalhistas para empresas e pessoas físicas.",
    description:
      "Orientamos empregadores na construção de políticas internas seguras e atuamos na defesa de processos, sempre priorizando soluções que reduzam risco e exposição.",
    highlights: [
      "Consultoria trabalhista preventiva",
      "Defesa em reclamações trabalhistas",
      "Auditoria de políticas internas",
      "Negociações coletivas",
    ],
  },
  {
    slug: "direito-de-familia",
    title: "Direito de Família",
    icon: Heart,
    summary:
      "Divórcio, partilha de bens, guarda e planejamento sucessório com discrição e sensibilidade.",
    description:
      "Conduzimos questões familiares com o cuidado que o tema exige, priorizando o diálogo e soluções consensuais sempre que possível, sem perder rigor técnico.",
    highlights: [
      "Divórcio e dissolução de união estável",
      "Partilha de bens e pensão alimentícia",
      "Guarda, visitação e adoção",
      "Planejamento patrimonial e sucessório",
    ],
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    icon: ShieldCheck,
    summary:
      "Benefícios, revisões e planejamento previdenciário para pessoas físicas e empresas.",
    description:
      "Analisamos cada histórico contributivo em detalhe para identificar o melhor benefício e a estratégia mais vantajosa perante o INSS e o Judiciário.",
    highlights: [
      "Aposentadorias e revisão de benefícios",
      "Auxílios por incapacidade",
      "Planejamento previdenciário",
      "Ações judiciais contra o INSS",
    ],
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    icon: Home,
    summary:
      "Due diligence, contratos e regularização em operações imobiliárias residenciais e comerciais.",
    description:
      "Damos segurança jurídica a transações imobiliárias — da análise documental à formalização — protegendo o patrimônio de nossos clientes em cada etapa.",
    highlights: [
      "Due diligence imobiliária",
      "Contratos de compra, venda e locação",
      "Regularização e usucapião",
      "Incorporação e loteamento",
    ],
  },
  {
    slug: "direito-tributario",
    title: "Direito Tributário",
    icon: Landmark,
    summary:
      "Planejamento tributário e defesa em processos administrativos e judiciais fiscais.",
    description:
      "Buscamos reduzir a carga tributária dentro da legalidade e defendemos os interesses do cliente em autuações e disputas com o Fisco.",
    highlights: [
      "Planejamento tributário estratégico",
      "Defesa em autuações fiscais",
      "Recuperação de tributos pagos indevidamente",
      "Parcelamentos e transações tributárias",
    ],
  },
  {
    slug: "direito-do-agronegocio",
    title: "Direito do Agronegócio",
    icon: Sprout,
    summary:
      "Contratos rurais, regularização fundiária e assessoria jurídica integrada para o produtor rural.",
    description:
      "Entendemos as particularidades do campo e oferecemos suporte jurídico completo, da estruturação de contratos à regularização ambiental e fundiária.",
    highlights: [
      "Contratos de arrendamento e parceria rural",
      "Regularização fundiária e ambiental",
      "Financiamento e crédito rural",
      "Sucessão de propriedades rurais",
    ],
  },
]

export function getPracticeAreaBySlug(slug: string) {
  return practiceAreas.find((area) => area.slug === slug)
}
