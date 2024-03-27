import { useState } from 'react';
import {
  Modal,
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';


export default function ModalAction() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <ImageBackground
      style={styles.container}
      blurRadius={isVisible ? 4 : 0}
      source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}>

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isVisible}
        // onRequestClose={() => console.log('Modal has been closed.')}
      >

        <View style={styles.modal}>
          <Text style={styles.text}>Modal is open!</Text>
          <Button
            title="Click To Close Modal"
            onPress={() => setIsVisible(!isVisible)}
          />
        </View>

      </Modal>

      <Button
        title="Click To Open Modal"
        onPress={() => setIsVisible(true)}
      />
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#606070',
    margin: 50,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
