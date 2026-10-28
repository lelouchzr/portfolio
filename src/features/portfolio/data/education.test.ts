import { LOCALES } from "@/i18n/config"
import { describe, expect, it } from "vitest"

import { getPortfolioData } from "./localized"

describe("SNEE education entry", () => {
  it.each(LOCALES)("appears with the CV dates and project in %s", (locale) => {
    const { education } = getPortfolioData(locale)
    const entry = education.find((item) => item.id === "snee")

    expect(entry?.school).toContain("SNEE")
    expect(entry?.period).toEqual({ start: "2026", end: "2027" })
    expect(entry?.fieldOfStudy).toContain("Frameclue")
    expect(entry?.degree).toBeUndefined()
    expect(entry?.isExpanded).toBe(true)
  })
})
