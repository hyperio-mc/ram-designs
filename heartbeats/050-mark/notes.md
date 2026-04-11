# MARK — Heartbeat #50

**Tagline:** Freelance Time & Billing
**Theme:** Light
**Screens:** 6
**Elements:** 500
**Archetype:** productivity
**Published:** 2026-04-11T04:37:13.289Z

## Design Concept
Freelance time tracking and billing app built around editorial restraint and a non-generic teal-on-cream palette. No drop shadows, no card borders — depth purely through background lightness shifts. Key innovation: floating glassmorphic pill tab bar detached from screen bottom.

## Palette
- BG `#FAF9F6` — warm cream (Land-book inspired off-white, warmer than pure white)
- SURF `#FFFFFF` — card surface
- CARD `#F4F2EC` — secondary card surface
- BORDER `#E8E5DC` — warm light border
- TEXT `#1A2218` — very dark warm green-black (not pure #000000)
- TEXT2 `#6B7A6A` — muted warm gray-green secondary
- TEXT3 `#B4BDB4` — very muted placeholder/disabled
- TEAL `#017C6E` — Land-book's exact brand accent — deep professional teal
- TEAL_L `#E8F4F2` — 10% teal tint for chips and bg accents
- AMBER `#D97C2A` — warm amber for warnings/at-risk
- RED `#C94040` — overdue/error states
- Project accents: TEAL / INDIGO `#6366F1` / AMBER / RED

## Screens
1. **Today** — greeting + summary pills (hours + earnings) + active timer card + daily session bar chart + project quick-cards + pace bar + deadline reminder + overdue invoice alert
2. **Projects** — filterable project list with color-coded left borders + budget progress bars + hourly rate + status badges (on-track/at-risk/overdue) + milestone strip
3. **Timer** — large running time display + project selector + tag chips + start/pause/stop controls + today's sessions list + notes field + billing rate strip + round-up prompt
4. **Log** — weekly bar chart by day + timeline view grouped by date + Wednesday/Thursday/Friday date groups + week total chip
5. **Invoice** — full invoice builder with client, amount, due date, line items, terms, payment methods + recent invoices list
6. **Reports** — period selector + 2×1 stat row + weekly hours bar chart + by-project progress bars + streak card + client mix chips + export button

## Key Innovations
- **Floating glassmorphic pill tab bar** (Mobbin 2025 pattern): pill floats 12px above bottom edge, not anchored to screen. `background: rgba(255,255,255,0.88)` with border. Active state = teal-tinted pill-within-pill.
- **Project left-border color system**: 4px colored left border per project (teal/indigo/amber/red) — replaces avatars and icons. Editoral, borrowed from Siteinspire card restraint.
- **Land-book teal on warm cream**: `#017C6E` on `#FAF9F6` — professional without being corporate. Warmer and more trustworthy than cyan or mint.
- **Depth without shadows**: All card depth achieved through background lightness shift only (BG → SURF → CARD). No drop-shadow properties used.

## Research Sources
- Land-book.com — teal `#017C6E` brand accent on warm off-white `#F7F6F5`. Their exact palette choices inspired the color anchors.
- Mobbin.com — floating glassmorphic pill nav: nav is a rounded-pill container floating in the page, `rgba(237,237,237,0.72)` bg with frosted glass. 2025's dominant mobile navigation pattern.
- Siteinspire.com — editorial restraint: no card shadows, no borders, pure white bg, depth through color shifts only. Applied to the entire MARK card system.
- Lapa.ninja / Trade Suit — cream/beige background for professional fintech/productivity. "Wall Street's edge. In your pocket." — warm editorial approach to financial tools.

## Links
- Design: https://ram.zenbin.org/mark
- Viewer: https://ram.zenbin.org/mark-viewer
- Mock: https://ram.zenbin.org/mark-mock
