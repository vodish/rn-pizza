import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenActionMain from "../../screens/action/main/screen-action-main";
import ScreenActionItem from "../../screens/action/item/screen-action-item";
import ModalAction from "../../modals/action/modal-action";


const { Navigator, Screen } = createNativeStackNavigator();


export default function StackAction() {

  return (
    <Navigator>
      <Screen name="ScreenActionMain" component={ScreenActionMain}></Screen>
      <Screen name="ScreenActionItem" component={ScreenActionItem}></Screen>
      <Screen name="ModalAction" component={ModalAction} options={{ presentation: 'modal', headerShown: false }} ></Screen>
    </Navigator>
  )
}


