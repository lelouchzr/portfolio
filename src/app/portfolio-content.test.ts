import { describe, expect, it } from "vitest"

import { GET as getEducation } from "./(llms)/education.md/route"
import { GET as getIndex } from "./(llms)/llms.txt/route"
import sitemap from "./sitemap"

describe("public portfolio content", () => {
  it("indexes only Adrien's profile, portfolio and CVs", async () => {
    const response = await getIndex()
    const content = await response.text()
    const paths = [...content.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(
      (match) => new URL(match[1]).pathname
    )

    expect(response.headers.get("Content-Type")).toContain("text/markdown")
    expect(content).toContain("Adrien Lachambre")
    expect(content).toContain("SNEE")
    expect(content).toContain("2026–2027")
    expect(content).toContain("Frameclue")
    expect(content).not.toMatch(/component registry|chanhdai|ncdai/i)
    expect(paths).toEqual([
      "/en",
      "/fr",
      "/kr",
      "/about.md",
      "/experience.md",
      "/education.md",
      "/projects.md",
      "/adrien-lachambre-resume-en.pdf",
      "/adrien-lachambre-cv-fr.pdf",
    ])
  })

  it("includes SNEE in the education export", async () => {
    const content = await (await getEducation()).text()

    expect(content).toContain("National Student-Entrepreneur Status (SNEE)")
    expect(content).toContain("Duration: 2026 - 2027")
    expect(content).toContain("Entrepreneurial project: Frameclue")
  })

  it("publishes only the localized portfolio pages in the sitemap", () => {
    const entries = sitemap()

    expect(entries.map((entry) => new URL(entry.url).pathname)).toEqual([
      "/en",
      "/fr",
      "/kr",
    ])
    expect(entries.every((entry) => entry.alternates?.languages?.ko)).toBe(true)
  })
})
