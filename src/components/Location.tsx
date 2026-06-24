import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { assets, location } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger)

function SaudiMap() {
  return (
    <div className="map-card group relative min-h-[520px] overflow-hidden border border-bronze-200 bg-ivory-50 p-6 shadow-[0_24px_80px_rgba(70,53,32,0.1)] transition-transform duration-500 hover:-translate-y-1 lg:p-8">
      <div className="absolute inset-0 grid-bg-fine opacity-35" />
      <div className="absolute left-6 top-6 font-display text-[10px] uppercase tracking-[0.25em] text-bronze-700">KSA operations map</div>
      <div className="absolute right-6 top-6 font-display text-[10px] uppercase tracking-[0.25em] text-charcoal-400">{location.coordinates}</div>

      <svg className="map-svg relative z-10 mx-auto mt-14 h-[360px] w-full max-w-[520px]" viewBox="0 0 420 330" role="img" aria-label="Stylized Saudi Arabia map highlighting Riyadh Province">
        <defs>
          <linearGradient id="saudiFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fffdf8" />
            <stop offset="54%" stopColor="#eadfc8" />
            <stop offset="100%" stopColor="#c9aa62" />
          </linearGradient>
          <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#463520" floodOpacity="0.16" />
          </filter>
        </defs>

        <path className="route-line" d="M65 230 C125 200, 174 170, 219 164 C265 157, 310 130, 356 94" fill="none" stroke="#aa8642" strokeWidth="1.6" strokeDasharray="7 8" opacity="0.65" />
        <path className="route-line" d="M98 104 C150 126, 179 150, 219 164 C255 178, 284 205, 322 244" fill="none" stroke="#aa8642" strokeWidth="1.2" strokeDasharray="5 9" opacity="0.45" />

        <path
          className="map-outline"
          filter="url(#mapShadow)"
          d="M109 56 L177 39 L246 54 L290 86 L340 90 L360 126 L338 161 L354 201 L319 240 L266 252 L236 287 L183 276 L148 252 L108 255 L82 217 L61 197 L74 157 L62 122 L87 93 Z"
          fill="url(#saudiFill)"
          stroke="#876636"
          strokeWidth="2"
        />
        <path className="map-region" d="M192 132 L238 122 L272 151 L262 198 L218 211 L184 181 Z" fill="#aa8642" opacity="0.2" stroke="#876636" strokeWidth="1.2" />
        <path className="map-region" d="M95 96 L150 77 L195 91 L182 126 L132 132 Z" fill="#fffdf8" opacity="0.45" stroke="#d6b875" strokeWidth="1" />
        <path className="map-region" d="M248 57 L303 90 L279 119 L231 108 Z" fill="#fffdf8" opacity="0.35" stroke="#d6b875" strokeWidth="1" />

        <circle className="marker-pulse" cx="219" cy="164" r="18" fill="#aa8642" opacity="0.14" />
        <circle cx="219" cy="164" r="6" fill="#674e2f" />
        <circle cx="219" cy="164" r="2.5" fill="#fffdf8" />
        <text x="235" y="159" className="fill-charcoal-900 font-display" fontSize="12" fontWeight="700">Riyadh Province</text>
        <text x="235" y="176" className="fill-bronze-700 font-body" fontSize="10">Al Majmaah Industrial Area</text>

        <g opacity="0.35" stroke="#aa8642" strokeWidth="1">
          <path d="M42 70 H382" />
          <path d="M42 135 H382" />
          <path d="M42 200 H382" />
          <path d="M96 36 V292" />
          <path d="M178 36 V292" />
          <path d="M260 36 V292" />
          <path d="M342 36 V292" />
        </g>
      </svg>

      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3 border border-bronze-200 bg-white/80 px-5 py-4">
        <span className="font-display text-xs uppercase tracking-[0.22em] text-charcoal-700">Central region highlighted</span>
        <span className="font-body text-xs text-charcoal-500">Riyadh Province · Kingdom-wide support</span>
      </div>
    </div>
  )
}

function OptionalLocationVideo() {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <div className="location-media mt-5 overflow-hidden border border-bronze-200 bg-white shadow-[0_18px_60px_rgba(70,53,32,0.08)]">
      <video
        src={assets.locationVideo}
        className="h-56 w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onError={() => setHidden(true)}
      />
      <div className="border-t border-bronze-200 bg-white px-5 py-3 font-display text-[10px] uppercase tracking-[0.24em] text-bronze-700">
        {location.videoCaption}
      </div>
    </div>
  )
}

export default function Location() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.location-reveal', {
        opacity: 0,
        y: 42,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 72%' },
      })
      gsap.fromTo(
        '.map-outline',
        { strokeDasharray: 900, strokeDashoffset: 900, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 68%' },
        },
      )
      gsap.from('.route-line', {
        strokeDashoffset: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 62%' },
      })
      gsap.to('.marker-pulse', {
        scale: 1.45,
        transformOrigin: 'center',
        opacity: 0.05,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.map-card', {
        yPercent: -3,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-ivory-100 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="location-reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ KSA</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700">LOCATION</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tightest text-charcoal-900 lg:text-6xl">{location.title}</h2>
            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-charcoal-600">{location.body}</p>
            <div className="mt-8 inline-flex border border-bronze-300 bg-white px-5 py-3 font-display text-xs uppercase tracking-[0.22em] text-bronze-800 shadow-[0_12px_34px_rgba(70,53,32,0.06)]">
              {location.marker}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-px border border-bronze-200 bg-bronze-200/70 sm:grid-cols-2">
              {location.points.map((point) => (
                <div key={point} className="bg-white/85 px-5 py-4 font-display text-xs text-charcoal-800">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="location-reveal">
            <SaudiMap />
            <OptionalLocationVideo />
          </div>
        </div>
      </div>
    </section>
  )
}
