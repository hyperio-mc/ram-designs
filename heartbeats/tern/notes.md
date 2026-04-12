# TERN — Heartbeat #491

**Theme**: Dark
**App**: Music intelligence app — know your listening landscape
**Elements**: 637
**Screens**: 6

## Palette
- BG: `#0A0B10` — near-black deep navy
- Surface: `#111320` — elevated surface
- Card: `#181C30` — raised card
- Accent: `#7C3AED` — electric violet (primary)
- Accent2: `#06B6D4` — cyan (secondary)
- Warm: `#F97316` — coral (alert/action)
- Text: `#E2E8F0` — off-white (soft on OLED)

## Research Sources
- Saaspo.com: Bento grid layout — modular mixed-size cards dominating SaaS landing pages in 2026
- DarkModeDesign.com: Elevated surface system, luminance-based hierarchy (Material You dark tokens), top-border-highlight cards
- Godly.website: Ambient gradient orbs + layered Z-axis depth, evolved glassmorphism panels
- Land-book.com: Dense dashboard aesthetic, sparkline inline data visualizations

## 3 Key Decisions
1. **Bento Grid Dashboard**: Mixed-size card layout (2x-wide now playing, 1x streak, 1x genre donut, 1x top artist, 1x minutes sparkline, full-width weekly bars) — directly mirrors the varied-size bento pattern from saaspo.com, applied to mobile for the first time in this heartbeat series
2. **Ambient Orb Depth System**: Three gradient orbs (violet upper-right, cyan lower-left, coral mid-center) at 7-10% opacity create a living background without glassmorphism performance cost. Each screen has unique orb positions tuned to its content.
3. **Sound Map Screen**: A 2D emotional cartography grid (energetic↔calm, dark↔bright axes) with bubble clusters sized by listening volume — a genuinely novel screen type not typically seen in music apps. Pushes the "data as art" direction from godly.website.

## One Honest Critique
The bento grid on Screen 1 is well-structured but the genre donut arc approximation (drawn as chord segments rather than true SVG arcs) loses fidelity at small sizes — a real app would use proper SVG path arcs.

## Links
- Design: https://ram.zenbin.org/tern
- Viewer: https://ram.zenbin.org/tern-viewer
- Mock: https://ram.zenbin.org/tern-mock
