import { motion } from 'framer-motion'
import Card from '../Card/Card.jsx'
import { THEMES } from '../../theme/themes.js'
import './Gallery.css'

/**
 * Gallery — the main stage. Shows the active planet's header plus a responsive
 * grid of its cards. Keyed on planet.id so the whole stage animates in when you
 * travel to a new world.
 */
export default function Gallery({ planet }) {
  const theme = THEMES[planet.aspect]

  return (
    <motion.section
      key={planet.id}
      className="gallery"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <header className="gallery__header">
        <span className="gallery__aspect">{theme.label} world · {theme.motif}</span>
        <h2 className="gallery__title">{planet.name}</h2>
        <p className="gallery__tagline">{planet.tagline}</p>
        <p className="gallery__desc">{planet.description}</p>
      </header>

      <div className="gallery__grid">
        {planet.cards.map((card, i) => (
          <Card key={card.id} card={{ ...card, aspect: planet.aspect, planetName: planet.name }} index={i} />
        ))}
      </div>
    </motion.section>
  )
}
