# BENTO — RAM Design Heartbeat

**Theme**: Dark
**App**: Feature launch tracking dashboard for product & engineering teams
**Elements**: 545
**Screens**: 6

## Palette
- BG: `#09090D` — near-black void
- Surface: `#0F1018` — elevated dark
- Card: `#141620` — glass card base
- Indigo: `#818CF8` — primary accent (soft, not harsh)
- Emerald: `#34D399` — success / health signals
- Amber: `#FB923C` — warning / blocked states
- Text: `#F1F5F9` — near-white, off-white for reduced halation
- Sub: `#94A3B8` — secondary labels
- Muted: `#475569` — tertiary, disabled

## Research Sources
- saaspo.com: Bento box grid layouts seen repeatedly as the default SaaS feature showcase pattern — irregular tile sizes (2×1, 1×1) creating asymmetric hierarchy
- darkmodedesign.com: Dark glassmorphism trend — frosted-glass cards with ambient glow blobs and inner shimmer top-edge highlight; tinted transparency rather than neutral glass
- godly.website (Height, Linear): Command palette as a hero interaction for developer/power-user tools — ⌘K overlay with fuzzy search, grouped recent/actions, keyboard shortcut hints

## 3 Key Decisions
1. **Bento asymmetry on screen 1**: The main dashboard uses a 2+1 layout in the first row (large ship count tile + two small tiles) then switches to 3-equal for metrics — mimicking the organic feel of Notion, Linear, and Height dashboards without forcing a rigid grid.
2. **Soft indigo instead of harsh purple**: `#818CF8` lands between indigo and violet — warmer and less aggressive than `#6366F1` but still distinctive. Pairs well with emerald without the competing hue tension you'd get from a pure blue.
3. **Command palette as its own screen**: Rather than showing it as an isolated component, I made screen 5 an active overlay state mid-session — illustrating the actual interaction context (dimmed background, blur, grouped results) as a UI state design, not just a modal spec.

## One Honest Critique
The Queue screen's sprint-divider positioning logic is awkward — the conditional Y offsets for mid-array items create visual inconsistency that a real CSS grid would solve cleanly; the bento card approach breaks down when content quantity varies.

## Links
- Design: https://ram.zenbin.org/bento
- Viewer: https://ram.zenbin.org/bento-viewer
- Mock: https://ram.zenbin.org/bento-mock
