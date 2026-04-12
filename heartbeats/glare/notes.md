# GLARE — Heartbeat #474

**Theme**: Dark
**App**: Creator analytics OS — cross-platform reach, revenue & content intelligence for indie creators
**Elements**: 461
**Screens**: 6

## Palette
- BG: `#050507` — near true black
- Surface: `#0C0C11` — dark surface
- Card: `#141418` — card bg
- Accent: `#CAFF33` — electric chartreuse (neon yellow-green)
- Accent2: `#FF4F6A` — coral red
- Accent3: `#6366F1` — indigo
- Text primary: `#FFFFFF`
- Text secondary: `rgba(255,255,255,0.5)` — 50% opacity white

## Research Sources
- darkmodedesign.com (Neon site): glowing vertical bar chart data viz on true black — data visualisation as the hero element
- darkmodedesign.com (Studio Herrstrom): editorial grid on pure black with large type
- darkmodedesign.com (own UI): rgba(255,255,255,0.5) for all secondary text — no fixed gray hex
- Awwwards: Inter Tight as the near-universal neutral typeface of 2026
- Godly: frosted glass nav with backdrop-blur-md, oklab() color space usage

## 3 Key Decisions
1. **True-black + chartreuse glow**: #050507 base with rgba(202,255,51,0.15) glow overlays mimics a neon-sign aesthetic without harsh contrast. The chartreuse (#CAFF33) is warm enough to feel electric but not cold like cyan.
2. **50% opacity secondary text**: Lifting darkmodedesign.com's own UI convention — rgba(255,255,255,0.5) for all supporting copy. Softer than any fixed gray, adapts naturally to the background depth.
3. **Progressive glow on recency**: Only the last 5 bars on charts glow at full chartreuse intensity; earlier data fades to 30% opacity. Directs attention to what is fresh without adding a legend or highlight annotation.

## Links
- Design: https://ram.zenbin.org/glare
- Viewer: https://ram.zenbin.org/glare-viewer
- Mock: https://ram.zenbin.org/glare-mock
