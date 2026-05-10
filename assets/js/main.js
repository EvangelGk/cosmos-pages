/* =====================================================
   Cosmos Sport Arena — main.js
   - i18n EL/EN toggle (no external libs)
   - Cookie banner with granular consent
   - No third-party trackers loaded by default (privacy-by-default)
   - All state in-memory + localStorage for consent persistence
===================================================== */

(function () {
  'use strict';

  // ---------- i18n strings ----------
  const i18n = {
    el: {
      'meta.description': 'Cosmos Sport Arena — Πλατφόρμα ταλέντου και διαγωνισμών στρατηγικής της Cosmos Sport. GDPR-compliant, ISO 27001/27701-aligned.',
      'nav.concept': 'Concept',
      'nav.how': 'Πώς λειτουργεί',
      'nav.challenge': '1ος Διαγωνισμός',
      'nav.leaderboard': 'Leaderboard',
      'nav.trust': 'Trust & Compliance',
      'cta.apply': 'Συμμετοχή',

      'hero.eyebrow': 'HR · Talent Acquisition · Cosmos Sport',
      'hero.title': 'Cosmos Sport Arena',
      'hero.lead': 'Η πλατφόρμα διαγωνισμών στρατηγικής & ταλέντου της Cosmos Sport. Δείξε τι αξίζεις σε πραγματικά business challenges. Κερδίσε αναγνώριση. Μπες στο pipeline μας.',
      'hero.cta1': 'Δες το brief',
      'hero.cta2': 'Πολιτική & Ασφάλεια',
      'badge.gdpr': 'Πλήρως συμβατό',
      'badge.iso': 'Aligned',
      'badge.a11y': 'Προσβάσιμο',

      'concept.kicker': 'Concept & Αρχιτεκτονική',
      'concept.title': 'Ένα ανεξάρτητο microsite, συνδεδεμένο με την Cosmos Sport',
      'concept.lead': 'Έξι πυλώνες που κάνουν την Arena περισσότερο από έναν διαγωνισμό: ένα live employer-branding asset.',
      'concept.c1.t': 'Live Leaderboard', 'concept.c1.d': 'Real-time κατάταξη ανά challenge, με ορατότητα στις κορυφαίες υποβολές.',
      'concept.c2.t': 'Profiles & Portfolio', 'concept.c2.d': 'Κάθε συμμετέχων χτίζει portfolio υποβολών — μένει ως career asset.',
      'concept.c3.t': 'Countdown Timer', 'concept.c3.d': 'Αντίστροφη μέτρηση για κάθε challenge — διαφάνεια στο deadline.',
      'concept.c4.t': 'Public & Private Rounds', 'concept.c4.d': 'Ανοιχτή φάση προβολής + κλειστή φάση αξιολόγησης από εμπειρογνώμονες.',
      'concept.c5.t': 'Analytics Dashboard', 'concept.c5.d': 'Per-candidate analytics για το HR — με anonymized aggregations για το κοινό.',
      'concept.c6.t': 'Badges & Recognition', 'concept.c6.d': 'Σύστημα badges για κορυφαίες επιδόσεις — fast-track στο talent pipeline.',

      'how.kicker': 'Λειτουργία',
      'how.title': 'Από το brief στο livestream — σε 5 βήματα',
      'how.s1.t': 'Άνοιγμα Competition', 'how.s1.d': 'Δημοσιεύεται θεματολογία, διάρκεια, deliverables, κριτήρια.',
      'how.s2.t': 'Εγγραφή & Brief', 'how.s2.d': 'Συμμετέχοντες κάνουν εγγραφή, λαμβάνουν brief, δηλώνουν ατομική/ομαδική συμμετοχή.',
      'how.s3.t': 'Υποβολή εντός Deadline', 'how.s3.d': 'Δουλειά ατομικά ή σε team — υποβολή λύσης μέσα στο countdown.',
      'how.s4.t': 'Αξιολόγηση από Επιτροπή', 'how.s4.d': 'Μεικτή επιτροπή: εσωτερικά στελέχη Cosmos Sport + εξωτερικοί experts.',
      'how.s5.t': 'Live Announcement', 'how.s5.d': 'Αποτελέσματα live σε streaming event — networking + offers.',

      'ch.kicker': '1ος Διαγωνισμός · 2025',
      'ch.title': 'The Next Play — Cosmos Sport Commercial Strategy Challenge',
      'ch.lead': 'Σχεδίασε τη στρατηγική που θα φέρει τον αθλητισμό πιο κοντά στον Έλληνα καταναλωτή.',
      'ch.brief.t': 'Brief',
      'ch.brief.d': 'Ανάπτυξε ολοκληρωμένη εμπορική στρατηγική για ένα τμήμα της Cosmos Sport (π.χ. κατηγορία Running) για το επόμενο 12μηνο. Η πρόταση πρέπει να καλύπτει:',
      'ch.brief.l1': 'Ανάλυση αγοράς & ανταγωνιστικού τοπίου',
      'ch.brief.l2': 'Τμηματοποίηση πελατολογίου (segmentation)',
      'ch.brief.l3': 'Στρατηγική τιμολόγησης & προωθητικών ενεργειών',
      'ch.brief.l4': 'Go-to-market plan (online + offline)',
      'ch.brief.l5': 'KPIs μέτρησης επιτυχίας & χρονοδιάγραμμα υλοποίησης',
      'ch.meta.format': 'Format', 'ch.meta.format.v': 'Ατομικά ή ομάδες έως 4',
      'ch.meta.deliverable': 'Deliverable', 'ch.meta.deliverable.v': 'PDF strategy deck (max 15 σελίδες)',
      'ch.meta.deadline': 'Deadline',
      'ch.meta.prize': 'Recognition', 'ch.meta.prize.v': 'Fast-track interview + badge',
      'ch.cta': 'Δήλωσε συμμετοχή',

      'lb.kicker': 'Live Leaderboard — preview',
      'lb.title': 'Διαφάνεια στην κατάταξη, ιδιωτικότητα στα δεδομένα',
      'lb.lead': 'Δημόσια εμφανίζεται μόνο το display name (ψευδώνυμο επιλογής συμμετέχοντα) και το score. Καμία ταυτοποίηση χωρίς ρητή συγκατάθεση.',
      'lb.col.name': 'Display Name', 'lb.col.team': 'Team', 'lb.col.score': 'Score', 'lb.col.badge': 'Badge',
      'lb.hint': '* Mock data για επίδειξη UI. Καμία πραγματική προσωπική πληροφορία δεν αποκαλύπτεται.',

      'trust.kicker': 'Trust · Compliance · Governance',
      'trust.title': 'Σχεδιασμένη με Privacy & Security by Design',
      'trust.lead': 'Η Arena είναι HR-grade πλατφόρμα. Επεξεργαζόμαστε υποψηφιότητες σύμφωνα με τον Κανονισμό (ΕΕ) 2016/679 (GDPR), τον Ν. 4624/2019, την οδηγία ΑΠΔΠΧ για διαδικασίες επιλογής προσωπικού, και τον Ν. 3304/2005 περί ίσης μεταχείρισης.',
      'trust.t1': 'Νομική βάση επεξεργασίας',
      'trust.t1.l1': 'Άρθρο 6(1)(b) GDPR — εκτέλεση προσυμβατικών μέτρων (αίτηση συμμετοχής).',
      'trust.t1.l2': 'Άρθρο 6(1)(a) GDPR — συγκατάθεση για marketing & talent pool retention.',
      'trust.t1.l3': 'Άρθρο 6(1)(f) GDPR — έννομο συμφέρον για ασφάλεια & fraud prevention.',
      'trust.t2': 'Δικαιώματα υποκειμένου',
      'trust.t2.l1': 'Πρόσβαση, διόρθωση, διαγραφή, περιορισμός, φορητότητα, εναντίωση.',
      'trust.t2.l2': 'Ανάκληση συγκατάθεσης ανά πάσα στιγμή.',
      'trust.t2.l3': 'Καταγγελία στην ΑΠΔΠΧ (www.dpa.gr).',
      'trust.t3': 'Διατήρηση δεδομένων',
      'trust.t3.l1': 'Μη επιλεγέντες υποψήφιοι: 6 μήνες μετά τον διαγωνισμό (default).',
      'trust.t3.l2': 'Talent pool με συγκατάθεση: έως 24 μήνες, με ετήσια ανανέωση.',
      'trust.t3.l3': 'Logs ασφαλείας: 12 μήνες (έννομο συμφέρον).',
      'trust.t4': 'Τεχνικά & οργανωτικά μέτρα',
      'trust.t4.l1': 'TLS 1.3 in transit, AES-256 at rest, hashed credentials (Argon2id).',
      'trust.t4.l2': 'RBAC, MFA για admins, principle of least privilege.',
      'trust.t4.l3': 'Audit logs immutable, retained 12m, SIEM-monitored.',
      'trust.t4.l4': 'Backups κρυπτογραφημένα, RPO 24h / RTO 8h.',
      'trust.t5': 'Ίση μεταχείριση & fairness',
      'trust.t5.l1': 'Anonymized first-pass review (όνομα/φύλο/ηλικία masked).',
      'trust.t5.l2': 'Δομημένα κριτήρια αξιολόγησης — ίδια για όλους.',
      'trust.t5.l3': 'Δικαίωμα ανθρώπινης παρέμβασης σε αυτοματοποιημένη βαθμολογία (Άρθρο 22 GDPR).',
      'trust.t6': 'Governance Pack',
      'trust.t6.l1': 'Privacy Policy', 'trust.t6.l2': 'Terms of Participation',
      'trust.t6.l3': 'DPIA Template', 'trust.t6.l4': 'ROPA (Άρθρο 30)',
      'trust.t6.l5': 'ISO 27001/27701 Matrix', 'trust.t6.l6': 'Audit Trail Spec',
      'trust.dpo': 'Data Protection Officer (DPO):',

      'apply.title': 'Έτοιμος να μπεις στην Arena;',
      'apply.lead': 'Δήλωσε τα στοιχεία σου. Η συμμετοχή σου θα επεξεργαστεί σύμφωνα με την Πολιτική Απορρήτου.',
      'apply.f.name': 'Ονοματεπώνυμο', 'apply.f.email': 'Email', 'apply.f.uni': 'Πανεπιστήμιο / Εταιρία',
      'apply.f.c1': 'Έχω διαβάσει την Πολιτική Απορρήτου και συναινώ στην επεξεργασία των δεδομένων μου για τον σκοπό του διαγωνισμού.',
      'apply.f.c2': '(Προαιρετικά) Επιθυμώ να διατηρηθούν τα στοιχεία μου στο talent pool έως 24 μήνες για μελλοντικές ευκαιρίες.',
      'apply.f.submit': 'Υποβολή',
      'apply.f.note': '* Δεν υποβάλλεται πραγματικά — demo form. Σε production συνδέεται με backend με CSRF/Recaptcha/rate-limiting.',

      'footer.tag': 'Talent · Strategy · Sport',
      'footer.l1': 'Privacy Policy', 'footer.l2': 'Terms', 'footer.l3': 'Security',
      'footer.l4': 'Code of Conduct', 'footer.l5': 'Data Retention',
      'footer.copy': '© 2025 Cosmos Sport — Cosmos Sport Arena. All rights reserved.',

      'ck.title': 'Cookies & Συγκατάθεση',
      'ck.body': 'Χρησιμοποιούμε αναγκαία cookies για τη λειτουργία του site. Με τη συγκατάθεσή σου, μπορούμε να ενεργοποιήσουμε analytics & marketing cookies. Μπορείς να αλλάξεις την επιλογή σου ανά πάσα στιγμή.',
      'ck.f1': 'Αναγκαία (πάντα ενεργά)', 'ck.f2': 'Analytics', 'ck.f3': 'Marketing',
      'ck.reject': 'Απόρριψη μη-αναγκαίων', 'ck.accept': 'Αποθήκευση επιλογών'
    },

    en: {
      'meta.description': 'Cosmos Sport Arena — Talent acquisition & strategy competition platform by Cosmos Sport. GDPR-compliant, ISO 27001/27701-aligned.',
      'nav.concept': 'Concept', 'nav.how': 'How it works', 'nav.challenge': 'First Challenge',
      'nav.leaderboard': 'Leaderboard', 'nav.trust': 'Trust & Compliance', 'cta.apply': 'Apply',

      'hero.eyebrow': 'HR · Talent Acquisition · Cosmos Sport',
      'hero.title': 'Cosmos Sport Arena',
      'hero.lead': 'The strategy & talent competition platform of Cosmos Sport. Prove your value on real business challenges. Earn recognition. Get into our pipeline.',
      'hero.cta1': 'See the brief', 'hero.cta2': 'Policy & Security',
      'badge.gdpr': 'Fully compliant', 'badge.iso': 'Aligned', 'badge.a11y': 'Accessible',

      'concept.kicker': 'Concept & Architecture',
      'concept.title': 'A standalone microsite, linked to Cosmos Sport',
      'concept.lead': 'Six pillars that make Arena more than a contest: a live employer-branding asset.',
      'concept.c1.t': 'Live Leaderboard', 'concept.c1.d': 'Real-time ranking per challenge with visibility on top submissions.',
      'concept.c2.t': 'Profiles & Portfolio', 'concept.c2.d': 'Each participant builds a portfolio — kept as a career asset.',
      'concept.c3.t': 'Countdown Timer', 'concept.c3.d': 'Per-challenge countdown — full deadline transparency.',
      'concept.c4.t': 'Public & Private Rounds', 'concept.c4.d': 'Open showcase phase + closed expert evaluation phase.',
      'concept.c5.t': 'Analytics Dashboard', 'concept.c5.d': 'Per-candidate analytics for HR; anonymized aggregations for the public.',
      'concept.c6.t': 'Badges & Recognition', 'concept.c6.d': 'Badges for top performances — fast-track to the talent pipeline.',

      'how.kicker': 'How it works',
      'how.title': 'From brief to livestream — in 5 steps',
      'how.s1.t': 'Competition Opens', 'how.s1.d': 'Theme, duration, deliverables and criteria are published.',
      'how.s2.t': 'Sign-up & Brief', 'how.s2.d': 'Participants register, receive the brief, declare solo/team participation.',
      'how.s3.t': 'Submit by Deadline', 'how.s3.d': 'Work solo or in a team — submit within the countdown.',
      'how.s4.t': 'Panel Evaluation', 'how.s4.d': 'Mixed panel: Cosmos Sport executives + external experts.',
      'how.s5.t': 'Live Announcement', 'how.s5.d': 'Results live on a streaming event — networking + offers.',

      'ch.kicker': 'First Challenge · 2025',
      'ch.title': 'The Next Play — Cosmos Sport Commercial Strategy Challenge',
      'ch.lead': 'Design the strategy that brings sport closer to the Greek consumer.',
      'ch.brief.t': 'Brief',
      'ch.brief.d': 'Develop a complete commercial strategy for one Cosmos Sport segment (e.g. Running) for the next 12 months. The proposal must cover:',
      'ch.brief.l1': 'Market & competitive landscape analysis',
      'ch.brief.l2': 'Customer segmentation',
      'ch.brief.l3': 'Pricing & promotional strategy',
      'ch.brief.l4': 'Go-to-market plan (online + offline)',
      'ch.brief.l5': 'Success KPIs & implementation timeline',
      'ch.meta.format': 'Format', 'ch.meta.format.v': 'Solo or teams up to 4',
      'ch.meta.deliverable': 'Deliverable', 'ch.meta.deliverable.v': 'PDF strategy deck (max 15 pages)',
      'ch.meta.deadline': 'Deadline',
      'ch.meta.prize': 'Recognition', 'ch.meta.prize.v': 'Fast-track interview + badge',
      'ch.cta': 'Apply now',

      'lb.kicker': 'Live Leaderboard — preview',
      'lb.title': 'Transparent ranking, private data',
      'lb.lead': 'Only the participant-chosen display name and score are shown publicly. No identification without explicit consent.',
      'lb.col.name': 'Display Name', 'lb.col.team': 'Team', 'lb.col.score': 'Score', 'lb.col.badge': 'Badge',
      'lb.hint': '* Mock data for UI demo. No real personal information is exposed.',

      'trust.kicker': 'Trust · Compliance · Governance',
      'trust.title': 'Designed with Privacy & Security by Design',
      'trust.lead': 'Arena is an HR-grade platform. We process applications under Regulation (EU) 2016/679 (GDPR), Greek Law 4624/2019, the Hellenic DPA guidance for personnel selection, and Law 3304/2005 on equal treatment.',
      'trust.t1': 'Lawful basis',
      'trust.t1.l1': 'Article 6(1)(b) GDPR — pre-contractual measures (application).',
      'trust.t1.l2': 'Article 6(1)(a) GDPR — consent for marketing & talent pool retention.',
      'trust.t1.l3': 'Article 6(1)(f) GDPR — legitimate interest for security & fraud prevention.',
      'trust.t2': 'Data subject rights',
      'trust.t2.l1': 'Access, rectification, erasure, restriction, portability, objection.',
      'trust.t2.l2': 'Withdraw consent at any time.',
      'trust.t2.l3': 'Lodge a complaint with the Hellenic DPA (www.dpa.gr).',
      'trust.t3': 'Data retention',
      'trust.t3.l1': 'Non-selected candidates: 6 months after the contest (default).',
      'trust.t3.l2': 'Talent pool (with consent): up to 24 months, annually re-confirmed.',
      'trust.t3.l3': 'Security logs: 12 months (legitimate interest).',
      'trust.t4': 'Technical & organizational measures',
      'trust.t4.l1': 'TLS 1.3 in transit, AES-256 at rest, hashed credentials (Argon2id).',
      'trust.t4.l2': 'RBAC, MFA for admins, principle of least privilege.',
      'trust.t4.l3': 'Immutable audit logs, retained 12m, SIEM-monitored.',
      'trust.t4.l4': 'Encrypted backups, RPO 24h / RTO 8h.',
      'trust.t5': 'Equal treatment & fairness',
      'trust.t5.l1': 'Anonymized first-pass review (name/gender/age masked).',
      'trust.t5.l2': 'Structured evaluation criteria — identical for everyone.',
      'trust.t5.l3': 'Right to human intervention on automated scoring (GDPR Art. 22).',
      'trust.t6': 'Governance Pack',
      'trust.t6.l1': 'Privacy Policy', 'trust.t6.l2': 'Terms of Participation',
      'trust.t6.l3': 'DPIA Template', 'trust.t6.l4': 'ROPA (Article 30)',
      'trust.t6.l5': 'ISO 27001/27701 Matrix', 'trust.t6.l6': 'Audit Trail Spec',
      'trust.dpo': 'Data Protection Officer (DPO):',

      'apply.title': 'Ready to step into the Arena?',
      'apply.lead': 'Submit your details. Your application will be processed under our Privacy Policy.',
      'apply.f.name': 'Full name', 'apply.f.email': 'Email', 'apply.f.uni': 'University / Company',
      'apply.f.c1': 'I have read the Privacy Policy and consent to the processing of my data for the contest.',
      'apply.f.c2': '(Optional) I want my data retained in the talent pool for up to 24 months for future opportunities.',
      'apply.f.submit': 'Submit',
      'apply.f.note': '* Not submitted in this demo. In production it connects to a backend with CSRF/Recaptcha/rate-limiting.',

      'footer.tag': 'Talent · Strategy · Sport',
      'footer.l1': 'Privacy Policy', 'footer.l2': 'Terms', 'footer.l3': 'Security',
      'footer.l4': 'Code of Conduct', 'footer.l5': 'Data Retention',
      'footer.copy': '© 2025 Cosmos Sport — Cosmos Sport Arena. All rights reserved.',

      'ck.title': 'Cookies & Consent',
      'ck.body': 'We use necessary cookies for site operation. With your consent, we can enable analytics & marketing cookies. You can change your choice at any time.',
      'ck.f1': 'Necessary (always on)', 'ck.f2': 'Analytics', 'ck.f3': 'Marketing',
      'ck.reject': 'Reject non-necessary', 'ck.accept': 'Save preferences'
    }
  };

  // ---------- Apply translations ----------
  function applyLang(lang) {
    const dict = i18n[lang] || i18n.el;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Meta description
    const md = document.querySelector('meta[name="description"]');
    if (md && dict['meta.description']) md.setAttribute('content', dict['meta.description']);

    // Toggle visual state
    document.querySelectorAll('[data-lang-label]').forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-lang-label') === lang);
    });
    const tgl = document.getElementById('langToggle');
    if (tgl) tgl.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  }

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem('csa.lang');
      if (saved === 'el' || saved === 'en') return saved;
    } catch (_) {}
    const nav = (navigator.language || 'el').toLowerCase();
    return nav.startsWith('el') ? 'el' : 'en';
  }

  // ---------- Cookie banner ----------
  function readConsent() {
    try {
      const raw = localStorage.getItem('csa.consent');
      return raw ? JSON.parse(raw) : null;
    } catch (_) { return null; }
  }
  function writeConsent(obj) {
    try { localStorage.setItem('csa.consent', JSON.stringify({ ...obj, ts: Date.now() })); } catch (_) {}
  }

  function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;

    const existing = readConsent();
    if (!existing) banner.hidden = false;

    const accept = document.getElementById('ckAccept');
    const reject = document.getElementById('ckReject');
    const ana = document.getElementById('ckAnalytics');
    const mkt = document.getElementById('ckMarketing');

    if (existing) {
      if (ana) ana.checked = !!existing.analytics;
      if (mkt) mkt.checked = !!existing.marketing;
    }

    accept && accept.addEventListener('click', () => {
      writeConsent({
        necessary: true,
        analytics: !!(ana && ana.checked),
        marketing: !!(mkt && mkt.checked)
      });
      banner.hidden = true;
      // No third-party scripts are auto-loaded — implementer hooks here only after consent.
    });

    reject && reject.addEventListener('click', () => {
      writeConsent({ necessary: true, analytics: false, marketing: false });
      banner.hidden = true;
    });
  }

  // ---------- Form (demo) ----------
  function initForm() {
    const form = document.querySelector('.apply-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Demo only — no transmission. In production: POST to hardened backend
      // with CSRF token, rate limit, server-side validation, and audit logging.
      const lang = document.documentElement.getAttribute('data-lang') || 'el';
      const msg = lang === 'en'
        ? 'Demo only — no data was submitted.'
        : 'Demo — δεν στάλθηκαν δεδομένα.';
      alert(msg);
    });
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    const initial = detectInitialLang();
    applyLang(initial);

    const tgl = document.getElementById('langToggle');
    tgl && tgl.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-lang') || 'el';
      const next = cur === 'el' ? 'en' : 'el';
      applyLang(next);
      try { localStorage.setItem('csa.lang', next); } catch (_) {}
    });

    initCookieBanner();
    initForm();
  });
})();
