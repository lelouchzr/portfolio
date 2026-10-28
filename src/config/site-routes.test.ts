import {
  getRedirectUrl,
  getRewrittenUrl,
  unstable_getResponseFromNextConfig,
} from "next/experimental/testing/server"
import { describe, expect, it } from "vitest"

import nextConfig from "../../next.config"

const origin = "https://ncdai.localhost"

describe("portfolio routing", () => {
  it.each([
    "/components",
    "/components/apple-accordion",
    "/components/apple-accordion.md",
    "/components/showcase",
    "/components/rss",
    "/components.md",
    "/blocks",
    "/blocks/marketing/hero-01",
    "/blocks.md",
    "/preview/hero-01",
    "/doc.md/apple-accordion",
    "/r/apple-accordion.json",
    "/r/registry.json",
    "/blog/chanhdai-brand",
    "/blog.md",
    "/bookmarks",
    "/bookmarks.md",
    "/craft",
    "/craft.md",
    "/recognition.md",
    "/sponsors",
    "/testimonials",
    "/insights",
    "/registry/rss",
    "/rss",
    "/og",
  ])("routes inherited content to the 404 page: %s", async (pathname) => {
    const response = await unstable_getResponseFromNextConfig({
      url: `${origin}${pathname}`,
      nextConfig,
    })

    expect(new URL(getRewrittenUrl(response)!).pathname).toBe("/_not-found")
    expect(getRedirectUrl(response)).toBeNull()
  })

  it.each([
    "/en",
    "/fr",
    "/kr",
    "/about.md",
    "/education.md",
    "/experience.md",
    "/projects.md",
    "/llms.txt",
    "/sitemap.xml",
    "/adrien-lachambre-cv-fr.pdf",
    "/adrien-lachambre-resume-en.pdf",
    "/og/simple?title=Adrien",
  ])("keeps portfolio content available: %s", async (pathname) => {
    const response = await unstable_getResponseFromNextConfig({
      url: `${origin}${pathname}`,
      nextConfig,
    })

    expect(getRewrittenUrl(response)).toBeNull()
    expect(getRedirectUrl(response)).toBeNull()
  })

  it("serves the portfolio index through index.md and Markdown negotiation", async () => {
    for (const request of [
      { url: `${origin}/index.md` },
      { url: origin, headers: { accept: "text/markdown" } },
    ]) {
      const response = await unstable_getResponseFromNextConfig({
        ...request,
        nextConfig,
      })

      expect(new URL(getRewrittenUrl(response)!).pathname).toBe("/llms.txt")
    }
  })
})
