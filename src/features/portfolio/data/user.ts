import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Adrien",
  lastName: "Lachambre",
  displayName: "Adrien Lachambre",
  username: "lelouchzr",
  gender: "male",
  pronouns: "he/him",
  bio: "Software engineering student and SNEE student entrepreneur building full-stack applications, AI tools and backend systems.",
  flipSentences: [
    "Software Engineer.",
    "Student Entrepreneur (SNEE).",
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

I’m currently building Frameclue, an entrepreneurial Creative Intelligence product that helps teams understand video creatives and choose what to test next. I hold France’s National Student-Entrepreneur Status (SNEE).

I also build personal projects around AI agents, tool calling, MCP integrations, language learning, developer tools and web applications. I experiment with environments such as Hermes by Nous Research while exploring new technologies, product ideas and clean software architecture.

After an academic exchange program in South Korea, I developed a strong interest in international environments and cross-cultural collaboration. I’m actively learning Korean and preparing for TOPIK, TOEIC and IELTS, with the goal of working in an international setting.
`,
  avatar: "/images/portfolio/adrien-avatar.webp",
  avatarSketch: "/images/portfolio/adrien-avatar.webp",
  avatarVariants: {
    lightOff: "/images/portfolio/adrien-avatar.webp",
    lightOn: "/images/portfolio/adrien-avatar.webp",
    darkOff: "/images/portfolio/adrien-avatar.webp",
    darkOn: "/images/portfolio/adrien-avatar.webp",
  },
  ogImage:
    "/og/simple?title=Adrien%20Lachambre&description=Software%20Engineer%20and%20Student%20Entrepreneur",
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
    "frameclue",
    "creative intelligence",
    "student entrepreneur",
    "SNEE",
  ],
  dateCreated: "2026-07-09", // YYYY-MM-DD
}
