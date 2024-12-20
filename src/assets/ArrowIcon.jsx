import * as React from "react"
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 8v8H8" />
  </svg>
)
export default ArrowIcon
