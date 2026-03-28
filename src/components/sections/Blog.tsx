"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

const ACCENT = "#8B5CF6"

const placeholderPosts = [
  { tag: "Engineering", title: "Building Scalable AI Pipelines with Kedro" },
  { tag: "Startup",     title: "Lessons from Co-founding Two Startups" },
  { tag: "Cloud",       title: "Kubernetes in Production: What I Learned" },
]

export function Blog() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="blog" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
                {lang === "en" ? "Writing" : "Écrits"}
              </p>
              <h2
                className="font-display font-bold tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
              >
                {t.blog.title}
              </h2>
            </div>
            <div
              className="flex items-center gap-2 text-xs font-display font-medium px-4 py-2 rounded-full border w-fit shrink-0"
              style={{ color: ACCENT, borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
            >
              <span className="size-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
              {t.blog.comingSoon}
            </div>
          </div>

          <p className="text-white/60 text-lg mb-10">{t.blog.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {placeholderPosts.map((post, i) => (
              <div key={i} className="relative overflow-hidden rounded-[20px]">
                {/* Card */}
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-[20px] p-6 flex flex-col gap-4">
                  <div className="h-1.5 -mx-6 -mt-6 mb-2 rounded-t-[20px]" style={{ background: `linear-gradient(90deg, ${ACCENT}, #06b6d4)` }} />
                  <span className="font-display text-xs font-semibold px-3 py-1 rounded-full border w-fit"
                    style={{ color: ACCENT, borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}>
                    {post.tag}
                  </span>
                  <h3 className="font-display font-semibold text-base text-white/80 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/30 text-xs font-mono mt-auto">— soon</p>
                </div>

                {/* Lock overlay */}
                <div className="absolute inset-0 backdrop-blur-[3px] bg-[#0d0d0d]/65 rounded-[20px] flex items-center justify-center">
                  <span className="font-display text-sm font-semibold bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/60">
                    🔒 {t.blog.comingSoon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
