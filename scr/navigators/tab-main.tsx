import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import TabBarMain from './tab-main-bar';
import StackAddress from './stack-address';
import DrawCatalog from './draw-catalog';
import StackBasket from './stack-basket';
import StackAction from './stack-action';
import StackProfile from './stack-profile';


const { Navigator, Screen } = createBottomTabNavigator();


function option(): BottomTabNavigationOptions {
  return ({
    // tabBarActiveTintColor: 'tomato',
    // tabBarInactiveTintColor: 'gray',
    // tabBarShowLabel: false,
    headerShown: false,
  })
}



export default function TabMain() {
  return (
    <Navigator screenOptions={option} initialRouteName="StackAddress" tabBar={props => <TabBarMain {...props} />}>
      <Screen name="StackAddress" component={StackAddress} options={{title: 'Адрес'}} />
      <Screen name="DrawCatalog" component={DrawCatalog} options={{title: 'Каталог'}} />
      <Screen name="StackBasket" component={StackBasket} options={{title: 'Корзина'}} />
      <Screen name="StackAction" component={StackAction} options={{title: 'Акции'}} />
      <Screen name="StackProfile" component={StackProfile} options={{title: 'Профиль'}} />
    </Navigator>
  )
}
