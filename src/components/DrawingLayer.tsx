import { useRef, useEffect, useCallback } from 'react'
import type { DrawPath, DrawPoint } from '../hooks/useDrawing'

type Props = {
  paths: DrawPath[]
  active: boolean
  activeTool: 'pen' | 'eraser'
  activeColor: string
  lineWidth: number
  onStart:  (p: DrawPoint, color: string, tool: 'pen' | 'eraser', lw: number) => void
  onExtend: (p: DrawPoint) => void
  onEnd:    () => void
  currentPathRef: React.MutableRefObject<DrawPath | null>
}

// ── Canvas rendering ──────────────────────────────────────────

function renderPaths(ctx: CanvasRenderingContext2D, paths: DrawPath[]) {
  const { width, height } = ctx.canvas
  ctx.clearRect(0, 0, width, height)

  for (const path of paths) {
    if (path.points.length < 2) continue

    ctx.save()
    ctx.globalCompositeOperation = path.tool === 'eraser' ? 'destination-out' : 'source-over'
    ctx.strokeStyle = path.color
    ctx.lineWidth   = path.lineWidth
    ctx.lineCap     = 'round'
    ctx.lineJoin    = 'round'
    ctx.beginPath()
    ctx.moveTo(path.points[0][0], path.points[0][1])

    // Smooth with quadratic curves when there are enough points
    if (path.points.length > 2) {
      for (let i = 1; i < path.points.length - 1; i++) {
        const mx = (path.points[i][0] + path.points[i + 1][0]) / 2
        const my = (path.points[i][1] + path.points[i + 1][1]) / 2
        ctx.quadraticCurveTo(path.points[i][0], path.points[i][1], mx, my)
      }
    }

    const last = path.points[path.points.length - 1]
    ctx.lineTo(last[0], last[1])
    ctx.stroke()
    ctx.restore()
  }
}

function getCtx(canvas: HTMLCanvasElement): CanvasRenderingContext2D | null {
  try {
    return canvas.getContext('2d', { willReadFrequently: false }) ?? null
  } catch {
    return null
  }
}

// ── Component ─────────────────────────────────────────────────

export default function DrawingLayer({
  paths, active, activeTool, activeColor, lineWidth,
  onStart, onExtend, onEnd, currentPathRef,
}: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const isDrawing  = useRef(false)
  const rafId      = useRef<number | null>(null)
  const lastDpr    = useRef<number>(1)

  // ── Resize & redraw ────────────────────────────────────────
  const redraw = useCallback((extraPath?: DrawPath) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = getCtx(canvas)
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 3) // cap at 3× to avoid OOM on very high-DPR displays
    lastDpr.current = dpr

    // Only resize backing store when DPR or element size changes
    const rect = canvas.getBoundingClientRect()
    const targetW = Math.round(rect.width  * dpr)
    const targetH = Math.round(rect.height * dpr)

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width  = targetW
      canvas.height = targetH
      ctx.scale(dpr, dpr)
    }

    renderPaths(ctx, extraPath ? [...paths, extraPath] : paths)
  }, [paths])

  // Initial size + resize observer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    redraw()

    // ResizeObserver is more accurate than window resize for this
    let ro: ResizeObserver | null = null
    try {
      ro = new ResizeObserver(() => redraw())
      ro.observe(canvas)
    } catch {
      // Fallback for environments without ResizeObserver
      window.addEventListener('resize', () => redraw())
    }

    return () => {
      ro?.disconnect()
      window.removeEventListener('resize', () => redraw())
    }
  }, [redraw])

  // Redraw whenever saved paths change
  useEffect(() => { redraw() }, [redraw])

  // ── Pointer event helpers ──────────────────────────────────

  const getPoint = (e: React.PointerEvent): DrawPoint => {
    const r = canvasRef.current!.getBoundingClientRect()
    return [
      Math.round(e.clientX - r.left),
      Math.round(e.clientY - r.top),
    ]
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (!active) return
    e.preventDefault()
    isDrawing.current = true
    try { (e.target as HTMLElement).setPointerCapture(e.pointerId) } catch { /* ignore */ }
    onStart(getPoint(e), activeColor, activeTool, lineWidth)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!active || !isDrawing.current) return
    e.preventDefault()
    onExtend(getPoint(e))

    // Live preview via rAF — never queue more than one
    if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null
      if (currentPathRef.current) redraw(currentPathRef.current)
    })
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDrawing.current) return
    e.preventDefault()
    isDrawing.current = false
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
    onEnd()
  }

  const onPointerCancel = (e: React.PointerEvent) => {
    // Treat cancel (e.g. palm rejection, touch interrupted) same as up
    onPointerUp(e)
  }

  return (
    <canvas
      ref={canvasRef}
      id="drawing-layer"
      aria-label="Drawing canvas — scribble here for fun"
      aria-hidden={!active}
      style={{ pointerEvents: active ? 'all' : 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    />
  )
}
