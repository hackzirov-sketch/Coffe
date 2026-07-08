interface SectionLabelProps {
  children: string
  className?: string
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`inline-block text-xs font-medium uppercase tracking-[0.25em] text-accent-gold ${className}`}>
      {children}
    </span>
  )
}
