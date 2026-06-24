import { useState } from 'react'
import { assets } from '../data/siteContent'

type MediaImageProps = {
  src?: string
  alt: string
  className?: string
  fallbackClassName?: string
  label?: string
}

export function MediaImage({ src, alt, className = '', fallbackClassName = '', label }: MediaImageProps) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#f8f4ea_0%,#e8dcc2_48%,#c9aa62_100%)] ${fallbackClassName || className}`}
        aria-label={alt}
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 grid-bg opacity-35" />
          <div className="absolute inset-x-8 top-1/2 h-px bg-bronze-500/35" />
          <div className="absolute inset-y-8 left-1/2 w-px bg-bronze-500/25" />
          <div className="absolute bottom-6 left-6 right-6 font-display text-xs uppercase tracking-[0.28em] text-charcoal-700/70">
            {label || 'Project media'}
          </div>
        </div>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}

export function BrandLogo({ className = '' }: { className?: string }) {
  const [src, setSrc] = useState(assets.logoPng)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`flex items-center justify-center border border-bronze-300 bg-ivory-50 font-display text-xs font-bold text-bronze-800 ${className}`} aria-label="Al Dur Al Nafees">
        ADN
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Al Dur Al Nafees"
      className={className}
      onError={() => {
        if (src !== assets.logoFallback) setSrc(assets.logoFallback)
        else setFailed(true)
      }}
    />
  )
}

export function TeamAvatar({ src, name, className = '' }: { src?: string; name: string; className?: string }) {
  const [failed, setFailed] = useState(!src)
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (!failed) {
    return <img src={src} alt={name} className={className} onError={() => setFailed(true)} />
  }

  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-ivory-200 ${className}`} aria-label={name}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute h-40 w-40 rounded-full border border-bronze-300/70 bg-white/55 shadow-[0_30px_80px_rgba(112,91,52,0.16)]" />
      <div className="absolute h-24 w-24 translate-y-4 rounded-full bg-[linear-gradient(135deg,#f4ead5,#c9aa62)] opacity-90" />
      <div className="absolute bottom-0 h-1/3 w-2/3 rounded-t-full bg-charcoal-800/85" />
      <div className="relative z-10 -mt-16 font-display text-2xl font-bold text-charcoal-900">{initials}</div>
    </div>
  )
}
