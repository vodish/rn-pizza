import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Copy from './scr/components/svg/Copy';
import Shoping from './scr/components/svg/shoping';
// import Copy from './assets/Copy.svg'




export default function App() {


  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Open 12</Text>
      </View>

      <View style={styles.divimg}>
        <Image
          source={{ uri: 'https://api.supergood.ru/getFileNew.php?uid=OUKUU4OApl&w=200' }}
          style={styles.img}
        />
        <Image
          source={{ uri: 'https://api.supergood.ru/getFileNew.php?uid=tMxIoPTaMZ&w=200' }}
          style={styles.img}
        />
        {/* <Image
          source={{ uri: 'https://api.supergood.ru/getFileNew.php?uid=OUKUU4OApl&w=200' }}
          style={styles.img}
        />
        <Image
          source={{ uri: 'https://api.supergood.ru/getFileNew.php?uid=tMxIoPTaMZ&w=200' }}
          style={styles.img}
        />
        <Image
          source={{ uri: 'https://api.supergood.ru/getFileNew.php?uid=OUKUU4OApl&w=200' }}
          style={styles.img}
        />
        <Image
          source={{ uri: 'https://api.supergood.ru/getFileNew.php?uid=tMxIoPTaMZ&w=200' }}
          style={styles.img}
        /> */}
      </View>


      <View style={styles.div}>
        <Image source={require('./assets/favicon.png')}></Image>
      </View>

      <View style={styles.div}>
        <Shoping fill={'#777'} />
      </View>

      <Text>width: {width}</Text>

      <StatusBar style="auto" backgroundColor='#eee' />
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  divimg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 15,
    // borderWidth: 1,
    borderColor: '#ccc',
    // width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  img: {
    width: width / 2.2,
    height: width / 2.2,
    // borderWidth: 1,
    borderColor: 'red',
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
