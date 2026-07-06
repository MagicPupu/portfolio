"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/i18n"

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"] as const

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [active, setActive] = useState<string>("about")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrollingTo = useRef<string | null>(null)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const links = useMemo(() => [
    { id: "about",      label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects",   label: t.nav.projects },
    { id: "skills",     label: t.nav.skills },
    { id: "contact",    label: t.nav.contact },
  ], [t.nav])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          if (scrollingTo.current !== null && scrollingTo.current !== id) return
          setActive(id)
        },
        { threshold: 0, rootMargin: "-56px 0px -35% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActive(id)
    scrollingTo.current = id
    if (scrollTimer.current) clearTimeout(scrollTimer.current)
    scrollTimer.current = setTimeout(() => { scrollingTo.current = null }, 1000)
  }

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en" as Lang)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 sm:px-10 lg:px-16 transition-all duration-300",
          scrolled
            ? "bg-[#080808]/95 border-b border-white/[0.08] backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={() => handleNavClick("about")}
          className="font-display font-bold text-base text-white tracking-tight shrink-0"
        >
          AP<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "font-display text-sm font-medium transition-colors duration-150",
                active === link.id
                  ? "text-accent"
                  : "text-white/40 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleLang}
            className="font-mono text-xs text-white/40 hover:text-white transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="hidden md:inline-block font-display text-sm font-semibold text-white/40 hover:text-white transition-colors"
          >
            {lang === "en" ? "Contact →" : "Contact →"}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block w-5 h-[1.5px] bg-white rounded-sm transition-all duration-200",
                mobileOpen && "rotate-45 translate-y-[6.5px]"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[1.5px] bg-white rounded-sm transition-all duration-200",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[1.5px] bg-white rounded-sm transition-all duration-200",
                mobileOpen && "-rotate-45 -translate-y-[6.5px]"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-[min(280px,85vw)] bg-[#080808] border-l border-white/[0.08] z-50 flex flex-col justify-center items-start px-10 gap-7 md:hidden transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => { handleNavClick(link.id); setMobileOpen(false) }}
            className={cn(
              "font-display text-2xl font-bold transition-colors",
              active === link.id ? "text-accent" : "text-white/50 hover:text-white"
            )}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => { toggleLang(); setMobileOpen(false) }}
          className="font-mono text-xs text-white/30 hover:text-white transition-colors mt-6 uppercase tracking-widest"
        >
          {lang === "en" ? "Passer en FR" : "Switch to EN"}
        </button>
      </div>
    </>
  )
}
