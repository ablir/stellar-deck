import { motion } from 'framer-motion'
import { Navigate, NavLink, useParams } from 'react-router-dom'
import { INFO_BY_ID } from '../../data/siteMenu.js'
import { INFO_PAGES } from '../../data/infoPages.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/**
 * InfoPage — the editorial entries of the left menu (news, how to play, audio
 * chronicles…). An item with copy in infoPages.js renders as a long-form
 * article (kicker, title, intro, headed sections, signature); the others show
 * their title and a "coming soon" badge until the client delivers the text.
 */
export default function InfoPage() {
  const { id } = useParams()
  const { t, lang } = useLang()
  const item = INFO_BY_ID[id]
  if (!item) return <Navigate to="/" replace />

  const page = INFO_PAGES[id]?.[lang] ?? INFO_PAGES[id]?.fr
  if (page) {
    return (
      <motion.article
        className="article"
        key={`${id}-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="article__scroll">
          <div className="article__content">
            <span className="stub__kicker">{t(item.section.label)}</span>
            <h2 className="article__title">{page.title}</h2>
            <p className="article__intro">{page.intro}</p>

            {page.sections.map((section) => (
              <section key={section.heading} className="article__section">
                <h3 className="article__heading">{section.heading}</h3>
                {section.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </section>
            ))}

            {page.signature?.length > 0 && (
              <p className="article__signature">
                <strong>{page.signature[0]}</strong>
                <span>{page.signature[1]}</span>
              </p>
            )}

            <NavLink to="/" className="stub__back">
              {t(UI.backHome)}
            </NavLink>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.section
      className="stub"
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <span className="stub__kicker">{t(item.section.label)}</span>
      <h2 className="stub__title">{t(item.label)}</h2>
      <p className="stub__body">{t(UI.infoBody)}</p>
      <span className="stub__badge">{t(UI.comingSoon)}</span>
      <NavLink to="/" className="stub__back">
        {t(UI.backHome)}
      </NavLink>
    </motion.section>
  )
}
