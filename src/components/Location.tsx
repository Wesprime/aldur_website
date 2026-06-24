import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { assets, location } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger)

function VideoPanel() {
  const [videoFailed, setVideoFailed] = useState(false)

  if (videoFailed) {
    return (
      <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#fffdf8,#eadfc8)]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-xs text-center">
          <div className="mx-auto mb-5 h-16 w-16 border border-bronze-400/70 bg-white/50" />
          <div className="font-display text-sm uppercase tracking-[0.25em] text-bronze-800">Construction video</div>
          <p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">Place your video at public/sample/video/construction.mp4.</p>
        </div>
      </div>
    )
  }

  return (
    <video
      className="h-full min-h-[320px] w-full object-cover"
      src={assets.video}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setVideoFailed(true)}
    />
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
      gsap.to('.globe-orbit', {
        rotate: 360,
        duration: 34,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.globe-core', {
        rotate: -18,
        yPercent: -4,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-charcoal-900 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="location-reveal overflow-hidden border border-bronze-500/25 bg-charcoal-800 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <VideoPanel />
          </div>

          <div className="location-reveal relative overflow-hidden border border-bronze-500/25 bg-white p-8 lg:p-12">
            <div className="absolute inset-0 grid-bg opacity-25" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="section-num font-display text-sm text-bronze-600">/ KSA</span>
                  <span className="h-px w-12 bg-bronze-500" />
                  <span className="font-display text-xs tracking-[0.3em] text-bronze-700">LOCATION</span>
                </div>
                <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tightest text-charcoal-900 lg:text-5xl">{location.title}</h2>
                <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-600">{location.body}</p>
                <div className="mt-8 space-y-px border border-bronze-200 bg-bronze-200/70">
                  {location.points.map((point) => (
                    <div key={point} className="bg-ivory-50 px-5 py-4 font-display text-sm text-charcoal-800">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                <div className="globe-core absolute inset-4 rounded-full border border-bronze-300 bg-[radial-gradient(circle_at_35%_30%,#fffdf8_0%,#eadfc8_34%,#c9aa62_100%)] shadow-[inset_-28px_-24px_60px_rgba(70,53,32,0.16),0_25px_70px_rgba(70,53,32,0.14)]" />
                <div className="globe-orbit absolute inset-0 rounded-full border border-dashed border-bronze-400/80" />
                <div className="absolute left-[56%] top-[48%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-700 shadow-[0_0_0_10px_rgba(170,134,66,0.18)]" />
                <div className="absolute left-[58%] top-[54%] font-display text-[10px] uppercase tracking-[0.2em] text-charcoal-800">Riyadh</div>
                <div className="absolute inset-x-10 top-1/2 h-px bg-bronze-500/25" />
                <div className="absolute inset-y-10 left-1/2 w-px bg-bronze-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
