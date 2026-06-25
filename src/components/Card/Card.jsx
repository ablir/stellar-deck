import { useState } from 'react'
import { motion } from 'framer-motion'
import Smoke from '../Smoke/Smoke.jsx'
import { RARITY_COLORS, themeVars } from '../../theme/themes.js'
import './Card.css'

/**
 * Card — a single collectible. Two faces in a 3D flip container:
 *   - Front (shrouded): a silhouette behind dry-ice smoke, "tap to reveal".
 *   - Back  (revealed): full stat block, ability and flavour text.
 *
 * Clicking (or pressing Enter/Space) flips it. Theme variables are applied
 * inline so the card paints in its planet's aspect colours wherever it's used.
 */
export default function Card({ card, index = 0 }) {
  const [flipped, setFlipped] = useState(false)
  const rarityColor = RARITY_COLORS[card.rarity] ?? 'var(--accent)'

  const toggle = () => setFlipped((f) => !f)
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <motion.div
      className="card-slot"
      style={{ ...themeVars(card.aspect), '--rarity': rarityColor }}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`card ${flipped ? 'is-flipped' : ''}`}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${card.name}, ${card.rarity} ${card.type}. ${
          flipped ? 'Showing details.' : 'Tap to reveal.'
        }`}
        onClick={toggle}
        onKeyDown={onKey}
      >
        {/* ---------- FRONT: shrouded ---------- */}
        <div className="card__face card__face--front">
          <div className="card__frame">
            <div className="card__shroud">
              <span className="card__glyph">{card.glyph}</span>
              <div className="card__noise" />
            </div>
            <Smoke density={8} height="62%" />
            <div className="card__front-meta">
              <span className="card__rarity-tag" style={{ color: rarityColor }}>
                {card.rarity}
              </span>
              <span className="card__hint">tap to reveal</span>
            </div>
          </div>
        </div>

        {/* ---------- BACK: revealed ---------- */}
        <div className="card__face card__face--back">
          <div className="card__frame card__frame--revealed">
            <header className="card__header">
              <span className="card__cost" title="Cost">
                {card.cost}
              </span>
              <h3 className="card__name">{card.name}</h3>
            </header>

            <div className="card__art" aria-hidden="true">
              <span className="card__art-glyph">{card.glyph}</span>
              <Smoke density={5} height="45%" intensity={0.6} />
            </div>

            <div className="card__typeline">
              <span>{card.type}</span>
              <span className="card__origin">{card.planetName}</span>
            </div>

            <p className="card__ability">{card.ability}</p>
            <p className="card__flavor">{card.flavor}</p>

            <footer className="card__stats">
              <span className="card__stat card__stat--pow" title="Power">
                ⚔ {card.power}
              </span>
              <span className="card__stat card__stat--def" title="Defense">
                ⛨ {card.defense}
              </span>
            </footer>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
