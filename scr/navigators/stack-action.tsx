import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenActionMain from "../screens/screen-action-main";
import ScreenActionItem from "../screens/screen-action-item";



const { Navigator, Screen } = createNativeStackNavigator();


export default function StackAction() {

  return (
    <Navigator>
      <Screen name="ScreenActionMain" component={ScreenActionMain}></Screen>
      <Screen name="ScreenActionItem" component={ScreenActionItem}></Screen>
    </Navigator>
  )
}


