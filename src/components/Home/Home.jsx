import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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

  // Departure (a clickable planet was clicked) — a full-screen cinematic:
  //   1. the planet snaps up fast from its orbit slot to ~80% of the screen,
  //      parked lower-right so it spills off the edge, the system dims;
  //   2. it holds there while its name is typed out in huge letters with a
  //      big caret;
  //   3. the screen fades to black, the route changes, and the black fades
  //      off the lore page.
  const [departure, setDeparture] = useState(null) // { planet, rect }
  const [typed, setTyped] = useState(0)
  const [flash, setFlash] = useState(false)
  const GROW_MS = 550 // planet snap-up (matches planet-takeoff in Home.css)
  const TYPE_START_MS = 450
  const TYPE_STEP_MS = 110
  const HOLD_MS = 700 // pause once the name is complete
  const FLASH_MS = 550 // fade-to-black (matches departure-flash in Home.css)

  useEffect(() => {
    if (!departure) return undefined
    const name = departure.planet.name
    const timers = []
    // Typewriter.
    for (let i = 1; i <= name.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), TYPE_START_MS + i * TYPE_STEP_MS))
    }
    const typedDone = TYPE_START_MS + name.length * TYPE_STEP_MS
    const flashAt = Math.max(typedDone + HOLD_MS, GROW_MS + HOLD_MS)
    timers.push(window.setTimeout(() => setFlash(true), flashAt))
    timers.push(
      window.setTimeout(() => {
        // Leave a black veil behind that fades off the lore page on its own.
        const veil = document.createElement('div')
        veil.className = 'departure-veil'
        veil.addEventListener('animationend', () => veil.remove())
        document.body.appendChild(veil)
        navigate(`/planet/${departure.planet.id}`)
      }, flashAt + FLASH_MS),
    )
    return () => timers.forEach(window.clearTimeout) // page left early: stop everything
  }, [departure, navigate])

  const goTo = (planet, event) => {
    if (departure) return
    const body = event.currentTarget.querySelector('.orbit-planet__body')
    const rect = body.getBoundingClientRect()
    setDeparture({ planet, rect })
  }

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

      <div
        className={`home__system ${departure ? 'is-leaving' : ''}`}
        role="navigation"
        aria-label={t(UI.navHome)}
      >
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
              className={`orbit-planet ${planet.tba ? 'is-tba' : ''} ${planet.locked ? 'is-locked' : ''} ${departure?.planet.id === planet.id ? 'is-chosen' : ''}`}
              style={{
                left: `${planet.left}%`,
                top: `${planet.top}%`,
                '--planet': planet.color,
                '--planet-glow': planet.tbaGlow ?? planet.color,
                '--planet-img': `url(${planet.tba ? planet.tbaImg : planet.img})`,
                '--i': i,
              }}
              disabled={!clickable || Boolean(departure)}
              onClick={(e) => clickable && goTo(planet, e)}
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

      {departure &&
        createPortal(
          <div
            className={`departure ${flash ? 'is-flashing' : ''}`}
            aria-hidden="true"
            style={{
              '--planet': departure.planet.color,
              '--planet-img': `url(${departure.planet.img})`,
              '--from-x': `${departure.rect.left + departure.rect.width / 2}px`,
              '--from-y': `${departure.rect.top + departure.rect.height / 2}px`,
              '--from-size': `${departure.rect.width}px`,
            }}
          >
            <div className="departure__backdrop" />
            <div className="departure__planet" />
            <div className="departure__name">
              {departure.planet.name.slice(0, typed)}
              <span className="departure__caret" />
            </div>
            <div className="departure__flash" />
          </div>,
          document.body,
        )}
    </section>
  )
}
