import { afterEach, describe, expect, it, vi } from "vitest"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe("site origin", () => {
  it("uses the owner's canonical domain in production", async () => {
    vi.stubEnv("NODE_ENV", "production")
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://adrien.lachambre.com")
    const { SITE_INFO } = await import("./site")

    expect(SITE_INFO.url).toBe("https://adrienlachambre.com")
  })

  it("preserves the configured local development origin", async () => {
    vi.stubEnv("NODE_ENV", "development")
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://ncdai.localhost")
    const { SITE_INFO } = await import("./site")

    expect(SITE_INFO.url).toBe("https://ncdai.localhost")
  })
})
