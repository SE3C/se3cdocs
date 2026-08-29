import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
