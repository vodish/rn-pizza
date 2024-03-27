import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenProfileMain from "../screens/screen-profile-main";


const { Navigator, Screen } = createNativeStackNavigator();


export default function StackProfile() {

  return(
    <Navigator>
      <Screen name="ScreenProfileMain" component={ScreenProfileMain}></Screen>
    </Navigator>
  )
}