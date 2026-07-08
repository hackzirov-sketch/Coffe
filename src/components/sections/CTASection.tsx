"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedSection from "./AnimatedSection"

export default function CTASection() {
  const glowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.5,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [])

  return (
    <AnimatedSection id="reservation" className="relative overflow-hidden px-6 py-28 lg:px-12 lg:py-40">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={glowRef}
          className="h-[500px] w-[500px] rounded-full bg-accent-gold/10 blur-[150px] opacity-30"
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl text-balance">
          Your next perfect coffee moment starts here.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          Reserve your table, explore our signature menu, or stop by for a handcrafted cup.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[--radius-button] bg-accent-gold px-8 py-3.5 text-sm font-semibold text-bg-primary transition-all hover:bg-accent-gold-hover hover:shadow-lg hover:shadow-accent-gold/25"
          >
            Reserve Now
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-[--radius-button] border border-border-glass px-8 py-3.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-glass-hover hover:border-border-glass-hover"
          >
            View Menu
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
