import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Legal } from "@/components/sections/Legal"

export const metadata: Metadata = {
  title: "Legal notice & privacy · Antoine Pulon",
  robots: { index: false },
}

export default function LegalPage() {
  return (
    <>
      <main>
        <Legal />
      </main>
      <Footer />
    </>
  )
}
