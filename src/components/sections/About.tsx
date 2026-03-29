"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

const traits = ["💻 Full Stack Engineer", "🚀 Startup builder", "🐧 Linux / DevSecOps", "☁️ Cloud-native", "🤖 Generative AI", "📊 Data Science", "📈 Long-term investor", "🌏 EN · FR · ES · JP"]

const stats = [
  { value: "3+",   label: { en: "Years experience", fr: "Ans d'expérience" } },
  { value: "10+",  label: { en: "Technologies", fr: "Technologies" } },
  { value: "1",    label: { en: "Startup co-founded", fr: "Startup co-fondée" } },
  { value: "4",    label: { en: "Languages spoken", fr: "Langues parlées" } },
]

export function About() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute -top-40 -left-40 w-125 h-125 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{ background: "#8B5CF6" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-100 h-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{ background: "#06b6d4" }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={cn(
          "max-w-6xl mx-auto px-4 sm:px-8 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Header */}
        <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
          {lang === "en" ? "Who I am" : "Qui je suis"}
        </p>
        <h2
          className="font-display font-bold tracking-tight leading-[1.1] mb-8"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Avatar block */}
          <div className="flex flex-col items-center gap-6">
            {/* Stylized initials blob */}
            <div className="relative size-56 md:size-64">
              <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M42,-57.9C54.1,-50.2,63.2,-37.2,68.7,-22.4C74.1,-7.7,75.9,9,71.4,23.8C66.9,38.7,56.1,51.7,43,60.6C29.9,69.5,14.9,74.3,0.2,74.1C-14.6,73.9,-29.2,68.6,-41.8,59.9C-54.4,51.2,-65,39,-70.3,24.9C-75.6,10.8,-75.5,-5.2,-70.4,-19.5C-65.3,-33.8,-55.1,-46.3,-42.7,-54C-30.3,-61.7,-15.1,-64.5,0.5,-65.1C16.1,-65.7,29.9,-65.6,42,-57.9Z"
                  transform="translate(100 100)"
                  fill="url(#blobGrad)"
                  opacity="0.8"
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center font-display font-bold text-white"
                style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.04em" }}
              >
                AP
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div key={s.value} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <span className="block font-display font-bold text-3xl tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {s.value}
                  </span>
                  <span className="block text-xs font-medium text-white/60 mt-0.5">
                    {s.label[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Text + badges */}
          <div>
            <p className="text-white/70 text-[1.05rem] leading-[1.75] mb-8">
              {t.about.body}
            </p>

            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full font-display text-sm font-semibold border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
