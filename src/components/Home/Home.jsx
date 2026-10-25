import { useNavigate } from 'react-router-dom'
import { PLANET_BY_ID, HOME_ORBIT_ORDER } from '../../data/planets.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import cofiLogo from '../../assets/brand/cofi-logo.png'
import centralLogo from '../../assets/brand/central-logo.png'
import companyLogo from '../../assets/brand/company-logo.png'
import './Home.css'

/**
 * Home — the landing page. Five worlds surround the central turning logo in the
 * client's pentagon order (Xaraglione top, Verdito right, Solanar bottom-right,
 * Didaris bottom-left, Orga left). Only Xaraglione is clickable (→ its lore
 * page) for now: the other four are `tba` and use their blackened "to be
 * announced" silhouettes until official release. Planet art is painted as CSS
 * backgrounds and the context menu is blocked, so the images can't be
 * right-click saved.
 *
 * Positioning uses CSS translate(-50%,-50%); the entrance is a CSS animation
 * (opacity on the button, scale on the body) so it never fights the centering.
 */
export default function Home() {
  const { t } = useLang()
  const navigate = useNavigate()

  // Pentagon: evenly spaced, first planet at the top, clockwise.
  const R = 39 // orbit radius, % of the square orbit box
  const planets = HOME_ORBIT_ORDER.map((id, i) => {
    const angle = ((-90 + i * (360 / HOME_ORBIT_ORDER.length)) * Math.PI) / 180
    return {
      ...PLANET_BY_ID[id],
      left: 50 + R * Math.cos(angle),
      top: 50 + R * Math.sin(angle),
    }
  })

  return (
    <section className="home" onContextMenu={(e) => e.preventDefault()}>
      <header className="home__hero">
        {/* Client: use the COFI Logo file — no text title (Rev 1, step 6). */}
        <img
          className="home__logo"
          src={cofiLogo}
          alt="Chains of Innocence"
          draggable="false"
        />
        <p className="home__intro">{t(UI.homeIntro)}</p>
      </header>

      <div className="home__system" role="navigation" aria-label={t(UI.navHome)}>
        {/* Central black hole, crowned by the client's turning logo. */}
        <div className="blackhole" aria-hidden="true">
          <div className="blackhole__disc" />
          <div className="blackhole__ring" />
          <img className="blackhole__logo" src={centralLogo} alt="" draggable="false" />
        </div>

        {planets.map((planet, i) => {
          const clickable = !planet.tba
          return (
            <button
              key={planet.id}
              type="button"
              className={`orbit-planet ${planet.tba ? 'is-tba' : ''}`}
              style={{
                left: `${planet.left}%`,
                top: `${planet.top}%`,
                '--planet': planet.color,
                '--planet-glow': planet.tbaGlow ?? planet.color,
                '--planet-img': `url(${planet.tba ? planet.tbaImg : planet.img})`,
                '--i': i,
              }}
              disabled={!clickable}
              onClick={() => clickable && navigate(`/planet/${planet.id}`)}
              aria-label={planet.tba ? t(UI.toBeAnnounced) : planet.name}
            >
              <span className="orbit-planet__body" />
              <span className="orbit-planet__label">
                {planet.tba ? t(UI.toBeAnnounced) : planet.name}
              </span>
            </button>
          )
        })}
      </div>

      {/* Company logo above the legal mentions (Rev 1, steps 8-9). */}
      <footer className="home__footer">
        <img
          className="home__company"
          src={companyLogo}
          alt="Malmaison Games"
          draggable="false"
        />
        <p className="home__legal">
          {t(UI.legalLine1)}
          <br />
          {t(UI.legalLine2)}
        </p>
      </footer>
    </section>
  )
}
