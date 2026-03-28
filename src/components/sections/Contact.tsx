"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type FormState = { name: string; email: string; message: string }
type FormErrors = Partial<Record<keyof FormState, string>>

const inputBase = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 outline-none font-sans transition-colors focus:border-violet-500/60"

export function Contact() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = lang === "en" ? "Required" : "Requis"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = lang === "en" ? "Valid email required" : "Email valide requis"
    if (!form.message.trim()) next.message = lang === "en" ? "Required" : "Requis"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 bg-[#0d0d0d] relative overflow-hidden text-center">
      {/* Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.10] blur-[80px] pointer-events-none"
        style={{ background: "#8B5CF6" }} aria-hidden="true" />
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full opacity-[0.08] blur-[80px] pointer-events-none"
        style={{ background: "#06b6d4" }} aria-hidden="true" />

      <div
        ref={ref}
        className={cn(
          "relative z-10 max-w-3xl mx-auto px-4 sm:px-8 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Headline */}
        <h2
          className="font-display font-bold tracking-tight leading-[1.1] mb-4"
          style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
        >
          {lang === "en" ? "Let's work together." : "Travaillons ensemble."}
        </h2>
        <p className="text-white/55 text-lg mb-14">
          {t.contact.subtitle}
        </p>

        {/* Big CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="mailto:antoine.pulon@gmail.com"
            className="inline-flex items-center gap-3 font-display font-bold text-base px-7 py-4 rounded-full text-white bg-gradient-to-r from-violet-500 to-violet-600 shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/35 active:translate-y-0 transition-all"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {t.contact.links.email}
          </a>
          <a
            href="https://www.linkedin.com/in/antoine-pulon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display font-bold text-base px-7 py-4 rounded-full text-white bg-[#06b6d4] shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/35 active:translate-y-0 transition-all"
          >
            <LinkedinIcon className="size-5" />
            {t.contact.links.linkedin}
          </a>
          <a
            href="https://github.com/MagicPupu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display font-bold text-base px-7 py-4 rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <GithubIcon className="size-5" />
            GitHub
          </a>
        </div>

        {/* Contact form */}
        <div className="text-left border-t border-white/[0.07] pt-12">
          <p className="font-display font-semibold text-white/60 text-sm mb-6 uppercase tracking-widest text-center">
            {lang === "en" ? "Or send a message" : "Ou envoyez un message"}
          </p>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {submitted ? (
              <div className="flex items-center justify-center min-h-40 rounded-2xl border border-violet-500/20 bg-violet-500/5 text-violet-400">
                <div className="text-center">
                  <p className="text-3xl mb-2">✅</p>
                  <p className="font-display font-semibold">
                    {lang === "en" ? "Message sent!" : "Message envoyé !"}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-display text-white/50 text-sm">{t.contact.form.name}</label>
                    <input type="text" value={form.name} placeholder={t.contact.form.namePlaceholder}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={cn(inputBase, errors.name && "border-red-500/60")} />
                    {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-display text-white/50 text-sm">{t.contact.form.email}</label>
                    <input type="email" value={form.email} placeholder={t.contact.form.emailPlaceholder}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={cn(inputBase, errors.email && "border-red-500/60")} />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-display text-white/50 text-sm">{t.contact.form.message}</label>
                  <textarea rows={5} value={form.message} placeholder={t.contact.form.messagePlaceholder}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={cn(inputBase, "resize-none", errors.message && "border-red-500/60")} />
                  {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="font-display font-bold text-base px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/35 active:translate-y-0 transition-all self-start"
                >
                  {t.contact.form.send} →
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
