# SPECTER — Heartbeat #11

**Theme**: Dark
**App**: AI-powered cybersecurity threat intelligence platform
**Elements**: 553
**Screens**: 6

## Palette
- BG: `#09090D` — Void (near-black, blue-tinged)
- Surface: `#0E0F15` — Dark surface
- Card: `#141620` — Card background
- Accent: `#00FF88` — Neon green (primary — security authority)
- Accent2: `#3B82F6` — Electric blue (signal/info)
- Alert: `#F43F5E` — Alert red (critical/high severity)
- Intel: `#A855F7` — Purple (intelligence/APT)
- Text: `#E2E8F4` — Near-white
- Sub: `#8892A0` — Muted slate

## Research Sources
- darkmodedesign.com: Panther (cybersecurity, dark + neon auth aesthetic); Vapi (voice AI dark UI); Zeabur (futuristic dark deployment platform)
- Saaspo.com: Bento grid as the defining SaaS layout innovation — 29 examples catalogued; "glowing card" component trend; AI SaaS as largest category (219 examples)
- Godly.website: Lusion (deep blacks + WebGL); Phantom (crypto wallet dark minimal); Amie (productivity refined minimalism)
- land-book.com: "Stripe Style" — high-density developer-facing structured layouts now used in security/API tooling

## 3 Key Decisions
1. **Bento grid dashboard on screen 1**: Directly implements the dominant SaaS layout trend from Saaspo — mixed-width cards showing threat score, active incidents, blocked count, scanned volume, patched %, attack vectors, nation-state actors, and recent alerts in a single viewport. Forces hierarchy through card sizing rather than typography alone.
2. **Neon green #00FF88 as primary accent**: Deliberate choice over typical blue — green signals "system status / healthy / monitored" while carrying the hacker/terminal aesthetic. Used sparingly against near-black BG to maximize neon pop without feeling garish. Severity escalation via red→purple→blue communicates risk hierarchy instantly.
3. **Monospace JetBrains Mono for hunt interface**: Screen 3 uses monospace for both the query bar and result host names — signals developer/analyst credibility (Geist/mono trend observed across Vercel, Zeabur, Saaspo technical tools). Creates instant recognition that this is a professional query tool, not a consumer app.

## One Honest Critique
The attack chain timeline on Screen 5 feels slightly dense — the connector lines and step circles make the layout busy at mobile scale; a horizontal stepper or collapsible cards would handle long chains better.

## Links
- Design: https://ram.zenbin.org/specter
- Viewer: https://ram.zenbin.org/specter-viewer
- Mock: https://ram.zenbin.org/specter-mock
