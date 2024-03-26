import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenAddressFilialList from "../../screens/address/filial/list/screen-action-filial-list";
import ScreenAddressFilialCard from "../../screens/address/filial/card/screen-address-filial-card";
import ScreenAddressPoint from "../../screens/address/point/screen-address-point";



const { Navigator, Screen } = createNativeStackNavigator();


export default function StackAddress() {

  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ScreenAddressFilialList" component={ScreenAddressFilialList} />
      <Screen name="ScreenAddressFilialCard" component={ScreenAddressFilialCard} />
      <Screen name="ScreenAddressPoint" component={ScreenAddressPoint} />
    </Navigator>
  )
}