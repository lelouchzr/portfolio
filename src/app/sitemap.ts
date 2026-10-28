import type { MetadataRoute } from "next"
import { LOCALES } from "@/i18n/config"

import { SITE_INFO } from "@/config/site"

export const revalidate = false
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_INFO.url}/${locale}`,
    lastModified: new Date().toISOString(),
    alternates: {
      languages: {
        en: `${SITE_INFO.url}/en`,
        fr: `${SITE_INFO.url}/fr`,
        ko: `${SITE_INFO.url}/kr`,
      },
    },
  }))
}
