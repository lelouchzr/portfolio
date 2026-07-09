"use client"

import React, { useCallback, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  getLocaleFromPathname,
  LOCALE_LABELS,
  LOCALE_SHORT_LABELS,
  LOCALES,
  localizePath,
  switchLocalePathname,
  type Locale,
} from "@/i18n/config"
import { copyToClipboardWithEvent } from "@/utils/copy"
import { useRouter } from "@bprogress/next/app"
import { useTiks } from "@rexa-developer/tiks/react"
import {
  BoxIcon,
  BriefcaseBusinessIcon,
  CornerDownLeftIcon,
  DownloadIcon,
  FileTextIcon,
  GraduationCapIcon,
  LanguagesIcon,
  LayersIcon,
  MonitorIcon,
  MoonStarIcon,
  SunMediumIcon,
  TextInitialIcon,
  TypeIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useHotkeys } from "react-hotkeys-hook"
import { toast } from "sonner"

import { trackEvent } from "@/lib/events"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import type { DocPreview } from "@/features/doc/types/document"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import {
  getPortfolioMessages,
  type PortfolioMessages,
} from "@/features/portfolio/data/localized"
import { getResumeDownload } from "@/features/portfolio/data/resume"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

import { ChanhDaiMark, getMarkSVG } from "./chanhdai-mark"
import { getWordmarkSVG } from "./chanhdai-wordmark"
import { SearchIcon } from "./icons"
import { Button } from "./ui/button"
import { Kbd, KbdGroup } from "./ui/kbd"

type CommandKind = "command" | "page" | "link"

type CommandLinkItem = {
  title: string
  href: string
  kind: CommandKind
  icon?: React.ReactElement
  iconImage?: string
  shortcut?: string
  keywords?: string[]
  openInNewTab?: boolean
  download?: string | boolean
}

type BlockItem = {
  name: string
  description: string
  categories: string[]
}

function getMenuLinks(
  locale: Locale,
  messages: PortfolioMessages["commandMenu"]
): CommandLinkItem[] {
  return [
    {
      title: messages.home,
      href: `/${locale}`,
      kind: "page",
      icon: <ChanhDaiMark />,
      shortcut: "GH",
    },
  ]
}

function getPortfolioLinks(
  locale: Locale,
  messages: PortfolioMessages["commandMenu"]
): CommandLinkItem[] {
  return [
    {
      title: messages.hello,
      href: localizePath("/#hello", locale),
      kind: "page",
      icon: <TextInitialIcon />,
    },
    {
      title: messages.stack,
      href: localizePath("/#stack", locale),
      kind: "page",
      icon: <LayersIcon />,
    },
    {
      title: messages.experience,
      href: localizePath("/#experience", locale),
      kind: "page",
      icon: <BriefcaseBusinessIcon />,
    },
    {
      title: messages.education,
      href: localizePath("/#education", locale),
      kind: "page",
      icon: <GraduationCapIcon />,
    },
    {
      title: messages.projects,
      href: localizePath("/#projects", locale),
      kind: "page",
      icon: <BoxIcon />,
    },
  ]
}

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  kind: "link",
  icon: SOCIAL_ICONS[item.name],
  openInNewTab: true,
}))

function getLanguageLinkItems(pathname: string | null): CommandLinkItem[] {
  return LOCALES.map((locale) => ({
    title: LOCALE_LABELS[locale],
    href: switchLocalePathname(pathname, locale),
    kind: "page",
    icon: <LanguagesIcon />,
    shortcut: LOCALE_SHORT_LABELS[locale],
  }))
}

function getOtherLinkItems(
  locale: Locale,
  messages: PortfolioMessages["commandMenu"]
): CommandLinkItem[] {
  const resume = getResumeDownload(locale)

  return [
    {
      title: messages.downloadResume,
      href: resume.href,
      kind: "command",
      icon: <FileTextIcon />,
      download: resume.filename,
    },
    {
      title: messages.downloadVCard,
      href: "/vcard",
      kind: "command",
      icon: <DownloadIcon />,
    },
    {
      title: "llms.txt",
      href: "/llms.txt",
      kind: "link",
      icon: <FileTextIcon />,
      openInNewTab: true,
    },
  ]
}

