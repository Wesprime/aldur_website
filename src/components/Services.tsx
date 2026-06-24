import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { services } from '../data/siteContent'
import { MediaImage } from './Media'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.service-row').forEach((row) => {
        const img = row.querySelector('.service-img')
        const panel = row.querySelector('.service-panel')
        if (img) {
          gsap.fromTo(
            img,
            { clipPath: 'inset(0 100% 0 0)' },
            {
              clipPath: 'inset(0 0% 0 0)',
              duration: 1.3,
              ease: 'power4.inOut',
              scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' },
            },
          )
        }
        if (panel) {
          gsap.from(panel, {
            opacity: 0,
            x: 40,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 70%', toggleActions: 'play none none none' },
          })
        }
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={root} className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ 02</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700">WHAT WE DO</span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tightest text-charcoal-900 max-w-2xl leading-[1.02]">
              Four service lines.<br />
              <span className="text-bronze-gradient">One accountable partner.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-charcoal-600 text-sm leading-relaxed">
            Practical contracting support for clients who need coordinated site execution, reliable resources, and clear commercial accountability.
          </p>
        </div>

        <div className="flex flex-col gap-px bg-bronze-200/80 border border-bronze-200/80">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-row bg-ivory-50 group hover:bg-white transition-colors duration-500 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col lg:flex-row items-stretch`}
            >
              <div className="service-img relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <MediaImage src={s.img} alt={s.title} label={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/55 to-transparent" />
                <div className="absolute top-6 left-6 font-display font-bold text-6xl text-white/55">{s.num}</div>
              </div>
              <div className="service-panel lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-display font-bold text-3xl lg:text-4xl text-charcoal-900 mb-4">{s.title}</h3>
                <p className="font-body text-charcoal-600 text-sm lg:text-base leading-relaxed mb-6 max-w-md">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 font-body text-xs text-charcoal-700">
                      <span className="text-bronze-600">▸</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
