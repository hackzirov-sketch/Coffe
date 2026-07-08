"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedSection from "./AnimatedSection"
import SectionLabel from "./SectionLabel"
import GlassCard from "./GlassCard"
import { stats } from "@/lib/data"

export default function BrandStory() {
  const statsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      )
    }
  }, [])

  return (
    <AnimatedSection id="about" className="relative px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Our Philosophy</SectionLabel>

        <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl text-balance">
              Coffee is not just a drink. It is a ritual.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
              <p>
                At Noir Brew, every cup begins with intention. We source the finest single-origin beans from
                sustainable farms, roast them in small batches, and craft each drink with the precision of an
                artisan.
              </p>
              <p>
                Our space is designed for those who appreciate the quiet luxury of a perfect pour. Whether you
                come to think, create, or simply pause — you are welcome here.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-accent-gold/5 blur-[100px]" />
            <div ref={statsRef} className="relative grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-accent-gold sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
