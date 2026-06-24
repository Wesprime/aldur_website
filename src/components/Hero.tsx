import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { assets, hero } from '../data/siteContent'
import { MediaImage } from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8 })
        .from('.hero-line', { opacity: 0, yPercent: 120, duration: 1, stagger: 0.12 }, '-=0.4')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 }, '-=0.4')
        .from('.hero-stat', { opacity: 0, y: 30, duration: 0.7, stagger: 0.08 }, '-=0.3')
        .from('.hero-frame', { opacity: 0, scale: 1.1, duration: 1.4, ease: 'power3.out' }, '-=1.2')

      // Scroll: hero content drifts up & fades
      gsap.to('.hero-content', {
        yPercent: -30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      // Frame scales slightly
      gsap.to('.hero-frame', {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={root} className="relative min-h-screen w-full overflow-hidden bg-ivory-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,184,117,0.22),transparent_34%),linear-gradient(180deg,#fffdf8_0%,#fbf8f0_100%)]" />
      <div className="absolute inset-0 grid-bg opacity-45" />

      <div className="hero-frame absolute right-0 top-0 hidden h-full w-[48%] overflow-hidden lg:block">
        <MediaImage
          src={assets.hero}
          alt="Al Dur Al Nafees construction project"
          label="Construction"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-50 via-ivory-50/35 to-transparent" />
        <div className="absolute inset-0 bg-bronze-900/10" />
      </div>

      <div className="pointer-events-none absolute top-24 left-6 lg:left-10 h-16 w-16 border-l border-t border-bronze-400/50" />
      <div className="pointer-events-none absolute bottom-10 right-6 lg:right-10 h-16 w-16 border-r border-b border-bronze-400/50" />

      <div className="hero-content relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="hero-eyebrow flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-bronze-500" />
          <span className="font-display text-xs tracking-[0.35em] text-bronze-700 uppercase">{hero.eyebrow}</span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-charcoal-900 max-w-5xl">
          <span className="block overflow-hidden"><span className="hero-line block">{hero.titleLines[0]}</span></span>
          <span className="block overflow-hidden"><span className="hero-line block text-bronze-gradient">{hero.titleLines[1]}</span></span>
          <span className="block overflow-hidden"><span className="hero-line block">{hero.titleLines[2]}</span></span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl font-body text-base lg:text-lg text-charcoal-700 leading-relaxed">{hero.body}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="hero-cta group inline-flex items-center gap-3 bg-charcoal-900 px-7 py-4 font-display text-sm tracking-[0.15em] text-white hover:bg-bronze-600 transition-colors"
          >
            {hero.primaryCta.label.toUpperCase()}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="hero-cta inline-flex items-center gap-3 border border-bronze-400/70 bg-white/50 px-7 py-4 font-display text-sm tracking-[0.15em] text-charcoal-900 hover:border-bronze-600 hover:text-bronze-800 transition-colors"
          >
            {hero.secondaryCta.label.toUpperCase()}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-bronze-200/70 border border-bronze-200/80 max-w-3xl shadow-[0_24px_80px_rgba(70,53,32,0.08)]">
          {[
            { v: '8+', l: 'Years' },
            { v: '150+', l: 'Projects' },
            { v: '4', l: 'Service Lines' },
            { v: 'KSA', l: 'Coverage' },
          ].map((s) => (
            <div key={s.l} className="hero-stat bg-ivory-50/85 px-5 py-5 backdrop-blur">
              <div className="font-display font-bold text-3xl text-bronze-700">{s.v}</div>
              <div className="font-body text-[11px] tracking-[0.2em] text-charcoal-500 mt-1 uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-display text-[10px] tracking-[0.3em] text-charcoal-400">SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-bronze-500 to-transparent" />
      </div>
    </section>
  )
}
