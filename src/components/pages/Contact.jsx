import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/** Contact — placeholder page (real form + details land in a later round). */
export default function Contact() {
  const { t } = useLang()
  return (
    <motion.section className="stub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <span className="stub__kicker">Chains of Innocence</span>
      <h2 className="stub__title">{t(UI.navContact)}</h2>
      <p className="stub__body">{t(UI.contactBody)}</p>
      <span className="stub__badge">{t(UI.comingSoon)}</span>
    </motion.section>
  )
}
