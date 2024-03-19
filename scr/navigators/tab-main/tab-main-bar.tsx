import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

// настройка табов

export default function TbaBarMain({ state, descriptors, navigation }: BottomTabBarProps) {

  // console.log(JSON.stringify(state.routes, null, 4))
  console.log(JSON.stringify(descriptors, null, 4))

  return (

    <View style={style.bar}>
      {
        state.routes.map((route, index) => {

          const { options } = descriptors[route.key];

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
              // style={{ flex: 1, backgroundColor: isFocused ? '#ccc' : '#fff' }}
              style={style.td}
            >
              {/* <Text style={{ color: isFocused ? 'red' : '#222', fontSize: 13, textAlign: 'center', paddingVertical: 10 }}>{options.title}</Text> */}
              <Text style={style.title}>{options.title}</Text>
            </TouchableOpacity>
          );
        })
      }
    </View>

  );
}

const style = StyleSheet.create({
  bar: { flexDirection: 'row', alignItems: 'flex-end' },
  td: { flex: 1, borderWidth: 1, borderColor: 'red', },
  title: { color: '#222', fontSize: 12, textAlign: 'center' },
})