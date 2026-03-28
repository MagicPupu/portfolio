"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/i18n"

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"] as const

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [active, setActive] = useState<string>("about")
  const [mobileOpen, setMobileOpen] = useState(false)
  const linksContainerRef = useRef<HTMLUListElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)

  const links = [
    { id: "about",      label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects",   label: t.nav.projects },
    { id: "skills",     label: t.nav.skills },
    { id: "contact",    label: t.nav.contact },
  ]

  // Track active section on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Move sliding pill to active link
  useEffect(() => {
    const container = linksContainerRef.current
    const pill = pillRef.current
    if (!container || !pill) return
    const idx = links.findIndex((l) => l.id === active)
    const linkEl = container.querySelectorAll("a")[idx] as HTMLElement | undefined
    if (!linkEl) return
    pill.style.left = `${linkEl.offsetLeft}px`
    pill.style.width = `${linkEl.offsetWidth}px`
  }, [active, links])

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "fr" : "en"
    setLang(next)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/[0.07] px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          AP<span className="text-white/60">.</span>
        </a>

        {/* Desktop nav links */}
        <ul ref={linksContainerRef} className="hidden md:flex items-center gap-0.5 relative">
          <div
            ref={pillRef}
            className="absolute top-1/2 -translate-y-1/2 h-9 bg-violet-600/80 rounded-full pointer-events-none z-0 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          />
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative z-10 px-4 py-2 text-sm font-display font-medium rounded-full transition-colors duration-200 whitespace-nowrap block",
                  active === link.id ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-full text-xs font-display font-semibold border border-white/20 text-white/60 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Toggle language"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white font-display font-semibold text-sm px-5 py-2 rounded-full shadow-lg shadow-violet-500/20 hover:-translate-y-px hover:shadow-violet-500/30 active:translate-y-0 transition-all"
          >
            {lang === "en" ? "Hire me ✦" : "Contactez-moi ✦"}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={cn("block w-6 h-[2.5px] bg-white rounded-sm transition-all duration-300", mobileOpen && "rotate-45 translate-y-[7.5px]")} />
            <span className={cn("block w-6 h-[2.5px] bg-white rounded-sm transition-all duration-300", mobileOpen && "opacity-0")} />
            <span className={cn("block w-6 h-[2.5px] bg-white rounded-sm transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[7.5px]")} />
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
          "fixed top-0 right-0 h-screen w-[min(320px,85vw)] bg-[#0e0e16] border-l border-l-violet-500/40 z-50 flex flex-col justify-center items-center gap-6 md:hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMobileOpen(false)}
            className="font-display text-2xl font-bold text-white hover:text-violet-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:antoine.pulon@gmail.com"
          onClick={() => setMobileOpen(false)}
          className="mt-4 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-display font-bold px-6 py-3 rounded-full shadow-lg shadow-violet-500/20 hover:-translate-y-px transition-all text-base"
        >
          {lang === "en" ? "Hire me ✦" : "Contactez-moi ✦"}
        </a>
      </div>
    </>
  )
}
