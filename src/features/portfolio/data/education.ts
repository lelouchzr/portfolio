import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "epitech",
    school: "EPITECH - European Institute of Technology",
    degree: "Master's Degree",
    fieldOfStudy: "Software Engineering / Computer Science",
    period: {
      start: "09.2022",
      end: "08.2027",
    },
    description: `- Project-based curriculum focused on software engineering, software development and solving complex technical problems.
- Participated in numerous individual and team-based projects in a demanding technical environment.
- Developed skills in web development, systems programming, database design, software architecture and project management.
- Completed collaborative projects that fostered autonomy, teamwork, adaptability and continuous learning.`,
    skills: [
      "Software Engineering",
      "Computer Science",
      "Teamwork",
      "Full-stack Development",
      "Systems Programming",
      "Database Design",
      "Software Architecture",
      "Project Management",
    ],
    isExpanded: true,
  },
  {
    id: "inha-university",
    school: "Inha University",
    degree: "University Exchange Program",
    fieldOfStudy: "Software Engineering / Computer Science",
    period: {
      start: "09.2025",
      end: "06.2026",
    },
    description: `- One-year university exchange program in South Korea in the field of software engineering.
- Collaborated with students from diverse backgrounds in a multicultural academic environment.
- Coursework and projects focused on Python, C, C++, Linux, databases and artificial intelligence technologies.
- Strengthened autonomy, cross-cultural collaboration and problem-solving skills while learning Korean.`,
    skills: [
      "Python",
      "C",
      "C++",
      "Linux",
      "Databases",
      "Artificial Intelligence",
      "Object-Oriented Programming",
      "Teamwork",
    ],
  },
]
