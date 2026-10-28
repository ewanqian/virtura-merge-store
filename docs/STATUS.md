# Current Status — 2026-10-28

## Decision
MERGE is a real VIRTURA product initiative and a commercial proof platform for VIRTURA's productization service.

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
**COMMERCIAL PROOF SPRINT — Concept → Object → Production**

The current priority is no longer expanding the product slate or building blockchain/backend infrastructure. The priority is proving that VIRTURA can take a concept through physical prototype, supplier handoff, packaging and client-facing presentation.

Canonical manager board: `docs/MANAGER_BOARD.md`.

## P0 proof products

### SIGNAL KEY SET 01 — interaction proof
Proves physical interaction, electronics, acoustic protocol, 3D printing, software detection and demo integration.

### FLOW BLOCK — material / collectible proof
Proves sculptural product direction, optical/material finish, premium packaging and museum/brand adaptability.

### PATCH / LABEL SYSTEM — production proof
Proves supplier communication, tooling/sample control, small-batch manufacturing, QC, packaging and fulfillment.

## Completed product / digital proof
- [x] Three.js TIMER object with real 3D geometry, materials, drag rotation, zoom and orientation-driven REWIND state
- [x] DROP FLOW continuous canvas prototype with LAMINAR / FLOW / TURBULENT modes
- [x] SYNC OBJECT simulated audio-reactive state machine + optional local microphone analysis
- [x] reusable bilingual product-detail page and simulated Object Passport claim flow
- [x] GitHub Pages deployment workflow
- [x] Chinese/English editorial commerce language system
- [x] storefront rebuilt to supplied reference composition: dark brand panel + 3 hero products + 4 lower products
- [x] product-first CSS object renders for TIMER / DROP FLOW / SYNC / SIGNAL KEYS / HOURGLASS / FLOW BLOCK / FLOW TAG
- [x] SIGNAL KEY SET browser prototype: nine acoustic codes + local microphone FFT recognition
- [x] SIGNAL KEY SET hardware architecture documented

## Completed commercial infrastructure this sprint
- [x] `docs/COMMERCIAL_COLLAB_STRATEGY.md`
- [x] `docs/MANAGER_BOARD.md`
- [x] `supplier-notes/RFQ_TEMPLATE.md`
- [x] `docs/PACKAGING_SYSTEM.md`
- [x] `docs/SERVICE_PACKAGES.md`
- [x] `docs/CASE_FILM_PLAN.md`
- [x] public `site/productization.html` collaboration/service page
- [x] store navigation linked to PRODUCTIZATION / 合作服务

## Immediate execution order
1. **Physical SIGNAL KEY V0** — one button, one acoustic signature, recognition tests at 0.5 / 1 / 2 / 4 m and noisy conditions.
2. **FLOW BLOCK material sample** — choose one realistic process/material route and order a sample.
3. **PATCH / LABEL supplier sample** — move from render to real supplier-made small-batch evidence.
4. **Packaging proof** — create one premium FLOW pack, one compact SIGNAL pack and one low-cost PATCH pack.
5. **Supplier economics** — obtain real RFQs and record MOQ / sample / tooling / unit cost / lead time.
6. **Client adaptations** — museum / festival / technology-brand pages.
7. **Case-film rough cut** — only use manufacturing claims supported by real process/sample evidence.

## Deferred / non-blocking
- Full Object Registry backend (Issue #3)
- Conflux production integration (Issue #4)

These are valid future infrastructure, but should not consume the current sprint before real physical evidence exists.

## Visual direction
MERGE should feel like a top-tier independent product store rather than a portfolio or generic merch site.

- supplied MERGE STORE reference image is the primary layout benchmark
- product-first composition, thin dividers, warm off-white / graphite / black
- Chinese Song-style serif for editorial/cultural layer
- English sans-serif for engineering/product system layer
- small typography, restrained controls, no decorative cyberpunk UI
- homepage is a merchandise shelf; deeper interaction lives in product/digital-object pages

## SIGNAL KEY SET decision
The black 3×3 button set is a real product direction, not a visual motif.

`PRESS → ACOUSTIC CODE → MICROPHONE → LOCAL DETECTOR → EVENT`

V0 uses short chirps and browser FFT detection. Physical V0 should use replaceable 3D-printed keycaps, a low-power MCU, piezo transducer, tactile switch and coin-cell power. Final protocol should move toward multi-part tone/chirp signatures for reliability in music and reverberant environments.

## Commercial positioning
**Concept → Object → Production**  
**概念制品化 / 创意产品化**

VIRTURA's value is not generic merchandise design. The service begins by extracting a behavior, material, structure or ritual from a project and converting it into an object that can be prototyped, manufactured, packaged and activated.

## Architecture decision
The canonical source of truth remains the internal Object Registry. Conflux is an optional verification projection, testnet-first.

## Commerce decision
Normal RMB commerce is separate from optional wallet/passport claim. No initial secondary market, investment framing or RWA tokenization.