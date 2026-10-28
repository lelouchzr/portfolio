import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"

const content = `# ${USER.displayName}

> ${USER.bio}

Personal portfolio of Adrien Lachambre, based in Nice, France. Holder of France's National Student-Entrepreneur Status (SNEE) for 2026–2027, developing Frameclue, an application for analyzing video creatives using artificial intelligence.

## Portfolio

- [English](${SITE_INFO.url}/en): Portfolio in English.
- [Français](${SITE_INFO.url}/fr): Portfolio en français.
- [한국어](${SITE_INFO.url}/kr): 한국어 포트폴리오.

## Profile and work

- [About](${SITE_INFO.url}/about.md): Background, technical skills and contact links.
- [Experience](${SITE_INFO.url}/experience.md): Professional experience.
- [Education and entrepreneurship](${SITE_INFO.url}/education.md): EPITECH, the Inha University exchange and the SNEE entrepreneurial project.
- [Projects](${SITE_INFO.url}/projects.md): Adrien's software engineering projects, including Frameclue.

## Resume

- [English resume](${SITE_INFO.url}/adrien-lachambre-resume-en.pdf): Six-month, full-time final-year internship in South Korea, starting in early March 2027.
- [CV français](${SITE_INFO.url}/adrien-lachambre-cv-fr.pdf): Stage de fin d'études de six mois à temps plein en Corée du Sud, à partir de début mars 2027.
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
