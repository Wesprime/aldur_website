import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { assets, leadership } from '../data/siteContent'
import { MediaImage } from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Leadership() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.leadership-card',
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 72%', once: true },
        },
      )
      ScrollTrigger.refresh()
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="leadership" ref={root} className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="section-num font-display text-sm text-bronze-600">/ 04</span>
            <span className="h-px w-12 bg-bronze-500" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-bronze-700">{leadership.kicker}</span>
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tightest text-charcoal-900 lg:text-6xl">
            {leadership.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          <article className="leadership-card flex min-h-[500px] flex-col overflow-hidden border border-bronze-200 bg-ivory-50 shadow-[0_24px_80px_rgba(70,53,32,0.09)]">
            <div className="relative h-[330px] overflow-hidden bg-white lg:h-[350px]">
              <MediaImage
                src={assets.leaderMain}
                alt={leadership.leaderName}
                label="Leadership"
                className="h-full w-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/12 to-transparent" />
              <div className="absolute left-6 top-6 h-12 w-12 border-l border-t border-bronze-300/70" />
              <div className="absolute bottom-6 right-6 h-12 w-12 border-b border-r border-bronze-300/70" />
            </div>
            <div className="flex flex-1 flex-col border-t border-bronze-200 bg-white p-7 lg:p-9">
              <div className="font-display text-[10px] uppercase tracking-[0.3em] text-bronze-700">{leadership.role}</div>
              <h3 className="mt-3 font-display text-3xl font-bold text-charcoal-900">{leadership.leaderName}</h3>
              <p className="mt-5 font-body text-sm leading-relaxed text-charcoal-600">{leadership.message}</p>
            </div>
          </article>

          <article className="leadership-card flex min-h-[500px] flex-col overflow-hidden border border-bronze-200 bg-ivory-50 shadow-[0_24px_80px_rgba(70,53,32,0.09)]">
            <div className="relative h-[330px] overflow-hidden bg-white lg:h-[350px]">
              <MediaImage
                src={assets.vision2030}
                alt="Saudi Vision 2030"
                label="Vision 2030"
                className="h-full w-full object-contain p-8 lg:p-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bronze-900/8 to-transparent" />
              <div className="absolute left-6 top-6 h-12 w-12 border-l border-t border-bronze-300/70" />
              <div className="absolute bottom-6 right-6 h-12 w-12 border-b border-r border-bronze-300/70" />
            </div>
            <div className="flex flex-1 flex-col border-t border-bronze-200 bg-white p-7 lg:p-9">
              <div className="font-display text-[10px] uppercase tracking-[0.3em] text-bronze-700">Kingdom Growth</div>
              <h3 className="mt-3 font-display text-3xl font-bold text-charcoal-900">{leadership.visionTitle}</h3>
              <p className="mt-5 font-body text-sm leading-relaxed text-charcoal-600">{leadership.vision}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
