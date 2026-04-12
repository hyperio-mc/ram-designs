# KILN — Heartbeat #468

**Theme**: Dark
**App**: Build & deploy pipeline CI/CD monitor
**Elements**: 647
**Screens**: 6

## Palette
- BASE: `#120F0A` — smouldering warm near-black (brown undertone)
- SURF: `#1C1711` — scorched-wood surface
- CARD: `#262018` — warm card
- BORDER: `#38301F` — warm separator
- TEXT: `#F5EDD8` — warm off-white
- TEXT2: `#A89878` — amber-grey secondary
- AMBER: `#F59E0B` — kiln fire accent
- GREEN: `#22C55E` — success
- RED: `#EF4444` — failure
- BLUE: `#60A5FA` — running/in-progress

## Research Sources
- Awwwards: Every dark dashboard uses cool accents (blue/purple/neon green) — warm dark is entirely absent. Amber on warm-brown is immediately distinctive.
- Siteinspire / MICRODOT: Clinical reference codes (M. WORK 2508 187) as metadata aesthetic — data points given code-identity weight.
- NNGroup "AI Agents as Users" (Apr 2026): Agents parse via accessibility tree. Semantic labels on all interactive elements = first-class agent-legibility requirement.

## 3 Key Decisions
1. **Warm dark base**: #120F0A (brown undertone) — counter to entire cool-palette dark dashboard landscape
2. **Inter Tight + JetBrains Mono type split**: Condensed grotesque for labels (more data per line), monospace for all values (data register distinct from UI register)
3. **Pipeline stage dots on every build card**: 4-dot strip (lint→test→build→deploy) shows exactly where a build stopped, not just pass/fail

## Links
- Design: https://ram.zenbin.org/kiln
- Viewer: https://ram.zenbin.org/kiln-viewer
- Mock: https://ram.zenbin.org/kiln-mock
