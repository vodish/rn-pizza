import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenAddress from "../screens/screen-address";
import ScreenAddressFilial from "../screens/screen-address-filial";
import ScreenAddressPoint from "../screens/screen-address-point";



const { Navigator, Screen } = createNativeStackNavigator();


export default function StackAddress() {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ScreenAddress" component={ScreenAddress} />
      <Screen name="ScreenAddressFilial" component={ScreenAddressFilial} />
      <Screen name="ScreenAddressPoint" component={ScreenAddressPoint} />
    </Navigator>
  )
}