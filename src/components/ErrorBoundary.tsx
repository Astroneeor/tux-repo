import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log but don't crash — helpful for debugging in production
    console.error('[TuxPersonal] Render error:', error.message, info.componentStack)
  }

  handleReset = () => {
    // Clear potentially corrupt drawing data then reload
    try { localStorage.removeItem('tuxpersonal-drawing') } catch { /* ignore */ }
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100dvh',
            background: 'oklch(11% 0.025 265)',
            color: 'oklch(90% 0.008 265)',
            fontFamily: 'system-ui, sans-serif',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          {/* Minimal mascot in error state */}
          <svg width="64" height="64" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="32" fill="oklch(17% 0.03 265)" stroke="oklch(32% 0.03 265)" strokeWidth="2"/>
            <text x="40" y="52" textAnchor="middle" fontSize="32">💀</text>
          </svg>
          <h2 style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: '22px', margin: 0 }}>
            Something broke the cosmos.
          </h2>
          <p style={{ color: 'oklch(55% 0.015 265)', fontSize: '14px', maxWidth: '320px', margin: 0 }}>
            The plague doctor is investigating.
            {this.state.error && (
              <span style={{ display: 'block', marginTop: '8px', fontFamily: 'monospace', fontSize: '12px' }}>
                {this.state.error.message}
              </span>
            )}
          </p>
          <button
            onClick={this.handleReset}
            style={{
              marginTop: '8px',
              padding: '10px 22px',
              borderRadius: '9px',
              border: '2px solid oklch(32% 0.03 265)',
              background: 'oklch(17% 0.03 265)',
              color: 'oklch(90% 0.008 265)',
              fontFamily: "'Comic Sans MS', cursive",
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Clear cache &amp; reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
