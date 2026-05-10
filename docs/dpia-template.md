# Data Protection Impact Assessment (DPIA) — Cosmos Sport Arena

**Status:** TEMPLATE · **Owner:** DPO · **Mandated by:** GDPR Art. 35
Use this template before launching any contest that introduces new processing (new data classes, new automated scoring, new processors, profile-building, etc.). Hellenic DPA's "list of operations requiring DPIA" includes large-scale evaluation/scoring of natural persons — the Arena likely qualifies.

---

## 1. Description of the processing
- **Nature:** Collection of identifiable candidate data + submissions; ranking and scoring; talent-pool retention.
- **Scope:** All applicants of the Arena, EU-wide.
- **Context:** HR / talent acquisition, semi-public.
- **Purpose:** As stated in the Privacy Notice.

## 2. Necessity & proportionality
- Data minimization: only fields needed to identify and evaluate.
- Purpose limitation: marketing only on opt-in.
- Storage limitation: see Data Retention Schedule.
- Lawful bases: see Privacy Notice §3.

## 3. Risk identification
| # | Risk | Source | Likelihood | Severity | Inherent risk |
|---|---|---|---|---|---|
| 1 | Discriminatory scoring | Biased rubric or model | M | H | High |
| 2 | Public exposure of identifiable data on leaderboard | UI bug / misconfig | L | H | Medium |
| 3 | Data breach (DB exfil, backup theft) | External attacker | M | H | High |
| 4 | Insider misuse (juror leaks submissions) | Internal | M | M | Medium |
| 5 | Unlawful retention beyond schedule | Process failure | L | M | Low |
| 6 | Non-EEA transfer without safeguards | Vendor change | L | H | Medium |
| 7 | Right-to-erasure failure | Process / tech | L | M | Low |
| 8 | Submission tampering / leaderboard manipulation | External / internal | L | M | Low |

## 4. Mitigations (residual risk)
| # | Mitigation | Residual |
|---|---|---|
| 1 | Anonymized first-pass; structured rubric; bias audit pre-launch; jury calibration | Low |
| 2 | Display-name-only on public leaderboard; e2e test of public surface | Low |
| 3 | TLS 1.3, AES-256, KMS, MFA, SIEM, pen-test before launch, OWASP ASVS L2 | Low |
| 4 | NDA + DPA, RBAC, watermarking, access logs, conflict-of-interest declarations | Low |
| 5 | Quarterly retention sweep, automated, DPO sign-off | Very Low |
| 6 | EEA-only by contract; SCC + TIA if exception | Low |
| 7 | Self-service erasure flow; DPO mailbox; SLA-tracked | Very Low |
| 8 | Immutable scoring log; double-entry by 2 jurors; tamper-evident hashes | Very Low |

## 5. Consultation
- Internal: HR, Legal, IT Sec, DPO.
- External: where residual risk remains High after mitigations, consult **Hellenic DPA** under Art. 36 GDPR before processing starts.

## 6. Sign-off
- DPO: ____________________ Date: __________
- CISO: ____________________ Date: __________
- HR Director: _____________ Date: __________

## 7. Review
DPIA is re-reviewed: (a) annually, (b) before any contest with new categories of processing, (c) after any significant incident.
