import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './App.css'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'

const rootEl = document.getElementById('root')

if (!rootEl) {
  // Should never happen — index.html always has #root — but guard anyway
  document.body.innerHTML = '<p style="color:white;padding:2rem">Fatal: missing #root element</p>'
  throw new Error('Missing #root element')
}

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
