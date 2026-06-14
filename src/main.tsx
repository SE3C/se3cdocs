import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import LandingPage from './LandingPage.tsx'
import MainDetailPage from './MainDetailPage.tsx'
import TechPage from './TechPage.tsx'

const restoreRedirectedPath = () => {
  const { pathname, search, hash } = window.location
  const searchParams = new URLSearchParams(search)
  const redirectedPath = searchParams.get('p')

  if (!redirectedPath) {
    return pathname
  }

  const restoredPath = redirectedPath.startsWith('/') ? redirectedPath : `/${redirectedPath}`
  const restoredSearch = searchParams.get('q')?.replace(/~and~/g, '&')
  const nextSearch = restoredSearch ? `?${restoredSearch}` : ''

  window.history.replaceState(null, '', `${restoredPath}${nextSearch}${hash}`)
  return restoredPath
}

restoreRedirectedPath()

function PublicRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tech" element={<TechPage />} />
      <Route path="/tech/:id" element={<MainDetailPage />} />
      <Route path="/:id" element={<MainDetailPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </StrictMode>,
)
