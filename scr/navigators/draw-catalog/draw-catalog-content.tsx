import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';



export default function DrawerContent (props: DrawerContentComponentProps) {

  const { state, descriptors, navigation } = props
  // console.log(JSON.stringify(state, null, 4))
  // console.log(JSON.stringify(descriptors, null, 4))

  const BASE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/*Top Large Image */}
      {/* <Image source={{ uri: BASE_PATH + 'react_logo.png' }} style={styles.sideMenuProfileIcon} /> */}
      <Image source={{ uri: 'https://static.pizzasushiwok.ru/images/logo.png' }} style={styles.sideMenuProfileIcon} />

      <DrawerContentScrollView {...props}>

        <DrawerItemList {...props} />

        <DrawerItem label="ScreenProfileMain" onPress={() => navigation.navigate('ScreenProfileMain') } />
        <DrawerItem label="Visit Us" onPress={() => Linking.openURL('https://aboutreact.com/')} />

        <View style={styles.customItem}>
          <Text onPress={() => {Linking.openURL('https://aboutreact.com/')}}>Rate Us</Text>
          <Image source={{ uri: BASE_PATH + 'star_filled.png' }} style={styles.iconStyle} />
        </View>

      </DrawerContentScrollView>

      <Text style={{fontSize: 16, textAlign: 'center', color: 'grey' }}>www.aboutreact.com</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});