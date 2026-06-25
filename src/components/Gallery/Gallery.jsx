import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '../Card/Card.jsx'
import CardModal from '../Card/CardModal.jsx'
import { THEMES } from '../../theme/themes.js'
import './Gallery.css'

/**
 * Gallery — the main stage. Shows the active planet's header plus a responsive
 * grid of its cards. Clicking a card opens the focused (forward) view via
 * <CardModal/>. Keyed on planet.id so the whole stage animates in on travel.
 */
export default function Gallery({ planet }) {
  const theme = THEMES[planet.aspect]
  const [selected, setSelected] = useState(null)

  // Cards carry their planet's aspect so the smoke + theme colour match.
  const decorate = (card) => ({ ...card, aspect: planet.aspect, planetName: planet.name })

  return (
    <motion.section
      className="gallery"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <header className="gallery__header">
        <span className="gallery__aspect">
          {theme.label} world · {theme.motif}
        </span>
        <h2 className="gallery__title">{planet.name}</h2>
        <p className="gallery__tagline">{planet.tagline}</p>
        <p className="gallery__desc">{planet.description}</p>
      </header>

      <div className="gallery__grid">
        {planet.cards.map((card, i) => (
          <Card key={card.id} card={decorate(card)} index={i} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <CardModal card={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </motion.section>
  )
}
