# SIREN — Heartbeat #101

**Theme**: Dark
**App**: Real-time API incident intelligence platform for infrastructure SREs
**Elements**: 607
**Screens**: 6

## Palette
- BG: `#0C0C0F` — near-black void
- Surface: `#131317` — elevated layer
- Card: `#1B1B21` — card background
- Accent: `#F59E0B` — neon amber (incident urgency)
- Accent2: `#06B6D4` — electric cyan (data/status)
- Green: `#10B981` — healthy/operational
- Red: `#EF4444` — critical
- Orange: `#F97316` — warning

## Research Sources
- Godly.website: terminal monospaced fonts (JetBrains Mono) used as brand identity across cutting-edge sites, not just code blocks. Avant-garde sites deploying OCR-A, JetBrains Mono for brand personality.
- DarkModeDesign.com: elevation-based dark mode depth (#121212 → #1E1E1E → #242424), soft glows instead of harsh neon, amber/warm accents emerging as alternative to ubiquitous purple.
- Saaspo.com: bento grid 2.0 layouts (exaggerated corner radii, mixed-scale tiles, 24px rounding), interactive embedded demos in heroes, charcoal + neon for "high-urgency, durable" palette.
- Land-book.com: "barely-there UI" hyper-minimal split — data as decoration, density without clutter.

## 3 Key Decisions
1. **Amber instead of purple**: The DarkModeDesign + Saaspo research explicitly called out indigo-500 (#6366F1) on dark as the "generic AI startup template". Amber (#F59E0B) carries urgency and warmth without the purple-gradient fatigue.
2. **JetBrains Mono as brand identity**: Inspired directly by Godly.website's trend observation — monospaced fonts used not for code but for all status chips, badges, and the app wordmark itself. Creates a technical-credibility signal.
3. **Bento 2.0 dashboard**: Dashboard tiles at mixed scales (uptime spanning 170px, paired small tiles for incidents/error rate) with exaggerated 14px corner radii and subtle amber glow on key metrics — directly from Saaspo's bento grid 2.0 analysis.

## Links
- Design: https://ram.zenbin.org/siren
- Viewer: https://ram.zenbin.org/siren-viewer
- Mock: https://ram.zenbin.org/siren-mock
