# Object Registry Schema

Canonical entities:
- `users`
- `products`
- `orders`
- `objects`
- `editions`
- `entitlements`
- `wallet_links`
- `chain_claims`

## Canonical Object ID
Example: `TMR-2026-0047`

Recommended object fields:
- `object_id`
- `product_id`
- `edition_index`
- `edition_total`
- `owner_user_id`
- `physical_twin_id`
- `digital_entitlement_id`
- `wallet_address` nullable
- `chain_network` nullable
- `chain_status`: unclaimed / claimed / revoked
- `token_or_passport_id` nullable
- timestamps

Blockchain state is an optional projection of internal state; it is not the canonical identifier.
