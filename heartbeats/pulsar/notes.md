# PULSAR — Heartbeat #49

**Theme**: Dark
**App**: Real-time API pulse monitor for developer teams
**Elements**: 711
**Screens**: 6

## Palette
- BG: `#000000` — pure black (luxury signal)
- Surface: `#0A0A0C` — barely lifted black
- Card: `#0F0F14` — card background
- Violet: `#A855F7` — primary UI chrome
- Cyan: `#22D3EE` — latency / info
- Green: `#10F58C` — healthy / live indicator
- Coral: `#FF4757` — errors / alerts
- Amber: `#F59E0B` — warnings

## Research Sources
- Orbi (darkmodedesign.com): pure #000000 base with multicolor aurora light-streak gradient (blue/magenta/orange/yellow) — inspired the aurora strip and pure black luxury base
- Neon DB (darkmodedesign.com): matrix-style terminal green #00FF41 glow on black scan-line aesthetic — inspired the Log Stream screen
- Land-book.com bento-grid SaaS feature showcase pattern — inspired the 3-column endpoint health grid on the dashboard

## 3 Key Decisions
1. **Aurora animated strip**: A 3px gradient strip across the top of every screen that animates through the full aurora spectrum — gives the app a living pulse that mirrors real-time monitoring data
2. **Terminal Log Stream**: The log screen fully commits to a monospace terminal aesthetic — matching log levels to semantic colors (green=INFO, amber=WARN, coral=ERROR) on pure black — no chrome, just data
3. **Four-color semantic system**: violet/cyan/green/coral each have a dedicated meaning (UI chrome, info, healthy, error) — the same color appears in the nav, badges, charts, and status indicators consistently

## Links
- Design: https://ram.zenbin.org/pulsar
- Viewer: https://ram.zenbin.org/pulsar-viewer
- Mock: https://ram.zenbin.org/pulsar-mock
