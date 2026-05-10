# Data Retention Schedule — Cosmos Sport Arena

**Owner:** DPO · **Review cadence:** Annual · **Aligned to:** GDPR Art. 5(1)(e), Law 4624/2019, Hellenic DPA Guidance for personnel selection.

| ID | Data class | Retention | Trigger | Disposal method | Lawful basis |
|---|---|---|---|---|---|
| R-01 | Application data, non-selected, no talent-pool consent | 6 months | End-of-contest | Crypto-erase + DB row delete | 6(1)(b) |
| R-02 | Talent pool entries (with consent) | Up to 24 months | Last activity / annual re-confirmation | Crypto-erase | 6(1)(a) |
| R-03 | Selected → hired candidates | Per HR record retention (typically 5–10 years post-employment) | Termination of employment | Per HR policy | 6(1)(b)/(c) |
| R-04 | Submissions (winning) | 24 months for showcase, then archived anonymized | End of marketing window | Anonymization | 6(1)(f) + consent |
| R-05 | Submissions (non-winning) | Same as R-01/R-02 | Same as application data | Same | Same |
| R-06 | Jury scores & comments | 12 months post-contest | End-of-contest + appeals window | Hash-archived for audit | 6(1)(f), 6(1)(c) |
| R-07 | Consent records | Lifetime of relationship + 5 years | End of relationship | Archived in WORM bucket, then deleted | 6(1)(c) — proof of consent |
| R-08 | Security & access logs | 12 months | Log creation | Auto-rotation, encrypted destruction | 6(1)(f) |
| R-09 | Backups | 30 days rolling, encrypted | Backup creation | Auto-overwrite | 6(1)(f) |
| R-10 | Marketing subscribers | Until withdrawal of consent | Withdrawal | Crypto-erase | 6(1)(a) |
| R-11 | Tax/financial records (prize payouts) | 10 years | End of fiscal year | Per Greek tax law (KFAS) | 6(1)(c) |

## Disposal procedure
1. Quarterly retention sweep job identifies expired records.
2. Records are queued for crypto-erase (DB) and object delete (storage).
3. Backups containing the records age out within 30 days.
4. Disposal is logged in the immutable audit trail (WORM).
5. DPO signs off on quarterly disposal report.

## Exceptions
Legal holds (litigation, regulatory inquiry) suspend the schedule for affected records. Holds are documented and lifted only with DPO + Legal sign-off.
