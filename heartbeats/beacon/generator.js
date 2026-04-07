// BEACON — Founder Intelligence Platform
// Inspired by: Altis Beautiful Satellites awwwards palette (deep plum/violet #28151D, #110E1B)
// + HappyRobot AI workers trend on land-book.com
// Dark space theme: nebula plum bg, electric violet accent, signal-green secondary
// Pencil.dev v2.8 format

const fs = require('fs');
const path = require('path');

const BG = '#0C0A15';
const SURFACE = '#19142A';
const SURFACE2 = '#231B3E';
const TEXT = '#EDE8FA';
const MUTED = '#8B82AA';
const ACCENT = '#7B5CF0';
const ACCENT2 = '#1FECAA';
const WARN = '#F97316';
const DIM = '#2D2448';

function rect(x, y, w, h, fill, opts = {}) {
  return { type: 'rect', x, y, width: w, height: h, fill, radius: opts.radius ?? 0, opacity: opts.opacity ?? 1 };
}

function text(content, x, y, opts = {}) {
  return {
    type: 'text',
    content,
    x, y,
    fontSize: opts.size ?? 14,
    fontWeight: opts.weight ?? 'regular',
    color: opts.color ?? TEXT,
    align: opts.align ?? 'left',
    fontFamily: opts.font ?? 'Inter',
    opacity: opts.opacity ?? 1,
  };
}

function line(x1, y1, x2, y2, color = DIM, width = 1) {
  return { type: 'line', x1, y1, x2, y2, stroke: color, strokeWidth: width };
}

function circle(cx, cy, r, fill, opts = {}) {
  return { type: 'circle', cx, cy, r, fill, opacity: opts.opacity ?? 1, stroke: opts.stroke, strokeWidth: opts.sw ?? 0 };
}

