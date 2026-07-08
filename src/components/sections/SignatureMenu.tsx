"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedSection from "./AnimatedSection"
import SectionLabel from "./SectionLabel"
import GlassCard from "./GlassCard"
import { menuItems } from "@/lib/data"

export default function SignatureMenu() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
    <AnimatedSection id="menu" className="relative overflow-hidden px-6 py-28 lg:px-12 lg:py-36">
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-accent-coffee/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Signature Menu</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Crafted for Every Palate
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">
            From bold classics to smooth signatures — each drink made to order with precision.
          </p>
        </div>

        <div ref={cardsRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <GlassCard key={item.id} className="flex flex-col">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-accent-coffee/20 to-bg-tertiary">
                <div className="flex h-full items-center justify-center">
                  <div className="h-20 w-16 rounded-full bg-gradient-to-b from-accent-coffee/50 via-accent-gold/15 to-transparent blur-sm" />
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-accent-gold/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-gold">
                  {item.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl font-bold text-text-primary">{item.name}</h3>
                  <span className="text-lg font-semibold text-accent-gold">{item.price}</span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                <button className="mt-5 w-full rounded-[--radius-button] border border-border-glass py-2.5 text-sm font-medium text-accent-gold transition-all hover:bg-accent-gold/10 hover:border-accent-gold/40">
                  Order
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
