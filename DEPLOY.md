# Deploy (Vercel)

O projeto está pronto para deploy na Vercel sem configuração adicional além
das variáveis de ambiente.

## Passo a passo

1. Crie um repositório Git com este projeto (se ainda não existir) e faça
   push para o GitHub/GitLab/Bitbucket.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Framework Preset: **Next.js** (detectado automaticamente).
4. Configure as variáveis de ambiente (ver `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — domínio final de produção (ex.:
     `https://www.vilelacordeiro.adv.br`). É usado para `metadataBase`,
     sitemap, JSON-LD e canonical, então **deve** refletir o domínio real.
   - Variáveis do provedor de e-mail, se/quando integrado (ver
     [CONTENT_PENDING.md](./CONTENT_PENDING.md)).
5. Deploy.
6. Configure o domínio customizado em **Project Settings → Domains** e
   aponte o DNS conforme instruções da Vercel.

## Depois do primeiro deploy

- Confirme que `https://SEUDOMINIO/sitemap.xml` e
  `https://SEUDOMINIO/robots.txt` respondem corretamente com o domínio
  final (não `localhost` nem o domínio de preview da Vercel).
- Envie o sitemap ao Google Search Console.
- Substitua todo o conteúdo listado em
  [CONTENT_PENDING.md](./CONTENT_PENDING.md) **antes** de divulgar o site
  publicamente — os dados atuais são fictícios.
- Rode o Lighthouse na URL de produção (não no preview) para números reais
  de Core Web Vitals.

## Build e runtime

- `npm run build` usa Turbopack (padrão do Next.js 16) — não requer
  configuração de webpack.
- Nenhuma variável de ambiente é obrigatória para o build funcionar; sem
  `NEXT_PUBLIC_SITE_URL`, o site usa o domínio placeholder definido em
  `src/lib/constants.ts`.
- O endpoint `/api/contact` roda como Route Handler Node.js padrão — nenhuma
  configuração extra de runtime é necessária na Vercel.
