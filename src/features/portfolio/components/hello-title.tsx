"use client"

import { useSyncExternalStore } from "react"

import { InlineScript } from "@/components/inline-script"
import { PanelTitle } from "@/features/portfolio/components/panel"

const ID = "hello"
const SSR_TEXT = "Hello"

export type HelloTitleLabels = {
  fallback: string
  morning: string
  afternoon: string
  evening: string
}

const DEFAULT_LABELS: HelloTitleLabels = {
  fallback: "Hello",
  morning: "Good morning",
  afternoon: "Good afternoon",
  evening: "Good evening",
}

export function HelloTitle({
  labels = DEFAULT_LABELS,
}: {
  labels?: HelloTitleLabels
}) {
  // Server renders "Hello" for SEO; the client snapshot resolves the viewer's
  // local greeting, which also covers client-side navigation (no inline script).
  const greeting = useSyncExternalStore(
    () => () => {},
    () => getGreeting(labels),
    () => labels.fallback || SSR_TEXT
  )

  return (
    <>
      <PanelTitle id={`${ID}-greeting`} suppressHydrationWarning>
        {greeting}
      </PanelTitle>

      <InlineScript html={getInlineScript(`${ID}-greeting`, labels)} />
    </>
  )
}

// Self-contained (globals only) so it can be serialized via `.toString()` into
// the pre-hydration script as well as used as the client snapshot.
function getGreeting(labels: HelloTitleLabels) {
  const hour = new Date().getHours()
  if (hour >= 0 && hour < 12) return labels.morning
  if (hour >= 12 && hour < 17) return labels.afternoon
  return labels.evening
}

function runGreetingScript(
  elementId: string,
  compute: typeof getGreeting,
  labels: HelloTitleLabels
) {
  try {
    const el = document.getElementById(elementId)
    if (el) el.textContent = compute(labels)
  } catch {}
}

// Blocking inline script that paints the greeting before hydration on the
// initial document load (Next.js "prevent flash before hydration").
function getInlineScript(elementId: string, labels: HelloTitleLabels) {
  return `(${runGreetingScript.toString()})(${JSON.stringify(elementId)},${getGreeting.toString()},${JSON.stringify(labels)})`
}
