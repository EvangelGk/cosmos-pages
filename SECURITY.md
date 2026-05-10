# Security Policy — Cosmos Sport Arena

## 1. Threat model
Arena is an HR-grade platform handling identifiable candidate data, intellectual submissions and ranking signals. The threat model covers:
- Account takeover (phishing, credential reuse).
- Data exfiltration (DB dump, backup theft, insider).
- Submission tampering / leaderboard manipulation.
- Unauthorized disclosure of identifiable data on the public leaderboard.
- Supply-chain risk via 3rd-party scoring or analytics.
- Discrimination / unfairness in evaluation.

## 2. Controls (technical)
| Domain | Control |
|---|---|
| Transport | TLS 1.3 only, HSTS preload, OCSP stapling |
| Storage | AES-256 at rest, separated KMS, periodic key rotation |
| Authentication | OIDC, **MFA mandatory for admins/jurors**, WebAuthn preferred |
| Passwords | Argon2id, pepper in HSM, NIST 800-63B compliant |
| Authorization | RBAC + ABAC for evaluation phase (Chinese-wall between jurors and submissions of relatives) |
| Sessions | HttpOnly + SameSite=Lax/Strict, short-lived JWT + rotating refresh |
| Forms | CSRF tokens, server-side validation, hCaptcha/Recaptcha v3, rate limiting (per-IP + per-account) |
| Headers | CSP (no inline JS in production), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options DENY |
| Files | Server-side MIME sniffing, AV scan, max 25 MB, signed URLs for download |
| Logging | Structured JSON, immutable (WORM bucket), SIEM ingestion, 12-month retention |
| Backups | Encrypted, geo-redundant within EEA, RPO 24h / RTO 8h, restore-tested quarterly |
| Secrets | Stored in vault (HashiCorp/AWS SM), never in repo, rotated on staff turnover |
| Dependencies | SBOM generated each build, Dependabot/Renovate, CVE gate in CI |

## 3. Controls (organizational)
- Annual InfoSec & GDPR training for all staff with platform access.
- Role-based access reviews each quarter.
- Incident response runbook with **72-hour breach-notification** to the Hellenic DPA (Art. 33 GDPR).
- Vendor-risk assessment before any new processor (DPA + SCC attached).
- Background checks for jurors with access to identifiable submissions.

## 4. Reporting a vulnerability
We welcome responsible disclosure.

- **Email:** security@cosmos-sport.example.com
- **PGP:** key ID `0xCOSMOS-SPORT-DEMO` (publish actual key in production)
- **Scope:** the public Arena domain and supporting APIs.
- **Out of scope:** social engineering, physical attacks, denial-of-service.
- **SLA:** acknowledgement within 3 business days; remediation timeline shared within 10 business days.

We will not pursue legal action against good-faith researchers who comply with this policy.

## 5. Standards alignment
- **ISO/IEC 27001:2022** — ISMS controls.
- **ISO/IEC 27701:2019** — PIMS extension.
- **GDPR** + Greek Law 4624/2019.
- **OWASP ASVS Level 2** as design baseline.
- **NIST 800-63B** for authentication assurance.
