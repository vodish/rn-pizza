import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenInset from "../components/screen-inset";
import { Screen1, TAddress } from "../utils/types";
import { useState } from "react";


type ScreenAddressFilialCard = Screen1 & {
  route: {
    params: {
      el: TAddress
    }
  }
}

export default function ScreenAddressFilialCard({ navigation, route }: ScreenAddressFilialCard) {

  // console.log( JSON.stringify(route, null, 2) )
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <ScreenInset
      title={route.params.el.addressName}
      handleBack={navigation.goBack}
    >
      <View style={style.list}>

        <View style={style.row}>
          <Text>Зона доставки</Text>
          <View style={style.map} />
        </View>

        <View style={[style.row, style.line]}>
          <Text>Адрес филиала</Text>
          <Text>Какая-то улица, 21</Text>
        </View>

        <View style={[style.row, style.line, style.two]}>
          <Text>Режим работы</Text>
          <Text>с 9:00 -- 21:00</Text>
        </View>

        <View style={[style.row, style.line, style.two]}>
          <Text>Бесплатная доставка</Text>
          <Text>с 08:00 -- 05:00</Text>
        </View>

        <Pressable style={[style.row, style.line]} onPress={() => setModalVisible(true)}>
          <Text>Добавить адрес доставки</Text>
        </Pressable>



        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>

          <View style={style.modal}>
            <View>
              <Text style={{color: 'lime'}}>Hello World!</Text>
              <Pressable
                
                onPress={() => setModalVisible(!modalVisible)}>
                <Text >Hide Modal</Text>
              </Pressable>
            </View>
          </View>

        </Modal>



      </View>
    </ScreenInset>
  )
}




const style = StyleSheet.create({
  list: {
    // borderWidth: 1, borderColor: 'red',
    marginHorizontal: 20,
  },
  row: {
    // borderBottomWidth: 1, borderBottomColor: '#eee',
    marginTop: 10, marginBottom: 10,
  },
  
  line: {
    borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 8,
  },
  
  two: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
  },
  
  map: {
    width: 'auto', height: 150, marginTop: 5,
    borderColor: '#ccc', borderWidth:  1, backgroundColor: '#eee',
    
  },

  modal: {
    width: '100%', height: '40%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'lime',
    position: 'absolute', bottom: 0,
  }

})