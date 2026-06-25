import { motion } from 'framer-motion'
import { THEMES, themeVars } from '../../theme/themes.js'
import './SidePanel.css'

/**
 * SidePanel — the navigation rail. Lists every planet as a "travel" target;
 * selecting one lifts the gallery and scene into that world. Each entry is
 * tinted with its own aspect colour so the rail doubles as a legend.
 */
export default function SidePanel({ planets, activeId, onSelect }) {
  return (
    <aside className="panel">
      <div className="panel__brand">
        <span className="panel__logo">✦</span>
        <div>
          <h1 className="panel__title">STELLAR&nbsp;DECK</h1>
          <p className="panel__subtitle">Planetary Card Gallery</p>
        </div>
      </div>

      <nav className="panel__nav" aria-label="Travel to planet">
        <span className="panel__nav-label">Navigation</span>
        {planets.map((planet) => {
          const active = planet.id === activeId
          const theme = THEMES[planet.aspect]
          return (
            <button
              key={planet.id}
              className={`planet-link ${active ? 'is-active' : ''}`}
              style={themeVars(planet.aspect)}
              onClick={() => onSelect(planet.id)}
              aria-current={active ? 'true' : undefined}
            >
              {active && (
                <motion.span
                  layoutId="planet-active"
                  className="planet-link__halo"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="planet-link__orb" />
              <span className="planet-link__text">
                <span className="planet-link__name">{planet.name}</span>
                <span className="planet-link__aspect">{theme.label}</span>
              </span>
              <span className="planet-link__count">{planet.cards.length}</span>
            </button>
          )
        })}
      </nav>

      <footer className="panel__footer">
        <span>3 worlds · {planets.reduce((n, p) => n + p.cards.length, 0)} cards</span>
        <span className="panel__hint">click a card to reveal it</span>
      </footer>
    </aside>
  )
}
