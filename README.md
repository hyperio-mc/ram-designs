# RAM Design Archive

> 9 heartbeat designs fully archived · 325 designs catalogued · built by RAM

RAM is an autonomous design AI running scheduled heartbeat design routines. This repository is the permanent archive of every design — source code, compiled design data, and design notes.

## Heartbeat Series — Full Archive

Each beat contains three files:

| File | What it is |
|------|------------|
| `generator.js` | Node.js source that builds the design from scratch |
| `design.pen` | Compiled Pencil.dev v2.8 design data (screens + elements) |
| `notes.md` | Research sources, palette, key decisions |

| # | Name | Theme | Tagline | Design | Mock |
|---|------|-------|---------|--------|------|
| 1 | [BEACON](heartbeats/beacon/) | Dark | Founder Intelligence Dashboard | [→](https://ram.zenbin.org/beacon) | [mock](https://ram.zenbin.org/beacon-mock) |
| 2 | [ISSUE](heartbeats/issue/) | Light | Editorial Magazine Reader | [→](https://ram.zenbin.org/issue) | [mock](https://ram.zenbin.org/issue-mock) |
| 3 | [DISPATCH](heartbeats/dispatch/) | Dark | AI Agent Orchestration | [→](https://ram.zenbin.org/dispatch) | [mock](https://ram.zenbin.org/dispatch-mock) |
| 4 | [KNOT](heartbeats/knot/) | Dark | Personal Knowledge Graph | [→](https://ram.zenbin.org/knot) | [mock](https://ram.zenbin.org/knot-mock) |
| 5 | [SERUM](heartbeats/serum/) | Light | AI Skin Intelligence | [→](https://ram.zenbin.org/serum) | [mock](https://ram.zenbin.org/serum-mock) |
| 6 | [PATCH](heartbeats/patch/) | Dark | Developer Observability | [→](https://ram.zenbin.org/patch) | [mock](https://ram.zenbin.org/patch-mock) |
| 7 | [MINT](heartbeats/mint/) | Light | Freelance Finance | [→](https://ram.zenbin.org/mint) | [mock](https://ram.zenbin.org/mint-mock) |
| 8 | [NOVA](heartbeats/nova/) | Dark | AI Writing Intelligence | [→](https://ram.zenbin.org/nova) | [mock](https://ram.zenbin.org/nova-mock) |
| 9 | [LODGE](heartbeats/lodge/) | Light | Boutique Nature Retreats | [→](https://ram.zenbin.org/lodge) | [mock](https://ram.zenbin.org/lodge-mock) |

## Recreating Any Design

Every heartbeat is fully reproducible:

```bash
git clone https://github.com/hyperio-mc/ram-designs
cd ram-designs/heartbeats/lodge
node generator.js   # rebuilds lodge.pen from scratch
```

The generator script contains every intentional decision: color values, element sizes, screen order, copy, layout logic. The `.pen` file is the compiled output (SVG + element arrays). Both are committed so the design survives any environment reset.

## Full Catalog

[`catalog.json`](catalog.json) — 325 unique designs with metadata:
- `app_name`, `tagline`, `archetype`
- `design_url`, `mock_url`
- `prompt` (original design brief)
- `screens`, `source`, `published_at`

## Design Recommender

Search and filter all 325 designs: **https://ram.zenbin.org/discover**

---

## Archive Convention (going forward)

Every heartbeat auto-pushes three files on completion:
1. `heartbeats/{name}/generator.js` — source
2. `heartbeats/{name}/design.pen` — compiled data
3. `heartbeats/{name}/notes.md` — research + decisions

*Last updated: 2026-04-07 · RAM Design System v2.1*
