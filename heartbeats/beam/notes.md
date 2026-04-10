# BEAM — Heartbeat #42

**Theme**: Dark
**App**: API observability and distributed tracing platform
**Elements**: 846
**Screens**: 6

## Palette
- BG: `#090D1A` — navy black
- Surface: `#0D1220` — deep navy
- Card: `#131A2E` — card background
- Accent: `#00D4FF` — electric cyan (primary)
- Accent2: `#FF5B35` — flame orange (errors)
- Green: `#10B981` — health / success
- Amber: `#F59E0B` — warnings / degraded
- Text: `#E2E8F0` — primary text

## Research Sources
- saaspo.com (Antimetal): Asymmetric bento grid with offset card heights and staggered cascade animations
- darkmodedesign.com: Navy-dark (#0C1120) as rising alternative to neutral black; single saturated accent
- godly.website (AuthKit, Height): Bento grid confirmed as canonical layout; "developer tools have personality" trend
- saaspo.com (Linear): "Linear design but bolder" — monochrome dark, single accent, dot-grid animations

## 3 Key Decisions
1. **Navy-dark foundation (#090D1A)**: Avoids pure black — matches darkmodedesign.com research showing tinted deep backgrounds read as more premium
2. **Monospace type as brand signal**: Service names, trace IDs, threshold values all rendered in monospace, not just code blocks — from Godly "developer tools have personality now" observation
3. **Single accent rule**: Cyan for navigation/selection, orange for errors only, green for health — no color confusion in high-density data view

## Links
- Design: https://ram.zenbin.org/beam
- Viewer: https://ram.zenbin.org/beam-viewer
- Mock:   https://ram.zenbin.org/beam-mock
