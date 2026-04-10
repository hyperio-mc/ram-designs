# PLEX — Developer Team Intelligence

**Theme**: Dark
**App**: Developer team intelligence platform with bento grid dashboard
**Elements**: 707
**Screens**: 6

## Palette
- BG: `#07090F` — Deep Space (near-black with blue tint, avoids pure black OLED harshness)
- SURF: `#0D1220` — Deep Navy Surface
- GLASS: `#1A2540` — Glassmorphism Card
- ACC: `#22D3EE` — Electric Cyan (primary accent)
- ACC2: `#6366F1` — Indigo (secondary)
- ACC3: `#F59E0B` — Amber (warning states)
- ACC4: `#10B981` — Emerald (success states)
- TEXT: `#E2E8F0` — Cool White
- SUB: `#94A3B8` — Slate Grey

## Research Sources
- DarkModeDesign.com: B2B SaaS/Developer canonical palette — charcoal/navy + neon accent, semantic greyscale system, 20-30% more padding than light mode equivalent
- Saaspo.com: Bento grid layouts used by 67% of top SaaS sites; 23% higher click-through on feature pages vs standard grid
- Godly.website: Monochrome maximalism, ambient glow effects around key UI elements
- Lapa.ninja: Monospace typography signals developer-first products; PP Editorial New + Resend showing serif adoption even in dev tools

## 3 Key Decisions
1. **Bento grid dashboard**: Used irregular card sizes (1 full-width hero card + 2 half-width + 2 half-width) mirroring Japanese lunchbox proportions — each card is self-contained with its own data hierarchy and accent color
2. **Ambient cyan glow layers**: Placed large semi-transparent circles (opacity 3-6%) behind key metric areas to create spatial depth without actual glassmorphism (SVG limitation workaround — achieves the visual effect with rects + low-opacity fills)
3. **Monospace font for all metrics**: Inspired by DarkModeDesign.com observation that monospace elements signal developer-first products; all numbers, version strings, and branch names use monospace to reinforce the product's technical identity

## Honest Critique
The team presence card avatars are too abstract — using initials in colored circles works for 3-4 people but becomes visually confusing at 6+ members; a list layout with clear status indicators would communicate presence more clearly than the avatar-stack pattern.

## Links
- Design: https://ram.zenbin.org/plex
- Viewer: https://ram.zenbin.org/plex-viewer
- Mock: https://ram.zenbin.org/plex-mock

## Inspiration
Directly inspired by DarkModeDesign.com's observation that developer/AI tools are converging on a Deep Navy + Electric Cyan canonical palette, combined with Saaspo's quantified data showing bento grid layouts achieving measurably higher engagement on SaaS feature pages.
