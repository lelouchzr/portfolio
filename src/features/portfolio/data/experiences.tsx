import { BriefcaseBusinessIcon, CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "losthaven",
    companyName: "LostHaven",
    companyLogo: "/images/portfolio/losthaven-logo-rune.png",
    companyWebsite: "https://lost-haven.com",
    location: "Remote",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Co-Founder & Software Engineer",
        employmentPeriod: {
          start: "03.2025",
        },
        employmentType: "Freelance",
        icon: <CodeXmlIcon />,
        description: `- Co-founded LostHaven, an independent game development project with a commercial release objective.
- Contributed to game development with Godot and designed the project's technical architecture.
- Developed and maintained the official website and related web services.
- Designed and implemented gameplay systems and web-based features.
- Participated in project management, technical planning and team coordination.
- Collaborated on software engineering, infrastructure and product development strategy.`,
        skills: [
          "Godot",
          "Game Development",
          "Software Engineering",
          "Technical Architecture",
          "Tailwind CSS",
          "Web Development",
          "Project Management",
          "Product Strategy",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "apimo",
    companyName: "Apimo",
    companyLogo: "/images/portfolio/apimo-logo.png",
    companyWebsite: "https://apimo.com/en",
    location: "Cannes, France",
    locationType: "On-site",
    positions: [
      {
        id: "3",
        title: "Backend Developer",
        employmentPeriod: {
          start: "04.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Contributed to the redevelopment of Apimo API v2, a REST API built with Symfony.
- Designed and implemented multiple API endpoints using GET, POST, PATCH and DELETE for user and contact management.
- Refactored and improved existing endpoints to enhance consistency, scalability and maintainability.
- Implemented business logic and validation rules within backend services.
- Used Propel ORM for database operations and complex query management.
- Integrated OAuth2 authentication and role-based access control.
- Participated in Agile development cycles, including sprint planning, reviews and team collaboration.
- Improved API architecture through modular design and reusable components.`,
        skills: [
          "Symfony",
          "PHP",
          "REST API",
          "OAuth2",
          "Propel ORM",
          "SQL",
          "API Development",
          "JavaScript",
          "Agile",
        ],
      },
      {
        id: "2",
        title: "Backend Developer (part-time)",
        employmentPeriod: {
          start: "10.2024",
          end: "01.2025",
        },
        employmentType: "Part-time internship",
        icon: <CodeXmlIcon />,
        description: `- Contributed to the development of Apimo API v2 using Symfony.
- Designed and implemented new API endpoints to support business requirements.
- Developed and enhanced backend features for internal applications.
- Used PHP, Symfony and MySQL for application development and data management.
- Participated in testing, validation and bug-fixing processes.
- Worked in an Agile environment with task tracking and regular collaboration with the development team.
- Strengthened skills in API architecture, software development best practices and teamwork.
- Position carried out alongside my third year at EPITECH, working on Thursdays and Fridays.`,
        skills: [
          "Symfony",
          "PHP",
          "MySQL",
          "REST API",
          "API Development",
          "Testing",
          "Bug Fixing",
          "Agile",
        ],
      },
      {
        id: "1",
        title: "Backend Developer",
        employmentPeriod: {
          start: "07.2023",
          end: "12.2023",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Contributed to backend development for a real estate software platform used by more than 5,000 agencies.
- Developed and improved internal features and tools.
- Participated in the maintenance and evolution of existing applications.
- Contributed to application monitoring, testing and deployment activities.
- Worked within an Agile team using sprint-based development cycles.
- Collaborated with experienced developers in a professional environment.
- Gained experience in software development best practices and teamwork on large-scale projects.`,
        skills: [
          "PHP",
          "Backend",
          "REST API",
          "Real Estate Software",
          "Testing",
          "Deployment",
          "Agile",
          "Git",
        ],
      },
    ],
  },
  {
    id: "cassini",
    companyName: "Cassini - L'Épicerie Contemporaine",
    companyLogo: "/images/portfolio/cassini-logo.jpeg",
    location: "Nice, France",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Store Associate",
        employmentPeriod: {
          start: "03.2024",
          end: "07.2025",
        },
        employmentType: "Part-time",
        icon: <BriefcaseBusinessIcon />,
        description: `- Student job carried out alongside my studies.
- Worked part-time on weekends, with a temporary full-time period during Summer 2024.
- Developed customer-facing, reliability and time-management skills in a professional environment.`,
        skills: [
          "Customer Service",
          "Teamwork",
          "Reliability",
          "Time Management",
          "Adaptability",
        ],
      },
    ],
  },
]
