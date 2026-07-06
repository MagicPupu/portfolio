"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/i18n"

const stats = [
  { value: "3+",  label: { en: "Years experience",      fr: "Ans d'expérience" } },
  { value: "10+", label: { en: "Technologies mastered", fr: "Technologies maîtrisées" } },
  { value: "1",   label: { en: "Startup co-founded",    fr: "Startup co-fondée" } },
  { value: "4",   label: { en: "Languages spoken",      fr: "Langues parlées" } },
]

export function About() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 border-t border-white/[0.08]">
      <div
        ref={ref}
        className={cn(
          "max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2
          className="font-display font-bold tracking-tight leading-[0.95] text-white mb-14"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {t.about.title}
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {/* Bio — 3/4 width on lg */}
          <div className="sm:col-span-2 lg:col-span-3 glass-card rounded-2xl p-8">
            <p className="text-white/70 leading-[1.85]" style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)" }}>
              {t.about.body}
            </p>
          </div>

          {/* Availability */}
          <div className="glass-card rounded-2xl p-7 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-emerald-400/10 rounded-full border border-emerald-400/20">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping-slow" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[0.63rem] text-emerald-400">
                {lang === "en" ? "Available" : "Disponible"}
              </span>
            </div>
            <div>
              <p className="font-display font-bold text-white text-[0.95rem] leading-snug mb-1.5">
                {lang === "en" ? "Open to opportunities" : "Ouvert aux opportunités"}
              </p>
              <p className="font-mono text-[0.63rem] text-white/35 leading-relaxed">
                {lang === "en" ? "Full-time · Freelance · Consulting" : "CDI · Freelance · Consulting"}
              </p>
            </div>
          </div>

          {/* Stats — 4 individual cells */}
          {stats.map((s) => (
            <div key={s.value} className="glass-card rounded-2xl p-6">
              <span
                className="block font-display font-bold text-accent tracking-tight leading-none mb-3"
                style={{ fontSize: "clamp(2rem, 3.2vw, 2.6rem)" }}
              >
                {s.value}
              </span>
              <span className="block font-mono text-xs text-white/40 leading-snug">
                {s.label[lang as Lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