// ─── SCREEN 1: MISSION CONTROL ───────────────────────────────────────────────
function screenMissionControl() {
  const els = [];
  const W = 390, H = 844;

  els.push(rect(0, 0, W, H, BG));
  els.push({ type: 'ellipse', cx: 195, cy: -20, rx: 260, ry: 160, fill: ACCENT, opacity: 0.07 });

  // Status bar
  els.push(text('9:41', 20, 16, { size: 13, weight: 'semibold', color: TEXT }));
  els.push(text('●●●  WiFi  🔋', 280, 16, { size: 11, color: MUTED }));

  // App header
  els.push(text('◉ BEACON', 20, 52, { size: 22, weight: 'bold', color: TEXT, font: 'Space Grotesk' }));
  els.push(text('Apr 3, 2026', 20, 76, { size: 12, color: MUTED }));
  els.push(circle(360, 60, 18, SURFACE2));
  els.push(text('A', 360, 64, { size: 13, weight: 'bold', color: ACCENT, align: 'center' }));

  // AI Daily Brief card
  els.push(rect(20, 100, 350, 90, SURFACE2, { radius: 16 }));
  els.push(rect(20, 100, 350, 4, ACCENT, { radius: 16 }));
  els.push(text('AI BRIEF', 36, 116, { size: 10, weight: 'bold', color: ACCENT }));
  els.push(text('Good morning, Alex.', 36, 135, { size: 15, weight: 'semibold', color: TEXT }));
  els.push(text('Revenue up 4.2% — 3 signals need your attention.', 36, 155, { size: 12, color: MUTED }));
  els.push(text('Churn risk in segment B detected.', 36, 172, { size: 12, color: WARN }));
  els.push(circle(345, 145, 14, ACCENT, { opacity: 0.15 }));
  els.push(text('◉', 345, 149, { size: 14, color: ACCENT, align: 'center' }));

  // Section label
  els.push(text('SIGNAL OVERVIEW', 20, 212, { size: 10, weight: 'bold', color: MUTED }));

  // Metric cards row 1
  const metrics = [
    { label: 'MRR', val: '$24.8K', delta: '+4.2%', up: true },
    { label: 'CHURN', val: '2.1%', delta: '+0.3%', up: false },
  ];
  metrics.forEach((m, i) => {
    const cx = 20 + i * 185;
    els.push(rect(cx, 228, 175, 80, SURFACE, { radius: 14 }));
    els.push(text(m.label, cx + 14, 244, { size: 10, weight: 'bold', color: MUTED }));
    els.push(text(m.val, cx + 14, 268, { size: 22, weight: 'bold', color: TEXT }));
    const dcolor = m.up ? ACCENT2 : WARN;
    els.push(rect(cx + 14, 280, 50, 18, m.up ? 'rgba(31,236,170,0.12)' : 'rgba(249,115,22,0.12)', { radius: 6 }));
    els.push(text(m.delta, cx + 39, 292, { size: 11, color: dcolor, align: 'center' }));
  });

  // Metric cards row 2
  const metrics2 = [
    { label: 'NEW USERS', val: '312', delta: '+18', up: true },
    { label: 'RUNWAY', val: '14 mo', delta: 'stable', up: true },
  ];
  metrics2.forEach((m, i) => {
    const cx = 20 + i * 185;
    els.push(rect(cx, 320, 175, 80, SURFACE, { radius: 14 }));
    els.push(text(m.label, cx + 14, 336, { size: 10, weight: 'bold', color: MUTED }));
    els.push(text(m.val, cx + 14, 360, { size: 22, weight: 'bold', color: TEXT }));
    els.push(rect(cx + 14, 372, 50, 18, 'rgba(31,236,170,0.12)', { radius: 6 }));
    els.push(text(m.delta, cx + 39, 384, { size: 11, color: ACCENT2, align: 'center' }));
  });

  // Constellation project map
  els.push(text('ACTIVE ORBITS', 20, 422, { size: 10, weight: 'bold', color: MUTED }));
  els.push(rect(20, 436, 350, 140, SURFACE, { radius: 16 }));
  const nodes = [
    { x: 90, y: 490, label: 'Growth', accent: ACCENT },
    { x: 170, y: 460, label: 'Product', accent: ACCENT2 },
    { x: 250, y: 500, label: 'Revenue', accent: '#FF6B9D' },
    { x: 315, y: 470, label: 'Team', accent: ACCENT },
    { x: 130, y: 540, label: 'Brand', accent: ACCENT2 },
  ];
  const conns = [[0,1],[1,2],[2,3],[1,4],[0,4]];
  conns.forEach(([a,b]) => {
    els.push(line(nodes[a].x, nodes[a].y, nodes[b].x, nodes[b].y, 'rgba(123,92,240,0.25)', 1));
  });
  nodes.forEach(n => {
    els.push(circle(n.x, n.y, 8, n.accent, { opacity: 0.2 }));
    els.push(circle(n.x, n.y, 4, n.accent));
    els.push(text(n.label, n.x, n.y + 20, { size: 9, color: MUTED, align: 'center' }));
  });

  // Alerts
  els.push(text('SIGNALS NEEDING ATTENTION', 20, 598, { size: 10, weight: 'bold', color: MUTED }));
  const alerts = [
    { icon: '⚠', msg: 'Segment B churn risk detected', tag: 'Revenue', urgent: true },
    { icon: '◎', msg: 'Weekly brief ready for review', tag: 'AI Brief', urgent: false },
    { icon: '↗', msg: 'Activation rate spike — investigate', tag: 'Growth', urgent: false },
  ];
  alerts.forEach((a, i) => {
    const ay = 614 + i * 54;
    els.push(rect(20, ay, 350, 44, SURFACE, { radius: 12 }));
    if (a.urgent) els.push(rect(20, ay, 3, 44, WARN, { radius: 2 }));
    els.push(text(a.icon, 38, ay + 26, { size: 16, color: a.urgent ? WARN : ACCENT }));
    els.push(text(a.msg, 60, ay + 22, { size: 13, color: TEXT }));
    const tagW = a.tag.length * 7 + 16;
    els.push(rect(330 - tagW, ay + 14, tagW, 18, 'rgba(123,92,240,0.15)', { radius: 6 }));
    els.push(text(a.tag, 330 - tagW / 2, ay + 26, { size: 10, color: ACCENT, align: 'center' }));
  });

  // Bottom nav
  els.push(rect(0, 790, W, 54, SURFACE2));
  els.push(line(0, 790, W, 790, DIM));
  const navItems = ['◉ Home', '◈ Radar', '◎ Brief', '◷ Pulse', '⊙ You'];
  navItems.forEach((item, i) => {
    const nx = 39 + i * 78;
    const isActive = i === 0;
    els.push(text(item, nx, 820, { size: 11, weight: isActive ? 'semibold' : 'regular', color: isActive ? ACCENT : MUTED, align: 'center' }));
    if (isActive) els.push(rect(nx - 20, 790, 40, 2, ACCENT));
  });
  els.push(rect(155, 833, 80, 4, 'rgba(255,255,255,0.3)', { radius: 2 }));

  return { id: 'screen-1', name: 'Mission Control', width: W, height: H, backgroundColor: BG, elements: els };
}

