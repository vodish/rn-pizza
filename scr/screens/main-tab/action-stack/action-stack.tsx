import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActionScreen from "./action-screen/action-screen";
import ActionItemScreen from "./action-item-screen/action-item-screen";


const { Navigator, Screen } = createNativeStackNavigator();


export default function ActionStack() {

  return(
    <Navigator>
      <Screen name="ActionScreen" component={ActionScreen}></Screen>
      <Screen name="ActionItemScreen" component={ActionItemScreen}></Screen>
    </Navigator>
  )
}