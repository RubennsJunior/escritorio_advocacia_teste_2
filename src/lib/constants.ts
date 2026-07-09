export const siteConfig = {
  name: "Vilela & Cordeiro Advocacia",
  shortName: "Vilela & Cordeiro",
  initials: "VC",
  tagline: "Advocacia estratégica, conduzida com clareza",
  description:
    "Escritório de advocacia full service com atuação consultiva e contenciosa. Análise individual de cada caso, comunicação transparente e acompanhamento contínuo.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilelacordeiro.adv.br",
  locale: "pt_BR",
  foundingYear: "2009",

  // Placeholders — substituir pelos dados reais do escritório antes da publicação.
  phoneDisplay: "(11) 4000-0000",
  phoneHref: "+551140000000",
  whatsappNumber: "5511999999999", // apenas dígitos, com código do país
  whatsappDefaultMessage:
    "Olá! Gostaria de agendar uma consulta com o escritório Vilela & Cordeiro Advocacia.",
  email: "contato@vilelacordeiro.adv.br",

  address: {
    street: "Av. Brigadeiro Faria Lima, 0000, 12º andar",
    district: "Itaim Bibi",
    city: "São Paulo",
    state: "SP",
    zip: "04538-000",
    country: "BR",
  },

  officeHours: "Segunda a sexta, das 9h às 18h",

  social: {
    instagram: "https://instagram.com/vilelacordeiro.adv",
    linkedin: "https://linkedin.com/company/vilelacordeiro-adv",
  },
} as const

export const primaryNav = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Equipe", href: "/equipe" },
  { label: "Artigos", href: "/artigos" },
  { label: "Contato", href: "/contato" },
] as const

export const footerLegalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
] as const

export function buildWhatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}
