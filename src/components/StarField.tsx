import { useEffect, useRef } from 'react'

export default function StarField() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const field = ref.current
    if (!field) return
    for (let i = 0; i < 90; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const sz  = Math.random() < 0.08 ? 2.5 : Math.random() < 0.25 ? 1.6 : 1
      const dur = 1.8 + Math.random() * 4
      const del = Math.random() * 5
      const lo  = 0.1 + Math.random() * 0.2
      const hi  = lo + 0.4 + Math.random() * 0.3
      s.style.cssText = `
        width:${sz}px;height:${sz}px;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        --dur:${dur}s;--delay:${del}s;--lo:${lo};--hi:${hi};
      `
      field.appendChild(s)
    }
    return () => { field.innerHTML = '' }
  }, [])

  return <div ref={ref} id="starfield" />
}
