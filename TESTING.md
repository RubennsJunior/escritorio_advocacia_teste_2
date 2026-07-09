# Testes

## O que foi verificado automaticamente neste ambiente

- `npm run build` — build de produção completo (Turbopack + checagem de
  tipos TypeScript) sem erros. Todas as rotas estáticas e dinâmicas
  (`generateStaticParams` de áreas de atuação, equipe e artigos) foram
  pré-renderizadas com sucesso.
- `npm run lint` — ESLint (flat config / `eslint-config-next`) sem erros ou
  avisos no código da aplicação.
- Verificação HTTP de todas as rotas (build de produção servido localmente):
  home, `/sobre`, `/areas-de-atuacao` (+ um detalhe), `/artigos` (+ um
  detalhe), `/equipe` (+ um detalhe), `/contato`, `/politica-de-privacidade`,
  `/termos-de-uso`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`,
  `/opengraph-image` — todas retornando `200`, e uma URL inexistente
  retornando `404` (página customizada).
- Conferência manual de contraste de cor (WCAG) para os tokens de marca —
  ver nota sobre o tom de dourado em [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
  Todas as combinações texto/fundo usadas no site atingem ao menos 4.5:1
  (texto normal) ou 3:1 (texto grande/ícones).
- Revisão de hierarquia de headings (exatamente um `<h1>` por página,
  `h2`/`h3` em ordem) via busca no código-fonte.

## O que **não pôde** ser verificado neste ambiente (requer navegador)

Este ambiente de desenvolvimento não tem acesso a um navegador real —
portanto, o que segue precisa ser validado manualmente antes do lançamento:

- **Responsividade visual** nos breakpoints pedidos no briefing (360, 375,
  390, 430, 768, 1024, 1280, 1440, 1920). O CSS foi escrito mobile-first com
  Tailwind e os grids usam `sm:`/`lg:` de forma consistente, mas a
  verificação visual (recortes de texto, overlaps, etc.) deve ser feita em
  DevTools ou dispositivos reais.
- **Menu mobile (Sheet)** — abrir/fechar, foco preso dentro do painel, tecla
  Esc fechando o menu. A implementação usa Base UI `Dialog`, que gerencia
  foco e Esc automaticamente, mas não foi testada com um leitor de tela ou
  navegação por teclado real.
- **Envio real do formulário de contato** — o endpoint responde e loga no
  servidor, mas o fluxo completo de UI (estados de carregamento, sucesso,
  erro) só foi revisado no código, não clicado em um navegador.
- **Leitores de tela** (VoiceOver/NVDA) — a estrutura semântica e os
  atributos ARIA foram aplicados de forma proativa (labels em formulário,
  `aria-current` no menu, `role="img"` nos placeholders, textos
  "abre em nova aba" para links externos), mas não houve uma sessão de
  teste com leitor de tela real.
- **Lighthouse / Core Web Vitals** reais — a base técnica favorece boas
  métricas (Server Components, `next/font`, `next/image` pronto para uso,
  sem JavaScript de terceiros), mas os números só podem ser medidos após o
  deploy ou com Lighthouse local no navegador.

## Checklist para quem for validar manualmente

- [ ] Abrir o site em Chrome, Safari e Firefox (desktop e mobile)
- [ ] Testar o menu mobile em uma tela pequena (< 768px)
- [ ] Rodar o Lighthouse (Performance, Acessibilidade, SEO, Boas práticas)
- [ ] Testar navegação 100% por teclado (Tab, Shift+Tab, Enter, Esc no menu)
- [ ] Testar com um leitor de tela (VoiceOver no Mac ou NVDA no Windows)
- [ ] Enviar o formulário de contato de ponta a ponta e conferir o log do
      servidor (ou o e-mail, após integrar um provedor — ver
      [CONTENT_PENDING.md](./CONTENT_PENDING.md))
- [ ] Verificar `prefers-reduced-motion` ativando a preferência no SO e
      conferindo que as animações de entrada somem
- [ ] Validar o botão do WhatsApp em um celular real (deep link `wa.me`)
