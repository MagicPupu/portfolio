import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers/Providers"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Antoine Pulon · Portfolio",
  description:
    "Computer Engineering Student · Full Stack · Cloud · AI. Co-founder of Drinki & Pollen. Building scalable products at the intersection of software engineering, AI, and cloud infrastructure.",
  openGraph: {
    title: "Antoine Pulon · Portfolio",
    description:
      "Computer Engineering Student · Full Stack · Cloud · AI. Co-founder of Drinki & Pollen.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen">
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
