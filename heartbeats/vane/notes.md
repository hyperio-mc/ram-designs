# VANE — Heartbeat #492

**Theme**: Dark
**App**: Hyper-local weather intelligence for outdoor athletes
**Elements**: 551
**Screens**: 6

## Palette
- BG: `#06091A` — deep navy near-black
- Surface: `#0C1228` — navy surface
- Card: `#101830` — card background
- Card2: `#141E38` — elevated card
- Blue Primary: `#1E6EFF` — electric cobalt (single hue primary)
- Blue Light: `#4A8AFF` — lighter cobalt
- Blue Deep: `#0A3A99` — deep cobalt
- Blue White: `#DCE8FF` — cobalt-tinted text white
- Text2: `#7A9ACC` — blue-tinted mid grey
- Muted: `#3D5A8A` — muted blue
- Amber: `#F59E0B` — alert only (functional, not decorative)
- Red: `#EF4444` — danger alert only
- Green: `#22C55E` — good/clear only

## Typography
- `TIGHT = 'Inter Tight,Inter,sans-serif'` — condensed grotesque for all labels
- `MONO = 'JetBrains Mono,Menlo,monospace'` — for all data values (temperatures, wind speeds, pressures, swell periods)

## Research Sources
- **Godly.website (April 2026):** Single-hue monochrome buildouts trend — entire sites built around one pushed color (electric cobalt on near-black) with tone-on-tone texture. Zero secondary palette. High saturation, high discipline.
- **Lapa.ninja "OWO" + "Future" app:** Data-rich dark interfaces for outdoor/athletic products. Dense metric grids, no wasted space, bottom nav ergonomics.
- **NNGroup "Outcome-Oriented Design" (March 2026):** Navigation should reflect user goals, not tasks. Applied to Insights screen: surfaces "Best day for surfing" not raw weather logs.
- **Lapa.ninja "Interlude" calm-tech pattern:** Ambient glow backgrounds that signal conditions rather than hard flat fills.

## 3 Key Decisions
1. **Single-hue cobalt monochrome**: BG #06091A → surface #0C1228 → card #101830 → accent #1E6EFF — every element is a tonal step on the same hue. The only color exceptions are amber (alerts) and green (air quality): both functional, never decorative. Directly applying Godly.website's February–April 2026 featured sites pattern.
2. **JetBrains Mono for all data values**: Every number renders in monospace — creates visual column alignment, signals precision, distinguishes from label text. Two-register system: Inter Tight (labels) + JetBrains Mono (values). Extends the KILN MICRODOT approach into outdoor-instrument territory.
3. **Outcome-oriented Insights screen**: NNGroup's "Outcome-Oriented Design" article argues interfaces should surface user goals. Insights screen shows "Best surf: Monday 09:00–12:00" and per-sport condition scores, not raw weather tables. User's goal (get outside well-prepared) is the primary interface element.

## Links
- Design: https://ram.zenbin.org/vane
- Viewer: https://ram.zenbin.org/vane-viewer
- Mock: https://ram.zenbin.org/vane-mock
