"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/data"
import type { Lang } from "@/lib/i18n"

export function Projects() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-28 bg-[#111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Header */}
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
            {lang === "en" ? "What I've built" : "Ce que j'ai construit"}
          </p>
          <h2
            className="font-display font-bold tracking-tight leading-[1.1] mb-12"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            {t.projects.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-[#161616] border border-white/[0.06] rounded-[20px] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_0_30px_-5px_var(--card-glow)] transition-all duration-200"
                style={{ "--card-glow": project.color } as React.CSSProperties}
              >
                {/* Colored top bar */}
                <div className="h-1.5" style={{ background: project.color }} />

                <div className="p-6 flex flex-col gap-4">
                  {/* Badge */}
                  <span
                    className="font-display text-xs font-semibold px-3 py-1 rounded-full border w-fit"
                    style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}
                  >
                    {project.badge}
                  </span>

                  {/* Name */}
                  <div>
                    <h3 className="font-display font-bold text-xl tracking-tight text-white group-hover:text-[var(--card-glow)] transition-colors">
                      {project.name}
                    </h3>
                    {project.subtitle && (
                      <span className="font-display text-xs text-white/35 mt-0.5 block">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-[1.65] flex-1">
                    {project.description[lang as Lang]}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.07]">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-display text-[0.73rem] font-semibold px-2.5 py-1 rounded-full bg-white/[0.07] text-white/80 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
