import { HACKATHONS } from "@/features/portfolio/data/hackathons"

const content = `# Hackathons

${HACKATHONS.map((hackathon) => {
  const project = hackathon.project
    ? `\n\nProject: [${hackathon.project.title}](${hackathon.project.url})`
    : ""
  const event = hackathon.eventUrl ? `\n\n[Event](${hackathon.eventUrl})` : ""
  const period = hackathon.endDate
    ? `${hackathon.date} – ${hackathon.endDate}`
    : hackathon.date

  return `## ${hackathon.title}\n\nParticipation: ${period} | ${hackathon.location} | ${hackathon.format}\n\n${hackathon.description}${project}${event}`
}).join("\n\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/markdown;charset=utf-8" },
  })
}
