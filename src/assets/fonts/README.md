# Fonts — commercial-use licensing proof

Both typefaces used on the Chains of Innocence website are licensed under the
**SIL Open Font License, Version 1.1** (see `OFL.txt`), which explicitly permits
**commercial use**, embedding, and redistribution. The actual font files are kept in
this repository as proof of provenance.

| File | Family | Role | Copyright holder | Source | License |
|------|--------|------|------------------|--------|---------|
| `orbitron-latin.woff2` | Orbitron | Display / headings / wordmark | Copyright 2009 The Orbitron Project Authors (Matt McInerney) | https://fonts.google.com/specimen/Orbitron | SIL OFL 1.1 |
| `exo2-latin.woff2`, `exo2-latin-ext.woff2` | Exo 2 | Body text | Copyright 2013 The Exo 2 Project Authors (Natanael Gama) | https://fonts.google.com/specimen/Exo+2 | SIL OFL 1.1 |

Notes:
- Files are the **variable-font** woff2 delivered by Google Fonts; a single file per
  subset covers the full weight axis (Orbitron ships a `latin` subset only — it still
  covers French accented glyphs in U+00C0–00FF; Exo 2 adds a `latin-ext` subset).
- Self-hosted via `@font-face` in `src/styles/global.css`; no runtime CDN request is made.
- Under OFL 1.1 the fonts may be sold as part of a larger software/product bundle but
  **not** sold on their own. The website and physical cards are a permitted use.
