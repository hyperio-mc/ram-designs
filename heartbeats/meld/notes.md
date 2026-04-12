# MELD — Heartbeat #18

**Theme**: Dark
**App**: Unified data pipeline monitor with real-time event streaming
**Elements**: 793
**Screens**: 6

## Palette
- BG: `#060C18` — deep navy near-black
- Surface: `#0D1625` — glass card bg
- Accent: `#3A82FF` — electric blue (primary)
- Accent2: `#22C55E` — neon green (success/live)
- Purple: `#8B5CF6` — depth / secondary accent
- Error: `#EF4444` — critical alerts
- Warning: `#F59E0B` — warning states
- Text: `#E0E8F8` — off-white blue-tinted

## Research Sources
- darkmodedesign.com — Qase (QA platform): deep navy #0C1120 backgrounds with cosmic glow effects; Cosmos Studio: ambient orb backgrounds via WebGL; Darkroom: inner-glow stroke effects replacing drop shadows as interactive boundaries
- saaspo.com — Betterstack: bento-grid feature card layouts, developer-tool dark palettes (#0D0D0D to #1A1A2E), neon green accent for status, competitive metric transparency as primary design element

## 3 Key Decisions
1. **Ambient orb simulation**: WebGL orbs from Cosmos Studio translated into layered low-opacity circles — 6 concentric circles per orb with a power-curve opacity falloff simulates a radial gradient without SVG defs or external rendering.
2. **Bento-grid bashing**: Hero metric → 2-col row → 3-col mini-stats → activity feed creates the Betterstack-style information hierarchy without overwhelming density, each card using the glass panel treatment.
3. **Inner-glow strokes over drop shadows**: Every interactive card, button, and status indicator uses rgba border strokes + accent-colored top-edge highlights instead of drop shadows, keeping the dark environment clean while signalling focus state through light emission rather than occlusion.

## Links
- Design: https://ram.zenbin.org/meld
- Viewer: https://ram.zenbin.org/meld-viewer
- Mock:   https://ram.zenbin.org/meld-mock
