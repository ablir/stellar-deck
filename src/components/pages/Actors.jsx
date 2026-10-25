import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ACTORS } from '../../data/actors.js'
import { INFO_BY_ID } from '../../data/siteMenu.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/**
 * Actors — "Les acteurs de COFI", per the client's layout brief: page title,
 * then one block per person with the framed picture beside the text, the
 * picture side alternating left/right down the page, then back-to-home.
 * Legal mentions come from the persistent Layout footer.
 *
 * Pictures are painted as CSS backgrounds and the context menu is blocked,
 * like the lore pages, so the portraits can't be dragged or right-click saved.
 */
export default function Actors() {
  const { t } = useLang()
  const menuItem = INFO_BY_ID.actors

  return (
    <div className="actors" onContextMenu={(e) => e.preventDefault()}>
      <motion.div
        className="actors__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className="actors__head">
          <span className="actors__kicker">{t(menuItem.section.label)}</span>
          <h2 className="actors__title">{t(menuItem.label)}</h2>
        </header>

        <div className="actors__list">
          {ACTORS.map((actor, i) => (
            <motion.article
              key={actor.id}
              className={`actor ${i % 2 ? 'actor--flip' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="actor__picture"
                role="img"
                aria-label={actor.name}
                style={{ backgroundImage: `url(${actor.img})` }}
              />
              <div className="actor__body">
                <h3 className="actor__name">{actor.name}</h3>
                <p className="actor__role">{t(actor.role)}</p>
                <div className="actor__text">
                  {t(actor.text).map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Link to="/" className="actors__back">
          ← {t(UI.backHome)}
        </Link>
      </motion.div>
    </div>
  )
}
