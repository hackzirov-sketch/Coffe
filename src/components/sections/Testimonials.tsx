"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import SectionLabel from "./SectionLabel"
import GlassCard from "./GlassCard"
import { testimonials } from "@/lib/data"

export default function Testimonials() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      )
    }
  }, [])

  return (
    <AnimatedSection className="relative px-6 py-28 lg:px-12 lg:py-36">
      <div className="absolute top-1/2 right-0 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Loved by Our Guests
          </h2>
        </div>

        <div ref={cardsRef} className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/15 text-sm font-bold text-accent-gold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-tertiary">{t.role}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed italic text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
