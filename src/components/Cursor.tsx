import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const d = dot.current!
    const r = ring.current!
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      d.style.transform = `translate(${mx}px, ${my}px)`
    }
    const raf = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      r.style.transform = `translate(${rx}px, ${ry}px)`
      requestAnimationFrame(raf)
    }
    raf()
    window.addEventListener('mousemove', onMove)

    const hoverables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
    const enter = () => { r.style.width = '48px'; r.style.height = '48px'; r.style.borderColor = 'rgba(170,134,66,0.75)' }
    const leave = () => { r.style.width = '32px'; r.style.height = '32px'; r.style.borderColor = 'rgba(170,134,66,0.35)' }
    hoverables.forEach((h) => { h.addEventListener('mouseenter', enter); h.addEventListener('mouseleave', leave) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      hoverables.forEach((h) => { h.removeEventListener('mouseenter', enter); h.removeEventListener('mouseleave', leave) })
    }
  }, [])

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[9998] h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-bronze-500 hidden lg:block" />
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 -ml-4 -mt-4 border border-bronze-500/35 rounded-full transition-[width,height,border-color] duration-300 hidden lg:block" />
    </>
  )
}
