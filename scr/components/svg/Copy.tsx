import * as React from "react"
import Svg, { Path, Rect, G, Defs, ClipPath, SvgProps } from "react-native-svg"

export default function Copy(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_1904_231)"
        stroke={props.stroke || '#000'}
        strokeWidth={0.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10 4V2.5A1.5 1.5 0 008.5 1h-6A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" />
        <Path
          d="M11.5 4h-6A1.5 1.5 0 004 5.5v6A1.5 1.5 0 005.5 13h6a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0011.5 4z"
          fill="#B42B2B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1904_231">
          <Path fill="#fff" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