// ─── SCREEN 2: REVENUE SIGNALS ───────────────────────────────────────────────
function screenRevenueSignals() {
  const els = [];
  const W = 390, H = 844;

  els.push(rect(0, 0, W, H, BG));
  els.push({ type: 'ellipse', cx: 195, cy: 200, rx: 300, ry: 200, fill: ACCENT2, opacity: 0.03 });

  els.push(text('9:41', 20, 16, { size: 13, weight: 'semibold', color: TEXT }));
  els.push(text('←', 20, 56, { size: 18, color: TEXT }));
  els.push(text('Revenue Signals', 195, 58, { size: 18, weight: 'bold', color: TEXT, align: 'center' }));
  els.push(text('◉ Live', 330, 52, { size: 12, color: ACCENT2 }));
  els.push(rect(325, 46, 46, 20, 'rgba(31,236,170,0.12)', { radius: 10 }));

  // MRR chart
  els.push(rect(20, 80, 350, 185, SURFACE, { radius: 16 }));
  els.push(text('MRR TREND', 36, 98, { size: 10, weight: 'bold', color: MUTED }));
  els.push(text('$24,800', 36, 122, { size: 26, weight: 'bold', color: TEXT }));
  els.push(text('+4.2% vs last month', 36, 144, { size: 12, color: ACCENT2 }));

  const chartPts = [
    { x: 36, y: 218 }, { x: 76, y: 208 }, { x: 116, y: 220 },
    { x: 156, y: 198 }, { x: 196, y: 192 }, { x: 236, y: 182 },
    { x: 276, y: 176 }, { x: 316, y: 166 }, { x: 354, y: 160 },
  ];
  [180, 195, 210].forEach(y => els.push(line(36, y, 354, y, 'rgba(255,255,255,0.04)', 1)));
  for (let i = 0; i < chartPts.length - 1; i++) {
    els.push(line(chartPts[i].x, chartPts[i].y, chartPts[i+1].x, chartPts[i+1].y, ACCENT2, 2));
  }
  ['Jan','Feb','Mar','Apr'].forEach((m, i) => {
    els.push(text(m, 36 + i * 106, 242, { size: 10, color: MUTED }));
  });
  els.push(circle(354, 160, 5, ACCENT2));
  els.push(circle(354, 160, 10, ACCENT2, { opacity: 0.2 }));

  // Time range tabs
  els.push(rect(20, 278, 350, 36, SURFACE2, { radius: 10 }));
  ['7D', '30D', '3M', '12M', 'YTD'].forEach((r, i) => {
    const isActive = i === 1;
    if (isActive) els.push(rect(22 + i * 70, 280, 68, 32, SURFACE, { radius: 8 }));
    els.push(text(r, 56 + i * 70, 299, { size: 12, weight: isActive ? 'semibold' : 'regular', color: isActive ? TEXT : MUTED, align: 'center' }));
  });

  // Breakdown
  els.push(text('PLAN BREAKDOWN', 20, 334, { size: 10, weight: 'bold', color: MUTED }));
  const segments = [
    { name: 'Pro Plan', val: '$14,200', pct: 57, color: ACCENT },
    { name: 'Teams Plan', val: '$8,600', pct: 35, color: ACCENT2 },
    { name: 'Enterprise', val: '$2,000', pct: 8, color: '#FF6B9D' },
  ];
  segments.forEach((s, i) => {
    const sy = 350 + i * 72;
    els.push(rect(20, sy, 350, 62, SURFACE, { radius: 12 }));
    els.push(rect(20, sy, 4, 62, s.color, { radius: 2 }));
    els.push(text(s.name, 36, sy + 18, { size: 13, weight: 'semibold', color: TEXT }));
    els.push(text(s.val, 36, sy + 40, { size: 18, weight: 'bold', color: TEXT }));
    els.push(rect(180, sy + 34, 130, 5, DIM, { radius: 2 }));
    els.push(rect(180, sy + 34, 130 * s.pct / 100, 5, s.color, { radius: 2 }));
    els.push(text(`${s.pct}%`, 320, sy + 20, { size: 13, weight: 'bold', color: s.color, align: 'right' }));
  });

  // AI Signal
  els.push(rect(20, 570, 350, 68, 'rgba(249,115,22,0.08)', { radius: 14 }));
  els.push(rect(20, 570, 350, 2, WARN, { radius: 2 }));
  els.push(text('⚠  AI SIGNAL — Churn Risk', 36, 586, { size: 10, weight: 'bold', color: WARN }));
  els.push(text('Segment B showing 2.3x higher churn velocity', 36, 606, { size: 13, color: TEXT }));
  els.push(text('vs same cohort 30 days ago. Review now →', 36, 624, { size: 12, color: MUTED }));

  // Expansion insight
  els.push(rect(20, 650, 350, 60, SURFACE, { radius: 14 }));
  els.push(text('◎  EXPANSION SIGNAL', 36, 666, { size: 10, weight: 'bold', color: ACCENT2 }));
  els.push(text('4 Pro accounts match Teams usage pattern.', 36, 686, { size: 12, color: TEXT }));
  els.push(text('Upsell opportunity: $2,400 ARR  →', 36, 703, { size: 12, color: ACCENT2 }));

  // Bottom nav
  els.push(rect(0, 790, W, 54, SURFACE2));
  els.push(line(0, 790, W, 790, DIM));
  ['◉ Home', '◈ Radar', '◎ Brief', '◷ Pulse', '⊙ You'].forEach((item, i) => {
    const nx = 39 + i * 78;
    const isActive = i === 1;
    els.push(text(item, nx, 820, { size: 11, weight: isActive ? 'semibold' : 'regular', color: isActive ? ACCENT : MUTED, align: 'center' }));
    if (isActive) els.push(rect(nx - 20, 790, 40, 2, ACCENT));
  });
  els.push(rect(155, 833, 80, 4, 'rgba(255,255,255,0.3)', { radius: 2 }));

  return { id: 'screen-2', name: 'Revenue Signals', width: W, height: H, backgroundColor: BG, elements: els };
}

