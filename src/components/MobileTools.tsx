import type { SectionId } from '../hooks/useSection'

type Props = {
  activeSection: SectionId
  magicMode: boolean
  drawMode: boolean
  onSection: (id: SectionId) => void
  onMagicToggle: () => void
  onDrawToggle: () => void
}

export default function MobileTools({
  activeSection, magicMode, drawMode,
  onSection, onMagicToggle, onDrawToggle,
}: Props) {
  const sectionActive = !magicMode && !drawMode

  return (
    <div id="mobile-tools">
      <button className={`mtbtn${sectionActive && activeSection === 'about' ? ' active' : ''}`} onClick={() => onSection('about')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 17c2-2 4-2 6-1s4 2 6 1" strokeLinecap="round"/>
          <rect x="9" y="4" width="6" height="12" rx="3" fill="oklch(62% 0.19 255 / 0.6)" stroke="currentColor"/>
        </svg>
        <span>About</span>
      </button>

      <button className={`mtbtn${sectionActive && activeSection === 'projects' ? ' active' : ''}`} onClick={() => onSection('projects')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="12" width="12" height="6" rx="1.5" fill="oklch(62% 0.19 255 / 0.6)"/>
          <rect x="8" y="6" width="8" height="8" rx="1"/>
          <line x1="4" y1="17" x2="20" y2="17"/>
        </svg>
        <span>Projects</span>
      </button>

      <button className={`mtbtn${sectionActive && activeSection === 'contact' ? ' active' : ''}`} onClick={() => onSection('contact')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <path d="M2 9l10 7 10-7"/>
        </svg>
        <span>Contact</span>
      </button>

      <button className={`mtbtn${sectionActive && activeSection === 'resume' ? ' active' : ''}`} onClick={() => onSection('resume')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="3" width="14" height="18" rx="2"/>
          <line x1="8" y1="9" x2="16" y2="9"/>
          <line x1="8" y1="13" x2="16" y2="13"/>
          <line x1="8" y1="17" x2="12" y2="17"/>
        </svg>
        <span>Resume</span>
      </button>

      <button className={`mtbtn magic${magicMode ? ' active' : ''}`} onClick={onMagicToggle}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <line x1="5" y1="19" x2="16" y2="8" strokeLinecap="round" strokeWidth="2.5"/>
          <circle cx="18" cy="6" r="2.5" fill="oklch(72% 0.20 305 / 0.8)" stroke="oklch(72% 0.20 305)"/>
          <circle cx="5" cy="7" r="1.2" fill="oklch(85% 0.15 60)"/>
          <circle cx="20" cy="18" r="1" fill="oklch(80% 0.18 305)"/>
        </svg>
        <span>Magic</span>
      </button>

      <button className={`mtbtn draw${drawMode ? ' active' : ''}`} onClick={onDrawToggle}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="2" width="4" height="3" rx="1" fill="var(--muted)" stroke="currentColor"/>
          <rect x="9" y="5" width="6" height="12" rx="1.5" fill="oklch(65% 0.15 155 / 0.6)" stroke="currentColor"/>
          <path d="M9 17 L12 22 L15 17 Z" fill="oklch(72% 0.15 60)" stroke="oklch(55% 0.12 60)" strokeWidth="0.8"/>
        </svg>
        <span>Draw</span>
      </button>
    </div>
  )
}
