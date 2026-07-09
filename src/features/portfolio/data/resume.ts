import type { Locale } from "@/i18n/config"

const RESUME_DOWNLOADS = {
  en: {
    href: "/adrien-lachambre-resume-en.pdf",
    filename: "adrien-lachambre-resume-en.pdf",
  },
  fr: {
    href: "/adrien-lachambre-cv-fr.pdf",
    filename: "adrien-lachambre-cv-fr.pdf",
  },
  kr: {
    href: "/adrien-lachambre-resume-en.pdf",
    filename: "adrien-lachambre-resume-en.pdf",
  },
} as const satisfies Record<
  Locale,
  {
    href: string
    filename: string
  }
>

export function getResumeDownload(locale: Locale) {
  return RESUME_DOWNLOADS[locale]
}
