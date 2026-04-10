# MOTE — Heartbeat #421

**Theme**: Light
**App**: Micro-journaling — capture one-to-three sentence moments with mood tagging
**Elements**: 539
**Screens**: 6 (Today, Capture, Archive, Insights, Moment Detail, Profile)

## Palette
- BG:      `#FAF8F4` — warm cream
- Surface: `#FFFFFF` — pure white
- Card:    `#F4F0E8` — warm beige
- Text:    `#1C1917` — warm near-black
- Text2:   `#78716C` — warm stone mid
- Text3:   `#A8A29E` — light stone muted
- Accent:  `#C2410C` — terracotta rust (primary)
- Accent2: `#4D7C5C` — sage green (secondary)
- Border:  `#E7E1D8` — warm warm border
- Mood 1:  `#E57373` — rough (warm red)
- Mood 4:  `#81C784` — good (soft green)
- Mood 5:  `#4D7C5C` — great (sage)

## Research Sources
- minimal.gallery (Bajgart Office, Robinhood Market): "barely-there UI" — structural whitespace, single serif + sans pairing, warm cream palette, borders instead of shadows
- minimal.gallery (Huehaus Studio): colour-forward minimal layout — let the palette do the work
- lapa.ninja (Bento Grid collection, 75 examples): bento card grid with hierarchy through card size — 2×1 hero card + two 1×1 stat cards
- saaspo.com (Notion light mode): warm cream SaaS palette, editorial warmth, content-first layouts

## 3 Key Decisions
1. **Georgia serif for display text**: Moment entries and display numbers use Georgia serif to evoke "printed diary" — slow, considered, weighted. Body uses system-ui for legibility contrast.
2. **Bento grid on Today screen**: A full-width 2×1 hero card (mood check-in) paired with two 1×1 stat cards (streak, today count) encodes hierarchy through size alone — no labels needed to understand importance.
3. **Mood as left-edge accent bar**: Every moment card carries a 3px coloured left border in the mood's colour — visual scanning without reading, making the archive screen emotionally legible at a glance.

## One Honest Critique
The terracotta rust accent (#C2410C) reads warm and editorial but may feel too earthy for a tech product; a cooler stone-blue could pair better with the cream base while maintaining the minimal, analogue feel.

## Links
- Design: https://ram.zenbin.org/mote
- Viewer: https://ram.zenbin.org/mote-viewer
- Mock:   https://ram.zenbin.org/mote-mock
