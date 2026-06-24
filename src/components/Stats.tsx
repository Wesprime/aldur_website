import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { stats } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger)

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { v: 0 }
    const tween = gsap.to(obj, {
      v: value,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.v) + suffix
      },
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    })
    return () => {
      tween.kill()
    }
  }, [value, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative bg-white border-y border-bronze-200/70">
      <div className="overflow-hidden border-b border-bronze-200/70 py-4">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {['CONSTRUCTION', 'MANPOWER SERVICES', 'EQUIPMENT RENTAL', 'MATERIAL SUPPLY', 'VISION 2030', 'RIYADH · KSA'].map((t) => (
                <span key={t} className="flex items-center gap-8 font-display text-sm tracking-[0.3em] text-bronze-700/55">
                  {t}
                  <span className="text-bronze-300">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bronze-200/80 border border-bronze-200/80">
          {stats.map((s) => (
            <div key={s.label} className="stat-card bg-ivory-50 p-8 lg:p-10 group hover:bg-white transition-colors duration-500">
              <div className="font-display font-bold text-5xl lg:text-6xl text-bronze-gradient leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-5 font-display text-sm tracking-[0.15em] text-charcoal-900 uppercase">{s.label}</div>
              <div className="mt-2 font-body text-xs text-charcoal-500">{s.sub}</div>
              <div className="mt-6 h-px w-0 bg-bronze-500 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
