import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeliveryScreen from "./delivery-screen/delivery-screen";
import CheckScreen from "./check-screen/check-screen";
import OrderScreen from "./order-screen/order-screen";



const { Navigator, Screen } = createNativeStackNavigator();


export default function BasketStack() {

  return(
    <Navigator>
      <Screen name="OrderScreen" component={OrderScreen}></Screen>
      <Screen name="DeliveryScreen" component={DeliveryScreen}></Screen>
      <Screen name="CheckScreen" component={CheckScreen}></Screen>
    </Navigator>
  )
}