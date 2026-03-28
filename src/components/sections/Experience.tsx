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
    <section id="experience" className="py-28 bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
        style={{ background: "#8B5CF6" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{ background: "#06b6d4" }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={cn(
          "max-w-5xl mx-auto px-4 sm:px-8 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Header */}
        <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
          {lang === "en" ? "Where I've worked" : "Où j'ai travaillé"}
        </p>
        <h2
          className="font-display font-bold tracking-tight leading-[1.1] mb-14 text-center"
          style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
        >
          {t.experience.title}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className="md:grid md:grid-cols-[1fr_56px_1fr] md:gap-4 items-start">
                  {/* Left slot — desktop only, even items */}
                  <div className="hidden md:block md:pr-6">
                    {isEven && (
                      <TimelineCard exp={exp} lang={lang} present={t.experience.present} align="right" />
                    )}
                  </div>

                  {/* Dot — desktop only */}
                  <div className="hidden md:flex items-center justify-center mt-6">
                    <div className="size-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_0_4px_rgba(139,92,246,0.2),0_0_16px_rgba(139,92,246,0.3)]" />
                  </div>

                  {/* Right slot — desktop only, odd items */}
                  <div className="hidden md:block md:pl-6">
                    {!isEven && (
                      <TimelineCard exp={exp} lang={lang} present={t.experience.present} align="left" />
                    )}
                  </div>

                  {/* Mobile: always show */}
                  <div className="md:hidden">
                    <TimelineCard exp={exp} lang={lang} present={t.experience.present} align="left" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

type CardProps = {
  exp: (typeof experiences)[number]
  lang: string
  present: string
  align: "left" | "right"
}

function TimelineCard({ exp, lang, present, align }: CardProps) {
  return (
    <div className={cn(
      "bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:bg-white/[0.07] hover:border-violet-500/30 transition-all duration-200",
      align === "right" && "text-right md:text-right"
    )}>
      <p className="font-display font-bold text-base sm:text-lg leading-tight mb-1 text-white">
        {exp.company}
      </p>
      <p className="text-cyan-400 font-medium text-sm mb-1">
        {exp.role[lang as Lang]}
      </p>
      <p className="text-white/40 text-xs font-mono mb-4">
        {exp.period.replace("Present", present)} · {exp.location}
      </p>
      <ul className={cn("space-y-1.5", align === "right" ? "md:items-end" : "")}>
        {exp.bullets.map((b, j) => (
          <li
            key={j}
            className={cn(
              "text-white/70 text-[0.88rem] leading-[1.6] flex gap-2",
              align === "right" && "md:flex-row-reverse md:text-right"
            )}
          >
            <span className="text-violet-400 shrink-0 mt-[3px]">▸</span>
            <span>{b[lang as Lang]}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
