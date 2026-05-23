interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, center, className = '' }: Props) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''} mb-5`}>
          <span className="gold-divider-short" />
          <span className="hairline text-[var(--gold)]">{eyebrow}</span>
          <span className="gold-divider-short" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
        <span className="text-[var(--foreground)]">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
