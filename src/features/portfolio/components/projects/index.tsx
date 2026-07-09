import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import type { PortfolioMessages } from "@/features/portfolio/data/localized"
import { PROJECTS } from "@/features/portfolio/data/projects"
import type { Project } from "@/features/portfolio/types/projects"

import { ProjectItem } from "./project-item"

const ID = "projects"

type ProjectLabels = Pick<
  PortfolioMessages["actions"],
  "showMore" | "showLess" | "present" | "openProject"
>

const DEFAULT_LABELS: ProjectLabels = {
  showMore: "Show more",
  showLess: "Show less",
  present: "Present",
  openProject: "Open project",
}

export function Projects({
  projects = PROJECTS,
  title = "Projects",
  labels = DEFAULT_LABELS,
}: {
  projects?: Project[]
  title?: string
  labels?: ProjectLabels
}) {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{title}</a>
          <PanelTitleSup>({projects.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={projects}
        max={4}
        showMoreLabel={labels.showMore}
        showLessLabel={labels.showLess}
        renderItem={(item) => <ProjectItem project={item} labels={labels} />}
      />
    </Panel>
  )
}
