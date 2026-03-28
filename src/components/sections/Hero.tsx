"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { heroRoles } from "@/lib/i18n"

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx] ?? ""
    let t: ReturnType<typeof setTimeout>

    if (!deleting && display === current) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display === "") {
      t = setTimeout(() => {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }, 0)
    } else {
      t = setTimeout(
        () =>
          setDisplay(
            deleting
              ? current.slice(0, display.length - 1)
              : current.slice(0, display.length + 1)
          ),
        deleting ? speed / 2 : speed
      )
    }
    return () => clearTimeout(t)
  }, [display, deleting, wordIdx, words, speed, pause])

  return display
}

export function Hero() {
  const { lang, t } = useLanguage()
  const roles = heroRoles[lang]
  const typed = useTypewriter(roles)

  const firstName = "Antoine"
  const lastName = "Pulon"
  const firstChars = firstName.split("")

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Drift blobs */}
      <div
        className="absolute rounded-full opacity-[0.22] blur-[100px] pointer-events-none animate-drift"
        aria-hidden="true"
        style={{ width: 500, height: 500, background: "#8B5CF6", top: -100, left: -150, animationDuration: "22s" }}
      />
      <div
        className="absolute rounded-full opacity-[0.18] blur-[90px] pointer-events-none animate-drift"
        aria-hidden="true"
        style={{ width: 400, height: 400, background: "#06b6d4", bottom: -80, right: -100, animationDuration: "18s", animationDirection: "reverse" }}
      />
      <div
        className="absolute rounded-full opacity-[0.15] blur-[90px] pointer-events-none animate-drift"
        aria-hidden="true"
        style={{ width: 300, height: 300, background: "#a78bfa", top: "30%", left: "55%", animationDuration: "26s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-6 animate-fade-in-up">
          {lang === "en" ? "Available for opportunities" : "Disponible pour de nouvelles opportunités"}
        </p>

        {/* Name — letter by letter animation */}
        <h1
          className="font-display font-bold leading-[0.95] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(3.5rem,11vw,10rem)" }}
        >
          <span className="block">
            {firstChars.map((char, i) => (
              <span
                key={i}
                className="inline-block animate-char-in"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {char}
              </span>
            ))}
          </span>
          <span
            className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent [-webkit-text-fill-color:transparent] animate-char-in"
            style={{ animationDelay: `${firstChars.length * 55 + 100}ms` }}
          >
            {lastName}
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className="font-display font-normal text-white/65 flex items-center justify-center gap-2 mb-6 animate-fade-in-up animation-delay-400"
          style={{ fontSize: "clamp(1.1rem,2.5vw,1.7rem)" }}
        >
          <span className="text-white/40">{lang === "en" ? "I'm a" : "Je suis"}</span>
          <span
            className="text-cyan-300 font-semibold border-r-[3px] border-cyan-400 pr-1 animate-blink"
          >
            {typed}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-10 text-base sm:text-lg animate-fade-in-up animation-delay-400">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-display font-bold text-base px-8 py-4 rounded-full bg-linear-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/35 active:translate-y-0 transition-all"
          >
            {t.hero.cta.work} ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-display font-bold text-base px-8 py-4 rounded-full bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5 transition-all"
          >
            {t.hero.cta.contact}
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute flex flex-col items-center gap-1 opacity-50 animate-scroll-bounce z-10" style={{ bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}>
        <span className="font-display text-[0.7rem] tracking-[0.15em] uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
