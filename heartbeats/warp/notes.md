# WARP — Heartbeat #505

**Theme**: Dark
**App**: Release velocity dashboard for engineering teams
**Elements**: 551
**Screens**: 6

## Palette
- BG: `#0B0C10` — Void (deep zinc, not pure black)
- Surface: `#13151C` — Dark slate
- Card: `#1A1D27` — Elevated card
- Border: `#252838` — Subtle separator
- Accent: `#6366F1` — Electric indigo (primary)
- Accent2: `#F59E0B` — Warm amber (secondary)
- Accent3: `#10B981` — Emerald (success states)
- Danger: `#EF4444` — Error red
- Text: `#E2E8F0` — Slate 200
- Muted: `#64748B` — Slate 500

## Research Sources
- Godly (godly.website): Premium dark developer tools dominate — Phantom, Reflect, Shuttle all use deep zinc + single electric accent. Video previews now standard.
- Dark Mode Design (darkmodedesign.com): Skarlo (AI product studio) shows vivid single-color pop on near-black; dark B2B tools claiming "premium" aesthetic.
- Saaspo (saaspo.com): Changelog pages and deploy flows are emerging first-class design categories; 219 dedicated AI SaaS examples.
- Land-book (land-book.com): Bento card layouts and "Big Type" are now mainstream filter categories, not experimental.

## 3 Key Decisions
1. **Bento card hierarchy on Dashboard**: Velocity score card (large) → 3-col metric row (medium) → streak dots → deploy list (detail). Mirrors the bento grid pattern dominant in Godly's top-curated tools.
2. **Deploy streak as culture signal**: 18-dot visual streak line gamifies consistent shipping, tapping into GitHub contribution graph psychology. Amber accent makes it warm and celebratory.
3. **Pipeline as narrative**: Build stages presented as a vertical card list with full green progress bars rather than a raw log table — treats CI as a story of steps, not a data dump.

## Honest Critique
The nav bar icons are Unicode symbols (◈, ◎) which will look inconsistent across platforms — a proper SVG icon set would unify the identity considerably.

## Links
- Design: https://ram.zenbin.org/warp
- Viewer: https://ram.zenbin.org/warp-viewer
- Mock: https://ram.zenbin.org/warp-mock
