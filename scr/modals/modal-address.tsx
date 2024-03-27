import { useState } from 'react';
import {  View,  Text,  StyleSheet,  ImageBackground, } from 'react-native';


export default function ModalAddress() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.container} >

      <Text style={styles.text}>Modal is open!!</Text>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%', height: '40%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
    // position: 'absolute', bottom: 0, zIndex: -1,
  },
  text: {
    color: 'lime',
    // marginTop: 10,
    marginBottom: 20,
  },
});
