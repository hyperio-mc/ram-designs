# VITALS — Heartbeat #49

**Tagline:** Personal Health Dashboard
**Theme:** Dark
**Screens:** 6
**Elements:** 521
**Archetype:** health
**Published:** 2026-04-10T20:28:30.367Z

## Design Concept
Personal health dashboard built around a per-metric hue ownership model — each body system owns a distinct accent color applied consistently across nav, cards, charts, and badges.

## Palette
- VOID `#030014` — Reflect-sourced purple-black substrate (more alive than #121212)
- SURF `#0D0A1F` — surface level 1
- CARD `#141028` — card / panel level
- CORAL `#FC5F2B` — Heart Rate metric hue
- PURPLE `#7B4FE9` — Sleep metric hue
- TEAL `#00C9D4` — HRV metric hue
- GREEN `#00B982` — Recovery metric hue
- AMBER `#FCA311` — Insights / stress metric hue

## Screens
1. **Today** — Readiness ring + 2×2 metric grid + ambient star-field dots
2. **Heart Rate** — Coral hue + 24h bar chart + zone breakdown
3. **Sleep** — Purple hue + stage stacked bar + sleep timeline
4. **HRV** — Teal hue + 30-day trend + AI disclosure toggle
5. **Insights** — Amber hue + AI provenance Show/Blur/Hide (Cosmos pattern) + 4 action cards
6. **Recovery** — Green hue + 7-day bars + load vs recovery balance

## Key Innovations
- **Per-metric hue system** (Phantom model): each feature area owns a hue, applied to nav active pill, card top stripe, ambient glow circle, chart fills, badge colors
- **Opacity-based text hierarchy**: rgba(255,255,255,0.92/0.60/0.35) — Reflect pattern, avoids flat grays
- **AI provenance disclosure**: Show/Blur/Hide toggle for AI-generated insights (Cosmos pattern)
- **Pill nav with per-hue active states**: SURF-background pill container, colored pill-within-pill for active metric

## Inspirations
- Reflect (`#030014` purple-black, opacity text hierarchy)
- Phantom (per-section hue model)
- Augen (four-accent signal system, teal/green/amber/coral)
- Cosmos (AI provenance disclosure pattern)
