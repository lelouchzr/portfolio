import type { NextConfig } from "next"

const GITHUB_CONTRIBUTIONS_API_URL =
  process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ||
  "https://github-contributions-api.jogruber.de/v4"

// Keep upstream sources available for updates without publishing their pages
// or registry assets under Adrien's domain. beforeFiles also covers public/r.
const UPSTREAM_ONLY_PATHS = [
  "/components/:path*",
  "/blocks/:path*",
  "/preview/:path*",
  "/blog/:path*",
  "/bookmarks/:path*",
  "/craft/:path*",
  "/sponsors/:path*",
  "/testimonials/:path*",
  "/insights/:path*",
  "/doc.md/:path*",
  "/r/:path*",
  "/registry/:path*",
  "/rss",
  "/og",
  "/:document(blocks|components|blog|bookmarks|craft|recognition).md",
]

const nextConfig: NextConfig = {
  // Vercel provides its own build adapter; standalone remains enabled for
  // Docker/Openship deployments where the minimal server bundle is required.
  output: process.env.VERCEL ? undefined : "standalone",
  /**
   * Stamped once per build and inlined. Reading the clock at render time would
   * instead report whenever a page was regenerated, which drifts on the ISR
   * routes and disagrees with the fully static ones.
   */
  env: {
    BUILD_TIMESTAMP: new Date().toISOString(),
    // Keep static builds independent from deployment-specific configuration.
    NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL: GITHUB_CONTRIBUTIONS_API_URL,
  },
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["ncdai.localhost", "ncdai.local"],
  devIndicators: false,
  experimental: {
    // Rewrite barrel imports to deep imports so a single icon doesn't pull the
    // whole package into the module graph. Next already optimizes lucide-react,
    // @tabler/icons-react, date-fns and lodash-es by default; these are the
    // heavy icon packages this app uses that are NOT on that default list.
    optimizePackageImports: [
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
      "@phosphor-icons/react",
      "@remixicon/react",
    ],
    agentUpgrade: "latest",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
  async redirects() {
    return [
      {
        source: "/llms-full.txt",
        destination: "/llms.txt",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        ...UPSTREAM_ONLY_PATHS.map((source) => ({
          source,
          destination: "/_not-found",
        })),
        {
          source: "/index.md",
          destination: "/llms.txt",
        },
        {
          source: "/",
          destination: "/llms.txt",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(?<accept>.*text/markdown.*)",
            },
          ],
        },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

export default nextConfig
