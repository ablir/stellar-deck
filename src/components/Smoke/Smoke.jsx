import { useId } from 'react'
import './Smoke.css'

/**
 * Smoke — a reusable "dry ice" fog effect.
 *
 * Renders a band of slowly rising, dissipating fog. It layers two techniques:
 *   1. Several blurred radial-gradient "puffs" that drift upward on staggered
 *      keyframes (cheap, smooth, GPU-friendly).
 *   2. An SVG feTurbulence + feDisplacementMap filter that warps the puffs so
 *      their edges churn like real vapour instead of looking like soft circles.
 *
 * Colour comes from the `--smoke` CSS variable, so the fog automatically
 * matches whatever aspect/theme it is dropped into.
 *
 * Props:
 *   density  - number of puffs (default 7)
 *   height   - height of the fog band, any CSS length (default '55%')
 *   intensity- overall opacity multiplier 0..1 (default 1)
 */
export default function Smoke({ density = 7, height = '55%', intensity = 1 }) {
  // Unique filter id per instance so multiple smokes don't clash in the DOM.
  const rawId = useId().replace(/[:]/g, '')
  const filterId = `smoke-turb-${rawId}`

  const puffs = Array.from({ length: density })

  return (
    <div
      className="smoke"
      style={{ '--smoke-height': height, '--smoke-intensity': intensity }}
      aria-hidden="true"
    >
      <svg className="smoke__defs" width="0" height="0">
        <defs>
          <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.022"
              numOctaves="2"
              seed="7"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="14s"
                values="0.012 0.022; 0.018 0.014; 0.012 0.022"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="26"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="smoke__layer" style={{ filter: `url(#${filterId})` }}>
        {puffs.map((_, i) => (
          <span
            key={i}
            className="smoke__puff"
            style={{
              '--i': i,
              '--puff-left': `${(i / density) * 100 + (i % 2 ? 6 : -4)}%`,
              '--puff-delay': `${(i * -1.7).toFixed(2)}s`,
              '--puff-dur': `${7 + (i % 4) * 1.6}s`,
              '--puff-scale': `${0.8 + (i % 3) * 0.35}`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
