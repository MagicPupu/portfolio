"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080808] border-t border-white/[0.05] py-8 text-center">
      <p className="font-display text-[0.82rem] text-white/30">
        © {year}{" "}
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
          Antoine Pulon
        </span>
        .{" "}
        {lang === "en" ? "All rights reserved." : "Tous droits réservés."}{" "}
        <span className="text-white/15">
          · Built with Next.js · Tailwind · shadcn/ui
        </span>
      </p>
    </footer>
  )
}
