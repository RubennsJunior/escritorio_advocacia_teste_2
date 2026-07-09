# Conteúdo Pendente

Este projeto foi desenvolvido com dados **fictícios e placeholders** para
permitir a construção completa do site antes da existência dos dados reais
do escritório. Nada aqui deve ir para produção sem revisão.

## Bloqueadores para publicação (obrigatório substituir)

| Item                        | Onde                                      | Placeholder atual                          |
| --------------------------- | ------------------------------------------ | -------------------------------------------- |
| Nome do escritório           | `src/lib/constants.ts`                     | "Vilela & Cordeiro Advocacia" (fictício)      |
| Telefone                     | `src/lib/constants.ts` (`phoneDisplay`, `phoneHref`) | `(11) 4000-0000`                    |
| WhatsApp                     | `src/lib/constants.ts` (`whatsappNumber`)   | `5511999999999`                               |
| E-mail                       | `src/lib/constants.ts` (`email`)            | `contato@vilelacordeiro.adv.br`               |
| Endereço                     | `src/lib/constants.ts` (`address`)          | Av. Faria Lima, 0000 (fictício)               |
| Redes sociais                | `src/lib/constants.ts` (`social`)           | URLs fictícias                                |
| Números de OAB da equipe     | `src/lib/data/team.ts` (`oab`)              | `OAB/SP 000.000` em todos os registros        |
| Fotografias                  | Ver [IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md)  | `ImagePlaceholder` em todo o site             |
| Domínio de produção          | `.env.local` (`NEXT_PUBLIC_SITE_URL`)       | `https://www.vilelacordeiro.adv.br`           |
| Favicon / ícone da marca     | `src/app/favicon.ico`                       | Ícone padrão do Next.js                       |

## Conteúdo editorial (revisar com o escritório antes de publicar)

- **Textos institucionais** (`/sobre`): história, missão, visão, valores e
  metodologia foram escritos como exemplo plausível — precisam ser
  validados ou reescritos pelo próprio escritório.
- **Equipe** (`src/lib/data/team.ts`): 4 advogados fictícios (Isabel Vilela,
  Rafael Cordeiro, Beatriz Nogueira, Thiago Almeida) com biografias de
  exemplo. Substituir pelos advogados reais — nome, cargo, OAB, biografia,
  áreas de atuação e e-mail.
- **Áreas de atuação** (`src/lib/data/practice-areas.ts`): 8 áreas foram
  incluídas conforme o briefing do projeto. Confirmar se todas realmente são
  atendidas pelo escritório e ajustar descrições/destaques.
- **Artigos** (`src/lib/data/articles.ts`): 3 artigos de exemplo com conteúdo
  genérico, porém tecnicamente plausível. Devem ser substituídos por
  conteúdo revisado por um advogado antes da publicação (evitar
  responsabilidade por informação jurídica incorreta).

## Estrutura pronta para CMS

A camada `src/lib/data/*.ts` foi desenhada para ser facilmente substituída
por uma fonte de dados externa (CMS headless, banco de dados, etc.) sem
alterar componentes de UI — ver seção "Camada de conteúdo" em
[ARCHITECTURE.md](./ARCHITECTURE.md). Ao integrar um CMS:

1. Mantenha a mesma assinatura de tipos (`PracticeArea`, `TeamMember`,
   `Article`).
2. Substitua as funções `getXBySlug` e os arrays exportados por chamadas
   `fetch`/SDK do CMS.
3. As páginas dinâmicas (`generateStaticParams`) devem passar a buscar a
   lista de slugs na mesma fonte.

## Integração de e-mail do formulário de contato

`src/app/api/contact/route.ts` hoje **não envia e-mail real** — apenas
valida e registra a submissão em log de servidor. Antes de publicar,
integre um provedor (Resend, SendGrid, RD Station, etc.) usando as
variáveis de ambiente descritas em `.env.example`.

## Analytics

Nenhuma ferramenta de analytics foi configurada. Se necessário, adicionar
Google Analytics/Tag Manager ou Vercel Analytics e declarar a respectiva
variável de ambiente em `.env.example`.
