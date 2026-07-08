import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[--radius-button] text-sm font-medium transition-all whitespace-nowrap outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-gold text-bg-primary hover:bg-accent-gold-hover hover:shadow-lg hover:shadow-accent-gold/25",
        outline:
          "border border-border-glass text-text-primary hover:bg-surface-glass-hover hover:border-border-glass-hover",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-glass",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
