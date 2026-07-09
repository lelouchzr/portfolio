/*
Original ChanhDai mark SVG:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256">
  <path fill="currentColor" d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z" />
</svg>
*/

export const ADRIEN_MARK_PATH =
  "M0 64H64V256H0V64ZM64 0H192V64H64V0ZM192 64H256V256H192V64ZM64 128H192V192H64V128ZM320 0H384V192H512V256H320V0Z"

export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={ADRIEN_MARK_PATH} />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="currentColor" d="${ADRIEN_MARK_PATH}"/></svg>`
}
