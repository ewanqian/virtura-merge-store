# System Architecture

MERGE's source of truth is the **Object Registry**, not the blockchain.

## Layers
1. Experience — Three.js / React Three Fiber / Spline / WebXR
2. Commerce — RMB orders + physical/digital entitlement
3. Backend — user / product / order / object / edition
4. Object Registry — canonical Object ID, e.g. `TMR-2026-0047`
5. Blockchain Gateway — Conflux eSpace testnet first
6. Passport — optional verification layer; no initial secondary market

## Suggested stack
- Frontend: Next.js + React Three Fiber
- Backend: Supabase/Postgres
- Storage: R2/S3-compatible
- Chain: Conflux eSpace testnet
- Source: GitHub
- Production hosting: commercial-capable hosting

## Object flow
Purchase / entitlement → Object ID → optional wallet link → optional Passport claim.

The wallet is a verification layer, not the checkout system.
