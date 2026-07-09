import { Prose } from "@/components/base/ui/typography"
import { Markdown } from "@/components/markdown"
import { HelloTitle } from "@/features/portfolio/components/hello-title"
import {
  Panel,
  PanelContent,
  PanelHeader,
} from "@/features/portfolio/components/panel"
import type { PortfolioMessages } from "@/features/portfolio/data/localized"
import { USER } from "@/features/portfolio/data/user"
import type { User } from "@/features/portfolio/types/user"

const ID = "hello"

export function Hello({
  user = USER,
  labels,
}: {
  user?: User
  labels?: PortfolioMessages["hello"]
}) {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <HelloTitle labels={labels} />
      </PanelHeader>

      <PanelContent className="pt-5 pb-6">
        <Prose className="prose-p:mt-[0.5em] prose-p:mb-[0.5em] prose-p:first:mt-0 prose-p:last:mb-0">
          <Markdown>{user.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  )
}
