"use client"

import { LinkIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"
import { createHeadingUrl } from "@/components/heading"

export function PanelTitleCopy({
  id,
  className,
  label = "Copy link to section",
  ...props
}: Omit<React.ComponentProps<typeof CopyButton>, "id" | "text"> & {
  id: string
  label?: string
}) {
  return (
    <CopyButton
      className={cn(
        "absolute top-1 ml-1 size-7 shrink-0 border-none text-muted-foreground opacity-0 transition-opacity group-hover/panel-title:opacity-100",
        className
      )}
      variant="ghost"
      text={() => createHeadingUrl(id || "")}
      idleIcon={<LinkIcon />}
      aria-label={label}
      {...props}
    />
  )
}
