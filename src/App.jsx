import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import SidePanel from './components/SidePanel/SidePanel.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import StarfieldBackground from './components/StarfieldBackground/StarfieldBackground.jsx'
import PlanetScene from './components/PlanetScene/PlanetScene.jsx'
import { PLANETS } from './data/planets.js'
import { themeVars } from './theme/themes.js'
import './App.css'

export default function App() {
  const [activeId, setActiveId] = useState(PLANETS[0].id)
  const activePlanet = useMemo(
    () => PLANETS.find((p) => p.id === activeId) ?? PLANETS[0],
    [activeId],
  )

  return (
    <div className="app" style={themeVars(activePlanet.aspect)}>
      {/* Ambient background layers (theme-tinted) */}
      <StarfieldBackground />
      <AnimatePresence mode="wait">
        <PlanetScene key={activePlanet.id} planet={activePlanet} />
      </AnimatePresence>
      <div className="app__vignette" />

      {/* Foreground UI */}
      <SidePanel planets={PLANETS} activeId={activeId} onSelect={setActiveId} />

      <main className="app__stage">
        <AnimatePresence mode="wait">
          <Gallery key={activePlanet.id} planet={activePlanet} />
        </AnimatePresence>
      </main>
    </div>
  )
}
