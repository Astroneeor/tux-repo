import { useState, useCallback, useRef } from 'react'
import TopBar from './components/TopBar'
import Toolbar from './components/Toolbar'
import MobileTools from './components/MobileTools'
import DrawControls from './components/DrawControls'
import StarField from './components/StarField'
import DrawingLayer from './components/DrawingLayer'
import Mascot from './components/Mascot'
import Palette from './components/Palette'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Resume from './components/sections/Resume'
import { useSection, SECTION_TITLES, SECTIONS } from './hooks/useSection'
import type { SectionId } from './hooks/useSection'
import { useDrawing } from './hooks/useDrawing'
import { useGesture } from './hooks/useGesture'
import { TIPS, QUIPS, SWATCHES } from './data/content'

function randomQuip() {
  return QUIPS[Math.floor(Math.random() * QUIPS.length)]
}

export default function App() {
  const { current, exiting, exitDir, goTo, goNext, goPrev } = useSection()
  const { paths, currentPath, startPath, extendPath, endPath, clearDrawing } = useDrawing()

  const [drawMode, setDrawMode] = useState(false)
  const [magicMode, setMagicMode] = useState(false)
  const [activeTool, setActiveTool] = useState<'pen' | 'eraser'>('pen')
  const [activeColor, setActiveColor] = useState(SWATCHES[2])
  const [lineWidth, setLineWidth] = useState(3)
  const [message, setMessage] = useState(TIPS.about)
  const [flash, setFlash] = useState(false)

  const trailRef = useRef<HTMLDivElement>(null)

  const say = useCallback((text: string) => {
    setMessage('')
    setTimeout(() => setMessage(text), 220)
  }, [])

  const handleSection = useCallback((id: SectionId) => {
    goTo(id)
    setDrawMode(false)
    setMagicMode(false)
    say(TIPS[id])
  }, [goTo, say])

  const handleDrawToggle = useCallback(() => {
    setDrawMode(prev => {
      const next = !prev
      if (next) {
        setMagicMode(false)
        setActiveTool('pen')
        say(TIPS.draw)
      } else {
        say(TIPS[current])
      }
      return next
    })
  }, [current, say])

  const handleEraserClick = useCallback(() => {
    setFlash(true)
    setTimeout(() => setFlash(false), 200)
    say(TIPS.eraser)
    if (drawMode && activeTool === 'eraser') {
      // Already in eraser mode — clear the entire canvas
      clearDrawing()
      setTimeout(() => {
        setDrawMode(false)
        say(TIPS[current])
      }, 1800)
    } else if (drawMode) {
      setActiveTool('eraser')
    } else {
      // Easter egg: flash + quip, then return to normal
      setDrawMode(true)
      setMagicMode(false)
      setActiveTool('eraser')
      setTimeout(() => {
        setDrawMode(false)
        say(TIPS[current])
      }, 1800)
    }
  }, [drawMode, activeTool, current, say, clearDrawing])

  const handleMagicToggle = useCallback(() => {
    setMagicMode(prev => {
      const next = !prev
      if (next) {
        setDrawMode(false)
        say(TIPS.magic)
      } else {
        say(TIPS[current])
      }
      return next
    })
  }, [current, say])

  const handleColorSelect = useCallback((color: string) => {
    setActiveColor(color)
    if (!drawMode) {
      setDrawMode(true)
      setMagicMode(false)
      setActiveTool('pen')
      say(TIPS.draw)
    }
  }, [drawMode, say])

  const handleClear = useCallback(() => {
    clearDrawing()
    say('Canvas cleared! Start fresh ✨')
  }, [clearDrawing, say])

  const handleQuip = useCallback(() => {
    say(randomQuip())
  }, [say])

  const spawnTrail = useCallback((x: number, y: number) => {
    const container = trailRef.current
    if (!container) return
    const el = document.createElement('div')
    el.className = 'trail'
    const sz   = 8 + Math.random() * 14
    const rect = container.getBoundingClientRect()
    // Use hsl so it works on all browsers (oklch in JS strings isn't safe on older Safari)
    const hue  = Math.round(220 + Math.random() * 80)
    el.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${x - rect.left - sz / 2}px;
      top:${y - rect.top - sz / 2}px;
      background:hsla(${hue},90%,70%,0.65);
    `
    container.appendChild(el)
    setTimeout(() => el.remove(), 700)
  }, [])

  const gesture = useGesture({
    onSwipeLeft:  goNext,
    onSwipeRight: goPrev,
    onTrail: magicMode ? spawnTrail : undefined,
  })

  const sectionClass = (id: SectionId) => {
    if (id === current) return 'section active'
    if (id === exiting) return `section exit-${exitDir}`
    return 'section'
  }

  const title = drawMode
    ? 'Drawing Mode'
    : magicMode
    ? 'Magic Mode'
    : SECTION_TITLES[current]

  const currentSectionIndex = SECTIONS.indexOf(current)

  // App-level class drives the grid row height so draw-controls bar fits
  const appClass = [
    drawMode ? 'draw-active' : '',
    magicMode ? 'magic-active' : '',
  ].filter(Boolean).join(' ') || undefined

  return (
    <div id="app" className={appClass}>
      <TopBar
        title={title}
        currentSection={current}
        magicMode={magicMode}
      />

      <Toolbar
        activeSection={current}
        drawMode={drawMode}
        magicMode={magicMode}
        activeTool={activeTool}
        onSection={handleSection}
        onDrawToggle={handleDrawToggle}
        onEraserClick={handleEraserClick}
        onMagicToggle={handleMagicToggle}
      />

      <main
        id="canvas"
        className={magicMode ? 'gmode' : ''}
        ref={trailRef}
        onTouchStart={magicMode ? gesture.touchStart : undefined}
        onTouchEnd={magicMode ? gesture.touchEnd : undefined}
        onMouseDown={magicMode ? gesture.mouseDown : undefined}
        onMouseMove={magicMode ? gesture.mouseMove : undefined}
        onMouseUp={magicMode ? gesture.mouseUp : undefined}
      >
        <StarField />
        <div id="flash" className={flash ? 'on' : ''} />

        <DrawingLayer
          paths={paths}
          active={drawMode}
          activeTool={activeTool}
          activeColor={activeColor}
          lineWidth={lineWidth}
          onStart={startPath}
          onExtend={extendPath}
          onEnd={endPath}
          currentPathRef={currentPath}
        />

        <div className={sectionClass('about')}    id="sec-about"    style={drawMode ? { pointerEvents: 'none' } : undefined}><About /></div>
        <div className={sectionClass('projects')} id="sec-projects"  style={drawMode ? { pointerEvents: 'none' } : undefined}><Projects /></div>
        <div className={sectionClass('contact')}  id="sec-contact"   style={drawMode ? { pointerEvents: 'none' } : undefined}><Contact /></div>
        <div className={sectionClass('resume')}   id="sec-resume"    style={drawMode ? { pointerEvents: 'none' } : undefined}><Resume /></div>
      </main>

      <div id="bottom">
        <MobileTools
          activeSection={current}
          magicMode={magicMode}
          drawMode={drawMode}
          activeTool={activeTool}
          onSection={handleSection}
          onMagicToggle={handleMagicToggle}
          onDrawToggle={handleDrawToggle}
          onEraserClick={handleEraserClick}
        />

        {/* Draw controls — only visible when draw mode is on */}
        {drawMode && (
          <DrawControls
            lineWidth={lineWidth}
            onLineWidth={setLineWidth}
            onClear={handleClear}
          />
        )}

        <Palette activeColor={activeColor} onColorSelect={handleColorSelect} />
        <Mascot message={message} onQuip={handleQuip} />
      </div>

      {/* Hidden for screen readers */}
      <div aria-live="polite" className="sr-only">{message}</div>

      {/* Navigation hint for magic mode */}
      {magicMode && (
        <div id="nav-hint">
          <span>◀</span>
          <span>{currentSectionIndex + 1} / {SECTIONS.length}</span>
          <span>▶</span>
        </div>
      )}
    </div>
  )
}
