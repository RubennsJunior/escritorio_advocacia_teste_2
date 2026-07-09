# SEO

## Metadata

- `src/app/layout.tsx` define o template de título
  (`%s | Vilela & Cordeiro Advocacia`), descrição padrão, `metadataBase`,
  Open Graph, Twitter Card e diretivas de robots via a Metadata API do
  Next.js.
- Cada rota define seu próprio `export const metadata` (páginas estáticas)
  ou `generateMetadata` assíncrono (rotas dinâmicas: áreas de atuação,
  equipe, artigos), sempre com `alternates.canonical` explícito.

## Dados estruturados (schema.org / JSON-LD)

| Schema           | Onde                                              |
| ---------------- | -------------------------------------------------- |
| `LegalService`   | `src/app/layout.tsx` (organização, em todas as páginas) |
| `BreadcrumbList` | Páginas de detalhe (área, advogado, artigo) via `src/lib/breadcrumb.ts` |
| `Person`         | Página individual de cada advogado                  |
| `Article`        | Página individual de cada artigo                     |

Todos os blocos JSON-LD são renderizados via `<script type="application/ld+json">`
com `dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }}` — o conteúdo
vem inteiramente de dados internos tipados (nunca de input do usuário), não
há risco de injeção.

## Sitemap, robots e manifest

- `src/app/sitemap.ts` — gera `/sitemap.xml` incluindo todas as páginas
  estáticas e todas as rotas dinâmicas (áreas, advogados, artigos) a partir
  dos mesmos arrays de `src/lib/data/`. **Novas entradas em `practiceAreas`,
  `team` ou `articles` aparecem automaticamente no sitemap.**
- `src/app/robots.ts` — permite indexação geral, bloqueia `/api/`, aponta
  para o sitemap.
- `src/app/manifest.ts` — Web App Manifest com nome, cores de marca e ícone.

## Open Graph Image

`src/app/opengraph-image.tsx` gera a imagem de compartilhamento (1200×630)
em código via `next/og`, usando a paleta e tipografia da marca — não depende
de nenhum arquivo de imagem externo, então funciona desde o primeiro deploy.

## Boas práticas aplicadas

- URLs amigáveis e semânticas (`/areas-de-atuacao/direito-empresarial`, não
  IDs).
- Um único `<h1>` por página, hierarquia `h2`/`h3` consistente (ver seção de
  acessibilidade em TESTING.md).
- Todo `ImagePlaceholder` tem `role="img"` + `aria-label` descritivo — ao
  substituir por `next/image`, mantenha um `alt` real e descritivo (não a
  legenda de produção usada no placeholder).
- `lang="pt-BR"` no elemento `<html>`.

## Pendências antes de publicar

- Confirmar `NEXT_PUBLIC_SITE_URL` no ambiente de produção (usado em
  `metadataBase`, sitemap, JSON-LD e canonical).
- Submeter o site ao Google Search Console e enviar `sitemap.xml` assim que
  o domínio real estiver no ar.
- Validar os schemas em https://validator.schema.org/ e o Rich Results Test
  do Google após popular os dados reais da equipe e do escritório.
