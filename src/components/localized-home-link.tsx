"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getLocaleFromPathname } from "@/i18n/config"

import { ChanhDaiMark } from "@/components/chanhdai-mark"

export function LocalizedHomeLink() {
  const locale = getLocaleFromPathname(usePathname())

  return (
    <Link href={`/${locale}` as Route} aria-label="Home">
      <ChanhDaiMark className="h-8 shrink-0" />
    </Link>
  )
}
