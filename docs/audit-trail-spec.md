# Audit Trail Specification — Cosmos Sport Arena

**Goal:** tamper-evident, queryable record of every security- and integrity-relevant event for **at least 12 months**, supporting GDPR Art. 5(2) accountability, Art. 30 ROPA, Art. 32 security, Art. 33/34 breach response.

## 1. Event taxonomy
| Domain | Events |
|---|---|
| Identity | sign-up, login (success/fail), MFA challenge, password reset, account lock |
| Consent | granted, withdrawn, re-confirmed, scope changed |
| Submission | created, edited, finalized, deleted, downloaded by juror |
| Evaluation | score given, comment added, override, conflict-of-interest declared/recused |
| Leaderboard | rank computed, badge awarded, public surface published |
| Admin | role granted/revoked, processor added, retention-sweep run |
| Data subject rights | access, rectification, erasure, portability, restriction, objection |
| Security | rate-limit hit, anomaly detected, alert fired, incident opened/closed |

## 2. Schema (per event)
```json
{
  "event_id": "uuid",
  "ts_utc": "2025-01-01T12:34:56.789Z",
  "actor": { "type": "user|admin|system|juror", "id": "uuid|service-account", "ip": "x.x.x.x", "ua": "..." },
  "action": "submission.finalize",
  "resource": { "type": "submission|user|score|...", "id": "uuid" },
  "context": { "contest_id": "uuid", "tenant": "cosmos-arena" },
  "outcome": "success|failure|blocked",
  "reason_code": "OK|RATE_LIMIT|ACCESS_DENIED|...",
  "request_id": "uuid",
  "session_id": "uuid",
  "prev_hash": "sha256:...",
  "hash": "sha256:..."
}
```
- `prev_hash` chains each event → tamper-evident sequence (hash chain).
- Hash includes a server-side pepper rotated annually.

## 3. Storage & integrity
- **WORM bucket** (Object Lock — Compliance mode) for at least 12 months.
- Daily **Merkle root** of the day's events published to an internal append-only log + offsite copy.
- Hourly **integrity job** verifies hash chain; alert on break.
- Encryption: AES-256 at rest with KMS keys segregated from production DB keys.

## 4. Access controls
- Read-only IAM role for SOC analysts.
- Break-glass admin role gated by 2-person rule + recorded session.
- DPO has read-only access for data-subject investigations.
- Developers have **no** direct access to production audit data.

## 5. Retention & disposal
- Live retention: 12 months (default).
- Legal hold: indefinite if incident under investigation.
- After retention: cryptographic erasure of bucket keys + WORM auto-delete.

## 6. Alerts (high-signal)
- Multiple failed MFA from new geo within 5 min.
- Mass download of submissions by a single juror.
- Score override > 2 standard deviations from panel mean.
- Retention-sweep job did not run in last 25 hours.
- Any access-denied event on the audit bucket itself.

## 7. Reports
- **Monthly:** event counts per domain, anomaly summary.
- **Quarterly:** access-review reconciliation.
- **Per-incident:** filtered timeline export within 4h SLA.
- **Annual:** integrity-verification report co-signed by CISO + DPO.

## 8. PII inside the audit log
The audit log holds **identifiers and metadata, not free-form PII**. Do not log: passwords, raw tokens, full submission bodies, jury comments. Log references (IDs) only.
