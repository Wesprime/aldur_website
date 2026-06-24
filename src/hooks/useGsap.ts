import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapContext() {
  return useRef<gsap.Context>(null)
}

// Reveal: fade + rise on scroll into view
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((node) => {
        gsap.from(node, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return ref
}

// Clip reveal: horizontal wipe
export function useClipReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-clip]').forEach((node) => {
        gsap.fromTo(
          node,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: node,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return ref
}

// Parallax: move element on scroll
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.2) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((node) => {
        const s = parseFloat(node.dataset.parallax || String(speed))
        gsap.to(node, {
          yPercent: -s * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: node,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, el)
    return () => ctx.revert()
  }, [speed])
  return ref
}

export { gsap, ScrollTrigger }
