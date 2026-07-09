# Arquitetura

## Stack e decisões técnicas

- **Next.js 16 / App Router / Turbopack.** O projeto foi criado com
  `create-next-app@latest`, portanto usa as convenções da v16: Turbopack por
  padrão, `params`/`searchParams` sempre assíncronos, e ESLint via flat
  config (`next lint` foi removido, o script `lint` chama `eslint`
  diretamente).
- **shadcn/ui no estilo `base-nova`.** A versão do shadcn CLI usada aqui gera
  componentes sobre **Base UI** (`@base-ui/react`), não sobre Radix. Isso
  muda a API de composição: em vez de `asChild`, os componentes usam a prop
  `render` (ex.: `<Button render={<Link href="/contato" />}>`). Ao adicionar
  novos componentes do shadcn, confira a implementação gerada antes de
  assumir a API do Radix.
- **Tailwind v4 CSS-first.** Não há `tailwind.config.ts` — os tokens de
  design vivem em `src/app/globals.css` via `@theme inline` e variáveis CSS
  (`:root` / `.dark`). Veja [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
- **lucide-react v1.x.** Essa major removeu todos os ícones de marcas
  (Instagram, LinkedIn, WhatsApp etc.). Por isso, ícones de redes sociais e o
  ícone do WhatsApp são SVGs inline em `src/components/shared/`.

## Estrutura de pastas

```
src/
  app/                        # Rotas (App Router)
    layout.tsx                # Layout raiz: fontes, metadata, JSON-LD, header/footer
    page.tsx                  # Home
    sobre/
    areas-de-atuacao/
      page.tsx                # Listagem
      [slug]/page.tsx         # Detalhe (generateStaticParams)
    equipe/
      page.tsx
      [slug]/page.tsx
    artigos/
      page.tsx
      [slug]/page.tsx
    contato/
    politica-de-privacidade/
    termos-de-uso/
    api/contact/route.ts      # Endpoint do formulário de contato
    sitemap.ts / robots.ts / manifest.ts / opengraph-image.tsx
  components/
    layout/                   # Header, Footer, Logo, botão flutuante do WhatsApp
    sections/                 # Blocos de página reutilizáveis (Hero, CTA, grids...)
    forms/                    # ContactForm (React Hook Form + Zod)
    shared/                   # Primitivos de apoio (ImagePlaceholder, SectionHeading, FadeIn...)
    ui/                       # Componentes gerados pelo shadcn (não editar a mão sem necessidade)
  lib/
    constants.ts               # site config, navegação, WhatsApp
    breadcrumb.ts               # helper de JSON-LD para BreadcrumbList
    data/                       # "banco de dados" placeholder (áreas, equipe, artigos)
    validations/contact.ts      # schema Zod do formulário
    utils.ts                    # `cn()` (gerado pelo shadcn)
```

## Camada de conteúdo (pronta para CMS)

Todo o conteúdo dinâmico (áreas de atuação, equipe, artigos) é acessado
exclusivamente através de funções em `src/lib/data/*.ts`
(`getPracticeAreaBySlug`, `getTeamMemberBySlug`, `getArticleBySlug`, e os
arrays `practiceAreas` / `team` / `articles`). Nenhum componente ou página
importa dados "soltos" de outro lugar.

Isso significa que, para plugar um CMS (Sanity, Contentful, um banco de
dados, etc.), basta reescrever essas funções para buscar de uma fonte
externa — os componentes de UI não precisam mudar. As páginas dinâmicas já
usam `generateStaticParams` + `generateMetadata` assíncronos, prontos para
dados vindos de fetch.

## Formulário de contato

`ContactForm` (`src/components/forms/contact-form.tsx`) é um Client
Component com React Hook Form + Zod (`src/lib/validations/contact.ts`),
incluindo um campo honeypot (`website`). O submit faz `POST` para
`src/app/api/contact/route.ts`, que revalida com o mesmo schema Zod no
servidor, descarta silenciosamente submissões de bots (honeypot preenchido)
e, por padrão, apenas registra a mensagem em log — veja
[CONTENT_PENDING.md](./CONTENT_PENDING.md) para plugar um provedor de e-mail
real.

## Imagens

Não há fotografias reais disponíveis neste momento. Todo lugar que exigiria
uma foto usa o componente `ImagePlaceholder`
(`src/components/shared/image-placeholder.tsx`) — um placeholder acessível
(`role="img"`, `aria-label`) com a legenda descrevendo exatamente a foto que
deve substituí-lo. Veja [IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md) para o
briefing completo de cada imagem, pronto para um shooting fotográfico ou
para geração de imagem por IA.
