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
- [x] DROP FLOW continuous canvas prototype with LAMINAR / FLOW / TURBULENT modes
- [x] SYNC OBJECT simulated audio-reactive state machine
- [x] SYNC OBJECT optional local microphone analysis
- [x] Reusable product detail page for all catalog objects
- [x] Simulated Object Passport claim flow
- [x] GitHub Pages deployment workflow committed and triggering

## Next 3 actions
1. Replace TIMER CSS object with authored Three.js geometry and real 3D manipulation.
2. Upgrade DROP FLOW from 2D canvas particles to a Three.js/WebGL shader object.
3. Build SYNC OBJECT as a real 3D light volume and improve onset/beat feature extraction.

Anything outside these three is secondary until the WebGL object layer is demonstrably usable.

## Architecture decision
The canonical source of truth is the internal Object Registry. Conflux is an optional verification projection, testnet-first.

## Commerce decision
Normal RMB commerce is separate from optional wallet/passport claim. No initial secondary market, investment framing or RWA tokenization.
