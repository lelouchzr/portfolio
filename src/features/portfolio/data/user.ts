import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Adrien",
  lastName: "Lachambre",
  displayName: "Adrien Lachambre",
  username: "lelouchzr",
  gender: "male",
  pronouns: "he/him",
  bio: "Software Engineering student interested in AI, backend systems and emerging technologies.",
  flipSentences: [
    "Software Engineer.",
    "AI and backend systems.",
    "Emerging technologies.",
    "Building impactful digital products.",
  ],
  address: "Nice, France",
  phoneNumberB64: "KzMzIDYgMjAgMjkgMjcgNDg=", // E.164 format, base64 encoded
  emailB64: "Y29udGFjdEBhZHJpZW5sYWNoYW1icmUuY29t", // base64 encoded
  website: "https://adrienlachambre.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Studying Software Engineering",
      company: "EPITECH",
      website: "https://epitech.eu",
      experienceId: "epitech",
    },
  ],
  about: `I’m Adrien Lachambre, a Software Engineering student at EPITECH, interested in artificial intelligence, backend systems, emerging technologies and building impactful digital products.

Through my experiences at Apimo, I contributed to REST APIs and backend solutions using Symfony, PHP and SQL while working in Agile teams on large-scale software projects.

I enjoy building personal projects around AI, language learning, developer tools and web applications. These projects help me improve my technical skills while exploring new technologies, product ideas and clean software architecture.

After an academic exchange program in South Korea, I developed a strong interest in international environments and cross-cultural collaboration. I’m actively learning Korean and preparing for TOPIK, TOEIC and IELTS, with the goal of working in an international setting.
`,
  avatar: "/images/portfolio/adrien-avatar.webp",
  avatarVariants: {
    lightOff: "/images/portfolio/adrien-avatar.webp",
    lightOn: "/images/portfolio/adrien-avatar.webp",
    darkOff: "/images/portfolio/adrien-avatar.webp",
    darkOn: "/images/portfolio/adrien-avatar.webp",
  },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "",
  timeZone: "Europe/Paris",
  keywords: [
    "Adrien Lachambre",
    "adrienlachambre",
    "lelouchzr",
    "software engineer",
    "software engineering student",
    "epitech",
    "python",
    "c++",
    "ai",
    "backend",
    "rag",
    "lost haven",
    "flashcardstudy",
  ],
  dateCreated: "2026-07-09", // YYYY-MM-DD
}
