import { company } from '../data/siteContent'
import { BrandLogo } from './Media'

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 border-t border-bronze-700/20 pt-16 pb-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo className="h-11 w-11 object-contain bg-ivory-50 p-1" />
              <div>
                <div className="font-display font-bold text-sm tracking-tightest text-ivory-50 uppercase">{company.name}</div>
                <div className="font-body text-[10px] tracking-[0.3em] text-bronze-300 mt-1 uppercase">{company.tagline}</div>
              </div>
            </div>
            <p className="font-body text-sm text-ivory-100/70 max-w-sm leading-relaxed">
              A Saudi general contractor aligned with Vision 2030 — delivering construction, equipment, materials, and manpower with precision at scale.
            </p>
          </div>

          <div>
            <div className="font-display text-xs tracking-[0.25em] text-bronze-300 uppercase mb-4">Services</div>
            <ul className="space-y-2">
              {['Construction', 'Equipment Rental', 'Material Supply', 'Manpower Services'].map((s) => (
                <li key={s}><a href="#services" className="font-body text-sm text-ivory-100/65 hover:text-bronze-200 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-xs tracking-[0.25em] text-bronze-300 uppercase mb-4">Contact</div>
            <ul className="space-y-2 font-body text-sm text-ivory-100/65">
              <li><a href={company.phoneHref} className="hover:text-bronze-200 transition-colors">{company.phone}</a></li>
              <li><a href={company.emailHref} className="hover:text-bronze-200 transition-colors">{company.email}</a></li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-body text-xs text-ivory-100/45">© {new Date().getFullYear()} {company.legalName}. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center sm:justify-end">
            <a
              href="https://www.wesprimeit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-ivory-100/45 transition-colors hover:text-bronze-200"
            >
              Developed by <span className="text-bronze-300/90">Wesprime</span>
            </a>
            <div className="font-display text-[10px] tracking-[0.3em] text-bronze-300/80">EST. 2016 · RIYADH · KSA</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
