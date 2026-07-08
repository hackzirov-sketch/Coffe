"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { MapPin, Phone, Clock } from "lucide-react"

export default function Footer() {
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
          },
        }
      )
    }
  }, [])

  return (
    <footer className="relative border-t border-border-glass/50 px-6 py-16 lg:px-12 lg:py-20">
      <div ref={contentRef} className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-bold text-text-primary">
              Noir<span className="text-accent-gold"> Brew</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
              Where every cup tells a story. Artisan coffee crafted with intention since 2014.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-gold">Visit</p>
            <div className="space-y-3 text-sm text-text-tertiary">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-gold" />
                <span>78 Brewers Lane, Melbourne VIC 3000</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent-gold" />
                <span>+61 3 9123 4567</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-gold">Hours</p>
            <div className="space-y-3 text-sm text-text-tertiary">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-gold" />
                <div>
                  <p>Mon — Fri: 6:30 AM — 6:00 PM</p>
                  <p>Sat — Sun: 7:30 AM — 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-gold">Follow</p>
            <div className="flex gap-4">
              {["Instagram", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-text-tertiary transition-colors hover:text-accent-gold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border-glass/30 pt-8 text-center text-xs text-text-tertiary">
          <p>&copy; {new Date().getFullYear()} Noir Brew. Crafted with intention.</p>
        </div>
      </div>
    </footer>
  )
}
