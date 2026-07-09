export const LOCALES = ["en", "fr", "kr"] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  kr: "한국어",
}

export const LOCALE_SHORT_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  kr: "KR",
}

export const LOCALE_OPEN_GRAPH: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  kr: "ko_KR",
}

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale)
}

export function getLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE
}

export function getLocaleFromPathname(pathname: string | null): Locale {
  const segment = pathname?.split("/").filter(Boolean)[0]
  return getLocale(segment)
}

export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/")) {
    return path
  }

  const [pathname = "", hash = ""] = path.split("#")
  const segments = pathname.split("/").filter(Boolean)

  if (isLocale(segments[0])) {
    segments[0] = locale
  } else {
    segments.unshift(locale)
  }

  const localizedPath = `/${segments.join("/")}`
  return hash ? `${localizedPath}#${hash}` : localizedPath
}

export function switchLocalePathname(
  pathname: string | null,
  locale: Locale
): string {
  return localizePath(pathname || "/", locale)
}
