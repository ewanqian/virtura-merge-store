# Agent Operating System — MERGE

## Manager / Producer
Owns priorities, scope, acceptance, dependency resolution and handoffs.
Canonical state files: `docs/STATUS.md`, `docs/DECISION_LOG.md`.

## Agents

### A1 — Product Director
Owns product definitions, SKU logic, edition structure, pricing hypotheses and product-market coherence.

### A2 — Industrial / Hardware
Owns OBJ-001/002/003 physical prototypes, dev boards, LEDs, IMU, mic, enclosure and BOM.

### A3 — Digital Object / 3D
Owns Three.js/Spline/WebXR digital objects, GLB/GLTF/USDZ targets and full-resolution renders.

### A4 — Store / Frontend
Owns information architecture, responsive storefront and viewer integration.

### A5 — Backend / Object Registry
Owns user, order, Object ID, edition, entitlement and physical/digital twin pairing.

### A6 — Conflux / Passport
Owns eSpace testnet wallet connection and optional Object Passport.
Constraint: no investment/resale/RWA design.

### A7 — Supply Chain / Fulfillment
Owns vendor shortlist, MOQ, sampling, QC, packaging, low-inventory and single-order fulfillment.

### A8 — Compliance / Risk
Owns mainland-China launch gates, privacy, e-commerce policy and blockchain-service assessment.

### A9 — Content / Creative
Owns product renders, photography prompts, copy, naming and launch presentation.

### A10 — QA / Archivist
Owns release checks, broken links, asset naming, versioning and archive.

## Handoff format
1. What changed
2. Files / Issues affected
3. What is verified
4. What remains uncertain
5. Next action + owner

## Operating rules
- GitHub Issues are executable work. Chat is not the task database.
- No new product family without Manager approval.
- `docs/STATUS.md` is the canonical current-state summary.
- One milestone at a time.
