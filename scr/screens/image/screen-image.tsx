import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Shoping from '../../components/svg/shoping';



export default function ScreenImage() {


  return (
    <ScrollView style={styles.container}>

      <View style={{ marginTop: 20 }} />

      <View style={styles.div}>
        <Image source={require('../../../assets/favicon.png')}></Image>
      </View>

      <Text>width: {widthDeviсe}</Text>


      <View style={styles.div}>
        <Shoping fill={'#777'} />
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
      </View>

    </ScrollView>
  );
}

const widthDeviсe = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    width: widthDeviсe / 2.2,
    height: widthDeviсe / 2.2,
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
