import { useMemo } from 'react'
import './Fog.css'

/**
 * Fog — a volumetric "dry ice" fog, recreated from the Three.js "THE FOG" pen
 * (Ochice) in pure CSS so it needs no WebGL/GSAP.
 *
 * Each puff is the same soft smoke sprite the pen uses, tinted to the planet
 * colour by masking a solid `--smoke-solid` fill with the PNG's alpha. Puffs
 * rise from below, slowly scale up and rotate, and fade in then out.
 *
 * Variety: every puff gets independently randomised position, size, drift,
 * rotation, rise height, duration AND a random negative start delay — so the
 * field begins at a random point in each puff's life and the bank never reads
 * as one looping clip. A fresh random layout is generated each time the
 * component mounts (useMemo with no deps), so re-opening a card looks different
 * while staying stable across the card's own re-renders (e.g. flipping).
 *
 * The component is a free-floating overlay (position: absolute, no clipping),
 * so the parent decides where it sits and how it's masked.
 *
 * Props:
 *   count - number of puffs (default 18)
 *   size  - base puff size, any CSS length (default '26vmin')
 *   peak  - peak opacity of a puff, 0..1 (default 0.5)
 */
export default function Fog({ count = 18, size = '26vmin', peak = 0.5 }) {
  const puffs = useMemo(() => {
    const rnd = (min, max) => min + Math.random() * (max - min)
    return Array.from({ length: count }, (_, i) => {
      const dur = rnd(20, 40)
      return {
        key: i,
        left: `${rnd(-15, 115).toFixed(1)}%`,
        drift: `${rnd(-45, 45).toFixed(1)}%`,
        rot0: `${rnd(0, 360).toFixed(0)}deg`,
        rot1: `${rnd(-90, 90).toFixed(0)}deg`,
        rise: `${rnd(-260, -160).toFixed(0)}%`,
        dur: `${dur.toFixed(1)}s`,
        // Start each puff at a random point in its own cycle.
        delay: `${(-Math.random() * dur).toFixed(1)}s`,
        scale: rnd(2.4, 4.8).toFixed(2),
        sizeMul: rnd(0.65, 1.7).toFixed(2),
        peak: (peak * rnd(0.7, 1.1)).toFixed(3),
      }
    })
  }, [count, peak])

  return (
    <div className="fog" style={{ '--fog-size': size }} aria-hidden="true">
      {puffs.map((p) => (
        <span
          key={p.key}
          className="fog__puff"
          style={{
            '--x': p.left,
            '--drift': p.drift,
            '--rot0': p.rot0,
            '--rot1': p.rot1,
            '--rise': p.rise,
            '--dur': p.dur,
            '--delay': p.delay,
            '--scale': p.scale,
            '--size-mul': p.sizeMul,
            '--fog-peak': p.peak,
          }}
        />
      ))}
    </div>
  )
}
