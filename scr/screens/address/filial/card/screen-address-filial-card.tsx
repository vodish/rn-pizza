import { Text, View } from "react-native";
import ScreenInset from "../../../../components/screen-inset/screen-inset";
import { Screen1, TAddress } from "../../../../utils/types";



type ScreenAddressFilialCard = Screen1 & {
  route: {
    params: {
      el: TAddress
    }
  }
}

export default function ScreenAddressFilialCard({ navigation, route }: ScreenAddressFilialCard) {

  // console.log( JSON.stringify(route, null, 2) )

  return (
    <ScreenInset title={route.params.el.addressName} handleBack={navigation.goBack} >
      <View>
        <Text>Screen Address Filial Card</Text>
      </View>
    </ScreenInset>
  )
}