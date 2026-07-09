# Briefing de Imagens

Nenhuma fotografia real foi incluída neste projeto. Todo local onde uma foto
é necessária usa o componente `ImagePlaceholder`
(`src/components/shared/image-placeholder.tsx`), que renderiza um bloco
visualmente coerente com a legenda exata da foto esperada — para que o
layout final não precise de ajuste ao substituir os placeholders.

Use esta lista tanto para **briefar um ensaio fotográfico profissional**
quanto como **prompt-base para geração de imagem por IA**, caso fotos reais
ainda não estejam disponíveis no lançamento.

## Diretrizes gerais (aplicam-se a todas as imagens)

- Advogados e ambiente reais — nunca ilustração, 3D ou avatar sintético.
- Ambiente corporativo sofisticado, mas não frio: madeira, tecido, plantas,
  luz natural.
- Iluminação natural ou difusa, tons quentes, coerente com a paleta
  off-white/petróleo/grafite do site.
- Sem texto, logotipo ou marca d'água embutidos na imagem.
- Sem aparência artificial de IA (mãos incorretas, texturas repetidas,
  simetria perfeita demais, pele "plástica").
- Enquadramento horizontal generoso com espaço negativo, permitindo corte
  responsivo em diferentes proporções (ver proporção pedida por item).

## Lista de imagens

### 1. Hero (home)
- **Local:** `src/components/sections/hero.tsx`
- **Proporção:** 4:5 (mobile) / 3:4 (desktop)
- **Prompt:** Sala de reuniões de escritório de advocacia contemporâneo, mesa
  de madeira escura, dois advogados (homem e mulher, 40–55 anos, trajes
  formais neutros) em conversa com um cliente, luz natural entrando por
  janela ampla, tons petróleo/grafite/off-white, foco raso, clima de
  confiança e escuta.

### 2. Sobre — fachada/recepção (home, preview "Sobre")
- **Local:** `src/components/sections/about-preview.tsx`
- **Proporção:** 4:3
- **Prompt:** Recepção ou fachada de escritório de advocacia sofisticado,
  materiais nobres (madeira, pedra, vidro), iluminação natural, sem pessoas
  ou com presença discreta ao fundo, composição limpa e simétrica.

### 3. Sobre — sócios fundadores (página /sobre)
- **Local:** `src/app/sobre/page.tsx`
- **Proporção:** 4:5
- **Prompt:** Retrato editorial de dois sócios fundadores (mulher e homem,
  40–55 anos) em ambiente de escritório, postura confiante e acessível, luz
  natural lateral, sem sorriso "de estoque" — expressão serena e presente.

### 4. Área de atuação — imagem de contexto (páginas de detalhe)
- **Local:** `src/app/areas-de-atuacao/[slug]/page.tsx`
- **Proporção:** 4:3
- **Prompt (genérico, adaptar por área):** Advogado(a) especialista
  atendendo um cliente em sala de reuniões, materiais e postura condizentes
  com a área jurídica específica (ex.: contratos sobre a mesa para
  Empresarial; planta de imóvel para Imobiliário; documentos previdenciários
  para Previdenciário).

### 5. Retratos da equipe (grid de equipe + páginas individuais)
- **Local:** `src/lib/data/team.ts` (campo `photo`, hoje não utilizado
  diretamente — placeholders gerados dinamicamente em `TeamGrid` e na página
  de detalhe do advogado)
- **Proporção:** 3:4
- **Prompt (repetir para cada advogado):** Retrato profissional em estúdio ou
  ambiente de escritório, fundo neutro fora de foco, traje formal, expressão
  confiante e acessível, iluminação suave, sem filtro artificial.
  - Isabel Vilela — sócia fundadora, 45–55 anos
  - Rafael Cordeiro — sócio fundador, 45–55 anos
  - Beatriz Nogueira — advogada sênior, 35–45 anos
  - Thiago Almeida — advogado sênior, 35–45 anos

### 6. Capas de artigos (blog)
- **Local:** `src/lib/data/articles.ts` (campo `coverImage`, hoje não
  utilizado diretamente — placeholders gerados em `ArticlesGrid` e na página
  do artigo)
- **Proporção:** 16:10 (grid) / 21:9 (topo do artigo)
- **Prompts:**
  1. *Due diligence imobiliária* — mesa com plantas de imóvel, documentos e
     lupa ou óculos, tons neutros, sem rosto em foco.
  2. *Planejamento sucessório* — mãos de duas gerações (mais velha e mais
     jovem) sobre uma mesa com documentos, luz quente, clima familiar e
     sério.
  3. *Reforma tributária* — advogado(a) analisando gráficos/planilhas em
     tela de notebook, ambiente de escritório, tom analítico.

### 7. Contato — mapa ou fachada
- **Local:** `src/app/contato/page.tsx`
- **Proporção:** 4:3
- **Prompt:** Fachada do prédio/sala do escritório ou, alternativamente, um
  mapa estático de localização estilizado nas cores da marca (ver
  DESIGN_SYSTEM.md) caso não haja foto de fachada disponível.

### 8. Open Graph / compartilhamento social
- **Local:** `src/app/opengraph-image.tsx`
- Já **gerada em código** (via `next/og`, sem depender de foto), com a
  identidade tipográfica e cromática da marca. Nenhuma ação necessária, mas
  pode ser substituída por uma versão com fotografia real no futuro.

## Como substituir um placeholder por uma foto real

1. Otimize a imagem (WebP/AVIF, largura máxima ~2000px) e salve em
   `public/images/...` seguindo os caminhos já referenciados em
   `src/lib/data/team.ts` e `src/lib/data/articles.ts`.
2. Troque o `<ImagePlaceholder caption="..." className="..." />`
   correspondente por um `<Image src="..." alt="..." fill className="..." />`
   do `next/image`, mantendo a mesma `className` de proporção/arredondamento.
3. Escreva um `alt` descritivo (não reaproveite a legenda do placeholder ao
   pé da letra — ela foi escrita para orientar produção, não para leitores
   de tela).
