# Vilela & Cordeiro Advocacia — Site Institucional

Site institucional premium para escritório de advocacia, construído com
Next.js (App Router), TypeScript, Tailwind CSS v4 e shadcn/ui.

> Nome do escritório, contatos, endereço, equipe e artigos são **placeholders
> fictícios** para fins de desenvolvimento. Veja [CONTENT_PENDING.md](./CONTENT_PENDING.md)
> para a lista completa do que precisa ser substituído por dados reais antes
> da publicação.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19.2)
- **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` em `src/app/globals.css`)
- **shadcn/ui** (estilo `base-nova`, sobre [Base UI](https://base-ui.com), não Radix)
- **React Hook Form + Zod** — validação do formulário de contato
- **Framer Motion** — microinterações e revelações discretas ao rolar a página
- **next/font** — Playfair Display (títulos) + Manrope (texto)
- **next/image** e `next/og` — otimização de imagens e imagem OG gerada em código

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

### Scripts disponíveis

| Script          | Descrição                                   |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Ambiente de desenvolvimento (Turbopack)      |
| `npm run build` | Build de produção + checagem de tipos        |
| `npm run start` | Serve o build de produção                    |
| `npm run lint`  | ESLint (flat config, `eslint-config-next`)    |

## Estrutura do projeto

Veja [ARCHITECTURE.md](./ARCHITECTURE.md) para o detalhamento completo de pastas
e convenções.

## Documentação

- [ARCHITECTURE.md](./ARCHITECTURE.md) — organização de pastas e decisões técnicas
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) — paleta, tipografia, espaçamento, componentes
- [DESIGN_VARIATION.md](./DESIGN_VARIATION.md) — como a identidade se diferencia da referência usada como inspiração
- [IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md) — briefing de todas as fotografias pendentes
- [CONTENT_PENDING.md](./CONTENT_PENDING.md) — todo o conteúdo placeholder a substituir
- [SEO.md](./SEO.md) — estratégia de metadata, schema.org e sitemap
- [TESTING.md](./TESTING.md) — checklist de testes manuais e automatizados
- [DEPLOY.md](./DEPLOY.md) — publicação na Vercel

## Licença

Projeto privado — todos os direitos reservados ao escritório.
