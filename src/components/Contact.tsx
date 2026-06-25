import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../hooks/useGsap'
import { company, contactMethods } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger)

function ContactIcon({ id }: { id: string }) {
  const common = 'h-6 w-6 stroke-current'
  if (id === 'phone') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M6.6 3.8 9.2 3l2.2 5-1.7 1.2c.9 1.9 2.3 3.3 4.2 4.2l1.2-1.7 5 2.2-.8 2.6c-.4 1.3-1.7 2-3 1.7C10.6 17 7 13.4 5.8 7.7c-.3-1.3.5-2.6 1.8-3.9Z" />
      </svg>
    )
  }
  if (id === 'email') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M4 6.5h16v11H4z" />
        <path d="m5 7 7 6 7-6" />
      </svg>
    )
  }
  if (id === 'whatsapp') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M7.2 18.2 4.5 19l.8-2.7a7.4 7.4 0 1 1 1.9 1.9Z" />
        <path d="M9 8.8c.3 3 2.1 4.9 5.2 5.6l1.2-1.5" />
      </svg>
    )
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
}

export default function Contact() {
  const root = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 1, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 72%', once: true },
        },
      )
      gsap.fromTo(
        '.contact-card',
        { opacity: 1, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 66%', once: true },
        },
      )
      ScrollTrigger.refresh()
    }, el)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      return
    }

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', accessKey)
    formData.append('subject', 'New Al Dur Al Nafees website enquiry')
    formData.append('from_name', company.legalName)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      setStatus(result.success ? 'success' : 'error')
      if (result.success) e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={root} className="relative bg-ivory-100 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div className="contact-reveal opacity-100">
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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-bronze-300 bg-ivory-50 text-bronze-700 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                      <ContactIcon id={method.id} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.24em] text-bronze-700">
                        {method.label}
                        {method.id === 'whatsapp' ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" /> : null}
                      </div>
                      <div className="mt-1 font-body text-sm leading-relaxed text-charcoal-800">{method.value}</div>
                    </div>
                    <span className="absolute right-4 top-4 font-display text-sm text-bronze-500 transition-transform duration-500 group-hover:translate-x-1">↗</span>
                    <span className="absolute bottom-0 left-0 h-px w-10 bg-bronze-500 transition-all duration-500 group-hover:w-full" />
                  </>
                )

                const className =
                  'contact-card group relative flex min-h-[132px] items-start gap-4 overflow-hidden border border-bronze-200 bg-white p-5 pr-10 opacity-100 shadow-[0_14px_40px_rgba(70,53,32,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-bronze-400 hover:shadow-[0_24px_70px_rgba(70,53,32,0.11)]'

                if (method.href) {
                  return (
                    <a key={method.id} href={method.href} target={method.id === 'whatsapp' || method.id === 'location' ? '_blank' : undefined} rel={method.id === 'whatsapp' || method.id === 'location' ? 'noopener noreferrer' : undefined} className={className}>
                      {content}
                    </a>
                  )
                }

                return (
                  <div key={method.id} className={className}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="contact-reveal relative border border-bronze-200 bg-white/85 p-8 opacity-100 shadow-[0_30px_90px_rgba(70,53,32,0.1)] transition-colors duration-500 focus-within:border-bronze-500 lg:p-10">
            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-bronze-400" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-bronze-400" />
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="h-16 w-16 border-2 border-bronze-500 flex items-center justify-center mb-6">
                  <span className="text-bronze-700 text-2xl">✓</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">Thank you.</h3>
                <p className="font-body text-sm text-charcoal-500">Your enquiry has been received. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="to_email" value={company.email} />
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Name</label>
                  <input required name="name" type="text" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-all duration-300 focus:border-bronze-600 focus:outline-none focus:pl-2" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Company</label>
                    <input required name="company" type="text" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-all duration-300 focus:border-bronze-600 focus:outline-none focus:pl-2" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Email</label>
                    <input required name="email" type="email" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-all duration-300 focus:border-bronze-600 focus:outline-none focus:pl-2" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Phone</label>
                  <input required name="phone" type="tel" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-all duration-300 focus:border-bronze-600 focus:outline-none focus:pl-2" placeholder="059 082 1464" />
                </div>
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Service Required</label>
                  <select required name="service_required" className="w-full bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 transition-all duration-300 focus:border-bronze-600 focus:outline-none focus:pl-2">
                    <option>Construction</option>
                    <option>Equipment Rental</option>
                    <option>Material Supply</option>
                    <option>Manpower Services</option>
                  </select>
                </div>
                <div>
                  <label className="font-display text-[10px] tracking-[0.25em] text-bronze-700 uppercase block mb-2">Message</label>
                  <textarea required name="message" rows={4} className="w-full resize-none bg-transparent border-b border-bronze-300 py-3 font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-all duration-300 focus:border-bronze-600 focus:outline-none focus:pl-2" placeholder="Tell us about your project..." />
                </div>
                {status === 'error' ? (
                  <p className="border border-red-200 bg-red-50 px-4 py-3 font-body text-sm text-red-700">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                ) : null}
                <button disabled={status === 'loading'} type="submit" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-charcoal-900 px-7 py-4 font-display text-sm tracking-[0.15em] text-white shadow-[0_16px_40px_rgba(21,20,17,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-600 hover:shadow-[0_22px_55px_rgba(170,134,66,0.24)] disabled:cursor-wait disabled:opacity-70">
                  <span className="absolute inset-y-0 left-0 w-0 bg-white/15 transition-all duration-500 group-hover:w-full" />
                  <span className="relative">{status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <span className="relative inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
