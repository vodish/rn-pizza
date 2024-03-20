import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import SvgPwsLogoColor from '../../components/svg/svg_psw_logo_color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function DrawerContent({ state, descriptors, navigation }: DrawerContentComponentProps) {

  const insets = useSafeAreaInsets();

  // console.log(JSON.stringify(insets, null, 4))


  return (
    <SafeAreaView style={{ flex: 1, marginTop: insets.top + 4 }}>

      <View style={styles.top}>
        <SvgPwsLogoColor width={50} height={50} />
      </View>

      <DrawerContentScrollView contentContainerStyle={styles.sclollView}>
        {state.routes.map((route, i) => {

          const isFocused = i == state.index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'drawerItemPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.dispatch({
                ...(isFocused ? DrawerActions.closeDrawer() : CommonActions.navigate({ name: route.name, merge: true })),
                target: state.key,
              });
            }
          }

          return (
            <TouchableOpacity onPress={onPress} key={i}>
              <View style={{ ...styles.row, ...isFocused && styles.active }}>
                <Text style={{ ...styles.name, ...isFocused && styles.active }}>{route.name}</Text>
                <Text style={{ ...styles.cnt, ...isFocused && styles.active }}>12</Text>
              </View>
            </TouchableOpacity>
          )

        })}
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5, borderWidth: 0, borderColor: 'red', },

  sclollView: { borderWidth: 0, borderColor: 'blue', paddingTop: 4 },

  row: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
    // marginHorizontal: 10,
    paddingVertical: 12, paddingHorizontal: 15,
    borderBottomWidth: 1, borderColor: '#ccc',
  },

  active: { backgroundColor: '#ccc', },
  name: {},
  cnt: {},

});