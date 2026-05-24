type Props = {
  lineWidth: number
  onLineWidth: (w: number) => void
  onClear: () => void
}

export default function DrawControls({ lineWidth, onLineWidth, onClear }: Props) {
  return (
    <div id="draw-controls">
      {/* Clear canvas */}
      <button id="clear-btn" onClick={onClear} title="Clear all drawings">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
        </svg>
        Clear
      </button>

      {/* Thickness slider */}
      <div id="thickness-wrap">
        {/* thin dot */}
        <svg width="8" height="8" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="2" fill="currentColor" opacity="0.5"/>
        </svg>

        <input
          id="thickness"
          type="range"
          min="1"
          max="20"
          step="1"
          value={lineWidth}
          onChange={e => onLineWidth(Number(e.target.value))}
          aria-label="Brush thickness"
          title={`Thickness: ${lineWidth}px`}
        />

        {/* thick dot */}
        <svg width="14" height="14" viewBox="0 0 14 14">
          <circle cx="7" cy="7" r="5" fill="currentColor" opacity="0.6"/>
        </svg>

        <span id="thickness-val">{lineWidth}px</span>
      </div>
    </div>
  )
}
