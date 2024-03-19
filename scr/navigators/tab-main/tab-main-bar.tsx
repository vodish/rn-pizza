import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import SvgLocationOn from '../../components/svg/svg_location_on';
import SvgLunchDining from '../../components/svg/svg_lunch_dining';
import SvgShoppingBasket from '../../components/svg/svg_shopping_basket';
import SvgClockLoader from '../../components/svg/svg_clock_loader';
import SvgFace from '../../components/svg/svg_face';
import SvgHelp from '../../components/svg/svg_help';


// настройка табов

export default function TbaBarMain({ state, descriptors, navigation }: BottomTabBarProps) {

  // console.log(JSON.stringify(state, null, 4))
  // console.log(JSON.stringify(descriptors, null, 4))



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
              style={style.cell}
            >

              {route.name == 'StackAddress' && <SvgLocationOn fill={isFocused ? 'red' : ''} />}
              {route.name == 'DrawCatalog' && <SvgLunchDining fill={isFocused ? 'red' : ''} />}
              {route.name == 'StackBasket' && <SvgShoppingBasket fill={isFocused ? 'red' : ''} />}
              {route.name == 'StackAction' && <SvgClockLoader fill={isFocused ? 'red' : ''} />}
              {route.name == 'StackProfile' && <SvgHelp fill={isFocused ? 'red' : ''} />}

              <Text style={style.title}>{options.title}</Text>

            </TouchableOpacity>
          );
        })
      }
    </View>

  );
}

const style = StyleSheet.create({
  bar: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: 5, paddingBottom: 3, },
  cell: { flex: 1, textAlign: 'center', borderWidth: 0, borderColor: 'red', display: 'flex', flexDirection: 'column', alignItems: 'center', },
  title: { color: '#222', fontSize: 12, borderWidth: 0, borderColor: 'red' },

})
