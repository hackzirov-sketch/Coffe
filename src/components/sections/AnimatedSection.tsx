"use client"

import { useRef, ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function AnimatedSection({ children, className = "", id }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [])

  return (
    <div ref={sectionRef} id={id} className={className}>
      {children}
    </div>
  )
}
