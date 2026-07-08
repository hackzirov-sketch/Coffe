"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Leaf, Coffee, User, Heart } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import SectionLabel from "./SectionLabel"
import GlassCard from "./GlassCard"
import { features } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  Bean: <Leaf className="h-6 w-6" />,
  Atmosphere: <Coffee className="h-6 w-6" />,
  Expert: <User className="h-6 w-6" />,
  Service: <Heart className="h-6 w-6" />,
}

const featureImages = [
  "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80&fit=crop",
]

export default function Experience() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent-gold/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            The Noir Brew Difference
          </h2>
        </div>

        <div ref={cardsRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <GlassCard key={feature.title} className="group text-center">
              <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={featureImages[i]}
                  alt={feature.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
              </div>
              <div className="mx-auto -mt-12 mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold/15 backdrop-blur-md text-accent-gold transition-all duration-500 group-hover:bg-accent-gold/25 group-hover:scale-110 relative z-10">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-serif text-xl font-bold text-text-primary">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
