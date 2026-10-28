import type { MetadataRoute } from "next"
import { LOCALES } from "@/i18n/config"

import { blockCategories } from "@/config/registry"
import { SITE_INFO } from "@/config/site"
import { getAllBlockStaticParams } from "@/lib/blocks"
import { getComponentDocs } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedPortfolioRoutes = LOCALES.map((locale) => ({
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

  const components = getComponentDocs().map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const blockCategoryPages = blockCategories.map((category) => ({
    url: `${SITE_INFO.url}/blocks/${category.name}`,
    lastModified: new Date().toISOString(),
  }))

  const blocks = (await getAllBlockStaticParams()).map(
    ({ category, name }) => ({
      url: `${SITE_INFO.url}/blocks/${category}/${name}`,
      lastModified: new Date().toISOString(),
    })
  )

  const routes = ["/components", "/components/showcase", "/blocks"].map(
    (route) => ({
      url: `${SITE_INFO.url}${route}`,
      lastModified: new Date().toISOString(),
    })
  )

  return [
    ...localizedPortfolioRoutes,
    ...routes,
    ...components,
    ...blockCategoryPages,
    ...blocks,
  ]
}