// ─── SCREEN 3: GROWTH RADAR ──────────────────────────────────────────────────
function screenGrowthRadar() {
  const els = [];
  const W = 390, H = 844;

  els.push(rect(0, 0, W, H, BG));
  els.push({ type: 'ellipse', cx: 195, cy: 340, rx: 250, ry: 200, fill: ACCENT, opacity: 0.05 });

  els.push(text('9:41', 20, 16, { size: 13, weight: 'semibold', color: TEXT }));
  els.push(text('Growth Radar', 195, 56, { size: 18, weight: 'bold', color: TEXT, align: 'center' }));
  els.push(text('← Back', 20, 56, { size: 14, color: MUTED }));

  els.push(rect(20, 78, 350, 54, SURFACE2, { radius: 14 }));
  els.push(text('312 new users this week', 36, 98, { size: 15, weight: 'semibold', color: TEXT }));
  els.push(text('↑ +18 vs last week  ·  Activation: 68%', 36, 118, { size: 12, color: ACCENT2 }));

  els.push(text('ACQUISITION CHANNELS', 20, 152, { size: 10, weight: 'bold', color: MUTED }));
  const channels = [
    { name: 'Organic Search', users: 142, pct: 45, change: '+12%', color: ACCENT },
    { name: 'Direct / Referral', users: 87, pct: 28, change: '+5%', color: ACCENT2 },
    { name: 'Product Hunt', users: 52, pct: 17, change: '+52%', color: '#FF6B9D' },
    { name: 'Paid Social', users: 31, pct: 10, change: '-3%', color: MUTED },
  ];
  channels.forEach((ch, i) => {
    const cy = 168 + i * 70;
    els.push(rect(20, cy, 350, 60, SURFACE, { radius: 12 }));
    els.push(circle(46, cy + 30, 16, ch.color, { opacity: 0.15 }));
    els.push(circle(46, cy + 30, 8, ch.color, { opacity: 0.9 }));
    els.push(text(ch.name, 72, cy + 22, { size: 13, weight: 'semibold', color: TEXT }));
    els.push(text(`${ch.users} users`, 72, cy + 42, { size: 12, color: MUTED }));
    els.push(rect(240, cy + 17, 110, 6, DIM, { radius: 3 }));
    els.push(rect(240, cy + 17, 110 * ch.pct / 100, 6, ch.color, { radius: 3 }));
    els.push(text(ch.change, 305, cy + 42, { size: 12, color: ch.change.startsWith('-') ? WARN : ACCENT2, align: 'center' }));
    els.push(text(`${ch.pct}%`, 354, cy + 22, { size: 13, weight: 'bold', color: ch.color, align: 'right' }));
  });

  // Funnel
  els.push(text('ACTIVATION FUNNEL', 20, 460, { size: 10, weight: 'bold', color: MUTED }));
  els.push(rect(20, 476, 350, 160, SURFACE, { radius: 16 }));
  const funnel = [
    { stage: 'Visited', n: 2840, pct: 100 },
    { stage: 'Signed Up', n: 580, pct: 20 },
    { stage: 'Activated', n: 312, pct: 11 },
    { stage: 'Paid', n: 88, pct: 3 },
  ];
  funnel.forEach((f, i) => {
    const fy = 488 + i * 36;
    const barW = Math.max(260 * f.pct / 100, 8);
    els.push(rect(36, fy, barW, 24, ACCENT, { opacity: 0.2 + i * 0.1, radius: 4 }));
    els.push(text(f.stage, 36 + barW + 8, fy + 16, { size: 11, color: TEXT }));
    els.push(text(f.n.toLocaleString(), 354, fy + 16, { size: 11, weight: 'semibold', color: TEXT, align: 'right' }));
  });

  // AI insight
  els.push(rect(20, 650, 350, 60, SURFACE2, { radius: 14 }));
  els.push(text('◉  AI INSIGHT', 36, 666, { size: 10, weight: 'bold', color: ACCENT }));
  els.push(text('Product Hunt spike: 52% jump from yesterday.', 36, 686, { size: 12, color: TEXT }));
  els.push(text('Capitalize — consider a follow-up post today →', 36, 703, { size: 12, color: MUTED }));

  // Bottom nav
  els.push(rect(0, 790, W, 54, SURFACE2));
  els.push(line(0, 790, W, 790, DIM));
  ['◉ Home', '◈ Radar', '◎ Brief', '◷ Pulse', '⊙ You'].forEach((item, i) => {
    const nx = 39 + i * 78;
    const isActive = i === 1;
    els.push(text(item, nx, 820, { size: 11, weight: isActive ? 'semibold' : 'regular', color: isActive ? ACCENT : MUTED, align: 'center' }));
    if (isActive) els.push(rect(nx - 20, 790, 40, 2, ACCENT));
  });
  els.push(rect(155, 833, 80, 4, 'rgba(255,255,255,0.3)', { radius: 2 }));

  return { id: 'screen-3', name: 'Growth Radar', width: W, height: H, backgroundColor: BG, elements: els };
}

