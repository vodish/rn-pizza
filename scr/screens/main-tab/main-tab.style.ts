import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export function option(): BottomTabNavigationOptions{

  return ({
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false,
    headerShown: false,
  })
}