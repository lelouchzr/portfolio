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
treatment while drawing Adrien's AL monogram as compound extruded paths.
*/

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

const MARK_CELL_HEIGHT = 32
// The width-to-height ratio must be sqrt(3) to match the isometric guides.
const MARK_CELL_WIDTH = MARK_CELL_HEIGHT * Math.sqrt(3)
const MARK_CELL_DEPTH = 32

// Move the isometric mark: increase X to move right, increase Y to move down.
const MARK_OFFSET_X = 333
const MARK_OFFSET_Y = 32.5

type Point = {
  x: number
  y: number
}

type GridPoint = {
  x: number
  y: number
}

type IsoShape = {
  id: string
  topRings: GridPoint[][]
}

function pointsToPath(points: Point[]) {
  return `${points.map((point) => `${point.x},${point.y}`).join(" ")}`
}

function ringToPath(points: GridPoint[]) {
  const [firstPoint, ...nextPoints] = points

  return [
    `M${projectPoint(firstPoint).x},${projectPoint(firstPoint).y}`,
    ...nextPoints.map((point) => {
      const projectedPoint = projectPoint(point)

      return `L${projectedPoint.x},${projectedPoint.y}`
    }),
    "Z",
  ].join(" ")
}

function shapeToPath(shape: IsoShape) {
  return shape.topRings.map(ringToPath).join(" ")
}

function ringToEdges(points: GridPoint[]) {
  return points.map((point, index) => [
    point,
    points[(index + 1) % points.length],
  ]) satisfies [GridPoint, GridPoint][]
}

function shapeToSideFaces(shape: IsoShape) {
  return shape.topRings.flatMap((ring) => ringToEdges(ring).map(edgeToSideFace))
}

function project(row: number, column: number): Point {
  return {
    x: MARK_OFFSET_X + (row - column) * (MARK_CELL_WIDTH / 2),
    y: MARK_OFFSET_Y + (column + row) * (MARK_CELL_HEIGHT / 2),
  }
}

function projectPoint(point: GridPoint): Point {
  return project(point.y, point.x)
}

function drop(point: Point): Point {
  return {
    x: point.x,
    y: point.y + MARK_CELL_DEPTH,
  }
}

function edgeToSideFace([start, end]: [GridPoint, GridPoint]): Point[] {
  const startPoint = projectPoint(start)
  const endPoint = projectPoint(end)

  return [startPoint, endPoint, drop(endPoint), drop(startPoint)]
}

const AL_SHAPES = [
  {
    id: "l",
    topRings: [
      [
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 5, y: 7 },
        { x: 0, y: 7 },
        { x: 0, y: 6 },
        { x: 4, y: 6 },
      ],
    ],
  },
  {
    id: "a",
    topRings: [
      [
        { x: 8, y: 0 },
        { x: 11, y: 0 },
        { x: 11, y: 1 },
        { x: 12, y: 1 },
        { x: 12, y: 7 },
        { x: 11, y: 7 },
        { x: 11, y: 4 },
        { x: 8, y: 4 },
        { x: 8, y: 7 },
        { x: 7, y: 7 },
        { x: 7, y: 1 },
        { x: 8, y: 1 },
      ],
      [
        { x: 8, y: 1 },
        { x: 11, y: 1 },
        { x: 11, y: 3 },
        { x: 8, y: 3 },
      ],
    ],
  },
] satisfies IsoShape[]

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
        strokeLinejoin="round"
        variants={{
          normal: { transform: "translate(0px, 0px)" },
          pressed: { transform: "translate(0px, 16px)" },
        }}
        transition={transition}
      >
        {AL_SHAPES.map((shape) => {
          const topPath = shapeToPath(shape)
          const sideFaces = shapeToSideFaces(shape)

          return (
            <g key={shape.id}>
              {sideFaces.map((face, faceIndex) => (
                <polygon
                  key={`${shape.id}-side-${faceIndex}`}
                  points={pointsToPath(face)}
                  className="fill-background"
                  opacity={faceIndex % 2 === 0 ? "0.88" : "0.72"}
                />
              ))}

              <path
                d={topPath}
                className="fill-background"
                fillRule="evenodd"
              />
              <path
                d={topPath}
                fill={`url(#${ids.facePattern})`}
                fillRule="evenodd"
              />

              {sideFaces.map((face, faceIndex) => (
                <polygon
                  key={`${shape.id}-side-stroke-${faceIndex}`}
                  points={pointsToPath(face)}
                  fill="none"
                  stroke="var(--stroke)"
                  strokeWidth="1"
                />
              ))}

              <path
                d={topPath}
                fill="none"
                stroke="var(--stroke)"
                strokeWidth="1"
              />

              {sideFaces.map((face, faceIndex) => (
                <polygon
                  key={`${shape.id}-side-highlight-${faceIndex}`}
                  points={pointsToPath(face)}
                  fill="none"
                  stroke={`url(#${ids.radialGradient})`}
                  strokeWidth="1"
                />
              ))}

              <path
                d={topPath}
                fill="none"
                stroke={`url(#${ids.radialGradient})`}
                strokeWidth="1"
              />
            </g>
          )
        })}
      </motion.g>
    </motion.svg>
  )
}
