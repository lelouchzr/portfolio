"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

/*
Original ChanhDai isometric mark:
The previous version used hand-authored CD path data generated from Figma.
It is kept in git history; this replacement keeps the same isometric block
treatment while drawing Adrien's AL monogram from a pixel grid.
*/

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

const TILE_WIDTH = 42
const TILE_HEIGHT = 24
const TILE_DEPTH = 24
const OFFSET_X = 180
const OFFSET_Y = 16

const AL_GRID = [
  "0111000100000",
  "1000100100000",
  "1000100100000",
  "1111100100000",
  "1000100100000",
  "1000100100000",
  "1000100100000",
  "1000100111110",
]

type Point = {
  x: number
  y: number
}

type IsoBlock = {
  top: Point[]
  left: Point[]
  right: Point[]
}

function pointsToPath(points: Point[]) {
  return `${points.map((point) => `${point.x},${point.y}`).join(" ")}`
}

function project(row: number, column: number): Point {
  return {
    x: OFFSET_X + (column - row) * (TILE_WIDTH / 2),
    y: OFFSET_Y + (column + row) * (TILE_HEIGHT / 2),
  }
}

function createIsoBlock(row: number, column: number): IsoBlock {
  const top = project(row, column)
  const right = {
    x: top.x + TILE_WIDTH / 2,
    y: top.y + TILE_HEIGHT / 2,
  }
  const bottom = {
    x: top.x,
    y: top.y + TILE_HEIGHT,
  }
  const left = {
    x: top.x - TILE_WIDTH / 2,
    y: top.y + TILE_HEIGHT / 2,
  }
  const rightDrop = {
    x: right.x,
    y: right.y + TILE_DEPTH,
  }
  const bottomDrop = {
    x: bottom.x,
    y: bottom.y + TILE_DEPTH,
  }
  const leftDrop = {
    x: left.x,
    y: left.y + TILE_DEPTH,
  }

  return {
    top: [top, right, bottom, left],
    left: [left, bottom, bottomDrop, leftDrop],
    right: [right, bottom, bottomDrop, rightDrop],
  }
}

const AL_BLOCKS = AL_GRID.flatMap((row, rowIndex) =>
  row
    .split("")
    .map((cell, columnIndex) =>
      cell === "1" ? createIsoBlock(rowIndex, columnIndex) : null
    )
    .filter((block): block is IsoBlock => block !== null)
)

export function ChanhDaiMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `adrien-face-pattern-${id}`,
    radialGradient: `adrien-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <motion.g
        variants={{
          normal: { transform: "translate(0px, 0px)" },
          pressed: { transform: "translate(0px, 16px)" },
        }}
        transition={transition}
      >
        {AL_BLOCKS.map((block, index) => (
          <g key={index}>
            <polygon
              points={pointsToPath(block.left)}
              className="fill-background"
              opacity="0.72"
            />
            <polygon
              points={pointsToPath(block.right)}
              className="fill-background"
              opacity="0.88"
            />
            <polygon
              points={pointsToPath(block.top)}
              className="fill-background"
            />
            <polygon
              points={pointsToPath(block.top)}
              fill={`url(#${ids.facePattern})`}
            />

            {[block.left, block.right, block.top].map((face, faceIndex) => (
              <polygon
                key={faceIndex}
                points={pointsToPath(face)}
                fill="none"
                stroke="var(--stroke)"
                strokeWidth="1"
              />
            ))}

            {[block.left, block.right, block.top].map((face, faceIndex) => (
              <polygon
                key={faceIndex}
                points={pointsToPath(face)}
                fill="none"
                stroke={`url(#${ids.radialGradient})`}
                strokeWidth="1"
              />
            ))}
          </g>
        ))}
      </motion.g>
    </motion.svg>
  )
}
