"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

const inputBase =
  "w-full bg-transparent border-b border-white/[0.20] px-0 py-3 text-white placeholder:text-white/30 outline-none font-mono text-sm transition-colors focus:border-accent"

type FormState = { name: string; email: string; message: string }
type FormErrors = Partial<Record<keyof FormState, string>>

export function Contact() {
  const { lang, t } = useLanguage()
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = lang === "en" ? "Required" : "Requis"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = lang === "en" ? "Valid email required" : "Email valide requis"
    if (!form.message.trim()) next.message = lang === "en" ? "Required" : "Requis"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    setSendError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(lang === "en" ? "Something went wrong." : "Une erreur est survenue.")
      setSubmitted(true)
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Error")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-28 border-t border-white/[0.08]">
      <div
        ref={ref}
        className={cn(
          "max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Heading */}
        <h2
          className="font-display font-bold tracking-tight leading-[0.95] text-white mb-5"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {lang === "en" ? "Let's work together." : "Travaillons ensemble."}
        </h2>
        <p className="text-white/60 max-w-lg mb-14 leading-relaxed">
          {t.contact.subtitle}
        </p>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Social links */}
          <div className="flex flex-col gap-5">
            <a
              href="mailto:antoine.pulon@gmail.com"
              className="group flex items-center justify-between border-b border-white/[0.08] pb-4 text-white/50 hover:text-white transition-colors duration-150"
            >
              <span className="font-display text-sm font-medium">
                {t.contact.links.email}
              </span>
              <span className="font-mono text-sm text-white/40 group-hover:text-accent transition-colors duration-150">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/antoine-pulon"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/[0.08] pb-4 text-white/50 hover:text-white transition-colors duration-150"
            >
              <span className="font-display text-sm font-medium">
                {t.contact.links.linkedin}
              </span>
              <span className="font-mono text-sm text-white/40 group-hover:text-accent transition-colors duration-150">→</span>
            </a>
            <a
              href="https://github.com/MagicPupu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/[0.08] pb-4 text-white/50 hover:text-white transition-colors duration-150"
            >
              <span className="font-display text-sm font-medium">GitHub</span>
              <span className="font-mono text-sm text-white/40 group-hover:text-accent transition-colors duration-150">→</span>
            </a>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex items-center justify-center min-h-48 border border-white/[0.08] text-white/50">
                <div className="text-center">
                  <p className="font-display font-bold text-2xl text-accent mb-2">✓</p>
                  <p className="font-display font-medium text-sm">
                    {lang === "en" ? "Message sent." : "Message envoyé."}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.65rem] text-white/50 tracking-[0.12em] uppercase">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      placeholder={t.contact.form.namePlaceholder}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={cn(inputBase, errors.name && "border-red-500/60")}
                    />
                    {errors.name && (
                      <p className="text-red-400/70 text-xs font-mono mt-1" role="alert">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.65rem] text-white/50 tracking-[0.12em] uppercase">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      placeholder={t.contact.form.emailPlaceholder}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={cn(inputBase, errors.email && "border-red-500/60")}
                    />
                    {errors.email && (
                      <p className="text-red-400/70 text-xs font-mono mt-1" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[0.65rem] text-white/30 tracking-[0.12em] uppercase">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    placeholder={t.contact.form.messagePlaceholder}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={cn(inputBase, "resize-none", errors.message && "border-red-500/60")}
                  />
                  {errors.message && (
                    <p className="text-red-400/70 text-xs font-mono mt-1" role="alert">{errors.message}</p>
                  )}
                </div>

                {sendError && (
                  <p className="text-red-400/70 text-sm font-mono" role="alert">{sendError}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start font-display font-bold text-sm px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {sending
                    ? (lang === "en" ? "Sending…" : "Envoi…")
                    : `${t.contact.form.send} →`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
