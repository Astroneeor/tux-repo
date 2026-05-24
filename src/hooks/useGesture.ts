import { useRef, useCallback } from 'react'

type GestureCallbacks = {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  onTrail?: (x: number, y: number) => void
}

export function useGesture({ onSwipeLeft, onSwipeRight, onTrail }: GestureCallbacks) {
  const startX = useRef<number | null>(null)

  const handleStart = useCallback((x: number) => {
    startX.current = x
  }, [])

  const handleMove = useCallback((x: number, y: number) => {
    if (startX.current !== null) onTrail?.(x, y)
  }, [onTrail])

  const handleEnd = useCallback((x: number) => {
    if (startX.current === null) return
    const dx = x - startX.current
    startX.current = null
    if (Math.abs(dx) < 60) return
    if (dx < 0) onSwipeLeft()
    else onSwipeRight()
  }, [onSwipeLeft, onSwipeRight])

  const touchStart = useCallback((e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }, [handleStart])

  const touchEnd = useCallback((e: React.TouchEvent) => {
    handleEnd(e.changedTouches[0].clientX)
  }, [handleEnd])

  const mouseDown = useCallback((e: React.MouseEvent) => {
    handleStart(e.clientX)
  }, [handleStart])

  const mouseMove = useCallback((e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY)
  }, [handleMove])

  const mouseUp = useCallback((e: React.MouseEvent) => {
    handleEnd(e.clientX)
  }, [handleEnd])

  return { touchStart, touchEnd, mouseDown, mouseMove, mouseUp }
}
