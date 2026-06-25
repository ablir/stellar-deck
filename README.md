# Stellar Deck — Planetary Card Gallery

A showcase site for a planet-themed collectible card game. Three worlds, each
built around an **aspect** — **Tech**, **Mystical**, and **Beastial** — with
animations tuned to match. Travel between planets from the side panel; click any
card to flip it open. Each card sits shrouded behind a rising **dry-ice smoke**
effect until revealed.

**Live:** https://ablirjm.github.io/stellar-deck/

## Stack

- **React + Vite**
- **framer-motion** for travel / entrance transitions
- Pure CSS + SVG (`feTurbulence` displacement) for the smoke, starfield, and
  per-aspect planet scenes — no canvas loop, so it stays light.

## Architecture

Components are organised one-folder-per-component for reuse:

```
src/
  data/planets.js              # planets + cards (single source of truth)
  theme/themes.js              # per-aspect design tokens -> CSS variables
  styles/global.css            # resets + base variables
  components/
    StarfieldBackground/       # parallax CSS starfield
    PlanetScene/               # animated ambient planet (varies by aspect)
    SidePanel/                 # planet navigation / travel rail
    Gallery/                   # responsive card grid + world header
    Card/                      # 3D flip card (shrouded front / revealed back)
    Smoke/                     # reusable dry-ice fog effect
```

The active planet's aspect is resolved to a set of CSS custom properties
(`themeVars`) applied at the `App` root and on each card, so a single set of
components renders every world in its own palette.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. The Vite `base` is set to `/stellar-deck/` to
match the repo name.

---

_Initial showcase phase — card data is illustrative and easily extended in
`src/data/planets.js`._
