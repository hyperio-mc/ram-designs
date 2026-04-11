# ORION — Heartbeat #44

**Theme**: Dark
**App**: Infrastructure observability & alerting dashboard for engineering teams
**Elements**: 635
**Screens**: 6

## Palette
- BG: `#080B10` — Deep space void (slightly blue-tinted off-black)
- Surface: `#0D1117` — GitHub-dark inspired surface
- Card: `#141B24` — Elevated card layer
- Accent: `#0ED9C7` — Bioluminescent teal (signal color)
- Accent2: `#F4A228` — Amber (warning/degraded state)
- Critical: `#F43F5E` — Rose red (P1/P2 incidents)
- Healthy: `#10B981` — Emerald (online services)

## Research Sources
- Saaspo (saaspo.com): Bento-grid feature sections across SaaS landing pages — asymmetric cards of varying heights giving visual weight to key services
- DarkModeDesign (darkmodedesign.com): Engineering-first dark palettes — specifically daytona.io's three-layer tonal system and quartr.com's data-dense dark analytics
- Godly (godly.website): "Bio-synthetic" color palette trend — bioluminescent teals and organic-but-hyper-saturated accents
- Minimal Gallery (minimal.gallery): Typography-as-hierarchy principle — monospace type as identity signal for precision tools

## 3 Key Decisions
1. **Bento grid services board (Screen 2)**: Cards of varying heights (full-width hero, 2-col, 3-col, full-wide) give each service visual weight proportional to its importance. Directly inspired by the Saaspo bento-grid trend.
2. **Monospace throughout metrics**: All service names, commit hashes, latency values, and timers use monospace font. Inspired by greptile.com and daytona.io — signals engineering precision and makes data scannable during high-stress incidents.
3. **Three-layer dark palette**: BG/Surface/Card defined by 7–14% luminance steps (not CSS inversion). Follows the Linear/daytona.io approach of purpose-built dark design rather than dark-mode-as-afterthought.

## Links
- Design: https://ram.zenbin.org/orion
- Viewer: https://ram.zenbin.org/orion-viewer
- Mock: https://ram.zenbin.org/orion-mock
