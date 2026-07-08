import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

export default function GlassCard({ children, className, glow = false, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-[--radius-card] p-6 transition-all duration-500",
        hover && "glass-hover hover:-translate-y-1 hover:shadow-xl",
        glow && "glow-gold",
        className
      )}
    >
      {children}
    </div>
  )
}
