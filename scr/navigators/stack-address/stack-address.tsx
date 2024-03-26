import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenAddressFilialList from "../../screens/address/filial/list/screen-action-filial-list";
import ScreenAddressFilialCard from "../../screens/address/filial/card/screen-address-filial-card";
import ScreenAddressPointList from "../../screens/address/point/list/screen-address-point-list";
import ScreenAddressPointCard from "../../screens/address/point/card/screen-address-point-card";



const { Navigator, Screen } = createNativeStackNavigator();


export default function StackAddress() {

  return(
    <Navigator>
      <Screen name="ScreenAddressFilialList" component={ScreenAddressFilialList} options={{title: 'Филиалы', headerShown: false}}></Screen>
      <Screen name="ScreenAddressFilialCard" component={ScreenAddressFilialCard} options={{title: 'Филиал ?'}}></Screen>
      <Screen name="ScreenAddressPointList" component={ScreenAddressPointList} options={{title: 'Мои адреса'}}></Screen>
      <Screen name="ScreenAddressPointCard" component={ScreenAddressPointCard} options={{title: 'Адрес доставки'}}></Screen>
    </Navigator>
  )
}