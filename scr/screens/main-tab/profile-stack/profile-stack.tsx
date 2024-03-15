import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./profile-screen/profile-screen";


const { Navigator, Screen } = createNativeStackNavigator();


export default function ProfileStack() {

  return(
    <Navigator>
      <Screen name="ProfileScreen" component={ProfileScreen}></Screen>
    </Navigator>
  )
}