import type { Project } from "../types/projects"

function getDateTimestamp(value: string, endOfPeriod = false): number {
  const match = /^(?:(\d{2})\.)?(\d{2})\.(\d{4})$/.exec(value)
  if (!match) return Number.NEGATIVE_INFINITY

  const month = Number(match[2])
  const year = Number(match[3])
  if (month < 1 || month > 12) return Number.NEGATIVE_INFINITY

  // Month-only end dates cover the whole month, including its final day.
  const day = match[1]
    ? Number(match[1])
    : endOfPeriod
      ? new Date(Date.UTC(year, month, 0)).getUTCDate()
      : 1
  const timestamp = Date.UTC(year, month - 1, day)
  const date = new Date(timestamp)

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return Number.NEGATIVE_INFINITY
  }

  return timestamp
}

export function sortProjectsByDate(projects: readonly Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const aOngoing = !a.period.end
    const bOngoing = !b.period.end
    if (aOngoing !== bOngoing) return aOngoing ? -1 : 1

    const aLatest = getDateTimestamp(a.period.end ?? a.period.start, !aOngoing)
    const bLatest = getDateTimestamp(b.period.end ?? b.period.start, !bOngoing)
    if (aLatest !== bLatest) return aLatest > bLatest ? -1 : 1

    const aStart = getDateTimestamp(a.period.start)
    const bStart = getDateTimestamp(b.period.start)
    if (aStart !== bStart) return aStart > bStart ? -1 : 1

    return 0
  })
}
