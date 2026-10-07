"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import type { Lang } from "@/lib/i18n"

type Block = { heading: string; paragraphs: string[] }

const content: Record<Lang, { title: string; back: string; updated: string; blocks: Block[] }> = {
  en: {
    title: "Legal notice & privacy",
    back: "← Back to the site",
    updated: "Last updated: October 2026",
    blocks: [
      {
        heading: "Publisher",
        paragraphs: [
          "This website is published by Antoine Pulon, an individual. Publication director: Antoine Pulon.",
          "Contact: antoine.pulon@gmail.com",
          "As permitted by French law (LCEN, article 6-III-2), the publisher's postal address is not published. It has been provided to the hosting provider.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. vercel.com"],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Unless stated otherwise, the content of this site (texts, design, code) belongs to Antoine Pulon. Third-party names, logos and trademarks (Jynio, Drinki, ArianeGroup, CESI and others) belong to their respective owners and are mentioned for information only.",
        ],
      },
      {
        heading: "Personal data",
        paragraphs: [
          "Contact form: when you send a message, your name, email address and message are collected and sent by email through Resend. They are used only to reply to your request, are not sold or shared for any other purpose, and are kept only as long as needed to handle your request. Legal basis: your consent (GDPR, article 6.1.a).",
          "Audience measurement: the site uses Vercel Analytics and Vercel Speed Insights to measure traffic and performance in aggregate. These tools do not use cookies.",
          "Browser storage: your language choice is saved in your browser (localStorage) so the site remembers it. It is not used for tracking and is never sent to a server.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the GDPR, you can access, correct or delete your data, and object to or restrict its processing. To exercise these rights, email antoine.pulon@gmail.com. You can also lodge a complaint with the CNIL (cnil.fr).",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales & confidentialité",
    back: "← Retour au site",
    updated: "Dernière mise à jour : octobre 2026",
    blocks: [
      {
        heading: "Éditeur",
        paragraphs: [
          "Ce site est édité par Antoine Pulon, personne physique. Directeur de la publication : Antoine Pulon.",
          "Contact : antoine.pulon@gmail.com",
          "Conformément à la loi (LCEN, article 6-III-2), l'adresse postale de l'éditeur n'est pas publiée. Elle a été communiquée à l'hébergeur.",
        ],
      },
      {
        heading: "Hébergement",
        paragraphs: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. vercel.com"],
      },
      {
        heading: "Propriété intellectuelle",
        paragraphs: [
          "Sauf mention contraire, le contenu de ce site (textes, design, code) appartient à Antoine Pulon. Les noms, logos et marques de tiers (Jynio, Drinki, ArianeGroup, CESI et autres) appartiennent à leurs propriétaires respectifs et sont cités à titre d'information.",
        ],
      },
      {
        heading: "Données personnelles",
        paragraphs: [
          "Formulaire de contact : lorsque vous envoyez un message, votre nom, votre adresse email et votre message sont collectés et transmis par email via Resend. Ils servent uniquement à répondre à votre demande, ne sont ni vendus ni utilisés à d'autres fins, et sont conservés uniquement le temps nécessaire au traitement de votre demande. Base légale : votre consentement (RGPD, article 6.1.a).",
          "Mesure d'audience : le site utilise Vercel Analytics et Vercel Speed Insights pour mesurer la fréquentation et les performances de manière agrégée. Ces outils n'utilisent pas de cookies.",
          "Stockage navigateur : votre choix de langue est enregistré dans votre navigateur (localStorage) pour être retenu. Il n'est pas utilisé à des fins de suivi et n'est jamais envoyé à un serveur.",
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Conformément au RGPD, vous pouvez accéder à vos données, les rectifier ou les supprimer, et vous opposer à leur traitement ou en demander la limitation. Pour exercer ces droits, écrivez à antoine.pulon@gmail.com. Vous pouvez aussi déposer une réclamation auprès de la CNIL (cnil.fr).",
        ],
      },
    ],
  },
}

export function Legal() {
  const { lang } = useLanguage()
  const c = content[lang as Lang]

  return (
    <section className="py-28">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <Link
          href="/"
          className="inline-block font-mono text-xs text-white/40 hover:text-accent transition-colors duration-150 mb-10"
        >
          {c.back}
        </Link>
        <h1 className="font-display font-bold tracking-tight leading-[0.95] text-white text-4xl sm:text-5xl mb-4">
          {c.title}
        </h1>
        <p className="font-mono text-xs text-white/40 mb-14">{c.updated}</p>

        <div className="flex flex-col gap-10">
          {c.blocks.map((b) => (
            <div key={b.heading} className="border-t border-white/[0.08] pt-8">
              <h2 className="font-display font-semibold text-white text-lg mb-4">{b.heading}</h2>
              <div className="flex flex-col gap-3">
                {b.paragraphs.map((p) => (
                  <p key={p} className="text-white/65 text-sm leading-[1.85]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
