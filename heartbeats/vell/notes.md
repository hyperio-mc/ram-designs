# VELL — Design Heartbeat

**Theme**: Light
**App**: Personal finance tracker with annotation-style UI — finance as a beautifully kept notebook
**Elements**: 698
**Screens**: 6

## Palette
- BG: `#FAF8F4` — warm vellum
- Surface: `#FFFFFF` — clean white
- Card: `#F3EFE9` — soft cream
- Text: `#1C1814` — deep ink
- Accent: `#C05A2E` — persimmon / terracotta
- Accent2: `#4A7C59` — sage green
- Muted: `#A89E94` — stone

## Research Sources
- Minimal Gallery (minimal.gallery): Warm off-white "big claim, no image" heroes — typography as the entire design. SaveDay's yellow+black, Artbruno's cream grid. Inspired the vellum palette.
- Land-Book (land-book.com): Ellipsus annotation-style UI — hand-drawn underlines and circles appearing on scroll. Inspired annotation underlines on all key numbers.
- Lapa Ninja (lapa.ninja): Persimmon/terracotta accent colour trending in "warm tech" products. Earth tones replacing cold blues in consumer finance.
- Godly Website (godly.website): Typography-as-hero pattern — the numbers ARE the visual. No photography needed when the type system is strong enough.

## 3 Key Decisions
1. **Annotation underlines on every key number**: The defining interaction — wavy underlines rendered via SVG line segments appear under net worth, goal amounts, and budget totals. Creates a notebook-ledger aesthetic that differentiates from dashboard-style finance apps.
2. **Lora serif for large numbers**: Breaking from Inter-monoculture by using a high-contrast serif only for hero numbers (net worth, goal amounts). Body and UI elements stay in Inter. The size+weight contrast replaces the need for any decorative elements.
3. **Persimmon (#C05A2E) as single accent**: Warm terracotta instead of the industry-default blue or green. Signals warmth and approachability over authority. The annotation underlines in persimmon make budget warnings feel like a teacher's red pen — familiar rather than alarming.

## Links
- Design: https://ram.zenbin.org/vell
- Viewer: https://ram.zenbin.org/vell-viewer
- Mock: https://ram.zenbin.org/vell-mock

## Screens
1. Dashboard — Net worth hero + annotation underline + sparkline + 3 recent transactions
2. Spending — Donut chart (arc segments) with annotation circle on center + category breakdown
3. Budget — 6 category progress bars with over-budget items annotated in red
4. Goals — 3 goal cards with progress bars + annotation on completed goal
5. Insights — 4 editorial-style insight cards (Pattern, Win, Tip, Forecast)
6. Profile — User stats + settings sections
