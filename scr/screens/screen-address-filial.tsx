import { Alert, Modal, Pressable, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenInset from "../components/screen-inset";
import { TScreenPlug, TAddress } from "../utils/types";
import { useState } from "react";
import { COLOR_LINK1 } from "../utils/const";
import SvgMap from "../components/svg/svg_map";


type ScreenAddressFilial = TScreenPlug & {
  route: {
    params: {
      el: TAddress
    }
  }
}

export default function ScreenAddressFilial({ navigation, route }: ScreenAddressFilial) {

  // console.log( JSON.stringify(route, null, 2) )
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <ScreenInset
      title={route.params.el.addressName}
      handleBack={navigation.goBack}
    >
      <View style={style.list}>

        <View style={[style.row, { paddingBottom: 0 }]}>
          <Text>Зона доставки</Text>
          <View style={style.map} />
        </View>

        <Text style={[style.row, style.head]}>Адрес филиала</Text>

        <View style={[style.row, style.line, style.two]}>
          <Text>5-я улица Ямского Поля, 7к2</Text>
          <Pressable onPress={() => { Linking.openURL('https://yandex.ru/maps/?text=5-я улица Ямского Поля, 7к2') }}>
            <SvgMap width={22} height={22} fill={COLOR_LINK1} />
          </Pressable>
        </View>

        <View style={[style.row, style.line, style.two]}>
          <Text>Режим работы</Text>
          <Text>9:00 &mdash; 21:00</Text>
        </View>

        <View style={[style.row, style.line, style.two]}>
          <Text>Бесплатная доставка</Text>
          <Text>8:00 &mdash; 05:00</Text>
        </View>


        <Text style={[style.row, style.head]}>Мои адреса</Text>


        <TouchableOpacity style={[style.row, style.line]} onPress={() => navigation.navigate({name: 'ScreenAddressPoint', params: 'new'})}>
          <Text style={style.link}>Добавить адрес доставки</Text>
        </TouchableOpacity>



        {/*         
        <TouchableOpacity style={[style.row, style.line]} onPress={() => setModalVisible(true)}>
          <Text>Добавить адрес доставки</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>

          <View style={style.modal}>
            <Text style={{ color: 'lime' }}>Hello World!</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text >Hide Modal</Text>
            </Pressable>
          </View>

        </Modal> */}



      </View>
    </ScreenInset>
  )
}




const style = StyleSheet.create({
  list: {
    marginHorizontal: 20,
  },

  row: {
    // borderWidth: 1, borderColor: 'red',
    // borderBottomWidth: 1, borderBottomColor: '#eee',
    paddingVertical: 10,
  },

  head: {
    marginTop: 20,
    fontWeight: 'bold',
  },

  line: {
    borderBottomWidth: 1, borderColor: '#eee',
    paddingBottom: 8,
  },

  two: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
  },

  map: {
    width: 'auto', height: 100, marginTop: 5,
    borderColor: '#ccc', borderWidth: 1, backgroundColor: '#eee',

  },

  link: {
    color: COLOR_LINK1
  },

  modal: {
    position: 'absolute', bottom: 0,
    width: '100%', height: '40%',
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'lime',
  },

})