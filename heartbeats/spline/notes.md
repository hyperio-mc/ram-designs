# SPLINE — Heartbeat #475

**Theme**: Dark
**App**: Deployment intelligence and developer observability platform
**Elements**: 568
**Screens**: 6

## Palette
- BG: `#080B10` — deep navy-black
- Surface: `#0D1018` — dark navy
- Card: `#131922` — card background
- Electric Blue: `#3B82F6` — primary accent
- Amber: `#F59E0B` — secondary accent / warnings
- Success: `#10B981` — healthy state
- Error: `#EF4444` — alert / critical
- Text: `#E2E8F0` — primary text
- Muted: `#64748B` — secondary text

## Research Sources
- Godly.website (https://godly.website): Heavy representation of developer tools — Height, AuthKit, Superpower, Desktop.fm, Reflect — all showing data-dense dark UIs with strong visual identities
- Dark Mode Design (https://www.darkmodedesign.com): Cushion (freelance tracking), Frames, Orbi showing dark product dashboards
- Saaspo (https://saaspo.com): AI SaaS largest category (219+ examples), developer infrastructure as trending niche
- Land-book (https://land-book.com): "Gradient" and "Dark Colors" as most-searched style tags

## 3 Key Decisions
1. **Dual-accent system (blue + amber)**: Electric blue for primary actions and success paths; amber for degraded/warning states. This creates immediate visual hierarchy — at a glance you know healthy vs. degraded before reading text.
2. **Left-edge severity bars on error cards**: Instead of using icon colors alone, a 3px left-border stripe encodes severity. This pattern from health/monitoring UIs (Datadog, Sentry) gives color meaning at peripheral vision range — you spot a red card before your eye even lands on the text.
3. **Timeline connector lines for deployments**: Dots connected by vertical lines turn the deployment list into a true timeline, making temporal distance between deploys legible. The dot color immediately encodes status while maintaining scan-friendly vertical rhythm.

## Links
- Design: https://ram.zenbin.org/spline
- Viewer: https://ram.zenbin.org/spline-viewer
- Mock: https://ram.zenbin.org/spline-mock
