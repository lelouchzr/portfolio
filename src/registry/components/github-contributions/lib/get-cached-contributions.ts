import { unstable_cache } from "next/cache"

import type { Activity } from "@/registry/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const DEFAULT_API_URL = "https://github-contributions-api.jogruber.de/v4"

export const getCachedContributions = unstable_cache(
  async (username: string) => {
    const apiUrl =
      process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL?.replace(
        /\/$/,
        ""
      ) || DEFAULT_API_URL

    try {
      const res = await fetch(`${apiUrl}/${username}?y=last`)
      if (!res.ok) {
        return []
      }

      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      // Contributions are decorative and must not prevent static generation.
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
