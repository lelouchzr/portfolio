import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  isLocale,
  LOCALE_OPEN_GRAPH,
  LOCALES,
  type Locale,
} from "@/i18n/config"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { SITE_INFO } from "@/config/site"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { Hello } from "@/features/portfolio/components/hello"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { getPortfolioData } from "@/features/portfolio/data/localized"
import type { User } from "@/features/portfolio/types/user"

export const dynamicParams = false

type LocalePageProps = {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await getRouteLocale(params)
  const { user, messages } = getPortfolioData(locale)
  const url = `/${locale}`

  return {
    title: {
      absolute: messages.metadata.title,
    },
    description: messages.metadata.description,
    keywords: user.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: "/en",
        fr: "/fr",
        ko: "/kr",
      },
    },
    openGraph: {
      siteName: SITE_INFO.name,
      url,
      type: "profile",
      locale: LOCALE_OPEN_GRAPH[locale],
      alternateLocale: LOCALES.filter((item) => item !== locale).map(
        (item) => LOCALE_OPEN_GRAPH[item]
      ),
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      gender: user.gender,
      images: [
        {
          url: user.ogImage,
          width: 1200,
          height: 630,
          alt: user.displayName,
        },
      ],
    },
  }
}

export default async function HomePage({ params }: LocalePageProps) {
  const locale = await getRouteLocale(params)
  const { user, experiences, education, projects, techStack, messages } =
    getPortfolioData(locale)

  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd(locale, user)} />

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader user={user} />
          <Separator />

          <Overview user={user} labels={messages.overview} locale={locale} />
          <SocialLinks />
          <Separator />

          <Hello user={user} labels={messages.hello} />
          <Separator />

          <TechStack
            items={techStack}
            title={messages.sections.stack}
            categoryLabels={messages.stackCategories}
          />
          <Separator />

          <Experiences
            experiences={experiences}
            title={messages.sections.experience}
            labels={messages.actions}
          />
          <Separator />

          <Education
            education={education}
            title={messages.sections.education}
            labels={messages.actions}
          />
          <Separator />

          <Projects
            projects={projects}
            title={messages.sections.projects}
            labels={messages.actions}
          />
        </div>
      </div>
    </>
  )
}

async function getRouteLocale(
  params: LocalePageProps["params"]
): Promise<Locale> {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return locale
}

function getProfilePageJsonLd(
  locale: Locale,
  user: User
): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl(`/${locale}`),
    dateCreated: new Date(user.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}
