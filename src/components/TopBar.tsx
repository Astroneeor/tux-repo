import { SECTIONS } from '../hooks/useSection'
import type { SectionId } from '../hooks/useSection'

type Props = {
  title: string
  currentSection: SectionId
  magicMode: boolean
}

export default function TopBar({ title, currentSection, magicMode }: Props) {
  const currentIndex = SECTIONS.indexOf(currentSection)

  return (
    <header id="topbar">
      <div className="panel-label">Tools</div>
      <div id="section-title">{title}</div>
      <div id="gesture-dots" className={magicMode ? 'show' : ''}>
        {SECTIONS.map((_, i) => (
          <div key={i} className={`gdot${i === currentIndex ? ' on' : ''}`} />
        ))}
      </div>
    </header>
  )
}
