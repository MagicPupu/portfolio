"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import { experiences } from "@/lib/data"
import type { Lang } from "@/lib/i18n"

export function Experience() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-28 border-t border-white/[0.08]">
      <div
        ref={ref}
        className={cn(
          "max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2
          className="font-display font-bold tracking-tight leading-[0.95] text-white mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {t.experience.title}
        </h2>

        <div>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border-t border-white/[0.08] py-10 grid md:grid-cols-[200px_1fr] gap-6 md:gap-16"
            >
              {/* Left: date + meta */}
              <div className="flex md:flex-col gap-3 md:gap-1.5">
                <p className="font-mono text-xs text-white/50 leading-relaxed">
                  {exp.period.replace("Present", t.experience.present)}
                </p>
                <p className="font-display font-semibold text-sm text-white">
                  {exp.company}
                </p>
                <p className="font-mono text-xs text-white/40">
                  {exp.location}
                </p>
              </div>

              {/* Right: role + bullets */}
              <div>
                <p className="font-display font-semibold text-accent text-base mb-5">
                  {exp.role[lang as Lang]}
                </p>
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-white/65 text-sm leading-[1.75]">
                      <span className="text-white/35 shrink-0 select-none mt-[1px]">—</span>
                      <span>{b[lang as Lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  )
}
