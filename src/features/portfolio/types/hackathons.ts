export type Hackathon = {
  id: string
  title: string
  /** ISO date, or just the year when the exact date is unknown. */
  date: string
  location: string
  format: "online" | "in-person"
  description: string
  eventUrl?: string
  project?: {
    title: string
    url: string
  }
}
