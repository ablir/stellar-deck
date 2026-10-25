import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import centralLogo from '../../assets/brand/central-logo.png'
import { GROUPS, subtypeSwatch } from '../../data/categories.js'
import { INFO_SECTIONS } from '../../data/siteMenu.js'
import { CARDS } from '../../data/cards.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './SidePanel.css'

/**
 * SidePanel — the category rail. On desktop it's a fixed left rail. On mobile it
 * collapses behind a hamburger in a compact top bar and slides in as an
 * off-canvas drawer, so the card/planet stage gets the full screen. The drawer
 * auto-closes on navigation.
 */
export default function SidePanel() {
  const { t, lang, toggle } = useLang()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const releasedCount = CARDS.filter((c) => c.released).length

  // Close the drawer whenever the route changes (a link was followed).
  useEffect(() => setOpen(false), [location.pathname])

  // Editorial sections are an accordion (client: keep the categories visible,
  // collapse the rest). All closed on first load — even when landing on an
  // /info page — and only the user's clicks open or close them.
  const [expanded, setExpanded] = useState(() => new Set())
  const toggleSection = (id) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  // Prevent the page behind the open drawer from scrolling.
  useEffect(() => {
    document.body.classList.toggle('drawer-open', open)
    return () => document.body.classList.remove('drawer-open')
  }, [open])

  const langToggle = (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label="Français / English"
      title="Français / English"
    >
      <span className={lang === 'fr' ? 'is-on' : ''}>FR</span>
      <span className="lang-toggle__sep">/</span>
      <span className={lang === 'en' ? 'is-on' : ''}>EN</span>
    </button>
  )

  return (
    <>
      {/* Mobile-only top bar with the hamburger + brand + language toggle. */}
      <div className="mobile-bar">
        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={t(UI.categories)}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <NavLink to="/" className="mobile-bar__brand" aria-label={t(UI.backHome)}>
          <img src={centralLogo} alt="" width={26} height={26} draggable="false" />
          <span>Chains of Innocence</span>
        </NavLink>
        {langToggle}
      </div>

      {/* Backdrop behind the drawer (mobile only). */}
      <div
        className={`panel__scrim ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside className={`panel ${open ? 'is-open' : ''}`}>
        <NavLink to="/" className="panel__brand" aria-label={t(UI.backHome)}>
          <img
            src={centralLogo}
            alt=""
            width={44}
            height={44}
            className="panel__logo"
            draggable="false"
          />
          <div>
            <h1 className="panel__title">
              CHAINS<span>OF</span>INNOCENCE
            </h1>
            <p className="panel__subtitle">{t(UI.tagline)}</p>
          </div>
        </NavLink>

        <nav className="panel__nav" aria-label={t(UI.navMenu)}>
          {/* Editorial sections (LEFT MENU brief): passive, no category colour. */}
          {INFO_SECTIONS.map((section) => {
            const isOpen = expanded.has(section.id)
            return (
            <div key={section.id} className={`info-group ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="info-group__head"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
                aria-controls={`info-group-${section.id}`}
              >
                <span>{t(section.label)}</span>
                <span className="info-group__chevron" aria-hidden="true" />
              </button>
              <div className="info-group__items" id={`info-group-${section.id}`}>
               <div className="info-group__inner">
                {section.items.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/info/${item.id}`}
                    className={({ isActive }) => `info-link ${isActive ? 'is-active' : ''}`}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="rail-active"
                            className="cat__halo"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="info-link__name">{t(item.label)}</span>
                      </>
                    )}
                  </NavLink>
                ))}
               </div>
              </div>
            </div>
            )
          })}

          <span className="panel__nav-label">{t(UI.categories)}</span>

          {GROUPS.map((group) => (
            <div key={group.id} className="cat-group">
              <NavLink
                to={`/cards/${group.id}`}
                end
                className={({ isActive }) => `cat-group__head ${isActive ? 'is-active' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="rail-active"
                        className="cat__halo"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="cat-group__name">{t(group.label)}</span>
                  </>
                )}
              </NavLink>

              <div className="cat-group__subs">
                {group.subtypes.map((sub) => (
                  <NavLink
                    key={sub.id}
                    to={`/cards/${group.id}/${sub.id}`}
                    className={({ isActive }) =>
                      `subtype ${isActive ? 'is-active' : ''} ${sub.comingSoon ? 'is-soon' : ''}`
                    }
                    style={{ '--swatch': subtypeSwatch(sub) }}
                    title={sub.comingSoon ? t(UI.comingSoon) : undefined}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="rail-active"
                            className="cat__halo"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span
                          className={`subtype__swatch ${sub.special ? `is-${sub.special}` : ''}`}
                        />
                        <span className="subtype__name">{t(sub.navLabel ?? sub.label)}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="panel__foot">
          <div className="panel__links">
            <NavLink to="/" end className="foot-link">
              {t(UI.navHome)}
            </NavLink>
            <NavLink to="/cards" end className="foot-link">
              {t(UI.navCards)}
            </NavLink>
            {/* Contact link hidden for now (client) — the /contact route stays live. */}
            <NavLink to="/shop" className="foot-link">
              {t(UI.navShop)}
            </NavLink>
          </div>

          {langToggle}

          <span className="panel__count">
            {releasedCount} {t(UI.released).toLowerCase()} · {CARDS.length}{' '}
            {t(UI.navCards).toLowerCase()}
          </span>
        </div>
      </aside>
    </>
  )
}
