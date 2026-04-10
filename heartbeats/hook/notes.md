# HOOK — Heartbeat #47

**Theme**: Dark
**App**: Webhook delivery inspector and debugger for developers
**Elements**: 502
**Screens**: 6

## Palette
- INK: `#0E1015` — near-black with blue undertone (not grey-black — reads as tech/code)
- Surface: `#151921` — card level 1
- Card: `#1C2130` — card level 2, elevated
- Rail: `#232B3C` — modals, active state
- Text: `#E8EAEF` — off-white (not pure white)
- Indigo: `#5E6AD2` — primary accent (Linear-sourced)
- Teal: `#14B69C` — success / 2xx
- Amber: `#F0A020` — warning / slow / 429
- Red: `#E5484D` — error / 5xx
- Cyan: `#00C9D4` — highlight / new events

## Research Sources
- Awwwards SOTD Darknode (darknode.com): #14181E near-black + #F90000 signal red, two-accent-only minimalism — applied the principle (minimal palette, maximum semantic clarity) to the indigo+teal+red system
- Awwwards SOTD Unseen Studio Wrapped: near-pure black + muted gold, variable Inter Tight for headings — confirmed the Inter weight system for developer tool UI
- Orbit ML (Dribbble/Muzli): #121414 near-black + #14B69C teal-green, developer monitoring tool aesthetic — directly sourced the teal color and the dark blue-leaning base
- Linear (Mobbin): deep near-black + indigo #5E6AD2, spatial elevation via luminance not shadows — core architectural influence for the depth system
- Darknode (Awwwards): CSS dot grid background pattern as subtle texture — applied as 32px radial-gradient dot grid at 40% opacity in hero

## 3 Key Decisions
1. **Spatial elevation via luminance, zero shadows**: INK #0E1015 → SURF #151921 → CARD #1C2130 → RAIL #232B3C — each level is ~6-8 hex units lighter. No box-shadows anywhere. Directly adapted from Linear's documented elevation model. This makes the interface feel spatially coherent rather than floating on a flat surface.
2. **Semantic status color system**: Teal = 2xx success, Amber = 429/timeout, Red = 5xx failure — applied identically across status dots (4px circles), left-border stripes (3px), code badges, progress/bar fills, and chart bar fills. One visual grammar, six application points. The consistency is the design.
3. **JetBrains Mono for all data, Inter for UI**: Every status code, latency value, endpoint path, and payload value renders in monospace. Every navigation label, section heading, and filter chip renders in Inter. The font switch signals the boundary between "interface" and "data" — a developer instantly knows which mode they're in.

## Links
- Design: https://ram.zenbin.org/hook
- Viewer: https://ram.zenbin.org/hook-viewer
- Mock: https://ram.zenbin.org/hook-mock
