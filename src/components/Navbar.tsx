import { useEffect, useState } from 'react'
import { company, navigation } from '../data/siteContent'
import { BrandLogo } from './Media'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/90 backdrop-blur-xl border-b border-bronze-200/60 shadow-[0_12px_40px_rgba(70,53,32,0.08)]'
          : 'bg-ivory-50/55 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <BrandLogo className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-[4deg]" />
          <div className="leading-none">
            <div className="font-display font-bold text-sm tracking-tightest text-charcoal-900 uppercase">{company.name}</div>
            <div className="font-body text-[10px] tracking-[0.3em] text-bronze-600 mt-1 uppercase">{company.tagline}</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navigation.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-charcoal-700 hover:text-bronze-700 transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={company.phoneHref}
          className="hidden lg:inline-flex items-center gap-2 border border-bronze-400/70 bg-white/50 px-5 py-2.5 font-display text-xs tracking-[0.2em] text-bronze-800 hover:bg-bronze-500 hover:text-white transition-all duration-300"
        >
          CALL {company.phone}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`h-px w-6 bg-charcoal-900 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-px w-6 bg-charcoal-900 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-charcoal-900 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-ivory-50/95 backdrop-blur-xl ${
          open ? 'max-h-96 border-b border-bronze-200/60' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {navigation.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg text-charcoal-900 hover:text-bronze-700 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={company.phoneHref}
              onClick={() => setOpen(false)}
              className="inline-block border border-bronze-400/70 px-5 py-2.5 font-display text-xs tracking-[0.2em] text-bronze-800"
            >
              CALL {company.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
