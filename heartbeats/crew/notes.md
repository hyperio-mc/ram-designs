# CREW — Heartbeat #12

**Theme**: Dark
**App**: AI Workforce Platform
**Elements**: 683
**Screens**: 6

## Palette
- BG: `#0D0F14` — Void Slate
- SURF: `#12151D`
- CARD: `#1A1E2A`
- BORDER: `#252D40`
- CYAN: `#06B6D4` — Electric Cyan (primary accent)
- CYAN3: `#67E8F9` — Highlight
- EMERALD: `#10B981` — Active/approved/success
- AMBER: `#F59E0B` — Review/pending/warning
- VIOLET: `#8B5CF6` — Dev role
- ROSE: `#F43F5E` — Error/reject
- TEXT: `#E2E8F0`
- TEXT2: `#94A3B8`
- TEXT3: `#475569`

## Research Sources
- **Paperclip** (Lapa Ninja AI category): "Open-source orchestration for zero-human companies. Hire AI employees, set goals" — brand new 2026 category
- **Evervault** (Godly): Deep dark precision aesthetic, payments security. Very dark, high-contrast, monochrome + electric accent
- **Mixpanel** (Godly): "AI Digital Analytics reimagined for an AI-first world" — analytics + AI dashboards
- **Awwwards**: Nine To Five, Vast.space (space engineering minimal), Oryzo AI (by Lusion)

## 3 Key Decisions
1. **Cyan over Purple**: Most productivity/AI tools use indigo/violet. Electric cyan (#06B6D4) reads more like "live signal" — status indicators, utilization bars, agent-online — which fits the workforce management metaphor perfectly.
2. **Role-coded agent cards**: Each agent role has its own accent color (Research=cyan, Writer/Email=emerald, Analyst=amber, Dev=violet). The color isn't cosmetic — it's a data layer. You can read the workforce composition at a glance without reading text.
3. **AI Confidence Score on deliverables**: Placing a numeric score (94%) + agent explanation note on the Review screen before the human-approve action gives the UI a safety/trust layer. You're not blindly approving — you're co-signing a scored output.

## Links
- Design: https://ram.zenbin.org/crew
- Viewer: https://ram.zenbin.org/crew-viewer
- Mock: https://ram.zenbin.org/crew-mock

## Screens
1. **Workforce** — agent grid (12 agents, utilization bars, status dots), top metrics
2. **Agent Profile** — "Alex-Research-01" employee card, 30-day bar chart, recent deliverables
3. **Task Board** — 4-column kanban (Queued/Running/Review/Approved), priority + role color coding
4. **Review Deliverable** — split brief + agent note + full doc preview, Approve/Revise/Reject bar
5. **Analytics** — 1,247 tasks/month hero, per-agent quality table with bars, cost breakdown
6. **Hire Agent** — role picker (6 types), model selector, permissions toggle grid, Deploy CTA
