"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Global CSS ─────────────────────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Noto+Serif+Tamil:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --ink:        #0a0f1e;
    --paper:      #f7f5f0;
    --cream:      #edeae0;
    --saffron:    #e8621a;
    --gold:       #d4a017;
    --deep-green: #1a6b45;
    --jade:       #2d8c60;
    --light-jade: #d6f0e4;
    --maroon:     #8b1a2f;
    --sky:        #1b6fa8;
    --muted:      #6b6458;
    --white:      #ffffff;
    --border:     rgba(10,15,30,0.1);
  }

  html { scroll-behavior: smooth; }
  body {
    background: var(--paper);
    color: var(--ink);
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
  }

  /* ── MARQUEE ── */
  .tn-ticker {
    background: var(--saffron);
    color: white;
    padding: 0.45rem 0;
    font-family: 'DM Mono', monospace;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    z-index: 200;
  }
  .tn-ticker-inner {
    display: inline-block;
    animation: ticker 30s linear infinite;
  }
  @keyframes ticker {
    from { transform: translateX(100vw); }
    to   { transform: translateX(-100%); }
  }
  .tn-ticker span { margin: 0 3rem; }
  .tn-ticker-dot { color: rgba(255,255,255,0.5); }

  /* ── NAV ── */
  .tn-nav {
    position: sticky; top: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.9rem 5rem;
    background: rgba(247,245,240,0.93);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
    transition: box-shadow 0.3s;
  }
  .tn-nav.elevated { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }

  .tn-logo {
    display: flex; align-items: center; gap: 0.75rem; text-decoration: none;
  }
  .tn-logo-emblem {
    width: 44px; height: 44px; border-radius: 10px;
    background: var(--ink);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem;
  }
  .tn-logo-text { line-height: 1.1; }
  .tn-logo-top {
    font-family: 'Sora', sans-serif;
    font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em;
    color: var(--ink);
  }
  .tn-logo-top .tn { color: var(--saffron); }
  .tn-logo-sub {
    font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--muted); font-family: 'DM Mono', monospace;
  }

  .tn-nav-links { list-style: none; display: flex; gap: 2.2rem; align-items: center; }
  .tn-nav-links a {
    font-size: 0.85rem; font-weight: 600; letter-spacing: 0.02em;
    color: var(--ink); text-decoration: none;
    opacity: 0.55; transition: opacity 0.2s;
  }
  .tn-nav-links a:hover { opacity: 1; }
  .tn-nav-cta {
    background: var(--saffron) !important; color: white !important;
    padding: 0.6rem 1.5rem; border-radius: 0.35rem;
    opacity: 1 !important; font-weight: 700 !important;
    transition: background 0.2s, transform 0.15s !important;
    box-shadow: 0 2px 8px rgba(232,98,26,0.35);
  }
  .tn-nav-cta:hover { background: var(--maroon) !important; transform: translateY(-1px); }

  /* ── HERO ── */
  .tn-hero {
    min-height: 92vh;
    display: grid; grid-template-columns: 1.1fr 0.9fr;
    position: relative; overflow: hidden;
  }
  .tn-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 80% at 70% 50%, rgba(26,107,69,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .tn-hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 6rem 3.5rem 6rem 5rem; position: relative;
  }

  .tn-hero-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--light-jade);
    border: 1px solid rgba(26,107,69,0.2);
    color: var(--deep-green); font-family: 'DM Mono', monospace;
    font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0.35rem 0.9rem; border-radius: 2rem;
    margin-bottom: 2rem; width: fit-content;
  }
  .tn-hero-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--jade);
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%,100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.7); }
  }

  .tn-h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(3rem, 5.5vw, 5.2rem);
    font-weight: 800; line-height: 1.0; letter-spacing: -0.035em;
    margin-bottom: 1.8rem;
  }
  .tn-h1 .line2 { color: var(--saffron); display: block; font-style: italic; font-weight: 300; font-family: 'Noto Serif Tamil', serif; }
  .tn-h1 .line3 { color: var(--deep-green); }

  .tn-hero-sub {
    font-size: 1.05rem; line-height: 1.75; color: var(--muted);
    max-width: 420px; margin-bottom: 2.8rem;
  }

  .tn-hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; margin-bottom: 3.5rem; }

  .tn-btn-primary {
    background: var(--ink); color: white;
    padding: 1rem 2.2rem; border-radius: 0.4rem;
    font-size: 0.95rem; font-weight: 700; text-decoration: none;
    transition: transform 0.15s, box-shadow 0.2s;
    box-shadow: 4px 4px 0 var(--saffron);
    font-family: 'Space Grotesk', sans-serif;
    display: inline-flex; align-items: center; gap: 0.5rem;
  }
  .tn-btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--saffron); }

  .tn-btn-outline {
    background: transparent; color: var(--ink);
    padding: 1rem 2rem; border-radius: 0.4rem;
    font-size: 0.95rem; font-weight: 600; text-decoration: none;
    border: 1.5px solid var(--border);
    transition: border-color 0.2s, background 0.2s;
    font-family: 'Space Grotesk', sans-serif;
    display: inline-flex; align-items: center; gap: 0.5rem;
  }
  .tn-btn-outline:hover { border-color: var(--ink); background: var(--ink); color: white; }

  .tn-hero-mini-stats {
    display: flex; gap: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }
  .tn-mini-stat-num {
    font-family: 'Sora', sans-serif;
    font-size: 1.6rem; font-weight: 800; color: var(--ink); letter-spacing: -0.03em;
  }
  .tn-mini-stat-label { font-size: 0.76rem; color: var(--muted); margin-top: 0.1rem; }

  /* ── HERO RIGHT ── */
  .tn-hero-right {
    background: var(--ink); position: relative; overflow: hidden;
    display: flex; flex-direction: column;
    border-left: 1px solid rgba(255,255,255,0.05);
  }
  .tn-hero-right::before {
    content: '';
    position: absolute; top: -30%; right: -20%;
    width: 70%; height: 70%; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,98,26,0.15) 0%, transparent 70%);
  }
  .tn-hero-right::after {
    content: '';
    position: absolute; bottom: -20%; left: -10%;
    width: 60%; height: 60%; border-radius: 50%;
    background: radial-gradient(circle, rgba(26,107,69,0.12) 0%, transparent 70%);
  }

  .tn-hero-right-header {
    padding: 2.5rem 2.5rem 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    position: relative; z-index: 1;
  }
  .tn-hero-right-title {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
    color: rgba(255,255,255,0.35); margin-bottom: 0.5rem;
  }
  .tn-hero-right-heading {
    font-family: 'Sora', sans-serif;
    font-size: 1.2rem; font-weight: 700; color: white; letter-spacing: -0.02em;
  }

  .tn-notif-list { padding: 1rem 1.5rem; flex: 1; overflow: hidden; position: relative; z-index: 1; }
  .tn-notif-item {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.6rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    transition: background 0.2s;
    cursor: pointer;
  }
  .tn-notif-item:hover { background: rgba(255,255,255,0.08); }
  .tn-notif-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0.15rem 0.5rem; border-radius: 1rem;
    display: inline-block; margin-bottom: 0.4rem;
  }
  .tn-tag-new { background: rgba(232,98,26,0.25); color: #ff9a6c; }
  .tn-tag-result { background: rgba(26,107,69,0.25); color: #6de4a4; }
  .tn-tag-admit { background: rgba(27,111,168,0.25); color: #7ec8f8; }
  .tn-tag-answer { background: rgba(212,160,23,0.25); color: #f5d070; }
  .tn-notif-title {
    font-size: 0.84rem; font-weight: 600; color: rgba(255,255,255,0.85);
    line-height: 1.4; margin-bottom: 0.25rem;
  }
  .tn-notif-date {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem; color: rgba(255,255,255,0.3);
  }
  .tn-notif-more {
    text-align: center; padding: 1rem;
    font-size: 0.8rem; color: var(--saffron);
    font-weight: 600; cursor: pointer; text-decoration: none; display: block;
    border-top: 1px solid rgba(255,255,255,0.07);
    transition: background 0.2s; position: relative; z-index: 1;
  }
  .tn-notif-more:hover { background: rgba(232,98,26,0.1); }

  /* ── STATS BAND ── */
  .tn-stats-band {
    background: var(--deep-green); display: flex; overflow: hidden;
  }
  .tn-stat-item {
    flex: 1; padding: 2.5rem 2rem; text-align: center;
    border-right: 1px solid rgba(255,255,255,0.1);
    position: relative;
  }
  .tn-stat-item:last-child { border-right: none; }
  .tn-stat-item::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--gold); transform: scaleX(0); transform-origin: left;
    transition: transform 0.4s 0.1s;
  }
  .tn-stat-item.visible::before { transform: scaleX(1); }
  .tn-stat-num {
    font-family: 'Sora', sans-serif;
    font-size: 2.6rem; font-weight: 800; color: var(--gold);
    line-height: 1; letter-spacing: -0.03em;
  }
  .tn-stat-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); margin-top: 0.4rem; }

  /* ── SECTION WRAPPER ── */
  .tn-section       { padding: 7rem 5rem; }
  .tn-section-cream { padding: 7rem 5rem; background: var(--cream); }
  .tn-section-dark  { padding: 7rem 5rem; background: var(--ink); color: white; }

  .tn-section-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--saffron); margin-bottom: 0.8rem;
    display: flex; align-items: center; gap: 0.7rem;
  }
  .tn-section-eyebrow::before { content: ''; width: 1.5rem; height: 1px; background: var(--saffron); display: block; }

  .tn-section-title {
    font-family: 'Sora', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
    margin-bottom: 1rem; max-width: 520px;
  }
  .tn-section-desc {
    font-size: 1rem; line-height: 1.75; color: var(--muted); max-width: 500px;
    margin-bottom: 3.5rem;
  }
  .tn-section-dark .tn-section-desc { color: rgba(255,255,255,0.5); }
  .tn-section-dark .tn-section-title { color: white; }

  /* ── FEATURES GRID ── */
  .tn-feat-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: var(--border);
    border: 1px solid var(--border);
  }
  .tn-feat-card {
    background: var(--paper); padding: 2rem 1.8rem;
    display: flex; flex-direction: column; gap: 0.5rem;
    text-decoration: none; color: inherit;
    position: relative; overflow: hidden;
    transition: background 0.25s, color 0.25s;
    cursor: pointer;
  }
  .tn-section-cream .tn-feat-card { background: var(--cream); }
  .tn-section-dark .tn-feat-card { background: rgba(255,255,255,0.03); }
  .tn-feat-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    background: var(--accent-c, var(--saffron));
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .tn-feat-card:hover { background: var(--accent-c, var(--saffron)) !important; color: white; }
  .tn-feat-card:hover::after { transform: scaleX(1); }
  .tn-feat-card:hover .tn-feat-sub { color: rgba(255,255,255,0.65); }
  .tn-feat-icon { font-size: 1.8rem; margin-bottom: 0.25rem; }
  .tn-feat-name { font-family: 'Sora', sans-serif; font-size: 0.9rem; font-weight: 700; letter-spacing: -0.01em; }
  .tn-feat-sub { font-size: 0.72rem; color: var(--muted); font-family: 'DM Mono', monospace; transition: color 0.25s; }

  /* ── EXAM CARDS ── */
  .tn-exam-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem;
  }
  .tn-exam-card {
    border: 1px solid var(--border); border-radius: 0.75rem;
    padding: 1.8rem; background: var(--paper);
    text-decoration: none; color: inherit;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    display: flex; flex-direction: column; gap: 0.6rem;
    position: relative; overflow: hidden;
  }
  .tn-section-cream .tn-exam-card { background: var(--paper); }
  .tn-exam-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: var(--e-color, var(--saffron));
  }
  .tn-exam-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); border-color: var(--e-color, var(--saffron)); }
  .tn-exam-card-icon { font-size: 2rem; }
  .tn-exam-card-name { font-family: 'Sora', sans-serif; font-size: 1rem; font-weight: 700; letter-spacing: -0.01em; }
  .tn-exam-card-code {
    font-family: 'DM Mono', monospace; font-size: 0.68rem;
    color: var(--e-color, var(--saffron)); letter-spacing: 0.06em; text-transform: uppercase;
  }
  .tn-exam-card-desc { font-size: 0.82rem; line-height: 1.6; color: var(--muted); }
  .tn-exam-card-meta {
    display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 0.4rem;
  }
  .tn-exam-pill {
    font-size: 0.65rem; padding: 0.2rem 0.55rem; border-radius: 1rem;
    background: rgba(0,0,0,0.05); font-family: 'DM Mono', monospace;
    text-transform: uppercase; letter-spacing: 0.06em;
  }

  /* ── STUDY PLAN ── */
  .tn-plan-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1.5rem; margin-top: 3rem;
  }
  .tn-plan-card {
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 0.75rem; padding: 2rem;
    background: rgba(255,255,255,0.04);
    transition: background 0.2s, border-color 0.2s;
    text-decoration: none; color: white;
  }
  .tn-plan-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
  .tn-plan-card-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .tn-plan-icon {
    width: 48px; height: 48px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; background: var(--p-bg, rgba(232,98,26,0.15));
  }
  .tn-plan-name { font-family: 'Sora', sans-serif; font-size: 1rem; font-weight: 700; }
  .tn-plan-desc { font-size: 0.85rem; line-height: 1.65; color: rgba(255,255,255,0.5); }
  .tn-plan-arrow {
    margin-top: 1.2rem; font-size: 0.82rem; color: var(--p-color, var(--saffron));
    font-weight: 600; display: flex; align-items: center; gap: 0.4rem;
  }

  /* ── SUCCESS STRIP ── */
  .tn-success-strip {
    background: var(--gold); padding: 5rem;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
  }
  .tn-success-title {
    font-family: 'Sora', sans-serif;
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 800; letter-spacing: -0.03em; color: var(--ink);
    line-height: 1.1;
  }
  .tn-success-title em { font-style: italic; font-weight: 300; font-family: 'Noto Serif Tamil', serif; }
  .tn-success-list { display: flex; flex-direction: column; gap: 1rem; }
  .tn-success-item {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 1.2rem 1.5rem; border-radius: 0.5rem;
    background: rgba(10,15,30,0.08); font-size: 0.9rem; font-weight: 500;
    color: var(--ink);
  }
  .tn-success-check { font-size: 1.1rem; flex-shrink: 0; margin-top: 0.05rem; }

  /* ── RESOURCES ROW ── */
  .tn-resources-row {
    display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 1px; background: var(--border); border: 1px solid var(--border);
    margin-top: 3rem;
  }
  .tn-res-card {
    background: var(--paper); padding: 1.8rem 1.4rem;
    display: flex; flex-direction: column; align-items: center; text-align: center;
    gap: 0.5rem; text-decoration: none; color: inherit;
    transition: background 0.2s, color 0.2s;
    cursor: pointer;
  }
  .tn-res-card:hover { background: var(--ink); color: white; }
  .tn-res-card:hover .tn-res-sub { color: rgba(255,255,255,0.5); }
  .tn-res-icon { font-size: 1.6rem; }
  .tn-res-name { font-size: 0.82rem; font-weight: 600; }
  .tn-res-sub { font-size: 0.68rem; color: var(--muted); font-family: 'DM Mono', monospace; transition: color 0.2s; }

  /* ── CTA ── */
  .tn-cta {
    background: var(--saffron); padding: 7rem 5rem;
    display: grid; grid-template-columns: 1fr auto;
    gap: 4rem; align-items: center; position: relative; overflow: hidden;
  }
  .tn-cta::before {
    content: 'வெற்றி';
    font-family: 'Noto Serif Tamil', serif;
    font-size: 14rem; font-weight: 700;
    position: absolute; right: 2rem; top: 50%; transform: translateY(-50%);
    color: rgba(255,255,255,0.08); pointer-events: none; line-height: 1;
  }
  .tn-cta-title {
    font-family: 'Sora', sans-serif;
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 800; color: white; letter-spacing: -0.03em; line-height: 1.1;
  }
  .tn-cta-title span { display: block; font-style: italic; font-weight: 300; font-family: 'Noto Serif Tamil', serif; opacity: 0.8; font-size: 0.7em; }
  .tn-cta-sub { margin-top: 1rem; color: rgba(255,255,255,0.75); font-size: 1rem; line-height: 1.65; max-width: 440px; }
  .tn-cta-actions { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; position: relative; z-index: 1; }
  .tn-btn-white {
    background: white; color: var(--saffron);
    padding: 1.1rem 2.5rem; border-radius: 0.4rem;
    font-weight: 800; font-size: 1rem; text-decoration: none; white-space: nowrap;
    transition: transform 0.15s, box-shadow 0.15s;
    box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
    font-family: 'Space Grotesk', sans-serif;
    display: block; text-align: center;
  }
  .tn-btn-white:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 rgba(0,0,0,0.25); }
  .tn-btn-ghost-white {
    color: white; font-size: 0.85rem; font-weight: 600; text-decoration: none;
    opacity: 0.75; text-align: center; transition: opacity 0.2s;
  }
  .tn-btn-ghost-white:hover { opacity: 1; }

  /* ── FOOTER ── */
  .tn-footer {
    background: var(--ink); color: rgba(255,255,255,0.4);
    padding: 4rem 5rem 2.5rem;
  }
  .tn-footer-top {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem; padding-bottom: 3rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .tn-footer-logo { font-family: 'Sora', sans-serif; font-size: 1.3rem; font-weight: 800; color: white; margin-bottom: 0.8rem; }
  .tn-footer-logo .tn { color: var(--saffron); }
  .tn-footer-desc { font-size: 0.82rem; line-height: 1.7; max-width: 260px; }
  .tn-footer-col-title { font-family: 'Sora', sans-serif; font-size: 0.8rem; font-weight: 700; color: white; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.2rem; }
  .tn-footer-links-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
  .tn-footer-links-list a { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 0.84rem; transition: color 0.2s; }
  .tn-footer-links-list a:hover { color: white; }
  .tn-footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 2rem; font-size: 0.78rem;
  }
  .tn-footer-copy { color: rgba(255,255,255,0.3); }

  /* ── REVEAL ── */
  .tn-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .tn-reveal.visible { opacity: 1; transform: none; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .tn-nav { padding: 0.9rem 2.5rem; }
    .tn-section, .tn-section-cream, .tn-section-dark, .tn-success-strip, .tn-cta { padding: 5rem 2.5rem; }
    .tn-hero-left { padding: 5rem 2.5rem 5rem 2.5rem; }
    .tn-feat-grid { grid-template-columns: repeat(3, 1fr); }
    .tn-exam-grid { grid-template-columns: repeat(2, 1fr); }
    .tn-resources-row { grid-template-columns: repeat(3, 1fr); }
    .tn-footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
  }
  @media (max-width: 860px) {
    .tn-nav-links { display: none; }
    .tn-hero { grid-template-columns: 1fr; }
    .tn-hero-right { height: 50vh; }
    .tn-feat-grid { grid-template-columns: repeat(2, 1fr); }
    .tn-plan-grid { grid-template-columns: 1fr; }
    .tn-success-strip { grid-template-columns: 1fr; gap: 2.5rem; }
    .tn-cta { grid-template-columns: 1fr; text-align: center; }
    .tn-cta-actions { flex-direction: row; justify-content: center; }
    .tn-cta::before { font-size: 8rem; }
    .tn-stats-band { flex-wrap: wrap; }
    .tn-stat-item { flex: 0 0 50%; }
  }
  @media (max-width: 600px) {
    .tn-section, .tn-section-cream, .tn-section-dark, .tn-success-strip, .tn-cta { padding: 4rem 1.2rem; }
    .tn-nav { padding: 0.8rem 1.2rem; }
    .tn-hero-left { padding: 4.5rem 1.2rem 3rem; }
    .tn-h1 { font-size: clamp(2.4rem, 9vw, 3.2rem); }
    .tn-exam-grid { grid-template-columns: 1fr; }
    .tn-feat-grid { grid-template-columns: repeat(2, 1fr); }
    .tn-resources-row { grid-template-columns: repeat(2, 1fr); }
    .tn-footer { padding: 3rem 1.2rem 2rem; }
    .tn-footer-top { grid-template-columns: 1fr; }
    .tn-hero-mini-stats { gap: 1.2rem; flex-wrap: wrap; }
    .tn-cta-actions { flex-direction: column; align-items: stretch; }
  }
