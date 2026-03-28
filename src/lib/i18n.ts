export type Lang = "fr" | "en"

type Stringified<T> = {
  [K in keyof T]: T[K] extends string ? string : Stringified<T[K]>
}

const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    title: "Computer Engineering Student · Full Stack · Cloud · AI",
    subtitle:
      "Co-founder of Drinki. Building scalable products at the intersection of software engineering, AI, and cloud infrastructure.",
    cta: {
      work: "View my work",
      contact: "Contact",
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  about: {
    title: "About",
    body: "22-year-old French engineer based in Bordeaux. I build full-stack products, ship AI pipelines, and co-found startups — all while completing my Master's at CESI. Fluent in English (TOEIC 935), conversational in Spanish, learning Japanese. Passionate about cloud-native systems, generative AI, and long-term investing.",
  },
  experience: {
    title: "Experience",
    present: "Present",
  },
  projects: {
    title: "Projects",
  },
  skills: {
    title: "Skills",
  },
  blog: {
    title: "Blog",
    comingSoon: "Coming soon",
    subtitle: "Articles on engineering, AI, startups and investing.",
    readMore: "Read more",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Open to internships, full-time roles, and collaboration on ambitious projects.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
    },
    links: {
      email: "Send an email",
      linkedin: "Connect on LinkedIn",
    },
  },
} as const

const fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    title: "Étudiant Ingénieur Informatique · Full Stack · Cloud · IA",
    subtitle:
      "Co-fondateur de Drinki. Je construis des produits scalables à l'intersection du génie logiciel, de l'IA et de l'infrastructure cloud.",
    cta: {
      work: "Voir mes projets",
      contact: "Contact",
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  about: {
    title: "À propos",
    body: "Ingénieur de 22 ans basé à Bordeaux. Je construis des produits full-stack, déploie des pipelines IA et co-fonde des startups — tout en finalisant mon Master à CESI. Anglais courant (TOEIC 935), espagnol conversationnel, japonais en apprentissage. Passionné par les systèmes cloud-native, l'IA générative et l'investissement long terme.",
  },
  experience: {
    title: "Expérience",
    present: "Présent",
  },
  projects: {
    title: "Projets",
  },
  skills: {
    title: "Compétences",
  },
  blog: {
    title: "Blog",
    comingSoon: "Bientôt disponible",
    subtitle: "Articles sur l'ingénierie, l'IA, les startups et l'investissement.",
    readMore: "Lire la suite",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Disponible pour des stages, des CDI et des collaborations sur des projets ambitieux.",
    form: {
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      messagePlaceholder: "Parlez-moi de votre projet...",
    },
    links: {
      email: "Envoyer un email",
      linkedin: "Se connecter sur LinkedIn",
    },
  },
} as const satisfies Stringified<typeof en>

export const translations = { en, fr } as const
export type Translations = Stringified<typeof en>

export const heroRoles: Record<Lang, string[]> = {
  en: ["Full Stack Engineer", "AI Engineer", "Cloud Architect", "Startup Co-Founder"],
  fr: ["Ingénieur Full Stack", "Ingénieur IA", "Architecte Cloud", "Co-Fondateur Startup"],
}
