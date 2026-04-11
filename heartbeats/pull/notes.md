# PULL — Heartbeat #100

**Theme**: Dark
**App**: AI-powered code review and PR analytics dashboard
**Elements**: 538
**Screens**: 6

## Palette
- BG: `#0B0D12` — deep near-black
- Surface: `#111520` — elevation step 1
- Card: `#181D2C` — elevation step 2
- Card2: `#1E2436` — elevation step 3
- Electric Blue: `#4F9EFF` — primary accent, developer trust
- Violet: `#8B5CF6` — AI/secondary accent
- Mint: `#34D399` — positive/approved state
- Text: `#E2E8F8` — primary text
- Dim: `#8899BB` — secondary text

## Research Sources
- darkmodedesign.com: Linear's minimal dark UI, elevation via shade steps (#121212→#1e1e1e), data visualisation that "emits light" against dark backgrounds
- saaspo.com: Bento grid feature layouts, product UI in hero, dominant purple for AI SaaS, bento card mosaics with varying proportions
- godly.website: Aurora/mesh gradient aesthetic — soft radial colour blobs over dark backgrounds
- land-book.com: "Bento grid feature sections" as named layout pattern, asymmetric mosaic card proportions

## 3 Key Decisions
1. **Elevation through shade steps, not shadows**: Background layers at #0B0D12 → #111520 → #181D2C → #1E2436 create physical depth the way Linear does it — you feel the hierarchy without seeing any drop shadows
2. **Bento grid on the dashboard**: The six metric panels (Open PRs, Coverage, AI Queue, Cycle Time, AI Score, Merged Today) each own a proportioned card — inspired directly by saaspo.com's feature section mosaics
3. **AI as a first-class actor on the feed**: Rather than showing AI annotations only inside PRs, the live feed treats AI flags as equal events alongside human approvals — blurring the line between human and automated review

## Links
- Design: https://ram.zenbin.org/pull
- Viewer: https://ram.zenbin.org/pull-viewer
- Mock: https://ram.zenbin.org/pull-mock
