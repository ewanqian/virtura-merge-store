# Current Status — 2026-10-28

## Decision
MERGE is a real VIRTURA product initiative, not a loose merch brainstorm.

## Product slate
- OBJ-001 SYNC OBJECT
- OBJ-002 TIMER / REWIND
- OBJ-003 DROP FLOW / ∞
- OBJ-004 OPERATOR PATCH SET
- OBJ-005 SIGNAL KEY SET 01
- OBJ-006 HOURGLASS 10
- OBJ-007 FLOW BLOCK
- OBJ-008 FLOW TAG
- DIG-001 LIQUID FIELD
- DIG-002 TIME RESIDUE
- DIG-003 GRAVITY STUDY

## Current milestone
**M1 — interactive product proofs + storefront fidelity**

## Completed in M1
- [x] Authored Three.js TIMER object with real 3D geometry, materials, drag rotation, zoom and orientation-driven REWIND state
- [x] DROP FLOW continuous canvas prototype with LAMINAR / FLOW / TURBULENT modes
- [x] SYNC OBJECT simulated audio-reactive state machine + optional local microphone analysis
- [x] Reusable bilingual product-detail page and simulated Object Passport claim flow
- [x] GitHub Pages deployment workflow
- [x] Chinese/English editorial commerce language system
- [x] Storefront rebuilt to the supplied reference composition: dark brand panel + 3 hero products + 4 lower products
- [x] Product-first CSS object renders for TIMER / DROP FLOW / SYNC / SIGNAL KEYS / HOURGLASS / FLOW BLOCK / FLOW TAG
- [x] SIGNAL KEY SET browser prototype: nine acoustic codes + local microphone FFT recognition
- [x] SIGNAL KEY SET hardware architecture documented

## Visual direction
MERGE should feel like a top-tier independent product store rather than a portfolio or generic merch site.

- The supplied MERGE STORE reference image is now the primary layout benchmark.
- Product-first composition, very thin dividers, warm off-white / graphite / black.
- Chinese Song-style serif is secondary editorial information; English sans-serif remains the engineering/product system layer.
- Small typography, restrained controls, no decorative cyberpunk UI.
- Homepage is a merchandise shelf; deeper interaction moves into product/digital-object pages.

## SIGNAL KEY SET decision
The black 3×3 button set is promoted from a visual motif to a real product direction.

`PRESS → ACOUSTIC CODE → MICROPHONE → LOCAL DETECTOR → EVENT`

V0 uses distinct short chirps and browser FFT detection. V1 physical prototype should use replaceable 3D-printed keycaps, a low-power MCU, piezo transducer, tactile switch and coin-cell power. Final protocol should move from single-frequency detection toward two-part tone/chirp signatures for reliability in music and reverberant environments.

## Next 3 actions
1. Upgrade DROP FLOW from 2D canvas particles to a Three.js/WebGL shader object.
2. Build SYNC OBJECT as a real 3D light volume and improve onset/beat feature extraction.
3. Build the first physical SIGNAL KEY transmitter and measure recognition/false-positive performance.

## Architecture decision
The canonical source of truth is the internal Object Registry. Conflux is an optional verification projection, testnet-first.

## Commerce decision
Normal RMB commerce is separate from optional wallet/passport claim. No initial secondary market, investment framing or RWA tokenization.
