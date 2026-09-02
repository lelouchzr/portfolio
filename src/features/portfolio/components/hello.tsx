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
    <Panel id={ID} className="screen-line-bottom-none">
      <PanelHeader>
        <h2 className="sr-only">About</h2>
        <HelloTitle labels={labels} />
      </PanelHeader>

      <PanelContent>
        <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
          <Markdown>{user.about}</Markdown>
        </div>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
      <div className="h-4" />
      <div className="screen-line-bottom h-px" />
    </Panel>
  )
}
