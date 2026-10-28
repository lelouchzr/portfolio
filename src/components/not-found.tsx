import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center px-6 py-12">
      <section className="flex max-w-md flex-col items-center gap-6 text-center">
        <p className="font-mono text-sm text-muted-foreground">Error 404</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="text-pretty text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <Link href="/">
              Go to home
              <ArrowRightIcon />
            </Link>
          }
        />
      </section>
    </main>
  )
}
