export function GoldParticles({ count = 16 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 53) % 100
        const top = (i * 37) % 100
        const delay = (i * 0.6) % 8
        const size = 2 + ((i * 3) % 4)
        return (
          <span
            key={i}
            className="particle absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: 'radial-gradient(circle, #e8c96a 0%, transparent 70%)',
              animationDelay: `${delay}s`,
              filter: 'blur(0.5px)',
            }}
          />
        )
      })}
    </div>
  )
}
