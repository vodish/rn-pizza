import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { option } from './tab-main.style';
import DrawCatalog from '../draw-catalog/draw-catalog';
import StackAction from '../stack-action/stack-action';
import StackBasket from '../stack-basket/stack-basket';
import StackProfile from '../stack-profile/stack-profile';
import TabBarMain from './tab-main-bar';


const { Navigator, Screen } = createBottomTabNavigator();


export default function TabMain() {

  return (
    <Navigator screenOptions={option} initialRouteName="StackAction" tabBar={props => <TabBarMain {...props} />}>
      <Screen name="StackAddress" component={StackBasket} options={{title: 'Адрес'}} />
      <Screen name="DrawCatalog" component={DrawCatalog} options={{title: 'Каталог'}} />
      <Screen name="StackBasket" component={StackBasket} options={{title: 'Корзина'}} />
      <Screen name="StackAction" component={StackAction} options={{title: 'Акции'}} />
      <Screen name="StackProfile" component={StackProfile} options={{title: 'Профиль'}} />
    </Navigator>
  )
}
