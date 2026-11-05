import { PROJECTS } from "@/features/portfolio/data/projects"

const content = `# Projects

${PROJECTS.map((item) => {
  const periodLabel =
    item.period.source === "commits" ? "Git activity" : "Period"
  const period = `${item.period.start} - ${item.period.end || "Present"}`
  const skills = `\n\nSkills: ${item.skills.join(", ")}`
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  const link = item.link ? `\n\nProject URL: ${item.link}` : ""
  return `## ${item.title}\n\n${periodLabel}: ${period}${link}${skills}${description}`
}).join("\n\n")}
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
