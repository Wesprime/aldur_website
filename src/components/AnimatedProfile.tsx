import { useState } from 'react'

type AnimatedProfileProps = {
  name: string
  imageSrc?: string
  variant?: 'bronze' | 'charcoal' | 'sand'
}

export default function AnimatedProfile({ name, imageSrc, variant = 'bronze' }: AnimatedProfileProps) {
  const [imageFailed, setImageFailed] = useState(!imageSrc)
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (!imageFailed) {
    return (
      <img
        src={imageSrc}
        alt={name}
        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        onError={() => setImageFailed(true)}
      />
    )
  }

  const accent = variant === 'charcoal' ? 'bg-charcoal-800' : variant === 'sand' ? 'bg-bronze-600' : 'bg-bronze-700'

  return (
    <div className="profile-avatar relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f4ead5_48%,#eadfc8_100%)]">
      <div className="absolute inset-0 grid-bg-fine opacity-40" />
      <div className="profile-halo absolute h-64 w-64 rounded-full border border-bronze-300/70" />
      <div className="profile-halo absolute h-52 w-52 rounded-full border border-dashed border-bronze-500/55" />
      <div className="profile-float absolute h-36 w-36 -translate-y-8 rounded-full border border-bronze-300 bg-[radial-gradient(circle_at_35%_25%,#fffdf8_0%,#eadfc8_56%,#c9aa62_100%)] shadow-[inset_-16px_-18px_38px_rgba(103,78,47,0.15),0_22px_60px_rgba(70,53,32,0.12)]" />
      <div className="profile-float absolute -mt-24 h-14 w-28 rounded-t-full bg-charcoal-800/90" />
      <div className={`absolute bottom-[18%] h-28 w-44 rounded-t-[110px] ${accent} shadow-[0_-16px_40px_rgba(70,53,32,0.14)]`} />
      <div className="absolute bottom-[33%] h-10 w-28 rounded-t-full bg-white/35" />
      <div className="absolute left-8 top-8 h-10 w-10 border-l border-t border-bronze-400/70" />
      <div className="absolute bottom-8 right-8 h-10 w-10 border-r border-b border-bronze-400/70" />
      <div className="absolute bottom-8 left-8 right-8 h-px bg-bronze-500/35" />
      <div className="relative z-10 -mt-24 flex h-14 w-14 items-center justify-center border border-bronze-400 bg-white/80 font-display text-lg font-bold text-charcoal-900 shadow-[0_14px_40px_rgba(70,53,32,0.12)]">
        {initials}
      </div>
    </div>
  )
}
