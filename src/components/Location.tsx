import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { assets, location } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger)

function SaudiMap() {
  const locations = [
    { name: 'Headquarters', sub: 'Al Majmaah', x: 270, y: 172, lx: 300, ly: 142, w: 142, hq: true },
    { name: 'Riyadh', x: 296, y: 205, lx: 325, ly: 214, w: 76 },
    { name: 'Jeddah', x: 126, y: 251, lx: 44, ly: 270, w: 76 },
    { name: 'Yanbu', x: 116, y: 172, lx: 42, ly: 132, w: 72 },
    { name: 'Khobar', x: 421, y: 183, lx: 424, ly: 199, w: 78 },
    { name: 'Jubail', x: 412, y: 149, lx: 424, ly: 112, w: 72 },
  ]

  return (
    <div className="map-card group relative overflow-hidden border border-bronze-200 bg-ivory-50 p-5 shadow-[0_24px_80px_rgba(70,53,32,0.1)] transition-transform duration-500 hover:-translate-y-1 lg:p-7">
      <div className="absolute inset-0 grid-bg-fine opacity-35" />
      <div className="absolute left-6 top-6 font-display text-[10px] uppercase tracking-[0.25em] text-bronze-700">KSA operations map</div>
      <div className="absolute right-6 top-6 font-display text-[10px] uppercase tracking-[0.25em] text-charcoal-400">{location.coordinates}</div>

      <svg className="map-svg relative z-10 mx-auto mt-14 h-[390px] w-full max-w-[640px]" viewBox="0 0 520 360" role="img" aria-label="Stylized Saudi Arabia operations network map">
        <defs>
          <linearGradient id="saudiFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fffdf8" />
            <stop offset="54%" stopColor="#eadfc8" />
            <stop offset="100%" stopColor="#c9aa62" />
          </linearGradient>
          <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#463520" floodOpacity="0.16" />
          </filter>
          <filter id="pointGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.26" stroke="#aa8642" strokeWidth="1">
          <path d="M62 82 H462" />
          <path d="M62 148 H462" />
          <path d="M62 214 H462" />
          <path d="M62 280 H462" />
          <path d="M112 52 V318" />
          <path d="M202 52 V318" />
          <path d="M292 52 V318" />
          <path d="M382 52 V318" />
        </g>

        <path
          className="map-outline"
          filter="url(#mapShadow)"
          d="M151 62 L230 40 L308 56 L360 94 L420 101 L444 142 L420 184 L438 229 L397 272 L337 286 L302 324 L241 310 L198 282 L152 286 L120 242 L96 219 L112 170 L96 130 L126 92 Z"
          fill="url(#saudiFill)"
          stroke="#876636"
          strokeWidth="2"
        />
        <path className="map-region" d="M242 132 L296 124 L332 154 L320 204 L267 219 L228 184 Z" fill="#aa8642" opacity="0.16" stroke="#876636" strokeWidth="1.2" />
        <path className="map-region" d="M139 102 L204 80 L255 96 L240 132 L181 140 Z" fill="#fffdf8" opacity="0.45" stroke="#d6b875" strokeWidth="1" />
        <path className="map-region" d="M310 62 L370 97 L342 126 L286 114 Z" fill="#fffdf8" opacity="0.35" stroke="#d6b875" strokeWidth="1" />

        <path className="route-line" d="M270 172 C242 184, 190 216, 126 251" fill="none" stroke="#aa8642" strokeWidth="1.5" strokeDasharray="7 8" opacity="0.68" />
        <path className="route-line" d="M270 172 C220 151, 166 148, 116 172" fill="none" stroke="#aa8642" strokeWidth="1.25" strokeDasharray="5 9" opacity="0.58" />
        <path className="route-line" d="M270 172 C282 181, 290 192, 296 205" fill="none" stroke="#aa8642" strokeWidth="1.35" strokeDasharray="6 8" opacity="0.72" />
        <path className="route-line" d="M270 172 C318 153, 365 148, 412 149" fill="none" stroke="#aa8642" strokeWidth="1.35" strokeDasharray="6 8" opacity="0.72" />
        <path className="route-line" d="M270 172 C324 182, 374 188, 421 183" fill="none" stroke="#aa8642" strokeWidth="1.35" strokeDasharray="6 8" opacity="0.72" />

        {locations.map((point) => (
          <g key={point.name} className="map-marker group cursor-pointer" transform={`translate(${point.x} ${point.y})`}>
            <title>{point.name}</title>
            <circle className={point.hq ? 'marker-pulse marker-pulse-hq' : 'marker-pulse'} r={point.hq ? 18 : 10} fill="#aa8642" opacity="0.14" />
            <circle r={point.hq ? 7 : 4.5} fill={point.hq ? '#674e2f' : '#aa8642'} filter={point.hq ? 'url(#pointGlow)' : undefined} />
            <circle r={point.hq ? 2.8 : 1.8} fill="#fffdf8" />
          </g>
        ))}

        {locations.map((point) => (
          <g key={`${point.name}-label`} className="map-label">
            <path d={`M${point.x} ${point.y} L${point.lx} ${point.ly + 11}`} fill="none" stroke="#aa8642" strokeWidth="0.75" opacity="0.72" />
            <rect x={point.lx} y={point.ly} width={point.w} height={point.hq ? 34 : 24} fill="#fffdf8" stroke="#aa8642" strokeWidth="0.8" />
            <text x={point.lx + 8} y={point.ly + 15} className="fill-charcoal-900 font-display" fontSize={point.hq ? 10 : 9} fontWeight="700">
              {point.name}
            </text>
            {point.sub ? (
              <text x={point.lx + 8} y={point.ly + 28} className="fill-bronze-700 font-body" fontSize="8">
                {point.sub}
              </text>
            ) : null}
          </g>
        ))}
      </svg>

      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3 border border-bronze-200 bg-white/80 px-5 py-4">
        <span className="font-display text-xs uppercase tracking-[0.22em] text-charcoal-700">Headquarters highlighted</span>
        <span className="font-body text-xs text-charcoal-500">Connected service points across KSA</span>
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
      gsap.from('.map-marker', {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center',
        duration: 0.65,
        stagger: 0.08,
        delay: 0.55,
        ease: 'back.out(1.8)',
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
            <div className="mt-8 border border-bronze-200 bg-white/85 shadow-[0_12px_34px_rgba(70,53,32,0.05)]">
              <div className="border-b border-bronze-200 px-5 py-4">
                <div className="font-display text-[10px] uppercase tracking-[0.28em] text-bronze-700">Headquarters</div>
                <div className="mt-2 font-display text-sm font-semibold text-charcoal-900">Al Majmaah Industrial Area</div>
              </div>
              <div className="grid grid-cols-1 gap-px bg-bronze-200/70 sm:grid-cols-2">
                {['Riyadh', 'Jeddah', 'Yanbu', 'Khobar', 'Jubail'].map((point) => (
                  <div key={point} className="bg-white px-5 py-4">
                    <div className="font-body text-xs text-charcoal-500">Regional Coverage</div>
                    <div className="mt-1 font-display text-sm font-semibold text-charcoal-900">{point}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-bronze-200 bg-[linear-gradient(90deg,#fffdf8,#eadfc8)] px-5 py-4">
                <div className="font-display text-[10px] uppercase tracking-[0.28em] text-bronze-700">Coverage</div>
                <div className="mt-2 font-display text-sm font-semibold text-charcoal-900">Kingdom-wide support</div>
              </div>
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
