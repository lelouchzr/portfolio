/*
Original ChanhDai wordmark SVG:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256">
  <path fill="currentColor" d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64ZM768 32h32v32h-32zM672 0h96v32h-96zM640 32h32v192h-32zM672 224h96v32h-96zM768 192h32v32h-32zM832 0h32v256h-32zM864 64h96v32h-96zM960 96h32v160h-32zM1056 64h96v32h-96zM1024 96h32v128h-32zM1056 224h64v32h-64zM1120 192h32v32h-32zM1152 64h32v192h-32zM1216 64h32v192h-32zM1248 64h96v32h-96zM1344 96h32v160h-32zM1408 0h32v256h-32zM1440 64h96v32h-96zM1536 96h32v160h-32zM1632 0h64v32h-64zM1696 32h32v32h-32zM1696 192h32v32h-32zM1728 64h32v128h-32zM1632 224h64v32h-64zM1600 0h32v256h-32zM1824 64h96v32h-96zM1792 96h32v128h-32zM1824 224h64v32h-64zM1888 192h32v32h-32zM1920 64h32v192h-32zM1984 64h32v32h-32zM2016 64h32v192h-32zM2016 0h32v32h-32z" />
</svg>
*/

const PIXEL_SIZE = 32
const LETTER_SPACING = 32

const GLYPHS = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001", "10001"],
  d: ["00001", "00001", "01111", "10001", "10001", "10001", "10001", "01111"],
  r: ["00000", "00000", "10111", "11000", "10000", "10000", "10000", "10000"],
  i: ["00100", "00000", "01100", "00100", "00100", "00100", "00100", "01110"],
  e: ["00000", "00000", "01110", "10001", "11111", "10000", "10001", "01110"],
  n: ["00000", "00000", "11110", "10001", "10001", "10001", "10001", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "10000", "11111"],
} as const

function createRectPath(x: number, y: number) {
  return `M${x} ${y}h${PIXEL_SIZE}v${PIXEL_SIZE}h-${PIXEL_SIZE}V${y}Z`
}

function createWordmarkPath(text: "AdrienL") {
  let xOffset = 0
  const paths: string[] = []

  for (const letter of text) {
    const glyph = GLYPHS[letter as keyof typeof GLYPHS]

    glyph.forEach((row, rowIndex) => {
      row.split("").forEach((cell, columnIndex) => {
        if (cell === "1") {
          paths.push(
            createRectPath(
              xOffset + columnIndex * PIXEL_SIZE,
              rowIndex * PIXEL_SIZE
            )
          )
        }
      })
    })

    xOffset += glyph[0].length * PIXEL_SIZE + LETTER_SPACING
  }

  return paths.join("")
}

export const ADRIEN_WORDMARK_TEXT = "AdrienL"
export const ADRIEN_WORDMARK_VIEWBOX_WIDTH =
  ADRIEN_WORDMARK_TEXT.length * 5 * PIXEL_SIZE +
  (ADRIEN_WORDMARK_TEXT.length - 1) * LETTER_SPACING
export const ADRIEN_WORDMARK_PATH = createWordmarkPath(ADRIEN_WORDMARK_TEXT)

export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${ADRIEN_WORDMARK_VIEWBOX_WIDTH} 256`}
      {...props}
    >
      <path fill="currentColor" d={ADRIEN_WORDMARK_PATH} />
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${ADRIEN_WORDMARK_VIEWBOX_WIDTH} 256"><path fill="currentColor" d="${ADRIEN_WORDMARK_PATH}"/></svg>`
}
