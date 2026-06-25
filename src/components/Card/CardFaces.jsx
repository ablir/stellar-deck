import { RARITY_COLORS } from '../../theme/themes.js'

/**
 * Shared face markup so the grid tile (<Card/>) and the focused overlay
 * (<CardModal/>) render the exact same card, just at different sizes.
 *
 * Note: the dry-ice fog lives ONLY in the focused view (<CardModal/>), as a
 * free-floating overlay — never on the gallery tiles.
 */

export function CardFront({ card }) {
  const rarityColor = RARITY_COLORS[card.rarity] ?? 'var(--accent)'
  return (
    <div className="card__frame">
      <div className="card__shroud">
        <span className="card__glyph">{card.glyph}</span>
        <div className="card__noise" />
      </div>
      <div className="card__front-meta">
        <span className="card__rarity-tag" style={{ color: rarityColor }}>
          {card.rarity}
        </span>
        <span className="card__hint">tap to reveal</span>
      </div>
    </div>
  )
}

export function CardBack({ card }) {
  return (
    <div className="card__frame card__frame--revealed">
      <header className="card__header">
        <span className="card__cost" title="Cost">
          {card.cost}
        </span>
        <h3 className="card__name">{card.name}</h3>
      </header>

      <div className="card__art" aria-hidden="true">
        <span className="card__art-glyph">{card.glyph}</span>
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
  )
}
