import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { company } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const root = useRef<HTMLDivElement>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={root} className="relative bg-ivory-100 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="contact-reveal flex items-center gap-3 mb-6">
              <span className="section-num font-display text-sm text-bronze-600">/ 05</span>
              <span className="h-px w-12 bg-bronze-500" />
              <span className="font-display text-xs tracking-[0.3em] text-bronze-700">GET IN TOUCH</span>
            </div>
            <h2 className="contact-reveal font-display font-bold text-4xl lg:text-6xl tracking-tightest text-charcoal-900 leading-[1.02] mb-8">
              Let's build<br /><span className="text-bronze-gradient">your next program.</span>
            </h2>
            <p className="contact-reveal font-body text-charcoal-600 text-sm leading-relaxed mb-10 max-w-md">
              Reach out for construction, equipment rental, material supply, or manpower inquiries. We respond within one business day.
            </p>

            <div className="contact-reveal space-y-px bg-bronze-200/80 border border-bronze-200/80">
              <a href={company.phoneHref} className="flex items-center gap-4 bg-white p-5 hover:bg-ivory-50 transition-colors group">
                <span className="font-display text-xs tracking-[0.2em] text-bronze-700 w-20">PHONE</span>
                <span className="font-body text-sm text-charcoal-800 group-hover:text-bronze-800 transition-colors">{company.phone}</span>
              </a>
              <a href={company.emailHref} className="flex items-center gap-4 bg-white p-5 hover:bg-ivory-50 transition-colors group">
                <span className="font-display text-xs tracking-[0.2em] text-bronze-700 w-20">EMAIL</span>
                <span className="font-body text-sm text-charcoal-800 group-hover:text-bronze-800 transition-colors">{company.email}</span>
              </a>
              <div className="flex items-center gap-4 bg-white p-5">
                <span className="font-display text-xs tracking-[0.2em] text-bronze-700 w-20">HQ</span>
                <span className="font-body text-sm text-charcoal-800">{company.location}</span>
              </div>
            </div>
          </div>

          <div className="contact-reveal relative border border-bronze-200 bg-white/80 p-8 shadow-[0_30px_90px_rgba(70,53,32,0.1)] lg:p-10">
            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-bronze-400" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-bronze-400" />
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="h-16 w-16 border-2 border-bronze-500 flex items-center justify-center mb-6">
                  <span className="text-bronze-700 text-2xl">✓</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">Message received</h3>
                <p className="font-body text-sm text-charcoal-500">We'll respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-bronze-600 transition-colors" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Email</label>
                    <input required type="email" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-bronze-600 transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Phone</label>
                    <input type="tel" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-bronze-600 transition-colors" placeholder="+966 ..." />
                  </div>
                </div>
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Service</label>
                  <select className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 focus:outline-none focus:border-bronze-600 transition-colors">
                    <option>Construction</option>
                    <option>Equipment Rental</option>
                    <option>Material Supply</option>
                    <option>Manpower Services</option>
                  </select>
                </div>
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Message</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-bronze-600 transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="group inline-flex items-center justify-center gap-3 bg-charcoal-900 px-7 py-4 font-display text-sm tracking-[0.15em] text-white hover:bg-bronze-600 transition-colors">
                  SEND MESSAGE
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
