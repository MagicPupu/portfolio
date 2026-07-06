"use client"

import { useState } from "react"
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiSharp,
  SiReact, SiNextdotjs, SiFlutter, SiTailwindcss,
  SiNodedotjs, SiGooglecloud, SiDocker, SiKubernetes, SiLinux,
  SiKalilinux, SiGit, SiStripe, SiMapbox, SiFirebase, SiMongodb, SiVercel,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import type { IconType } from "react-icons"
import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import { skillGroups } from "@/lib/data"

const SKILL_ICONS: Record<string, IconType> = {
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  "C#": SiSharp,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Flutter: SiFlutter,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  GCP: SiGooglecloud,
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Linux: SiLinux,
  "Kali Linux": SiKalilinux,
  Git: SiGit,
  Stripe: SiStripe,
  Mapbox: SiMapbox,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  Vercel: SiVercel,
}

const allSkills = skillGroups.flatMap((g) => g.skills)
const half = Math.ceil(allSkills.length / 2)
const row1 = allSkills.slice(0, half)
const row2 = allSkills.slice(half)

type Skill = { name: string; emoji: string }

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = SKILL_ICONS[skill.name]
  return (
    <div className="flex items-center gap-2.5 px-6 shrink-0">
      <span className="text-white/45 flex items-center" aria-hidden="true">
        {Icon ? <Icon size={14} /> : null}
      </span>
      <span className="font-mono text-sm text-white/60 whitespace-nowrap">{skill.name}</span>
      <span className="font-mono text-white/25 ml-2 text-base select-none">·</span>
    </div>
  )
}

function SkillGridChip({ skill }: { skill: Skill }) {
  const Icon = SKILL_ICONS[skill.name]
  return (
    <div className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 hover:border-white/20 transition-colors duration-150">
      <span className="text-white/50 flex items-center shrink-0" aria-hidden="true">
        {Icon ? <Icon size={15} /> : null}
      </span>
      <span className="font-mono text-xs text-white/65 whitespace-nowrap">{skill.name}</span>
    </div>
  )
}

export function Skills() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()
  const [mode, setMode] = useState<"marquee" | "grid">("marquee")

  return (
    <section id="skills" className="py-28 border-t border-white/[0.08] overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700 ease-out",
          inView ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Header + toggle */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-14 flex items-end justify-between gap-4">
          <h2
            className="font-display font-bold tracking-tight leading-[0.95] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {t.skills.title}
          </h2>

          <div className="flex items-center gap-1 glass-card rounded-lg p-1 shrink-0">
            <button
              onClick={() => setMode("marquee")}
              className={cn(
                "font-mono text-xs px-3 py-1.5 rounded-md transition-all duration-150",
                mode === "marquee"
                  ? "bg-white/10 text-white"
                  : "text-white/35 hover:text-white/60"
              )}
              aria-pressed={mode === "marquee"}
            >
              {lang === "en" ? "Live" : "Live"}
            </button>
            <button
              onClick={() => setMode("grid")}
              className={cn(
                "font-mono text-xs px-3 py-1.5 rounded-md transition-all duration-150",
                mode === "grid"
                  ? "bg-white/10 text-white"
                  : "text-white/35 hover:text-white/60"
              )}
              aria-pressed={mode === "grid"}
            >
              {lang === "en" ? "All" : "Tous"}
            </button>
          </div>
        </div>

        {/* Marquee mode */}
        {mode === "marquee" && (
          <>
            <div className="flex border-y border-white/[0.08] py-5 overflow-hidden">
              <div className="flex min-w-max animate-marquee-left" aria-label={lang === "en" ? "Tech skills" : "Compétences techniques"}>
                {[...row1, ...row1].map((skill, i) => (
                  <SkillChip key={i} skill={skill} />
                ))}
              </div>
            </div>
            <div className="flex border-b border-white/[0.08] py-5 overflow-hidden">
              <div className="flex min-w-max animate-marquee-right">
                {[...row2, ...row2].map((skill, i) => (
                  <SkillChip key={i} skill={skill} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Grid mode */}
        {mode === "grid" && (
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col gap-10">
              {skillGroups.map((group) => (
                <div key={group.category.en}>
                  <p className="font-mono text-xs text-white/35 uppercase tracking-[0.15em] mb-4">
                    {group.category[lang as "en" | "fr"]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillGridChip key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
