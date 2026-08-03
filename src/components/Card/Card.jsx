import { SUBTYPES } from '../../data/categories.js'
import { accentVars, rarityColor, rarityLabel } from '../../theme/themes.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './Card.css'

/**
 * Card — a catalog tile. Shows the real face-up art when the card is released,
 * otherwise its colour-matched card back. Below the art sits the reference
 * number and the name ("???" until the card is revealed). Released cards are
 * clickable and open the info window; unreleased cards are inert.
 */
export default function Card({ card, index = 0, onOpen }) {
  const { t } = useLang()
  const sub = SUBTYPES[card.subtype]
  const img = card.released ? card.front : card.back
  const name = card.released ? t(card.name) : t(UI.unknownName)
  const rColor = rarityColor(card.rarity)

  const open = () => card.released && onOpen?.(card)
  const onKey = (e) => {
    if (!card.released) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  }

  return (
    <div
      className={`card-slot ${card.released ? 'is-released' : 'is-locked'}`}
      style={{ ...accentVars(sub?.color), '--rarity': rColor, '--i': Math.min(index, 12) }}
    >
      <div
        className="card-tile"
        role={card.released ? 'button' : undefined}
        tabIndex={card.released ? 0 : undefined}
        aria-label={
          card.released
            ? `${name}, ${card.ref}. ${t(UI.close)}`
            : `${card.ref}, ${t(UI.unreleased)}`
        }
        onClick={open}
        onKeyDown={onKey}
      >
        <img className="card-tile__img" src={img} alt={name} loading="lazy" draggable="false" />
        <div className="card-tile__meta">
          {/* Rarity only on face-up cards, centre-bottom (Rev 1, Part 3 step 2). */}
          {card.released && card.rarity && (
            <span className="card-tile__rarity" style={{ '--rarity': rColor }}>
              {t(rarityLabel(card.rarity))}
            </span>
          )}
          {!card.released && <span className="card-tile__lock">{t(UI.unreleased)}</span>}
        </div>
      </div>

      <div className="card-slot__caption">
        <span className="card-slot__ref">{card.ref}</span>
        <span className={`card-slot__name ${card.released ? '' : 'is-unknown'}`}>{name}</span>
      </div>
    </div>
  )
}
