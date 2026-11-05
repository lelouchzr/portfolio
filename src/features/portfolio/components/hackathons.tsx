import type { Locale } from "@/i18n/config"
import { ArrowUpRightIcon, CodeXmlIcon } from "lucide-react"

import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import type { PortfolioMessages } from "@/features/portfolio/data/localized"
import type { Hackathon } from "@/features/portfolio/types/hackathons"

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

export function Hackathons({
  hackathons,
  title,
  labels,
  locale,
}: {
  hackathons: Hackathon[]
  title: string
  labels: PortfolioMessages["hackathons"]
  locale: Locale
}) {
  return (
    <Panel id="hackathons">
      <PanelHeader>
        <PanelTitle>
          <a href="#hackathons">{title}</a>
          <PanelTitleSup>({hackathons.length})</PanelTitleSup>
          <PanelTitleCopy id="hackathons" />
        </PanelTitle>
      </PanelHeader>

      {hackathons.map((hackathon) => (
        <article
          key={hackathon.id}
          className="flex gap-3 border-b border-line p-4 last:border-b-0"
        >
          <IconTile>
            <CodeXmlIcon />
          </IconTile>

          <div className="min-w-0 flex-1 space-y-2">
            <h3 className="font-medium text-balance">{hackathon.title}</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <time dateTime={hackathon.date}>
                {hackathon.date.length === 4
                  ? hackathon.date
                  : new Intl.DateTimeFormat(locale === "kr" ? "ko" : locale, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(`${hackathon.date}T00:00:00Z`))}
              </time>
              <span>{hackathon.location}</span>
              <Tag>{labels.participant}</Tag>
              <span>
                {hackathon.format === "online"
                  ? labels.online
                  : labels.inPerson}
              </span>
            </div>
            <p className="text-sm text-pretty text-muted-foreground">
              {hackathon.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {hackathon.project && (
                <a
                  className="inline-flex items-center gap-1 link-underline"
                  href={hackathon.project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hackathon.project.title} · GitHub
                  <ArrowUpRightIcon className="size-3.5" aria-hidden />
                </a>
              )}
              {hackathon.eventUrl && (
                <a
                  className="inline-flex items-center gap-1 link-underline"
                  href={hackathon.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {labels.event}
                  <ArrowUpRightIcon className="size-3.5" aria-hidden />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </Panel>
  )
}
