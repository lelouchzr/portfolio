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
            {/*
              Original ChanhDai footer logotype path:
              M129 33H161V65H129V33ZM33 33V1H129V33H33ZM33 225H1V33H33V225ZM129 225V257H33V225H129ZM129 225V193H161V225H129ZM193 1H225V65H321V97H225V257H193V1ZM321 97H353V257H321V97ZM417 65H545V257H513V225H481V193H513V97H417V65ZM417 225H385V97H417V225ZM417 225V257H481V225H417ZM577 65H705V97H609V257H577V65ZM705 97H737V257H705V97ZM769 1H801V65H897V97H801V257H769V1ZM897 97H929V257H897V97ZM961 1H1057V33H993V225H1057V257H961V1ZM1089 193V225H1057V193H1089ZM1089 65H1121V193H1089V65ZM1089 65V33H1057V65H1089ZM1185 65H1313V257H1281V225H1249V193H1281V97H1185V65ZM1185 225H1153V97H1185V225ZM1185 225V257H1249V225H1185ZM1377 1H1409V33H1377V1ZM1345 65V97H1377V257H1409V65H1345Z
            */}
            <path d={ADRIEN_WORDMARK_PATH} fill="url(#paint0_linear_1145_73)" />
            <path
              className="stroke-foreground/10"
              d={ADRIEN_WORDMARK_PATH}
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
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
  )
}
