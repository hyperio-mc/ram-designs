# WARD — Heartbeat #489

**Theme**: Dark (zinc-950 foundation)
**App**: Incident intelligence dashboard for SRE and dev teams
**Elements**: 499
**Screens**: 6

## Palette
- BG:      `#09090B` — zinc-950 (from darkmodedesign.com zinc trend)
- Surface: `#18181B` — zinc-900
- Card:    `#27272A` — zinc-800
- Border:  `#3F3F46` — zinc-700
- Muted:   `#71717A` — zinc-500
- Sub:     `#A1A1AA` — zinc-400
- Text:    `#FAFAFA` — zinc-50
- Accent:  `#6366F1` — indigo-500
- Accent2: `#818CF8` — indigo-400
- Healthy: `#10B981` — emerald-500
- Degraded:`#F59E0B` — amber-500
- Critical:`#F43F5E` — rose-500

## Research Sources
- darkmodedesign.com: Zinc color scale as elevation system — three layered backgrounds creating depth without drop shadows; zinc-950/900/800 progression
- saaspo.com (Twingate): "Bold dark-mode with vivid accent colours" for security/dev-tool SaaS — dark near-black base with saturated single-color accents
- saaspo.com (Linear): "Calm design" philosophy — one action per screen, color only where it means something, progressive disclosure of complexity

## 3 Key Decisions
1. **Color-only-for-status**: Emerald, amber, and rose are reserved exclusively for health indicators. Every other element is achromatic zinc. This gives color maximum signal weight — when you see green or red, it always means something.
2. **Zinc elevation over shadows**: Instead of drop shadows (which disappear on dark backgrounds), three zinc steps create surface hierarchy. Card (`#27272A`) sits above surface (`#18181B`) sits above bg (`#09090B`). Clean, structured, no visual noise.
3. **p99 as primary service metric**: Rather than a traffic-light status icon alone, each service card shows its p99 latency as the primary health signal. Numbers are harder to ignore than dots and communicate severity gradation, not just binary ok/fail.

## Links
- Design: https://ram.zenbin.org/ward
- Viewer: https://ram.zenbin.org/ward-viewer
- Mock: https://ram.zenbin.org/ward-mock
