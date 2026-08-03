# Chains of Innocence

Official website for **Chains of Innocence**, a collectible card game (France-first
release, bilingual FR/EN). Visitors browse the card catalog by category, explore the
five worlds that orbit the Black Hole, and open any released card in a focused info
window.

## Stack

- **React + Vite**
- **react-router-dom** (HashRouter) for routing
- **framer-motion** for entrance / overlay transitions
- Pure CSS + SVG for the starfield, planet scene, and sigil — no canvas loop
- Self-hosted fonts (Orbitron + Exo 2, SIL OFL) under `src/assets/fonts/`

## Architecture

```
src/
  i18n/                        # bilingual FR/EN layer (default: French)
  data/
    categories.js              # card categories -> left-rail nav + per-card tint
    cards.js                   # the card catalog (released art vs. card-back)
    planets.js                 # the five worlds (lore axis)
  theme/themes.js              # rarity colours + accent CSS variables
  components/
    Layout/                    # persistent shell (rail + stage) around <Outlet/>
    SidePanel/                 # category rail (desktop) / drawer (mobile)
    Home/                      # five-planet "black hole" landing
    Gallery/                   # catalog grid
    Card/                      # card tile + focused info modal
    Sigil/ StarfieldBackground/
    pages/                     # Contact / Shop / PlanetLore stubs
```

Content is authored as `{ fr, en }` objects and resolved through `useLang().t(...)`.
Each card is tinted by its category's frame colour via `accentVars()`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
`dist/`. The Vite `base` is `/` (served from the domain root); if you deploy to a
GitHub Pages project subpath instead, set `base` to `/<repo>/` in `vite.config.js`.

---

_Round 1 (core restructure). Planet lore pages, the contact page, and the shop are
stubbed; card copy, rarities, and remaining art are placeholders pending final content._
