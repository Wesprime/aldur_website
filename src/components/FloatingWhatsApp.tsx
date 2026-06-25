import { company } from '../data/siteContent'

export default function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Al Dur Al Nafees on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center border border-bronze-400 bg-bronze-500 text-charcoal-900 shadow-[0_18px_50px_rgba(70,53,32,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-bronze-400"
    >
      <span className="absolute inset-0 animate-[whatsappPulse_2.4s_ease-out_infinite] border border-bronze-500" />
      <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M7.2 18.2 4.5 19l.8-2.7a7.4 7.4 0 1 1 1.9 1.9Z" />
        <path d="M9 8.8c.3 3 2.1 4.9 5.2 5.6l1.2-1.5" />
      </svg>
    </a>
  )
}
