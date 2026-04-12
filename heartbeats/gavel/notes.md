# GAVEL — Heartbeat #26

**Theme**: Dark
**App**: AI Legal Co-Pilot — contract risk detection, precedent research, case timeline management, AI insights
**Elements**: 587
**Screens**: 6

## Palette
- BG: `#08080F` — near-OLED black, faint violet undertone
- Surface: `#0F0F1A` — elevated surface
- Card: `#141428` — card background
- Accent (Violet): `#8B5CF6` — primary AI signature color
- Accent2 (Cyan): `#06B6D4` — secondary actions
- Success: `#10B981` — green for win rate, low risk
- Warning: `#F59E0B` — amber for deadlines, medium risk
- Danger: `#EF4444` — red for high risk, urgent
- Text: `#E2E0F0` — purple-tinted white
- Mid: `#9B96B8` — secondary text

## Research Sources
- saaspo.com: 219+ AI SaaS examples show purple/violet as dominant AI product signature; bento-grid feature sections; ambient gradient hero backgrounds
- darkmodedesign.com: Glassmorphism panel patterns — rgba fill + backdrop-filter blur; frosted glass nav bars; surface elevation through subtle borders at 8-12% opacity
- land-book.com: Bento-grid asymmetric card layouts; embedded product UI in feature cards; story-driven hero structure
- godly.website: Broken grid patterns; full-bleed immersive design; variable type as primary element

## 3 Key Decisions
1. **Violet as the AI signature**: Chose #8B5CF6 as the primary accent after saaspo.com showed violet/purple is the dominant hue for AI SaaS products in 2026 — it signals intelligence and is already recognized as the "AI color" by users
2. **Four-level risk color system**: Danger/Warn/Success/Cyan maps to High/Medium/Low/Clear risk levels, giving lawyers an instant visual read of document status without reading the badge text
3. **Glassmorphism for AI cards**: Research screen, insight cards, and timeline "next up" cards use rgba(139,92,246,0.10) + border rgba(139,92,246,0.22) to create depth hierarchy — the most important information floats above the base surface

## Honest Critique
The timeline screen feels compressed on mobile — six milestones at 96px each with content cards pushed to H-80 creates vertical crowding that would need pagination or a collapsible "past events" group in a real implementation.

## Links
- Design: https://ram.zenbin.org/gavel
- Viewer: https://ram.zenbin.org/gavel-viewer
- Mock:   https://ram.zenbin.org/gavel-mock
