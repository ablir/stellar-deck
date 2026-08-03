import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './pages.css'

/** Shop — placeholder for the official store (purchasing flow comes later). */
export default function Shop() {
  const { t } = useLang()
  return (
    <motion.section className="stub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <span className="stub__kicker">Chains of Innocence</span>
      <h2 className="stub__title">{t(UI.navShop)}</h2>
      <p className="stub__body">{t(UI.shopBody)}</p>
      <span className="stub__badge">{t(UI.comingSoon)}</span>
    </motion.section>
  )
}
