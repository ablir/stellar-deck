import { NavLink, Outlet } from 'react-router-dom'
import { FOOTER_SECTION } from '../../data/siteMenu.js'
import SidePanel from '../SidePanel/SidePanel.jsx'
import StarfieldBackground from '../StarfieldBackground/StarfieldBackground.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'

/**
 * Layout — the persistent shell shared by every route: the ambient starfield,
 * the category rail, the centre stage where the active page renders, and the
 * legal mentions pinned under the stage on every page (client request).
 */
export default function Layout() {
  const { t } = useLang()

  // Best-effort image protection (client request): block the context menu on
  // any image so card art / planet art can't be right-click saved. True
  // download prevention isn't possible in a browser (screenshots, devtools).
  const guardImages = (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault()
  }

  return (
    <div className="app" onContextMenu={guardImages}>
      <StarfieldBackground />
      <div className="app__vignette" />

      <SidePanel />

      <main className="app__stage">
        <div className="app__page">
          <Outlet />
        </div>
        {/* Site-wide footer, laid out per the client's "pied de page" mock:
            brand, copyright, legal links (+ Contact), rule, trademark line. */}
        <footer className="app__legal">
          <span className="app__legal-brand">{t(UI.legalBrand)}</span>
          <span className="app__legal-copy">{t(UI.legalLine1)}</span>
          <nav className="app__legal-links" aria-label={t(UI.legalBrand)}>
            {FOOTER_SECTION.items.map((item) => (
              <NavLink key={item.id} to={`/info/${item.id}`}>
                {t(item.label)}
              </NavLink>
            ))}
            <NavLink to="/contact">{t(UI.navContact)}</NavLink>
          </nav>
          <span className="app__legal-marks">{t(UI.legalLine2)}</span>
        </footer>
      </main>
    </div>
  )
}
