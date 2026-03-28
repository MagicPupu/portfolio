"use client"

import { LanguageProvider } from "@/contexts/LanguageContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="noise-overlay" aria-hidden="true" />
      {children}
    </LanguageProvider>
  )
}
