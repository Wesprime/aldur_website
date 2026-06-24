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

export function VideoMedia({
  src = assets.video,
  fallback,
  caption,
  className = '',
}: {
  src?: string
  fallback?: string
  caption?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <MediaImage
          src={fallback}
          alt={caption || 'Construction media'}
          label="Construction media"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setFailed(true)}
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
      <div className="avatar-halo absolute h-56 w-56 rounded-full border border-bronze-300/70" />
      <div className="avatar-halo absolute h-44 w-44 rounded-full border border-dashed border-bronze-400/55" />
      <div className="avatar-float absolute h-40 w-40 rounded-full border border-bronze-300/70 bg-white/60 shadow-[0_30px_80px_rgba(112,91,52,0.16)]" />
      <div className="avatar-float absolute h-24 w-24 -translate-y-7 rounded-full bg-[linear-gradient(135deg,#fffdf8,#d6b875)] opacity-95 shadow-[inset_-12px_-12px_24px_rgba(103,78,47,0.12)]" />
      <div className="absolute bottom-[18%] h-24 w-36 rounded-t-[90px] bg-charcoal-800/90 shadow-[0_-12px_30px_rgba(70,53,32,0.12)]" />
      <div className="absolute bottom-10 left-8 right-8 h-px bg-bronze-500/40" />
      <div className="relative z-10 -mt-20 font-display text-2xl font-bold text-charcoal-900">{initials}</div>
    </div>
  )
}