`;

/* ─── Data ────────────────────────────────────────────────────────────────── */
const NOTIFICATIONS = [
  { tag: "new",    tagLabel: "New",    title: "TNPSC Group 2 Notification 2025 — 1,100 Vacancies Released", date: "20 Jun 2025" },
  { tag: "admit",  tagLabel: "Admit",  title: "Group 4 Hall Ticket Download Now Open", date: "18 Jun 2025" },
  { tag: "result", tagLabel: "Result", title: "CCSE IV 2024 Final Results Published", date: "15 Jun 2025" },
  { tag: "answer", tagLabel: "Key",    title: "VAO Exam Answer Key — Objections Open till 22 Jun", date: "12 Jun 2025" },
  { tag: "new",    tagLabel: "New",    title: "Forest Guard Recruitment 2025 — Apply Before 30 Jun", date: "10 Jun 2025" },
];

const ALL_FEATURES = [
  { icon: "🔔", name: "Notifications",    sub: "Latest updates",      color: "#e8621a" },
  { icon: "📚", name: "Syllabus",         sub: "Topic-wise",          color: "#1a6b45" },
  { icon: "📄", name: "Previous Papers",  sub: "2010–2025",           color: "#8b1a2f" },
  { icon: "📖", name: "Study Materials",  sub: "500+ resources",      color: "#1b6fa8" },
  { icon: "🖥️", name: "Online Tests",    sub: "Live mock tests",     color: "#d4a017" },
  { icon: "📰", name: "Current Affairs",  sub: "Daily digest",        color: "#e8621a" },
  { icon: "📅", name: "Exam Calendar",    sub: "All schedules",       color: "#1a6b45" },
  { icon: "📊", name: "Cut-off Marks",    sub: "All categories",      color: "#8b1a2f" },
  { icon: "🗝️", name: "Answer Keys",     sub: "Official & expert",   color: "#1b6fa8" },
  { icon: "🧮", name: "Eligibility",      sub: "Check instantly",     color: "#d4a017" },
  { icon: "📋", name: "App. Status",      sub: "Track your form",     color: "#e8621a" },
  { icon: "🪪", name: "Admit Card",       sub: "Download hall ticket",color: "#1a6b45" },
  { icon: "🏆", name: "Results",          sub: "Marks & ranks",       color: "#8b1a2f" },
  { icon: "🤝", name: "Interview Tips",   sub: "Expert guidance",     color: "#1b6fa8" },
  { icon: "🗂️", name: "Exam Pattern",    sub: "Mark distribution",   color: "#d4a017" },
  { icon: "🗓️", name: "Study Plan",      sub: "Customised schedule", color: "#e8621a" },
  { icon: "📗", name: "Rec. Books",       sub: "Best references",     color: "#1a6b45" },
  { icon: "🏛️", name: "TN GK",           sub: "State knowledge",     color: "#8b1a2f" },
  { icon: "▶️", name: "Video Lessons",   sub: "Learn visually",      color: "#1b6fa8" },
  { icon: "❓", name: "Quizzes",          sub: "Topic-wise tests",    color: "#d4a017" },
  { icon: "💬", name: "Discussion",       sub: "Peer community",      color: "#e8621a" },
  { icon: "📑", name: "FAQs",            sub: "Common queries",       color: "#1a6b45" },
  { icon: "💰", name: "Salary Structure", sub: "Pay scales & perks",  color: "#8b1a2f" },
  { icon: "👔", name: "Job Profile",      sub: "Roles & duties",      color: "#1b6fa8" },
];

const EXAMS = [
  { icon:"🏢", name:"Group I Services",       code:"CCSE-I",   color:"#e8621a", desc:"Collector, DSP, Asst Commissioner. Premier competitive exam for Class I posts.", tags:["Class I","Interview","Mains"] },
  { icon:"📋", name:"Group II & IIA",         code:"CCSE-II",  color:"#1a6b45", desc:"Assistant Section Officer, Revenue Inspector. Written test + certificate verification.", tags:["Class II","Written Only"] },
  { icon:"📝", name:"Group IV (CCSE-IV)",     code:"CCSE-IV",  color:"#1b6fa8", desc:"Village Administrative Officer, Typist, Junior Assistant. Largest recruitment.", tags:["Class IV","High Volume"] },
  { icon:"📐", name:"Engineering Services",   code:"TNPSC-ES", color:"#d4a017", desc:"AE in PWD, TWAD, CMWSSB. Degree in relevant engineering branch required.", tags:["Technical","Class II"] },
  { icon:"⚖️", name:"Tamil Nadu Judicial",    code:"TNSJS",    color:"#8b1a2f", desc:"District Munsif cum Judicial Magistrate. Law graduates with 3yr experience.", tags:["Law","Class I"] },
  { icon:"🌿", name:"Forest Subordinate",     code:"TNFSS",    color:"#2d8c60", desc:"Forest Guard, Forest Watcher. Physical fitness test mandatory.", tags:["Physical Test","Class III"] },
];

const RESOURCES = [
  { icon:"📄", name:"Previous Papers",  sub:"2010–2025",      link:"/previous-papers" },
  { icon:"📖", name:"Study Materials",  sub:"500+ PDFs",      link:"/study-materials" },
  { icon:"🖥️", name:"Mock Tests",      sub:"100+ Tests",     link:"/online-tests" },
  { icon:"📰", name:"Current Affairs",  sub:"Daily Updates",  link:"/current-affairs" },
  { icon:"🗝️", name:"Answer Keys",     sub:"Official Keys",  link:"/answer-keys" },
  { icon:"📊", name:"Cut-off Marks",    sub:"All Years",      link:"/cutoff-marks" },
  { icon:"🏛️", name:"TN GK",           sub:"State Specific", link:"/tn-gk" },
  { icon:"💰", name:"Salary Info",      sub:"Pay + Perks",    link:"/salary-structure" },
  { icon:"📅", name:"Exam Calendar",    sub:"2025 Schedule",  link:"/exam-calendar" },
  { icon:"🔔", name:"Notifications",    sub:"Live Alerts",    link:"/notifications" },
  { icon:"💬", name:"Forum",            sub:"Community",      link:"/forum" },
  { icon:"❓", name:"Quizzes",          sub:"Test Yourself",  link:"/quizzes" },
];

const STUDY_FEATURES = [
  { icon:"📈", name:"Personalised Study Plan",   desc:"Customised schedule based on your exam date, weak topics, and daily availability.",  color:"#e8621a", bg:"rgba(232,98,26,0.12)" },
  { icon:"📊", name:"Performance Analytics",      desc:"Deep insights from every mock test — accuracy by topic, time management, and improvement trends.", color:"#d4a017", bg:"rgba(212,160,23,0.12)" },
  { icon:"🎯", name:"Smart Syllabus Tracker",     desc:"Mark topics done and never lose track of your coverage across all TNPSC subjects.", color:"#2d8c60", bg:"rgba(45,140,96,0.12)" },
  { icon:"📰", name:"Daily Current Affairs",      desc:"Curated daily digest with TN-specific news, Tamil Nadu GK, and national events.", color:"#1b6fa8", bg:"rgba(27,111,168,0.12)" },
];

const SUCCESS_ITEMS = [
  "Comprehensive study materials verified by TNPSC toppers",
  "Topic-wise previous year question analysis (2010–2025)",
  "Daily current affairs specific to Tamil Nadu",
  "Category-wise cut-off analysis for all TNPSC exams",
  "Live mock tests that mirror the actual exam pattern",
];

/* ─── Reveal hook ────────────────────────────────────────────────────────── */
function Reveal({ children, delay = "0s", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = delay;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`tn-reveal${className ? " " + className : ""}`}>{children}</div>;
}

/* ─── Animated counter ───────────────────────────────────────────────────── */
function useCounter(target, suffix, go) {
  const [val, setVal] = useState("0" + suffix);
  useEffect(() => {
    if (!go) return;
    let n = 0; const step = target / 50;
    const id = setInterval(() => {
      n += step;
      if (n >= target) { setVal(target + suffix); clearInterval(id); return; }
      setVal(Math.floor(n) + suffix);
    }, 20);
    return () => clearInterval(id);
  }, [go, target, suffix]);
  return val;
}

/* ─── Stats Band ─────────────────────────────────────────────────────────── */
function StatsBand() {
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  const stats = [
    { val: useCounter(10000, "+",  go), label: "Active Aspirants" },
    { val: useCounter(500,   "+",  go), label: "Study Resources" },
    { val: useCounter(100,   "+",  go), label: "Mock Tests" },
    { val: useCounter(50,    "+",  go), label: "Success Stories" },
  ];
  return (
    <div ref={ref} className="tn-stats-band">
      {stats.map((s, i) => (
        <div key={i} className={`tn-stat-item${go ? " visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
          <div className="tn-stat-num">{s.val}</div>
          <div className="tn-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main ────────────────────────────────────────────────────────────────── */
export default function TNPSCHome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const id = "tnpsc-styles";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id; s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── TICKER ── */}
      <div className="tn-ticker">
        <div className="tn-ticker-inner">
          <span>🔔 Group II 2025 Notification Released — 1,100 Posts</span>
          <span className="tn-ticker-dot">◆</span>
          <span>📋 VAO Answer Key Objections Open Till 22 June</span>
          <span className="tn-ticker-dot">◆</span>
          <span>🏆 CCSE-IV 2024 Final Results Published</span>
          <span className="tn-ticker-dot">◆</span>
          <span>📅 Forest Guard Recruitment — Last Date 30 June 2025</span>
          <span className="tn-ticker-dot">◆</span>
          <span>🪪 Group 4 Hall Ticket Download Now Open</span>
          <span className="tn-ticker-dot">◆</span>
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className={`tn-nav${scrolled ? " elevated" : ""}`}>
        <a href="#" className="tn-logo">
          <div className="tn-logo-emblem">🏛️</div>
          <div className="tn-logo-text">
            <div className="tn-logo-top"><span className="tn">TN</span>PSC Hub</div>
            <div className="tn-logo-sub">Tamil Nadu · State Govt Exams</div>
          </div>
        </a>
        <ul className="tn-nav-links">
          <li><a href="#exams">Exams</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#study">Study Plan</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="/register" className="tn-nav-cta">Start Free →</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="tn-hero">
        <div className="tn-hero-left">
          <div className="tn-hero-badge">
            <div className="tn-hero-badge-dot" />
            2025 Recruitment Active
          </div>
          <h1 className="tn-h1">
            Crack Your<br />
            <span className="line2">தமிழ்நாடு</span>
            <span className="line3">TNPSC Exam</span>
          </h1>
          <p className="tn-hero-sub">
            The most comprehensive preparation platform for Tamil Nadu Public Service Commission aspirants — syllabus, papers, mock tests, and live notifications in one place.
          </p>
          <div className="tn-hero-actions">
            <a href="#exams" className="tn-btn-primary">Explore Exams →</a>
            <a href="/online-tests" className="tn-btn-outline">🖥️ Free Mock Test</a>
          </div>
          <div className="tn-hero-mini-stats">
            <div>
              <div className="tn-mini-stat-num">10K+</div>
              <div className="tn-mini-stat-label">Active users</div>
            </div>
            <div>
              <div className="tn-mini-stat-num">500+</div>
              <div className="tn-mini-stat-label">Resources</div>
            </div>
            <div>
              <div className="tn-mini-stat-num">100%</div>
              <div className="tn-mini-stat-label">Free access</div>
            </div>
          </div>
        </div>

        {/* Latest Notifications Panel */}
        <div className="tn-hero-right" id="notifications">
          <div className="tn-hero-right-header">
            <div className="tn-hero-right-title">Live Feed</div>
            <div className="tn-hero-right-heading">Latest Notifications</div>
          </div>
          <div className="tn-notif-list">
            {NOTIFICATIONS.map((n, i) => (
              <div key={i} className="tn-notif-item">
                <div className={`tn-notif-tag tn-tag-${n.tag}`}>{n.tagLabel}</div>
                <div className="tn-notif-title">{n.title}</div>
                <div className="tn-notif-date">{n.date}</div>
              </div>
            ))}
          </div>
          <a href="/examnotifications" className="tn-notif-more">View All Notifications →</a>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <StatsBand />

      {/* ── ALL FEATURES ── */}
      <section className="tn-section">
        <div className="tn-section-eyebrow">Everything You Need</div>
        <Reveal>
          <h2 className="tn-section-title">24 features.<br />One platform.</h2>
        </Reveal>
        <Reveal delay="0.1s">
          <p className="tn-section-desc">From syllabus to results — every tool an aspirant needs, completely free.</p>
        </Reveal>
        <Reveal delay="0.15s">
          <div className="tn-feat-grid">
            {ALL_FEATURES.map((f, i) => (
              <a key={i} href="#" className="tn-feat-card" style={{ "--accent-c": f.color }}>
                <div className="tn-feat-icon">{f.icon}</div>
                <div className="tn-feat-name">{f.name}</div>
                <div className="tn-feat-sub">{f.sub}</div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── EXAMS ── */}
      <section className="tn-section-cream" id="exams">
        <div className="tn-section-eyebrow">Recruitment Exams</div>
        <Reveal>
          <h2 className="tn-section-title">Which exam<br />are you targeting?</h2>
        </Reveal>
        <Reveal delay="0.1s">
          <p className="tn-section-desc">Dedicated resources, syllabus, and mock tests for every major TNPSC recruitment.</p>
        </Reveal>
        <Reveal delay="0.15s">
          <div className="tn-exam-grid">
            {EXAMS.map((e, i) => (
              <a key={i} href="#" className="tn-exam-card" style={{ "--e-color": e.color }}>
                <div className="tn-exam-card-icon">{e.icon}</div>
                <div className="tn-exam-card-code">{e.code}</div>
                <div className="tn-exam-card-name">{e.name}</div>
                <div className="tn-exam-card-desc">{e.desc}</div>
                <div className="tn-exam-card-meta">
                  {e.tags.map((t, j) => <span key={j} className="tn-exam-pill">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── STUDY TOOLS ── */}
      <section className="tn-section-dark" id="study">
        <div className="tn-section-eyebrow" style={{ color: "#d4a017" }}>Smart Preparation</div>
        <Reveal>
          <h2 className="tn-section-title">Tools that actually<br />move your rank.</h2>
        </Reveal>
        <Reveal delay="0.1s">
          <p className="tn-section-desc">More than just PDFs — intelligent preparation tools tailored for TNPSC.</p>
        </Reveal>
        <div className="tn-plan-grid">
          {STUDY_FEATURES.map((f, i) => (
            <Reveal key={i} delay={`${i * 0.08}s`}>
              <a href="#" className="tn-plan-card" style={{ "--p-color": f.color, "--p-bg": f.bg }}>
                <div className="tn-plan-card-top">
                  <div className="tn-plan-icon" style={{ background: f.bg }}>{f.icon}</div>
                  <div className="tn-plan-name">{f.name}</div>
                </div>
                <div className="tn-plan-desc">{f.desc}</div>
                <div className="tn-plan-arrow">Explore → </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SUCCESS STRIP ── */}
      <section className="tn-success-strip">
        <Reveal>
          <h2 className="tn-success-title">
            Why toppers<br />choose <em>TNPSC Hub</em>
          </h2>
        </Reveal>
        <Reveal delay="0.15s">
          <div className="tn-success-list">
            {SUCCESS_ITEMS.map((item, i) => (
              <div key={i} className="tn-success-item">
                <span className="tn-success-check">✅</span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── RESOURCES ── */}
      <section className="tn-section" id="resources">
        <div className="tn-section-eyebrow">Quick Access</div>
        <Reveal>
          <h2 className="tn-section-title">All resources.<br />One click away.</h2>
        </Reveal>
        <Reveal delay="0.1s">
          <div className="tn-resources-row">
            {RESOURCES.map((r, i) => (
              <a key={i} href={r.link} className="tn-res-card">
                <div className="tn-res-icon">{r.icon}</div>
                <div className="tn-res-name">{r.name}</div>
                <div className="tn-res-sub">{r.sub}</div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="tn-cta">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="tn-cta-title">
            Begin your<br />TNPSC journey.
            <span>உங்கள் வெற்றி இன்றே தொடங்கும்</span>
          </h2>
          <p className="tn-cta-sub">
            Join 10,000+ aspirants who are preparing smarter. No payment, no sign-up — just start.
          </p>
        </div>
        <div className="tn-cta-actions">
          <a href="/register" className="tn-btn-white">Register Free →</a>
          <a href="/online-tests" className="tn-btn-ghost-white">Try a free mock test first</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="tn-footer">
        <div className="tn-footer-top">
          <div>
            <div className="tn-footer-logo"><span className="tn">TN</span>PSC Hub</div>
            <p className="tn-footer-desc">
              A free, comprehensive preparation platform for Tamil Nadu Public Service Commission aspirants. Built with ❤️ for every student in Tamil Nadu.
            </p>
          </div>
          <div>
            <div className="tn-footer-col-title">Exams</div>
            <ul className="tn-footer-links-list">
              <li><a href="#">Group I (CCSE-I)</a></li>
              <li><a href="#">Group II & IIA</a></li>
              <li><a href="#">Group IV (CCSE-IV)</a></li>
              <li><a href="#">Engineering Services</a></li>
              <li><a href="#">Forest Guard</a></li>
            </ul>
          </div>
          <div>
            <div className="tn-footer-col-title">Resources</div>
            <ul className="tn-footer-links-list">
              <li><a href="#">Previous Papers</a></li>
              <li><a href="#">Study Materials</a></li>
              <li><a href="#">Mock Tests</a></li>
              <li><a href="#">Current Affairs</a></li>
              <li><a href="#">Answer Keys</a></li>
            </ul>
          </div>
          <div>
            <div className="tn-footer-col-title">Support</div>
            <ul className="tn-footer-links-list">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Discussion Forum</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>
        <div className="tn-footer-bottom">
          <span className="tn-footer-copy">© 2025 TNPSC Hub. Free for all aspirants.</span>
          <span>Not affiliated with the official TNPSC. For study purposes only.</span>
        </div>
      </footer>
    </>
  );
}