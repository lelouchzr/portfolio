"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  getLocaleFromPathname,
  LOCALE_SHORT_LABELS,
  LOCALES,
  switchLocalePathname,
} from "@/i18n/config"

import { cn } from "@/lib/utils"

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPathname(pathname)

  return (
    <nav
      className={cn(
        "flex h-8 items-center rounded-md bg-muted/70 p-0.5 font-mono text-[11px]",
        className
      )}
      aria-label="Language"
    >
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale

        return (
          <Link
            key={locale}
            href={switchLocalePathname(pathname, locale) as Route}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-7 min-w-8 items-center justify-center rounded-sm px-2 text-muted-foreground transition-colors hover:text-foreground",
              isActive && "bg-background text-foreground shadow-xs"
            )}
          >
            {LOCALE_SHORT_LABELS[locale]}
          </Link>
        )
      })}
    </nav>
  )
}
