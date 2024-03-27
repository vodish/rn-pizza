import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenAddressFilialList from "../screens/screen-action-filial-list";
import ScreenAddressFilialCard from "../screens/screen-address-filial-card";
import ScreenAddressPoint from "../screens/screen-address-point";



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