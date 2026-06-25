import { motion } from 'framer-motion'
import './PlanetScene.css'

/**
 * PlanetScene — the large ambient planet that sits behind the gallery. Its
 * surface treatment and orbiting decoration change with the planet's aspect:
 *   - tech     : a rotating holographic wireframe ring + scanline sheen
 *   - mystical : drifting aurora bands + slow orbiting runes
 *   - beastial : a molten, pulsing core with rising embers
 *
 * The orb cross-fades whenever you travel to a new world (keyed on planet.id).
 */
export default function PlanetScene({ planet }) {
  return (
    <motion.div
      key={planet.id}
      className={`scene scene--${planet.aspect}`}
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <div className="scene__halo" />

      <div className="scene__planet">
        <div className="scene__surface" />
        <div className="scene__shade" />

        {planet.aspect === 'tech' && (
          <>
            <div className="scene__grid" />
            <div className="scene__ring scene__ring--a" />
            <div className="scene__ring scene__ring--b" />
            <div className="scene__scan" />
          </>
        )}

        {planet.aspect === 'mystical' && (
          <>
            <div className="scene__aurora" />
            <div className="scene__runes">
              {['✶', '❂', '✷', '✦', '❉', '✧'].map((r, i) => (
                <span key={i} style={{ '--r': i }}>
                  {r}
                </span>
              ))}
            </div>
          </>
        )}

        {planet.aspect === 'beastial' && (
          <>
            <div className="scene__molten" />
            <div className="scene__embers">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    '--e': i,
                    '--ex': `${(i * 37) % 100}%`,
                    '--ed': `${4 + (i % 5)}s`,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}
