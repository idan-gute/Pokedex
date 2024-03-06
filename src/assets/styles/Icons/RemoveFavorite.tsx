import { SVGProps } from "react"
const RemoveFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#5A5A89"
      fillRule="evenodd"
      d="M1.707.293A1 1 0 0 0 .293 1.707l5.936 5.936-5.936 5.936a1 1 0 1 0 1.414 1.414l5.936-5.936 5.936 5.936a1 1 0 1 0 1.414-1.414L9.057 7.643l5.936-5.936A1 1 0 0 0 13.579.293L7.643 6.229 1.707.293Z"
      clipRule="evenodd"
    />
  </svg>
)
export default RemoveFavorite
