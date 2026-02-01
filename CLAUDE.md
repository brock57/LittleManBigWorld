# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LittleManBigWorld is a vacation discovery PWA — a Tinder-style swipe app for finding travel destinations. Built as a vibe coding project with a 12-year-old collaborator.

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

Live site: https://brock57.github.io/LittleManBigWorld/

## Hosting & Deployment

- **Repo**: https://github.com/brock57/LittleManBigWorld (public)
- **GitHub Pages**: Deployed via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Pushes to `main` auto-deploy to GitHub Pages
- Git protocol: HTTPS (SSH keys not configured; `http.postBuffer` set to 500MB for large pushes)

## Architecture

**Pages** (4 HTML files, each self-contained):
- `index.html` — Tinder-style card stack feed (swipe right=like, left=skip). Core UX.
- `trending.html` — All 100 destinations sorted by like count
- `search.html` — Live text filtering of destinations
- `profile.html` — Stub placeholder

**Custom code** (3 files):
- `js/destinations.js` — Data layer. Array of 100 destination objects with fully populated detail fields (food, bestTime, avgTemp, essentials, kayakCode). All pages read from this. To add a destination, add one object here.
- `js/app.js` — Card stack rendering, pointer-event swipe gestures, like/skip logic, shuffle, end-of-deck state, detail sheet, Kayak flight links, service worker registration.
- `css/app.css` — Dark theme, card stack positioning, swipe animations, heart burst, bottom nav, detail bottom sheet, trending/search grid layouts.

**Images**:
- `images/destinations/` — 100 locally stored JPEG photos (downloaded from Unsplash, ~11MB total). Each named `{destination-id}.jpg`.
- `images/icons/` — Globe PWA icons (192px, 512px)

**PWA**:
- `manifest.json` — App metadata, dark theme, portrait orientation
- `sw.js` — Cache-first service worker for offline support
- `js/storage.js` — localStorage persistence for likes/seen state

**Data flow**: `destinations.js` is the single source of truth. All pages import it via `<script>` tag and render from the `DESTINATIONS` array. Likes persist via localStorage (`js/storage.js`).

## Flight Links

The detail sheet "Book on Kayak" button links to Kayak with **Chicago O'Hare (ORD)** hardcoded as the origin airport. URL format: `https://www.kayak.com/flights/ORD-{CODE}/{depart}/{return}` — dates default to 2 weeks out, 7-day trip. Function: `buildKayakUrl()` in `js/app.js:248`.

## Stubbed Features

These are visible in the UI but show placeholders:
- Comments (offcanvas drawer → "Coming soon!")
- Bitcoin purchasing (only appears for El Salvador → toast)
- Share (uses Web Share API where available)
- Profile page (placeholder)

## Key UX Pattern

The card stack uses pointer events (`pointerdown`/`pointermove`/`pointerup`) for cross-device swipe gestures. Cards fly off screen with rotation when swiped past a 100px threshold. The stack shows 2-3 cards with scale/offset behind the top card.

## Potential Next Steps

- Update `sw.js` to cache `images/destinations/` for full offline PWA support
- Kayak affiliate program integration (currently no affiliate tracking)
- Replace ORD origin with user-configurable home airport
- Comments feature
- Profile page
- Video content to replace static images
