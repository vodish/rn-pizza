import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenInset from "../../../../components/screen-inset/screen-inset";
import { dataAddress } from "../../../../utils/data";
import SvgRadioButtonChecked from "../../../../components/svg/svg_radio_button_checked";


export default function ScreenAddressFilialList() {

  return (
    <ScreenInset title="Филиалы">
      <View style={style.list}>
        {dataAddress.map((el, key) => {
          return (
            <View key={key} style={[style.row, {borderTopWidth: key? 1: 0}]}>
              <Text style={style[el.type]}>{el.addressName}</Text>
              <TouchableOpacity style={style.filialSelect} onPress={() => alert(`Выбран ${el.addressName}`)}>
                <SvgRadioButtonChecked circleFill="#777" pointFill={!key ? '#000' : 'none'} />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </ScreenInset>
  )
}


const style = StyleSheet.create({
  list: {
    // borderWidth: 1, borderColor: 'red', 
    paddingBottom: 10,
  },
  row: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10,
    marginHorizontal: 20,
    borderTopWidth: 1, borderColor: '#eee',
  },
  filial: {
    // borderWidth: 1, borderColor: 'red', 
    flexGrow: 1, paddingVertical: 15,
    fontSize: 16, fontWeight: '600',
  },
  address: {
    // borderWidth: 1, borderColor: 'red', 
    flexGrow: 1, paddingVertical: 10, paddingLeft: 15,
  },

  filialSelect: {
    // borderWidth: 1, borderColor: 'red', 
    // padding: 10,
  },


})