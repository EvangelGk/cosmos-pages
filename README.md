# Cosmos Sport Arena

> Talent acquisition & business-strategy competition platform for **Cosmos Sport** — built privacy-first, GDPR-compliant, ISO 27001/27701-aligned.

[![GDPR](https://img.shields.io/badge/GDPR-compliant-25d39a)](PRIVACY.md)
[![ISO 27001/27701](https://img.shields.io/badge/ISO_27001%2F27701-aligned-25d39a)](docs/iso-27001-27701-matrix.md)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1_AA-25d39a)](#accessibility)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## What is this
**Cosmos Sport Arena** is an independent microsite linked to the main Cosmos Sport corporate site. It runs themed business challenges (e.g. *"The Next Play — Cosmos Sport Commercial Strategy Challenge 2025"*) where candidates submit strategic deliverables, get evaluated by a mixed jury (internal executives + external experts), and winners earn fast-track interviews and recognition badges.

**Audience:** university students (e.g. AUEB), young professionals, and lateral hires interested in commercial/data/strategy roles at Cosmos Sport.
**Owner:** HR Department · Talent Acquisition.

## Repository contents

```
.
├── index.html                       # Bilingual EL/EN landing (single-page)
├── assets/
│   ├── css/styles.css               # Dark sport theme, WCAG 2.1 AA
│   ├── js/main.js                   # i18n toggle, granular cookie consent
│   └── img/favicon.svg
├── docs/
│   ├── privacy-policy.html          # Article 13 GDPR notice (EL)
│   ├── terms-of-participation.md
│   ├── data-retention.md            # R-01..R-11 schedule
│   ├── dpia-template.md             # Article 35 GDPR
│   ├── ropa-snippet.md              # Article 30 GDPR
│   ├── iso-27001-27701-matrix.md    # Control mapping
│   ├── vendor-risk.md               # Subprocessor assessment
│   └── audit-trail-spec.md          # Tamper-evident logging
├── PRIVACY.md                       # Top-level privacy notice
├── SECURITY.md                      # Vulnerability disclosure & controls
├── CODE_OF_CONDUCT.md               # Anti-discrimination, fairness
├── .github/workflows/pages.yml      # Auto-deploy to GitHub Pages
├── robots.txt
├── sitemap.xml
├── .gitignore
└── LICENSE
```

## Quick start

```bash
# 1) Clone & open
git clone https://github.com/<your-org>/cosmos-sport-arena.git
cd cosmos-sport-arena

# 2) Local preview (any static server)
python3 -m http.server 8080
# → http://localhost:8080

# 3) Push to your repo and enable GitHub Pages
#    Settings → Pages → Source: GitHub Actions
git add .
git commit -m "feat: initial Cosmos Sport Arena landing"
git push origin main
```

The included GitHub Actions workflow (`.github/workflows/pages.yml`) deploys automatically on every push to `main`.

## Deploy on a custom domain

1. Add `CNAME` file containing your domain (e.g. `arena.cosmos-sport.example.com`).
2. Configure DNS: `CNAME arena → <org>.github.io`.
3. Enable HTTPS in GitHub Pages settings (auto-cert via Let's Encrypt).
4. Update the `<link rel="canonical">` in `index.html` to your live URL.

## Compliance overview

| Area | Where |
|---|---|
| GDPR Article 13 disclosures | [PRIVACY.md](PRIVACY.md) · [docs/privacy-policy.html](docs/privacy-policy.html) |
| Article 30 ROPA | [docs/ropa-snippet.md](docs/ropa-snippet.md) |
| Article 32 security measures | [SECURITY.md](SECURITY.md) |
| Article 35 DPIA template | [docs/dpia-template.md](docs/dpia-template.md) |
| Data retention schedule | [docs/data-retention.md](docs/data-retention.md) |
| Equal treatment (Law 3304/2005) | [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) |
| Hellenic DPA reference | https://www.dpa.gr |

## Accessibility

- WCAG 2.1 Level AA color contrast.
- Keyboard navigable, visible focus.
- Reduced-motion media query honored.
- Semantic landmarks: `<header>`, `<nav>`, `<main>`-equivalent sections, `<footer>`.

## Security model (summary)

TLS 1.3 only · CSP locked down (no inline scripts in production) · MFA mandatory for admins · RBAC + ABAC · immutable audit log (12m) · encrypted backups (RPO 24h / RTO 8h) · pen-test before launch. Full details in [SECURITY.md](SECURITY.md).

## What this repo is **not**

This repo ships the **landing page + governance pack**. It does **not** include the production backend (auth, submission storage, scoring engine, livestream integration). Suggested production stack is documented separately and should be reviewed by the Company's CISO and DPO before go-live.

## Contributing

Internal contributors only at this stage. External pull requests are not accepted. Vulnerability reports → security@cosmos-sport.example.com (see [SECURITY.md](SECURITY.md)).

## License

[MIT](LICENSE) — for the static site assets in this repo. The Cosmos Sport name and marks are property of Cosmos Sport S.A.
