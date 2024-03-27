import { Text, TouchableOpacity, View } from "react-native";
import { style } from './screen-action-filial-list.style'
import ScreenInset from "../components/screen-inset";
import { dataAddress } from "../utils/data";
import SvgRadioButtonChecked from "../components/svg/svg_radio_button_checked";
import { TAddress } from "../utils/types";


export default function ScreenAddressFilialList({ navigation }) {


  function handleNavigate(el: TAddress) {

    if (el.type == 'filial')
      navigation.navigate({name: 'ScreenAddressFilialCard', params: {el}})

    else if (el.type == 'address')
      navigation.navigate({name: 'ScreenAddressPoint', params: {el}})

  }
  

  return (
    <ScreenInset title="Филиалы">
      <View style={style.list}>

        {dataAddress.map((el, key) => {
          return (
            <View key={key} style={[style.row, { borderTopWidth: key ? 1 : 0 }]}>

              <TouchableOpacity style={style.name} onPress={() => handleNavigate(el)}>
                <Text style={style[el.type]}>{el.addressName}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.select} onPress={() => alert(`Выбран ${el.addressName}`)}>
                <SvgRadioButtonChecked circleFill="#777" pointFill={!key ? '#000' : 'none'} />
              </TouchableOpacity>

            </View>
          )
        })}

      </View>
    </ScreenInset>
  )
}

