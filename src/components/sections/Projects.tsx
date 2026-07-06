"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/data"
import type { Lang } from "@/lib/i18n"

function stripEmoji(str: string): string {
  return str.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "").trim()
}

export function Projects() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  const [featured, ...rest] = projects

  return (
    <section id="projects" className="py-28 border-t border-white/[0.08]">
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
          {t.projects.title}
        </h2>

        {/* Featured — full width */}
        {featured && (
          <div className="relative border border-white/[0.08] p-8 sm:p-12 mb-3 hover:border-white/20 transition-all duration-300 group overflow-hidden hover:bg-white/[0.01]">
            {/* Color accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 opacity-60 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, ${featured.color} 0%, ${featured.color}30 100%)` }}
            />

            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-white/20">01</span>
              <span className="font-mono text-xs font-medium" style={{ color: featured.color + "99" }}>
                {stripEmoji(featured.badge)}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-end">
              <h3
                className="font-display font-bold text-white group-hover:text-accent transition-colors duration-200 tracking-tight leading-[0.95]"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                {featured.name[lang as Lang]}
              </h3>

              <div>
                <p className="text-white/65 text-sm leading-[1.85] mb-7">
                  {featured.description[lang as Lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 border border-white/[0.12] text-white/50 transition-colors duration-200 group-hover:border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {featured.link && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 font-mono text-xs text-white/40 hover:text-accent transition-colors duration-150"
                  >
                    View project →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rest — side by side */}
        <div className="grid md:grid-cols-2 gap-3">
          {rest.map((project, i) => (
            <div
              key={i}
              className="relative border border-white/[0.08] p-8 hover:border-white/20 transition-all duration-300 group overflow-hidden hover:bg-white/[0.01]"
            >
              {/* Color accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 opacity-40 group-hover:opacity-80"
                style={{ background: `linear-gradient(90deg, ${project.color} 0%, ${project.color}20 100%)` }}
              />

              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-white/20">0{i + 2}</span>
                <span className="font-mono text-xs" style={{ color: project.color + "80" }}>
                  {stripEmoji(project.badge)}
                </span>
              </div>

              <h3
                className="font-display font-bold text-white group-hover:text-accent transition-colors duration-200 tracking-tight leading-[1.0] mb-2"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                {project.name[lang as Lang]}
              </h3>

              {project.subtitle && (
                <p className="font-mono text-xs text-white/45 mb-4">{project.subtitle}</p>
              )}

              <p className="text-white/65 text-sm leading-[1.85] mb-7">
                {project.description[lang as Lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 border border-white/[0.12] text-white/50 transition-colors duration-200 group-hover:border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-xs text-white/40 hover:text-accent transition-colors duration-150"
                >
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
