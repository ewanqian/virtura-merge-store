# Current Status — 2026-10-28

## Decision
MERGE is a real VIRTURA product initiative, not a loose merch brainstorm.

## Product slate
- OBJ-001 SYNC OBJECT
- OBJ-002 TIMER / REWIND
- OBJ-003 DROP FLOW / ∞
- OBJ-004 OPERATOR PATCH SET
- DIG-001 LIQUID FIELD
- DIG-002 TIME RESIDUE
- DIG-003 GRAVITY STUDY

## Current milestone
**M1 — interactive product proofs**

## Completed in M1
- [x] TIMER / REWIND homepage interaction with forward / rewind states
- [x] TIMER residue study
- [x] Authored Three.js TIMER object with real 3D geometry, materials, drag rotation, zoom and orientation-driven REWIND state
- [x] DROP FLOW continuous canvas prototype with LAMINAR / FLOW / TURBULENT modes
- [x] SYNC OBJECT simulated audio-reactive state machine
- [x] SYNC OBJECT optional local microphone analysis
- [x] Reusable product detail page for all catalog objects
- [x] Simulated Object Passport claim flow
- [x] GitHub Pages deployment workflow committed and triggering
- [x] Bilingual Chinese/English storefront language system
- [x] Editorial commerce redesign: Chinese serif display typography + English industrial/system labels

## Visual direction
MERGE should feel like a top-tier independent product store rather than a portfolio or generic merch site.

- Product-first composition and large negative space
- Warm off-white / graphite / black material system
- Chinese Song-style serif for cultural/editorial headlines
- English sans-serif for object IDs, engineering states and system labels
- Small technical typography, restrained controls, minimal navigation
- Transparent engineering logic and credible product detail
- Inspiration may include contemporary independent hardware brands such as Nothing, but MERGE must not copy their proprietary dot-matrix/Glyph identity

## Next 3 actions
1. Upgrade DROP FLOW from 2D canvas particles to a Three.js/WebGL shader object.
2. Build SYNC OBJECT as a real 3D light volume and improve onset/beat feature extraction.
3. Replace placeholder catalog-object renders with authored 3D/photoreal product visuals.

Anything outside these three is secondary until the WebGL object layer is demonstrably usable.

## Architecture decision
The canonical source of truth is the internal Object Registry. Conflux is an optional verification projection, testnet-first.

## Commerce decision
Normal RMB commerce is separate from optional wallet/passport claim. No initial secondary market, investment framing or RWA tokenization.
