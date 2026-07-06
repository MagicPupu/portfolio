"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import type { Lang } from "@/lib/i18n"

const ROLES = {
  en: ["Full Stack Engineer", "AI Engineer", "Cloud Architect", "Startup Co-Founder"],
  fr: ["Ingénieur Full Stack", "Ingénieur IA", "Architecte Cloud", "Co-Fondateur Startup"],
}

function useTypewriter(strings: string[], resetKey: string, typingSpeed = 75, deletingSpeed = 38, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "deleting">("typing")

  useEffect(() => {
    setDisplayed("")
    setIndex(0)
    setPhase("typing")
  }, [resetKey])

  useEffect(() => {
    const current = strings[index % strings.length]
    let timer: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed)
      } else {
        timer = setTimeout(() => setPhase("deleting"), pauseMs)
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed)
      } else {
        setIndex((i) => (i + 1) % strings.length)
        setPhase("typing")
      }
    }

    return () => clearTimeout(timer)
  }, [displayed, phase, index, strings, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}

const bentoStats = [
  { val: "3+",  label: { en: "Years exp.",    fr: "Ans d'exp." } },
  { val: "10+", label: { en: "Technologies",  fr: "Technologies" } },
  { val: "1",   label: { en: "Startup",       fr: "Startup" } },
  { val: "4",   label: { en: "Languages",     fr: "Langues" } },
]

export function Hero() {
  const { lang, t } = useLanguage()
  const role = useTypewriter(ROLES[lang as Lang], lang)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-24 pb-20 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" aria-hidden="true" />

      {/* Glow orb — soft white bloom */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      {/* Glow orb — blue depth */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(120,140,255,0.05) 0%, transparent 65%)", animationDelay: "2.5s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-center">

        {/* LEFT — editorial content */}
        <div>
          <div className="flex items-center gap-2.5 mb-10 animate-fade-in-up">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping-slow" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-white/60 tracking-wide">
              {lang === "en" ? "Available for opportunities" : "Disponible pour de nouvelles opportunités"}
            </span>
          </div>

          <h1
            className="font-display font-bold leading-[0.88] tracking-[-0.04em] mb-8 animate-fade-in-up animation-delay-100"
            style={{ fontSize: "clamp(4rem, 11vw, 8.5rem)" }}
          >
            <span className="block text-white">Antoine</span>
            <span className="block text-accent">Pulon.</span>
          </h1>

          <p
            className="font-display text-white/60 font-medium mb-3 animate-fade-in-up animation-delay-200 flex items-center"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
            aria-label={ROLES[lang as Lang].join(", ")}
          >
            <span className="text-white/30 mr-2">{lang === "en" ? "I'm a " : "Je suis "}</span>
            {role}
            <span
              className="inline-block w-[2px] ml-[3px] bg-white/50 animate-cursor-blink"
              style={{ height: "0.85em" }}
              aria-hidden="true"
            />
          </p>

          <p className="font-mono text-xs text-white/45 mb-14 animate-fade-in-up animation-delay-200 tracking-wide">
            Bordeaux, France
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-display font-bold text-sm px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              {t.hero.cta.work} ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display font-bold text-sm px-6 py-3 border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-colors"
            >
              {t.hero.cta.contact} →
            </a>
          </div>
        </div>

        {/* RIGHT — bento cards (desktop only) */}
        <div className="hidden lg:flex flex-col gap-3 animate-fade-in-up animation-delay-400">

          {/* Stats 2×2 */}
          <div className="glass-card rounded-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-6">
            {bentoStats.map(({ val, label }) => (
              <div key={val}>
                <p
                  className="font-display font-bold tracking-tight text-accent leading-none"
                  style={{ fontSize: "1.9rem" }}
                >
                  {val}
                </p>
                <p className="font-mono text-[0.63rem] text-white/35 mt-1">{label[lang as Lang]}</p>
              </div>
            ))}
          </div>

          {/* Location + availability */}
          <div className="glass-card rounded-2xl p-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[0.58rem] text-white/30 uppercase tracking-[0.18em] mb-1.5">
                {lang === "en" ? "Location" : "Localisation"}
              </p>
              <p className="font-display text-sm text-white font-semibold">Bordeaux, France</p>
              <p className="font-mono text-[0.65rem] text-white/35 mt-0.5">UTC+1</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 rounded-full border border-emerald-400/20 shrink-0">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping-slow" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[0.65rem] text-emerald-400">Open</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-6 sm:left-10 lg:left-16 flex items-center gap-2 opacity-25 animate-scroll-bounce"
        aria-hidden="true"
      >
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-white">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="6" y="4" width="2" height="5" rx="1" fill="currentColor" />
        </svg>
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white">Scroll</span>
      </div>
    </section>
  )
}
