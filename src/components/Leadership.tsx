import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { team } from '../data/siteContent'
import { TeamAvatar } from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Leadership() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.leader-card', {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 75%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="leadership" ref={root} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ 04</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700">LEADERSHIP</span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tightest text-charcoal-900 leading-[1.02]">
              The team<br /><span className="text-bronze-gradient">behind the work.</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-charcoal-600 text-sm leading-relaxed">
            Leadership details are structured for easy editing. Drop final portraits into public/sample/team and update the mapped filenames when ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((l) => (
            <div key={l.name} className="leader-card group relative overflow-hidden border border-bronze-200 bg-ivory-50 shadow-[0_20px_70px_rgba(70,53,32,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-bronze-400 hover:shadow-[0_30px_90px_rgba(70,53,32,0.13)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <TeamAvatar src={l.img} name={l.name} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute top-5 left-5 h-8 w-8 border-l border-t border-bronze-400/60" />
              </div>
              <div className="relative p-6">
                <div className="font-display font-bold text-2xl text-charcoal-900">{l.name}</div>
                <div className="font-body text-xs tracking-[0.2em] text-bronze-700 uppercase mt-1">{l.role}</div>
                <p className="mt-4 font-body text-sm leading-relaxed text-charcoal-600">{l.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
