import type { Hackathon } from "../types/hackathons"

export const HACKATHONS: Hackathon[] = [
  {
    id: "meta-global-ai-2026",
    title: "Meta Global AI Developer Hackathon",
    date: "2026-11-05",
    location: "Worldwide",
    format: "online",
    description:
      "Participated with Sentinel, an interactive terminal workspace for investigating security logs with Meta AI and local MCP tools.",
    eventUrl: "https://cerebralvalley.ai/e/meta-ai-developer-hackathon",
    project: {
      title: "Sentinel",
      url: "https://github.com/lelouchzr/sentinel",
    },
  },
  {
    id: "tech-for-tourism-2022",
    title: "Tech for Tourism",
    date: "2022",
    location: "Cannes, France",
    format: "in-person",
    description:
      "In-person participation in the Tech for Tourism hackathon in Cannes.",
  },
]
