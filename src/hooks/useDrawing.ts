import { useState, useRef, useCallback, useEffect } from 'react'

export type DrawPoint = [number, number]

export type DrawPath = {
  color: string
  lineWidth: number
  tool: 'pen' | 'eraser'
  points: DrawPoint[]
}

const STORAGE_KEY = 'tuxpersonal-drawing'
const MAX_PATHS   = 500
const MAX_BYTES   = 2 * 1024 * 1024   // 2 MB guard — silently drop oldest if exceeded

// ── Storage helpers ───────────────────────────────────────────

function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

const storageAvailable = isStorageAvailable()

function loadPaths(): DrawPath[] {
  if (!storageAvailable) return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    // Basic shape validation
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (p): p is DrawPath =>
        p != null &&
        typeof p.color === 'string' &&
        typeof p.lineWidth === 'number' &&
        (p.tool === 'pen' || p.tool === 'eraser') &&
        Array.isArray(p.points),
    )
  } catch {
    return []
  }
}

function savePaths(paths: DrawPath[]): void {
  if (!storageAvailable) return
  try {
    const serialized = JSON.stringify(paths)
    // Don't blow the quota — prune oldest paths until under the limit
    if (serialized.length > MAX_BYTES) {
      const half = Math.floor(paths.length / 2)
      savePaths(paths.slice(half))
      return
    }
    localStorage.setItem(STORAGE_KEY, serialized)
  } catch (err) {
    // QuotaExceededError or SecurityError — silently ignore
    console.warn('[TuxPersonal] Drawing save failed:', err)
  }
}

// ── Hook ─────────────────────────────────────────────────────

export function useDrawing() {
  const [paths, setPaths] = useState<DrawPath[]>(() => loadPaths())
  const currentPath = useRef<DrawPath | null>(null)
  const saveTimer   = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleSave = useCallback((nextPaths: DrawPath[]) => {
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => savePaths(nextPaths), 300)
  }, [])

  const startPath = useCallback((point: DrawPoint, color: string, tool: 'pen' | 'eraser') => {
    currentPath.current = {
      color,
      lineWidth: tool === 'eraser' ? 24 : 3,
      tool,
      points: [point],
    }
  }, [])

  const extendPath = useCallback((point: DrawPoint) => {
    if (!currentPath.current) return
    currentPath.current.points.push(point)
  }, [])

  const endPath = useCallback(() => {
    const finished = currentPath.current
    currentPath.current = null
    if (!finished || finished.points.length < 2) return
    setPaths(prev => {
      const next = [...prev, finished].slice(-MAX_PATHS)
      scheduleSave(next)
      return next
    })
  }, [scheduleSave])

  const clearDrawing = useCallback(() => {
    setPaths([])
    scheduleSave([])
  }, [scheduleSave])

  // Flush any pending save on unmount
  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current)
    }
  }, [])

  return { paths, currentPath, startPath, extendPath, endPath, clearDrawing }
}
