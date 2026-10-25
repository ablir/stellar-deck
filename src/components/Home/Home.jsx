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
 * announced" silhouettes until official release (`locked` — real art, no
 * click, name withheld — is still supported). Planet art is painted as CSS backgrounds
 * and the context menu is blocked, so the images can't be right-click saved.
 *
 * Positioning uses CSS translate(-50%,-50%); the entrance is a CSS animation
 * (opacity on the button, scale on the body) so it never fights the centering.
 */
export default function Home() {
  const { t } = useLang()
  const navigate = useNavigate()

  // Pentagon: evenly spaced, first planet at the top, clockwise.
  const R = 39 // orbit radius, % of the square orbit box
  // Chain geometry (same % units): from just outside the black hole's disc to
  // just inside the planet body's edge, link by link.
  const CHAIN_START = 10.5
  const CHAIN_STEP = 1.75
  const CHAIN_LINKS = Math.floor((R - 9 - CHAIN_START) / CHAIN_STEP) + 1
  const CHAIN_LINK_RX = 1.15
  const CHAIN_LINK_RY = 0.62
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
        {/* Chains tethering every planet to the central logo (the game is
            "Chains of Innocence"). Drawn in the same 0–100 box as the planet
            positions; links alternate flat / edge-on so they read as a chain. */}
        <svg className="chains" viewBox="0 0 100 100" aria-hidden="true">
          {planets.map((planet, i) => {
            const angle = Math.atan2(planet.top - 50, planet.left - 50)
            const deg = (angle * 180) / Math.PI
            const links = []
            for (let k = 0; k < CHAIN_LINKS; k++) {
              const d = CHAIN_START + k * CHAIN_STEP
              links.push(
                <ellipse
                  key={k}
                  className={`chain__link ${k % 2 ? 'is-edge' : ''}`}
                  cx={50 + d * Math.cos(angle)}
                  cy={50 + d * Math.sin(angle)}
                  rx={CHAIN_LINK_RX}
                  ry={k % 2 ? CHAIN_LINK_RY * 0.38 : CHAIN_LINK_RY}
                  transform={`rotate(${deg} ${50 + d * Math.cos(angle)} ${50 + d * Math.sin(angle)})`}
                  style={{ '--k': k }}
                />
              )
            }
            return (
              <g
                key={planet.id}
                className={`chain ${planet.tba ? 'is-tba' : ''}`}
                style={{ '--planet': planet.tbaGlow ?? planet.color, '--i': i }}
              >
                {links}
              </g>
            )
          })}
        </svg>

        {/* Central black hole, crowned by the client's turning logo. */}
        <div className="blackhole" aria-hidden="true">
          <div className="blackhole__disc" />
          <img className="blackhole__logo" src={centralLogo} alt="" draggable="false" />
        </div>

        {planets.map((planet, i) => {
          const clickable = !planet.tba && !planet.locked
          const withheld = planet.tba || planet.locked
          return (
            <button
              key={planet.id}
              type="button"
              className={`orbit-planet ${planet.tba ? 'is-tba' : ''} ${planet.locked ? 'is-locked' : ''}`}
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
              aria-label={withheld ? t(UI.toBeAnnounced) : planet.name}
            >
              <span className="orbit-planet__body" />
              <span className="orbit-planet__label">
                {withheld ? t(UI.toBeAnnounced) : planet.name}
              </span>
            </button>
          )
        })}
      </div>

      {/* Company logo, sitting just above the site-wide legal mentions (Rev 1, steps 8-9). */}
      <footer className="home__footer">
        <img
          className="home__company"
          src={companyLogo}
          alt="Malmaison Games"
          draggable="false"
        />
      </footer>
    </section>
  )
}
