import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { about, assets } from '../data/siteContent'
import { MediaImage } from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      // Pinned image with text reveal
      gsap.from('.about-img', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.4,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })
      gsap.from('.about-text', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 60%' },
      })
      // Parallax on image
      gsap.to('.about-img-inner', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={root} className="relative bg-ivory-100 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="about-img relative aspect-[4/5] overflow-hidden border border-bronze-200 bg-white shadow-[0_30px_90px_rgba(70,53,32,0.12)]">
            <div className="about-img-inner absolute inset-0 -bottom-[12%]">
              <MediaImage
                src={assets.about}
                alt="Riyadh construction"
                label="Riyadh Province"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/45 to-transparent" />
            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-bronze-300" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-bronze-300" />
            <div className="absolute bottom-6 left-6 font-display text-xs tracking-[0.2em] text-white">RIYADH PROVINCE</div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ 01</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700 uppercase">{about.kicker}</span>
            </div>
            <h2 className="about-text font-display font-bold text-4xl lg:text-5xl tracking-tightest text-charcoal-900 leading-[1.05] mb-6">{about.title}</h2>
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={`about-text font-body ${index === 0 ? 'text-charcoal-700 text-base' : 'text-charcoal-600 text-sm'} leading-relaxed mb-5`}>
                {paragraph}
              </p>
            ))}

            <div className="about-text grid grid-cols-2 gap-px bg-bronze-200/70 border border-bronze-200/80">
              {about.facts.map((x) => (
                <div key={x.k} className="bg-white/80 p-5">
                  <div className="font-body text-[10px] tracking-[0.2em] text-charcoal-500 uppercase mb-1">{x.k}</div>
                  <div className="font-display text-sm text-bronze-800">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
