import { Outlet } from 'react-router-dom'
import SidePanel from '../SidePanel/SidePanel.jsx'
import StarfieldBackground from '../StarfieldBackground/StarfieldBackground.jsx'

/**
 * Layout — the persistent shell shared by every route: the ambient starfield,
 * the category rail, and the centre stage where the active page renders.
 */
export default function Layout() {
  // Best-effort image protection (client request): block the context menu on
  // any image so card art / planet art can't be right-click saved. True
  // download prevention isn't possible in a browser (screenshots, devtools).
  const guardImages = (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault()
  }

  return (
    <div className="app" onContextMenu={guardImages}>
      <StarfieldBackground />
      <div className="app__vignette" />

      <SidePanel />

      <main className="app__stage">
        <Outlet />
      </main>
    </div>
  )
}
