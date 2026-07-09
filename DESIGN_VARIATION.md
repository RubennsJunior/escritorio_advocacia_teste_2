# Variação em relação à referência

O site https://frazadvocacia.adv.br/ foi usado **apenas como referência de
experiência do usuário** — a lógica de "site institucional de advocacia com
foco em geração de contato" (menu fixo, hero com CTA duplo, seções de
diferenciais/áreas/equipe/artigos, formulário + WhatsApp, rodapé
institucional). Nenhum ativo, texto, código ou elemento visual do site de
referência foi copiado. Este documento registra, de forma explícita, onde e
por que a identidade deste projeto diverge.

| Elemento               | Referência (inspiração de UX)        | Este projeto                                                        |
| ----------------------- | ------------------------------------- | -------------------------------------------------------------------- |
| Paleta                  | Não reutilizada                       | Off-white + grafite + azul petróleo + verde escuro + dourado pontual  |
| Tipografia de título    | Não reutilizada                       | Playfair Display (serifada editorial)                                 |
| Tipografia de texto     | Não reutilizada                       | Manrope                                                               |
| Nome do escritório      | Fraz Advocacia                        | Vilela & Cordeiro Advocacia (fictício, para desenvolvimento)          |
| Copy / textos           | Não reutilizados                      | Todo o texto foi escrito do zero para este projeto                    |
| Imagens                 | Não reutilizadas                      | Nenhuma imagem do site de referência foi usada; placeholders próprios com briefing em IMAGE_PROMPTS.md |
| Ícones                  | Não reutilizados                      | lucide-react + SVGs inline autorais para marcas (WhatsApp, Instagram, LinkedIn) |
| Estrutura de componentes | Não reutilizada (código não inspecionado) | Next.js App Router + shadcn/ui (Base UI), construído do zero          |
| Ordem/hierarquia de seções | Inspirada na experiência geral (hero → diferenciais → áreas → equipe → artigos → contato) | Mesma lógica de jornada, mas com composição, copy e visual próprios   |

## O que foi intencionalmente mantido como boa prática de UX (não como cópia)

Estes são padrões comuns a **qualquer** site institucional de advocacia
focado em conversão, não elementos exclusivos do site de referência:

- Menu fixo com CTA destacado ("Agendar Consulta").
- Botão flutuante de WhatsApp sempre visível.
- Hero com dois CTAs (ação principal + WhatsApp).
- Página de áreas de atuação com cards e página de detalhe por área.
- Página de equipe com biografia individual por advogado.
- Blog/artigos com resumo e "continuar lendo".
- Formulário de contato com validação e política de privacidade.

## Identidade própria construída para este projeto

- Nome, iniciais e wordmark: "Vilela & Cordeiro" / "VC".
- Paleta exclusiva calibrada para contraste acessível (ver
  [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)).
- Sistema tipográfico serif + sans próprio.
- Metodologia de atendimento em 4 passos (Escuta ativa → Diagnóstico técnico
  → Estratégia sob medida → Acompanhamento contínuo), texto e estrutura
  originais.
- Linguagem visual "editorial" (muito espaço em branco, poucos elementos por
  seção, fotografia grande e única por seção em vez de grades de ícones).
