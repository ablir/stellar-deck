import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '../Card/Card.jsx'
import CardInfoModal from '../Card/CardInfoModal.jsx'
import { CARDS } from '../../data/cards.js'
import { GROUP_BY_ID, SUBTYPES } from '../../data/categories.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './Gallery.css'

/**
 * Catalog — the main card stage. Reads /cards/:group/:subtype from the route to
 * decide which slice of the catalog to show. Released cards appear face-up;
 * unreleased cards show their card back. Clicking a released card opens the
 * lightweight info window (CardInfoModal).
 */
export default function Catalog() {
  const { group, subtype } = useParams()
  const { t } = useLang()
  const [selected, setSelected] = useState(null)

  const sub = subtype ? SUBTYPES[subtype] : null
  const grp = group ? GROUP_BY_ID[group] : null

  const cards = useMemo(() => {
    if (subtype) return CARDS.filter((c) => c.subtype === subtype)
    if (group) return CARDS.filter((c) => c.group === group)
    return CARDS
  }, [group, subtype])

  const heading = sub ? t(sub.label) : grp ? t(grp.label) : t(UI.allCards)
  const kicker = sub
    ? t(sub.groupLabel)
    : grp
      ? t(UI.catalogHeading)
      : t(UI.catalogHeading)
  const blurb = grp && !sub ? t(grp.blurb) : sub ? '' : ''

  return (
    <motion.section
      className="catalog"
      key={`${group ?? 'all'}-${subtype ?? ''}`}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <header className="catalog__header">
        <span className="catalog__kicker">{kicker}</span>
        <h2 className="catalog__title">{heading}</h2>
        {blurb && <p className="catalog__blurb">{blurb}</p>}
        <span className="catalog__count">
          {cards.length} {t(UI.navCards).toLowerCase()}
        </span>
      </header>

      <div className="catalog__grid">
        {cards.map((card, i) => (
          <Card key={card.id} card={card} index={i} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <CardInfoModal card={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </motion.section>
  )
}
