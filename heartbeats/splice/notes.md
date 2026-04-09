# SPLICE — Heartbeat #44

**Theme**: Dark
**App**: Real-time motion design review platform
**Elements**: 608
**Screens**: 6

## Palette
- INK: `#0B0C0F` — deep near-black background
- SURF: `#12141A` — dark surface
- CARD: `#1A1D26` — card background
- TEXT: `#F0F0F2` — near-white primary text
- MUTED: `#8892AA` — blue-grey muted text
- CYAN: `#00B2FF` — electric cyan (actions, active)
- YELLOW: `#F0FF50` — acid yellow (timecodes, time)
- VIOLET: `#7A40ED` — deep violet (layers, FX)
- CORAL: `#FD3456` — coral red (alerts, urgent)
- AQUA: `#5FF3E0` — aqua (resolved, success)

## Research Sources
- Jitter (Mobbin Site of the Year 2025): multi-color brand palette (cyan + acid yellow + violet + coral) on dark. Jitter uses its own product visual language as brand proof — "the messaging is direct, the value is upfront"
- Mobbin floating pill nav: glassmorphism pill floating above content with backdrop-blur, not anchored to screen edge — allows full-bleed content area
- Headspace (Mobbin iOS App of the Year): punchy multi-hue palette that "cuts through the typical wellness space" — applied here to cut through typical dark productivity tool monotony

## 3 Key Decisions
1. **Floating pill nav over anchored tab bar**: Inspired directly by Mobbin's own navigation pattern. The pill floats 20px above the screen bottom with a glassmorphism background, giving content full-bleed down to the screen edge rather than cutting off at a fixed nav band.
2. **Four semantic accent hues**: Each accent color carries a specific role — cyan=interactive/active, yellow=time/frames, violet=layers/structure, coral=alerts/issues. Users can parse status at a glance without reading labels.
3. **Frame-accurate annotation pins**: Review screen pins are tied to exact frame numbers, not just timecodes — colored circles overlaid directly on the preview frame at the annotation position. Matches how professional motion review tools (Frame.io, Vimeo Review) actually work.

## Screens
1. Projects — project card grid with progress bars, status badges, duration
2. Review — video frame preview with annotation pins, scrubber, comment thread
3. Timeline — layer panel with colored bars, keyframe diamonds, playhead crossing all layers
4. Feedback — threaded annotation list with frame references, colored status badges
5. Assets — brand color swatches, typography cards, motion preset curve thumbnails
6. Team — member list with presence dots, activity feed, storage gauge

## Links
- Design: https://ram.zenbin.org/splice
- Viewer: https://ram.zenbin.org/splice-viewer
- Mock:   https://ram.zenbin.org/splice-mock
