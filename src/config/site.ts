import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  // Public exports and canonical links must use the owner's domain even when
  // the deployment still has an outdated app URL configured.
  url:
    process.env.NODE_ENV === "production"
      ? USER.website
      : process.env.NEXT_PUBLIC_APP_URL || USER.website,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/lelouchzr/portfolio/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = []

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/en" as Route,
  },
  ...MAIN_NAV,
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "lelouchzr/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/lelouchzr/portfolio"

export const SPONSORSHIP_URL = "https://github.com/lelouchzr"

export const UTM_PARAMS = {
  utm_source: "adrienlachambre.com",
}
