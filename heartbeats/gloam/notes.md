# GLOAM — sleep where the light goes soft

**Theme**: Dark
**App**: Circadian rhythm & sleep optimization tracker
**Elements**: 530
**Screens**: 6

## Palette
- BG: `#090B12` — deep blue-tinted near-black (void/night sky)
- Surface: `#0F1220` — card base
- Card: `#141829` — elevated card
- Border: `#1E2438` — subtle dividers
- Amber: `#F59E0B` — warm amber accent (primary glow source)
- Ember: `#D97706` — amber deep
- Teal: `#2DD4BF` — secondary accent (REM/quality indicator)
- Text: `#EEF0F6` — slightly warm white
- Sub: `#8090B4` — blue-shifted secondary text
- Muted: `#3D4A6B` — dimmed elements

## Research Sources
- darkmodedesign.com: "ambient glow over hard shadow" trend — components emit light rather than cast shadows; depth through luminance
- darkmodedesign.com: "component-level spotlight lighting" — UI cards appear to have their own internal light source, separating layers without border lines
- darkmodedesign.com: "warm amber + dark blue-tinted near-black" palette archetype (seen on multiple featured sites)
- darkmodedesign.com: typography observation — higher font weights (500–600) compensate for optical thinning of light text on dark backgrounds

## 3 Key Decisions
1. **Blue-tinted black (#090B12 not #000000)**: Gives the background a night-sky quality — cooler than neutral gray, warmer than pure black, creating atmospheric depth without photography.
2. **Amber glow as the design system's light source**: Every interactive element, active card, and progress ring uses amber (#F59E0B) as its luminance anchor, with rgba(245,158,11,0.08–0.15) overlays making cards feel internally lit.
3. **Wind Down as the hero feature**: Instead of making analytics the primary screen, the Wind Down routine coach is treated as the core product differentiator — the thing that makes GLOAM different from Apple Health or Oura.

## Links
- Design: https://ram.zenbin.org/gloam
- Viewer: https://ram.zenbin.org/gloam-viewer
- Mock: https://ram.zenbin.org/gloam-mock
