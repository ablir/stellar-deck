import { useMemo } from 'react'
import './StarfieldBackground.css'

/**
 * StarfieldBackground — three parallax layers of stars rendered as box-shadow
 * dot-fields. Pure CSS animation (no canvas/JS loop), so it's cheap and keeps
 * running while React re-renders the gallery above it.
 */
function buildShadows(count, spread) {
  // Deterministic pseudo-random so the field is stable across renders.
  let seed = count * 9301 + spread
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  const parts = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * spread)
    const y = Math.floor(rand() * spread)
    parts.push(`${x}px ${y}px rgba(255,255,255,${(0.4 + rand() * 0.6).toFixed(2)})`)
  }
  return parts.join(', ')
}

export default function StarfieldBackground() {
  const layers = useMemo(
    () => ({
      far: buildShadows(160, 2000),
      mid: buildShadows(70, 2000),
      near: buildShadows(30, 2000),
    }),
    [],
  )

  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield__layer starfield__layer--far" style={{ boxShadow: layers.far }} />
      <div className="starfield__layer starfield__layer--mid" style={{ boxShadow: layers.mid }} />
      <div className="starfield__layer starfield__layer--near" style={{ boxShadow: layers.near }} />
    </div>
  )
}
