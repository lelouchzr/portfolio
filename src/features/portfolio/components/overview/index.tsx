import type { Locale } from "@/i18n/config"
import { urlToName } from "@/utils/url"
import {
  DownloadIcon,
  LinkIcon,
  MapPinIcon,
  MarsIcon,
  NonBinaryIcon,
  VenusIcon,
} from "lucide-react"

import type { PortfolioMessages } from "@/features/portfolio/data/localized"
import { getResumeDownload } from "@/features/portfolio/data/resume"
import { USER } from "@/features/portfolio/data/user"
import type { User } from "@/features/portfolio/types/user"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"
import { JobItem } from "./job-item"
import { PhoneItem } from "./phone-item"

const DEFAULT_LABELS: PortfolioMessages["overview"] = {
  title: "Overview",
  locationAriaLabel: "Location",
  resume: "Resume",
  resumeAriaLabel: "Download resume",
  websiteAriaLabel: "Personal website",
  pronounsAriaLabel: "Pronouns",
}

export function Overview({
  user = USER,
  labels = DEFAULT_LABELS,
  locale = "en",
}: {
  user?: User
  labels?: PortfolioMessages["overview"]
  locale?: Locale
}) {
  const resume = getResumeDownload(locale)

  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">{labels.title}</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {user.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
              experienceId={job.experienceId}
            />
          )
        })}

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.address)}`}
              aria-label={`${labels.locationAriaLabel}: ${user.address}`}
            >
              {user.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <CurrentLocalTimeItem timeZone={user.timeZone} />

        <PhoneItem phoneNumberB64={user.phoneNumberB64} />

        <EmailItem emailB64={user.emailB64} />

        <IntroItem>
          <IntroItemIcon>
            <DownloadIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={resume.href}
              download={resume.filename}
              aria-label={labels.resumeAriaLabel}
            >
              {labels.resume}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>
            <LinkIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={user.website}
              aria-label={`${labels.websiteAriaLabel}: ${urlToName(user.website)}`}
            >
              {urlToName(user.website)}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>{getGenderIcon(user.gender)}</IntroItemIcon>
          <IntroItemContent
            aria-label={`${labels.pronounsAriaLabel}: ${user.pronouns}`}
          >
            {user.pronouns}
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div className="pointer-events-none absolute top-px bottom-0 left-1/2 -z-1 w-px -translate-x-2.25 bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden" />
    </Panel>
  )
}

function getGenderIcon(gender: User["gender"]) {
  switch (gender) {
    case "male":
      return <MarsIcon />
    case "female":
      return <VenusIcon />
    case "non-binary":
      return <NonBinaryIcon />
  }
}
