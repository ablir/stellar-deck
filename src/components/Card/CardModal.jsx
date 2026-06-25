import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CardFront, CardBack } from './CardFaces.jsx'
import Fog from '../Fog/Fog.jsx'
import { RARITY_COLORS, themeVars } from '../../theme/themes.js'
import './CardModal.css'

/**
 * CardModal — the focused ("forward") view of a card.
 *
 * On open the card flies toward the viewer and scales up; a beat later it
 * flips from its shrouded front to the revealed back, while a thick bank of
 * dry-ice smoke rises from BENEATH the card. The smoke is tinted with the
 * card's aspect colour (via the `--smoke` theme variable).
 *
 * Click the card to flip it back and forth; click the backdrop or press Esc
 * to close.
 */
export default function CardModal({ card, onClose }) {
  const [flipped, setFlipped] = useState(false)
  const rarityColor = RARITY_COLORS[card.rarity] ?? 'var(--accent)'

  // Auto-reveal shortly after the card has flown forward.
  useEffect(() => {
    const t = setTimeout(() => setFlipped(true), 420)
    return () => clearTimeout(t)
  }, [])

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="cardmodal"
      style={{ ...themeVars(card.aspect), '--rarity': rarityColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div className="cardmodal__backdrop" />

      <motion.div
        className="cardmodal__stage"
        // Click the stage (not just the card) shouldn't close.
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.45, y: 60, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.5, y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        <div
          className={`card card--focus ${flipped ? 'is-flipped' : ''}`}
          role="button"
          tabIndex={0}
          aria-label={`${card.name}. ${flipped ? 'Showing details.' : 'Revealing.'} Press Escape to close.`}
          onClick={() => setFlipped((f) => !f)}
        >
          <div className="card__face card__face--front">
            <CardFront card={card} />
          </div>
          <div className="card__face card__face--back">
            <CardBack card={card} />
          </div>
        </div>

        {/* Free-floating dry-ice fog: rises from below and drifts in FRONT of
            the card (not clipped inside it), shrouding its base. */}
        <div className="cardmodal__fog">
          <Fog count={28} size="24vmin" peak={0.5} />
        </div>

        <button className="cardmodal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </motion.div>
    </motion.div>
  )
}
