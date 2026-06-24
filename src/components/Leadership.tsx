import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { leadership, team } from '../data/siteContent'
import AnimatedProfile from './AnimatedProfile'

gsap.registerPlugin(ScrollTrigger)

export default function Leadership() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.leader-message',
        { opacity: 1, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 78%', once: true },
        },
      )
      gsap.fromTo(
        '.leader-card',
        { opacity: 1, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 72%', once: true },
        },
      )
      ScrollTrigger.refresh()
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="leadership" ref={root} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ 04</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700 uppercase">{leadership.kicker}</span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tightest text-charcoal-900 leading-[1.02]">{leadership.title}</h2>
          </div>
          <div className="leader-message relative w-full border border-bronze-200 bg-ivory-50 p-6 shadow-[0_18px_60px_rgba(70,53,32,0.08)] opacity-100">
            <div className="absolute left-0 top-0 h-full w-1 bg-bronze-500" />
            <div className="font-display text-xs uppercase tracking-[0.24em] text-bronze-700">{leadership.messageTitle}</div>
            <p className="mt-4 font-body text-sm leading-relaxed text-charcoal-600">{leadership.message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((l, index) => (
            <div key={l.name} className="leader-card group relative flex min-h-[520px] flex-col overflow-hidden border border-bronze-200 bg-ivory-50 opacity-100 shadow-[0_20px_70px_rgba(70,53,32,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-bronze-400 hover:shadow-[0_30px_90px_rgba(70,53,32,0.13)]">
              <div className="relative h-[310px] shrink-0 overflow-hidden">
                <AnimatedProfile name={l.name} imageSrc={l.img} variant={index === 1 ? 'charcoal' : index === 2 ? 'sand' : 'bronze'} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute top-5 left-5 h-8 w-8 border-l border-t border-bronze-400/60" />
                <div className="absolute bottom-5 right-5 h-px w-10 bg-bronze-500 transition-all duration-500 group-hover:w-20" />
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <div className="font-display font-bold text-2xl text-charcoal-900">{l.name}</div>
                <div className="font-body text-xs tracking-[0.2em] text-bronze-700 uppercase mt-1">{l.role}</div>
                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-charcoal-600">{l.bio}</p>
                <div className="mt-6 flex items-center justify-between border-t border-bronze-200 pt-4">
                  <span className="font-display text-[10px] uppercase tracking-[0.24em] text-charcoal-400">Leadership</span>
                  <span className="font-display text-bronze-600 transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
