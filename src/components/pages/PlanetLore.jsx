import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PLANET_BY_ID } from '../../data/planets.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/**
 * PlanetLore — a planet's story page, laid out per Revision 2:
 * planet art top-centre → name → flavour subtitle → the full lore in a narrow
 * central column → back-to-home.
 *
 * The playmat background sits on a fixed layer behind the scroll container
 * (heavily dimmed so the text stays readable) while the text scrolls over it.
 * Art is painted as CSS backgrounds and the context menu is blocked, so the
 * images can't be dragged or right-click saved.
 */
export default function PlanetLore() {
  const { id } = useParams()
  const { t } = useLang()
  const planet = PLANET_BY_ID[id]

  if (!planet || planet.tba || planet.locked) {
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
    <div
      className="lore"
      style={{ '--accent': planet.color }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Fixed, dimmed playmat backdrop — the text scrolls in front of it. */}
      <div
        className="lore__bg"
        style={{ backgroundImage: `url(${planet.bg})` }}
        aria-hidden="true"
      />
      <div className="lore__scrim" aria-hidden="true" />

      <motion.div
        className="lore__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <article className="lore__content">
          <div
            className="lore__planet"
            role="img"
            aria-label={planet.name}
            style={{ backgroundImage: `url(${planet.img})` }}
          />
          <h2 className="lore__name">{planet.name}</h2>
          <p className="lore__subtitle">{t(planet.subtitle)}</p>

          <div className="lore__text">
            {t(planet.lore).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <Link to="/" className="lore__back">
            ← {t(UI.backHome)}
          </Link>
        </article>
      </motion.div>
    </div>
  )
}
