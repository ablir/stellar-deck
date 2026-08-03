import { Outlet } from 'react-router-dom'
import SidePanel from '../SidePanel/SidePanel.jsx'
import StarfieldBackground from '../StarfieldBackground/StarfieldBackground.jsx'

/**
 * Layout — the persistent shell shared by every route: the ambient starfield,
 * the category rail, and the centre stage where the active page renders.
 */
export default function Layout() {
  return (
    <div className="app">
      <StarfieldBackground />
      <div className="app__vignette" />

      <SidePanel />

      <main className="app__stage">
        <Outlet />
      </main>
    </div>
  )
}
