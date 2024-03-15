import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { option } from './main-tab.style';
import CatalogDraw from './catalog-draw/catalog-draw';
import ActionStack from './action-stack/action-stack';
import BasketStack from './basket-stack/basket-stack';
import ProfileStack from './profile-stack/profile-stack';


const { Navigator, Screen } = createBottomTabNavigator();



export default function MainTab() {

  return (
    <Navigator screenOptions={option} tabBar={props => <MyTabBar {...props} />}>
      <Screen name="Catalog" component={CatalogDraw} />
      <Screen name="Action" component={ActionStack} />
      <Screen name="Backet" component={BasketStack} />
      <Screen name="Profile" component={ProfileStack} />
    </Navigator>
  )
}



// настройка табов

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {
        state.routes.map((route, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, backgroundColor: isFocused ? '#ccc' : '#fff' }}
            >
              <Text style={{ color: isFocused ? 'red' : '#222', fontSize: 13, textAlign: 'center', paddingVertical: 10 }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
}

