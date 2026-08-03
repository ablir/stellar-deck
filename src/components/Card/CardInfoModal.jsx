import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SUBTYPES } from '../../data/categories.js'
import { accentVars, rarityColor } from '../../theme/themes.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './CardInfoModal.css'

/**
 * CardInfoModal — a light window that opens ON TOP of the current page when a
 * released card is clicked. Shows the enlarged art beside a summary panel
 * (name, rarity, stats, ability, lore) so the tiny catalog tiles never need to
 * be read directly. Close via the backdrop, the ✕ button, or Escape.
 *
 * Deliberately lightweight: no flip, no auto-reveal, no fog — just a scale-in.
 */
export default function CardInfoModal({ card, onClose }) {
  const { t } = useLang()
  const sub = SUBTYPES[card.subtype]
  const rColor = rarityColor(card.rarity)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="cardinfo"
      style={{ ...accentVars(sub?.color), '--rarity': rColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t(card.name)}
    >
      <div className="cardinfo__backdrop" />

      <motion.div
        className="cardinfo__window"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      >
        <button className="cardinfo__close" onClick={onClose} aria-label={t(UI.close)}>
          ✕
        </button>

        <div className="cardinfo__art">
          <img src={card.front} alt={t(card.name)} draggable="false" />
        </div>

        <div className="cardinfo__panel">
          <span className="cardinfo__kicker">
            {t(sub?.groupLabel)} · {t(sub?.label)}
          </span>
          <h3 className="cardinfo__name">{t(card.name)}</h3>

          <div className="cardinfo__meta">
            <span className="cardinfo__rarity">{card.rarity}</span>
            <span className="cardinfo__ref">{card.ref}</span>
          </div>

          {card.stats && (
            <div className="cardinfo__stats">
              <div className="stat">
                <span className="stat__label">{t(UI.power)}</span>
                <span className="stat__val">{card.stats.power}</span>
              </div>
              <div className="stat">
                <span className="stat__label">{t(UI.defense)}</span>
                <span className="stat__val">{card.stats.defense}</span>
              </div>
              <div className="stat">
                <span className="stat__label">{t(UI.cost)}</span>
                <span className="stat__val">{card.stats.cost}</span>
              </div>
            </div>
          )}

          {card.ability && (
            <div className="cardinfo__block">
              <span className="cardinfo__block-label">{t(UI.ability)}</span>
              <p className="cardinfo__ability">{t(card.ability)}</p>
            </div>
          )}

          {card.lore && (
            <div className="cardinfo__block">
              <span className="cardinfo__block-label">{t(UI.lore)}</span>
              <p className="cardinfo__lore">{t(card.lore)}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
