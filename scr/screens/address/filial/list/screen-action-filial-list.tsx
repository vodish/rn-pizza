import { StyleSheet, Text, View, ScrollView } from "react-native";
import ScreenInset from "../../../../components/screen-inset/screen-inset";
import { dataAddress } from "../../../../utils/data";


export default function ScreenAddressFilialList() {

  return(
    <ScreenInset title="Филиалы">
      
      {dataAddress.map( (el, key) => {
        return(
          <View key={key} style={style.row}>
            <Text>{el.name}</Text>
            <Text>[ 12 ]</Text>
          </View>
        )
      } )}
      
    </ScreenInset>
  )
}


const style = StyleSheet.create({
  screen: { borderWidth: 1, borderColor: 'red' },
  row: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
  }
})