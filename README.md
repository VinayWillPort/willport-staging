# WILLPORT staging — React rebuild

Review environment for the **WILLPORTtrust WordPress Developer Change Sheet** (prepared 23 Aug 2026),
standing in until WordPress staging is available.

All 12 production pages, rebuilt in Next.js with willport.com's design tokens
(Roboto, brand green `#06653E`, text `#333333`, tints `#EAF6FA` / `#ECF2FC` / `#E4FEF4`).

## The two views

Toggle in the black bar at the top of every page.

- **Review view** — all 41 changes, held copy visible with a badge naming its required approvers.
- **Production view** — only the 13 items cleared to ship. Held copy is removed from the DOM entirely,
  which is the §11 QA evidence that unapproved copy is absent from production HTML.

## Badge meanings

| Badge | Meaning |
|---|---|
| `CLEARED FOR PRODUCTION` | Ships on release day |
| `HOLD — COPY NOT APPROVED` | Built; copy awaits named approvers |
| `BUILD HIDDEN — DO NOT PUBLISH` | Built on staging only |
| `BLOCKED — FACTS NOT SUPPLIED` | Waiting on the §10 fact list |
| `RETIRED TERMS ON THIS PAGE` | Retired vocabulary on a page the change sheet never scoped |

## Run

```bash
npm install
npm run dev
```

## Deploy

```bash
vercel --prod
```

Set `STAGING_USER` and `STAGING_PASS` in Vercel env vars to enable the password gate
(unset locally = open). `noindex` is enforced in both `next.config.mjs` and page metadata.

## Known gaps

- No form destination is wired (§8.1 holds the form pending approved consent text).
- Video placeholders — no approved asset supplied (§8.2).
- No FAQPage schema — §6 permits it only after approved answers are live in production.
- Analytics push to `window.dataLayer` but no GTM container is loaded on staging.
