"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedSection from "./AnimatedSection"
import SectionLabel from "./SectionLabel"
import { galleryImages } from "@/lib/data"

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      )
    }
  }, [])

  return (
    <AnimatedSection id="gallery" className="relative px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Visual Experience</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            A Glimpse Into Our World
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">
            Every corner of Noir Brew is designed for atmosphere. Here is what awaits you.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl ${
                image.id === 1 ? "col-span-2 row-span-2" : image.id === 5 ? "col-span-2" : "col-span-1"
              } aspect-[4/3] ${image.id === 1 ? "aspect-auto min-h-[300px] sm:min-h-[400px]" : ""}`}
            >
              <Image
                src={image.image}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm font-medium text-text-primary drop-shadow-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
