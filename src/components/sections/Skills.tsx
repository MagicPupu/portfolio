"use client"

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
import type { Lang } from "@/lib/i18n"

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

export function Skills() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Header */}
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3 text-center">
            {lang === "en" ? "My toolkit" : "Ma boîte à outils"}
          </p>
          <h2
            className="font-display font-bold tracking-tight leading-[1.1] mb-16 text-center"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            {t.skills.title}
          </h2>

          <div className="flex flex-col gap-14">
            {skillGroups.map((group, gi) => (
              <div key={gi}>
                <p
                  className="font-display text-[0.75rem] font-bold tracking-[0.18em] uppercase mb-5 pl-0.5"
                  style={{ color: `${group.color}99` }}
                >
                  {group.category[lang as Lang]}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {group.skills.map((skill, si) => (
                    <SkillCard
                      key={si}
                      skill={skill}
                      color={group.color}
                      inView={inView}
                      delay={si * 80}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type SkillCardProps = {
  skill: { name: string; emoji: string; level: number }
  color: string
  inView: boolean
  delay: number
}

function SkillCard({ skill, color }: SkillCardProps) {
  const Icon = SKILL_ICONS[skill.name]
  return (
    <div
      className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3 border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-200 cursor-default"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}60`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"
      }}
    >
      <span
        className="size-8 rounded-lg flex items-center justify-center text-base shrink-0"
        style={{ background: `${color}22`, color }}
      >
        {Icon ? <Icon size={18} /> : skill.emoji}
      </span>
      <span className="font-display font-medium text-[0.88rem] text-white/80 leading-tight">
        {skill.name}
      </span>
    </div>
  )
}