function getSearchTriggerLabel(locale: Locale): string {
  switch (locale) {
    case "fr":
      return "Recherche"
    case "kr":
      return "검색"
    case "en":
      return "Search"
  }
}

export function CommandMenu({
  enabledHotkeys = false,
}: {
  docs: DocPreview[]
  blocks: BlockItem[]
  enabledHotkeys?: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const messages = getPortfolioMessages(locale).commandMenu

  const { setTheme } = useTheme()

  const [open, setOpen] = useState(false)

  const [selectedCommandKind, setSelectedCommandKind] =
    useState<CommandKind | null>(null)

  const [click] = useClickSound()

  const { success: tiksSuccess } = useTiks()

  useHotkeys(
    "mod+k, slash",
    (e) => {
      e.preventDefault()

      setOpen((open) => {
        if (!open) {
          trackEvent({
            name: "open_command_menu",
            properties: {
              method: "keyboard",
              key: e.key === "/" ? "/" : e.metaKey ? "cmd+k" : "ctrl+k",
            },
          })
        }
        return !open
      })
    },
    { enabled: enabledHotkeys }
  )

  const handleOpenLink = useCallback(
    (
      href: string,
      openInNewTab = false,
      download: string | boolean = false
    ) => {
      setOpen(false)

      trackEvent({
        name: "command_menu_action",
        properties: {
          action: download ? "download" : "navigate",
          href: href,
          open_in_new_tab: openInNewTab,
        },
      })

      if (download) {
        const anchor = document.createElement("a")
        anchor.href = href
        if (typeof download === "string") {
          anchor.download = download
        } else {
          anchor.download = ""
        }
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
      } else if (openInNewTab) {
        window.open(href, "_blank", "noopener")
      } else {
        router.push(href)
      }
    },
    [router, setOpen]
  )

  const handleCopyText = useCallback(
    (text: string, message: string) => {
      setOpen(false)
      copyToClipboardWithEvent(text, {
        name: "command_menu_action",
        properties: {
          action: "copy",
          text: text,
        },
      })
      toast.success(message)
      tiksSuccess()
    },
    [setOpen, tiksSuccess]
  )

  const createThemeHandler = useCallback(
    (theme: "light" | "dark" | "system") => () => {
      click()
      setOpen(false)

      trackEvent({
        name: "command_menu_action",
        properties: {
          action: "change_theme",
          theme: theme,
        },
      })

      setTheme(theme)
    },
    [click, setOpen, setTheme]
  )

  const handleLinkHighlight = useCallback((link: CommandLinkItem) => {
    setSelectedCommandKind(link.kind)
  }, [])

  const handleCommandHighlight = useCallback(() => {
    setSelectedCommandKind("command")
  }, [])

  return (
    <>
      <CommandMenuTrigger
        label={getSearchTriggerLabel(locale)}
        onClick={() => {
          setOpen(true)
          trackEvent({
            name: "open_command_menu",
            properties: {
              method: "click",
            },
          })
        }}
      />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandMenuInput placeholder={messages.search} />

        <div className="rounded-xl bg-background ring-1 ring-border">
          <CommandList className="min-h-80 scroll-fade">
            <CommandEmpty>{messages.noResults}</CommandEmpty>

            <CommandLinkGroup
              heading={messages.menu}
              links={getMenuLinks(locale, messages)}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading={messages.portfolio}
              links={getPortfolioLinks(locale, messages)}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading={messages.socialLinks}
              links={SOCIAL_LINK_ITEMS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandGroup heading={messages.brandAssets}>
              <CommandMenuItem
                onHighlight={handleCommandHighlight}
                onSelect={() => {
                  handleCopyText(getMarkSVG(), messages.copyMarkSuccess)
                }}
              >
                <ChanhDaiMark />
                {messages.copyMark}
              </CommandMenuItem>

              <CommandMenuItem
                onHighlight={handleCommandHighlight}
                onSelect={() => {
                  handleCopyText(getWordmarkSVG(), messages.copyLogotypeSuccess)
                }}
              >
                <TypeIcon />
                {messages.copyLogotype}
              </CommandMenuItem>
            </CommandGroup>

            <CommandGroup heading={messages.theme}>
              <CommandMenuItem
                keywords={["theme"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("light")}
              >
                <SunMediumIcon />
                {messages.light}
              </CommandMenuItem>
              <CommandMenuItem
                keywords={["theme"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("dark")}
              >
                <MoonStarIcon />
                {messages.dark}
              </CommandMenuItem>
              <CommandMenuItem
                keywords={["theme"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("system")}
              >
                <MonitorIcon />
                {messages.system}
              </CommandMenuItem>
            </CommandGroup>

            <CommandLinkGroup
              heading={messages.language}
              links={getLanguageLinkItems(pathname)}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading={messages.other}
              links={getOtherLinkItems(locale, messages)}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />
          </CommandList>
        </div>

        <CommandMenuFooter
          selectedCommandKind={selectedCommandKind}
          messages={messages}
        />
      </CommandDialog>
    </>
  )
}

export default CommandMenu

function CommandMenuTrigger({
  label,
  ...props
}: React.ComponentProps<typeof Button> & {
  label: string
}) {
  return (
    <Button
      data-slot="command-menu-trigger"
      className="gap-1.5 border-none px-1.5 text-muted-foreground will-change-[scale] select-none"
      variant="ghost"
      size="sm"
      {...props}
    >
      <SearchIcon />

      <span className="font-sans text-sm/4 font-medium sm:hidden">{label}</span>

      <KbdGroup className="hidden gap-0.75 sm:in-[.os-macos_&]:flex">
        <Kbd className="w-5 min-w-auto">⌘</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </KbdGroup>

      <KbdGroup className="hidden gap-0.75 sm:not-[.os-macos_&]:flex">
        <Kbd>Ctrl</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </KbdGroup>
    </Button>
  )
}

function CommandMenuInput({ placeholder }: { placeholder: string }) {
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (searchValue.length >= 2) {
      const timeoutId = setTimeout(() => {
        trackEvent({
          name: "command_menu_search",
          properties: {
            query: searchValue,
            query_length: searchValue.length,
          },
        })
      }, 500)

      return () => clearTimeout(timeoutId)
    }
  }, [searchValue])

  return (
    <CommandInput
      placeholder={placeholder}
      value={searchValue}
      onValueChange={setSearchValue}
    />
  )
}

function CommandMenuItem({
  children,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void
  "data-selected"?: string
  "aria-selected"?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.()
      }
    })
  })

  return (
    <CommandItem ref={ref} {...props}>
      {children}
    </CommandItem>
  )
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkHighlight,
  onLinkSelect,
}: {
  heading: string
  links: CommandLinkItem[]
  fallbackIcon?: React.ReactElement
  onLinkHighlight: (link: CommandLinkItem) => void
  onLinkSelect: (
    href: string,
    openInNewTab?: boolean,
    download?: string | boolean
  ) => void
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const icon = link?.icon ?? fallbackIcon ?? <React.Fragment />

        return (
          <CommandMenuItem
            key={link.href}
            keywords={link.keywords}
            onHighlight={() => onLinkHighlight(link)}
            onSelect={() =>
              onLinkSelect(link.href, link.openInNewTab, link.download)
            }
          >
            {link?.iconImage ? (
              <img
                className="size-4 rounded-sm"
                src={link.iconImage}
                alt={link.title}
              />
            ) : (
              icon
            )}

            <p className="line-clamp-1">{link.title}</p>

            {link.shortcut && (
              <CommandShortcut className="font-mono tracking-[0.2em] max-sm:hidden">
                {link.shortcut}
              </CommandShortcut>
            )}
          </CommandMenuItem>
        )
      })}
    </CommandGroup>
  )
}

function CommandMenuFooter({
  selectedCommandKind,
  messages,
}: {
  selectedCommandKind: CommandKind | null
  messages: PortfolioMessages["commandMenu"]
}) {
  const enterActionLabels: Record<CommandKind, string> = {
    command: messages.runCommand,
    page: messages.goToPage,
    link: messages.openLink,
  }

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 rounded-b-2xl px-4 text-xs font-medium">
        <ChanhDaiMark className="size-6 text-muted-foreground" />

        <div className="flex items-center gap-2 max-sm:hidden">
          <span>{enterActionLabels[selectedCommandKind ?? "page"]}</span>
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
        </div>
      </div>
    </>
  )
}
