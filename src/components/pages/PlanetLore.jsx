import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PLANET_BY_ID } from '../../data/planets.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/**
 * PlanetLore — a planet's story page. The full playmat background + the client's
 * lore copy arrive next round; for now it renders the planet's name, a tinted
 * backdrop from its gradient, and a placeholder lore line.
 */
export default function PlanetLore() {
  const { id } = useParams()
  const { t } = useLang()
  const planet = PLANET_BY_ID[id]

  if (!planet || planet.tba) {
    return (
      <section className="stub">
        <span className="stub__kicker">Chains of Innocence</span>
        <h2 className="stub__title">{t(UI.toBeAnnounced)}</h2>
        <p className="stub__body">{t(UI.loreBody)}</p>
        <Link to="/" className="stub__back">
          ← {t(UI.backHome)}
        </Link>
      </section>
    )
  }

  return (
    <motion.section
      className="stub stub--lore"
      style={{ backgroundImage: planet.gradient, '--accent': planet.color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="stub__kicker">{t(UI.blackHole)}</span>
      <h2 className="stub__title">{t(planet.name)}</h2>
      <p className="stub__body">{t(planet.lore)}</p>
      <Link to="/" className="stub__back">
        ← {t(UI.backHome)}
      </Link>
    </motion.section>
  )
}