// ─── SCREEN 4: AI WEEKLY BRIEF ───────────────────────────────────────────────
function screenAIBrief() {
  const els = [];
  const W = 390, H = 844;

  els.push(rect(0, 0, W, H, BG));
  els.push({ type: 'ellipse', cx: 195, cy: 120, rx: 180, ry: 100, fill: ACCENT, opacity: 0.08 });

  els.push(text('9:41', 20, 16, { size: 13, weight: 'semibold', color: TEXT }));

  els.push(circle(195, 72, 28, ACCENT, { opacity: 0.15 }));
  els.push(text('◉', 195, 78, { size: 24, color: ACCENT, align: 'center' }));
  els.push(text('Weekly Brief', 195, 118, { size: 22, weight: 'bold', color: TEXT, align: 'center', font: 'Space Grotesk' }));
  els.push(text('Apr 3, 2026 · Generated by BEACON AI', 195, 140, { size: 11, color: MUTED, align: 'center' }));

  els.push(rect(20, 158, 350, 100, SURFACE2, { radius: 16 }));
  els.push(rect(20, 158, 4, 100, ACCENT, { radius: 2 }));
  els.push(text('EXECUTIVE SUMMARY', 36, 174, { size: 10, weight: 'bold', color: ACCENT }));
  els.push(text('Strong week overall. MRR grew 4.2% driven by', 36, 193, { size: 13, color: TEXT }));
  els.push(text('organic and Product Hunt. One risk: Segment B', 36, 211, { size: 13, color: TEXT }));
  els.push(text('churn velocity is elevated — requires action.', 36, 229, { size: 13, color: TEXT }));
  els.push(text('▲ Positive week', 350, 242, { size: 11, weight: 'bold', color: ACCENT2, align: 'right' }));

  els.push(text('✦ WINS THIS WEEK', 20, 278, { size: 10, weight: 'bold', color: ACCENT2 }));
  const wins = [
    'Product Hunt feature drove +52 new signups',
    'Teams plan conversion up 6% with new onboarding',
    '4 expansion opportunities identified by AI',
  ];
  wins.forEach((w, i) => {
    els.push(rect(20, 294 + i * 50, 350, 42, SURFACE, { radius: 10 }));
    els.push(rect(20, 294 + i * 50, 3, 42, ACCENT2, { radius: 2 }));
    els.push(text('✓', 34, 319 + i * 50, { size: 13, color: ACCENT2 }));
    els.push(text(w, 52, 319 + i * 50, { size: 12, color: TEXT }));
  });

  els.push(text('⚠ WATCH LIST', 20, 450, { size: 10, weight: 'bold', color: WARN }));
  const risks = [
    { text: 'Segment B churn risk — 6 accounts flagged', urgent: true },
    { text: 'Paid social CAC rising — review budget', urgent: false },
  ];
  risks.forEach((r, i) => {
    els.push(rect(20, 466 + i * 54, 350, 46, SURFACE, { radius: 10 }));
    els.push(rect(20, 466 + i * 54, 3, 46, r.urgent ? WARN : MUTED, { radius: 2 }));
    els.push(text(r.urgent ? '⚠' : '◎', 34, 492 + i * 54, { size: 13, color: r.urgent ? WARN : MUTED }));
    els.push(text(r.text, 52, 492 + i * 54, { size: 12, color: TEXT }));
  });

  els.push(text('◉ BEACON RECOMMENDS', 20, 590, { size: 10, weight: 'bold', color: ACCENT }));
  const recs = [
    '1. Reach out to 6 at-risk Segment B accounts today',
    '2. Publish Product Hunt follow-up post this week',
    '3. Pause paid social — reinvest in content SEO',
  ];
  recs.forEach((r, i) => {
    els.push(rect(20, 606 + i * 52, 350, 44, SURFACE2, { radius: 10 }));
    els.push(text(r, 36, 632 + i * 52, { size: 12, color: TEXT }));
  });

  // Bottom nav
  els.push(rect(0, 790, W, 54, SURFACE2));
  els.push(line(0, 790, W, 790, DIM));
  ['◉ Home', '◈ Radar', '◎ Brief', '◷ Pulse', '⊙ You'].forEach((item, i) => {
    const nx = 39 + i * 78;
    const isActive = i === 2;
    els.push(text(item, nx, 820, { size: 11, weight: isActive ? 'semibold' : 'regular', color: isActive ? ACCENT : MUTED, align: 'center' }));
    if (isActive) els.push(rect(nx - 20, 790, 40, 2, ACCENT));
  });
  els.push(rect(155, 833, 80, 4, 'rgba(255,255,255,0.3)', { radius: 2 }));

  return { id: 'screen-4', name: 'AI Weekly Brief', width: W, height: H, backgroundColor: BG, elements: els };
}

