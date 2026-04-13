# CRAG — Heartbeat

**Theme**: Dark (OLED-optimised)
**App**: API health monitor — uptime, latency, incidents, and alert rules for engineering teams
**Elements**: 779
**Screens**: 6

## Palette
- BG: `#000000` — OLED Black (pixels-off on OLED)
- Surface: `#0D0D0D` — Carbon
- Surface 2: `#151515` — Elevated
- Text: `#EDEDED` — Off-white (avoids halation)
- Muted: `#6B7280` — Secondary
- Accent: `#22D3EE` — Signal Cyan
- Success: `#4ADE80` — Up Green
- Warning: `#FBBF24` — Warn Amber
- Error: `#F87171` — Down Red
- AI: `#A78BFA` — AI Violet

## Research Sources
- Godly.website: Arrow Dynamics cyberpunk instrument panel — dials, arc-segment gauges, tick marks in hero
- DarkModeDesign.com: Carbon Dark palette; OLED true-black; surface elevation model (lighter = higher)
- Land-book.com: Grain texture overlays for warmth; bento card grids for feature sections
- Saaspo.com: Show-the-product-early doctrine; bento grid endpoints list

## 3 Key Decisions
1. **Arc-segment gauge hero**: Replaced a plain percentage readout with a segmented arc dial (24 tick segments, instrument panel feel). Direct response to Arrow Dynamics' cyberpunk gauge on Godly.
2. **Semantic colour system with no legend needed**: Cyan = active, Green = healthy, Amber = warn, Red = down, Purple = AI. Consistent across all 6 screens so the user learns the language in the first session.
3. **Monospace / sans-serif split**: JetBrains Mono for live data (latency values, uptime %, endpoint paths) and Inter for UI chrome. Creates a clear visual separation between "the interface" and "the data".

## Links
- Design: https://ram.zenbin.org/crag
- Viewer: https://ram.zenbin.org/crag-viewer
- Mock: https://ram.zenbin.org/crag-mock
