"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import GlassCard from "./GlassCard"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const infoCardRef = useRef<HTMLDivElement>(null)
  const bgGlowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      textRef.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    )
      .fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        infoCardRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )

    if (bgGlowRef.current) {
      gsap.to(bgGlowRef.current, {
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut",
      })
    }
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20 lg:px-12"
    >
      <div ref={bgGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-gold/5 blur-[120px] opacity-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <div ref={textRef} className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-accent-gold">
            Premium Coffee Experience
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Brewed for Slow Mornings and Bold Minds
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
            Experience artisan coffee in a space where taste, design, and atmosphere meet.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-[--radius-button] bg-accent-gold px-8 py-3.5 text-sm font-semibold text-bg-primary transition-all hover:bg-accent-gold-hover hover:shadow-lg hover:shadow-accent-gold/25"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 rounded-[--radius-button] border border-border-glass px-8 py-3.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-glass-hover hover:border-border-glass-hover"
            >
              Book a Table
            </a>
          </div>
        </div>

        <div ref={visualRef} className="relative flex-shrink-0 lg:max-w-[520px]">
          <div className="relative aspect-[4/5] w-[320px] sm:w-[400px] lg:w-[480px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-coffee/20 via-accent-gold/10 to-transparent blur-3xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-[2rem]">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-coffee/30 via-bg-tertiary to-bg-primary">
                <div className="relative h-48 w-36 sm:h-64 sm:w-48">
                  <div className="absolute top-0 left-1/2 h-full w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-coffee/60 via-accent-gold/20 to-transparent blur-sm" />
                  <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/10 blur-xl" />
                  <div className="absolute bottom-[15%] left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full bg-gradient-to-t from-accent-coffee/70 to-accent-coffee/20" />
                  <div className="absolute bottom-[25%] left-1/2 h-[8px] w-[30%] -translate-x-1/2 rounded-full bg-accent-gold/30 blur-[2px]" />
                  <div className="absolute bottom-[18%] left-1/2 h-[4px] w-[20%] -translate-x-1/2 rounded-full bg-accent-cream/20 blur-[1px]" />
                </div>
              </div>
            </div>
          </div>

          <div
            ref={infoCardRef}
            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-10 lg:-bottom-2"
          >
            <GlassCard className="w-48 sm:w-56" glow>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-gold" />
                  <span className="text-xs font-medium uppercase tracking-widest text-accent-gold">
                    Arabica Select
                  </span>
                </div>
                <p className="text-sm text-text-secondary">Freshly Roasted</p>
                <p className="font-serif text-2xl font-bold text-text-primary">Since 2014</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
