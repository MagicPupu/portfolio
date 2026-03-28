export type Bilingual = { en: string; fr: string }

export type Experience = {
  role: Bilingual
  company: string
  location: string
  period: string
  bullets: Bilingual[]
}

export type Project = {
  name: string
  subtitle?: string
  tech: string[]
  description: Bilingual
  badge: string
  color: string
  link?: string
}

export type Skill = {
  name: string
  emoji: string
  level: number
}

export type SkillGroup = {
  category: Bilingual
  color: string
  skills: Skill[]
}

export const experiences: Experience[] = [
  {
    role: {
      en: "Services, Solutions & Applications Lifecycle Manager",
      fr: "Responsable Cycle de Vie des Services, Solutions & Applications",
    },
    company: "ArianeGroup",
    location: "Bordeaux, France",
    period: "Oct 2023 → Present",
    bullets: [
      {
        en: "Linux/cloud administration, Kubernetes, Docker, DevSecOps pipelines",
        fr: "Administration Linux/cloud, Kubernetes, Docker, pipelines DevSecOps",
      },
      {
        en: "Cybersecurity audits and system resilience improvements",
        fr: "Audits de cybersécurité et amélioration de la résilience des systèmes",
      },
      {
        en: "Final-year project: conversational AI agent using LLM function calling to automate workflows between two internal enterprise tools",
        fr: "Projet de fin d'études : agent IA conversationnel utilisant le function calling LLM pour automatiser des flux entre deux outils internes",
      },
    ],
  },
  {
    role: {
      en: "Co-Founder & Lead Developer",
      fr: "Co-Fondateur & Lead Développeur",
    },
    company: "Drinki",
    location: "Bordeaux, France",
    period: "Sept 2023 → Present",
    bullets: [
      {
        en: "Built and launched a React Native + GCP mobile app for bar/club discovery and discounts",
        fr: "Conception et lancement d'une application mobile React Native + GCP pour la découverte de bars et clubs",
      },
      {
        en: "Led a team of 3 developers; drove product scaling and strategic decisions",
        fr: "Direction d'une équipe de 3 développeurs ; pilotage du scaling produit et des décisions stratégiques",
      },
      {
        en: "Integrated geolocation, analytics, gamification, Stripe payments and Mapbox",
        fr: "Intégration de géolocalisation, analytics, gamification, paiements Stripe et Mapbox",
      },
    ],
  },
  {
    role: {
      en: "IT Executive & Cybersecurity Awareness Leader",
      fr: "Responsable IT & Sensibilisation à la Cybersécurité",
    },
    company: "Safran Electronics & Defense",
    location: "Singapore",
    period: "Jul 2025 → Oct 2025",
    bullets: [
      {
        en: "Built Power BI dashboards for chemical stock management — awarded internally",
        fr: "Création de tableaux de bord Power BI pour la gestion des stocks chimiques — récompensé en interne",
      },
      {
        en: "Led phishing campaigns and tabletop cybersecurity exercises for staff awareness",
        fr: "Animation de campagnes de phishing et d'exercices de simulation cybersécurité",
      },
      {
        en: "Deployed social engineering attacks using Kali Linux, Gophish and SET",
        fr: "Déploiement d'attaques de social engineering avec Kali Linux, Gophish et SET",
      },
    ],
  },
  {
    role: {
      en: "AI Research Intern — Data Management Automation",
      fr: "Stagiaire Recherche IA — Automatisation de la Gestion des Données",
    },
    company: "Bordeaux Population Health",
    location: "Bordeaux, France",
    period: "May 2025 → Jun 2025",
    bullets: [
      {
        en: "Built a stateless data pipeline with Kedro + LlamaIndex for automated medical data processing",
        fr: "Développement d'un pipeline de données stateless avec Kedro + LlamaIndex pour le traitement automatisé de données médicales",
      },
      {
        en: "Automated data cleaning from medical CSV files via TableLLM",
        fr: "Automatisation du nettoyage de données médicales CSV via TableLLM",
      },
      {
        en: "Ensured GDPR/CNIL compliance throughout the pipeline",
        fr: "Conformité RGPD/CNIL assurée tout au long du pipeline",
      },
    ],
  },
  {
    role: {
      en: "Computer Engineer — Linux",
      fr: "Ingénieur Informatique — Linux",
    },
    company: "ArianeGroup",
    location: "Bordeaux, France",
    period: "Apr 2023 → Jul 2023",
    bullets: [
      {
        en: "Conducted Linux vulnerability audits and ensured security compliance",
        fr: "Réalisation d'audits de vulnérabilités Linux et conformité sécurité",
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: "Drinki",
    tech: ["React Native", "Firebase", "AWS", "GCP", "Stripe", "Mapbox"],
    description: {
      en: "B2C/B2B mobile app for nightlife discovery in Bordeaux. Live with real users. Expanding nationally.",
      fr: "App mobile B2C/B2B pour la découverte de bars et clubs à Bordeaux. En production avec de vrais utilisateurs. Expansion nationale en cours.",
    },
    badge: "🟢 Live",
    color: "#00F5C4",
  },
  {
    name: "Projet de fin d'études",
    subtitle: "ArianeGroup",
    tech: ["LLM", "Function Calling", "Python"],
    description: {
      en: "Conversational AI agent orchestrating two internal enterprise tools via LLM function calling. Natural language provisioning workflows.",
      fr: "Agent IA conversationnel orchestrant deux outils internes via LLM function calling. Workflows de provisionnement en langage naturel.",
    },
    badge: "🏢 Enterprise",
    color: "#00B4FF",
  },
  {
    name: "BPH Data Pipeline",
    tech: ["Kedro", "LlamaIndex", "TableLLM"],
    description: {
      en: "Stateless medical data integration pipeline. GDPR-compliant. Automated structure extraction from CSV files.",
      fr: "Pipeline d'intégration de données médicales stateless. Conforme RGPD. Extraction automatique de structure depuis des CSV.",
    },
    badge: "🔬 Research",
    color: "#FF7A00",
  },
  {
    name: "5C&CO Website",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Vercel"],
    description: {
      en: "Professional website for a family business. Pastel fuchsia/green palette, Cormorant Garamond + DM Sans typography.",
      fr: "Site professionnel pour une entreprise familiale. Palette fuchsia/vert pastel, typographie Cormorant Garamond + DM Sans.",
    },
    badge: "✅ Shipped",
    color: "#FFE600",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Languages", fr: "Langages" },
    color: "#FF4D4D",
    skills: [
      { name: "Python",     emoji: "🐍", level: 90 },
      { name: "TypeScript", emoji: "📘", level: 85 },
      { name: "JavaScript", emoji: "⚡", level: 85 },
      { name: "C++",        emoji: "⚙️", level: 70 },
      { name: "C#",         emoji: "💜", level: 65 },
      { name: "SQL",        emoji: "🗄️", level: 75 },
      { name: "NoSQL",      emoji: "📦", level: 70 },
    ],
  },
  {
    category: { en: "Frontend", fr: "Frontend" },
    color: "#8B5CF6",
    skills: [
      { name: "React",        emoji: "⚛️", level: 85 },
      { name: "React Native", emoji: "📱", level: 80 },
      { name: "Next.js",      emoji: "▲",  level: 85 },
      { name: "Flutter",      emoji: "💙", level: 60 },
      { name: "Tailwind CSS", emoji: "🎨", level: 90 },
      { name: "shadcn/ui",    emoji: "🧩", level: 80 },
    ],
  },
  {
    category: { en: "Backend & Cloud", fr: "Backend & Cloud" },
    color: "#00F5C4",
    skills: [
      { name: "Node.js",    emoji: "🟢", level: 80 },
      { name: "GCP",        emoji: "☁️", level: 75 },
      { name: "AWS",        emoji: "🟠", level: 70 },
      { name: "Docker",     emoji: "🐳", level: 80 },
      { name: "Kubernetes", emoji: "☸️", level: 70 },
      { name: "Linux",      emoji: "🐧", level: 85 },
    ],
  },
  {
    category: { en: "AI & Data", fr: "IA & Données" },
    color: "#FFE600",
    skills: [
      { name: "LLMs",           emoji: "🤖", level: 80 },
      { name: "LlamaIndex",     emoji: "🦙", level: 75 },
      { name: "Kedro",          emoji: "🔁", level: 70 },
      { name: "Machine Learning", emoji: "🧠", level: 70 },
      { name: "Deep Learning",  emoji: "🔬", level: 65 },
      { name: "Power BI",       emoji: "📈", level: 75 },
    ],
  },
  {
    category: { en: "Cybersecurity", fr: "Cybersécurité" },
    color: "#FF7A00",
    skills: [
      { name: "Kali Linux",        emoji: "🥷", level: 70 },
      { name: "DevSecOps",         emoji: "🔐", level: 75 },
      { name: "Gophish",           emoji: "🎣", level: 70 },
      { name: "Social Engineering",emoji: "🎭", level: 65 },
      { name: "Pentest",           emoji: "🔓", level: 65 },
    ],
  },
  {
    category: { en: "Tools", fr: "Outils" },
    color: "#00B4FF",
    skills: [
      { name: "Git",       emoji: "🔀", level: 90 },
      { name: "Stripe",    emoji: "💳", level: 75 },
      { name: "Mapbox",    emoji: "🗺️", level: 70 },
      { name: "Firebase",  emoji: "🔥", level: 75 },
      { name: "MongoDB",   emoji: "🍃", level: 75 },
      { name: "Vercel",    emoji: "▲",  level: 85 },
    ],
  },
]
