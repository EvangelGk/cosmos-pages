# Vendor / Subprocessor Risk Assessment — Cosmos Sport Arena

**Owner:** DPO + CISO · **Triggered:** before any new processor goes live or scope changes.

## 1. Pre-engagement checks
1. **Lawful basis to share:** confirm Article 28 DPA can be signed.
2. **EEA preference:** processors hosted/served from EEA preferred. Non-EEA → SCC 2021/914 + Transfer Impact Assessment (TIA).
3. **Sector fit:** processor must have a track record in HR/talent or equivalent sensitive-data handling.
4. **Subprocessor list:** processor must publish a subprocessor list and notify changes ≥ 30 days in advance.

## 2. Security questionnaire (must-haves)
- ISO 27001 (or SOC 2 Type II) certification, current report.
- TLS 1.3, AES-256 at rest, key management documented.
- Pen-test within last 12 months, summary report shareable.
- Breach-notification SLA ≤ 24h to controller.
- DPO contact named.
- Data deletion verifiable (certificate of destruction or crypto-erase log).

## 3. Risk scoring
| Dimension | Weight | Score (1-5) | Notes |
|---|---:|---:|---|
| Data sensitivity exposed | 25% | | HR data → likely 4-5 |
| Volume of PII | 15% | | Up to ~10k profiles per contest |
| Hosting region | 15% | | EEA = 1, non-EEA SCC = 3, none = 5 |
| Certifications | 15% | | None = 5; SOC 2 II = 2; ISO 27001 = 1 |
| Sub-processor chain | 10% | | Depth ≥ 3 = 4-5 |
| Incident history | 10% | | Public breach last 24m = 4-5 |
| Exit / portability | 10% | | Lock-in = 4-5 |

**Decision rule:** weighted score ≥ 3.5 → mitigation plan + DPO sign-off mandatory before contract. ≥ 4.5 → reject or escalate to legal.

## 4. Required contractual clauses
- Article 28 DPA with full annex (purposes, categories, TOMs).
- SCC 2021/914 Module 2 (controller→processor) for non-EEA.
- Audit rights (annual) + on-demand audit on incident.
- Right to terminate on material breach, with data-return obligations.
- Indemnity for fines arising from processor failure.
- Liability cap proportional to data sensitivity (no nominal caps for HR data).

## 5. Ongoing monitoring
- Annual reassessment.
- CVE / breach-news monitoring (set Google Alerts + status-page subscription).
- Re-test breach-notification flow each year (tabletop with the processor).

## 6. Common Arena processors — pre-classified
| Processor type | Examples | Default risk | Notes |
|---|---|---|---|
| Cloud hosting | AWS Frankfurt, Azure West Europe | Low (EEA) | DPA + region-locked |
| Email | SendGrid EU, Postmark EU | Low | Avoid US-only providers |
| Analytics | Plausible (self-host), Matomo | Low | Cookie-less variants preferred |
| Anti-spam / Captcha | hCaptcha (EU), Turnstile | Low–Med | Privacy-respecting variants |
| File storage | S3 EU + KMS | Low | Region locked, signed URLs |
| External jurors | Independent contractors | Med | Individual NDA + DPA + access via federated identity |
