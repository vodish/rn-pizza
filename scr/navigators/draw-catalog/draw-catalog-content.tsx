import { SafeAreaView, View, StyleSheet, Image, Text, Linking, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { CommonActions, DrawerActions } from '@react-navigation/native';



export default function DrawerContent(props: DrawerContentComponentProps) {

  const { state, descriptors, navigation } = props
  // console.log(JSON.stringify(state, null, 4))
  // console.log(JSON.stringify(descriptors, null, 4))

  const BASE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';




  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* <Image source={{ uri: 'https://static.pizzasushiwok.ru/images/menu_new/661-1300.jpg' }} style={styles.topIcon} /> */}

      <DrawerContentScrollView {...props} style={{ borderWidth: 1, borderColor: 'blue', }}>

        {state.routes.map((route, i) => {

          const isFocused = i === state.index;

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
              <View style={styles.row}>
                <Text>{route.name}</Text>
                <Text>12</Text>
              </View>
            </TouchableOpacity>
          )

        })}

        {/* <DrawerItemList {...props}><Text>sdvsdv</Text> </DrawerItemList> */}

        {/* <DrawerItem label="Visit Us" onPress={() => Linking.openURL('https://aboutreact.com/')} /> */}

        {/* <View style={styles.customItem}>
          <Text onPress={() => { Linking.openURL('https://aboutreact.com/') }}>Rate Us</Text>
          <Image source={{ uri: BASE_PATH + 'star_filled.png' }} style={styles.iconStyle} />
        </View> */}

      </DrawerContentScrollView>

      {/* <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>www.aboutreact.com</Text> */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'red', },


  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    // marginHorizontal: 5,
  },


  topIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    // borderRadius: 100 / 2,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'red',
    // marginTop: -20,
  },

});