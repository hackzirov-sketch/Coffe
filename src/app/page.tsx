"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import BrandStory from "@/components/sections/BrandStory"
import SignatureMenu from "@/components/sections/SignatureMenu"
import Experience from "@/components/sections/Experience"
import Gallery from "@/components/sections/Gallery"
import Testimonials from "@/components/sections/Testimonials"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/sections/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const sections = mainRef.current?.querySelectorAll("section")
    if (!sections) return

    sections.forEach((section) => {
      const label = section.querySelector("[data-anim-label]")
      const heading = section.querySelector("h2")
      const cards = section.querySelectorAll("[data-anim-card]")

      if (label) {
        gsap.fromTo(
          label,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%" },
          }
        )
      }

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 80%" },
          }
        )
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 75%" },
          }
        )
      }
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <div ref={mainRef} className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <BrandStory />
        <SignatureMenu />
        <Experience />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
