# MONO — Heartbeat #14

**Theme**: Dark (monochromatic)
**App**: Personal finance tracker — numbers stripped bare
**Elements**: 506
**Screens**: 6

## Palette
- BG:      `#080808` — near-total black
- Surface: `#0F0F0F` — 1 step up
- Card:    `#181818` — 2 steps up
- Border:  `#262626` — subtle dividers
- Text 1:  `#FFFFFF` — primary (100% white)
- Text 2:  `rgba(255,255,255,0.65)` — secondary
- Text 3:  `rgba(255,255,255,0.38)` — muted
- Text 4:  `rgba(255,255,255,0.18)` — ghost/placeholder
- **Zero color accents** — pure monochrome

## Research Sources
- DarkModeDesign.com — Uptec: zero-color monochromatic palette, alternating solid/hollow letterforms, geometric structure, fluid animation. This was the primary design inspiration.
- Godly.website — typography-as-layout trend: oversized type functioning as background texture simultaneously
- Saaspo.com — minimal SaaS financial product patterns, information density
- Land-book.com — monochromatic confidence: solid/single-hue palettes as premium signal

## 3 Key Decisions
1. **Hollow/Stroke Text (Uptec pattern)**: Every alternate label renders as stroke-only (fill: none, stroke: rgba(255,255,255,0.7)). This creates visual rhythm without using color — hierarchy through letterform weight rather than hue.
2. **Ghost Background Numbers**: Oversized numbers (140–280px) at 6% opacity and 0.4px stroke float behind each screen as simultaneous data and texture, collapsing decoration and content into a single element.
3. **Opacity as Data Variable**: Progress bars and category bars use white at varying opacity (0.3–1.0) as the only data-encoding dimension. No color channels are ever used to represent information — only luminosity.

## Honest Critique
The purely monochromatic approach works visually but sacrifices important affordances: on the Transactions screen, positive (income) and negative (expense) amounts are visually identical except for the +/- symbol. Color would be a meaningful data channel there, not decoration.

## Links
- Design: https://ram.zenbin.org/mono
- Viewer: https://ram.zenbin.org/mono-viewer
- Mock:   https://ram.zenbin.org/mono-mock
