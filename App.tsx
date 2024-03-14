import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Copy from './scr/components/svg/Copy';
import Shoping from './scr/components/svg/shoping';
// import Copy from './assets/Copy.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open 12</Text>


      <View style={styles.div}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: '100%', height: 100 }}
        />
      </View>

      <View style={styles.div}>
        <Image source={require('./assets/favicon.png')}></Image>
      </View>
      
      <View style={styles.div}>
        <Shoping fill={'#777'} />
      </View>
      
      <View style={styles.div}>
        <Copy width="100" height="100" stroke={`#777`} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    marginVertical: 10,
  },
  svgCopy: {
    width: 420,
    height: 400,
    borderWidth: 1,
    borderColor: 'red',
  }
});
