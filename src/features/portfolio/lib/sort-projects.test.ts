import { describe, expect, it } from "vitest"

import type { Project } from "../types/projects"
import { sortProjectsByDate } from "./sort-projects"

function project(id: string, start: string, end?: string): Project {
  return { id, title: id, period: { start, end }, skills: [] }
}

describe("sortProjectsByDate", () => {
  it("puts ongoing projects first, then sorts by latest activity", () => {
    const result = sortProjectsByDate([
      project("older", "01.01.2026", "31.01.2026"),
      project("recent", "04.11.2026", "05.11.2026"),
      project("ongoing", "01.09.2026"),
    ])

    expect(result.map((item) => item.id)).toEqual([
      "ongoing",
      "recent",
      "older",
    ])
  })

  it("compares month-only dates with precise dates and breaks ties by start", () => {
    const result = sortProjectsByDate([
      project("older-start", "09.2025", "08.2026"),
      project("earlier-day", "01.08.2026", "30.08.2026"),
      project("newer-start", "01.08.2026", "31.08.2026"),
    ])

    expect(result.map((item) => item.id)).toEqual([
      "newer-start",
      "older-start",
      "earlier-day",
    ])
  })

  it("sorts ongoing projects by their start date", () => {
    const result = sortProjectsByDate([
      project("older", "09.2026"),
      project("newer", "15.09.2026"),
    ])

    expect(result.map((item) => item.id)).toEqual(["newer", "older"])
  })

  it("keeps invalid calendar dates after valid dated projects", () => {
    const result = sortProjectsByDate([
      project("invalid", "01.01.2026", "31.02.2026"),
      project("valid", "01.01.2026", "28.02.2026"),
    ])

    expect(result.map((item) => item.id)).toEqual(["valid", "invalid"])
  })

  it("does not mutate the input and preserves order for identical dates", () => {
    const input = Object.freeze([
      project("first", "01.01.2026", "31.01.2026"),
      project("second", "01.01.2026", "31.01.2026"),
    ])

    expect(sortProjectsByDate(input)).toEqual(input)
    expect(sortProjectsByDate(input)).not.toBe(input)
    expect(sortProjectsByDate([])).toEqual([])
  })
})