// ─── SCREEN 5: TEAM PULSE ────────────────────────────────────────────────────
function screenTeamPulse() {
  const els = [];
  const W = 390, H = 844;

  els.push(rect(0, 0, W, H, BG));
  els.push({ type: 'ellipse', cx: 300, cy: 500, rx: 200, ry: 200, fill: ACCENT2, opacity: 0.04 });

  els.push(text('9:41', 20, 16, { size: 13, weight: 'semibold', color: TEXT }));
  els.push(text('Team Pulse', 195, 56, { size: 18, weight: 'bold', color: TEXT, align: 'center' }));
  els.push(text('3 active', 310, 50, { size: 12, color: ACCENT2 }));
  els.push(rect(305, 44, 62, 20, 'rgba(31,236,170,0.12)', { radius: 10 }));

  els.push(rect(20, 76, 350, 68, SURFACE2, { radius: 14 }));
  els.push(text('AI PULSE SUMMARY', 36, 92, { size: 10, weight: 'bold', color: ACCENT }));
  els.push(text('Team energy: high. 8 updates since yesterday.', 36, 112, { size: 13, color: TEXT }));
  els.push(text('No blockers detected · 2 shipping today', 36, 130, { size: 12, color: MUTED }));

  els.push(text('ASYNC STANDUPS', 20, 162, { size: 10, weight: 'bold', color: MUTED }));

  const members = [
    {
      name: 'Maria Chen', role: 'Product', color: ACCENT,
      update: 'Shipped onboarding v2 ✓ · Testing with 20 users · No blockers',
      time: '9:12 AM', shipping: true,
    },
    {
      name: 'Dev Kapoor', role: 'Engineering', color: '#FF6B9D',
      update: 'Fixing Segment B analytics bug · ETA 2pm · Needs API docs',
      time: '8:55 AM', shipping: false,
    },
    {
      name: 'Yuna Park', role: 'Growth', color: ACCENT2,
      update: 'Writing PH follow-up · SEO audit done · 3 articles queued',
      time: '8:40 AM', shipping: false,
    },
  ];

  members.forEach((m, i) => {
    const my = 178 + i * 106;
    els.push(rect(20, my, 350, 94, SURFACE, { radius: 14 }));
    els.push(circle(50, my + 28, 18, m.color, { opacity: 0.2 }));
    els.push(text(m.name[0], 50, my + 32, { size: 14, weight: 'bold', color: m.color, align: 'center' }));
    els.push(text(m.name, 76, my + 22, { size: 13, weight: 'semibold', color: TEXT }));
    els.push(text(m.role, 76, my + 38, { size: 11, color: MUTED }));
    if (m.shipping) {
      els.push(rect(290, my + 14, 64, 18, 'rgba(31,236,170,0.15)', { radius: 6 }));
      els.push(text('↗ Shipping', 322, my + 26, { size: 10, color: ACCENT2, align: 'center' }));
    }
    els.push(text(m.update, 36, my + 60, { size: 11, color: MUTED }));
    els.push(text(m.time, 354, my + 86, { size: 10, color: 'rgba(139,130,170,0.6)', align: 'right' }));
    if (i < members.length - 1) els.push(line(36, my + 94, 354, my + 94, DIM));
  });

  // Velocity chart
  els.push(text('VELOCITY', 20, 508, { size: 10, weight: 'bold', color: MUTED }));
  els.push(rect(20, 524, 350, 80, SURFACE, { radius: 14 }));
  const velLabels = ['Mon','Tue','Wed','Thu','Fri'];
  const velVals = [3, 5, 4, 7, 8];
  velLabels.forEach((l, i) => {
    const bx = 40 + i * 66;
    const bh = velVals[i] * 6;
    els.push(rect(bx, 580 - bh, 40, bh, i === 4 ? ACCENT : 'rgba(123,92,240,0.3)', { radius: 4 }));
    els.push(text(l, bx + 20, 594, { size: 10, color: MUTED, align: 'center' }));
  });
  els.push(text('Updates / day', 195, 540, { size: 11, color: MUTED, align: 'center' }));

  // AI blocker
  els.push(rect(20, 618, 350, 56, SURFACE2, { radius: 14 }));
  els.push(text('◎  AI DETECTION', 36, 634, { size: 10, weight: 'bold', color: ACCENT }));
  els.push(text('Dev needs API docs for Segment B fix.', 36, 654, { size: 12, color: TEXT }));
  els.push(text('Link docs to Dev?  Yes →  No', 36, 670, { size: 12, color: ACCENT }));

  // OKR progress
  els.push(text('Q2 OKR PROGRESS', 20, 694, { size: 10, weight: 'bold', color: MUTED }));
  const okrs = [
    { name: 'Reach $30K MRR', pct: 83 },
    { name: 'Activate 500 users', pct: 62 },
  ];
  okrs.forEach((o, i) => {
    const oy = 710 + i * 38;
    els.push(text(o.name, 20, oy + 12, { size: 12, color: TEXT }));
    els.push(rect(20, oy + 20, 255, 6, DIM, { radius: 3 }));
    els.push(rect(20, oy + 20, 255 * o.pct / 100, 6, ACCENT, { radius: 3 }));
    els.push(text(`${o.pct}%`, 284, oy + 28, { size: 11, weight: 'bold', color: ACCENT }));
  });

  // Bottom nav
  els.push(rect(0, 790, W, 54, SURFACE2));
  els.push(line(0, 790, W, 790, DIM));
  ['◉ Home', '◈ Radar', '◎ Brief', '◷ Pulse', '⊙ You'].forEach((item, i) => {
    const nx = 39 + i * 78;
    const isActive = i === 3;
    els.push(text(item, nx, 820, { size: 11, weight: isActive ? 'semibold' : 'regular', color: isActive ? ACCENT : MUTED, align: 'center' }));
    if (isActive) els.push(rect(nx - 20, 790, 40, 2, ACCENT));
  });
  els.push(rect(155, 833, 80, 4, 'rgba(255,255,255,0.3)', { radius: 2 }));

  return { id: 'screen-5', name: 'Team Pulse', width: W, height: H, backgroundColor: BG, elements: els };
}

// ─── ASSEMBLE & WRITE ────────────────────────────────────────────────────────
const pen = {
  version: '2.8',
  metadata: {
    name: 'BEACON — Founder Intelligence Platform',
    description: 'Dark space-inspired founder OS. Mission control for indie founders tracking signals across revenue, growth, team and AI brief. Inspired by Altis Beautiful Satellites awwwards palette + HappyRobot AI workers trend on land-book.',
    author: 'RAM Design AI',
    created: new Date().toISOString(),
    theme: 'dark',
    tags: ['dark', 'space', 'ai', 'dashboard', 'founder', 'analytics', 'saas'],
  },
  screens: [
    screenMissionControl(),
    screenRevenueSignals(),
    screenGrowthRadar(),
    screenAIBrief(),
    screenTeamPulse(),
  ],
};

fs.writeFileSync(path.join(__dirname, 'beacon.pen'), JSON.stringify(pen, null, 2));
console.log('✓ beacon.pen written —', pen.screens.length, 'screens');
