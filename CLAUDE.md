# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LittleManBigWorld is a vacation discovery PWA — a Tinder-style swipe app for finding travel destinations. Built as a vibe coding project with a 12-year-old collaborator. Currently a proof-of-concept using static images (Unsplash URLs) as placeholders for future video content.

Full design spec: `docs/design.md`

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no frameworks, no build step
- Bootstrap 5.3.8 (vendored in `css/` and `js/`)
- PWA (manifest.json + service worker for offline/installability)

## Build & Run

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

No build system or package manager. Service worker requires localhost or HTTPS.

## Architecture

**Pages** (4 HTML files, each self-contained):
- `index.html` — Tinder-style card stack feed (swipe right=like, left=skip). Core UX.
- `trending.html` — All 100 destinations sorted by like count
- `search.html` — Live text filtering of destinations
- `profile.html` — Stub placeholder

**Custom code** (3 files):
- `js/destinations.js` — Data layer. Array of 100 destination objects. All pages read from this. To add a destination, add one object here.
- `js/app.js` — Card stack rendering, pointer-event swipe gestures, like/skip logic, shuffle, end-of-deck state, detail sheet, service worker registration.
- `css/app.css` — Dark theme, card stack positioning, swipe animations, heart burst, bottom nav, detail bottom sheet, trending/search grid layouts.

**PWA**:
- `manifest.json` — App metadata, dark theme, portrait orientation
- `sw.js` — Cache-first service worker for offline support
- `images/icons/` — Globe PWA icons (192px, 512px)

**Data flow**: `destinations.js` is the single source of truth. All pages import it via `<script>` tag and render from the `DESTINATIONS` array. Likes are in-memory only (reset on reload). Detail info fields are mostly empty — designed to be filled in incrementally.

## Stubbed Features

These are visible in the UI but show placeholders:
- Comments (offcanvas drawer → "Coming soon!")
- Flight booking (detail sheet button → toast)
- Bitcoin purchasing (only appears for El Salvador → toast)
- Share (uses Web Share API where available)
- Profile page (placeholder)

## Key UX Pattern

The card stack uses pointer events (`pointerdown`/`pointermove`/`pointerup`) for cross-device swipe gestures. Cards fly off screen with rotation when swiped past a 100px threshold. The stack shows 2-3 cards with scale/offset behind the top card.
