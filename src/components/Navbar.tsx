"use client"

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
    )

    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.6 }
      )
    }
  }, [])

  useEffect(() => {
    if (mobileOpen && mobileRef.current) {
      gsap.fromTo(mobileRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass shadow-xl shadow-black/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a href="#hero" className="text-xl font-serif font-bold tracking-tight text-text-primary">
            Noir<span className="text-accent-gold"> Brew</span>
          </a>

          <div ref={linksRef} className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-accent-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              className="rounded-[--radius-button] border border-accent-gold/40 px-5 py-2 text-sm font-medium text-accent-gold transition-all hover:bg-accent-gold/10 hover:border-accent-gold/70"
            >
              Reserve
            </a>
          </div>

          <button
            className="relative z-50 text-text-primary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          ref={mobileRef}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary/95 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-medium text-text-secondary transition-colors hover:text-accent-gold"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#reservation")}
            className="mt-4 rounded-[--radius-button] border border-accent-gold/40 px-8 py-3 text-lg font-medium text-accent-gold transition-all hover:bg-accent-gold/10"
          >
            Reserve
          </button>
        </div>
      )}
    </>
  )
}
