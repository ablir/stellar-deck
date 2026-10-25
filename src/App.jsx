import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Catalog from './components/Gallery/Gallery.jsx'
import Contact from './components/pages/Contact.jsx'
import Shop from './components/pages/Shop.jsx'
import PlanetLore from './components/pages/PlanetLore.jsx'
import InfoPage from './components/pages/InfoPage.jsx'
import Actors from './components/pages/Actors.jsx'
import './App.css'

/**
 * Route table. The persistent shell (Layout) holds the category rail + ambient
 * background; each route swaps only the centre stage via <Outlet/>.
 *
 * Contact and Shop, and most editorial /info pages from the left menu, are
 * lightweight "coming soon" stubs this round; /info/actors is the first with
 * real client content ("Les acteurs de COFI").
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cards" element={<Catalog />} />
        <Route path="cards/:group" element={<Catalog />} />
        <Route path="cards/:group/:subtype" element={<Catalog />} />
        <Route path="planet/:id" element={<PlanetLore />} />
        <Route path="info/actors" element={<Actors />} />
        <Route path="info/:id" element={<InfoPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
