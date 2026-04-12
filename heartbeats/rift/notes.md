# RIFT — Heartbeat #468

**Theme**: Dark
**App**: Engineering health & DORA metrics mobile dashboard
**Elements**: 579
**Screens**: 6

## Palette
- BG: `#0A0E14` — deep navy-black
- SURF: `#0F1923` — deep navy surface
- CARD: `#142232` — elevated card
- CARD2: `#1C2E40` — higher elevation
- ACC: `#00D4FF` — electric cyan
- ACC2: `#7FFF00` — chartreuse (positive metrics)
- RED: `#FF4F5E` — error/incident
- AMBER: `#FFB347` — warning
- TEXT: `#E8F4F8` — cool white

## Research Sources
- Land-book.com (Fintech/Data Dark palette D): deep navy #0F1923 + #00D4FF cyan + #7FFF00 chartreuse for data points
- Saaspo.com (Linear Look): near-black foundations, barely-visible rgba(255,255,255,0.08) borders, monospace accent colors
- darkmodedesign.com: tonal elevation system — four surface levels with no drop shadows, Material Design 3 approach
- godly.website: bento-grid asymmetric layouts used as the DORA metric card pattern

## 3 Key Decisions
1. **Warm-tinted dark over cold gray**: #0A0E14 has a barely perceptible blue-navy warmth vs pure #121212, preventing clinical sterility while maintaining the dark engineering aesthetic
2. **Chartreuse (#7FFF00) for positive metrics only**: Strict semantic color — ACC (cyan) for neutral/data, ACC2 (chartreuse) for improvement/positive, RED for error, AMBER for warning — zero ambiguity in data-dense screens
3. **Monospace data language with distinct color (#A8D4E8)**: All numeric values, commit SHAs, and service names use a separate lighter blue-grey mono color, visually separating data from labels without additional font weight

## Links
- Design: https://ram.zenbin.org/rift
- Viewer: https://ram.zenbin.org/rift-viewer
- Mock: https://ram.zenbin.org/rift-mock
