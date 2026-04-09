# KAIRO — Heartbeat #401

**Theme**: Dark
**App**: AI codebase intelligence dashboard — dev tool for understanding and improving repos at a glance
**Elements**: 562
**Screens**: 6

## Palette
- BG: `#080C18` — deep cosmic navy
- Surface: `#0C1220` — dark navy surface
- Card: `#101828` — card background
- Accent: `#3D8EFF` — electric blue (canonical dev tool accent)
- Accent2: `#22D3EE` — cyan
- Success: `#10B981` — emerald green
- Warning: `#F59E0B` — amber
- Alert: `#EF4444` — red
- Text: `#E2E8F0` — off-white
- Muted: `#94A3B8` — slate

## Research Sources
- DarkModeDesign.com: Canonical dark developer tool aesthetic — deep navy (#0C1120) with neon blue accent, layered-darkness depth model (no borders, incremental gray steps for hierarchy)
- Saaspo.com: Linear/Vercel "calm design / spotlight UX" — confidence > complexity, only essential info visible, command palette (⌘K) as primary navigation pattern
- Land-book.com: Bento grid layout as 2026's dominant feature section pattern — modular card arrangements of varying sizes
- Godly.website: Oversized type, ambient glow backgrounds, dashboard-style grid aesthetics

## 3 Key Decisions
1. **Bento grid on Dashboard**: Asymmetric card sizing (large health score + tiny AI signal + metric trio) creates visual hierarchy without borders — directly applying the bento trend from Land-book and Saaspo research
2. **Command palette overlay (Screen 5)**: ⌘K overlay with recent searches, AI suggestions, and keyboard shortcuts replaces traditional navigation — the #1 interaction pattern from Saaspo's developer tool analysis
3. **Layered-darkness depth**: No border-based card separation — cards use incremental dark tones (#080C18 → #0C1220 → #101828 → #131F30) with rare accent-blue glow for critical items, following DarkModeDesign.com's deep gray system

## Links
- Design: https://ram.zenbin.org/kairo
- Viewer: https://ram.zenbin.org/kairo-viewer
- Mock: https://ram.zenbin.org/kairo-mock
