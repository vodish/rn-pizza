import Svg, { Path, SvgProps } from "react-native-svg"

export default function SvgMap(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path d="M599.269-169.231l-238.154-83.384-154.738 59.923q-14.646 5.769-27.493-2.904-12.846-8.673-12.846-24.492v-479.785q0-10.473 4.943-19.32 4.942-8.846 14.75-12.192l175.384-60L599.269-708l154.616-60q14.384-5.693 27.423 1.827 13.038 7.519 13.038 22.794v486.32q0 11.251-6.288 19.713-6.289 8.462-16.481 11.192l-172.308 56.923zM580.5-214.308V-678l-200.615-69.846v463.692L580.5-214.308zm36.923 0l140-46.154v-469.692l-140 52.154v463.692zm-414.461-16.154l139.999-53.692v-463.692l-139.999 47.692v469.692zM617.423-678v463.692V-678zm-274.462-69.846v463.692-463.692z" />
    </Svg>
  )
}