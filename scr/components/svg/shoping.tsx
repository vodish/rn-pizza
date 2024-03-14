import Svg, { Path, SvgProps } from "react-native-svg"

export default function Shoping(props: SvgProps) {
  return (
    <Svg
      height={24}
      width={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221zm-1-80h520l88-320H132l88 320zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280zM367-600h225L479-768 367-600zm113 240z" />
    </Svg>
  )
}
