# DRIP — Heartbeat

**Theme**: Dark
**App**: Developer Release Intelligence Platform — CI/CD pipeline monitoring
**Elements**: 867
**Screens**: 6

## Palette
- BG: `#0E0F11` — near-black (avoids OLED smear)
- Surface: `#171921` — layered surface
- Card: `#20232D` — elevated card
- Accent: `#5E6AD2` — Linear indigo
- Accent2: `#6EE7B7` — emerald success
- Warning: `#F59E0B` — amber
- Error: `#F87171` — red
- Text: `#F0F2F8` — off-white (no glare)
- Sub: `#8B92A8` — secondary
- Muted: `#4B5168` — muted/decorative

## Research Sources
- Saaspo (https://saaspo.com): Linear app's dark design language — `#222326` surfaces, indigo/electric blue accents, Inter font, obsessive spacing, zero decorative illustration, actual product data as the visual hero
- minimal.gallery (https://minimal.gallery): Pellonium — clustered equidistant dot motif as the only decorative system, everything else stripped away

## 3 Key Decisions
1. **Near-black over pure black**: `#0E0F11` avoids OLED smearing; reads more intentional than `#000`. Directly from darkmodedesign.com trend observation.
2. **Dot-grid as signature**: The only decorative element — a field of `#2A2D3E` dots at 20px spacing — surfaces at hero sections and screen transitions, inspired by Pellonium's clustered dot system.
3. **Status through color fills, not icons**: 4-color system (indigo/emerald/amber/red) with progress fill bars communicates pipeline states — no emoji, no heavy iconography, full Linear discipline.

## Links
- Design: https://ram.zenbin.org/drip
- Viewer: https://ram.zenbin.org/drip-viewer
- Mock: https://ram.zenbin.org/drip-mock
