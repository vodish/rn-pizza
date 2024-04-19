import { useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Linking } from "react-native";
import ScreenInset from "../components/screen-inset";
import { TScreenPlug } from "../utils/types";
import Counter from "../components/counter";
import { MobxIngredients } from "../mobx/mobx-ingredients";
import { observer } from 'mobx-react-lite'
import { Link } from '@react-navigation/native';
import { COLOR_LINK1 } from "../utils/const";

type TScreenAddressPoint = TScreenPlug & {
  route: {
    params?: 'new'
  }
}



export default observer(ScreenAddressPoint);

function ScreenAddressPoint({ navigation, route }: TScreenAddressPoint) {


  useEffect(() => {
    // MobxIngredients.fetch()
  }, [])


  let title = 'Добавить адрес'
  let address = ''

  if (route.params != 'new') {
    title = 'Изменить адрес'
    address = '5-я улица Ямского Поля, 7к2'
  }

  function handlerTrash() {
    alert('Удалить адрес?')
  }


  function handleAddressPress(newValue: string) {
    console.log(newValue)
  }


  return (
    <ScreenInset title={title} handleBack={navigation.goBack} handleTrash={address ? handlerTrash : null}>
      <View style={style.list}>

        <View style={[style.row]}>
          <Text style={style.label}>Адрес</Text>
          <TextInput style={style.input} onChangeText={handleAddressPress}>{address}</TextInput>
        </View>

        <View style={[style.row]}>
          <Text style={style.label}>Филиал</Text>
          <Text style={style.value}>Название филиала</Text>
        </View>


        <View style={style.submit}>
          <Button onPress={() => Linking.openURL('rnpizza://app/actions')} title="Linking /actions" />
        </View>

        <View style={style.submit}>
          {/* <Button onPress={() => navigation.navigate('StackAction', {screen: 'ScreenActionItem'})} title="В карточку акции" /> */}
          <Link to={{ screen: 'StackAction' }} style={style.textLink}>StackAction</Link>
          <Link to={{ screen: 'ScreenActionMain' }} style={style.textLink}>ScreenActionMain</Link>
          <Link to={{ screen: 'ScreenActionItem' }} style={style.textLink}>ScreenActionItem</Link>
        </View>


        <View style={style.submit}>
          <Button onPress={() => alert('Нажал кнопку')} title="Сохранить" />
        </View>

        <Counter />
        {/* <Text>{JSON.stringify(MobxIngredients.list, null, 2)}</Text> */}
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
    // backgroundColor: '#eee', borderRadius: 3,
    paddingVertical: 5, marginBottom: 10,
  },

  textLink: {
    color: COLOR_LINK1, textAlign: 'center',
    borderColor: COLOR_LINK1, borderWidth: 1, padding: 8, marginVertical: 5,
  },

  label: {
    fontSize: 12,
  },

  value: {
    paddingTop: 8, paddingRight: 3, paddingBottom: 5, paddingLeft: 0,
  },

  input: {
    backgroundColor: '#eee', borderRadius: 3,
    // borderBottomColor: '#aaa', borderBottomWidth: 1,
    paddingTop: 8, paddingRight: 3, paddingBottom: 5, paddingLeft: 10,
    marginTop: 5,
  },

  submit: {
    marginTop: 20, marginBottom: 10,
  },

  head: {
    marginTop: 20,
    fontWeight: 'bold',
  },

  line: {
    borderBottomWidth: 1, borderColor: '#eee',
    paddingBottom: 8,
  },

})