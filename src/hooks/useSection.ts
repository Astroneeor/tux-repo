import { useState, useEffect, useCallback } from 'react'

export type SectionId = 'about' | 'projects' | 'contact' | 'resume'

export const SECTIONS: SectionId[] = ['about', 'projects', 'contact', 'resume']

export const SECTION_TITLES: Record<SectionId, string> = {
  about:    'About Me',
  projects: 'Projects',
  contact:  'Contact',
  resume:   'Resume',
}

type Direction = 'left' | 'right'

type SectionState = {
  current: SectionId
  exiting: SectionId | null
  exitDir: Direction
}

export function useSection() {
  const [state, setState] = useState<SectionState>({
    current: 'about',
    exiting: null,
    exitDir: 'left',
  })

  const goTo = useCallback((id: SectionId) => {
    setState(prev => {
      if (id === prev.current) return prev
      const ci = SECTIONS.indexOf(prev.current)
      const ni = SECTIONS.indexOf(id)
      return {
        current: id,
        exiting: prev.current,
        exitDir: ni >= ci ? 'left' : 'right',
      }
    })
    setTimeout(() => {
      setState(prev => ({ ...prev, exiting: null }))
    }, 400)
  }, [])

  const goNext = useCallback(() => {
    setState(prev => {
      const ci = SECTIONS.indexOf(prev.current)
      if (ci < SECTIONS.length - 1) {
        const next = SECTIONS[ci + 1]
        return { current: next, exiting: prev.current, exitDir: 'left' }
      }
      return prev
    })
    setTimeout(() => setState(prev => ({ ...prev, exiting: null })), 400)
  }, [])

  const goPrev = useCallback(() => {
    setState(prev => {
      const ci = SECTIONS.indexOf(prev.current)
      if (ci > 0) {
        const next = SECTIONS[ci - 1]
        return { current: next, exiting: prev.current, exitDir: 'right' }
      }
      return prev
    })
    setTimeout(() => setState(prev => ({ ...prev, exiting: null })), 400)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft')  goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  return { ...state, goTo, goNext, goPrev }
}
