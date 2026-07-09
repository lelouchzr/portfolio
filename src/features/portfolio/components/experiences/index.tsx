import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import type { PortfolioMessages } from "@/features/portfolio/data/localized"
import type { Experience } from "@/features/portfolio/types/experiences"

import { ExperienceItem } from "./experience-item"

const ID = "experience"
const MAX = 3

type ExperienceLabels = Pick<
  PortfolioMessages["actions"],
  "showMore" | "showLess" | "present"
>

const DEFAULT_LABELS: ExperienceLabels = {
  showMore: "Show more",
  showLess: "Show less",
  present: "Present",
}

export function Experiences({
  experiences = EXPERIENCES,
  title = "Experience",
  labels = DEFAULT_LABELS,
}: {
  experiences?: Experience[]
  title?: string
  labels?: ExperienceLabels
}) {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{title}</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        <ExperienceList
          experiences={experiences.slice(0, MAX)}
          labels={labels}
        />
      </div>

      {experiences.length > MAX && (
        <Collapsible className="group/collapsible">
          <CollapsibleContent render={<div className="pr-2 pl-4" />}>
            <ExperienceList
              experiences={experiences.slice(MAX)}
              labels={labels}
            />
          </CollapsibleContent>

          <div className="-mt-px flex items-center justify-center py-2">
            <CollapsibleTrigger
              render={
                <Button
                  className="gap-2 pr-2.5 pl-3"
                  variant="secondary"
                  size="sm"
                >
                  <span className="hidden group-data-closed/collapsible:block">
                    {labels.showMore}
                  </span>

                  <span className="hidden group-data-open/collapsible:block">
                    {labels.showLess}
                  </span>

                  <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
                </Button>
              }
            />
          </div>
        </Collapsible>
      )}
    </Panel>
  )
}

function ExperienceList({
  experiences,
  labels,
}: {
  experiences: Experience[]
  labels: ExperienceLabels
}) {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          labels={labels}
        />
      ))}
    </>
  )
}
