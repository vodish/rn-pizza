import { Text, TouchableOpacity, View } from "react-native";
import ScreenInset from "../../../../components/screen-inset/screen-inset";
import { Screen1, TAddress } from "../../../../utils/types";
import { style } from "./screen-address-filial-card.style";


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
      <>
        <View style={style.row}>
          <Text>Зона доставки</Text>
        </View>

        <View style={[style.row, style.two]}>
          <Text>Режим работы</Text>
          <Text>с 9:00 -- 21:00</Text>
        </View>

        <View style={[style.row, style.two]}>
          <Text>Бесплатная доставка</Text>
          <Text>с 08:00 -- 05:00</Text>
        </View>

        <TouchableOpacity style={style.row}>
          <Text>Добавить адрес доставки</Text>
        </TouchableOpacity>
      </>
    </ScreenInset>
  )
}