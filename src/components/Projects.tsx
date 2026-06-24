import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { projects } from '../data/siteContent'
import { MediaImage } from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const img = card.querySelector('.project-img')
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
        if (img) {
          gsap.to(img, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
          })
        }
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={root} className="relative bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ 03</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700">SELECTED WORK</span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tightest text-charcoal-900 leading-[1.02]">
              Project capability<br /><span className="text-bronze-gradient">across the Kingdom.</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-charcoal-600 text-sm leading-relaxed">
            Representative scopes spanning construction, site resources, materials, and workforce support for clients across Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[280px] gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`project-card group relative overflow-hidden border border-bronze-200 bg-white shadow-[0_20px_70px_rgba(70,53,32,0.08)] hover:border-bronze-400 transition-colors duration-500 ${p.span}`}
            >
              <div className="project-img absolute inset-0 -bottom-[15%]">
                <MediaImage src={p.img} alt={p.title} label={p.cat} className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/82 via-charcoal-900/25 to-transparent" />
              <div className="absolute top-5 left-5 font-display text-[10px] tracking-[0.25em] text-white bg-charcoal-900/55 px-3 py-1.5 border border-white/20 backdrop-blur">
                {p.cat}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-display font-bold text-xl lg:text-2xl text-white mb-1">{p.title}</div>
                <div className="font-body text-xs text-white/75 flex items-center gap-2">
                  <span className="h-px w-4 bg-bronze-300" />
                  {p.loc}
                </div>
              </div>
              <div className="absolute top-5 right-5 h-8 w-8 border-r border-t border-white/0 group-hover:border-white/70 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
