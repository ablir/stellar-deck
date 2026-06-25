import { motion } from 'framer-motion'
import { CardFront } from './CardFaces.jsx'
import { RARITY_COLORS, themeVars } from '../../theme/themes.js'
import './Card.css'

/**
 * Card — the grid tile. It shows the shrouded front (silhouette + dry-ice
 * smoke). Clicking does NOT flip in place; it asks the gallery to open the
 * focused view, where the card flies forward, enlarges and flips while smoke
 * billows from beneath it.
 */
export default function Card({ card, index = 0, onOpen }) {
  const rarityColor = RARITY_COLORS[card.rarity] ?? 'var(--accent)'

  const open = () => onOpen?.(card)
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
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
        className="card"
        role="button"
        tabIndex={0}
        aria-label={`${card.name}, ${card.rarity} ${card.type}. Tap to reveal.`}
        onClick={open}
        onKeyDown={onKey}
      >
        <div className="card__face card__face--front">
          <CardFront card={card} />
        </div>
      </div>
    </motion.div>
  )
}
