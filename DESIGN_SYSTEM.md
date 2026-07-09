# Design System

## Princípios

- **Editorial, não "SaaS".** Espaçamento generoso, poucos elementos por
  seção, tipografia como protagonista visual — não cards decorativos, não
  gradientes, não ícones em excesso.
- **Atemporal.** Paleta neutra e quente, com um único acento cromático
  (dourado) reservado a detalhes pequenos: linhas, bordas, ícones de
  contato. Nunca usado em áreas grandes.
- **Silencioso por padrão.** Animações existem para orientar o olhar (fade
  suave ao entrar na tela, hover discreto), nunca para chamar atenção para
  si mesmas.

## Paleta de cores

Definida como variáveis CSS em `src/app/globals.css` (`:root` / `.dark`),
mapeadas para os tokens semânticos do shadcn (`--background`, `--primary`,
etc.) para que todo componente shadcn herde a marca automaticamente.

| Token               | Hex       | Uso                                              |
| ------------------- | --------- | ------------------------------------------------- |
| `--background`      | `#f8f6f0` | Off-white — fundo padrão de todas as páginas       |
| `--foreground`      | `#23262a` | Grafite — texto principal                          |
| `--card`             | `#ffffff` | Branco — cards, formulário                         |
| `--primary`          | `#1d3a3e` | Azul petróleo — CTAs primários, links, ícones-chave |
| `--secondary`        | `#ece7dc` | Cinza claro — fundos alternados de seção           |
| `--forest` (utilitário) | `#244a35` | Verde escuro — botão de WhatsApp, acentos secundários |
| `--gold` (utilitário)   | `#8a6829` | Dourado — **apenas** linhas, bordas e ícones pequenos |
| `--destructive`      | `#9c3b2e` | Erros de formulário                                 |

> O dourado foi calibrado em `#8a6829` (não um dourado mais claro/vibrante)
> para atingir contraste AA (≥ 4.5:1) mesmo quando usado como texto/ícone
> pequeno sobre o fundo off-white ou sobre cartões brancos. Não usar tons
> mais claros de dourado como texto.

Os utilitários `--forest`, `--gold` e `--petroleum` são expostos como cores
Tailwind diretas (`bg-forest`, `text-gold`, `border-gold/60`) para uso fora
dos tokens semânticos padrão do shadcn.

## Tipografia

- **Títulos:** Playfair Display (`--font-heading`), serifada, editorial.
  Aplicada automaticamente a `h1`–`h4` via `@layer base` em `globals.css`.
- **Texto e UI:** Manrope (`--font-sans` / `--font-body`), alta
  legibilidade em telas pequenas.
- Carregadas via `next/font/google` em `src/app/layout.tsx` — sem CLS, sem
  requisição externa em runtime.

## Espaçamento

- Container principal: classe utilitária `.container-editorial`
  (`max-width: 1200px`, padding responsivo) — usar em toda seção de página,
  não `container` genérico do Tailwind.
- Ritmo vertical entre seções: `py-20`/`py-24` (desktop), nunca menor que
  `py-16` em qualquer breakpoint — é o "respiro" generoso pedido no
  briefing.

## Componentes

- **shadcn/ui (`src/components/ui/`)**: gerados via CLI no estilo
  `base-nova`, construídos sobre **Base UI**, não Radix. Composição
  polimórfica usa a prop `render`, não `asChild` (ex.:
  `<Button render={<Link href="/contato" />}>Agendar Consulta</Button>`).
- **Seções (`src/components/sections/`)**: blocos de página reutilizáveis
  (Hero, Differentials, PracticeAreasGrid, TeamGrid, ArticlesGrid,
  CtaSection). Cada grid aceita um prop `limit` para ser reaproveitado tanto
  na home (preview) quanto na página de listagem completa.
- **Compartilhados (`src/components/shared/`)**:
  - `SectionHeading` / `PageHero` — cabeçalhos de seção/página padronizados,
    com entrada em fade.
  - `ImagePlaceholder` — substituto de fotografia real (ver
    [IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md)).
  - `FadeIn` — wrapper de Framer Motion para revelações discretas
    (respeita `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`
    no layout raiz).
  - `Breadcrumbs` — trilha de navegação visível, casada com o JSON-LD de
    `BreadcrumbList`.

## Animação

- Fade + leve deslocamento vertical (16px) ao entrar na viewport — usado em
  cabeçalhos de seção e no Hero. Nunca em cada card individualmente (evita o
  efeito "tudo balançando" de templates genéricos).
- Header muda de transparente para `bg-background/90` com blur ao rolar a
  página (`SiteHeader`, `src/components/layout/site-header.tsx`).
- Hover discreto em links e cards: mudança de cor/borda, sem sombra
  exagerada nem escala.
- `prefers-reduced-motion: reduce` desliga toda animação CSS globalmente
  (`globals.css`) e o Framer Motion via `MotionConfig`.

## O que evitar (regra do projeto)

Gradientes roxos, glow, partículas, ícones de robô/IA, mockups fictícios de
produto, sombras pesadas, animação em todo elemento, cursor customizado.
Nenhum desses padrões deve ser reintroduzido em componentes futuros.
