import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { PortfolioMessages } from "@/features/portfolio/data/localized"
import type { Education } from "@/features/portfolio/types/education"

import { EducationItem } from "./education-item"

const ID = "education"

type EducationLabels = Pick<PortfolioMessages["actions"], "present">

export function Education({
  education = EDUCATION,
  title = "Education",
  labels = { present: "Present" },
}: {
  education?: Education[]
  title?: string
  labels?: EducationLabels
}) {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{title}</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {education.map((item) => (
        <div
          key={item.id}
          id={`education-${item.id}`}
          className="screen-line-bottom scroll-mt-14 p-4 pr-2"
        >
          <EducationItem key={item.id} item={item} labels={labels} />
        </div>
      ))}
    </Panel>
  )
}
