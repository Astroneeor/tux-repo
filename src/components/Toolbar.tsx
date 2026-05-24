import type { SectionId } from '../hooks/useSection'

type Props = {
  activeSection: SectionId
  drawMode: boolean
  magicMode: boolean
  activeTool: 'pen' | 'eraser'
  onSection: (id: SectionId) => void
  onDrawToggle: () => void
  onEraserClick: () => void
  onMagicToggle: () => void
}

export default function Toolbar({
  activeSection, drawMode, magicMode, activeTool,
  onSection, onDrawToggle, onEraserClick, onMagicToggle,
}: Props) {
  const sectionActive = !drawMode && !magicMode

  return (
    <nav id="toolbar">
      {/* About — paint brush */}
      <button
        className={`tbtn${sectionActive && activeSection === 'about' ? ' active' : ''}`}
        onClick={() => onSection('about')}
        title="Paint your story"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M8 22 C10 20 12 20 14 21 C16 22 18 22 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <rect x="11.5" y="5" width="5" height="14" rx="2.5" fill="oklch(62% 0.19 255 / 0.75)" stroke="currentColor" strokeWidth="1.2"/>
          <ellipse cx="14" cy="19" rx="2.8" ry="2" fill="oklch(65% 0.18 30)" stroke="oklch(50% 0.15 30)" strokeWidth="0.8"/>
          <line x1="14" y1="21" x2="12" y2="25" stroke="oklch(65% 0.18 30)" strokeWidth="2.2" strokeLinecap="round"/>
          <rect x="12" y="3" width="4" height="4" rx="1" fill="var(--muted)" stroke="currentColor" strokeWidth="1"/>
        </svg>
        <span>About</span>
      </button>

      {/* Projects — stamp */}
      <button
        className={`tbtn${sectionActive && activeSection === 'projects' ? ' active' : ''}`}
        onClick={() => onSection('projects')}
        title="Stamp your projects"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="7" y="14" width="14" height="7" rx="2" fill="oklch(62% 0.19 255 / 0.7)" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="10" y="7" width="8" height="9" rx="1.5" fill="var(--btn-hi)" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="5" y="19" width="18" height="3" rx="1.5" fill="var(--muted)" stroke="currentColor" strokeWidth="0.8"/>
          <line x1="9" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <line x1="9" y1="19" x2="19" y2="19" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        </svg>
        <span>Projects</span>
      </button>

      {/* Contact — envelope */}
      <button
        className={`tbtn${sectionActive && activeSection === 'contact' ? ' active' : ''}`}
        onClick={() => onSection('contact')}
        title="Send a message"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="4" y="8" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M4 11 L14 17 L24 11" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          <text x="10" y="9" fontFamily="serif" fontSize="8" fill="oklch(62% 0.19 255)" fontWeight="bold">Abc</text>
        </svg>
        <span>Contact</span>
      </button>

      {/* Resume — fill bucket */}
      <button
        className={`tbtn${sectionActive && activeSection === 'resume' ? ' active' : ''}`}
        onClick={() => onSection('resume')}
        title="Fill in the resume"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M7 18 C7 13 10 7 15 8 L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="9" cy="21" rx="5" ry="5" fill="oklch(62% 0.19 255 / 0.75)" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M15 8 L20 14 L17 15 Z" fill="var(--muted)" stroke="currentColor" strokeWidth="0.9"/>
          <line x1="9" y1="26" x2="9" y2="28" stroke="oklch(62% 0.19 255)" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span>Resume</span>
      </button>

      {/* Draw — pencil (new) */}
      <button
        className={`tbtn draw${drawMode && activeTool === 'pen' ? ' active' : ''}`}
        onClick={onDrawToggle}
        title="Draw on the canvas"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="12" y="3" width="4" height="3" rx="1" fill="var(--muted)" stroke="currentColor" strokeWidth="1"/>
          <rect x="11" y="6" width="6" height="14" rx="1.5" fill="oklch(65% 0.15 155 / 0.75)" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M11 20 L14 26 L17 20 Z" fill="oklch(72% 0.15 60)" stroke="oklch(55% 0.12 60)" strokeWidth="0.8"/>
          <line x1="11" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1"/>
        </svg>
        <span>Draw</span>
      </button>

      {/* Eraser — easter egg + erase drawing */}
      <button
        className={`tbtn${drawMode && activeTool === 'eraser' ? ' active' : ''}`}
        onClick={onEraserClick}
        title="Eraser"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="5" y="10" width="18" height="11" rx="3" fill="oklch(65% 0.12 15 / 0.65)" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="5" y="16" width="18" height="5" rx="2" fill="oklch(50% 0.10 15 / 0.5)"/>
          <line x1="5" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="1"/>
          <line x1="18" y1="10" x2="18" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
        </svg>
        <span>Eraser</span>
      </button>

      {/* Magic — wand */}
      <button
        className={`tbtn magic${magicMode ? ' active' : ''}`}
        onClick={onMagicToggle}
        title="Magic gesture navigation"
      >
        <svg viewBox="0 0 28 28" fill="none">
          <line x1="6" y1="22" x2="19" y2="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="17" y="4" width="7" height="7" rx="1.5"
            fill="oklch(72% 0.20 305 / 0.8)" stroke="oklch(72% 0.20 305)" strokeWidth="1"
            transform="rotate(45 20.5 7.5)"/>
          <circle cx="6"  cy="7"  r="1.5" fill="oklch(85% 0.15 60)"/>
          <circle cx="23" cy="21" r="1.3" fill="oklch(80% 0.18 305)"/>
          <circle cx="25" cy="9"  r="1"   fill="oklch(85% 0.15 60)"/>
          <line x1="4" y1="7" x2="8" y2="7" stroke="oklch(85% 0.15 60)" strokeWidth="1"/>
          <line x1="6" y1="5" x2="6" y2="9" stroke="oklch(85% 0.15 60)" strokeWidth="1"/>
        </svg>
        <span>Magic</span>
      </button>
    </nav>
  )
}
