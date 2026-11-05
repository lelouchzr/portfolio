"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import {
  ADRIEN_WORDMARK_PATH,
  ADRIEN_WORDMARK_VIEWBOX_WIDTH,
} from "@/components/chanhdai-wordmark"
import {
  Dimension,
  DimensionExtensionLine,
  DimensionLine,
} from "@/components/dimension"

const VIEWBOX_WIDTH = ADRIEN_WORDMARK_VIEWBOX_WIDTH
const VIEWBOX_HEIGHT = 256

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <>
      <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
        <div
          className="overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-full translate-y-[37.5%] items-center justify-center">
            <svg
              className="container size-full"
              viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#logotype-glyphs" fill="url(#logotype-hatch)" />
              {/* Clears the hatch under the translucent outline, below the
                  gradient so it still paints solid on hover. */}
              <use href="#logotype-outline" className="stroke-background" />
              <use href="#logotype-glyphs" fill="url(#logotype-gradient)" />
              <use href="#logotype-outline" className="stroke-foreground/10" />
              <defs>
                <g id="logotype-glyphs">
                  <path d={ADRIEN_WORDMARK_PATH} />
                </g>
                <path
                  id="logotype-outline"
                  d={ADRIEN_WORDMARK_PATH}
                  strokeWidth="2"
                />

                {/* Offset to the 32-unit glyph grid so the hatch meets every
                    corner the same way. */}
                <pattern
                  id="logotype-hatch"
                  x="1"
                  y="1"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    className="stroke-line"
                    d="M-1 1l2-2M0 8l8-8M7 9l2-2"
                    strokeWidth="1"
                  />
                </pattern>

                <motion.linearGradient
                  id="logotype-gradient"
                  x1={gradientX1}
                  y1="1"
                  x2={VIEWBOX_WIDTH / 2}
                  y2={VIEWBOX_HEIGHT}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.625"
                    stopColor="var(--foreground)"
                    stopOpacity="0"
                  />
                  <stop offset="1" stopColor="var(--foreground)" />
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
          aria-hidden
        />
      </div>

      <LogotypeWidthDimension />
    </>
  )
}

function LogotypeWidthDimension() {
  return (
    <Dimension className="relative container mx-auto h-8">
      <DimensionExtensionLine className="top-1 bottom-0 left-0" />
      <DimensionExtensionLine className="top-1 right-0 bottom-0" />

      <DimensionLine className="absolute inset-x-0 bottom-0">
        {VIEWBOX_WIDTH}
      </DimensionLine>
    </Dimension>
  )
}
