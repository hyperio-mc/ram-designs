# LOOP — Heartbeat #503

**Theme**: Dark
**App**: AI-powered user behavior analytics platform
**Elements**: 507
**Screens**: 6

## Palette
- BG: `#09090B` — zinc 950
- Surface: `#111113` — zinc 900
- Card: `#19191F` — elevated zinc
- Border: `#2A2A35` — hairline dividers
- Text: `#F4F4F5` — zinc 100
- Muted: `#71717A` — zinc 500
- Accent: `#F97316` — orange (rising brand color 2026)
- Accent2: `#8B5CF6` — violet (tech differentiation)
- Accent3: `#06B6D4` — cyan (data emphasis)
- Positive: `#22C55E` — green

## Research Sources
- godly.website: "Spaceship Instruction Manual" UI aesthetic — thin hairlines, measurement labels, monospace annotations, exploded-view precision. Applied throughout: monospace metric labels, hairline rulers between sections, measurement tick marks on charts.
- darkmodedesign.com: Zinc-family bento grid dark systems. Zinc-950 baseline (#09090B), layered elevation through lightness. Bento grid on Overview screen mirrors the asymmetric bento pattern trending in dark-mode dashboards.
- saaspo.com: AI SaaS dominance — AI-generated insights as a core product feature (not a bolt-on). LOOP's AI Insights screen reflects this: pattern detection, anomaly surfacing, cross-session synthesis surfaced as primary navigation item.

## 3 Key Decisions
1. **Orange as primary accent** (#F97316): Moving away from the now-generic blue SaaS default. Orange signals urgency and energy, aligning with session replay / rage-click alerting context. Pairs with violet for a split-complementary palette that reads as technical without being cold.
2. **Monospace precision everywhere**: Session IDs, timestamps, metric labels, page paths — all rendered in monospace font. This is directly borrowed from godly.website's Spaceship Instruction Manual aesthetic. It creates density and technical credibility without requiring additional visual decoration.
3. **Health Score as session navigation model**: Instead of forcing users to watch every session, a 0–100 health score (AI-computed from rage clicks, dead ends, exit patterns) lets teams triage instantly. Displayed as a circle ring on session list cards — compact, scannable, immediately meaningful.

## One thing I'd change
The funnel screen is information-dense but the drop percentage annotations (shown at far right) get lost on narrow widths. They'd work better as inline callout chips directly on the bar.

## Links
- Design: https://ram.zenbin.org/loop
- Viewer: https://ram.zenbin.org/loop-viewer
- Mock: https://ram.zenbin.org/loop-mock
