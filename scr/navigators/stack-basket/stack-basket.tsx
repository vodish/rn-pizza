import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenBasketOrder from "../../screens/basket/order/screen-basket-order";
import ScreenBasketDelivery from "../../screens/basket/delivery/screen-basket-delivery";
import ScreenBasketCheck from "../../screens/basket/check/screen-basket-check";



const { Navigator, Screen } = createNativeStackNavigator();


export default function StackBasket() {

  return(
    <Navigator>
      <Screen name="ScreenBasketOrder" component={ScreenBasketOrder}></Screen>
      <Screen name="ScreenBasketDelivery" component={ScreenBasketDelivery}></Screen>
      <Screen name="ScreenBasketCheck" component={ScreenBasketCheck}></Screen>
    </Navigator>
  )
}