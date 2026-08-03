import { useNavigate } from 'react-router-dom'
import Sigil from '../Sigil/Sigil.jsx'
import { PLANETS } from '../../data/planets.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { UI } from '../../i18n/strings.js'
import './Home.css'

/**
 * Home — the landing page. Five worlds orbit a central Black Hole in a star
 * configuration echoing the card-back sigil. Three planets are revealed and
 * clickable (→ their lore page); the two expansion planets are darkened with
 * their names replaced by "À venir / To be announced".
 *
 * Positioning uses CSS translate(-50%,-50%); the entrance is a CSS animation
 * (opacity on the button, scale on the body) so it never fights the centering.
 */
export default function Home() {
  const { t } = useLang()
  const navigate = useNavigate()

  // Evenly place the five planets around the circle, first one at the top.
  const R = 39 // orbit radius, % of the square orbit box
  const positions = PLANETS.map((_, i) => {
    const angle = ((-90 + i * (360 / PLANETS.length)) * Math.PI) / 180
    return { left: 50 + R * Math.cos(angle), top: 50 + R * Math.sin(angle) }
  })

  return (
    <section className="home">
      <header className="home__hero">
        <h2 className="home__title">Chains of Innocence</h2>
        <p className="home__intro">{t(UI.homeIntro)}</p>
      </header>

      <div className="home__system" role="navigation" aria-label={t(UI.navHome)}>
        {/* Central black hole */}
        <div className="blackhole" aria-hidden="true">
          <div className="blackhole__disc" />
          <div className="blackhole__ring" />
          <Sigil size={92} className="blackhole__sigil" />
        </div>

        {PLANETS.map((planet, i) => {
          const pos = positions[i]
          const clickable = !planet.tba
          return (
            <button
              key={planet.id}
              type="button"
              className={`orbit-planet ${planet.tba ? 'is-tba' : ''}`}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                '--planet': planet.color,
                '--planet-grad': planet.gradient,
                '--i': i,
              }}
              disabled={!clickable}
              onClick={() => clickable && navigate(`/planet/${planet.id}`)}
              aria-label={planet.tba ? t(UI.toBeAnnounced) : t(planet.name)}
            >
              <span className="orbit-planet__body" />
              <span className="orbit-planet__label">
                {planet.tba ? t(UI.toBeAnnounced) : t(planet.name)}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
