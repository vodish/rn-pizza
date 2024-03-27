import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SvgArrowBackIosNew from "./svg/svg_arrow_back_ios_new";
import SvgDelete from "./svg/svg_delete";
import { COLOR_LINK1 } from "../utils/const";


type TScreenInset = {
  title: string,
  handleBack?(): void,
  handleTrash?(): void,
  children: React.JSX.Element
}


export default function ScreenInset({ title, handleBack, handleTrash, children }: TScreenInset) {

  const insets = useSafeAreaInsets()


  return (
    <View style={[style.screen, { paddingTop: insets.top, }]}>
      <View style={style.header}>

        {handleBack &&
          <TouchableOpacity style={style.back} onPress={handleBack}>
            <SvgArrowBackIosNew width={20} height={20} />
          </TouchableOpacity>
        }

        <Text style={style.title}>{title}</Text>

        {handleTrash &&
          <TouchableOpacity style={style.right} onPress={handleTrash}>
            <SvgDelete width={24} height={24} />
          </TouchableOpacity>
        }

      </View>
      <ScrollView style={[style.body]}>
        {children}
      </ScrollView>
    </View>
  )
}


const style = StyleSheet.create({
  border: { borderWidth: 1, borderColor: 'red' },

  screen: {
    // borderWidth: 1, borderColor: 'red',
    backgroundColor: 'white',
    flex: 1,
  },

  header: {
    // borderWidth: 1, borderColor: 'red',
    borderBottomWidth: 1, borderColor: '#eee',
    display: 'flex', flexDirection: 'row', alignItems: 'center',
    height: 44,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  back: {
    // borderWidth: 1, borderColor: 'red',
    padding: 10, marginLeft: -15, marginRight: 10,
  },

  right: {
    // borderWidth: 1, borderColor: 'red',
    marginLeft: 'auto',
  },


  body: {
    paddingTop: 5,
    // borderWidth: 1, borderColor: 'green',

  },


})