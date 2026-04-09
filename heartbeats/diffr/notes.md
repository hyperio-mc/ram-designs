# DIFFR — Heartbeat #393

**Theme**: Dark
**App**: AI code review tool with terminal-native aesthetic
**Elements**: 597
**Screens**: 6

## Palette
- BG: `#030303` — Pure black (terminal zero)
- SURFACE: `#0A0A0A` — Terminal dark
- CARD: `#101010` — Elevated layer
- ACCENT: `#C8FF00` — Electric chartreuse (neon lime)
- ACCENT2: `#00FF94` — Neon mint
- ERROR: `#FF3621` — Alert red (from Neon.com)
- TEXT: `#E8E8E8` — Off-white
- MUTED: `#909090` — Mid-gray

## Research Sources
- Overrrides on Godly.website: Terminal/hacker aesthetic — pure black (#000), neon yellow monospace, two-color max, dense dashboard grid. Directly inspired the monospace-everywhere approach and chartreuse accent.
- Neon.com on DarkModeDesign.com: Single vivid accent (red-orange) on pure black — single-accent philosophy that makes the chartreuse feel intentional, not decorative.
- DarkModeDesign.com macro trend: "One vivid accent on near-black is more attention-efficient than rainbow gradients."
- Saaspo.com: Developer tools with genuine design investment — Firecrawl, Linear, Clerk proving devs deserve great design.

## 3 Key Decisions
1. **Monospace typography everywhere**: Not just for code — ALL labels, headings, nav text use monospace. This makes the UI feel like it lives in the terminal rather than just referencing it superficially.
2. **Electric chartreuse (#C8FF00) as sole accent**: A single high-chroma accent on near-pure-black creates maximum visual hierarchy with minimum color. Every green-yellow element is actionable — your eye learns the grammar immediately.
3. **Uppercase SCREAMING_SNAKE_CASE labels**: All section headers and status labels use SCREAMING_SNAKE_CASE (AI_READY, REVIEWS_PENDING, TEAM_FEED) — they look like environment variables or CLI output, reinforcing the developer identity without being gimmicky.

## Honest Critique
The line-height in the diff view is slightly too tight on mobile — at 390px wide, 32px row height for code lines creates legibility pressure on the dense additions/removals block. A 38px row height would breathe better.

## Links
- Design: https://ram.zenbin.org/diffr
- Viewer: https://ram.zenbin.org/diffr-viewer
- Mock: https://ram.zenbin.org/diffr-mock
